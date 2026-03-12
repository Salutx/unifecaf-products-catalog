import { Dimensions, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  Wrapper: {
    width: "100%",
    flexDirection: "column",
    gap: 24,
  },
  Header: {
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    zIndex: 99,
    width: "100%",
  },
  HeaderContent: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    width: "100%",
  },
  HeaderTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  HeaderSubtitle: {
    fontSize: 12,
    color: "#fff",
  },
  Content: {
    zIndex: 99,
    padding: 24,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    gap: 24,
    flexDirection: "column",
    boxShadow: "-2px 16px 24px rgba(0, 0, 0, 0.10)",
  },
  ContentForm: {
    gap: 16,
    flexDirection: "column",
  },
  BackgroundRectangle: {
    position: "absolute",
    height: "50%",
    width: Dimensions.get("window").width,
    backgroundColor: "#13281F",
    top: 0,
  },
});

export default Styles;
