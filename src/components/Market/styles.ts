import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

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
  background: ${({ theme }) => theme.colors.darkBlue};
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
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${RFPercentage(3.4)}px;
  margin-bottom: 2px;
  font-family: ${({ theme }) => theme.fonts.title};
`;

export const ViewHours = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Hours = styled.Text`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
  font-size: ${RFPercentage(2.4)}px;
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const Status = styled.Text<Props>`
  color: ${(props) => (props.status ? ({ theme }) => theme.colors.green : ({ theme }) => theme.colors.red )};
  font-size: ${RFPercentage(2.2)}px;
  margin-left: 6px;
  font-family: ${({ theme }) => theme.fonts.text};
`

export const Rate = styled.View`
  margin-right: 10px;
`;

export const Tax = styled.View`
  flex-direction: row;
`;

export const TextTax = styled.Text`
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${RFPercentage(2.4)}px;
  font-family: ${({ theme }) => theme.fonts.text};
`;

