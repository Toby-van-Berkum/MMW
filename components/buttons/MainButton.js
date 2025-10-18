import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";


function MainButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <LinearGradient
        colors={["#8A38F5", "#FF5892", "#FF8C00"]}
        // colors={["#FF8C00", "#FF8C00"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonInnerContainer}
      >
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.button, styles.pressed] : styles.button
          }
          android_ripple={{ color: "#640233" }}
          onPress={() => console.log("Pressed!")}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

export default MainButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    marginHorizontal: 12,
    marginVertical: 4,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonInnerContainer: {
    borderRadius: 28,
    padding: 16,
  },
  button: {
    // This is the style for the Pressable component inside the gradient
    // Its padding is set by the LinearGradient's padding, but you can
    // also use flex to center the text if needed.
    // Ensure no backgroundColor is set here so the gradient is visible.
    // You might add an opacity change here for iOS press feedback if not using flex.
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
