type LegendItem = {
  color: string; // e.g., "#2563eb"
  label: string; // e.g., "Group 1 slope = 0.62"
  dashed?: boolean;
};

type LegendProps = {
  items: LegendItem[];
  align?: "left" | "right";
};

export default function Legend({ items, align = "right" }: LegendProps) {
  return (
    <div
      className={[
        "bg-white/90 backdrop-blur border rounded-xl px-3 py-2 text-xs shadow-sm",
        align === "right" ? "ml-auto" : "",
        "w-max",
      ].join(" ")}
    >
      <ul className="space-y-1">
        {items.map((it, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-6"
              style={{
                background: it.dashed ? "transparent" : it.color,
                border: `2px ${it.dashed ? "dashed" : "solid"} ${it.color}`,
                borderRadius: 2,
              }}
            />
            <span className="text-gray-700">{it.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
