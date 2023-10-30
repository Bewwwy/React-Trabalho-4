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
import Posts from './routes/Posts';
import ErrorPage from './routes/ErrorPage';
import Post1 from './routes/post1';
import Post2 from './routes/post2';
import Post3 from './routes/post3';

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
        path:"posts", element: <Posts />,
      },
      {
        path:"contact", element: <Contact />,
      },
      {
        path:"post1", element: <Post1 />
      },
      {
        path:"post2", element: <Post2 />
      },
      {
        path:"post3", element: <Post3 />
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
