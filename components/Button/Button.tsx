// Styles
import Styles from "./Button.styles";

// Types and Constants
import { ButtonProps } from "./Button.types";

// UI Components
import { Text, TouchableOpacity } from "react-native";

const Button = ({ label, disabled, hasError, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        Styles.Button,
        disabled && Styles.ButtonDisabled,
        hasError && Styles.ButtonError,
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={Styles.Text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
