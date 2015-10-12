// types of actions for reducer
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const PREV_QUESTION = 'PREV_QUESTION'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'
export const MARK_QUESTION = 'MARK_QUESTION'

// action creators for are view controllers 
export function nextQuestion (index) {
  return { type: NEXT_QUESTION, index }
}

export function prevQuestion (index) {
  return { type: PREV_QUESTION, index }
}

export function markQuestion (index, value) {
  return { type: MARK_QUESTION, value, index }
}

export function submitQuestion(index, value) {
  return { type: SUBMIT_QUESTION, index, value }
}

export function getQuestions() { 
  return { 
    type: 'GET_QUESTIONS',
    questions: [
      { 
        text: "what's the sqrt of 4",
        choices: [1, 2, 3, 4],
        marked: "",
        answer: ""

      }, 
      { 
        text: "what's the sqrt of 16",
        choices: [1, 2, 3, 4],
        marked: "",
        answer: ""

      }, 
      {
        text: "what's the sqrt of 9",
        choices: [1, 2, 3, 4],
        marked: "",
        answer: ""
      }
    ]
  }
}
