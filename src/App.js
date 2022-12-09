import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from 'react-bootstrap';
import Header from './Header.jsx';
import CardImagen from './CardImagen.jsx';
import Footer from './Footer.jsx';


function App() {
  return (
    <div className="App">
     <Header titulo="Galeria de imagenes con react" ></Header>
     <Container>
     <Row >
      <Col>
      <CardImagen imagen="https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166_960_720.jpg" titulo="Ave" descripcion="Foto de una ave"></CardImagen>
      </Col>
      <Col>
      <CardImagen imagen="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg" titulo="Gato" descripcion="Foto de un gato"></CardImagen>
      </Col>
      <Col>
      <CardImagen imagen="https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_960_720.jpg" titulo="Tortuga" descripcion="Foto de una tortuga"></CardImagen>
      </Col>
     </Row>
     </Container>
    <Footer texto="Todos los derechos reservados @2022"></Footer>
    </div>
   
  );
}

export default App;
