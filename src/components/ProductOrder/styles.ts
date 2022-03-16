import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 4px;
  padding: 8px;
  background: #fff;
`;

export const DetailsProduct = styled.View`
  margin-left: -100px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.green};
`;
