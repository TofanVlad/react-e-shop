import AppInput from "@/components/ui/input/AppInput";
import AppButton from "@/components/ui/AppButton";
import { useState } from "react";

export default function AppNewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-screen bg-white-100 mt-48">
      <div className="container flex items-center justify-between h-50">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-neutral-900">
            Join Our Newsletter
          </h3>
          <p className="text-neutral-500">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <AppInput
            placeholder="Your email address"
            value={email}
            setValue={setEmail}
          />
          <AppButton>Subscribe</AppButton>
        </div>
      </div>
    </section>
  );
}
