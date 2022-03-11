import { Platform } from "react-native";
import styled from "styled-components/native";

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
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 25px;
  padding: 10px;
`;

export const ButtonSearch = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
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

export const Status = styled.View`
  align-items: center;
`

export const Text = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title};
`
