import React from 'react';
import Header from './components/Header';
import QuestionBox from './components/QuestionBox';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App () {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>{<QuestionBox />}</Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
