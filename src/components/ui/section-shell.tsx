import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, title, description, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("py-14 md:py-20", className)}>
      <div className="mb-8 max-w-2xl md:mb-12">
        <h2 className="text-3xl leading-tight md:text-4xl">{title}</h2>
        {description ? <p className="mt-3 text-base md:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

