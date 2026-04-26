const Hero = () => (
  <section style={{
    padding: "100px 32px 80px",
    background: "linear-gradient(180deg, #EFE9FF 0%, #F2F6FF 60%, #FFFFFF 100%)",
    textAlign: "center",
  }}>
    <div style={{ maxWidth: 880, margin: "0 auto" }}>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "5px 12px", borderRadius: 999,
        background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "var(--shadow-sm)", backdropFilter: "blur(12px)",
        font: "500 13px/18px var(--font-sans)", color: "var(--brand-ink)",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--brand)" }} />
        Агентная AI-система для юристов
      </span>

      <h1 style={{
        font: "700 60px/100% var(--font-sans)", letterSpacing: "-0.02em",
        color: "var(--fg-1)", margin: "20px 0 16px",
      }}>
        Прочитать каждый пункт.<br/>Выиграть каждые переговоры.
      </h1>

      <p style={{
        font: "400 18px/28px var(--font-sans)", color: "var(--fg-2)",
        maxWidth: 640, margin: "0 auto",
      }}>
        Lexara разбирает договоры, отмечает нетипичные формулировки и готовит стратегию переговоров — на основе вашего плейбука и 1,2 млн похожих соглашений.
      </p>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28 }}>
        <button style={{
          appearance: "none", border: 0, cursor: "pointer",
          background: "var(--brand)", color: "white",
          padding: "12px 22px", borderRadius: 10,
          font: "500 15px/20px var(--font-sans)",
          boxShadow: "0 1px 0 rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.18)",
        }}>Триал на 14 дней</button>
        <button className="glass" style={{
          appearance: "none", cursor: "pointer",
          padding: "12px 22px", borderRadius: 10,
          font: "500 15px/20px var(--font-sans)", color: "var(--fg-1)",
        }}>Демо 90 секунд</button>
      </div>
    </div>

    <div style={{ maxWidth: 1080, margin: "56px auto 0" }} className="card">
      <div style={{
        height: 64, display: "flex", alignItems: "center", padding: "0 16px",
        borderBottom: "1px solid var(--divider)",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#FF6058" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#FFBE2E" }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#28C941" }} />
        </div>
        <div style={{ flex: 1, textAlign: "center", font: "500 13px/18px var(--font-mono)", color: "var(--fg-3)" }}>app.lexara.ai · рабочее пространство</div>
      </div>
      <div style={{ height: 360, padding: 24, background: "var(--n-10)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 20, height: "100%" }}>
          <div className="card" style={{ background: "white", padding: 14 }}>
            <div style={{ font: "500 11px/14px var(--font-sans)", color: "var(--fg-3)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 }}>Фильтры</div>
            {["Высокий риск · 1", "Нужна проверка · 2", "В переговорах · 2", "Подписаны · 14"].map((t, i) => (
              <div key={t} style={{
                padding: "8px 10px", borderRadius: 8, marginBottom: 4,
                background: i === 0 ? "var(--brand-soft)" : "transparent",
                color: i === 0 ? "var(--brand-ink)" : "var(--fg-1)",
                font: "500 13px/18px var(--font-sans)",
              }}>{t}</div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { t: "Рамочный договор — Acme Corp", b: "12 рисков · §7.4 нетипично короткий лимит ответственности", tone: "danger" },
              { t: "NDA взаимное — DataPilot",     b: "3 риска · срок 24 месяца", tone: "warning" },
              { t: "Заказ SaaS — Northwind",        b: "5 рисков · добавлена оговорка MFN в v2.0", tone: "info" },
            ].map((r, i) => (
              <div key={i} className="card" style={{ display: "flex", alignItems: "center", gap: 14, padding: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--n-20)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg-2)" }}>
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ font: "600 14px/20px var(--font-sans)", color: "var(--fg-1)" }}>{r.t}</div>
                  <div style={{ font: "400 13px/18px var(--font-sans)", color: "var(--fg-2)" }}>{r.b}</div>
                </div>
                <span style={{
                  padding: "3px 10px", borderRadius: 999,
                  background: r.tone === "danger" ? "#FCE4E8" : r.tone === "warning" ? "#FFEEDF" : "#E3EEFB",
                  color:      r.tone === "danger" ? "#7A0017" : r.tone === "warning" ? "#8A3000" : "#0A4F9F",
                  font: "500 12px/16px var(--font-sans)",
                }}>{r.tone === "danger" ? "Высокий риск" : r.tone === "warning" ? "Проверка" : "Переговоры"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
