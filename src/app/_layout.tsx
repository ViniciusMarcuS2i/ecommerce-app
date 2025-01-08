import { Slot } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { StatusBar } from "react-native";

function Layout() {
  return (
    <GluestackUIProvider mode="light">
      <StatusBar barStyle="light-content" translucent />
      <Slot />
    </GluestackUIProvider>
  );
}

export default Layout;
