"use client";

import { useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  type DistanceUnit,
  distanceBadges as defaultDistanceBadges,
  distanceUnitOptions,
  formatDistanceDisplay,
  parseDistanceInput,
  countLogicalBefore,
  positionForLogicalIndex,
} from "@/lib/calculator-utils";

type DistanceInputProps = {
  value: string;
  unit: DistanceUnit;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: DistanceUnit) => void;
  label: string;
  id: string;
  placeholderDistance: string;
  unitLabel: Record<DistanceUnit, string>;
  /** Badges por unidade (traduzidos). Se omitido, usa os padrões em inglês. */
  distanceBadges?: Record<DistanceUnit, Array<{ label: string; value: string }>>;
};

export function DistanceInput({
  value,
  unit,
  onValueChange,
  onUnitChange,
  label,
  id,
  placeholderDistance,
  unitLabel,
  distanceBadges: distanceBadgesProp,
}: DistanceInputProps) {
  const distanceBadges = distanceBadgesProp ?? defaultDistanceBadges;
  const [popoverOpen, setPopoverOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextCursorRef = useRef<number | null>(null);

  return (
    <Field className="p-0 sm:col-span-3">
      <Label htmlFor={id}>{label}</Label>
      <div className="grid grid-cols-12 gap-2">
        <div className="relative col-span-9">
          <div
            className="flex h-11 items-center gap-0 rounded-lg border border-input bg-transparent transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 [&:has(input:focus)]:border-ring [&:has(input:focus)]:ring-3 [&:has(input:focus)]:ring-ring/50"
            onFocus={() => setPopoverOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setTimeout(() => setPopoverOpen(false), 180);
              }
            }}
          >
            <input
              ref={inputRef}
              id={id}
              type="text"
              inputMode="decimal"
              placeholder={placeholderDistance}
              maxLength={12}
              className="h-11 w-full rounded-lg border-0 bg-transparent px-2.5 text-lg outline-none [appearance:textfield]"
              value={formatDistanceDisplay(value)}
              onChange={(e) => {
                const raw = e.target.value;
                const cursor = e.target.selectionStart ?? 0;
                const parsed = parseDistanceInput(raw);
                const logicalIndex = countLogicalBefore(raw, cursor);
                const formatted = formatDistanceDisplay(parsed);
                nextCursorRef.current = positionForLogicalIndex(formatted, logicalIndex);
                onValueChange(parsed);
              }}
            />
          </div>
          {popoverOpen && (
            <div className="absolute top-full left-0 z-10 mt-1.5 flex flex-wrap gap-2 rounded-lg border border-border bg-popover p-2 shadow-md ring-1 ring-foreground/10">
              {distanceBadges[unit].map((badge) => (
                <Badge
                  key={badge.label}
                  asChild
                  variant="secondary"
                  className="text-sm"
                >
                  <button
                    type="button"
                    onClick={() => {
                      onValueChange(parseDistanceInput(badge.value));
                      setPopoverOpen(false);
                    }}
                  >
                    {badge.label}
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-3">
          <Select value={unit} onValueChange={(v) => onUnitChange(v as DistanceUnit)}>
            <SelectTrigger className="h-11 w-full min-w-0 text-base data-[size=default]:h-11">
              <SelectValue>
                {distanceUnitOptions.find((o) => o.value === unit)?.short}
              </SelectValue>
            </SelectTrigger>
            <SelectContent position="popper" side="bottom" sideOffset={6}>
              {distanceUnitOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {unitLabel[option.value]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Field>
  );
}
