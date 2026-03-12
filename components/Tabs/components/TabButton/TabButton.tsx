// Styles
import Styles from "./TabButton.styles";

// Types and Constants
import { TabButtonProps } from "./TabButton.types";

// UI Components
import { Text, TouchableOpacity } from "react-native";

const TabButton = ({ label, isSelected, onPress }: TabButtonProps) => {
  return (
    <TouchableOpacity
      style={[Styles.TabButton, isSelected && Styles.TabButtonSelected]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={Styles.Label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabButton;
