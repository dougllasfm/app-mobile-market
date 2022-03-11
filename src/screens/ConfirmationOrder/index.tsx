import { View } from "react-native";
import { Feather, Foundation } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Container, Text, Description } from "./styles";

function ConfirmationOrder() {
  const theme = useTheme()

  return (
    <Container>
      <Feather name="check-circle" size={48} color={theme.colors.primary} />
      <Text>Pedido realizado com sucesso</Text>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          bottom: 15
        }}
      >
        <Foundation name="clipboard-notes" size={24} color={theme.colors.darkBlue} />
        <Description>Acompanhar pedido</Description>
      </View>
    </Container>
  );
}

export default ConfirmationOrder;
