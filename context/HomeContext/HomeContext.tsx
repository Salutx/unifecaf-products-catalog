// React
import { createContext, useMemo, useState } from "react";

// Expo Router
import { useRouter } from "expo-router";

// Types and Constants
import { DummyProduct } from "@/global/types/DummyAPI.types";
import { getCategoriesByGender } from "./HomeContext.constants";
import {
  CategoryGender,
  CategoryItem,
  CategoryType,
  HomeContextProps,
  HomeProviderProps,
} from "./HomeContext.types";

// Context
export const HomeContext = createContext<HomeContextProps>(
  {} as HomeContextProps,
);

// Provider
export const HomeProvider = ({ children }: HomeProviderProps) => {
  // Router
  const router = useRouter();

  // States
  const [selectedCategoryGender, setSelectedCategoryGender] =
    useState<CategoryGender>("men");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("mens-shirts");

  // Categories By Gender
  const categoriesByGender: CategoryItem[] = useMemo(
    () => getCategoriesByGender({ gender: selectedCategoryGender }),
    [selectedCategoryGender],
  );

  // Handle Select Category Gender
  const handleSelectCategoryGender = (categoryGender: CategoryGender) => {
    setSelectedCategoryGender((prev) => {
      if (prev === categoryGender) return prev;
      return categoryGender;
    });

    setSelectedCategory(() => {
      const categories = getCategoriesByGender({ gender: categoryGender });
      return categories[0].key;
    });
  };

  // Handle Select Category
  const handleSelectCategory = (categoryKey: CategoryType) => {
    setSelectedCategory((prev) => {
      if (prev === categoryKey) return prev;
      return categoryKey;
    });
  };

  // Handle Select Product
  const handleSelectProduct = (product: DummyProduct) => {
    router.push({
      pathname: "/product/[id]",
      params: { id: product.id },
    });
  };

  return (
    <HomeContext.Provider
      value={{
        selectedCategory,
        handleSelectCategory,
        selectedCategoryGender,
        handleSelectCategoryGender,
        categoriesByGender,
        handleSelectProduct,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
