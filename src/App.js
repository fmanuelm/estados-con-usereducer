import React from 'react';
import Num1 from './components/Num1';
import Num2 from './components/Num2';
import Ope from './components/Ope';
import Result from './components/Result';
import Operadores from './components/Operadores';
import StoreProvider from './store/StoreProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


function App() {
  return (
    <React.Fragment>
      <StoreProvider>
        <Container>
          <Row className="justify-content-md-center">
            <h1 className="text-center my-4 mb-5">Manejo de estados con useReducer</h1>
            <Col xs lg="2" className="text-center">
              <h5>Número 1</h5>
            </Col>
            <Col xs lg="2" className="text-center">
              <h5>Operación</h5>
            </Col>
            <Col xs lg="2" className="text-center">
              <h5>Número 2</h5>
            </Col>
            <Col xs lg="2" className="text-center">
              
            </Col>
            <Col xs lg="2" className="text-center">
              <h5>Resultado</h5>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="2" className="text-center">
              <Num1/>
            </Col>
            <Col xs lg="2" className="text-center">
              <Ope/>
            </Col>
            <Col xs lg="2" className="text-center">
              <Num2/>
            </Col>
            <Col xs lg="2" className="text-center">
              =
            </Col>
            <Col xs lg="2" className="text-center">
              <Result/>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-4">
            <Col xs lg="2" className="text-center">
              <Operadores/>
            </Col>
          </Row>
        </Container>
      </StoreProvider>
    </React.Fragment>
  );
}

export default App;
