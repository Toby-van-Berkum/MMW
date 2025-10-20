import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import MainButton from "../components/buttons/MainButton";
import Colors from "../constants/colors";
import AuthHeader from "../components/auth/AuthHeader";
import LoginForm from "../components/auth/LoginForm";

function SigninScreen() {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={20}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <AuthHeader headerText={"Sign In"}/>

        <View style={styles.content}>
          <LoginForm />

          {/* Forgot Password link */}
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Full-width Login button */}
          <View style={styles.buttonContainer}>
            <MainButton>Login</MainButton>
          </View>

          {/* Signup prompt */}
          <Text style={styles.signupText}>
            Don’t have an Account?{" "}
            <TouchableOpacity onPress={() => navigation.replace("Signup")}>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  forgotContainer: {
    width: "80%",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  forgotText: {
    color: Colors.primary500,
    fontWeight: "500",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 25,
  },
  signupText: {
    color: "#666",
  },
  linkText: {
    color: Colors.primary500,
    fontWeight: "600",
  },
});