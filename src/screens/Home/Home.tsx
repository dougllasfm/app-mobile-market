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
import axios from "axios";

type MarketData = {
  id: number
  name: string;
  address: string;
  taxMinimum: string;
  buyMinimum: string;
  hourOpen: string;
  hourClosed: string;
};

export default function Home() {
  const [markets, setMarkets] = useState<MarketData[]>();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const res = await axios.get("http://192.168.2.7:3060/companys")
    setStatus(1);
    setMarkets(res.data)
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
            key={item.id}
            id={item.id}
            name={item.name}
            address={item.address}
            taxa={item.taxMinimum}
            min={item.buyMinimum}
            status={true}
            hourInitial={item.hourOpen}
            hourFinal={item.hourClosed}
          />
        );
      })}
    </Container>
  );
}
