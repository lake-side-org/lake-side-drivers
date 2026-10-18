import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

type LinkButtonProps = CommonProps & {
  href: string;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "inline-flex items-center justify-center rounded-card px-6 py-3 font-heading text-sm font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles = {
  primary: "bg-amber text-lake-dark hover:bg-amber-dark hover:text-white",
  secondary:
    "border-2 border-lake text-lake hover:bg-lake hover:text-white",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: NativeButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
