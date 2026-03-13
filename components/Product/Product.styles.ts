import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: 240,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#BDBDBD",
    overflow: "hidden",
  },
  ImageWrapper: {
    width: "100%",
    height: 100,
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
    padding: 8,
    gap: 4,
  },
  ContentInfos: {
    flex: 1,
    gap: 4,
  },
  Title: {
    color: "#13281F",
    fontSize: 12,
    fontWeight: "bold",
  },
  Description: {
    fontFamily: "Inter_400Regular",
    color: "#656565",
    fontSize: 12,
    fontWeight: "regular",
    lineHeight: 16,
  },
  PriceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  CurrentPrice: {
    fontFamily: "Inter_400Regular",
    color: "#13281F",
    fontSize: 18,
    fontWeight: "bold",
  },
  OldPrice: {
    fontFamily: "Inter_400Regular",
    color: "#656565",
    fontSize: 10,
    fontWeight: "regular",
    textDecorationLine: "line-through",
  },
});

export default Styles;
