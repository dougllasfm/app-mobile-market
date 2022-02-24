import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 4px;
  padding: 8px;
  background: #fff;
`;

export const DetailsProduct = styled.View`
  margin-left: -20px;
`;

export const Name = styled.Text`
  color: ${colors.darkBlue};
`;

export const Quantity = styled.Text`
  color: ${colors.darkGray};
`;

export const Price = styled.Text`
  color: ${colors.green};
`;
