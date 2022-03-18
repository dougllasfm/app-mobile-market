import { Platform } from "react-native";
import styled from "styled-components/native";

const marginPlataform = Platform.OS === "android" ? "13" : "20";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-top: ${marginPlataform + "%"};
  margin-bottom: 10px;
  color: #fff;
`;

export const Input = styled.TextInput`
  padding: 5px 10px;
  width: 80%;
  border-radius: 6px;
  height: 48px;
  margin: 3px;
  background: #fff;
`;

export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.darkBlue};
  height: 42px;
  padding: 5px;
  width: 80%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.View`
  flex-direction: row;
  margin-top: 10%;
  font-size: 14px;
  justify-content: center;
  align-items: center;
`;

export const TextLogin = styled.Text`
  color: #fff;
`;
