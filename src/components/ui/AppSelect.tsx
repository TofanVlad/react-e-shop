interface Props {
  options: Array<{ value: string; text: string }>;
  setValue: (e: string) => void;
}

export default function AppSelect({ options, setValue }: Props) {
  return (
    <select
      onChange={(e) => setValue(e.target.value)}
      className="px-4 py-2 mt-3 outline outline-neutral-100 hover:outline-neutral-400 focus-within:outline-neutral-900 transition-colors duration-300 rounded-sm cursor-pointer text-neutral-600"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="">
          {option.text}
        </option>
      ))}
    </select>
  );
}
