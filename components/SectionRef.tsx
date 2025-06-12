'use client';

import { useSectionVisible } from "@/hooks/useSectionVisible";

export function Section({ children, className = "", visibleRef, showClass = "" }: { children: React.ReactNode, className?: string, visibleRef?: any, showClass?: string }) {
  const visible = visibleRef ? useSectionVisible(visibleRef, 0.2) : true;
  return (
    <section ref={visibleRef} className={`${className} ${visible ? showClass : ""}`}>
      {children}
    </section>
  );
}