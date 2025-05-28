import { cn } from "@/lib/utils";

export type PageHeaderProps = {
  title: string | React.ReactNode;
  pageHeaderCSS?: string;
  pageTitleCSS?: string;
};

export function PageHeader({
  title,
  pageHeaderCSS = "",
  pageTitleCSS = "",
}: PageHeaderProps) {
  return (
    <div className={cn("mb-6 text-start", pageHeaderCSS)}>
      {typeof title === "string" ? (
        <span className={cn("text-3xl font-bold tracking-tight", pageTitleCSS)}>
          {title}
        </span>
      ) : (
        title
      )}
    </div>
  );
}
