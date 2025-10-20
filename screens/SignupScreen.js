import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity  } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import MainButton from "../components/buttons/MainButton";
import Colors from "../constants/colors";
import AuthHeader from "../components/auth/AuthHeader";
import RegisterForm from "../components/auth/RegisterForm";

function SignupScreen() {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={30}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <AuthHeader headerText={"Create Account"}/>
        <View style={styles.content}>
          <RegisterForm />
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
  content: {
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 25,
  },
  footerText: {
    color: "#666",
    alignContent: "center",
    textAlign: "center",
  },
  linkText: {
    color: Colors.primary500,
    fontWeight: "600",
  },
});
