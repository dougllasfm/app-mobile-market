import { Container } from './styles';
import Header from '../../components/Header';
import CardOrder from '../../components/CardOrder';

function Requests() {
  return (
    <Container>
       <Header title={"Pedidos"}/>
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
        <CardOrder />
    </Container>
  );
};

export default Requests;
