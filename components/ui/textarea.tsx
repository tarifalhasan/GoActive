import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-skin-border bg-slate-50 dark:bg-skin-slate-800 text-base text-slate-950 dark:text-skin-slate-200 px-3 py-2  font-inter ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
