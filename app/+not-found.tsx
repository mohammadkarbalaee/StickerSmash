import { View, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";

/**
 * NotFoundScreen Component
 *
 * This component is displayed when the user navigates to a route that doesn't exist within the app.
 * It provides a user-friendly message and a link to navigate back to the home screen.
 *
 * @returns {JSX.Element} A React component representing the "Not Found" screen.
 */
export default function NotFoundScreen() {
  return (
    <>
      {/* Stack.Screen: Configures the header for this screen within the navigation stack. */}
      <Stack.Screen options={{ title: "Oops! Not Found" }} />

      {/* Main container for the "Not Found" screen content. */}
      <View style={styles.container}>
        {/* Error message to inform the user that the page was not found. */}
        <Text style={styles.errorText}>
          The page you are looking for could not be found.
        </Text>

        {/* Link: A navigation component from 'expo-router' that allows the user to go back to the home screen. */}
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

// StyleSheet: Defines the styles for the components in the "Not Found" screen.
const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the full available space.
    backgroundColor: "#25292e", // Set the background color to dark gray.
    justifyContent: "center", // Center content vertically within the container.
    alignItems: "center", // Center content horizontally within the container.
    padding: 20 // Add padding around the content for better spacing.
  },
  errorText: {
    color: "#fff", // Set the text color to white.
    fontSize: 18, // Set the font size to 18.
    textAlign: "center", // Center the text horizontally.
    marginBottom: 20 // Add margin below the text to separate it from the button.
  },
  button: {
    fontSize: 18, // Set the font size to 18.
    textDecorationLine: "underline", // Add an underline to the text to make it look like a link.
    color: "#ffd33d" // Set the text color to yellow (accent color).
  }
});
