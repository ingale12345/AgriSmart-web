import { cn } from "@/lib/utils";
import { PageHeader, type PageHeaderProps } from "./PageHeader";
type PageWrapperProps = PageHeaderProps & {
  children: React.ReactNode;
  wrapperClassName?: string;
};
function PageWrapper({
  children,
  wrapperClassName = "",
  ...rest
}: PageWrapperProps) {
  return (
    <div className={cn("p-6 space-y-6", wrapperClassName)}>
      <PageHeader {...rest} />
      {children}
    </div>
  );
}

export default PageWrapper;
