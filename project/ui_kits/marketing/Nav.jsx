const Nav = () => (
  <nav style={{
    position: "sticky", top: 0, zIndex: 10, height: 64,
    display: "flex", alignItems: "center", padding: "0 32px", gap: 24,
    background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--border)",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img src="../../assets/lexara-mark.svg" width={28} height={28} alt="" />
      <span style={{ font: "600 18px/22px var(--font-sans)", letterSpacing: "-0.01em" }}>Lexara</span>
    </div>
    <div style={{ display: "flex", gap: 22, marginLeft: 16 }}>
      {["Продукт", "Как это работает", "Тарифы", "Клиенты", "Документация"].map(l => (
        <a key={l} href="#" style={{ font: "500 14px/20px var(--font-sans)", color: "var(--fg-2)", textDecoration: "none" }}>{l}</a>
      ))}
    </div>
    <div style={{ flex: 1 }} />
    <a href="#" style={{ font: "500 14px/20px var(--font-sans)", color: "var(--fg-1)", textDecoration: "none" }}>Войти</a>
    <button style={{
      appearance: "none", border: 0, cursor: "pointer",
      background: "var(--brand)", color: "white",
      padding: "9px 16px", borderRadius: 8,
      font: "500 14px/20px var(--font-sans)",
    }}>Записаться на демо</button>
  </nav>
);

window.Nav = Nav;
