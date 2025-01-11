import { Redirect } from "expo-router";
import { useState } from "react";

function Index() {
  const [user, setUser] = useState(false);

  if (user) {
    return <Redirect href="/home" />;
  }

  if (!user) {
    return <Redirect href="/welcome" />;
  }
}

export default Index;
