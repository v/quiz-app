import React from 'react'
import { connect } from 'react-redux'
import MultipleChoiceQuestion from './components/MultipleChoiceQuestion'
import QuestionControls from './components/QuestionControls'
import QuestionCounter from './components/QuestionCounter'
import { markQuestion, nextQuestion, prevQuestion, submitQuestion, getQuestions } from './actions'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.onNext = this.onNext.bind(this)
    this.onPrev = this.onPrev.bind(this)
    this.onCheck = this.onCheck.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
  }

  componentWillMount () {
    const { dispatch } = this.props
    dispatch(getQuestions())
  }
 
  submitAnswer (index, response) { 
    const { dispatch } = this.props
    dispatch(submitQuestion(index, response))
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
    const { questions, currentQuestionIndex } = this.props 
    let currentQuestion = questions.length ? questions[currentQuestionIndex] : { text: '', choices: [] } 
    return  (
      <div className="container">
        <QuestionCounter number={currentQuestionIndex + 1} total={questions.length} />
        <MultipleChoiceQuestion text={currentQuestion.text} choices={currentQuestion.choices} index={currentQuestionIndex} submit={this.submitAnswer}/>
        <QuestionControls number={currentQuestionIndex} total={questions.length - 1} onMarkQuestion={this.onCheck} onPrev={this.onPrev} onNext={this.onNext} />
      </div>
    )
  }
}

//defines props to inject into App
function select (state) { 
  return { 
    currentQuestionIndex: state.currentQuestionIndex,
    questions: state.questions
   }
}

export default connect(select)(App)
