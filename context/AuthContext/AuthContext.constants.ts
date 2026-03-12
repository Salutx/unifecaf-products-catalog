import { AuthFormData } from "./AuthContext.types";

// ==============================

// Default Credentials for Testing
export const DEFAULT_AUTH_CREDENTIALS: AuthFormData = {
  username: "admin",
  password: "admin123",
};

// ==============================

export const getIsValidCredentials = (credentials: AuthFormData): boolean => {
  return (
    credentials.username === DEFAULT_AUTH_CREDENTIALS.username &&
    credentials.password === DEFAULT_AUTH_CREDENTIALS.password
  );
};
