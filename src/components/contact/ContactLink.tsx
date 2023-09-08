export default function ContactLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex gap-3 px-3 py-1 items-center rounded-full action-border"
    >
      {children}
    </a>
  );
}
