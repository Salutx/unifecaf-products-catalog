// React
import { useEffect } from "react";

// Expo Router
import { Stack, useRouter } from "expo-router";

// Hooks
import useAuthContext from "@/hooks/useAuthContext";

// General Imports
import "react-native-reanimated";

export default function AuthLayout() {
  // Navigation
  const router = useRouter();

  // Auth Context
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    // If user is authenticated, navigate to the main app
    if (isAuthenticated) {
      router.replace("/(app)/home");
    }
  }, [isAuthenticated, router]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
