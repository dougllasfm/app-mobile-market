import { View } from "react-native";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  Link,
  AboutProduct,
  DetailsProduct,
  TitleProduct,
  Price,
  Actions,
  PlusMinus,
  Minus,
  Plus,
  Cont,
  Quantity,
} from "./styles";
import { colors } from "../../styles/colors";

function CardProduct() {
  const { addCart, removeCart } = useContext(CartContext);
  const [cartCont, setCardCont] = useState(0);
  const navigation = useNavigation();

  function SetCart() {
    setCardCont(cartCont + 1);
    addCart();
  }

  function SetCartMinus() {
    setCardCont(cartCont - 1);
    removeCart();
  }

  return (
    <Container
      style={{
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 2,
      }}
    >
      <Link onPress={() => navigation.navigate("Product")}>
        <Image
          style={{
            width: 90,
            height: 90,
            resizeMode: "stretch",
            borderRadius: 50,
          }}
          source={{
            uri: "http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg",
          }}
        />
      </Link>
      <AboutProduct>
        <DetailsProduct>
          <TitleProduct>Café pilão</TitleProduct>
          <Price>R$ 30,00</Price>
        </DetailsProduct>
        <Actions>
          <Quantity>3 unidades</Quantity>
          <PlusMinus>
            <Minus onPress={() => (cartCont > 0 ? SetCartMinus() : 0)}>
              <View>
                <AntDesign
                  name="minussquare"
                  size={28}
                  color={colors.primary}
                />
              </View>
            </Minus>
            <Cont>{cartCont}</Cont>
            <Plus onPress={() => SetCart()}>
              <View>
                <AntDesign name="plussquare" size={28} color={colors.primary} />
              </View>
            </Plus>
          </PlusMinus>
        </Actions>
      </AboutProduct>
    </Container>
  );
}

export default CardProduct;
