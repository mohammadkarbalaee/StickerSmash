import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

// Define the type for the props that the ImageViewer component will receive.
type Props = {
  imgSource: ImageSource; // The source of the image to display. It can be a local file path or a network URL.
};

/**
 * A reusable component for displaying an image.
 *
 * @param {Props} props - The properties for the ImageViewer component.
 * @param {ImageSource} props.imgSource - The source of the image to display.
 * @returns {JSX.Element} An Image component.
 */
export default function ImageViewer({ imgSource }: Props) {
  return (
    // The Image component from 'expo-image' is used to display the image.
    <Image
      source={imgSource} // The source of the image, passed as a prop.
      style={styles.image} // Apply the styles defined in the styles object.
    />
  );
}

// Define the styles for the ImageViewer component.
const styles = StyleSheet.create({
  image: {
    width: 320, // Set a fixed width for the image.
    height: 440, // Set a fixed height for the image.
    borderRadius: 18, // Add rounded corners to the image.
  },
});
