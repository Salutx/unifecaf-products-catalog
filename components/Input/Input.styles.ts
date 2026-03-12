import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 6,
  },
  Title: {
    fontFamily: "Inter",
    color: "#13281F",
    fontWeight: "700",
    fontSize: 12,
  },
  InputWrapper: {
    width: "100%",
    gap: 8,
    height: 40,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 4,
    paddingRight: 12,
    paddingLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  InputWrapperError: {
    borderColor: "#E86060",
  },
  Input: {
    flex: 1,
    fontFamily: "Inter",
    color: "#13281F",
    fontWeight: "400",
    fontSize: 12,
  },
});

export default Styles;
