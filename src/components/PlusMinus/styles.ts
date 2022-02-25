import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 120px;
`;

export const Minus = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Plus = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  margin-top: -19px;
`;

export const Cont = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px;
`
