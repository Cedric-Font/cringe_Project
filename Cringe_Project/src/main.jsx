import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Display from './display.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/Display",
    element: <Display />,
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);