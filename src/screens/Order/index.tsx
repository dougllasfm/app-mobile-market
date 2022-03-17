import axios from "axios";
import { Text } from "react-native";
import { useContext } from "react";
import ProductOrder from "../../components/ProductOrder";
import { OrderContext } from "../../contexts/OrderContex";
import { getLogin } from "../../utils/storage";

import Header from "../../components/Header";

import {
  Container,
  ViewText,
  TextNothing,
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
  ButtonConfirmView,
  ButtonConfirm,
} from "./styles";

function Order({ navigation }: any) {
  const { order } = useContext(OrderContext);

  async function handleSubmitOrder() {
    try {
      let arrayProducts: number[] = [];
      let company = null;
      let user = parseInt(await getLogin());

      order.forEach((element) => {
        company = element.idCompany;
        if (arrayProducts.indexOf(element.id) == -1) {
          arrayProducts.push(element.id);
        }
      });

      const data = {
        company,
        user,
        product: arrayProducts,
      };

      await axios.post("http://192.168.2.7:3060/createOrder", data);
      navigation.navigate("OrderScreen");
    } catch (error) {
      console.log(error);
    }
  }

  const PriceElement = () => {
    let price = 0;
    order.forEach((element) => {
      price = price + parseInt(element.price);
    });
    return <Price>R$ {price.toFixed(2).replace(".", ",")}</Price>;
  };

  const PriceTotal = () => {
    let price = 0;
    order.forEach((element) => {
      price = price + parseInt(element.price);
    });
    price += 5;
    return <Price>R$ {price.toFixed(2).replace(".", ",")}</Price>;
  };

  function ResolveRender() {
    if (order.length == 0) {
      return <ViewText><TextNothing>Nenhum produto no carrinho até o momento</TextNothing></ViewText>;
    } else {
      return (
        <>
          <DetailsOrder>
            <NameMarket>Pão de açucar</NameMarket>
            <Address>Av. Central, 458, Querência</Address>
            <Date>17/02/2022</Date>
          </DetailsOrder>
          {order.map((item) => {
            return (
              <ProductOrder
                key={item.key}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                weight={item.weight}
              />
            );
          })}

          <DetailsPrice>
            <SubTotalView>
              <SubTotal>Subtotal</SubTotal>
              <PriceElement />
            </SubTotalView>
            <DeliveryFeeView>
              <DeliveryFee>Taxa de entrega</DeliveryFee>
              <Price>R$ 5,00</Price>
            </DeliveryFeeView>
            <TotalView>
              <Total>Valor total</Total>
              <PriceTotal />
            </TotalView>
          </DetailsPrice>

          <DetailsAddress>
            <Title>Endereço de entrega</Title>
            <AddressDelivery>
              Av. norte, 458, Setor B, Querência
            </AddressDelivery>
          </DetailsAddress>
          <ButtonConfirmView onPress={handleSubmitOrder}>
            <ButtonConfirm>Confirmar pedido</ButtonConfirm>
          </ButtonConfirmView>
        </>
      );
    }
  }

  return (
    <Container>
      <Header title={"Carrinho"} />
      <ResolveRender />
    </Container>
  );
}

export default Order;
