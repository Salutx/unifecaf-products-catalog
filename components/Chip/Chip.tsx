// Styles
import Styles from "./Chip.styles";

// Types and Constants
import { ChipProps } from "./Chip.types";

// UI Components
import { Text, TouchableOpacity } from "react-native";

const Chip = ({ label, isSelected, onPress }: ChipProps) => {
  return (
    <TouchableOpacity
      style={[Styles.Chip, isSelected && Styles.ChipSelected]}
      onPress={onPress}
    >
      <Text style={[Styles.ChipLabel, isSelected && Styles.ChipLabelSelected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;
