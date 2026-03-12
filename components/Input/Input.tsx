// React
import { useState } from "react";

// Styles
import Styles from "./Input.styles";

// Types and Constants
import { InputProps } from "./Input.types";

// UI Components
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Input = ({
  title,
  hasPasswordView = false,
  secureTextEntry,
  hasError,
  ...rest
}: InputProps) => {
  // State
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Handle Toggle Password View
  const handleTogglePasswordView = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={Styles.Container}>
      {/* Text Title */}
      {title && <Text style={Styles.Title}>{title}</Text>}

      {/* Input Wrapper */}
      <View style={[Styles.InputWrapper, hasError && Styles.InputWrapperError]}>
        <TextInput
          style={Styles.Input}
          secureTextEntry={showPassword ? false : secureTextEntry}
          {...rest}
        />

        {/* Password View */}
        {secureTextEntry && (
          <TouchableOpacity onPress={handleTogglePasswordView}>
            <Text>{showPassword ? "Ocultar" : "Ver"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
