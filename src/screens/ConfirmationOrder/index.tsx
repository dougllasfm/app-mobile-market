import { View } from "react-native";
import { Feather, Foundation, Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { Container, Text, Description } from "./styles";

function ConfirmationOrder() {
  return (
    <Container>
      <Feather name="check-circle" size={48} color={colors.primary} />
      <Text>Pedido realizado com sucesso</Text>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          bottom: 15
        }}
      >
        <Foundation name="clipboard-notes" size={24} color={colors.darkBlue} />
        <Description>Acompanhar pedido</Description>
      </View>
    </Container>
  );
}

export default ConfirmationOrder;
