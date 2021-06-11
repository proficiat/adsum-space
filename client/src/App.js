import React from 'react'
import './App.scss'
import { Ideas } from './pages/Ideas'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

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

const PAGES = {
  home: {
    to: '/',
    link: 'Home',
    component: Home,
  },
  about: {
    to: '/about',
    link: 'About',
    component: About,
  },
  ideas: {
    to: '/ideas',
    link: 'Ideas',
    component: Ideas,
  },
}

const App = () => {
  const pages = Object.values(PAGES)
  return (
    <Router>
      <div>
        <nav>
          {pages.map((page, index) => (
            <NavLink key={index} activeClassName="selected" exact to={page.to}>
              {page.link}
            </NavLink>
          ))}
        </nav>
        <div className="pageContent">
          {pages.map((page, index) => (
            <Route
              key={index}
              exact
              path={page.to}
              component={page.component}
            />
          ))}
        </div>
      </div>
    </Router>
  )
}

export default App
