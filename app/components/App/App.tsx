import React, { FC } from 'react';
import { HashRouter, Route } from 'react-router-dom';
// TODO: upgrade react-conway to version with typescript
// @ts-ignore
import Life from 'react-conway';
import Header from '../Header';
import Playground from '../Playground';
import Waveform from '../Waveform';
import Spectrum from '../Spectrum';
import Motion from '../Motion';
import Animation from '../Animation';
import c from './App.scss';

const App: FC<{}> = () => (
  <HashRouter>
    <div className={c.app}>
      <Header />
      <div className={c.content}>
        <Route exact path="/life" render={() => <Life />} />
        <Route exact path="/playground" component={Playground} />
        <Route exact path="/waveform" component={Waveform} />
        <Route exact path="/spectrum" component={Spectrum} />
        <Route exact path="/motion" component={Motion} />
        <Route exact path="/animation" component={Animation} />
      </div>
    </div>
  </HashRouter>
);

export default App;
