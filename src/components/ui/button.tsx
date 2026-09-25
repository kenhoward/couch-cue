import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/components/ui/class-names";

type ButtonVariant = "primary" | "secondary" | "ghost" | "action";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  type = "button",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames("ui-button", `ui-button--${variant}`, `ui-button--${size}`, className)}
      type={type}
      {...props}
    />
  );
}
