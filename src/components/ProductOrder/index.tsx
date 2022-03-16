import { Image } from "react-native";
import { Container, DetailsProduct, Name, Quantity, Price } from "./styles";

type ProductOrderProps = {
  name: string;
  price: string
  quantity: number
};

function ProductOrder({ name, quantity, price }: ProductOrderProps) {
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
        <Name>{name} - 500g</Name>
        <Quantity>{quantity} x R$ {price}</Quantity>
      </DetailsProduct>
      <Price>R$ {price}</Price>
    </Container>
  );
}

export default ProductOrder;
