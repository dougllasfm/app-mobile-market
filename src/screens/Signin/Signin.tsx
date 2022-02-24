import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { TouchableOpacity } from "react-native";
import { storeLogin, getLogin } from "../../utils/storage";

import {
  Container,
  Title,
  SubTitle,
  Input,
  Button,
  Description,
  Text,
  TextLogin,
} from "./styles";

interface Props {
  navigation: any;
}

export default function Signin({ navigation }: Props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const auth = getAuth();


  function handleNewAccount() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await storeLogin(name)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
  }

  return (
    <Container>
      <Title>Meu Mercado</Title>
      <SubTitle>Criar nova conta</SubTitle>
      <Input placeholder="Nome" onChangeText={setName} value={name} />
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input placeholder="Senha" onChangeText={setPassword} value={password} />
      <Button onPress={() => handleNewAccount()}>
        <Text>Criar minha conta</Text>
      </Button>
      <Description>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <TextLogin>Já tenho uma conta</TextLogin>
        </TouchableOpacity>
      </Description>
    </Container>
  );
}
