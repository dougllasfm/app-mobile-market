import { Container, Image, Text, Name, Button } from "./styles";

function Profile() {
  return (
    <Container>
      <Image
        source={require("../../../assets/user-profile.jpg")}
      />
      <Name>Douglas Munaro</Name>
      <Button>
        <Text>Histórico de compras</Text>
      </Button>
      <Button>
        <Text>Editar perfil</Text>
      </Button>
    </Container>
  );
}

export default Profile;
