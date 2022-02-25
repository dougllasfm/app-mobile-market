import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("Meu mercado")
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  return (
    <Container>
      <Title>Meu Mercado</Title>
      <SubTitle>Acesse sua conta</SubTitle>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input placeholder="Senha" onChangeText={setPassword} value={password} />
      <Button onPress={() => handleLogin()}>
        <Text>Entrar</Text>
      </Button>
      <Description>
        <SigninText>Ainda não tem conta?</SigninText>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <TextSignin>Criar conta</TextSignin>
        </TouchableOpacity>
      </Description>
    </Container>
  );
}
