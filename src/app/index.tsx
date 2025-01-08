import { Text, View } from "react-native";

function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 32, fontWeight: 800 }}>
        salve
      </Text>
    </View>
  );
}

export default Home;
