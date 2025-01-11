import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Image } from "../ui/image";

interface SocialLoginButtonProps extends TouchableOpacityProps {
  title: string;
}

function SocialLoginButton({ title, ...rest }: SocialLoginButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.8}
      className="rounded-xl border-2 border-white bg-transparent px-8 py-3"
    >
      <Image alt="Social Logo" className="h-8 w-8" source={title} />
    </TouchableOpacity>
  );
}

export default SocialLoginButton;
