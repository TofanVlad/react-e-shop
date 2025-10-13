import Default from "@/layouts/Default";
import { useParams } from "react-router";
import { mockProductData } from "@/constants";
import AppBreadcrumbs from "@/components/common/AppBreadcrumbs";
import AppProductSelector from "@/components/ui/input/AppProductSelector";
import { useState } from "react";

const productSelects = ["S", "M", "L", "XL", "XXL"];

export default function Product() {
  const { slug } = useParams();
  const [sizeSelect, setSizeSelect] = useState(productSelects[0]);

  return (
    <Default>
      <AppBreadcrumbs text={slug!} link={`/product/${slug}`} />
      <section className="grid grid-cols-2 gap-30 container">
        <div className="bg-white-100 aspect-square flex items-center justify-center">
          <img
            src={mockProductData.image}
            alt={mockProductData.title}
            className="w-2/3 h-2/3 object-contain"
          />
        </div>
        <div>
          {productSelects.map((item) => (
            <AppProductSelector
              title={item}
              key={item}
              value={sizeSelect}
              setValue={setSizeSelect}
            />
          ))}
        </div>
      </section>
    </Default>
  );
}
