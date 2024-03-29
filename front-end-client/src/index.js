import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//TELAS
import Dashboard from './Aplication/Dashboard';
import Login from './Aplication/Login/Login';
import Cadastro from './Aplication/Login/Cadastro';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
  },{
    path: "/Login",
    element: <Login></Login>,
  },{
    path: "/Cadastro",
    element: <Cadastro></Cadastro>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
