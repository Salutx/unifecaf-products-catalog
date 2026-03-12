// Styles
import Styles from "./Tabs.styles";

// Types and Constants
import { TabsProps } from "./Tabs.types";

// UI Components
import { View } from "react-native";
import TabButton from "./components/TabButton";

const Tabs = ({ tabs, onSelectTab, selectedTabKey }: TabsProps) => {
  return (
    <View style={Styles.Container}>
      {tabs?.map((tab) => (
        <TabButton
          key={tab.key}
          label={tab.label}
          onPress={() => onSelectTab?.(tab)}
          isSelected={selectedTabKey === tab.key}
        />
      ))}
    </View>
  );
};

export default Tabs;
