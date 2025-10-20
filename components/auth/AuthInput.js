import { Text, TextInput, StyleSheet, View } from "react-native";

function AuthInput({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        {...textInputConfig}
        style={styles.input}
      />
    </View>
  );
}

export default AuthInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
});
