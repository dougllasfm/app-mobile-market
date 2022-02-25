import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: #fff;
  flex: 1;
  margin-top: ${Platform.OS === "android" ? 24+'px' : 0};
`;

export const DetailsOrder = styled.View`
  margin: 4px;
  padding: 8px;
  background: #fff;
`;

export const NameMarket = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Address = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 16px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 16px;
`;

export const DetailsPrice = styled.View`
  margin: 4px;
  padding: 8px;
  background: #fff;
`;

export const SubTotalView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

export const SubTotal = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.green};
  font-size: 16px;
`;

export const DeliveryFeeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

export const DeliveryFee = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const TotalView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

export const Total = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const DetailsAddress = styled.View`
  margin: 4px;
  padding: 8px;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
`;

export const AddressDelivery = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`;
