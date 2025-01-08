import { Image } from "@/src/components/ui/image";
import ScreenContainer from "@/src/components/screen-container";
import { VStack } from "@/src/components/ui/vstack";
import { Heading } from "@/src/components/ui/heading";
import { Text } from "@/src/components/ui/text";
import { HStack } from "@/src/components/ui/hstack";
import WelcomeButton from "@/src/components/welcome-screen-components/button";

function SignIn() {
  return (
    <ScreenContainer>
      <Image
        source={require("@/src/assets/welcome-image.png")}
        className="w-96 h-96 self-center mt-24"
      />
      <VStack className="px-8 pt-36 gap-5">
        <Heading className="text-center text-3xl">
          Descubra Seus Melhores Produtos aqui!
        </Heading>
        <Text className="text-center ">
          Explore os melhores produtos existentes que você esteja interessado e
          precisando aqui!
        </Text>
      </VStack>
      <HStack className="flex-1 justify-center items-end pb-12">
        <WelcomeButton title1="Registrar" title2="Entrar" />
      </HStack>
    </ScreenContainer>
  );
}

export default SignIn;
