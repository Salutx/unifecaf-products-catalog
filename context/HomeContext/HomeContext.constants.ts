import {
  CategoryDictionary,
  CategoryGender,
  CategoryGenderDictionary,
} from "./HomeContext.types";

// ===========================================

// Category Gender Dictionary
export const CATEGORY_GENDER_DICTIONARY: CategoryGenderDictionary = {
  men: {
    key: "men",
    name: "Produtos Masculinos",
  },
  woman: {
    key: "woman",
    name: "Produtos Femininos",
  },
};

export const CATEGORY_GENDER_DICTIONARY_ARRAY = Object.values(
  CATEGORY_GENDER_DICTIONARY,
);

// ===========================================

// Category Dictionary
export const CATEGORY_DICTIONARY: CategoryDictionary = {
  "mens-shirts": {
    key: "mens-shirts",
    gender: "men",
    name: "Camisas",
  },
  "mens-shoes": {
    key: "mens-shoes",
    gender: "men",
    name: "Calçados",
  },
  "mens-watches": {
    key: "mens-watches",
    gender: "men",
    name: "Relógios",
  },
  "womens-bags": {
    key: "womens-bags",
    gender: "woman",
    name: "Bolsas",
  },
  "womens-dresses": {
    key: "womens-dresses",
    gender: "woman",
    name: "Vestidos",
  },
  "womens-jewellery": {
    key: "womens-jewellery",
    gender: "woman",
    name: "Joias",
  },
  "womens-shoes": {
    key: "womens-shoes",
    gender: "woman",
    name: "Calçados",
  },
  "womens-watches": {
    key: "womens-watches",
    gender: "woman",
    name: "Relógios",
  },
};

export const CATEGORY_DICTIONARY_ARRAY = Object.values(CATEGORY_DICTIONARY);

// ===========================================

interface GetCategoriesByGenderProps {
  gender: CategoryGender;
}

export const getCategoriesByGender = ({
  gender,
}: GetCategoriesByGenderProps) => {
  return CATEGORY_DICTIONARY_ARRAY.filter(
    (category) => category.gender === gender,
  );
};
