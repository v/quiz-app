import { NEXT_QUESTION, PREV_QUESTION, SUBMIT_QUESTION, MARK_QUESTION } from './actions'

export default function reducer (state = {}, action) {
  console.log(state, action)
   return {} //this is bc you are supposed to return a new object from reducer EVERY TIME
}
