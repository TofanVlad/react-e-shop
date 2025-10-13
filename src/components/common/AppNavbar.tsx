import Logo from "@assets/Logo.webp";
import { Link } from "react-router";
import AppInput from "../ui/input/AppInput";
import { useState } from "react";
import { Icon } from "@iconify/react";
import AppButton from "../ui/AppButton";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/store/menu.slice";
import { navLinks } from "@/constants";

export default function AppNavbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center container justify-between tablet:py-5 py-3 mx-auto">
      <Link to={"/"} className="tablet:h-10 h-8">
        <img src={Logo} className="w-full h-full object-cover cursor-pointer" />
      </Link>
      <ul className="desktop:flex hidden items-center gap-8 text-neutral-500 font-medium">
        {navLinks.map((item) => (
          <Link to={item.link} key={item.link} className="cursor-pointer">
            {item.title}
          </Link>
        ))}
      </ul>

      <div className="tablet:flex hidden desktop:mx-0 mx-auto items-center gap-8">
        <AppInput
          prependIcon="lucide:search"
          placeholder="Search products"
          value={search}
          setValue={setSearch}
        />
        <Link to={"/cart"} className="desktop:block hidden">
          <Icon icon="lucide:shopping-cart" className="size-5" />
        </Link>
        <Link to={"/profile"} className="desktop:block hidden">
          <Icon icon="lucide:circle-user-round" className="size-5" />
        </Link>
      </div>
      <div className="desktop:hidden block">
        <AppButton size="sm" onClick={() => dispatch(toggleMenu())}>
          Menu <Icon icon="lucide:align-justify" className="size-5" />
        </AppButton>
      </div>
    </nav>
  );
}
