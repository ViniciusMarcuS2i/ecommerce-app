import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@/src/components/ui/input";
import { HStack } from "@/src/components/ui/hstack";
import { VStack } from "@/src/components/ui/vstack";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native";
import { SearchIcon } from "@/src/components/ui/icon";

function Home() {
  return (
    <VStack className="flex-1 bg-[#fffeff] pt-24">
      <HStack className="items-center justify-between px-6">
        <TouchableOpacity
          activeOpacity={0.5}
          className="rounded-full bg-gray p-3"
        >
          <Ionicons name="grid-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          className="rounded-full bg-gray p-3"
        >
          <Ionicons name="notifications-outline" size={20} />
        </TouchableOpacity>
      </HStack>
      <Input size="xl" className="mx-6 mt-3 rounded-2xl bg-gray pl-4">
        <InputSlot>
          <InputIcon color="black" as={SearchIcon} />
        </InputSlot>
        <InputField className="font-body text-lg" placeholder="Procurar..." />
      </Input>
      <ScrollView></ScrollView>
    </VStack>
  );
}

export default Home;
