export default function SectionItem({
  href = null,
  children,
}: {
  href: string | null;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <a href={href} className="p-2 rounded-xl action-border">
        {children}
      </a>
    );
  } else {
    return (
      <div className="p-2 rounded-xl border-2 border-transparent">
        {children}
      </div>
    );
  }
}
