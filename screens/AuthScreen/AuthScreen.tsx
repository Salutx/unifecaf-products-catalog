// React
import { useState } from "react";

// Styles
import Styles from "./AuthScreen.styles";

// Types and Constants
import { AuthScreenProps } from "./AuthScreen.types";

// Assets
import AluvyLogo from "@/assets/images/aluvy-logo-60-47.png";

// Hooks
import useAuthContext from "@/hooks/useAuthContext";

// UI Components
import Button from "@/components/Button";
import Input from "@/components/Input";
import { AuthFormData } from "@/context/AuthContext/AuthContext.types";
import { Image, Text, View } from "react-native";

const AuthScreen = (props: AuthScreenProps) => {
  // Auth Context
  const { login, hasError, handleClearError } = useAuthContext();

  // States
  const [loginForm, setLoginForm] = useState<AuthFormData>({
    username: "",
    password: "",
  });

  // Handle Change Form
  const handleChangeForm = (field: keyof AuthFormData, value: string) => {
    // Clear error if exists
    if (hasError) handleClearError();

    // Update form state
    setLoginForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Derived States
  const allFieldsFilled = Object.values(loginForm).every(
    (value) => value.trim() !== "",
  );

  return (
    <View style={Styles.Container}>
      {/* Header */}
      <View style={Styles.Wrapper}>
        <View style={Styles.Header}>
          {/* Aluvy Loco */}
          <Image source={AluvyLogo} style={{ width: 60, height: 47 }} />

          {/* Header Content */}
          <View style={Styles.HeaderContent}>
            <Text style={Styles.HeaderTitle}>Bem-vindo de volta!</Text>
            <Text style={Styles.HeaderSubtitle}>
              Insira seus dados para entrar na sua conta.
            </Text>
          </View>
        </View>

        {/* Content */}
        <View style={Styles.Content}>
          {/* Content Form */}
          <View style={Styles.ContentForm}>
            {/* User Input */}
            <Input
              title="Usuário"
              onChangeText={(value) => handleChangeForm("username", value)}
              value={loginForm.username}
              placeholder="Insira seu usuário"
              hasError={hasError}
            />

            {/* User Input */}
            <Input
              title="Senha"
              placeholder="Insira sua senha"
              hasPasswordView
              onChangeText={(value) => handleChangeForm("password", value)}
              value={loginForm.password}
              secureTextEntry={true}
              hasError={hasError}
              onSubmitEditing={() => {
                if (allFieldsFilled) login(loginForm);
              }}
            />
          </View>

          {/* Content Button */}
          <Button
            label={hasError ? "Credenciais inválidas" : "Acessar Plataforma"}
            disabled={!allFieldsFilled}
            onPress={() => login(loginForm)}
            hasError={hasError}
          />
        </View>
      </View>

      {/* Background Rectangle */}
      <View style={Styles.BackgroundRectangle} />
    </View>
  );
};

export default AuthScreen;
