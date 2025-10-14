import Default from "@/layouts/Default";
import { useParams } from "react-router";
import { mockProductData } from "@/constants";
import AppBreadcrumbs from "@/components/common/AppBreadcrumbs";
import AppProductImage from "@/components/product/AppProductImage";
import AppProductInfo from "@/components/product/AppProductInfo";

export default function Product() {
  const { slug } = useParams();

  return (
    <Default>
      <AppBreadcrumbs text={slug!} link={`/product/${slug}`} />
      <section className="grid grid-cols-2 gap-30 container">
        <AppProductImage
          image={mockProductData.image}
          title={mockProductData.title}
        />
        <AppProductInfo {...mockProductData} />
      </section>
    </Default>
  );
}
