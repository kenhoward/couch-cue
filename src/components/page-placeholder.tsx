type PagePlaceholderProps = {
  title: string;
};

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="route-page" aria-labelledby="page-title">
      <h1 id="page-title">{title}</h1>
    </section>
  );
}
