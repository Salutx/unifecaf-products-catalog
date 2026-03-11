import Providers from "@/components/Providers";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Providers>
      <Slot screenOptions={{ headerShown: false }} initialRouteName="(auth)" />
      <StatusBar style="auto" />
    </Providers>
  );
}
