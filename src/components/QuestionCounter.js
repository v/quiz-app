import React from 'react'

export default class QuestionCounter extends React.Component {
  render() {
    const { number, total } = this.props

    return (
      <p> Question {number} of {total} </p>
    )
  }
}
