import React from 'react'
import { Route } from 'react-router-dom'
import NavigationOverlay from '../NavigationOverlay'
import Intro from '../Intro'
import Playground from '../Playground'
import Waveform from '../Waveform'
import Spectrum from '../Spectrum'
import c from './App.scss'

//TODO: upgrade react-conway to version with typescript
//@ts-ignore
import Life from 'react-conway'

interface Props {
  className?: string;
}

function content(WrappedComponent: React.ComponentClass<Props>) {
  return () => <WrappedComponent className={c.content} />
}

const App = () => (
  <div className={c.app}>
    <NavigationOverlay />
    <div className={c.content}>
      <Route exact path="/" render={content(Intro)} />
      <Route exact path="/life" render={content(Life)} />
      <Route exact path='/playground' component={content(Playground)} />
      <Route exact path='/waveform' component={content(Waveform)} />
      <Route exact path='/spectrum' component={content(Spectrum)} />
    </div>
  </div>
)

export default App
