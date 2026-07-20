import { globalStyles } from "@/styles/global-styles";
import { SpaceMono_400Regular, useFonts } from "@expo-google-fonts/space-mono";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, View } from "react-native";

import * as SystemUI from "expo-system-ui";

const isAndroid = Platform.OS === "android";
if (isAndroid) {
  SystemUI.setBackgroundColorAsync("transparent");
}

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: SpaceMono_400Regular,
  });

  if (!loaded) return null;

  return (
    <View style={globalStyles.background}>
      <StatusBar style="auto" />
      <Slot />
    </View>
  );
};

export default RootLayout;
