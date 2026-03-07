export type DistanceUnit = "miles" | "kilometers" | "meters";

export const distanceUnitOptions: {
  value: DistanceUnit;
  label: string;
  short: string;
}[] = [
  { value: "miles", label: "Miles", short: "mi" },
  { value: "kilometers", label: "Kilometers", short: "km" },
  { value: "meters", label: "Meters", short: "m" },
];

export const distanceBadges: Record<
  DistanceUnit,
  Array<{ label: string; value: string }>
> = {
  kilometers: [
    { label: "1km", value: "1" },
    { label: "5km", value: "5" },
    { label: "10km", value: "10" },
    { label: "Half Marathon", value: "21.0975" },
    { label: "Marathon", value: "42.195" },
  ],
  meters: [
    { label: "100m", value: "100" },
    { label: "200m", value: "200" },
    { label: "400m", value: "400" },
    { label: "500m", value: "500" },
    { label: "600m", value: "600" },
    { label: "800m", value: "800" },
    { label: "1km", value: "1000" },
  ],
  miles: [
    { label: "1 mile", value: "1" },
    { label: "3 mile", value: "3" },
    { label: "5 mile", value: "5" },
    { label: "10 mile", value: "10" },
    { label: "Half Marathon", value: "13.1" },
    { label: "Marathon", value: "26.2" },
  ],
};

export const TIME_HOUR_OPTIONS = Array.from({ length: 11 }, (_, i) =>
  i.toString().padStart(2, "0")
);
export const TIME_MINUTE_SECOND_OPTIONS = Array.from({ length: 12 }, (_, i) =>
  (i * 5).toString().padStart(2, "0")
);

export function parseTime(value: string): { h: string; m: string; s: string } {
  if (!value) return { h: "", m: "", s: "" };
  const parts = value.split(":");
  return {
    h: parts[0]?.replace(/\D/g, "").slice(0, 2) ?? "",
    m: parts[1]?.replace(/\D/g, "").slice(0, 2) ?? "",
    s: parts[2]?.replace(/\D/g, "").slice(0, 2) ?? "",
  };
}

export function formatTime(h: string, m: string, s: string): string {
  const H = (h || "00").padStart(2, "0");
  const M = (m || "00").padStart(2, "0");
  const S = (s || "00").padStart(2, "0");
  return `${H}:${M}:${S}`;
}

export function clampHours(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(-2);
  return digits;
}

export function clampMinutesOrSeconds(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(-2);
  if (digits.length === 0) return "";
  if (digits.length === 1) return digits[0] <= "5" ? digits : "5";
  const first = digits[0] > "5" ? "5" : digits[0];
  const value = first + digits[1];
  const num = parseInt(value, 10);
  return num <= 59 ? value : "59";
}

const DISTANCE_INT_MAX = 6;
const DISTANCE_DEC_MAX = 3;

export function parseDistanceInput(raw: string): string {
  const normalized = raw
    .replace(/\s/g, "")
    .replace(/,/g, ".")
    .replace(/[^\d.]/g, "");
  const firstDot = normalized.indexOf(".");

  if (firstDot === -1) {
    const intDigits = normalized.replace(/\./g, "").slice(0, DISTANCE_INT_MAX);
    return intDigits || "";
  }

  const int = normalized
    .slice(0, firstDot)
    .replace(/\./g, "")
    .slice(0, DISTANCE_INT_MAX);
  const afterDot = normalized
    .slice(firstDot + 1)
    .replace(/\./g, "")
    .slice(0, DISTANCE_DEC_MAX);
  return `${int || "0"}.${afterDot}`;
}

export function formatDistanceDisplay(value: string): string {
  if (!value) return "";
  const parts = value.split(".");
  const intPart = (parts[0] ?? "0").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const hasDecimalSep = parts.length > 1;
  const decPart = (parts[1] ?? "").slice(0, DISTANCE_DEC_MAX);
  if (!hasDecimalSep) return intPart;
  return decPart.length ? `${intPart}.${decPart}` : `${intPart}.`;
}

export function countLogicalBefore(str: string, position: number): number {
  let count = 0;
  for (let i = 0; i < position && i < str.length; i++) {
    if (/[\d.,]/.test(str[i])) count++;
  }
  return count;
}

export function positionForLogicalIndex(
  formattedStr: string,
  logicalIndex: number
): number {
  if (logicalIndex <= 0) return 0;
  let count = 0;
  for (let i = 0; i < formattedStr.length; i++) {
    if (/\d|[,.]/.test(formattedStr[i])) count++;
    if (count === logicalIndex) return i + 1;
  }
  return formattedStr.length;
}
