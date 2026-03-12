// Styles
import useGetProductsByCategory from "@/queries/Dummy/useGetProductsByCategory";
import Styles from "./HomeProducts.styles";

// Types and Constants
import { HomeProductsProps } from "./HomeProducts.types";

// Hooks
import useHomeContext from "@/hooks/useHomeContext";

// UI Components
import Product from "@/components/Product";
import { ScrollView } from "react-native";

const HomeProducts = (props: HomeProductsProps) => {
  // Home Context
  const { selectedCategory } = useHomeContext();

  const { data: category } = useGetProductsByCategory(selectedCategory);

  return (
    <ScrollView
      horizontal
      style={Styles.HomeProducts}
      showsHorizontalScrollIndicator={false}
    >
      {category?.products?.map((product) => (
        <Product key={product.id} data={product} onPress={() => {}} />
      ))}
    </ScrollView>
  );
};

export default HomeProducts;
