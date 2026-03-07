"use client";

import { useRef, useState } from "react";

import { Field } from "@/components/ui/field";
import {
  InputGroupAddon,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxCollection,
} from "@/components/ui/combobox";
import {
  TIME_HOUR_OPTIONS,
  TIME_MINUTE_SECOND_OPTIONS,
  clampHours,
  clampMinutesOrSeconds,
  formatTime,
  parseTime,
} from "@/lib/calculator-utils";

type TimeInputProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholderTime: string;
  hourShort: string;
  minuteShort: string;
  secondShort: string;
  comboboxEmpty: string;
  /** "full" = Field + Label + grid 4+4+4; "inline" = só grid 3+3+3 (para usar ao lado do select de unidade) */
  variant?: "full" | "inline";
};

export function TimeInput({
  value,
  onChange,
  label,
  placeholderTime,
  hourShort,
  minuteShort,
  secondShort,
  comboboxEmpty,
  variant = "full",
}: TimeInputProps) {
  const { h, m, s } = parseTime(value);
  const [hOpen, setHOpen] = useState(false);
  const [mOpen, setMOpen] = useState(false);
  const [sOpen, setSOpen] = useState(false);
  const hInputRef = useRef("");
  const mInputRef = useRef("");
  const sInputRef = useRef("");

  const gridCols = variant === "inline" ? "grid-cols-3" : "grid-cols-12";
  const colSpan = variant === "inline" ? "min-w-0" : "col-span-4 min-w-0";

  const content = (
    <>
        <div className={colSpan}>
          <Combobox
            value={h === "00" ? undefined : h}
            inputValue={hOpen ? undefined : (h === "00" ? "" : h)}
            open={hOpen}
            onOpenChange={(open) => {
              setHOpen(open);
              if (open) hInputRef.current = h;
              else {
                const raw = hInputRef.current ?? h;
                const clamped = clampHours(raw);
                onChange(formatTime(clamped ? clamped.padStart(2, "0") : "00", m, s));
              }
            }}
            onValueChange={(v) => {
              onChange(formatTime(v ?? "00", m, s));
            }}
            onInputValueChange={(inputValue) => {
              hInputRef.current = clampHours(inputValue);
            }}
            items={TIME_HOUR_OPTIONS}
            filteredItems={TIME_HOUR_OPTIONS}
          >
            <ComboboxInput
              placeholder={placeholderTime}
              className="h-11 [&_input]:text-lg [&_input]:md:text-lg"
              showTrigger={false}
              showClear={false}
              maxLength={2}
            >
              <InputGroupAddon align="inline-end" className="pr-3">
                <InputGroupText className="text-muted-foreground">{hourShort}</InputGroupText>
              </InputGroupAddon>
            </ComboboxInput>
            <ComboboxContent>
              <ComboboxList>
                <ComboboxCollection>
                  {(item: string) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxList>
              <ComboboxEmpty>{comboboxEmpty}</ComboboxEmpty>
            </ComboboxContent>
          </Combobox>
        </div>
        <div className={colSpan}>
          <Combobox
            value={m === "00" ? undefined : m}
            inputValue={mOpen ? undefined : (m === "00" ? "" : m)}
            open={mOpen}
            onOpenChange={(open) => {
              setMOpen(open);
              if (open) mInputRef.current = m;
              else {
                const raw = mInputRef.current ?? m;
                const clamped = clampMinutesOrSeconds(raw);
                onChange(formatTime(h, clamped ? clamped.padStart(2, "0") : "00", s));
              }
            }}
            onValueChange={(v) => {
              onChange(formatTime(h, v ?? "00", s));
            }}
            onInputValueChange={(inputValue) => {
              mInputRef.current = clampMinutesOrSeconds(inputValue);
            }}
            items={TIME_MINUTE_SECOND_OPTIONS}
            filteredItems={TIME_MINUTE_SECOND_OPTIONS}
          >
            <ComboboxInput
              placeholder={placeholderTime}
              className="h-11 [&_input]:text-lg [&_input]:md:text-lg"
              showTrigger={false}
              showClear={false}
              maxLength={2}
            >
              <InputGroupAddon align="inline-end" className="pr-3">
                <InputGroupText className="text-muted-foreground">{minuteShort}</InputGroupText>
              </InputGroupAddon>
            </ComboboxInput>
            <ComboboxContent>
              <ComboboxList>
                <ComboboxCollection>
                  {(item: string) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxList>
              <ComboboxEmpty>{comboboxEmpty}</ComboboxEmpty>
            </ComboboxContent>
          </Combobox>
        </div>
        <div className={colSpan}>
          <Combobox
            value={s === "00" ? undefined : s}
            inputValue={sOpen ? undefined : (s === "00" ? "" : s)}
            open={sOpen}
            onOpenChange={(open) => {
              setSOpen(open);
              if (open) sInputRef.current = s;
              else {
                const raw = sInputRef.current ?? s;
                const clamped = clampMinutesOrSeconds(raw);
                onChange(formatTime(h, m, clamped ? clamped.padStart(2, "0") : "00"));
              }
            }}
            onValueChange={(v) => {
              onChange(formatTime(h, m, v ?? "00"));
            }}
            onInputValueChange={(inputValue) => {
              sInputRef.current = clampMinutesOrSeconds(inputValue);
            }}
            items={TIME_MINUTE_SECOND_OPTIONS}
            filteredItems={TIME_MINUTE_SECOND_OPTIONS}
          >
            <ComboboxInput
              placeholder={placeholderTime}
              className="h-11 [&_input]:text-lg [&_input]:md:text-lg"
              showTrigger={false}
              showClear={false}
              maxLength={2}
            >
              <InputGroupAddon align="inline-end" className="pr-3">
                <InputGroupText className="text-muted-foreground">{secondShort}</InputGroupText>
              </InputGroupAddon>
            </ComboboxInput>
            <ComboboxContent>
              <ComboboxList>
                <ComboboxCollection>
                  {(item: string) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxList>
              <ComboboxEmpty>{comboboxEmpty}</ComboboxEmpty>
            </ComboboxContent>
          </Combobox>
        </div>
    </>
  );

  const grid = (
    <div className={`grid ${gridCols} gap-2`}>
      {content}
    </div>
  );

  if (variant === "inline") {
    return grid;
  }

  return (
    <Field className="p-0 sm:col-span-3">
      {label != null && <Label>{label}</Label>}
      {grid}
    </Field>
  );
}
