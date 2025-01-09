import { Image } from "@/src/components/ui/image";
import ScreenContainer from "@/src/components/screen-container";
import { HStack } from "@/src/components/ui/hstack";
import WelcomeButton from "@/src/components/welcome-screen-components/button";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Text } from "@/src/components/ui/text";

function SignIn() {
  return (
    <ScreenContainer>
      <Image
        alt="Welcome Image"
        source={require("@/src/assets/welcome-image.png")}
        className="mt-24 h-96 w-96 self-center"
      />
      <Animated.View
        entering={FadeInDown.duration(500)}
        className="gap-5 px-10 pt-36"
      >
        <Text className="font-heading text-center text-3xl text-black">
          Descubra Seus{"\n"}
          Melhores Produtos Aqui!
        </Text>
        <Animated.Text
          entering={FadeInDown.duration(700)}
          className="font-body text-center"
        >
          Explore os melhores produtos existentes que você esteja interessado e
          precisando aqui!
        </Animated.Text>
      </Animated.View>
      <HStack className="flex-1 items-end justify-center pb-12">
        <WelcomeButton title1="Registrar" title2="Entrar" />
      </HStack>
    </ScreenContainer>
  );
}

export default SignIn;
