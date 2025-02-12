import Layout from 'layout/Layout';
import Booking from 'pages/bookings';
import Homepage from 'pages/homepage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/rezervari',
        element: <Booking />,
      },
    ],
  },
]);
