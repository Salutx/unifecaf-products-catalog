// Styles
import Styles from "./HomeCategories.styles";

// Types and Constants
import { HomeCategoriesProps } from "./HomeCategories.types";

// Hooks
import useHomeContext from "@/hooks/useHomeContext";

// UI Components
import Chip from "@/components/Chip";
import { ScrollView } from "react-native";

const HomeCategories = (props: HomeCategoriesProps) => {
  // Home Context
  const { categoriesByGender, selectedCategory, handleSelectCategory } =
    useHomeContext();

  return (
    <ScrollView
      horizontal
      style={Styles.HomeCategories}
      contentContainerStyle={{ gap: 4 }}
      showsHorizontalScrollIndicator={false}
    >
      {categoriesByGender?.map((category) => (
        <Chip
          key={category.key}
          label={category.name}
          isSelected={selectedCategory === category.key}
          onPress={() => handleSelectCategory(category.key)}
        />
      ))}
    </ScrollView>
  );
};

export default HomeCategories;
