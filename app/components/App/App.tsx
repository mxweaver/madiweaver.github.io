import React from 'react'
import { Route } from 'react-router-dom'
import NavigationOverlay from '../NavigationOverlay'
import Intro from '../Intro'
import Playground from '../Playground'
import Waveform from '../Waveform'
import c from './App.scss'

//TODO: upgrade react-conway to version with typescript
//@ts-ignore
import Life from 'react-conway'

const LifeContent = () => <Life className={c.content} />

const PlaygroundContent = () => <Playground className={c.content} />

const WaveformContent = () => <Waveform className={c.content} />

const App = () => (
  <div className={c.app}>
    <NavigationOverlay />
    <div className={c.content}>
      <Route exact path="/" component={Intro} />
      <Route exact path="/life" component={LifeContent} />
      <Route exact path='/playground' component={PlaygroundContent} />
      <Route exact path='/waveform' component={WaveformContent} />
    </div>
  </div>
)

export default App
