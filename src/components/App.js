import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Sierpinski from './Sierpinski'
import { background, primaryText } from '../colors'

const styles  = {
  app: {
    backgroundColor: background,
    color: primaryText,
    height: '100vh',
    width: '100vw'
  }
}

export default function App() {
  return <div style={styles.app}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='sierpinski' component={Sierpinski}/>
    </Switch>
  </div>
}
