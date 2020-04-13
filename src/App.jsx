import React, { Component } from 'react'
import Header from './components/Header'
import QuestionBox from './components/QuestionBox'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

class App extends Component {
  state = {
    questions: [{ question: 111 }],
    index: 0,
  }

  componentWillMount() {
    fetch('https://opentdb.com/api.php?amount=10&category=11&type=multiple', {
      method: 'get',
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.setState({
          questions: jsonData.results,
        })
      })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              {<QuestionBox current={this.state.questions[this.state.index]} />}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
