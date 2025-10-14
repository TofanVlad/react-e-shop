import { cva, type VariantProps } from "class-variance-authority";

interface Props {
  value: string;
  setValue: (e: string) => void;
  title: string;
  variant?: VariantProps<typeof selectorVariants>["variant"];
}

const selectorVariants = cva(
  "aspect-square size-10 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-sm outline",
  {
    variants: {
      variant: {
        base: "outline-neutral-100 text-neutral-500",
        selected: "outline-neutral-900 text-neutral-900",
      },
    },
  }
);

export default function AppProductSelector({ variant, ...props }: Props) {
  if (props.value === props.title) {
    variant = "selected";
  } else variant = "base";

  return (
    <span
      className={selectorVariants({ variant })}
      onClick={() => props.setValue(props.title)}
    >
      {props.title}
    </span>
  );
}
