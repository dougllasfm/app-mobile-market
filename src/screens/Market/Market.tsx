import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Image } from "react-native";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import Button from "../../components/Button";
import CardProduct from "../../components/CardProduct";
import Header from "../../components/Header";

import {
  Container,
  ViewCompany,
  ViewInfosCompany,
  ViewNameAndSatus,
  NameCompany,
  Status,
  Options,
  InfosMarket,
  Address,
  TaxView,
  TextTax,
  Search,
  Input,
  ButtonSearch,
  Text,
  ViewList,
} from "./styles";

type CompanyProps = {
  id: number
  name: string;
  address: string;
  taxMinimum: string;
  buyMinimum: string;
  hourOpen: string;
  hourClosed: string;
};

type ProductsProps = {
  id: number
  name: string;
  price: string;
  weight: string;
  quantity: string;
  description: string;
  category: string;
};

export default function Market({ route }: any) {
  const [company, setCompany] = useState<CompanyProps>();
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    loadDataCompany();
  }, []);

  async function loadDataCompany() {
    try {
      const res = await axios.get(
        "http://192.168.2.7:3060/company",
        route.params.id
      );
      setProducts(res.data.products);
      setCompany(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function Resolve() {
    if (company == null || company == undefined) {
      return <Text>Carregando ...</Text>;
    } else {
      return (
        <>
          <Header title={company.name} />
          <InfosMarket>
            <ViewCompany>
              <Image
                source={require("../../assets/logo.png")}
                style={{
                  height: 38,
                  width: 38,
                  borderRadius: 40,
                }}
              />
              <ViewInfosCompany>
                <ViewNameAndSatus>
                  <NameCompany>{company.name}</NameCompany>
                  <Status status={true}>{true ? "Aberto" : "Fechado"}</Status>
                </ViewNameAndSatus>
                <Address>{company.address}</Address>
              </ViewInfosCompany>
            </ViewCompany>

            <TaxView>
              <MaterialIcons
                name="attach-money"
                size={18}
                color="gray"
                style={{
                  marginRight: -5,
                }}
              />
              <TextTax>Entrega R$ {company.taxMinimum}</TextTax>
              <AntDesign
                name="solution1"
                size={18}
                color="gray"
                style={{
                  marginLeft: 8,
                }}
              />
              <TextTax>Compra mínima R$ {company.buyMinimum}</TextTax>
            </TaxView>
          </InfosMarket>
          <Search>
            <Input placeholder="Pesquisar produto" />
            <ButtonSearch onPress={() => Alert.alert("Simple Button pressed")}>
              <Text>
                <Ionicons name="md-search-outline" size={24} color={"#fff"} />
              </Text>
            </ButtonSearch>
          </Search>
          <Options>
            {products.map((item) => {
              return <Button key={item.name} name={item.category} />;
            })}
          </Options>
          <ViewList>
            {products.map((item) => {
              return (
                <CardProduct
                  key={item.name}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  weight={item.weight}
                  description={item.description}
                  idCompany={company.id}
                />
              );
            })}
          </ViewList>
        </>
      );
    }
  }

  return (
    <Container>
      <Resolve />
    </Container>
  );
}
