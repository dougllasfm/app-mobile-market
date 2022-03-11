import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

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
  font-size: ${RFPercentage(2.8)}px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-family: ${({ theme }) => theme.fonts.title};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFPercentage(2.5)}px;
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
  font-family: ${({ theme }) => theme.fonts.title};
  margin: 0 5px;
`

export const Quantity = styled.Text`
  font-size: ${RFPercentage(2.5)}px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.text};
`;


