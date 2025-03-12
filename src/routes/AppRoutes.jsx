import React from 'react'
import { Routes, Route } from 'react-router-dom'

import FullLayout from '../layouts/FullLayout'
import BlankLayout from '../layouts/BlankLayout'
import ProtectedRoute from './ProtectedRoute'

import Dashboard from '../features/dashboard/Dashboard'
import Login from '../features/auth/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BlankLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <FullLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
