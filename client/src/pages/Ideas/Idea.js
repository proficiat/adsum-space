import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { IdeaCard, IdeaHeader, IdeaBody, DeleteButton } from './styles'

class Idea extends Component {
  handleClick = () => {
    const { onClick, idea: { id: ideaId } } = this.props
    onClick(ideaId)
  }

  handleDelete = () => {
    const { onDelete, idea: { id: ideaId } } = this.props
    onDelete(ideaId)
  }
  render() {
    const { idea } = this.props
    const { title, body } = idea
    return (
      <IdeaCard>
        <IdeaHeader>
          <DeleteButton onClick={this.handleDelete}>X</DeleteButton>
          {title}
        </IdeaHeader>
        <IdeaBody onClick={this.handleClick}>{body}</IdeaBody>
      </IdeaCard>
    )
  }
}

Idea.propTypes = {
  idea: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Idea
