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

export default function Market({ navigation, route }: any) {
  return (
    <Container>
      <Header title={"Nome do mercado"} />
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
              <NameCompany>{route.params.name}</NameCompany>
              <Status>{route.params.status}</Status>
            </ViewNameAndSatus>
            <Address>{route.params.address}</Address>
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
          <TextTax>Entrega R$ {route.params.taxa}</TextTax>
          <AntDesign
            name="solution1"
            size={18}
            color="gray"
            style={{
              marginLeft: 8,
            }}
          />
          <TextTax>Compra mínima R$ {route.params.min}</TextTax>
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
        <Button name={"Doces"} />
        <Button name={"Carne"} />
        <Button name={"Frutas"} />
        <Button name={"Bebidas"} />
      </Options>
      <ViewList>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ViewList>
    </Container>
  );
}
