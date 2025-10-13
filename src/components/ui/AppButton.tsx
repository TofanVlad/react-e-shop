import { Link } from "react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
interface Props {
  children: string | ReactNode;
  link?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["variant"];
  onClick?: (e?: unknown) => void;
}

const buttonVariants = cva(
  "rounded-xl text-sm font-medium transition-colors duration-300 cursor-pointer flex items-center gap-2 w-max",
  {
    variants: {
      variant: {
        base: "text-white bg-neutral-900 hover:bg-neutral-800",
        outline: "text-neutral-500 ring-1 ring-neutral-200",
        white: "bg-white-900",
        outlineBlack: "bg-white-900 ring-1 ring-neutral-900",
      },
      size: {
        lg: "px-6 py-3",
        sm: "px-5 py-3",
      },
    },
    defaultVariants: {
      variant: "base",
      size: "lg",
    },
  }
);

export default function AppButton({
  children,
  link,
  variant,
  ...props
}: Props) {
  return (
    <>
      {link ? (
        <Link to={link} {...props} className={buttonVariants({ variant })}>
          {children}
        </Link>
      ) : (
        <button {...props} className={buttonVariants({ variant })}>
          {children}
        </button>
      )}
    </>
  );
}
