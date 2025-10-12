import Logo from "../../assets/Logo.webp";
import { NavLink } from "react-router";
import AppInput from "../ui/input/AppInput";
import IconCart from "../ui/icons/IconCart";
import IconProfile from "../ui/icons/IconProfile";
import { useState } from "react";

export default function AppNavbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex items-center container justify-between">
      <div className="h-10">
        <img src={Logo} className="w-full h-full object-cover" />
      </div>
      <ul className="flex items-center gap-8 text-neutral-500 font-medium">
        <NavLink to={"/"} className="cursor-pointer">
          Home
        </NavLink>
        <NavLink to={"/catalog"} className="cursor-pointer">
          Catalog
        </NavLink>
        <NavLink to={"/about"} className="cursor-pointer">
          About
        </NavLink>
        <NavLink to={"/contact"} className="cursor-pointer">
          Contact
        </NavLink>
      </ul>

      <div className="flex items-center gap-8">
        <AppInput value={search} setValue={setSearch} />
        <NavLink to={"/cart"}>
          <IconCart />
        </NavLink>
        <NavLink to={"/profile"}>
          <IconProfile />
        </NavLink>
      </div>
    </nav>
  );
}
