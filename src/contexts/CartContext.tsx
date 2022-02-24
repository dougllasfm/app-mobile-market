import { createContext, ReactNode, useState } from "react";

type CartContextProviderProps = {
  children: ReactNode
}

type Props = {
  cart: number
  addCart: () => void
  removeCart: () => void
}

export const CartContext = createContext({} as Props)

export default function CartContextProvider(props: CartContextProviderProps) {
  const [cart, setCart] = useState(0)

  function addCart() {
    setCart(cart + 1)
  }

  function removeCart() {
    setCart(cart - 1)
  }

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {props.children}
    </CartContext.Provider>
  )
}
