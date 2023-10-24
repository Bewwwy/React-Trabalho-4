import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import About from './routes/About';
import Contact from './routes/Contact';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path:"/", element:<App />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:"/", element: <Login />,
      },
      {
        path:"login", element: <Login />,
      },
      {
        path:"home", element: <Home />,
      },
      {
        path:"about", element: <About />,
      },
      {
        path:"contact", element: <Contact />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
