import { connect } from 'react-redux'

import IdeasContainer from './IdeasContainer'
import { fetchIdeas } from '../../redux/actions/ideas'

const mapStateToProps = state => ({
  ideas: state.ideas.ideasList
})

const mapDispatchToProps = dispatch => ({
  onFetchIdeas: () => {
    dispatch(fetchIdeas())
  }
})

export const Ideas = connect(mapStateToProps, mapDispatchToProps)(
  IdeasContainer
)
