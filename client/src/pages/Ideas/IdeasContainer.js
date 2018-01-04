import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Idea from './Idea'
import IdeaForm from './IdeaForm'
import axios from 'axios'
import update from 'immutability-helper'

class IdeasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: [],
      editingIdeaId: null,
      notificiation: ''
    }
  }

  componentDidMount() {
    const { onFetchIdeas } = this.props
    onFetchIdeas()
  }

  componentWillUpdate(nextProps, nextState) {
    // temporary solution
    if (nextProps.ideas.length > 0 && this.state.ideas.length === 0) {
      this.setState({ ideas: nextProps.ideas })
    }
  }

  addNewIdea = () => {
    axios
      .post('api/v1/ideas', {
        idea: {
          title: '',
          body: ''
        }
      })
      .then(response => {
        console.log(response)
        const ideas = update(this.state.ideas, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
          ideas: ideas,
          editingIdeaId: response.data.id
        })
      })
      .catch(error => console.log(error))
  }

  updateIdea = idea => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
    const ideas = update(this.state.ideas, {
      [ideaIndex]: { $set: idea }
    })
    this.setState({
      ideas: ideas,
      notification: 'All changes saved'
    })
  }

  resetNotification = () => {
    this.setState({ notification: '' })
  }

  enableEditing = id => {
    this.setState({ editingIdeaId: id }, () => {
      this.title.focus()
    })
  }

  deleteIdea = id => {
    axios
      .delete(`api/v1/ideas/${id}`)
      .then(response => {
        const ideaIndex = this.state.ideas.findIndex(x => x.id === id)
        const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]] })
        this.setState({ ideas: ideas })
      })
      .catch(error => console.log(error))
  }

  render() {
    console.log('ideas: ', this.props.ideas)
    return (
      <div>
        <button className="newIdeaButton" onClick={this.addNewIdea}>
          New Idea
        </button>
        <span className="notification">{this.state.notification}</span>
        <div>
          {this.state.ideas.map(idea => {
            if (this.state.editingIdeaId === idea.id) {
              return (
                <IdeaForm
                  idea={idea}
                  key={idea.id}
                  titleRef={input => (this.title = input)}
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
                  onDelete={this.deleteIdea}
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
  onFetchIdeas: PropTypes.func.isRequired
}

export default IdeasContainer
