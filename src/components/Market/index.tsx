import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign, Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import {
  ImageView,
  ViewImage,
  InformationsMarket,
  Details,
  NameMarket,
  ViewHours,
  Hours,
  Status,
  Rate,
  Tax,
  TextTax,
} from "./styles";

type MarketProps = {
  id: number
  name: string;
  address: string;
  min: string;
  taxa: string;
  status: boolean;
  hourInitial: string;
  hourFinal: string;
};

function Market(props: MarketProps) {
  const navigation = useNavigation();
  const theme = useTheme()

  return (
    <>
      <ViewImage
        onPress={() =>
          navigation.navigate("Market", {
            id: props.id
          })
        }
      >
        <ImageView source={require("../../assets/pizza.jpg")} />
      </ViewImage>

      <InformationsMarket
        style={{
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 3,
        }}
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate("Market", {
            name: props.name,
            address: props.address,
            taxa: props.taxa,
            min: props.min,
            status: props.status,
          })
        }
      >
        <Details>
          <NameMarket>{props.name}</NameMarket>
          <ViewHours>
            <Feather
              name="clock"
              size={14}
              color={theme.colors.darkBlue}
              style={{
                marginRight: 3,
              }}
            />
            <Hours>
              {props.hourInitial} - {props.hourFinal}
            </Hours>
            <Status status={props.status}>
              {props.status ? "Aberto" : "Fechado"}
            </Status>
          </ViewHours>
        </Details>
        <Rate>
          <Tax>
            <MaterialIcons
              name="attach-money"
              size={18}
              color="gray"
              style={{
                marginBottom: 4,
              }}
            />
            <TextTax>Min R$ {props.taxa}</TextTax>
          </Tax>
          <Tax>
            <AntDesign name="solution1" size={18} color="gray" />
            <TextTax>Máx R$ {props.min}</TextTax>
          </Tax>
        </Rate>
      </InformationsMarket>
    </>
  );
}

export default Market;
