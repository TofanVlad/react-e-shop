import { Icon } from "@iconify/react";
import AppFooterLinks from "../ui/AppFooterLinks";
import Footer from "@assets/Footer.webp";
import { footerLinks } from "@/constants";
import { Link } from "react-router";

export default function AppFooter() {
  return (
    <footer className="py-16 container flex justify-between">
      <div>
        <div className="h-11 w-max">
          <img
            src={Footer}
            alt="Footer"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="mt-3 max-w-3xs text-neutral-500">
          DevCut is a YouTube channel for practical project-based learning.
        </p>
        <div className="flex items-center gap-6 text-neutral-500 mt-8">
          <Link to="https://github.com/TofanVlad">
            <Icon icon="mdi:github" className="size-6" />
          </Link>
          <Icon icon="mdi:instagram" className="size-6" />
          <Icon icon="mdi:telegram" className="size-6" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-18">
        {footerLinks.map((links) => (
          <AppFooterLinks {...links} key={links.title} />
        ))}
      </div>
      <div className="flex flex-col gap-10">
        <span className="font-medium text-neutral-300">ACCEPTED PAYMENTS</span>
        <div className="flex items-center justify-between">
          <Icon icon="logos:mastercard" className="size-6" />
          <Icon icon="logos:paypal" className="size-6" />
          <Icon icon="logos:visa" />
        </div>
      </div>
    </footer>
  );
}
