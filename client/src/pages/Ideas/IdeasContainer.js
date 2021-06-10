import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Idea from './Idea'
import IdeaForm from './IdeaForm'

import { NewIdeaButton } from './styles'

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editingIdeaId: null,
      notificiation: '',
    }

    this.title = null
  }

  componentDidMount() {
    const { onFetchIdeas } = this.props
    onFetchIdeas()
  }

  updateIdea = (ideaId, idea) => {
    const { onUpdateIdea } = this.props
    onUpdateIdea(ideaId, idea)
    this.setState({ notification: 'All changes saved' })
  }

  resetNotification = () => {
    this.setState({ notification: '' })
  }

  enableEditing = (id) => {
    this.setState({ editingIdeaId: id }, () => {
      this.title.focus()
    })
  }

  addEmptyIdea = () => {
    const { onCreateIdea } = this.props
    const emptyIdea = {
      title: '',
      body: '',
    }
    onCreateIdea(emptyIdea)
  }

  render() {
    const { ideas, onDeleteIdea } = this.props
    const { notification, editingIdeaId } = this.state
    return (
      <div>
        <NewIdeaButton onClick={this.addEmptyIdea}>New Idea</NewIdeaButton>
        <span>{notification}</span>
        <div>
          {ideas.map((idea) => {
            if (editingIdeaId === idea.id) {
              return (
                <IdeaForm
                  idea={idea}
                  key={idea.id}
                  titleRef={(input) => (this.title = input)}
                  updateIdea={this.updateIdea}
                  resetNotification={this.resetNotification}
                />
              )
            } else {
              return (
                <Idea
                  idea={idea}
                  key={idea.id}
                  onClick={this.enableEditing}
                  onDelete={onDeleteIdea}
                />
              )
            }
          })}
        </div>
      </div>
    )
  }
}

IdeasContainer.propTypes = {
  ideas: PropTypes.array.isRequired,
  onDeleteIdea: PropTypes.func.isRequired,
  onUpdateIdea: PropTypes.func.isRequired,
  onFetchIdeas: PropTypes.func.isRequired,
  onCreateIdea: PropTypes.func.isRequired,
}

export default IdeasContainer
