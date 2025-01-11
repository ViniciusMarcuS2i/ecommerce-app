import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import ScreenContainer from "@/src/components/screen-container";
import AuthTextInput from "@/src/components/signin-screen-components/input";
import { Button, ButtonText } from "@/src/components/ui/button";
import { HStack } from "@/src/components/ui/hstack";
import Svg, { Line } from "react-native-svg";
import SocialLoginButton from "@/src/components/signin-screen-components/social-login-button";
import { Apple, Google } from "@/src/assets/images";
import { router } from "expo-router";

function SignUp() {
  return (
    <ScreenContainer>
      <VStack className="gap-5 pt-24">
        <Text className="font-heading text-center text-3xl text-black">
          Bem-vindo!
        </Text>
        <Text className="text-center text-2xl">
          Que bom te ver aqui!{"\n"}
          vamos comprar?
        </Text>
      </VStack>
      <VStack className="gap-5 px-8 pt-14">
        <AuthTextInput placeholder="Nome" />
        <AuthTextInput placeholder="E-mail" />
        <AuthTextInput isPassword placeholder="Senha" />
      </VStack>
      <Button className="bg-primary mx-8 mt-12 h-16 rounded-xl shadow-sm active:opacity-80">
        <ButtonText className="font-heading text-xl">Criar Conta</ButtonText>
      </Button>
      <HStack className="mt-10 items-center justify-center">
        <Svg height="1" width="70">
          <Line x1="0" y1="0" x2="100" y2="0" stroke="black" strokeWidth="3" />
        </Svg>
        <Text className="px-4 text-lg text-black">ou</Text>
        <Svg height="1" width="70">
          <Line x1="0" y1="0" x2="100" y2="0" stroke="black" strokeWidth="3" />
        </Svg>
      </HStack>
      <HStack className="mt-10 justify-center gap-5">
        <SocialLoginButton title={Google} />
        <SocialLoginButton title={Apple} />
      </HStack>
      <HStack className="mt-12 justify-center gap-2">
        <Text className="font-heading">Já tem uma conta?</Text>
        <Text
          onPress={() => router.navigate("/(auth)/sign-in")}
          className="font-heading text-blue-400"
        >
          Entrar
        </Text>
      </HStack>
    </ScreenContainer>
  );
}

export default SignUp;
