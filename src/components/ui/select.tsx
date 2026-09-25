import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/components/ui/class-names";

export type SelectProps = ComponentPropsWithoutRef<"select">;

export function Select({ className, ...props }: SelectProps) {
  return <select className={classNames("ui-select", className)} {...props} />;
}
