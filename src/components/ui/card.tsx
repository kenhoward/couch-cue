import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/components/ui/class-names";

type CardVariant = "default" | "subtle";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  variant?: CardVariant;
};

export function Card({ className, variant = "default", ...props }: CardProps) {
  return <div className={classNames("ui-card", `ui-card--${variant}`, className)} {...props} />;
}
