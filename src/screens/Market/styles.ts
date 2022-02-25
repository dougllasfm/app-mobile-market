import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: #fff;
  flex: 1;
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
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
`;

export const Status = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.green};
  margin-left: 5px;
`

export const Options = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 10px 5px;
  background: #fff;
  margin-right: 10px;
`;

export const InfosMarket = styled.View`
  margin: 6px 8px;
  background: #fff;
`;

export const Address = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;  
`;

export const TaxView = styled.View`
  flex-direction: row;
  margin-left: -3px;
`;

export const TextTax = styled.Text`
  margin-left: 3px;
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
