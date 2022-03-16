import { View } from "react-native";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

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
import { OrderContext } from "../../contexts/OrderContex";

type ProductProps = {
  id: number
  name: string;
  price: string;
  quantity: string;
  weight: string
  description: string
  idCompany: number
};

function CardProduct({ id, name, price, quantity, weight, description, idCompany }: ProductProps) {
  const theme = useTheme();
  const navigation = useNavigation();
  const { addCart, removeCart } = useContext(CartContext);
  const { addProductInOrder, order } = useContext(OrderContext)
  const [cartCont, setCardCont] = useState(0);

  function SetCart() {
    setCardCont(cartCont + 1);    
    const data = {
      id,
      name,
      price,
      quantity: 1,
      idCompany
    }
    addProductInOrder(data)
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
      <Link onPress={() => navigation.navigate("Product", {
        name,
        price,
        weight,
        description
      })}>
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
          <TitleProduct>{name}</TitleProduct>
          <Price>R$ {price}</Price>
        </DetailsProduct>
        <Actions>
          <Quantity>{quantity} unidades</Quantity>
          <PlusMinus>
            <Minus onPress={() => (cartCont > 0 ? SetCartMinus() : 0)}>
              <View>
                <AntDesign
                  name="minussquare"
                  size={28}
                  color={theme.colors.primary}
                />
              </View>
            </Minus>
            <Cont>{cartCont}</Cont>
            <Plus onPress={() => SetCart()}>
              <View>
                <AntDesign
                  name="plussquare"
                  size={28}
                  color={theme.colors.primary}
                />
              </View>
            </Plus>
          </PlusMinus>
        </Actions>
      </AboutProduct>
    </Container>
  );
}

export default CardProduct;
