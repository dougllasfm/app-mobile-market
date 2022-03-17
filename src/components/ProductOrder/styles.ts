import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 4px;
  padding: 8px;
  width: 95%;
`;

export const DetailsProduct = styled.View`
  margin-left: 5px;
  width: 60%;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray2};
`;

export const ViewPrice = styled.View`
  width: 20%;
`

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.green};
`;
