import { colors } from "./../../styles/colors";
import { Platform } from "react-native";
import styled from "styled-components/native";

const marginPlataform = Platform.OS === "android" ? "13" : "20";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-top: ${marginPlataform + "%"};
  color: #fff;
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
  height: 53px;
  margin: 5px;
  background: #fff;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.darkBlue};
  height: 42px;
  padding: 5px;
  width: 80%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 2%;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.View`
  flex-direction: row;
  margin-top: 30%;
  font-size: 14px;
  justify-content: center;
  align-items: center;
`;

export const TextLogin = styled.Text`
  color: #fff;
`;
