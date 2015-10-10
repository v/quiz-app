import React from 'react'

export default class MultipleChoiceQuestion extends React.Component {
  render() {
    const {text, choices} = this.props

    const choiceHtml = choices.map((choice, i) => {
      return (
        <li className="choice" key={i}>{choice}</li>
      )
    })

    return (
      <div className="question">
        <p>{text}</p>

        <ul className="choices">
          {choiceHtml}
        </ul>
      </div>
    )
  }
}
