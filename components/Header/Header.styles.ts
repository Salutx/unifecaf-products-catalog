import { StatusBar, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Header: {
    width: "100%",
    marginTop: 8 + StatusBar.currentHeight!,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 12,
  },
  HeaderSide: {
    alignItems: "center",
    gap: 6,
    flexDirection: "row",
  },
  HeaderUser: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  HeaderUserAvatar: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#00BD6B",
  },
  HeaderUserAvatarLabels: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  HeaderUserName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#13281F",
  },
  HeaderLogout: {},
  HeaderLogoutText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#13281F",
  },
});

export default Styles;
