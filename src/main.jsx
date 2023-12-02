import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Menu from './components/Menu/Menu.jsx';
import About from './components/About/About.jsx';
import Reservation from './components/Reservation/Reservation.jsx';
import OnlineReservation from './components/Online Reservation/OnlineReservation.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
      },
      {
        path: '/about us',
        element: <About />
      },
      {
        path: '/',
        element: <Reservation />
      },
      {
        path: '/',
        element: <OnlineReservation />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
