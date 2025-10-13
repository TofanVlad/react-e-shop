interface Props {
  title: string;
}

export default function AppTag({ title }: Props) {
  return (
    <div className="px-4 py-0.5 outline outline-neutral-100 font-medium text-xs uppercase rounded-full ">
      {title}
    </div>
  );
}
