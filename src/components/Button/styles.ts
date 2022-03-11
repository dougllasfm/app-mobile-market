import styled from "styled-components/native";

export const ButtonText = styled.TouchableOpacity`
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.darkBlue};
  justify-content: center;
  align-items: center;
  width: 92px;
  margin: 0 5px;

`

export const Text = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.title};
`;
