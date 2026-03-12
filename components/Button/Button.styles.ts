import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  Button: {
    width: "100%",
    backgroundColor: "#13281F",
    height: 45,
    borderRadius: 128,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  ButtonDisabled: {
    opacity: 0.8,
  },
  ButtonError: {
    backgroundColor: "#BC4545",
  },
  Text: {
    fontFamily: "Inter_400Regular",
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Style;
