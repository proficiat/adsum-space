import React, { Component } from 'react'
import './App.css'
import IdeasContainer from './components/IdeasContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="navigationBar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/ideas">Ideas</Link>
            </li>
          </ul>
          <div className="pageContent">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/ideas" component={IdeasContainer} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
