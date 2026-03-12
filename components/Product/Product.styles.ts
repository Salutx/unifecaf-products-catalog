import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    maxWidth: 172.5,
    height: 240,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#BDBDBD",
  },
  ImageWrapper: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  Content: {
    flex: 1,
    padding: 8,
    gap: 4,
  },
  Title: {
    fontFamily: "Inter_400Regular",
    color: "#13281F",
    fontSize: 10,
    fontWeight: "500",
  },
  Description: {
    fontFamily: "Inter_400Regular",
    color: "#656565",
    fontSize: 16,
    fontWeight: "600",
  },
  PriceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  CurrentPrice: {
    fontFamily: "Inter_400Regular",
    color: "#13281F",
    fontSize: 14,
    fontWeight: "500",
  },
  OldPrice: {
    fontFamily: "Inter_400Regular",
    color: "#656565",
    fontSize: 10,
    fontWeight: "500",
    textDecorationLine: "line-through",
  },
});

export default Styles;
