// components/auth/AuthHeader.js
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/colors";

function AuthHeader() {
  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.secondary500, Colors.accent500]}
      style={{
        width: "100%",
        height: 250,
        justifyContent: "center",
        alignItems: "center",
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Image
        style={{ height: 120, width: 120 }}
        resizeMode="contain"
        source={require("../../assets/mmw_logo.png")}
      />
    </LinearGradient>
  );
}

export default AuthHeader;
