import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Menu from './components/Home/Menu/Menu.jsx';
import About from './components/About/About.jsx';
import Reservation from './components/Reservation/Reservation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      },
      {
        path: '/about us',
        element: <About />
      },
      {
        path: '/',
        element: <Reservation />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
