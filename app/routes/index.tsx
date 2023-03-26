import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './Home';

export function createRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ])
}