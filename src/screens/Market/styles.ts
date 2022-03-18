import { Platform } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

type Props = {
  status: boolean
}

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
  margin-top: ${Platform.OS === "android" ? 24 + "px" : 0};
`;

export const ViewCompany = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
  background: #fff;
`;

export const ViewInfosCompany = styled.View`
  justify-content: center;
  margin-bottom: 5px;
  margin-left: 8px;
  background: #fff;
`;

export const ViewNameAndSatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const NameCompany = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-family: ${({ theme }) => theme.fonts.title};
`;

export const Status = styled.Text<Props>`
  font-size: ${RFPercentage(2.2)}px;
  color: ${(props) => (props.status ? ({ theme }) => theme.colors.green : ({ theme }) => theme.colors.red )};
  margin-left: 5px;
  font-family: ${({ theme }) => theme.fonts.text};
`

export const Options = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 10px 5px;
  background: #fff;
  margin-right: 10px;
`;

export const ButtonCategory = styled.TouchableOpacity`
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.darkBlue};
  justify-content: center;
  align-items: center;
  width: 92px;
  margin: 0 5px;

`

export const TextCategory = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.title};
`;

export const InfosMarket = styled.View`
  margin: 6px 8px;
  background: #fff;
`;

export const Address = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${RFPercentage(2.4)}px;
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const TaxView = styled.View`
  flex-direction: row;
  margin-left: -3px;
`;

export const TextTax = styled.Text`
  margin-left: 3px;
  font-size: ${RFPercentage(2.3)}px;
  color: ${({ theme }) => theme.colors.darkGray2};
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px 3px 8px;
  background: #fff;
`;

export const Input = styled.TextInput`
  padding: 5px 10px;
  width: 75%;
  border-radius: 25px;
  height: 45px;
  background: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const ButtonSearch = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  height: 45px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-left: 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ViewList = styled.ScrollView`
  margin: 3px 5px;
`;
