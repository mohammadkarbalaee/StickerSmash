import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Define the type for the props that the Button component will receive.
type Props = {
  label: string; // The text label to display on the button.
  theme?: "primary"; // An optional theme to style the button differently (e.g., "primary").
};

/**
 * A reusable Button component that can be styled in different ways.
 *
 * @param {Props} props - The properties for the Button component.
 * @param {string} props.label - The text label to display on the button.
 * @param {string} [props.theme] - An optional theme to style the button differently (e.g., "primary").
 * @returns {JSX.Element} A Button component.
 */
export default function Button({ label, theme }: Props) {
  // Check if the 'theme' prop is set to 'primary'.
  if (theme === "primary") {
    // If the theme is 'primary', render a styled button with a border and icon.
    return (
      <View
        /**
         * The interesting thing is that you can have styles in the format of lists.
         * Here we use an array of styles to combine base styles with theme-specific styles.
         */
        style={[
          styles.buttonContainer, // Apply the base button container styles.
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 } // Add theme-specific styles: border width, color, and radius.
        ]}
      >
        {/* Pressable is used to make the button interactive */}
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]} // Apply base button styles and override background color to white.
          onPress={() => alert("You pressed a button.")} // Define what happens when the button is pressed.
        >
          {/* FontAwesome icon to display a picture-o icon.*/}
          <FontAwesome
            name="picture-o" // The name of the icon to use.
            size={18} // The size of the icon.
            color="#25292e" // The color of the icon.
            style={styles.buttonIcon} // Apply the buttonIcon styles.
          />
          {/* Text component to display the button's label. */}
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label} {/* Display the provided label. */}
          </Text>
        </Pressable>
      </View>
    );
  }

  // If the theme is not 'primary' (or if no theme is specified), render the default button.
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

// Define the styles for the Button component.
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320, // Set a fixed width for the button container.
    height: 68, // Set a fixed height for the button container.
    marginHorizontal: 20, // Add horizontal margin for spacing.
    alignItems: "center", // Center content horizontally.
    justifyContent: "center", // Center content vertically.
    padding: 3 // Add padding inside the container.
  },
  button: {
    borderRadius: 10, // Add rounded corners to the button.
    width: "100%", // Make the button take up the full width of the container.
    height: "100%", // Make the button take up the full height of the container.
    alignItems: "center", // Center content horizontally.
    justifyContent: "center", // Center content vertically.
    flexDirection: "row" // Arrange content in a row (for icon and text).
  },
  buttonIcon: {
    paddingRight: 8 // Add padding to the right of the icon to separate it from the label.
  },
  buttonLabel: {
    color: "#fff", // Set the default text color to white.
    fontSize: 16 // Set the font size for the label.
  }
});
