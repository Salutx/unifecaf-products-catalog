// Styles
import useGetProductsByCategory from "@/queries/Dummy/useGetProductsByCategory";
import Styles from "./HomeProducts.styles";

// Types and Constants
import { HomeProductsProps } from "./HomeProducts.types";

// Hooks
import useHomeContext from "@/hooks/useHomeContext";

// UI Components
import Product from "@/components/Product";
import { ActivityIndicator, FlatList, View } from "react-native";

const HomeProducts = (props: HomeProductsProps) => {
  // Home Context
  const { selectedCategory, handleSelectProduct } = useHomeContext();

  const { data: category, isLoading } =
    useGetProductsByCategory(selectedCategory);

  if (isLoading) {
    return (
      <View style={Styles.LoadingContainer}>
        <ActivityIndicator size="large" color="#00BD6B" />
      </View>
    );
  }

  return (
    <FlatList
      style={Styles.HomeProducts}
      data={category?.products}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ gap: 8 }}
      columnWrapperStyle={{ gap: 8 }}
      renderItem={({ item }) => (
        <Product data={item} onPress={() => handleSelectProduct(item)} />
      )}
    />
  );
};

export default HomeProducts;
