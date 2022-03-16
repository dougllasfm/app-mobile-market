import { createContext, ReactNode, useState } from "react";

type OrderContextProviderProps = {
  children: ReactNode
}

type PropsProduct = {
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

  function addProductInOrder({id, name, price, quantity, idCompany} : PropsProduct) {
    const data = {
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
