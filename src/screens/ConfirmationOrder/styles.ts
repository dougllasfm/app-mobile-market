import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 5px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 16px;
  margin-left: 5px;
`