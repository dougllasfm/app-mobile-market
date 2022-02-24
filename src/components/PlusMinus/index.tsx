import { useState } from "react";
import { Container, Minus, Text, Cont, Plus } from "./styles";

type Props = {
  cont: number
}

function PlusMinus({cont} : Props) {
  const [cart, setCart] = useState(cont | 0)

  return (
    <Container>
      <Minus onPress={() => cart > 0 ? setCart(cart-1) : 0} >
        <Text>-</Text>
      </Minus>
      <Cont>{cart}</Cont>
      <Plus onPress={() => setCart(cart+1)} >
        <Text>+</Text>
      </Plus>
    </Container>
  );
}

export default PlusMinus;
