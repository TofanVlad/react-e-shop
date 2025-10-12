import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./assets/index.css";
import { StrictMode } from "react";
import router from "./routes";
import AppNavbar from "./components/common/AppNavbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-screen h-10 bg-neutral-900 text-white justify-center flex items-center">
      Get 25% OFF on your first order.{" "}
      <strong className="ml-2 cursor-pointer">Order Now</strong>
    </div>
    <AppNavbar />
    <RouterProvider router={router} />
  </StrictMode>
);
