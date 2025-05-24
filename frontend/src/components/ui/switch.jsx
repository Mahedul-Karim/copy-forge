import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 dark:data-[state=checked]:bg-hover inline-flex h-6 w-12 shrink-0 items-center rounded-full border border-transparent shadow-xs  outline-none focus-visible:ring-[3px] disabled:opacity-50 cursor-pointer disabled:cursor-none",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-text-primary  pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%+4px)] data-[state=unchecked]:translate-x-[2px] dark:data-[state=checked]:bg-text-primary"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
