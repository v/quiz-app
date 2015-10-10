import React from 'react'

export default class QuestionControls extends React.Component {
  render() {
    const { number, total } = this.props

    let buttons = [];

    if (number > 1) {
      buttons.push(
        <button key="1"> Previous </button>
      )
    }

    if (number < total) {
      buttons.push(
        <button key="2"> Next </button>
      )
    }

    return (
      <div className="question-controls">
        {buttons}
      </div>
    )
  }
}
