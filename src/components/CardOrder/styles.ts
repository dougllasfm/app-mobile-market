import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin: 5px 15px;
  align-items: flex-start;
  background: #fff;
  border-radius: 15px;
  padding: 8px;
`;

export const Image = styled.Image`
  height: 38px;
  width: 38px;
  border-radius: 40px;
  margin-right: 10px;
`;

export const Details = styled.View``;

export const NameMarket = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Order = styled.Text`
  color: ${({ theme }) => theme.colors.green};
`;

export const Address = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Buy = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
`;
