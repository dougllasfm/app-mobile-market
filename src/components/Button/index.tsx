import { Alert } from 'react-native'
import { Text, ButtonText } from "./styles";

interface Props {
  name: string;
}

async function handleFilterCategory() {
  try {
    
  } catch (error) {
    console.log(error)
  }
}

function Button({ name }: Props) {
  return (
    <ButtonText onPress={() =>  Alert.alert("Teste")}>
      <Text>{name}</Text>
    </ButtonText>
  );
}

export default Button;
