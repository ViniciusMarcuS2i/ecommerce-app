import React from "react";
import { PressableProps } from "react-native";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";

interface WelcomeButtonProps extends PressableProps {
  title1: string;
  title2: string;
}

function WelcomeButton({ title1, title2, ...rest }: WelcomeButtonProps) {
  return (
    <>
      <Pressable
        {...rest}
        style={{ boxShadow: "4px 0 24px -20px" }}
        className="bg-white border-2 border-white py-4 w-52 z-10 rounded-2xl "
      >
        {({ pressed }) => (
          <Text
            className="text-center font-semibold text-primary-500 text-xl "
            style={{ opacity: pressed ? 0.5 : 1 }}
          >
            {title1}
          </Text>
        )}
      </Pressable>
      <Pressable
        {...rest}
        style={{ boxShadow: "4px 0 24px -20px" }}
        className="border-2 border-white py-4 w-52 rounded-2xl rounded-l-none bg-transparent -ml-3 "
      >
        {({ pressed }) => (
          <Text
            className="text-center font-semibold text-xl text-primary-500 "
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
