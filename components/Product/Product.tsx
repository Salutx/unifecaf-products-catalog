// Styles
import Styles from "./Product.styles";

// Types and Constants
import { ProductProps } from "./Product.types";

// UI Components
import { Image, Text, TouchableOpacity, View } from "react-native";

// Lib
import { priceFormatter } from "@/lib/priceFormatter";

const Product = ({ data, onPress }: ProductProps) => {
  const hasDiscount = data?.discountPercentage && data.discountPercentage > 0;
  const price = hasDiscount
    ? (data.price * (100 - data.discountPercentage)) / 100
    : data?.price;

  const formattedOldPrice = priceFormatter(data?.price);
  const formattedPrice = priceFormatter(price);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={Styles.Container}
    >
      {/* Image Wrapper */}
      <View style={Styles.ImageWrapper}>
        <Image
          source={{ uri: data?.thumbnail }}
          style={Styles.ImageThumbnail}
        />
      </View>

      {/* Product Content */}
      <View style={Styles.Content}>
        {/* Content Infos */}
        <View style={Styles.ContentInfos}>
          {/* Title */}
          <Text style={Styles.Title} numberOfLines={2}>
            {data?.title}
          </Text>

          {/* Description */}
          <Text style={Styles.Description} numberOfLines={4}>
            {data?.description}
          </Text>
        </View>

        {/* Price */}
        <View style={Styles.PriceWrapper}>
          {/* Current Price */}
          <Text style={Styles.CurrentPrice}>{formattedPrice}</Text>

          {/* Old Price */}
          {hasDiscount && (
            <Text style={Styles.OldPrice}>{formattedOldPrice}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
