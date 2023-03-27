import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './assets/index.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
