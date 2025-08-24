import { ReactNode } from "react";

export function PdfTab({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {children}
    </div>
  );
}
