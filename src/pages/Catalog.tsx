import Default from "@/layouts/Default";
import AppNewsletterSection from "@/components/home/sections/AppNewsletterSection";
import AppFilters from "@/components/catalog/AppFilters";
import AppProductCard from "@/components/common/AppProductCard";
import AppPagination from "@/components/catalog/AppPagination";
import { products } from "@/constants";
import { useMemo, useState } from "react";
import AppButton from "@/components/ui/AppButton";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/menu.slice";
import AppFilterMenu from "@/components/modals/AppFilterMenu";

export default function Catalog() {
  const [pages] = useState(10);
  const [current, setCurrent] = useState(1);
  const dispatch = useDispatch();

  const totalPages = useMemo(() => {
    return Array.from({ length: pages }, (_, i) => i + 1);
  }, [pages]);

  return (
    <>
      <Default>
        <section className="container flex desktop:flex-row flex-col desktop:gap-5 gap-4">
          <AppFilters />
          <AppButton
            className="desktop:hidden flex"
            onClick={() => dispatch(openModal("filter"))}
          >
            <Icon icon="lucide:filter" className="size-5" />
            Filters
          </AppButton>
          <div className="grid tablet:grid-cols-3 mobile:grid-cols-2 grid-cols-1 desktop:gap-x-6 gap-x-4 desktop:gap-y-8 gap-y-4">
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
      <AppFilterMenu />
    </>
  );
}
