import useFilters from "@/hooks/useFilters";
import AppProductColor from "../product/AppProductColor";
import AppProductSelector from "../product/AppProductSize";
import AppSelect from "../ui/AppSelect";
import { availableColors, availableSizes, availableSorts } from "@/constants";

export default function AppFilters() {
  const {
    setSelectedSort,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
  } = useFilters();
  return (
    <div className="px-4 py-6 outline outline-neutral-100 desktop:flex hidden flex-col gap-5 w-3xs shrink-0 rounded-md h-max sticky top-4">
      <h2 className="font-semibold text-2xl text-neutral-900">Filters</h2>
      <hr className="border-neutral-100" />
      <div className="flex flex-col">
        <span className="font-medium text-neutral-900">Sort By</span>
        <AppSelect options={availableSorts} setValue={setSelectedSort} />
      </div>
      <hr className="border-neutral-100" />
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
      <hr className="border-neutral-100" />
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
  );
}
