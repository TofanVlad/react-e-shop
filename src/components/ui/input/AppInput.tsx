import { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface Props {
  value: string;
  setValue: (e: string) => void;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  variant?: VariantProps<typeof inputVariants>["variant"];
  size?: VariantProps<typeof inputVariants>["size"];
  error?: boolean;
}

const inputVariants = cva(
  "outline px-4 placeholder:text-neutral-300 placeholder:text-medium transition-colors duration-300 rounded-md",
  {
    variants: {
      variant: {
        base: "outline-neutral-100 hover:outline-neutral-200",
        error: "outline-red-800 hover:outline-red-900",
      },
      size: {
        md: "py-2.5",
        sm: "py-1.5",
      },
    },
    defaultVariants: {
      variant: "base",
      size: "md",
    },
  }
);

export default function AppInput({ type = "text", variant, ...props }: Props) {
  const componentId = useId();
  return (
    <>
      <label className="flex flex-col" htmlFor={componentId}>
        <span className="text-sm font-medium text-neutral-600">
          {props.label}
        </span>
        <input
          className={inputVariants({ variant })}
          type={type}
          id={componentId}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </label>
    </>
  );
}
