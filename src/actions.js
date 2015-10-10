// types of actions for reducer
export const NEXT_QUESTION = 'NEXT_QUESTION'
export const PREV_QUESTION = 'PREV_QUESTION'
export const SUBMIT_QUESTION = 'SUBMIT_QUESTION'
export const MARK_QUESTION = 'MARK_QUESTION'

// action creators for are view controllers 
export function nextQuestion (currentNum) {
  return { type: NEXT_QUESTION, currentNum }
}

export function prevQuestion (currentNum) {
  return { type: PREV_QUESTION, currentNum }
}

export function markQuestion (value, currentNum) {
  return { type: MARK_QUESTION, value, currentNum }
}

export function submitQuestion(currentNum, response) {
  return { type: SUBMIT_QUESTION, currentNum, response }
} 
