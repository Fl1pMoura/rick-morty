import { cn } from "@/lib/utils";
import React from "react";
import { Link as LinkRouter } from "react-router-dom";

interface LinkProps {
  children: React.ReactNode;
  to: string;
  classname?: string;
}

export function LinkComponent({ children, to, classname }: LinkProps) {
  return (
    <LinkRouter
      className={cn(
        "bg-[#11B0C8] text-white rounded-2xl flex items-center justify-center px-3 min-h-8 text-sm font-semibold tracking-wide transition-all hover:bg-[#BFDE42] hover:text-[#1E1E20]",
        classname
      )}
      to={to}
    >
      {children}
    </LinkRouter>
  );
}
