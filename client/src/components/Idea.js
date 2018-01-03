import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Idea extends Component {
  handleClick = () => {
    this.props.onClick(this.props.idea.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.idea.id)
  }
  render() {
    return (
      <div className="tile">
        <span className="deleteButton" onClick={this.handleDelete}>
          X
        </span>
        <h4 onClick={this.handleClick}>{this.props.idea.title}</h4>
        <p onClick={this.handleClick}>{this.props.idea.body}</p>
      </div>
    )
  }
}

Idea.propTypes = {
  idea: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Idea
