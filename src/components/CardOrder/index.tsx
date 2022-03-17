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

type OrdersProps = {
  nameMarket: string
  addressUser: string
  orderId: number
  quantity: number
  navigation: any
}

function CardOrder(props: OrdersProps) {
  
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
    >
      <Image source={require("../../assets/logo.png")} />
      <Details>
        <NameMarket>{props.nameMarket}</NameMarket>
        <Order>Pedido nº {props.orderId}</Order>
        <Address>{props.addressUser}</Address>
        <Buy>R$ 450,00 - {props.quantity} itens</Buy>
        <Date>17/02/2022</Date>
      </Details>
    </Container>
  );
}

export default CardOrder;
