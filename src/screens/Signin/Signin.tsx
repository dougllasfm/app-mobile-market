import axios from "axios";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { storeLogin } from "../../utils/storage";
import {
  Button, Container, Description, Input, SubTitle, Text,
  TextLogin
} from "./styles";


interface Props {
  navigation: any;
}

export default function Signin({ navigation }: Props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");


  async function handleNewAccount() {
    try {
      const res = await axios.post("http://192.168.2.7:3060/createUser", {
        name: name,
        password: password,
        email: email,
        address: address,
        telephone: telephone
      })  
      storeLogin(res.data.userAlreadyExists.id);
      navigation.navigate("Meu mercado")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <SubTitle>Criar nova conta</SubTitle>
      <Input placeholder="Nome" onChangeText={setName} value={name} />
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input placeholder="Senha" onChangeText={setPassword} value={password} />
      <Input placeholder="Endereço" onChangeText={setAddress} value={address} />
      <Input placeholder="Telefone" onChangeText={setTelephone} value={telephone} />
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
