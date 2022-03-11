import { useEffect, useState } from "react";
import { Alert } from "react-native";
import Market from "../../components/Market";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Search,
  Input,
  ButtonSearch,
  TextButton,
  Status,
  Text,
} from "./styles";

type MarketData = {
  nameCompany: string;
  addressCompany: string;
  taxMinimum: string;
  buyMinimum: string;
  hourInitial: string;
  hourFinal: string;
};

export default function Home() {
  const [markets, setMarkets] = useState<MarketData[]>();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    loadData();
  }, [markets]);

  async function loadData() {
    setStatus(1);
  }

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
      {status == 0 && (
        <Status>
          <Text>Carregando mercados...</Text>
        </Status>
      )}

      {markets?.map((item) => {
        return (
          <Market
            key={item.nameCompany}
            name={item.nameCompany}
            address={item.addressCompany}
            taxa={item.taxMinimum}
            min={item.buyMinimum}
            status={true}
            hourInitial={item.hourInitial}
            hourFinal={item.hourFinal}
          />
        );
      })}
    </Container>
  );
}
