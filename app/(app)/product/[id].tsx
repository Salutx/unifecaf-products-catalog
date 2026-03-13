// Expo Router
import { useLocalSearchParams } from "expo-router";

// Screens
import ProductScreen from "@/screens/ProductScreen";

const ProductPage = () => {
  // Local Search Params
  const { id } = useLocalSearchParams<{ id: string }>();

  return <ProductScreen productId={+id} />;
};

export default ProductPage;
