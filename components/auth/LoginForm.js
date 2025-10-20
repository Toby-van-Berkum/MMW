import { View, StyleSheet } from "react-native";

import AuthInput from "./AuthInput";

function AuthForm() {
  return (
    <View style={styles.form}>
      <AuthInput
        label="Email"
        textInputConfig={{
          placeholder: "Email",
          keyboardType: "email-address",
          autoCorrect: false,
        }}
      />
      <AuthInput
        label="Password"
        textInputConfig={{
          placeholder: "Password",
          secureTextEntry: true,
          autoCorrect: false,
        }}
      />
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 20,
    width: "100%",
  },
});