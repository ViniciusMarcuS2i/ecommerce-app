import ScreenContainer from "./screen-container";
import { Spinner } from "./ui/spinner";
import { VStack } from "./ui/vstack";

function Loading() {
  return (
    <ScreenContainer>
      <VStack className="flex-1 items-center justify-center">
        <Spinner size="large" className="text-white" />
      </VStack>
    </ScreenContainer>
  );
}

export default Loading;
