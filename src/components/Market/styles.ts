import { colors } from './../../styles/colors';
import styled from "styled-components/native";

type Props = {
  status: boolean
}

export const ImageView = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 12px;
`

export const ViewImage = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: ${colors.darkBlue};
  height: 140px;
  border-radius: 12px;
  margin: 0px 15px 10px;
`

export const InformationsMarket = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: -25px;
  height: 70px;
  border-radius: 12px;
  margin: 3px 15px 0px;
  background: #fff;
`;

export const Details = styled.View`
  margin-left: 10px;
`;

export const NameMarket = styled.Text`
  color: ${colors.darkBlue};
  font-size: 18px;
  margin-bottom: 2px;
  font-weight: bold;
`;

export const ViewHours = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Hours = styled.Text`
  color: ${colors.darkBlue};
  font-weight: bold;
  font-size: 14px;
`;

export const Status = styled.Text<Props>`
  color: ${(props) => (props.status ? colors.green : colors.red )};
  font-size: 14px;
  margin-left: 6px;
`

export const Rate = styled.View`
  margin-right: 10px;
`;

export const Tax = styled.View`
  flex-direction: row;
`;

export const TextTax = styled.Text`
  margin: 0 5px;
  color: ${colors.darkGray};
  font-size: 14px;
`;

