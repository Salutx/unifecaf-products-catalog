// React
import { useEffect, useState } from "react";

// Styles
import Styles from "./ProductScreen.styles";

// Expo Router
import { useRouter } from "expo-router";

// Types and Constants
import { ProductScreenProps } from "./ProductScreen.types";

// Hooks
import useGetProductById from "@/queries/Dummy/useGetProductById";

// Lib
import { priceFormatter } from "@/lib/priceFormatter";

// UI Components
import ImagesPreview from "@/components/ImagesPreview";
import PageHeader from "@/components/PageHeader";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

const ProductScreen = ({ productId }: ProductScreenProps) => {
  // Router
  const router = useRouter();

  // Get Product By Id
  const { data, isLoading } = useGetProductById(productId);

  // States
  const [selectedImage, setSelectedImage] = useState<string>("");

  // If not loading and no data, redirect to Home
  useEffect(() => {
    if (!isLoading && !data) {
      router.replace("/(app)/home");
    }
  }, [isLoading, data, router]);

  // Initialize Selected Image
  useEffect(() => {
    if (selectedImage.trim() === "") {
      setSelectedImage(data?.images[0] || "");
    }
  }, [data?.images, selectedImage]);

  // Derived States
  const hasDiscount = data?.discountPercentage && data.discountPercentage > 0;
  const price = hasDiscount
    ? (data.price * (100 - data.discountPercentage)) / 100
    : data?.price;
  const formattedOldPrice = priceFormatter(data?.price);
  const formattedPrice = priceFormatter(price);

  if (isLoading) {
    return (
      <View style={Styles.LoadingContainer}>
        <ActivityIndicator size="large" color="#00BD6B" />
      </View>
    );
  }

  return (
    <View style={Styles.Container}>
      {/* Page Header */}
      <PageHeader
        title={data?.title || "Produto não especificado"}
        onBack={() => router.push("/(app)/home")}
      />

      {/* Scroll View */}
      <ScrollView
        style={Styles.Scrollview}
        showsVerticalScrollIndicator={false}
      >
        <View style={Styles.Wrapper}>
          {/* Image Wrapper */}
          <View style={Styles.ImageWrapper}>
            <Image
              source={{ uri: selectedImage }}
              style={Styles.ImageThumbnail}
            />
          </View>

          {/* Product Content */}
          <View style={Styles.Content}>
            {/* Images Preview */}
            <ImagesPreview
              images={data?.images || []}
              onPressImage={setSelectedImage}
              selectedImage={selectedImage}
            />

            {/* Content Infos */}
            <View style={Styles.ContentInfos}>
              {/* Title */}
              <Text style={Styles.Title} numberOfLines={2}>
                {data?.title}
              </Text>

              {/* Description */}
              <Text style={Styles.Description} numberOfLines={6}>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
