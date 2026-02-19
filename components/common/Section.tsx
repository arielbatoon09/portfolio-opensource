export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto py-24 lg:py-32 px-6 lg:px-4">
      {children}
    </section>
  );
}