import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/components/ui/class-names";

export type InputProps = ComponentPropsWithoutRef<"input">;

export function Input({ className, ...props }: InputProps) {
  return <input className={classNames("ui-input", className)} {...props} />;
}
