import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { classNames } from "@/components/ui/class-names";

export type FieldProps = ComponentPropsWithoutRef<"div"> & {
  label?: ReactNode;
  htmlFor?: string;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
};

export function Field({
  children,
  className,
  error,
  hint,
  htmlFor,
  label,
  required = false,
  ...props
}: FieldProps) {
  return (
    <div className={classNames("ui-field", className)} data-invalid={error ? true : undefined} {...props}>
      {label ? (
        <label className="ui-field__label" htmlFor={htmlFor}>
          {label}
          {required ? <span className="ui-field__required"> *</span> : null}
        </label>
      ) : null}
      {children}
      {hint ? <div className="ui-field__hint">{hint}</div> : null}
      {error ? <div className="ui-field__error" role="alert">{error}</div> : null}
    </div>
  );
}
