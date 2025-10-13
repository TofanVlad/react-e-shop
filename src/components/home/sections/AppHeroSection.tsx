import Hero from "@assets/Hero.webp";
import AppButton from "@components/ui/AppButton";
import { Icon } from "@iconify/react";

export default function AppHero() {
  return (
    <>
      <section className="tablet:w-screen bg-white-100 pt-10 tablet:pb-0 pb-10">
        <div className="container flex items-center tablet:justify-between justify-center">
          <div className="flex flex-col tablet:gap-3 gap-2">
            <h1 className="font-semibold text-3xl text-neutral-800">
              Fresh Arrivals Online
            </h1>
            <h2 className="tablet:mb-9 mb-4 tablet:text-start text-center text-neutral-600">
              Discover Our Newest Collection Today.
            </h2>
            <div className="tablet:mx-0 mx-auto">
              <AppButton>
                View Collection{" "}
                <Icon icon="lucide:arrow-right" className="shrink-0 size-5" />
              </AppButton>
            </div>
          </div>
          <div className="aspect-square max-w-sm tablet:block hidden">
            <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
