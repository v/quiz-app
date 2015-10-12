import React, { findDOMNode }  from 'react'

export default class MultipleChoiceQuestion extends React.Component {

  submitQuestion (e) {
    const { index, submit } = this.props
    const response = findDOMNode(this.refs.options).children[0].value //get the dom element for the input
    submit(index, response)
  }

  render() {
    const {text, choices, index } = this.props

    const choiceHtml = choices.map((choice, i) => {
      return (
        <li ref="options">
          <input name="question" value={choice} type="radio" name={index}> 
            {choice}
          </input>
        </li>
      )
    })

    return (
      <div className="question">
        <p>{text}</p>

        <ul className="choices">
          {choiceHtml}
        </ul>
        <button type="submit" onClick={ (e) => this.submitQuestion(e)}>Submit Question</button>
      </div>
    )
  }
}
