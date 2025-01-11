import React from "react";
import { PressableProps } from "react-native";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";
import Animated from "react-native-reanimated";
import { router, useNavigation } from "expo-router";

interface WelcomeButtonProps extends PressableProps {
  title1: string;
  title2: string;
}

function WelcomeButton({ title1, title2, ...rest }: WelcomeButtonProps) {
  return (
    <>
      <Pressable
        {...rest}
        onPress={() => router.navigate("/(auth)/sign-up")}
        style={{ boxShadow: "4px 0 24px -20px" }}
        className="z-10 w-52 rounded-2xl border-2 border-white bg-white py-4"
      >
        {({ pressed }) => (
          <Text
            className="font-semiHeading text-center text-xl text-primary-500"
            style={{ opacity: pressed ? 0.5 : 1 }}
          >
            {title1}
          </Text>
        )}
      </Pressable>
      <Pressable
        {...rest}
        onPress={() => router.navigate("/(auth)/sign-in")}
        style={{ boxShadow: "4px 0 24px -20px" }}
        className="-ml-3 w-52 rounded-2xl rounded-l-none border-2 border-white bg-transparent py-4"
      >
        {({ pressed }) => (
          <Text
            className="font-semiHeading text-center text-xl text-primary-500"
            style={{ opacity: pressed ? 0.5 : 1 }}
          >
            {title2}
          </Text>
        )}
      </Pressable>
    </>
  );
}

export default WelcomeButton;
