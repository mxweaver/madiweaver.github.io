import React, { FC } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import routes from '../../routes';
import Header from '../Header';
import c from './App.scss';

const App: FC<{}> = () => (
  <HashRouter>
    <div className={c.container}>
      <div className={c.app}>
        <Header />
        <div className={c.content}>
          {routes.games.map((route) => (
            <Route exact key={route.url} path={route.url} component={route.component} />
          ))}
        </div>
      </div>
    </div>
  </HashRouter>
);

export default App;
