import { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";

interface Props {
  value: string;
  setValue: (e: string) => void;
  label: string;
  placeholder?: string;
  variant?: VariantProps<typeof inputVariants>["variant"];
  error?: boolean;
}

const inputVariants = cva(
  "outline px-4 py-2.5 placeholder:text-neutral-300 placeholder:text-medium transition-colors duration-300 rounded-md",
  {
    variants: {
      variant: {
        base: "outline-neutral-100 hover:outline-neutral-200",
        error: "outline-red-800 hover:outline-red-900",
      },
    },
    defaultVariants: {
      variant: "base",
    },
  }
);

export default function AppTextarea({ variant, ...props }: Props) {
  const componentId = useId();
  return (
    <>
      <label className="flex flex-col" htmlFor={componentId}>
        <span className="text-sm font-medium text-neutral-600">
          {props.label}
        </span>
        <textarea
          className={inputVariants({ variant })}
          id={componentId}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </label>
    </>
  );
}
