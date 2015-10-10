import React from 'react'
import MultipleChoiceQuestion from './components/MultipleChoiceQuestion'
import QuestionControls from './components/QuestionControls'
import QuestionCounter from './components/QuestionCounter'

export default class App extends React.Component {
  render() {
    let choices = [
      '1',
      '2',
      '3',
      '4',
    ]

    let number = 2
    let total = 35

    return (
      <div className="container">
        <QuestionCounter number={number} total={total} />
        <MultipleChoiceQuestion text="What is square root of 2?" choices={choices} />
        <QuestionControls number={number} total={total} />
      </div>
    )
  }
}

React.render(<App total="35"/>, document.body);
