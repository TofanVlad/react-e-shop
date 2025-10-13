import AppProductCard from "@/components/common/AppProductCard";
import AppTag from "@/components/ui/AppTag";
import { useState } from "react";
import { products } from "@/constants";

interface Props {
  title?: "title" | "select";
}

export default function AppProductsSection({ title = "title" }: Props) {
  const [select, setSelect] = useState("Featured");

  return (
    <section>
      {title === "title" ? (
        <div className="flex flex-col gap-2 container justify-center items-center tablet:pt-20 pt-10 tablet:mb-20 mb-10">
          <h3 className="uppercase font-medium text-neutral-300 text-xs">
            SHOP NOW
          </h3>
          <p className="text-neutral-900 font-bold text-2xl">Best Selling</p>
        </div>
      ) : (
        <div className="flex items-center container justify-center gap-4 tablet:mb-20 mb-10">
          <AppTag
            title="Featured"
            variant={select === "Featured" ? "base" : "dimm"}
            onClick={() => setSelect("Featured")}
          />
          <AppTag
            title="Latest"
            variant={select === "Latest" ? "base" : "dimm"}
            onClick={() => setSelect("Latest")}
          />
        </div>
      )}

      <section className="grid tablet:grid-cols-4 mobile:grid-cols-2 grid-cols-1 gap-5 container">
        {products.map((product) => (
          <AppProductCard {...product} key={product.slug} />
        ))}
      </section>
    </section>
  );
}
