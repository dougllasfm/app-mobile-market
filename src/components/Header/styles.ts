import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 3px 8px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
`;

export const Cart = styled.TouchableOpacity`
  margin-right: 3px;
  margin-top: 4px;
`;

export const ViewCartNumber = styled.View`
  z-index: 99;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background: yellow;
  border-radius: 50px;
  position: absolute;
  right: -5px;
  top: -4px;
`;

export const CartNumber = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #b9b9b9;
  margin: 3px 0;
`;
