import { Platform } from "react-native";
import styled from "styled-components/native";

const marginPlataform = Platform.OS === "android" ? "13" : "20";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-top: ${marginPlataform + "%"};
  margin-bottom: 10px;
  color: #fff;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-top: ${marginPlataform + "%"};
  margin-bottom: 25px;
  color: #fff;
`;

export const Input = styled.TextInput`
  background: #fff;
  padding: 5px 10px;
  width: 80%;
  border-radius: 6px;
  height: 53px;
  margin: 5px;
`;

export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.darkBlue};
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
  font-weight: bold;
  font-size: 16px;
`;

export const Description = styled.View`
  flex-direction: row;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;

export const SigninText = styled.Text`
  color: #fff;
  padding: 5px;
`;

export const TextSignin = styled.Text`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
`;
