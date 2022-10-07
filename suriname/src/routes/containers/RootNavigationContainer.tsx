import React, { useState } from "react";
import RootNavigation from "../RootNavigation";

const RootNavigationContainer = () => {
  const [root, setRoot] = useState("");

  return <RootNavigation root={"main"} />;
};

export default RootNavigationContainer;
