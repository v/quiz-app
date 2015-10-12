import { NEXT_QUESTION, PREV_QUESTION, SUBMIT_QUESTION, MARK_QUESTION } from './actions'
import { combineReducers } from 'redux'

function currentQuestionIndex (state = 0, action) {
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

function questions (state = [], action) { 
  switch (action.type) {
    case MARK_QUESTION:
      return [
          ...state.slice(0, action.index),
          Object.assign({}, state[action.index], {
            marked: action.value
          }),
          ...state.slice(action.index+1)
      ]
    case SUBMIT_QUESTION:
        return [
          ...state.slice(0, action.index),
          Object.assign({}, state[action.index], {
            answer: action.value
          }),
          ...state.slice(action.index+1)
         ] 
    case 'GET_QUESTIONS':
         console.log(action.questions)
         return action.questions
    default:
       return state 
   }
}

export default combineReducers({questions, currentQuestionIndex}) 
