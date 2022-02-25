import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/Routes";
import LoginRoutesStack from "./src/routes/LoginRoutesStack";
import CartContextProvider from "./src/contexts/CartContext";
import { useEffect, useState } from "react";
import { getLogin } from "./src/utils/storage";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme/index"

import "./src/services/firebase";

export default function App() {
  const [userLogin, setUserLogin] = useState<boolean>(true);

  useEffect(() => {
    async function storageLogin() {
      const value = await getLogin();
      if (value == null || value == undefined) {
        setUserLogin(false);
      }
    }

    storageLogin();
  }, []);

  return (
    <>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
        {userLogin ? <LoginRoutesStack /> : <Routes />}
        <StatusBar style="dark" />
        </ThemeProvider>
      </CartContextProvider>
    </>
  );
}
