import update from 'immutability-helper'
import {
  IDEAS_FETCH_SUCCESSED,
  IDEA_CREATE_SUCCESSED,
  IDEA_DELETE_SUCCESSED,
  IDEA_UPDATE_SUCCESSED,
} from '../actions/ideas'

const initialState = {
  ideasList: [],
  editingIdeaId: null,
}
const ideas = (state = initialState, action) => {
  switch (action.type) {
    case IDEAS_FETCH_SUCCESSED:
      return { ...state, ...{ ideasList: action.payload.ideas } }
    case IDEA_CREATE_SUCCESSED:
      const {
        payload: { idea: createdIdea },
      } = action

      return {
        ...state,
        ...{
          ideasList: update(state.ideasList, {
            $splice: [[0, 0, createdIdea]],
          }),
        },
      }
    case IDEA_DELETE_SUCCESSED:
      const {
        payload: { ideaId: deletedId },
      } = action
      const deletedIdeaIndex = state.ideasList.findIndex(
        (idea) => idea.id === deletedId
      )
      return {
        ...state,
        ...{
          ideasList: update(state.ideasList, {
            $splice: [[deletedIdeaIndex, 1]],
          }),
        },
      }
    case IDEA_UPDATE_SUCCESSED:
      const {
        payload: { idea: updatedIdea },
      } = action
      const updatedIdeaIndex = state.ideasList.findIndex(
        (idea) => idea.id === updatedIdea.id
      )
      return {
        ...state,
        ...{
          ideasList: update(state.ideasList, {
            [updatedIdeaIndex]: { $set: updatedIdea },
          }),
        },
      }
    default:
      return state
  }
}

export default ideas
