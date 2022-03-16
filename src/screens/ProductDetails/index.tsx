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


function ProductDetails({route}) {
  const [cart, setCart] = useState(0);

  return (
    <Container>
      <Header title={route.params.name} />
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
        <NameProduct>{route.params.name}</NameProduct>
        <Details>
          <Weight>{route.params.weight}</Weight>
          <Price>R$ {route.params.price}</Price>
        </Details>
        <Description>
          {route.params.description}
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
