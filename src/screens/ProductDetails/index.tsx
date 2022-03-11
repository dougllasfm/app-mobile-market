import { useState } from "react";
import { Image, Text } from "react-native";
import Header from "../../components/Header";
import PlusMinus from "../../components/PlusMinus";

import {
  Container,
  Content,
  NameProduct,
  Weight,
  Price,
  Description,
  Details,
  Confirmation,
  Button,
  ViewButton,
} from "./styles";

function ProductDetails() {
  const [cart, setCart] = useState(0);

  return (
    <Container>
      <Header title={"Nome do produto"} />
      <Content>
        <Image
          style={{
            width: 140,
            height: 140,
            resizeMode: "stretch",
            borderRadius: 10,
          }}
          source={{
            uri: "http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg",
          }}
        />
        <NameProduct>Café Pilão Torrado</NameProduct>
        <Details>
          <Weight>500g</Weight>
          <Price>R$ 15,00</Price>
        </Details>
        <Description>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </Description>
      </Content>

      <Confirmation>
        <ViewButton>
          <PlusMinus cont={0} />
          <Button>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
              }}
            >
              Adicionar ao carrinho
            </Text>
          </Button>
        </ViewButton>
      </Confirmation>
    </Container>
  );
}

export default ProductDetails;
