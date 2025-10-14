interface Props {
  text: string;
}

export default function AppProductDetails({ text }: Props) {
  return (
    <section className="desktop:max-w-3xl container mx-auto flex flex-col gap-6 tablet:my-36 my-16">
      <h3 className="font-semibold text-lg text-neutral-900">Detail</h3>
      <p className="text-neutral-500">{text}</p>
    </section>
  );
}
