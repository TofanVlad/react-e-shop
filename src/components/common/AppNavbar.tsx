import Logo from "../../assets/Logo.webp";
import { Link } from "react-router";
import AppInput from "../ui/input/AppInput";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function AppNavbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex items-center container justify-between py-5 mx-auto">
      <Link to={"/"} className="h-10">
        <img src={Logo} className="w-full h-full object-cover cursor-pointer" />
      </Link>
      <ul className="flex items-center gap-8 text-neutral-500 font-medium">
        <Link to={"/"} className="cursor-pointer">
          Home
        </Link>
        <Link to={"/catalog"} className="cursor-pointer">
          Catalog
        </Link>
        <Link to={"/about"} className="cursor-pointer">
          About
        </Link>
        <Link to={"/contact"} className="cursor-pointer">
          Contact
        </Link>
      </ul>

      <div className="flex items-center gap-8">
        <AppInput
          prependIcon="lucide:search"
          placeholder="Search products"
          value={search}
          setValue={setSearch}
        />
        <Link to={"/cart"}>
          <Icon icon="lucide:shopping-cart" className="size-5" />
        </Link>
        <Link to={"/profile"}>
          <Icon icon="lucide:circle-user-round" className="size-5" />
        </Link>
      </div>
    </nav>
  );
}
