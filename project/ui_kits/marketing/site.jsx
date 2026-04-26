// Marketing site root.
const Site = () => (
  <div style={{ background: "white", color: "var(--fg-1)" }}>
    <Nav />
    <Hero />
    <Features />
    <Showcase />
    <Pricing />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Site />);
