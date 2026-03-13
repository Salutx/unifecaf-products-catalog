// Styles
import Styles from "./PageHeader.styles";

// Types and Constants
import { PageHeaderProps } from "./PageHeader.types";

// UI Components
import { Text, TouchableOpacity, View } from "react-native";

// Icons
import { MaterialIcons } from "@expo/vector-icons";

const PageHeader = ({ onBack, title }: PageHeaderProps) => {
  return (
    <View style={Styles.Container}>
      {/* Header Side */}
      <View style={Styles.HeaderSide}>
        {/* Header Back */}
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={0.8}
          style={Styles.HeaderBack}
        >
          <MaterialIcons name="arrow-back" size={20} color={"#00BD6B"} />
        </TouchableOpacity>

        {/* Header Title */}
        <Text style={Styles.HeaderTitle} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default PageHeader;
