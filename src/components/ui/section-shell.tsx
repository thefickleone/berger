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
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="mb-10 max-w-3xl md:mb-14">
        <h2 className="text-4xl leading-tight md:text-5xl">{title}</h2>
        {description ? <p className="mt-4 text-base text-subtle-foreground md:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

