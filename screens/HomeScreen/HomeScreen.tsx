// Styles
import Styles from "./HomeScreen.styles";

// Types and Constants
import { TabItem } from "@/components/Tabs/Tabs.types";
import { CATEGORY_GENDER_DICTIONARY_ARRAY } from "@/context/HomeContext/HomeContext.constants";
import { CategoryGender } from "@/context/HomeContext/HomeContext.types";
import { HomeScreenProps } from "./HomeScreen.types";

// Hooks
import useHomeContext from "@/hooks/useHomeContext";

// UI Components
import Tabs from "@/components/Tabs";
import { View } from "react-native";
import HomeCategories from "./components/HomeCategories";
import HomeProducts from "./components/HomeProducts";

const HomeScreen = (props: HomeScreenProps) => {
  // Home Screen
  const { selectedCategoryGender, handleSelectCategoryGender } =
    useHomeContext();

  // Tabs Items
  const tabsItems: TabItem[] = CATEGORY_GENDER_DICTIONARY_ARRAY?.map(
    (categoryGender) => ({
      key: categoryGender.key,
      label: categoryGender.name,
    }),
  );

  return (
    <View style={Styles.Container}>
      {/* Tabs */}
      <Tabs
        tabs={tabsItems}
        selectedTabKey={selectedCategoryGender}
        onSelectTab={(tab) =>
          handleSelectCategoryGender(tab?.key as CategoryGender)
        }
      />

      {/* Content */}
      <View style={Styles.Content}>
        {/* Home Categories */}
        <HomeCategories />

        {/* Home Products */}
        <HomeProducts />
      </View>
    </View>
  );
};

export default HomeScreen;
