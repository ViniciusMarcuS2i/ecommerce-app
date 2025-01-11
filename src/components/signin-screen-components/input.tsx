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
      className="h-20 rounded-2xl bg-white px-6 font-semiHeading text-xl shadow-sm"
    />
  );
}

export default AuthTextInput;
