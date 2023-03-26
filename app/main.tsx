import './main.scss';

import React from "react";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import { createRouter } from './routes';

createRoot(document.getElementById("root")).render(
  <RouterProvider router={createRouter()} />
);