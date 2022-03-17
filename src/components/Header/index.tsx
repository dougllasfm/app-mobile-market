import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { CartContext } from "../../contexts/CartContext";
import { useTheme } from "styled-components";

import {
  Container,
  Text,
  Cart,
  ViewCartNumber,
  CartNumber,
  Line,
} from "./styles";

interface Props {
  title: string;
}

function Header({title }: Props) {
  const theme = useTheme()
  const navigation = useNavigation();
  const { cart } = useContext(CartContext);

  return (
    <>
      <Container>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../assets/user-profile.jpg")}
            style={{
              height: 38,
              width: 38,
              borderRadius: 40,
            }}
          />
        </TouchableOpacity>
        <Text>{title}</Text>
        <Cart onPress={() => navigation.navigate("Cart")}>
          <ViewCartNumber>
            <CartNumber>{cart}</CartNumber>
          </ViewCartNumber>
          <Feather name="shopping-cart" size={28} color={theme.colors.primary} />
        </Cart>
      </Container>
      <Line />
    </>
  );
}

export default Header;
