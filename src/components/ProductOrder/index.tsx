import { Image } from "react-native";
import { Container, DetailsProduct, Name, Quantity, Price, ViewPrice } from "./styles";

type ProductOrderProps = {
  name: string;
  price: string;
  quantity: number;
  weight: string
};

function ProductOrder({ name, quantity, price, weight }: ProductOrderProps) {
  return (
    <Container>
      <Image
        style={{
          width: 70,
          height: 70,
          resizeMode: "stretch",
          borderRadius: 40,
        }}
        source={{
          uri: "http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg",
        }}
      />
      <DetailsProduct>
        <Name>{name} - {weight}</Name>
        <Quantity>
          {quantity} x R$ {price}
        </Quantity>
      </DetailsProduct>
      <ViewPrice>
      <Price>R$ {price}</Price>
      </ViewPrice>
      
    </Container>
  );
}

export default ProductOrder;
