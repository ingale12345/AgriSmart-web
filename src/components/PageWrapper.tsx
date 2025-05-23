import { PageHeader } from "./PageHeader";

type PageWrapperProps = {
  title: string;
  children: React.ReactNode;
};

function PageWrapper({ title, children }: PageWrapperProps) {
  return (
    <div className="p-6 space-y-6">
      <PageHeader title={title} />
      {children}
    </div>
  );
}

export default PageWrapper;
