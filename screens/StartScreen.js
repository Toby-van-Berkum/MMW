import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MainButton from "../components/buttons/MainButton";

function StartScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["purple", "red", "orange"]}
        style={styles.headerContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image
          style={styles.imageLogo}
          source={require("../assets/icon.png")}
        />
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.welcomeMessage}>Welcome!</Text>
        <View style={styles.buttonContainer}>
          <MainButton>Create Account</MainButton>
          <MainButton>Login</MainButton>
        </View>
      </View>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLogo: {
    height: 120,
    width: 120,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  welcomeMessage: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "80%",
    gap: 20,
  },
});
