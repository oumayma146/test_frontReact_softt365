import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import React from 'react';
//

import Mensualite from './pages/Mensualite';
import MontantEmprunter from './pages/MontantEmprunter';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/montant" />, index: true },
        { path: 'montant', element: <MontantEmprunter /> },
        { path: 'mensualite', element: <Mensualite /> },
       
      ],
    },
  ]);

  return routes;
}
