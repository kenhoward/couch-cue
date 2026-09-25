import type { ComponentPropsWithoutRef } from "react";
import { classNames } from "@/components/ui/class-names";

export type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={classNames("ui-container", className)} {...props} />;
}
