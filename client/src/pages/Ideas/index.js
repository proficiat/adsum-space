import { connect } from 'react-redux'

import IdeasContainer from './IdeasContainer'
import {
  fetchIdeas,
  createIdea,
  deleteIdea,
  updateIdea
} from '../../redux/actions/ideas'

const mapStateToProps = state => ({
  ideas: state.ideas.ideasList
})

const mapDispatchToProps = dispatch => ({
  onFetchIdeas: () => {
    dispatch(fetchIdeas())
  },
  onCreateIdea: idea => {
    dispatch(createIdea(idea))
  },
  onDeleteIdea: ideaId => {
    dispatch(deleteIdea(ideaId))
  },
  onUpdateIdea: (ideaId, idea) => {
    dispatch(updateIdea(ideaId, idea))
  }
})

export const Ideas = connect(mapStateToProps, mapDispatchToProps)(
  IdeasContainer
)
