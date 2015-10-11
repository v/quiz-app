import { NEXT_QUESTION, PREV_QUESTION, SUBMIT_QUESTION, MARK_QUESTION } from './actions'
import { combineReducers } from 'redux'

function currentQuestion (state = 1, action) {
  console.log(state)
  switch (action.type) { 
    case PREV_QUESTION: 
      if (state > 1) return state-1
      else return state 

    case NEXT_QUESTION:
      return state+1
    default: 
      return state    
   }
}

function checkQuestion (state = false, action) { 
  console.log(state)
  switch (action.type) {
    case MARK_QUESTION:
      return action.value
    default:
       return state 
   }
}

export default combineReducers({checkQuestion, currentQuestion}) 
