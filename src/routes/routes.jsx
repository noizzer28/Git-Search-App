import { Routes, Route } from 'react-router-dom'
import { Main } from '../components/main/main'
import { NotFound } from '../components/notFound/notFound'
import React from 'react'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
