import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getLogin } from "../../utils/storage";

import {
  Container,
  Title,
  SubTitle,
  Input,
  Button,
  Description,
  Text,
  SigninText,
  TextSignin,
} from "./styles";

export default function Login() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  function handleLogin() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        
        // ...
      } else {
        console.log("teste")
      }
    });
  }

  return (
    <Container>
      <Title>Meu Mercado</Title>
      <SubTitle>Acesse sua conta</SubTitle>
      <Input placeholder="Email" onChangeText={setName} value={name} />
      <Input placeholder="Senha" onChangeText={setPassword} value={password} />
      <Button onPress={() => handleLogin()}>
        <Text>Entrar</Text>
      </Button>
      <Description>
        <SigninText>Ainda não tem conta?</SigninText>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <TextSignin>Criar conta</TextSignin>
        </TouchableOpacity>
      </Description>
    </Container>
  );
}
