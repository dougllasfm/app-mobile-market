import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin: 3px 3px 8px;
  border-radius: 6px;
  background: #fff;
  padding: 4px;
`;

export const Link = styled.TouchableOpacity`
`

export const AboutProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`

export const DetailsProduct = styled.View`
  margin-left: 5px;

`;

export const TitleProduct = styled.Text`  
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const Actions = styled.View`
  align-items: flex-end;
  height: 90px;
  margin-bottom: 5px;
  justify-content: space-between;
`;

export const PlusMinus = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const Minus = styled.TouchableWithoutFeedback`
  align-items: center;
  justify-content: center;
`;

export const Plus = styled.TouchableWithoutFeedback`
  align-items: center;
  justify-content: center;
`;

export const Cont = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
  margin: 0 5px;
`

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
`;


