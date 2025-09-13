import { useId } from "react";

type NumberInputProps = {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  format?: (v: number) => string;
  disabled?: boolean;
};

/**
 * Combined slider + number field, stays in sync.
 */
export default function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  format = (v) => String(v),
  disabled = false,
}: NumberInputProps) {
  const id = useId();

  function clamp(val: number) {
    if (min !== undefined && val < min) val = min;
    if (max !== undefined && val > max) val = max;
    return val;
  }

  return (
    <label htmlFor={id} className="flex items-center gap-3">
      <span className="w-40 text-sm text-gray-700">{label}</span>
      <input
        id={id}
        type="range"
        className="w-full"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(clamp(Number(e.target.value)))}
        disabled={disabled}
      />
      <input
        type="number"
        className="w-24 px-2 py-1 border rounded-md text-sm"
        value={Number.isFinite(value) ? value : 0}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(clamp(Number(e.target.value)))}
        disabled={disabled}
      />
      <span className="w-16 text-right text-xs text-gray-500">{format(value)}</span>
    </label>
  );
}
