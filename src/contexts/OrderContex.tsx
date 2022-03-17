import { createContext, ReactNode, useContext, useState } from "react";
import { CartContext } from "./CartContext";

type OrderContextProviderProps = {
  children: ReactNode;
};

type PropsProduct = {
  key: number
  id: number;
  name: string;
  price: string;
  quantity: number;
  weight: string
  idCompany: number;
};

type Props = {
  order: PropsProduct[];
  addProductInOrder: (props: PropsProduct) => void;
  removeProductInOrder: (id: number) => void;
};

export const OrderContext = createContext({} as Props);

export default function OrderContextProvider(props: OrderContextProviderProps) {
  const [order, setOrder] = useState<PropsProduct[]>([]);
  const { cart } = useContext(CartContext);

  function addProductInOrder({
    id,
    name,
    price,
    quantity,
    weight,
    idCompany
  }: PropsProduct) {
    const data = {
      key: cart,
      id,
      name,
      price,
      quantity,
      weight,
      idCompany,
    };
    setOrder([...order, data]);
  }

  function removeProductInOrder(id: number) {
    let indice = null
    order.map(item => {
      if (item.id === id) {
        indice = order.indexOf(item);
      }
    })    
    order.splice(indice, 1);
  }

  return (
    <OrderContext.Provider
      value={{ order, addProductInOrder, removeProductInOrder }}
    >
      {props.children}
    </OrderContext.Provider>
  );
}
