// Contexts
import { AuthProvider } from "@/context/AuthContext";

// React Navigation
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";

// Tanstack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Types and Constants
import { ProvidersProps } from "./Providers.types";

// Initialize Query Client
const queryClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={DefaultTheme}>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
