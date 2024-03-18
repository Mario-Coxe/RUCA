import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text } from "native-base"; // Importe o componente Text do NativeBaseProvider
import Navegation from "./src/screens/Navegation";

const App = () => {
  return (
    <NativeBaseProvider>
      {/* Envolver com NativeBaseProvider */}
      <Navegation />
      {/* Componente Navegation */}
    </NativeBaseProvider>
  );
};

export default App;
