import AppInput from "@/components/ui/input/AppInput";
import AppButton from "@/components/ui/AppButton";
import { useState } from "react";

export default function AppNewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="tablet:w-screen bg-white-100 tablet:mt-48 mt-24">
      <div className="container flex tablet:flex-row flex-col items-center justify-between tablet:h-50 tablet:py-0 py-8 tablet:gap-0 gap-8">
        <div className="flex flex-col tablet:gap-6 gap-4 tablet:text-start text-center">
          <h3 className="text-2xl font-bold text-neutral-900">
            Join Our Newsletter
          </h3>
          <p className="text-neutral-500">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <div className="flex mobile:flex-row flex-col items-center mobile:gap-4 gap-2 mobile:w-auto w-full">
          <AppInput
            placeholder="Your email address"
            value={email}
            setValue={setEmail}
            className="mobile:!w-auto !w-full"
          />
          <AppButton className="mobile:!w-auto !w-full !justify-center">
            Subscribe
          </AppButton>
        </div>
      </div>
    </section>
  );
}
