import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import LoginRoutesStack from "./src/routes/LoginRoutesStack";
import AppLoading from "expo-app-loading";
import CartContextProvider from "./src/contexts/CartContext";
import OrderContextProvider from "./src/contexts/OrderContex";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "./src/theme/index";

import "./src/services/firebase";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <CartContextProvider>
      <OrderContextProvider>
        <ThemeProvider theme={theme}>
          <LoginRoutesStack />
          <StatusBar style="dark" translucent backgroundColor="transparent" />
        </ThemeProvider>
      </OrderContextProvider>
    </CartContextProvider>
  );
}
