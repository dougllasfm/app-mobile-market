import { Alert } from "react-native";
import Market from "../../components/Market";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";

import { Container, Search, Input, ButtonSearch, TextButton } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header title={"Mercados"} />
      <Search>
        <Input placeholder="Pesquisar" />
        <ButtonSearch onPress={() => Alert.alert("Simple Button pressed")}>
          <TextButton>
            <Ionicons name="md-search-outline" size={24} color={"#fff"} />
          </TextButton>
        </ButtonSearch>
      </Search>
      <Market
        name="Nilo"
        address="Rua tal"
        taxa="12,00"
        min="5,00"
        status={true}
        hourInitial="10:00"
        hourFinal="19:00"
      />
      <Market
        name="Atacadão"
        address="Avenida"
        taxa="5,00"
        min="5,00"
        status={false}
        hourInitial="08:00"
        hourFinal="19:00"
      />
    </Container>
  );
}
