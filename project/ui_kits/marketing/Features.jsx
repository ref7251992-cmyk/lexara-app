const Features = () => (
  <section style={{ padding: "80px 32px", maxWidth: 1200, margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <div style={{ font: "500 13px/18px var(--font-sans)", color: "var(--brand)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Что делает Lexara</div>
      <h2 style={{ font: "600 40px/100% var(--font-sans)", letterSpacing: "-0.02em", margin: "10px 0" }}>От загрузки до подписи — за дни, не недели.</h2>
      <p style={{ font: "400 17px/26px var(--font-sans)", color: "var(--fg-2)", maxWidth: 640, margin: "0 auto" }}>
        Три агента ведут договор от начала до конца. Контроль над каждым пунктом — за вами.
      </p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {[
        { t: "Читает", icon: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z|M14 3v6h6|M9 13h6|M9 17h4",
          b: "Lexara разбирает договоры в 47 юрисдикциях, нормализует формулировки и сверяет их с вашим плейбуком за минуту." },
        { t: "Отмечает", icon: "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z|M12 9v4|M12 16h0",
          b: "Каждая нетипичная формулировка получает находку — с уверенностью, ссылкой на источник и сравнением с похожими договорами." },
        { t: "Готовит стратегию", icon: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z|M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9z",
          b: "Спросите Lexara, где давить. Она составит редлайн на основе 1,2 млн похожих договоров и ваших прошлых сделок." },
      ].map((f, i) => (
        <div key={i} className="card" style={{ padding: 24 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, background: "var(--brand-soft)",
            color: "var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
          }}>
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              {f.icon.split("|").map((p, j) => <path key={j} d={p} />)}
            </svg>
          </div>
          <div style={{ font: "600 20px/26px var(--font-sans)", color: "var(--fg-1)", letterSpacing: "-0.01em" }}>{f.t}</div>
          <p style={{ font: "400 15px/24px var(--font-sans)", color: "var(--fg-2)", marginTop: 8 }}>{f.b}</p>
        </div>
      ))}
    </div>
  </section>
);

window.Features = Features;
