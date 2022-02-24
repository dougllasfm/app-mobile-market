import { colors } from "./../../../styles/colors";
import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  margin: 10px 10px 5px;
`

export const Name = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 10px 5px;
  border-radius: 3px;
  margin-top: 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
`;
