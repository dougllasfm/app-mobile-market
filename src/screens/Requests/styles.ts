import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background: #fff;
  flex: 1;
  margin-top: ${Platform.OS === "android" ? 24+'px' : 0};
`;
