import React from 'react'
import { connect } from 'react-redux'
import MultipleChoiceQuestion from './components/MultipleChoiceQuestion'
import QuestionControls from './components/QuestionControls'
import QuestionCounter from './components/QuestionCounter'
import { markQuestion, nextQuestion, prevQuestion } from './actions'

class App extends React.Component {
  constructor (props) {
    super(props) 
    this.onNext = this.onNext.bind(this)
    this.onPrev = this.onPrev.bind(this)
    this.onCheck = this.onCheck.bind(this)
  }

  onPrev (number) { 
    const { dispatch } = this.props
    dispatch(prevQuestion(number))
  }

  onNext (number) { 
    const { dispatch } = this.props
    dispatch(nextQuestion(number))
  }

  onCheck(value, questionNumber) {
    const { dispatch } = this.props
    dispatch(markQuestion(value, questionNumber))
  }

  render() {
    let choices = [
      '1',
      '2',
      '3',
      '4',
    ]

    let total = 35
    const { dispatch, currentQuestion, checkQuestion } = this.props 
    return  (
      <div className="container">
        <div className="marked"> { checkQuestion ? 'marked' : 'unmarked' } </div>
        <QuestionCounter number={currentQuestion} total={total} />
        <MultipleChoiceQuestion text="What is square root of 2?" choices={choices} />
        <QuestionControls number={currentQuestion} total={total} onMarkQuestion={this.onCheck} onPrev={this.onPrev} onNext={this.onNext} />
      </div>
    )
  }
}

//defines props to inject into App
function select (state) { 
  return { 
    currentQuestion: state.currentQuestion,
    checkQuestion: state.checkQuestion
   }
}

export default connect(select)(App)
