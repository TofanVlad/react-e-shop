import Default from "@/layouts/Default";
import AppNewsletterSection from "@/components/home/sections/AppNewsletterSection";
import AppFilters from "@/components/catalog/AppFilters";
import AppProductCard from "@/components/common/AppProductCard";
import AppPagination from "@/components/catalog/AppPagination";
import { products } from "@/constants";
import { useState } from "react";

export default function Catalog() {
  const [pages, setPages] = useState(5);
  const [current, setCurrent] = useState(1);

  const totalPages = [];
  for (let i = 0; i < pages; i++) {
    totalPages.push(i + 1);
  }

  return (
    <Default>
      <section className="container flex gap-5">
        <AppFilters />
        <div className="grid grid-cols-3 gap-x-6 gap-y-8">
          {products.map((item) => (
            <AppProductCard key={item.slug} {...item} />
          ))}
        </div>
      </section>
      <AppPagination
        current={current}
        setCurrent={setCurrent}
        total={totalPages}
      />
      <AppNewsletterSection />
    </Default>
  );
}
