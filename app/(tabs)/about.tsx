import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
  Pressable
} from "react-native";
import React from "react";

export default function About() {
  const handleEmailPress = () => {
    const email = "mohammad.karbalaee@fau.de";
    const subject = "StickerSmash App Feedback";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    Linking.openURL(mailtoUrl);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/icon.png")} // Replace with your app's logo
          style={styles.logo}
        />
        <Text style={styles.title}>StickerSmash</Text>
        <Text style={styles.description}>
          Welcome to StickerSmash! This app is designed to let you collect and
          organize your favorite stickers. You can add new stickers, view your
          collection, and organize them in many categories.
        </Text>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <Text style={styles.feature}>
          - Add New Stickers: Easily add new stickers to your collection.
        </Text>
        <Text style={styles.feature}>
          - View Your Collection: See all your collected stickers in one place.
        </Text>
        <Text style={styles.feature}>- Organize stickers by categories.</Text>
        <Text style={styles.sectionTitle}>About the Developer</Text>
        <Text style={styles.description}>
          StickerSmash is developed by Mohammad. We hope you enjoy using this
          app and have fun collecting stickers!
        </Text>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.description}>
          For any questions, feedback, or support, please feel free to contact
          us at:
          <Pressable onPress={handleEmailPress}>
            <Text style={styles.email}> mohammad.karbalaee@fau.de</Text>
          </Pressable>
        </Text>
        <Text style={styles.copyright}>
          © {new Date().getFullYear()} StickerSmash. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#25292e"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#25292e"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffd33d",
    marginBottom: 10
  },
  description: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20
  },
  sectionTitle: {
    color: "#ffd33d",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20
  },
  feature: {
    color: "#fff",
    marginBottom: 5,
    textAlign: "center"
  },
  copyright: {
    color: "#999",
    fontSize: 12,
    marginTop: 30
  },
  email: {
    color: "#ffd33d",
    textDecorationLine: "underline"
  }
});
