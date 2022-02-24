import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Text,
  Cart,
  ViewCartNumber,
  CartNumber,
  Line,
} from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { colors } from "../../styles/colors";

interface Props {
  title: string;
}

function Header({title }: Props) {
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
        <Cart onPress={() => navigation.navigate("OrderScreen")}>
          <ViewCartNumber>
            <CartNumber>{cart}</CartNumber>
          </ViewCartNumber>
          <Feather name="shopping-cart" size={28} color={colors.primary} />
        </Cart>
      </Container>
      <Line />
    </>
  );
}

export default Header;
