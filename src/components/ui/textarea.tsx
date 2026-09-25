import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/components/ui/class-names";

export type TextareaProps = ComponentPropsWithoutRef<"textarea">;

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={classNames("ui-textarea", className)} {...props} />;
}
