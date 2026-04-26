import Nav from './Nav'
import Hero from './Hero'
import Features from './Features'
import Showcase from './Showcase'
import Pricing from './Pricing'
import Footer from './Footer'

export default function MarketingSite() {
  return (
    <div style={{ background: 'white', color: 'var(--fg-1)' }}>
      <Nav />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <Footer />
    </div>
  )
}
