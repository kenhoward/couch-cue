import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/components/ui/class-names";

type ChipVariant = "neutral" | "accent" | "action";

export type ChipProps = ComponentPropsWithoutRef<"span"> & {
  variant?: ChipVariant;
};

export function Chip({ className, variant = "neutral", ...props }: ChipProps) {
  return <span className={classNames("ui-chip", `ui-chip--${variant}`, className)} {...props} />;
}
