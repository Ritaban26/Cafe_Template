import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button. Defaults to "primary". */
  variant?: ButtonVariant;
  /** Size preset. Defaults to "md". */
  size?: ButtonSize;
  /** Shows a spinner and disables the button while true. */
  isLoading?: boolean;
  /** Icon rendered to the left of the label. */
  leftIcon?: React.ReactNode;
  /** Icon rendered to the right of the label. */
  rightIcon?: React.ReactNode;
  /** Stretches the button to fill its container. */
  fullWidth?: boolean;
}

// ─── Style maps ───────────────────────────────────────────────────────────────

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-primary text-background",
    "border border-primary",
    "hover:bg-secondary hover:border-secondary",
    "active:opacity-90",
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  ].join(" "),

  secondary: [
    "bg-secondary text-background",
    "border border-secondary",
    "hover:bg-primary hover:border-primary",
    "active:opacity-90",
    "focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
  ].join(" "),

  outline: [
    "bg-transparent text-primary",
    "border border-primary",
    "hover:bg-primary hover:text-background",
    "active:opacity-90",
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  ].join(" "),

  ghost: [
    "bg-transparent text-primary",
    "border border-transparent",
    "hover:bg-primary/10",
    "active:opacity-90",
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5 rounded-md",
  md: "px-5 py-2.5 text-base gap-2 rounded-lg",
  lg: "px-7 py-3.5 text-lg gap-2.5 rounded-xl",
};

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className = "",
      children,
      ...rest
    },
    ref,
  ) {
    const isDisabled = disabled || isLoading;

    const base = [
      "inline-flex items-center justify-center",
      "font-medium tracking-wide",
      "transition-all duration-200 ease-in-out",
      "cursor-pointer select-none",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "focus:outline-none",
      fullWidth ? "w-full" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={[base, variantClasses[variant], sizeClasses[size], className]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {isLoading ? (
          <Spinner />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}

        {children && <span>{children}</span>}

        {!isLoading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
