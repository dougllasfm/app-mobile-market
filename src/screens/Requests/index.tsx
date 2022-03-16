import { Container } from "./styles";
import Header from "../../components/Header";
import CardOrder from "../../components/CardOrder";
import { useEffect, useState } from "react";
import axios from "axios";
import { getLogin } from "../../utils/storage";

type OrdersProps = {
  nameMarket: string
  addressUser: string
  orderId: number
  quantity: number
}

function Requests() {
  const [orders, setOrders] = useState<OrdersProps[]>([])

  useEffect(() => {
    loadOrderUser()
  }, []);

  async function loadOrderUser() {
    try {
      let arrayOrders: OrdersProps[] = []
      const userId = await getLogin();
      const res = await axios.get("http://192.168.2.7:3060/orderUser", {
        params: {
          userId: userId,
        },
      });
      res.data.map(element => {
        const data = {
          orderId: element.id,
          nameMarket: element.company.name,
          addressUser: element.user.address,
          quantity: element.products.length
        }
        arrayOrders.push(data)
      })
      setOrders(arrayOrders)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header title={"Pedidos"} />
      {orders.map(element => {
        return (
          <CardOrder 
            key={element.orderId}
            nameMarket={element.nameMarket}
            addressUser={element.addressUser}
            orderId={element.orderId}
            quantity={element.quantity}
            navigation
          />
        )
      })}
    </Container>
  );
}

export default Requests;
