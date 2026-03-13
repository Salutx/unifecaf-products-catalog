// Styles
import Styles from "./ImagesPreview.styles";

// Types and Constants
import { ImagesPreviewProps } from "./ImagesPreview.types";

// UI Components
import { Image, ScrollView, TouchableOpacity } from "react-native";

const ImagesPreview = ({
  images,
  onPressImage,
  selectedImage,
}: ImagesPreviewProps) => {
  return (
    <ScrollView
      horizontal
      style={Styles.Container}
      alwaysBounceHorizontal={false}
      contentContainerStyle={{ gap: 8 }}
    >
      {images.map((image) => (
        <TouchableOpacity
          style={[
            Styles.ImageWrapper,
            selectedImage === image && Styles.ImagePreviewSelected,
          ]}
          key={image}
          onPress={() => onPressImage(image)}
        >
          <Image source={{ uri: image }} style={Styles.ImagePreview} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ImagesPreview;
