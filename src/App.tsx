import type { ComponentType } from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import ApproachPage from './pages/ApproachPage'
import FaqPage from './pages/FaqPage'
import PhotosPage from './pages/PhotosPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ReviewsPage from './pages/ReviewsPage'
import ServicesPage from './pages/ServicesPage'

const pages: Record<string, ComponentType> = {
  '/diensten': ServicesPage,
  '/onze-aanpak': ApproachPage,
  '/ervaringen': ReviewsPage,
  '/fotos-sfeer': PhotosPage,
  '/veelgestelde-vragen': FaqPage,
  '/contact': ContactPage,
  '/reserveren': ContactPage,
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const CurrentPage = pages[path] ?? HomePage

  return (
    <>
      <Navigation />
      <CurrentPage />
      <Footer />
    </>
  )
}
