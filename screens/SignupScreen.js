import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity  } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import MainButton from "../components/buttons/MainButton";
import Colors from "../constants/colors";

function SignupScreen() {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={20}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <LinearGradient
          colors={[Colors.primary500, Colors.secondary500, Colors.accent500]}
          style={styles.headerContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Image
            style={styles.imageLogo}
            resizeMode="contain"
            source={require("../assets/mmw_logo.png")}
          />
        </LinearGradient>

        <View style={styles.content}>
          <Text style={styles.title}>Create Account</Text>

          <TextInput placeholder="Username" style={styles.input} />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput placeholder="Password" secureTextEntry style={styles.input} />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <MainButton>Sign Up</MainButton>
          </View>

          <Text style={styles.footerText}>
            Already have an Account?{" "}
            <TouchableOpacity onPress={() => navigation.replace("Signin")}>
              <Text style={styles.linkText}>Log in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SignupScreen;

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
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 10,
    marginBottom: 25,
  },
  footerText: {
    color: "#666",
  },
  linkText: {
    color: Colors.primary500,
    fontWeight: "600",
  },
});
