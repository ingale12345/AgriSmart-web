import { cn } from "@/lib/utils";

export type PageSectionProps = {
  title: string | React.ReactNode;
  children: React.ReactNode;
  className?: string; // unified className
  titleClassName?: string;
};

export default function PageWrapper({
  title,
  children,
  className = "",
  titleClassName = "",
}: PageSectionProps) {
  console.log("className is ", className);
  return (
    <div className={cn("p-6", className)}>
      {typeof title === "string" ? (
        <span
          className={cn(
            "flex mb-6 text-3xl font-bold tracking-tight w-full  text-start",
            titleClassName
          )}
        >
          {title}
        </span>
      ) : (
        title
      )}
      {children}
    </div>
  );
}
