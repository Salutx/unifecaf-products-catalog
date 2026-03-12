// React
import { createContext, useEffect, useState } from "react";

// Expo Router
import { useRouter } from "expo-router";

// Types and Constants
import { getIsValidCredentials } from "./AuthContext.constants";
import {
  AuthContextProps,
  AuthFormData,
  AuthProviderProps,
} from "./AuthContext.types";

// Context
export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

// Provider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Router
  const router = useRouter();

  // States
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // Handle Login
  const handleLogin = (data: AuthFormData) => {
    const isValid = getIsValidCredentials(data);

    if (!isValid) {
      setHasError(true);
      return;
    }

    setIsAuthenticated(isValid);

    // Redirect to Home
    setTimeout(() => {
      router.replace("/(app)/home");
    }, 1000);
  };

  // Error Cleanup
  useEffect(() => {
    if (hasError) {
      const timer = setTimeout(() => {
        setHasError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasError]);

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setHasError(false);
  };

  // Handle Clear Error
  const handleClearError = () => {
    setHasError(false);
  };

  return (
    <AuthContext.Provider
      value={{
        login: handleLogin,
        logout: handleLogout,
        isAuthenticated,
        hasError,
        handleClearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
