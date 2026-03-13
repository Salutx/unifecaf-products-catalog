import { DummyProduct } from "@/global/types/DummyAPI.types";

export interface HomeContextProps {
  selectedCategoryGender: CategoryGender;
  handleSelectCategoryGender: (categoryGender: CategoryGender) => void;
  selectedCategory: CategoryType;
  handleSelectCategory: (categoryKey: CategoryType) => void;
  categoriesByGender: CategoryItem[];
  handleSelectProduct: (product: DummyProduct) => void;
}

export interface HomeProviderProps {
  children: React.ReactNode;
}

// Category

export type CategoryGender = "men" | "woman";

export type CategoryGenderItem = {
  key: CategoryGender;
  name: string;
};

export type CategoryGenderDictionary = {
  [key in CategoryGender]: CategoryGenderItem;
};

export type CategoryMenType = "mens-shirts" | "mens-shoes" | "mens-watches";

export type CategoryWomanType =
  | "womens-bags"
  | "womens-dresses"
  | "womens-jewellery"
  | "womens-shoes"
  | "womens-watches";

export type CategoryType = CategoryMenType | CategoryWomanType;

export type CategoryItem = {
  key: CategoryType;
  gender: CategoryGender;
  name: string;
};

export type CategoryDictionary = {
  [key in CategoryType]: CategoryItem;
};
