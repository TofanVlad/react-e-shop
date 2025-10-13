import { Link } from "react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";
interface Props {
  children: string | ReactNode;
  link?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  onClick?: (e?: unknown) => void;
  className?: string;
}

const buttonVariants = cva(
  "rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer flex items-center gap-2 w-max",
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
        sm: "px-4 py-2",
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
  size,
  ...props
}: Props) {
  return (
    <>
      {link ? (
        <Link
          to={link}
          {...props}
          className={[buttonVariants({ variant, size }), props.className].join(
            " "
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          {...props}
          className={[buttonVariants({ variant, size }), props.className].join(
            " "
          )}
        >
          {children}
        </button>
      )}
    </>
  );
}
