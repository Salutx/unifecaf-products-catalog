import Providers from "@/components/Providers";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setButtonStyleAsync("dark");
  }, []);

  return (
    <Providers>
      <Slot screenOptions={{ headerShown: false }} initialRouteName="(auth)" />
      <StatusBar style="auto" />
    </Providers>
  );
}
