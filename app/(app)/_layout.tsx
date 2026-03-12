// React
import { useEffect } from "react";

// React Native
import { View } from "react-native";

// Expo Router
import { Stack, useRouter } from "expo-router";

// Hooks
import useAuthContext from "@/hooks/useAuthContext";

// General Imports
import "react-native-reanimated";

// UI Components
import Header from "@/components/Header";
import { StatusBar } from "expo-status-bar";

export default function HomeLayout() {
  // Navigation
  const router = useRouter();

  // Auth Context
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    // If user is not authenticated, navigate to the login screen
    if (!isAuthenticated) {
      router.replace("/(auth)/login");
    }
  }, [router, isAuthenticated]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar style="dark" />
    </View>
  );
}
