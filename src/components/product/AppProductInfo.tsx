import { useState } from "react";
import AppProductSize from "@/components/product/AppProductSize";
import AppProductColor from "./AppProductColor";
import { Icon } from "@iconify/react";
import AppTag from "../ui/AppTag";
import { formatPrice } from "@/utils/formatPrice";
import AppButton from "../ui/AppButton";

interface Props {
  title: string;
  price: number;
  reviews?: number;
  isLiked?: boolean;
}

const productSizes = ["S", "M", "L", "XL", "XXL"];
const productColors = ["#A3BEF8", "#FFD58A", "#83B18B"];

export default function AppProductInfo(props: Props) {
  const [sizeSelect, setSizeSelect] = useState(productSizes[0]);
  const [colorSelect, setColorSelect] = useState(productColors[0]);

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-neutral-900 font-bold text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
          {props.title}
        </h1>
        <Icon
          icon="lucide:share-2"
          className="size-6 text-neutral-500 shrink-0"
        />
      </div>
      <div className="flex items-center gap-2 mb-6">
        <p className="flex items-center gap-2 px-4 py-1 bg-white-100 text-neutral-500 rounded-full">
          <Icon icon="material-symbols:kid-star-sharp" className="size-4" />
          <span className="text-xs font-medium">
            4.2 — {props.reviews} Reviews
          </span>
        </p>
        <AppTag title="IN STOCK" />
      </div>
      <h2 className="font-semibold text-lg text-neutral-900 mb-6">
        {formatPrice(props.price)}
      </h2>
      <div className="flex flex-col gap-2.5 mb-6">
        <h3 className="font-medium text-neutral-500 text-xs leading-6">
          SELECT COLOR
        </h3>
        <div className="flex items-center gap-4 ml-1 ">
          {productColors.map((item) => (
            <AppProductColor
              key={item}
              value={colorSelect}
              setValue={setColorSelect}
              color={item}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2.5 mb-6">
        <h3 className="font-medium text-neutral-500 text-xs leading-6">
          SELECT SIZE
        </h3>
        <div className="flex items-center gap-2">
          {productSizes.map((item) => (
            <AppProductSize
              key={item}
              value={sizeSelect}
              setValue={setSizeSelect}
              title={item}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <AppButton className="!w-1/2 justify-center">Add to cart</AppButton>
        <AppButton
          variant="outline"
          className="aspect-square !px-2.5 !py-2.5 justify-center"
        >
          {props.isLiked ? (
            <Icon
              icon="material-symbols:favorite"
              className="text-red-800 size-6"
            />
          ) : (
            <Icon
              icon="material-symbols:favorite-outline-rounded"
              className="text-neutral-500 size-6"
            />
          )}
        </AppButton>
      </div>
    </section>
  );
}
