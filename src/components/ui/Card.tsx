interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  variant?: "default" | "glass";
}

export default function Card({ children, className = "", highlight = false, variant = "default", ...rest }: CardProps) {
  const baseClasses = "rounded-2xl p-5 transition-all duration-300 hover:shadow-[inset_0_0_30px_rgba(64,145,108,0.05)]";

  const variantClasses = variant === "glass"
    ? "glass"
    : "bg-card border";

  const borderClasses = highlight
    ? "border-primary"
    : variant === "glass"
      ? ""
      : "border-border hover:border-primary/30";

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${borderClasses} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
