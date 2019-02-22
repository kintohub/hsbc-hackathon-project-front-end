import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

import SignUpPage from '../signUp/SignUpPage'

import HomeContainer from '../../containers/HomeContainer'
import AboutContainer from '../../containers/AboutContainer'
import SignUpContainer from '../../containers/SignUpContainer'

import styles from './Dashboard.module.sass'

const RoutesContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 }
})

class Dashboard extends Component {
  render() {
    const { location } = this.props
    console.log(location, 'dash')
    return (
      <div id="site-container">
        <div id="content-container">
          <header className={styles.header}>
            <Link to="/">Home</Link>
            <Link to="/log-in">Log In</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/about-us">About</Link>
          </header>
        </div>
        <PoseGroup>
          <RoutesContainer key={location.key}>
            <Switch location={location}>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/about-us" component={AboutContainer} />
              <Route exact path="/log-in" component={AboutContainer} />
              <Route exact path="/sign-up" component={SignUpContainer} />
            </Switch>
          </RoutesContainer>
        </PoseGroup>
      </div>
    )
  }
}

export default Dashboard
