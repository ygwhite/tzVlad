import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="appShell">
      <div aria-hidden="true" className="bgLayer">
        <div className="bgOrb bgOrb--top" />
        <div className="bgOrb bgOrb--bottom" />
        <div className="bgRadialTop" />
      </div>

      <Header />

      <main className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

