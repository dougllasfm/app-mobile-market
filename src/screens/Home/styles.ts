import { Platform } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.ScrollView`
  background: #fff;
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? 24+'px' : 0};
`;


export const Title = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const Search = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin: 5px 0 12px;
`;

export const Input = styled.TextInput`
  height: 45px;
  width: 70%;
  background: ${colors.gray};
  border-radius: 25px;
  padding: 10px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 5px 10px;
  margin-left: 5px;
`

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #b9b9b9;
  margin-top: 5px;
`