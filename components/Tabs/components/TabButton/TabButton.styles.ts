import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  TabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#DFDFDF",
    height: 50,
  },
  TabButtonSelected: {
    borderColor: "#00BD6B",
  },
  Label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#13281F",
  },
});

export default Styles;
