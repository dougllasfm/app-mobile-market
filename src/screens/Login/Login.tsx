import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { getLogin, storeLogin } from "../../utils/storage";
import {
  Button, Container, Description, Input, SigninText, Text, TextSignin, Title
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
      navigation.navigate("Meu mercado");
    } catch (error) {
      Alert.alert("Email ou senha incorretos")
    }
  }

  return (
    <Container>
      <Title>Meu Mercado</Title>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input secureTextEntry={true} placeholder="Senha" onChangeText={setPassword} value={password} />
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
