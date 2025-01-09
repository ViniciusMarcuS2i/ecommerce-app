import { ImageBackground } from "react-native";

function ScreenContainer({ children }: { children: React.ReactNode }) {
  return (
    <ImageBackground
      source={require("../assets/bg-image.png")}
      className="relative flex-1 bg-[#f0e7e3]"
    >
      {children}
    </ImageBackground>
  );
}

export default ScreenContainer;
