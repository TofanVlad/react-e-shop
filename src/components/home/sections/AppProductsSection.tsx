import AppProductCard from "@/components/common/AppProductCard";

export default function AppProductsSection() {
  return (
    <section>
      <div className="flex flex-col gap-2 container justify-center items-center pt-20 mb-20">
        <h3 className="uppercase font-medium text-neutral-300 text-xs">
          SHOP NOW
        </h3>
        <p className="text-neutral-900 font-bold text-2xl">Best Selling</p>
      </div>

      <section className="grid grid-cols-4 gap-5 container">
        <AppProductCard title="TEst" price="24 MDL" slug="test" />
        <AppProductCard title="TEst" price="24 MDL" slug="test" />
        <AppProductCard title="TEst" price="24 MDL" slug="test" />
        <AppProductCard title="TEst" price="24 MDL" slug="test" />
      </section>
    </section>
  );
}
