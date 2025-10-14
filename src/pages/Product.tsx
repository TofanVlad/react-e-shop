import Default from "@/layouts/Default";
import { useParams } from "react-router";
import { mockProductData } from "@/constants";
import AppBreadcrumbs from "@/components/common/AppBreadcrumbs";
import AppProductImage from "@/components/product/AppProductImage";
import AppProductInfo from "@/components/product/AppProductInfo";
import AppProductDetails from "@/components/product/AppProductDetails";
import AppProductsSection from "@/components/home/sections/AppProductsSection";
import AppNewsletterSection from "@/components/home/sections/AppNewsletterSection";

export default function Product() {
  const { slug } = useParams();

  return (
    <Default>
      <AppBreadcrumbs text={mockProductData.title} link={`/product/${slug}`} />
      <section className="grid tablet:grid-cols-2 grid-cols-1 desktop:gap-30 gap-8 container">
        <AppProductImage
          image={mockProductData.image}
          title={mockProductData.title}
        />
        <AppProductInfo {...mockProductData} />
      </section>
      <AppProductDetails text={mockProductData.description} />
      <AppProductsSection title="similar" />
      <AppNewsletterSection />
    </Default>
  );
}
