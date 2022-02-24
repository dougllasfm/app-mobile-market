import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes/Routes";
import CartContextProvider from "./src/contexts/CartContext";
import "./src/services/firebase"

export default function App() {
  return (
    <>
      <CartContextProvider>
        <Routes />
        <StatusBar style="dark" />
      </CartContextProvider>
    </>
  );
}