import { Icon } from "@iconify/react";
import { cva, type VariantProps } from "class-variance-authority";

interface Props {
  text?: number | string;
  icon?: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}

const paginationVariants = cva(
  "w-10 h-8 flex items-center justify-center group rounded-sm cursor-pointer transition-all duration-300",
  {
    variants: {
      variant: {
        base: "text-neutral-600",
        active: "bg-white-100 text-neutral-900",
      },
    },
    defaultVariants: {
      variant: "base",
    },
  }
);

let variant: VariantProps<typeof paginationVariants>["variant"];

export default function AppPaginationCell({
  text,
  icon,
  disabled = false,
  active = false,
  ...props
}: Props) {
  variant = active ? "active" : "base";

  return (
    <button
      {...props}
      className={paginationVariants({ variant })}
      disabled={disabled}
    >
      {icon && (
        <Icon
          icon={icon}
          className="size-6 group-disabled:text-neutral-400 group-disabled:opacity-50 transition-colors duration-300"
        />
      )}
      {text}
    </button>
  );
}
