import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Comp/Layout';
import Home from './Comp/pages/Home';
import About from './Comp/pages/About';
import Project from './Comp/pages/Project';
import Skills from './Comp/pages/Skills';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'skills',
          element: <Skills />,
        },
        {
          path: 'project',
          element: <Project />,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
    {
      path: '*',
      element: <div>Page Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;