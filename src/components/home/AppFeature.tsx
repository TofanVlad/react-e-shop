import { Icon } from "@iconify/react";

interface Props {
  icon: string;
  title: string;
  text: string;
}

export default function AppFeature({ icon, title, text }: Props) {
  return (
    <article className="flex flex-col gap-3 pt-4 max-w-xs">
      <div className="aspect-square flex items-center justify-center size-12 bg-white-100 rounded-full">
        <Icon icon={icon} className="size-5 text-neutral-900" />
      </div>
      <h3 className="mt-3 font-semibold text-base text-neutral-800">{title}</h3>
      <p className="text-neutral-500">{text}</p>
    </article>
  );
}
