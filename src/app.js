import React from 'react'
import { connect } from 'react-redux'
import MultipleChoiceQuestion from './components/MultipleChoiceQuestion'
import QuestionControls from './components/QuestionControls'
import QuestionCounter from './components/QuestionCounter'
import { markQuestion } from './actions'

class App extends React.Component {
  render() {
    let choices = [
      '1',
      '2',
      '3',
      '4',
    ]

    let number = 2
    let total = 35
    const { dispatch } = this.props 
    return  (
      <div className="container">
        <QuestionCounter number={number} total={total} />
        <MultipleChoiceQuestion text="What is square root of 2?" choices={choices} />
        <QuestionControls number={number} total={total} onMarkQuestion={ (value, questionNumber) => {
            dispatch(markQuestion(value, questionNumber))
          }
        }/>
      </div>
    )
  }
}

export default connect()(App)
