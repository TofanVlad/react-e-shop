import { closeModal } from "@/store/menu.slice";
import { useSelector, useDispatch } from "react-redux";
import AppButton from "../ui/AppButton";
import { Icon } from "@iconify/react";
import AppSelect from "../ui/AppSelect";
import { availableColors, availableSizes, availableSorts } from "@/constants";
import AppProductSelector from "../product/AppProductSize";
import AppProductColor from "../product/AppProductColor";
import useFilters from "@/hooks/useFilters";

export default function AppFilterMenu() {
  const state = useSelector((state: any) => state.menu.value);
  const dispatch = useDispatch();

  const {
    setSelectedSort,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
  } = useFilters();

  return (
    <>
      {state === "filter" && (
        <div
          className="fixed flex inset-0 bg-neutral-900/50"
          onClick={() => dispatch(closeModal())}
        >
          <div
            className="w-sm m-auto bg-white-100 flex flex-col gap-2 p-4 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-wide">Filters</h1>
              <AppButton size="sm" onClick={() => dispatch(closeModal())}>
                <Icon
                  icon="material-symbols:close-rounded"
                  className="size-6"
                />
              </AppButton>
            </div>
            <hr className="border-none h-px bg-neutral-900 my-4" />
            <div className="flex flex-col">
              <span className="font-medium text-neutral-900">Sort By</span>
              <AppSelect options={availableSorts} setValue={setSelectedSort} />
            </div>
            <hr className="border-neutral-900 my-4" />
            <div className="flex flex-col">
              <span className="font-medium text-neutral-900">Color</span>
              <div className="flex items-center gap-4 mt-3">
                {availableColors.map((item) => (
                  <AppProductColor
                    color={item}
                    key={item}
                    value={selectedColor}
                    setValue={setSelectedColor}
                  />
                ))}
              </div>
            </div>
            <hr className="border-neutral-900 my-4" />
            <div className="flex flex-col">
              <span className="font-medium text-neutral-900">Sizes</span>
              <div className="flex items-center flex-wrap gap-2 mt-3">
                {availableSizes.map((item) => (
                  <AppProductSelector
                    title={item}
                    key={item}
                    value={selectedSize}
                    setValue={setSelectedSize}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
