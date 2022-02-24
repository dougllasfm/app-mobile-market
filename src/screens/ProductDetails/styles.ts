import { Platform } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.View`
  background: #fff;
  flex: 1;
  margin-top: ${Platform.OS === "android" ? 24+'px' : 0};
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5px auto;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 140px;
  margin-bottom: 12px;
`;

export const ViewButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3px 15px;
`;

export const Confirmation = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #fafafa;
  padding: 5px;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 5px;
  padding: 13px 10px;
`;