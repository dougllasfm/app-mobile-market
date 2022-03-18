import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Market from "../../components/Market";
import {
  ButtonSearch, Container, Input, Search, Status,
  Text, TextButton
} from "./styles";


type MarketData = {
  id: number;
  name: string;
  address: string;
  taxMinimum: string;
  buyMinimum: string;
  hourOpen: string;
  hourClosed: string;
};

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [markets, setMarkets] = useState<MarketData[]>();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const res = await axios.get("http://192.168.2.7:3060/companys");
    setStatus(1);
    setMarkets(res.data);
  }

  async function searchMarket() {
    try {
      const res = await axios.get("http://192.168.2.7:3060/companyFilter", {
        params: {
          search
        }
      })
      setStatus(1);
      setMarkets(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header title={"Mercados"} />
      <Search>
        <Input
          placeholder="Pesquisar"
          onChangeText={setSearch}
          value={search}
        />
        <ButtonSearch onPress={() => searchMarket()}>
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
