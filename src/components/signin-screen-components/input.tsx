import { TextInput, TextInputProps } from "react-native";

interface AuthTextInputProps extends TextInputProps {
  placeholder: string;
  isPassword?: boolean;
}

function AuthTextInput({
  placeholder,
  isPassword,
  ...rest
}: AuthTextInputProps) {
  return (
    <TextInput
      {...rest}
      placeholder={placeholder}
      secureTextEntry={isPassword}
      className="font-semiHeading rounded-2xl bg-white px-6 py-5 text-lg shadow-2xl"
    />
  );
}

export default AuthTextInput;
