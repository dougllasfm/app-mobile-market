import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { getLogin, storeLogin } from "../../utils/storage";
import axios from "axios";

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

interface Props {
  navigation: any;
}

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    verifiedLogin();
  }, []);

  async function verifiedLogin() {
    const login = await getLogin();
    if (login) {
      navigation.navigate("Meu mercado");
    }
  }

  async function handleLogin() {
    try {
      const res = await axios.post("http://192.168.2.7:3060/authenticateUser", {
        email: email,
        password: password,
      });
      storeLogin(res.data.userAlreadyExists.id);
    } catch (error) {
      console.log(error);
    }
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
