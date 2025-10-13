interface Props {
  image?: string;
  title: string;
  price: string;
  stock?: boolean;
  slug: string;
}

import AppTag from "../ui/AppTag";
import { Link } from "react-router";

export default function AppProductCard({
  image = "https://placehold.co/600x400",
  stock = true,
  ...props
}: Props) {
  return (
    <Link
      to={`/product/${props.slug}`}
      className="px-2 py-4 flex flex-col gap-6 cursor-pointer"
    >
      <div className="aspect-3/4">
        <img
          src={image}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-neutral-900 font-medium text-sm">{props.title}</p>
        <div className="flex items-center gap-4">
          {stock && <AppTag title="IN STOCK" />}
          <span className="text-neutral-600">{props.price}</span>
        </div>
      </div>
    </Link>
  );
}
