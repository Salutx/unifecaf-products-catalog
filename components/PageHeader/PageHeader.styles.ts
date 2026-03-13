import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Container: {
    width: "100%",
    paddingHorizontal: 16,
    height: 50,
    borderBottomWidth: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#DFDFDF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  HeaderBack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  HeaderTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#13281F",
  },
});

export default Styles;
