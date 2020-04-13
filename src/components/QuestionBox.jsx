import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

class QuestionBox extends Component {
  state = {}
  render() {
    return (
      <Jumbotron>
        <p>Questions</p>
        <hr class="my-4" />
        <p>Answer Lists</p>
        <p>
          <Button variant="primary" class="m-2">
            Submit
          </Button>
          <Button variant="success">Next</Button>
        </p>
      </Jumbotron>
    )
  }
}

export default QuestionBox
