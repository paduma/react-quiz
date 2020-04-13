import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

class QuestionBox extends Component {
  render() {
    return (
      <Jumbotron>
        <p>{this.props.current.question}</p>
        <hr className="my-4" />
        <p>Answer Lists</p>
        <p>
          <Button variant="primary" className="m-2">
            Submit
          </Button>
          <Button variant="success">Next</Button>
        </p>
      </Jumbotron>
    )
  }
}

export default QuestionBox
