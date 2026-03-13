import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Container: {},
  ImageWrapper: {
    width: 48,
    height: 48,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    overflow: "hidden",
  },
  ImagePreview: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  ImagePreviewSelected: {
    borderColor: "#00BD6B",
    backgroundColor: "#E6F9F1",
  },
});

export default Styles;
