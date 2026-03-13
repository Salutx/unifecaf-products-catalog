// Styles
import Styles from "./Header.styles";

// Types and Constants
import { HeaderProps } from "./Header.types";

// Hooks
import useAuthContext from "@/hooks/useAuthContext";

// UI Components
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

// Assets
import AluvyLogo from "@/assets/images/aluvy-logo-24-24.png";

const Header = (props: HeaderProps) => {
  // Auth Context
  const { logout } = useAuthContext();

  return (
    <View style={Styles.Header}>
      {/* Header Side */}
      <View style={Styles.HeaderSide}>
        {/* Header User */}
        <View style={Styles.HeaderUser}>
          {/* Header User Avatar */}
          <View style={Styles.HeaderUserAvatar}>
            <Text style={Styles.HeaderUserAvatarLabels}>LM</Text>
          </View>

          {/* Header User Name */}
          <Text style={Styles.HeaderUserName}>Lucas Matos</Text>
        </View>

        {/* Aluvy Logo */}
        <Image source={AluvyLogo} style={{ width: 24, height: 24 }} />
      </View>

      {/* Header Side */}
      <View style={Styles.HeaderSide}>
        {/* Header Logout */}
        <TouchableOpacity
          style={Styles.HeaderLogout}
          activeOpacity={0.6}
          onPress={logout}
        >
          <Text style={Styles.HeaderLogoutText}>Sair</Text>
          <MaterialIcons name="exit-to-app" size={20} color={"#00BD6B"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
