import type { ReactNode } from 'react';

export default function ArticleCaption({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose mt-1 mb-6 font-sans text-xs text-theme-500">
      {children}
    </div>
  );
}
