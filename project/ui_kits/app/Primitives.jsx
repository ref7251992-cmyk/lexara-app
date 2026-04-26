// Shared primitives for the Lexara web app kit.
// Exposes: Button, Badge, Icon, Avatar, Card, Field, Spinner.

const Icon = ({ name, size = 20, stroke = 1.6, className = "", style = {} }) => {
  // Lucide-style outline icons inlined as SVG paths for offline reliability.
  const paths = {
    "file-text":  <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 13h6"/><path d="M9 17h4"/></>,
    "scale":      <><path d="M12 2v20"/><path d="M5 22h14"/><path d="M3 9h18"/><path d="M3 9l-2 4a4 4 0 0 0 6 0z"/><path d="M21 9l-2 4a4 4 0 0 0 6 0z"/></>,
    "search":     <><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></>,
    "message":    <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
    "shield":     <><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/></>,
    "sparkles":   <><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9z"/></>,
    "settings":   <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3 1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8 1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></>,
    "plus":       <><path d="M12 5v14"/><path d="M5 12h14"/></>,
    "send":       <><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></>,
    "chevron-r":  <><path d="M9 6l6 6-6 6"/></>,
    "chevron-d":  <><path d="M6 9l6 6 6-6"/></>,
    "alert":      <><circle cx="12" cy="12" r="9"/><path d="M12 8v4"/><circle cx="12" cy="16" r="0.5" fill="currentColor"/></>,
    "check":      <><polyline points="20 6 9 17 4 12"/></>,
    "check-circle": <><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></>,
    "clock":      <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    "folder":     <><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></>,
    "user":       <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    "command":    <><path d="M9 5a3 3 0 1 1 0 6h6a3 3 0 1 1 0-6v14a3 3 0 1 1 0-6H9a3 3 0 1 1 0 6z"/></>,
    "filter":     <><path d="M3 5h18l-7 9v6l-4-2v-4z"/></>,
    "more":       <><circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/></>,
    "download":   <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></>,
    "edit":       <><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></>,
    "lightning":  <><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      className={className} style={{ flex: "none", ...style }}>
      {paths[name] || null}
    </svg>
  );
};

const Button = ({ variant = "primary", size = "md", icon, iconRight, children, onClick, disabled }) => {
  const base = {
    appearance: "none", border: 0, cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "var(--font-sans)", fontWeight: 500,
    display: "inline-flex", alignItems: "center", gap: 6,
    transition: "all var(--dur) var(--ease)",
    opacity: disabled ? 0.5 : 1,
  };
  const sizes = {
    sm: { fontSize: 13, padding: "6px 10px", borderRadius: 8 },
    md: { fontSize: 14, padding: "8px 14px", borderRadius: 8, lineHeight: "20px" },
    lg: { fontSize: 15, padding: "10px 18px", borderRadius: 10 },
  };
  const variants = {
    primary:   { background: "var(--brand)", color: "white", boxShadow: "0 1px 0 rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.18)" },
    secondary: { background: "white", color: "var(--fg-1)", border: "1px solid var(--border-strong)", boxShadow: "var(--shadow-sm)" },
    ghost:     { background: "transparent", color: "var(--fg-1)" },
    danger:    { background: "var(--danger)", color: "white" },
    glass:     { background: "linear-gradient(180deg,rgba(255,255,255,.5),rgba(255,255,255,.25))", border: "1px solid rgba(255,255,255,.6)", backdropFilter: "blur(20px)", color: "var(--fg-1)", boxShadow: "var(--shadow-glass)" },
  };
  return (
    <button onClick={onClick} disabled={disabled} style={{ ...base, ...sizes[size], ...variants[variant] }}>
      {icon && <Icon name={icon} size={size === "sm" ? 14 : 16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "sm" ? 14 : 16} />}
    </button>
  );
};

const Badge = ({ tone = "neutral", dot, children }) => {
  const tones = {
    neutral: { bg: "var(--n-30)", fg: "var(--fg-1)" },
    success: { bg: "#E5F4E5", fg: "#005C00" },
    warning: { bg: "#FFEEDF", fg: "#8A3000" },
    danger:  { bg: "#FCE4E8", fg: "#7A0017" },
    info:    { bg: "#E3EEFB", fg: "#0A4F9F" },
    brand:   { bg: "var(--brand-soft)", fg: "var(--brand-ink)" },
    accent:  { bg: "var(--accent-soft)", fg: "#7A5800" },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: t.bg, color: t.fg,
      padding: "3px 10px", borderRadius: 999,
      font: "500 12px/16px var(--font-sans)", whiteSpace: "nowrap",
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor" }} />}
      {children}
    </span>
  );
};

const Avatar = ({ name, size = 28, color = "#3D3FE2" }) => {
  const initials = name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: 999, background: color, color: "white",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      font: `600 ${Math.floor(size * 0.4)}px/1 var(--font-sans)`, flex: "none",
    }}>{initials}</div>
  );
};

const Card = ({ children, padding = 18, style = {}, onClick, inset }) => (
  <div onClick={onClick} className={inset ? "card card--inset" : "card"} style={{ padding, cursor: onClick ? "pointer" : undefined, ...style }}>
    {children}
  </div>
);

const Field = ({ label, value, onChange, placeholder, error, type = "text" }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
    {label && <span style={{ font: "500 13px/18px var(--font-sans)", color: "var(--fg-1)" }}>{label}</span>}
    <input
      type={type} value={value || ""} onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      style={{
        font: "400 14px/20px var(--font-sans)",
        padding: "9px 12px", borderRadius: 8,
        border: `1px solid ${error ? "var(--danger)" : "var(--border-strong)"}`,
        background: "white", color: "var(--fg-1)", outline: "none",
        transition: "all var(--dur) var(--ease)",
      }}
    />
    {error && <span style={{ font: "400 12px/16px var(--font-sans)", color: "var(--danger)" }}>{error}</span>}
  </label>
);

Object.assign(window, { Icon, Button, Badge, Avatar, Card, Field });
