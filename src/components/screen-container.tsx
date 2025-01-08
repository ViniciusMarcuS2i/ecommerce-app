import Svg, { Circle } from "react-native-svg";

import { VStack } from "./ui/vstack";

function ScreenContainer({ children }: { children: React.ReactNode }) {
  return (
    <VStack className="flex-1 relative bg-[#f0e7e3]">
      <VStack style={{ position: "absolute", top: 220, filter: "blur(20px)" }}>
        <Svg height="350px" width="100%" viewBox="0 0 100 100">
          <Circle cx="50" cy="80" r="80" fill="#dbbeb1" />
        </Svg>
      </VStack>
      <VStack style={{ position: "absolute", bottom: 0 }}>
        <Svg height="350px" width="100%" viewBox="0 0 100 100">
          <Circle cx="50" cy="80" r="80" fill="#f0e2d8" />
        </Svg>
      </VStack>
      {children}
    </VStack>
  );
}

export default ScreenContainer;
