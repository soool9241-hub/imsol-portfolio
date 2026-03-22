interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {/* Decorative line */}
      <div className="w-10 h-[2px] bg-primary mb-4" />

      <span className="inline-block font-mono text-primary text-xs tracking-[4px] uppercase mb-4 px-3 py-1 rounded-full bg-primary/8 border border-primary/10">
        {label}
      </span>

      <h2 className="text-4xl font-black text-white mb-3 tracking-tight">{title}</h2>

      {subtitle && (
        <div className="relative">
          <p className="text-dim text-sm">{subtitle}</p>
          <div className="mt-4 h-8 bg-gradient-to-b from-transparent to-background/0 pointer-events-none" />
        </div>
      )}
    </div>
  );
}
