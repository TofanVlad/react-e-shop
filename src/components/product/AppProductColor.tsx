import { cva, type VariantProps } from "class-variance-authority";

interface Props {
  color: string;
  value: string;
  setValue: (e: string) => void;
  variant?: VariantProps<typeof activeClasses>["variant"];
}
const activeClasses = cva(
  "absolute left-1/2 top-1/2 -translate-1/2 size-8 rounded-full outline outline-neutral-900 transition-opacity duration-300",
  {
    variants: {
      variant: {
        base: "opacity-0",
        active: "opacity-100",
      },
    },
  }
);

export default function AppProductColor({
  color,
  value,
  setValue,
  variant,
}: Props) {
  if (color === value) variant = "active";
  else variant = "base";
  return (
    <div
      className="size-6 rounded-full relative cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={() => setValue(color)}
    >
      <span className={activeClasses({ variant })}></span>
    </div>
  );
}
