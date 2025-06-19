import React from 'react';
import './App.css';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './Components/Layout/MainLayout';
import Home from './Pages/Home';
import FetchOld from './Pages/FetchOld';
import FetchRQ from './Pages/FetchRQ';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/trad',
        element: <FetchOld />,
      },
      {
        path: '/rq',
        element: <FetchRQ />
      },
    ],
  },
])

const App = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>

      </RouterProvider>
    </QueryClientProvider>
  )
}

export default App;