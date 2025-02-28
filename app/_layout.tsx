import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

/**
 * RootLayout Component (App Entry Point)
 *
 * This component serves as the root layout for the entire application. It's responsible for:
 *   1. Setting up the main navigation structure using a stack navigator.
 *   2. Defining global options for the stack navigator (if any).
 *   3. Configuring the default status bar style for the app.
 *
 * In this project, it acts as the top-level navigation container, managing the flow between different
 * sections of the app (like the tab navigation and the "Not Found" screen).
 */
export default function RootLayout() {
  return (
    <>
      {/*
        StatusBar:
          - This component from 'expo-status-bar' configures the appearance of the device's
            status bar (the area at the top of the screen showing battery, time, etc.).
          - style="light": Sets the status bar text to be light (white), which is suitable
            for dark backgrounds. This is a default setting applied to the entire app unless
            overridden on a specific screen.
      */}
      <StatusBar style="light" />

      {/*
        Stack:
          - This component from 'expo-router' creates a stack-based navigation container.
          - Screens within a stack navigator are stacked on top of each other as the user
            navigates through them.
          - It manages the navigation history and transitions between screens.
          - Think of it like a stack of cards, where each card is a screen.
      */}
      <Stack>
        {/*
          Stack.Screen (Tabs Group):
            - name="(tabs)": This refers to the route group defined by the "(tabs)" folder.
            - The parentheses indicate that this is a layout route group.
            - All files inside the "(tabs)" folder will be children of this route.
            - This creates a nested navigation structure where the tab navigation
                is nested inside this root stack.
            - options={{ headerShown: false }}: This hides the header bar that would normally
              be displayed above this screen and its children screens.
        */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />
        {/*
          Stack.Screen (Not Found):
            - name="+not-found": This refers to the "+not-found.tsx" file, which is used to display
              a "Not Found" or 404 screen when the user tries to navigate to an invalid route.
            - The "+" prefix indicates that this is a special file that will be displayed
              when a user tries to navigate to a not existing route.
            - This screen is part of the main stack, so it can be navigated to like other regular pages.
        */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
