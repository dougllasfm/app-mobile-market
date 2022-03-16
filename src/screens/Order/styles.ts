import { Platform } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: #fff;
  flex: 1;
  margin-top: ${Platform.OS === "android" ? 24 + "px" : 0};
`;

export const DetailsOrder = styled.View`
  margin: 0 4px 4px;
  padding: 8px;
  background: #fff;
`;

export const NameMarket = styled.Text`
  font-size: ${RFPercentage(3.3)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Address = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Date = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  color: ${({ theme }) => theme.colors.darkGray};
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
  font-size: ${RFPercentage(2.8)}px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.green};
  font-size: ${RFPercentage(2.8)}px;
`;

export const DeliveryFeeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

export const DeliveryFee = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const TotalView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
`;

export const Total = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const DetailsAddress = styled.View`
  margin: 4px;
  padding: 8px;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(3.3)}px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
`;

export const AddressDelivery = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const ButtonConfirmView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-bottom: 8px;
`;

export const ButtonConfirm = styled.Text`
  background-color: #fff;
  text-align: center;
  width: 200px;
  padding: 6px;
  border-radius: 3px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
