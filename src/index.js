import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Announcements from './views/announcements'
import Page from './views/page'
import ContactUs from './views/contact-us'
import Apply from './views/apply'
import Clubs from './views/clubs'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Announcements} exact path="/announcements" />
        <Route component={Page} exact path="/page" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Apply} exact path="/apply" />
        <Route component={Clubs} exact path="/clubs" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
