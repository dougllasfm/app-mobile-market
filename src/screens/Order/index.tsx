import Header from "../../components/Header";
import ProductOrder from "../../components/ProductOrder";

import {
  Container,
  DetailsOrder,
  NameMarket,
  Address,
  Date,
  DetailsPrice,
  SubTotalView,
  SubTotal,
  Price,
  DeliveryFeeView,
  DeliveryFee,
  TotalView,
  Total,
  DetailsAddress,
  Title,
  AddressDelivery,
} from "./styles";

function Order({ navigation }: any) {
  return (
    <Container>
      <Header title={"Pedido 5458"} />
      <DetailsOrder>
        <NameMarket>Pão de açucar</NameMarket>
        <Address>Av. Central, 458, Querência</Address>
        <Date>17/02/2022</Date>
      </DetailsOrder>
      <ProductOrder name={"Café Pilão Torrado"} />
      <ProductOrder name={"Café Pilão Torrado"} />

      <DetailsPrice>
        <SubTotalView>
          <SubTotal>Subtotal</SubTotal>
          <Price>R$ 90,00</Price>
        </SubTotalView>
        <DeliveryFeeView>
          <DeliveryFee>Taxa de entrega</DeliveryFee>
          <Price>R$ 5,00</Price>
        </DeliveryFeeView>
        <TotalView>
          <Total>Valor total</Total>
          <Price>R$ 95,00</Price>
        </TotalView>
      </DetailsPrice>

      <DetailsAddress>
        <Title>Endereço de entrega</Title>
        <AddressDelivery>Av. norte, 458, Setor B, Querência</AddressDelivery>
      </DetailsAddress>
    </Container>
  );
}

export default Order;
