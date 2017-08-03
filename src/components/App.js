import React from 'react'
import Home from './Home'
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
    <Home/>
  </div>
}
