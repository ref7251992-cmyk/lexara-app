// App root — composes Sidebar + TopBar + active surface.
const App = () => {
  const [view, setView] = React.useState("workspace");
  const [contract, setContract] = React.useState({
    id: "c1", title: "Рамочный договор — Acme Corp", party: "Acme Corp",
    status: "danger", badge: "Высокий риск", v: "v3.2", updated: "сегодня в 14:02",
  });
  const [picked, setPicked] = React.useState("p7");

  const titles = {
    workspace: { t: "Рабочее пространство", s: "14 активных договоров · 29 рисков выявлено" },
    reader:    { t: contract.title, s: `${contract.party} · ${contract.v} · ред. ${contract.updated}` },
    strategy:  { t: "Стратегия переговоров", s: contract.title },
  };

  const onOpen = (c) => { setContract(c); setView("reader"); };

  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--bg)" }}>
      <Sidebar view={view} setView={setView} counts={{ workspace: 14, strategy: 3 }} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <TopBar
          title={titles[view].t}
          subtitle={titles[view].s}
          actions={
            <div style={{ display: "flex", gap: 8 }}>
              {view === "reader" && <Button variant="secondary" size="md" icon="download">Экспорт</Button>}
              {view === "reader" && <Button variant="primary" size="md" icon="sparkles" onClick={() => setView("strategy")}>Построить стратегию</Button>}
              {view === "workspace" && <Button variant="primary" size="md" icon="plus">Новый договор</Button>}
              {view === "strategy" && <Button variant="secondary" size="md" icon="file-text" onClick={() => setView("reader")}>Открыть договор</Button>}
            </div>
          }
        />
        <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
          {view === "workspace" && <Workspace onOpen={onOpen} />}
          {view === "reader"    && <Reader contract={contract} picked={picked} onPickClause={setPicked} />}
          {view === "strategy"  && <Strategy contract={contract} />}
        </div>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
