import Hero from "@assets/Hero.webp";
import AppButton from "@components/ui/AppButton";
import { Icon } from "@iconify/react";

export default function AppHero() {
  return (
    <>
      <section className="w-screen bg-white-100 pt-10">
        <div className="container flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-3xl text-neutral-800">
              Fresh Arrivals Online
            </h1>
            <h2 className="mb-9 text-neutral-600">
              Discover Our Newest Collection Today.
            </h2>
            <AppButton>
              View Collection{" "}
              <Icon icon="lucide:arrow-right" className="shrink-0 size-5" />
            </AppButton>
          </div>
          <div className="aspect-square max-w-sm">
            <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
