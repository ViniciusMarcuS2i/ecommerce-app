import ScreenContainer from "@/src/components/screen-container";
import { VStack } from "@/src/components/ui/vstack";
import { Text } from "@/src/components/ui/text";
import { TextInput, TouchableOpacity } from "react-native";
import { Button, ButtonText } from "@/src/components/ui/button";
import { HStack } from "@/src/components/ui/hstack";
import Svg, { Line } from "react-native-svg";
import SocialLoginButton from "@/src/components/signin-screen-components/social-login-button";
import { Google } from "@/src/assets/images";
import { Apple } from "@/src/assets/images";
import { router } from "expo-router";

function SignIn() {
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
        <TextInput
          placeholder="E-mail"
          className="font-semiHeading rounded-2xl bg-white px-6 py-5 text-lg shadow-2xl"
        />
        <TextInput
          secureTextEntry
          placeholder="Senha"
          className="font-semiHeading rounded-2xl bg-white px-6 py-5 text-lg text-gray-800 shadow-2xl"
        />
        <TouchableOpacity activeOpacity={0.7}>
          <Text className="font-heading text-right text-blue-400">
            Esqueci a senha
          </Text>
        </TouchableOpacity>
      </VStack>
      <Button className="bg-primary mx-8 mt-12 h-16 rounded-xl shadow-2xl active:opacity-80">
        <ButtonText className="font-heading text-xl">Entrar</ButtonText>
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
        <Text className="font-heading">Não tem uma conta?</Text>
        <Text
          onPress={() => router.navigate("/(auth)/sign-up")}
          className="font-heading text-blue-400"
        >
          Criar conta
        </Text>
      </HStack>
    </ScreenContainer>
  );
}

export default SignIn;
