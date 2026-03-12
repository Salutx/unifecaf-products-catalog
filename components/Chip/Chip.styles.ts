import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Chip: {
    borderWidth: 1,
    borderColor: "#DFDFDF",
    borderRadius: 128,
    height: 26,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  ChipSelected: {
    backgroundColor: "#E6F9F1",
    borderColor: "#00BD6B",
  },
  ChipLabel: {
    color: "#13281F",
    fontSize: 12,
    fontWeight: "bold",
  },
  ChipLabelSelected: {
    color: "#00BD6B",
  },
});

export default Styles;
