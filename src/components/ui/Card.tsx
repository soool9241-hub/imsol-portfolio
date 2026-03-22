interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export default function Card({ children, className = "", highlight = false, ...rest }: CardProps) {
  return (
    <div
      className={`bg-card border rounded-2xl p-5 transition-all duration-300 ${
        highlight ? "border-primary" : "border-border"
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
