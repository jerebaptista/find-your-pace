"use client";

import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { TimeInput } from "@/components/calculator/time-input";
import { formatTime, parseTime } from "@/lib/calculator-utils";

type PaceVelocityInputProps<PaceUnit extends string, VelocityUnit extends string> = {
  mode: "pace" | "velocity";
  onModeChange: (mode: "pace" | "velocity") => void;
  paceH: string;
  paceM: string;
  paceS: string;
  paceUnit: PaceUnit;
  onPaceHChange: (v: string) => void;
  onPaceMChange: (v: string) => void;
  onPaceSChange: (v: string) => void;
  onPaceUnitChange: (v: PaceUnit) => void;
  velocityValue: string;
  velocityUnit: VelocityUnit;
  onVelocityValueChange: (v: string) => void;
  onVelocityUnitChange: (v: VelocityUnit) => void;
  togglePaceLabel: string;
  toggleVelocityLabel: string;
  placeholderTime: string;
  placeholderDistance: string;
  hourShort: string;
  minuteShort: string;
  secondShort: string;
  comboboxEmpty: string;
  paceOptionLabel: Record<PaceUnit, string>;
  paceOptionShort: Record<PaceUnit, string>;
  velocityOptionLabel: Record<VelocityUnit, string>;
  velocityOptionShort: Record<VelocityUnit, string>;
  paceOnlyOptions: readonly PaceUnit[];
  velocityOnlyOptions: readonly VelocityUnit[];
};

export function PaceVelocityInput<PaceUnit extends string, VelocityUnit extends string>({
  mode,
  onModeChange,
  paceH,
  paceM,
  paceS,
  paceUnit,
  onPaceHChange,
  onPaceMChange,
  onPaceSChange,
  onPaceUnitChange,
  velocityValue,
  velocityUnit,
  onVelocityValueChange,
  onVelocityUnitChange,
  togglePaceLabel,
  toggleVelocityLabel,
  placeholderTime,
  placeholderDistance,
  hourShort,
  minuteShort,
  secondShort,
  comboboxEmpty,
  paceOptionLabel,
  paceOptionShort,
  velocityOptionLabel,
  velocityOptionShort,
  paceOnlyOptions,
  velocityOnlyOptions,
}: PaceVelocityInputProps<PaceUnit, VelocityUnit>) {
  const handlePaceTimeChange = (value: string) => {
    const { h, m, s } = parseTime(value);
    onPaceHChange(h);
    onPaceMChange(m);
    onPaceSChange(s);
  };

  return (
    <Field className="p-0 sm:col-span-3">
      <div className="flex items-center gap-1.5">
        <Toggle
          type="button"
          size="sm"
          variant="outline"
          pressed={mode === "pace"}
          onPressedChange={(pressed) => pressed && onModeChange("pace")}
          className="border-0 data-[state=off]:bg-transparent data-[state=off]:hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:ring-1 data-[state=on]:ring-inset data-[state=on]:ring-input"
        >
          {togglePaceLabel}
        </Toggle>
        <Toggle
          type="button"
          size="sm"
          variant="outline"
          pressed={mode === "velocity"}
          onPressedChange={(pressed) => pressed && onModeChange("velocity")}
          className="border-0 data-[state=off]:bg-transparent data-[state=off]:hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:ring-1 data-[state=on]:ring-inset data-[state=on]:ring-input"
        >
          {toggleVelocityLabel}
        </Toggle>
      </div>
      <div className="mt-1 grid grid-cols-12 gap-2 items-center">
        {mode === "pace" ? (
          <>
            <div className="col-span-9 min-w-0">
              <TimeInput
                variant="inline"
                value={formatTime(paceH, paceM, paceS)}
                onChange={handlePaceTimeChange}
                placeholderTime={placeholderTime}
                hourShort={hourShort}
                minuteShort={minuteShort}
                secondShort={secondShort}
                comboboxEmpty={comboboxEmpty}
              />
            </div>
            <div className="col-span-3">
              <Select value={paceUnit} onValueChange={(v) => onPaceUnitChange(v as PaceUnit)}>
                <SelectTrigger className="h-11 w-full min-w-0 text-base data-[size=default]:h-11">
                  <SelectValue>/{paceOptionShort[paceUnit]}</SelectValue>
                </SelectTrigger>
                <SelectContent position="popper" side="bottom" sideOffset={6}>
                  {paceOnlyOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{paceOptionLabel[opt]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        ) : (
          <>
            <div className="col-span-9 flex h-11 min-w-0 items-center rounded-lg border border-input bg-transparent transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
              <input
                type="text"
                inputMode="decimal"
                placeholder={placeholderDistance}
                maxLength={4}
                className="h-11 w-full min-w-0 rounded-lg border-0 bg-transparent px-2.5 text-lg outline-none [appearance:textfield]"
                value={velocityValue}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                  onVelocityValueChange(v);
                }}
              />
            </div>
            <div className="col-span-3">
              <Select value={velocityUnit} onValueChange={(v) => onVelocityUnitChange(v as VelocityUnit)}>
                <SelectTrigger className="h-11 w-full min-w-0 text-base data-[size=default]:h-11">
                  <SelectValue>{velocityOptionShort[velocityUnit]}</SelectValue>
                </SelectTrigger>
                <SelectContent position="popper" side="bottom" sideOffset={6}>
                  {velocityOnlyOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{velocityOptionLabel[opt]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}
      </div>
    </Field>
  );
}
