import { closeModal } from "@/store/menu.slice";
import { useSelector, useDispatch } from "react-redux";
import AppButton from "../ui/AppButton";
import { Icon } from "@iconify/react";
import { navLinks } from "@/constants";
import { Link } from "react-router";

export default function AppMenu() {
  const state = useSelector((state: any) => state.menu.value);
  const dispatch = useDispatch();

  return (
    <>
      {state === "burger" && (
        <div
          className="fixed inset-0 bg-neutral-900/50"
          onClick={() => dispatch(closeModal())}
        >
          <div
            className="h-screen desktop:w-1/3 tablet:w-1/2 w-full bg-white-100 ml-auto flex flex-col px-8 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-wide">MENU</h1>
              <AppButton size="sm" onClick={() => dispatch(closeModal())}>
                <Icon
                  icon="material-symbols:close-rounded"
                  className="size-6"
                />
              </AppButton>
            </div>
            <hr className="border-none h-px bg-neutral-900 my-4" />
            <div className="divide-y divide-neutral-600 flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  to={item.link}
                  key={item.link}
                  className="text-end text-3xl font-semibold pb-4"
                  onClick={() => dispatch(closeModal())}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
