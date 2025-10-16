import { availableColors, availableSizes, availableSorts } from "@/constants";
import { useState } from "react";

export default function useFilters() {
  const [selectedSort, setSelectedSort] = useState(availableSorts[0].value);
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);
  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);

  return {
    selectedSort,
    setSelectedSort,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
  };
}
