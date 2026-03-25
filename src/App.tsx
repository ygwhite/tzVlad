import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { InvestorsPage } from './pages/InvestorsPage'
import { PartnersPage } from './pages/PartnersPage'

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="investors" element={<InvestorsPage />} />
          <Route path="partners" element={<PartnersPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

