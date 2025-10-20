// components/auth/AuthHeader.js
import { View, Image, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/colors";

function AuthHeader({headerText}) {
  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.secondary500, Colors.accent500]}
      style={styles.headerBackground}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.title}>{headerText}</Text>
    </LinearGradient>
  );
}

export default AuthHeader;

const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});