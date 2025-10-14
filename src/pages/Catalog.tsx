import Default from "@/layouts/Default";
import AppNewsletterSection from "@/components/home/sections/AppNewsletterSection";
import AppFilters from "@/components/catalog/AppFilters";
import AppProductCard from "@/components/common/AppProductCard";
import { products } from "@/constants";

export default function Catalog() {
  return (
    <Default>
      <section className="container flex gap-5">
        <AppFilters />
        <div className="grid grid-cols-3 gap-x-6 gap-y-8">
          {products.map((item) => (
            <AppProductCard {...item} />
          ))}
        </div>
      </section>
      <AppNewsletterSection />
    </Default>
  );
}
