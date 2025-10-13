import type { ReactNode } from "react";
import AppNavbar from "@/components/common/AppNavbar";

interface Props {
  children: ReactNode;
}

export default function Default({ children }: Props) {
  return (
    <>
      <div className="w-screen h-10 bg-neutral-900 text-white justify-center flex items-center">
        Get 25% OFF on your first order.{" "}
        <strong className="ml-2 cursor-pointer">Order Now</strong>
      </div>
      <AppNavbar />
      {children}
    </>
  );
}
