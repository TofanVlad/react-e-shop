import Browse from "@assets/Browse.webp";
import AppButton from "@/components/ui/AppButton";
import { Icon } from "@iconify/react";
export default function AppBrowseSection() {
  return (
    <section className="w-screen bg-white-100 my-48">
      <div className="container flex items-center justify-between">
        <div className="flex flex-col gap-6 max-w-md">
          <h3 className="text-2xl font-bold">Browse Our Fashion Paradise!</h3>
          <p className="text-neutral-500 mb-4">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <AppButton link="/catalog">
            Start Browsing{" "}
            <Icon icon="lucide:arrow-right" className="shrink-0 size-5" />
          </AppButton>
        </div>
        <div className="max-w-3xs aspect-3/4">
          <img
            src={Browse}
            alt="Browse"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
