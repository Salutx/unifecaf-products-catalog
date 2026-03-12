// Styles
import Styles from "./Product.styles";

// Types and Constants
import { ProductProps } from "./Product.types";

// UI Components
import { Image, Text, TouchableOpacity, View } from "react-native";

const Product = ({ data, onPress }: ProductProps) => {
  const hasDiscount = data?.discountPercentage && data.discountPercentage > 0;
  const price = hasDiscount
    ? (data.price * (100 - data.discountPercentage)) / 100
    : data?.price;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={Styles.Container}
    >
      {/* Image Wrapper */}
      <View style={Styles.ImageWrapper}>
        <Image source={{ uri: data?.thumbnail }} />
      </View>

      {/* Product Content */}
      <View style={Styles.Content}>
        {/* Title */}
        <Text style={Styles.Title} numberOfLines={2}>
          {data?.title}
        </Text>

        {/* Description */}
        <Text style={Styles.Description} numberOfLines={3}>
          {data?.description}
        </Text>

        {/* Price */}
        <View style={Styles.PriceWrapper}>
          {/* Current Price */}
          <Text style={Styles.CurrentPrice}>R$ {price?.toFixed(2)}</Text>

          {/* Old Price */}
          {hasDiscount && (
            <Text style={Styles.OldPrice}>R$ {data?.price?.toFixed(2)}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
