import { useState } from "react";
import { Image, Text } from "react-native";
import Header from "../../components/Header";
import { Line } from "../../components/Market/styles";
import PlusMinus from "../../components/PlusMinus";

import {
  Container,
  Content,
  Details,
  Confirmation,
  Button,
  ViewButton
} from "./styles";

function ProductDetails({ navigation }: any) {
  const [cart, setCart] = useState(0);

  return (
    <Container>
      <Header navigation={navigation} title={"Nome do produto"} />
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
        <Text
          style={{
            color: "#3a3a3a",
            fontSize: 16,
            marginBottom: 3,
            marginTop: 2,
          }}
        >
          Café Pilão Torrado
        </Text>
        <Details>
          <Text
            style={{
              color: "#8f8f8f",
            }}
          >
            500g
          </Text>
          <Text
            style={{
              color: "green",
            }}
          >
            R$ 15,00
          </Text>
        </Details>
        <Text
          style={{
            color: "#8f8f8f",
            width: 280,
            textAlign: "center",
          }}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC
        </Text>
      </Content>

      <Confirmation>
        <ViewButton>
          <PlusMinus cont={0}/>
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
