import type { ReactNode } from "react";
import AppNavbar from "@/components/common/AppNavbar";
import AppFooter from "@/components/common/AppFooter";
import AppMenu from "@/components/modals/AppMenu";
import { useSelector } from "react-redux";

interface Props {
  children: ReactNode;
}

export default function Default({ children }: Props) {
  const state = useSelector((state: any) => state.menu.value);

  return (
    <main className={state ? "overflow-hidden h-screen" : ""}>
      <div className="w-screen h-10 bg-neutral-900 text-white justify-center flex items-center">
        Get 25% OFF on your first order.{" "}
        <strong className="ml-2 cursor-pointer">Order Now</strong>
      </div>
      <AppNavbar />
      {children}
      <AppFooter />
      <AppMenu />
    </main>
  );
}
