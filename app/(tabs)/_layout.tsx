import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Sticker Smash"
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About"
        }}
      />
    </Tabs>
  );
}
