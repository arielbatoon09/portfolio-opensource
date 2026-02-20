type PageHeadingProps = {
  title: string;
  description: string;
};

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="space-y-1 mb-5">
      <h2 className="font-custom text-foreground text-xl md:text-3xl font-bold md:w-4xl md:mt-4">{title}</h2>
      <p className="text-muted-foreground text-md mt-3 w-full">{description}</p>
    </div>
  );
}