import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarketingSite from './marketing/MarketingSite'
import AppShell from './app/AppShell'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketingSite />} />
        <Route path="/app" element={<AppShell />} />
      </Routes>
    </BrowserRouter>
  )
}
