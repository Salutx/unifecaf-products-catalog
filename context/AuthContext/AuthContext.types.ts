export interface AuthContextProps {
  isAuthenticated: boolean;
  login: (data: AuthFormData) => void;
  logout: () => void;
  hasError: boolean;
  handleClearError: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthFormData {
  username: string;
  password: string;
}
