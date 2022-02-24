import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Image,
  Details,
  NameMarket,
  Order,
  Address,
  Buy,
  Date,
} from "./styles";

function CardOrder() {
  const navigation = useNavigation();

  return (
    <Container
      style={{
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 2,
      }}
      onPress={() => navigation.navigate("Order")}
    >
      <Image source={require("../../assets/logo.png")} />
      <Details>
        <NameMarket>Pão de açucar</NameMarket>
        <Order>Pedido 5458</Order>
        <Address>Av. Norte, 745</Address>
        <Buy>R$ 450,00 - 5 itens</Buy>
        <Date>17/02/2022</Date>
      </Details>
    </Container>
  );
}

export default CardOrder;
