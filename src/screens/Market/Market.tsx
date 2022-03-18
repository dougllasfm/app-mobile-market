import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import CardProduct from "../../components/CardProduct";
import Header from "../../components/Header";
import {
  Address,
  ButtonCategory, Container,
  InfosMarket, NameCompany,
  Options, Status,
  TaxView,
  Text,
  TextCategory,
  TextTax,
  ViewCompany,
  ViewInfosCompany,
  ViewList,
  ViewNameAndSatus
} from "./styles";

type CompanyProps = {
  id: number;
  name: string;
  address: string;
  taxMinimum: string;
  buyMinimum: string;
  hourOpen: string;
  hourClosed: string;
};

type ProductsProps = {
  id: number;
  name: string;
  price: string;
  weight: string;
  quantity: string;
  description: string;
  category: string;
};

export default function Market({ route }: any) {
  const [search, setSearch] = useState<string>("");
  const [company, setCompany] = useState<CompanyProps>();
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [allProducts, setAllProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    loadDataCompany();
  }, []);

  async function loadDataCompany() {
    try {
      const res = await axios.get(
        "http://192.168.2.7:3060/company",
        route.params.id
      );
      setCompany(res.data);
      setProducts(res.data.products);
      setAllProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFilterCategory(category: string) {
    try {
      if (category === "Todos") {
        setProducts(allProducts);
      } else {
        let productsFilter: ProductsProps[] = [];

        allProducts.map((element) => {
          if (element.category === category) {
            productsFilter.push(element);
          }
        });

        setProducts(productsFilter);
      }
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
          <Options>
            <ButtonCategory onPress={() => handleFilterCategory("Todos")}>
              <TextCategory>Todos</TextCategory>
            </ButtonCategory>
            {allProducts.map((item) => {
              return (
                <ButtonCategory
                  onPress={() => handleFilterCategory(item.category)}
                  key={item.name}
                >
                  <TextCategory>{item.category}</TextCategory>
                </ButtonCategory>
              );
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
