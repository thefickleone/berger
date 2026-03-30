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
      <div className="mb-8 max-w-3xl sm:mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">{title}</h2>
        {description ? <p className="mt-3 sm:mt-4 text-xs sm:text-base text-subtle-foreground md:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

