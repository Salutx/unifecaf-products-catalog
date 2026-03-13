import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Scrollview: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  Wrapper: {},
  ImageWrapper: {
    width: "100%",
    height: 235,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  ImageThumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  Content: {
    flex: 1,
    padding: 16,
    gap: 4,
  },
  ContentInfos: {
    flex: 1,
    gap: 8,
    marginTop: 8,
  },
  Title: {
    color: "#13281F",
    fontSize: 16,
    fontWeight: "bold",
  },
  Description: {
    color: "#656565",
    fontSize: 14,
    fontWeight: "regular",
    lineHeight: 20,
  },
  PriceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  CurrentPrice: {
    color: "#00BD6B",
    fontSize: 22,
    fontWeight: "bold",
  },
  OldPrice: {
    color: "#656565",
    fontSize: 14,
    fontWeight: "regular",
    textDecorationLine: "line-through",
  },
  LoadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Styles;
