import React, { Component } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

import { IdeaCard } from './styles'

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    const { idea: { title, body } } = this.props
    this.state = { title, body }
  }

  handleInput = e => {
    this.props.resetNotification()
    this.setState({ [e.target.name]: e.target.value })
  }

  handleBlur = () => {
    const idea = {
      title: this.state.title,
      body: this.state.body
    }

    axios
      .put(`api/v1/ideas/${this.props.idea.id}`, {
        idea: idea
      })
      .then(response => {
        console.log(response)
        this.props.updateIdea(response.data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <IdeaCard>
        <form onBlur={this.handleBlur}>
          <input
            ref={this.props.titleRef}
            className="input"
            type="text"
            name="title"
            placeholder="Enter a Title"
            value={this.state.title}
            onChange={this.handleInput}
          />
          <textarea
            className="input"
            name="body"
            placeholder="Describe your idea"
            value={this.state.body}
            onChange={this.handleInput}
          />
        </form>
      </IdeaCard>
    )
  }
}

IdeaForm.propTypes = {
  idea: PropTypes.object.isRequired,
  titleRef: PropTypes.any,
  updateIdea: PropTypes.func.isRequired,
  resetNotification: PropTypes.func.isRequired
}

export default IdeaForm
