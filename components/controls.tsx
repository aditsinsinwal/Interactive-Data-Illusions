import { ReactNode } from "react";

type ControlsProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Controls({ title, description, children }: ControlsProps) {
  return (
    <section className="bg-white border rounded-2xl p-4 shadow-sm">
      {(title || description) && (
        <div className="mb-3">
          {title && <h3 className="text-sm font-semibold text-gray-800">{title}</h3>}
          {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
        </div>
      )}
      <div className="grid gap-3">{children}</div>
    </section>
  );
}
