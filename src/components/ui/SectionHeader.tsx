interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="font-mono text-primary text-xs tracking-[4px] uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl font-black text-white mb-2">{title}</h2>
      {subtitle && <p className="text-dim text-sm">{subtitle}</p>}
    </div>
  );
}
