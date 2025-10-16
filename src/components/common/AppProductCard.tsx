import AppTag from "../ui/AppTag";
import { Link } from "react-router";
import { formatPrice } from "@utils/formatPrice";
interface Props {
  image?: string;
  title: string;
  price: number;
  stock?: boolean;
  slug: string;
}

export default function AppProductCard({
  image = "https://placehold.co/600x400",
  stock = true,
  ...props
}: Props) {
  return (
    <Link
      to={`/product/${props.slug}`}
      className="flex flex-col gap-3 cursor-pointer"
    >
      <div className="aspect-3/4">
        <img
          src={image}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-neutral-900 font-medium text-sm">{props.title}</p>
      <div className="flex items-center gap-4">
        {stock && <AppTag size="sm" title="IN STOCK" />}
        <span className="text-neutral-600">{formatPrice(props.price)}</span>
      </div>
    </Link>
  );
}
