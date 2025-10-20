// components/auth/AuthInput.js
import { TextInput, StyleSheet } from "react-native";

function AuthInput({ placeholder, secureTextEntry, keyboardType = "default" }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={styles.input}
    />
  );
}

export default AuthInput;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
});
