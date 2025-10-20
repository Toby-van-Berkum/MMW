// components/auth/AuthLink.js
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function AuthLink({ text, linkText, onPress }) {
  return (
    <Text style={styles.footerText}>
      {text}{" "}
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </Text>
  );
}

export default AuthLink;

const styles = StyleSheet.create({
  footerText: {
    color: "#666",
  },
  linkText: {
    color: Colors.primary500,
    fontWeight: "600",
  },
});
