type PageHeaderProps = {
  title: string;
};

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="mb-6  text-start">
      <span className="text-4xl font-bold tracking-tight">{title}</span>
    </div>
  );
}
