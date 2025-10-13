import { cva, type VariantProps } from "class-variance-authority";

interface Props {
  title: string;
  variant?: VariantProps<typeof tagVariants>["variant"];
  size?: VariantProps<typeof tagVariants>["size"];
  onClick?: () => void;
}

const tagVariants = cva(
  "px-4 py-0.5 font-medium text-xs rounded-full cursor-pointer",
  {
    variants: {
      variant: {
        base: "outline outline-neutral-100 text-neutral-800",
        dimm: "text-netural-500",
      },
      size: {
        md: "text-sm",
        sm: "text-xs",
      },
    },
    defaultVariants: {
      variant: "base",
      size: "md",
    },
  }
);

export default function AppTag({ title, variant, onClick }: Props) {
  return (
    <span
      className={tagVariants({ variant })}
      onClick={() => (onClick ? onClick() : () => {})}
    >
      {title}
    </span>
  );
}
