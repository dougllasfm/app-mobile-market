import { createContext, ReactNode, useContext, useState } from "react";
import { CartContext } from "./CartContext";

type OrderContextProviderProps = {
  children: ReactNode
}

type PropsProduct = {
  key: number
  id: number
  name: string
  price: string
  quantity: number
  idCompany: number
}

type Props = {
  order: PropsProduct[]
  addProductInOrder: (props: PropsProduct) => void
}

export const OrderContext = createContext({} as Props)

export default function OrderContextProvider(props: OrderContextProviderProps) {
  const [order, setOrder] = useState<PropsProduct[]>([])
  const { cart } = useContext(CartContext)

  function addProductInOrder({id, name, price, quantity, idCompany} : PropsProduct) {
    const data = {
      key: cart,
      id,
      name,
      price,
      quantity,
      idCompany
    }
    setOrder([...order, data])
  }

  return (
    <OrderContext.Provider value={{ order, addProductInOrder}}>
      {props.children}
    </OrderContext.Provider>
  )
}
