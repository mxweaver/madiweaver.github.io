import React, { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import routes from '../../routes';
import Header from '../Header';
import c from './App.scss';

const App: FC<{}> = () => (
  <HashRouter>
    <div className={c.container}>
      <div className={c.app}>
        <Header />
        <div className={c.content}>
          <Routes>
            {routes.games.map((route) => (
              <Route key={route.url} path={route.url} Component={route.component} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  </HashRouter>
);

export default App;
