import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
  center?: boolean;
}

export function SectionTitle({
  title,
  description,
  className,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-16",
      center && "text-center",
      center && "mx-auto",
      center && "max-w-3xl",
      className
    )}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className={cn("w-20 h-1 bg-primary mb-6", center && "mx-auto")}></div>
      {description && (
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  );
}
