import update from 'immutability-helper'
import { IDEAS_FETCH_SUCCESSED } from '../actions/ideas'

const initialState = {
  ideasList: [],
  editingIdeaId: null
}
const ideas = (state = initialState, action) => {
  switch (action.type) {
    case IDEAS_FETCH_SUCCESSED:
      return Object.assign({}, state, { ideasList: action.payload.ideas })
    default:
      return state
  }
}

export default ideas
