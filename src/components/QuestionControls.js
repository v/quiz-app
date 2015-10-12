import React, { findDOMNode }  from 'react'

export default class QuestionControls extends React.Component {

  clickHandler (e) {
    const node = findDOMNode(this.refs.markbox) //get the dom element for the input
    let value = node.checked
    this.props.onMarkQuestion(this.props.number, value) //calls a function set by its parent
  }

  render() {
    const { number, total, onPrev, onNext } = this.props

    let buttons = []

    if (number > 1) {
      buttons.push(
        <button key="1" onClick={() => onPrev(number) }> Previous </button>
      )
    }

    if (number < total) {
      buttons.push(
        <button key="2" onClick={() => onNext(number) }> Next </button>
      )
    }


    return (
      <div className="question-controls">
        {buttons}
         <label> Mark question for later? </label> 
          <input ref='markbox' type="checkbox" onClick={ (e) => this.clickHandler(e)} />
      </div>
    )
  }
}
