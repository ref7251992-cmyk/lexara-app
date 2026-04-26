const PATHS = {
  'file-text':    <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 13h6"/><path d="M9 17h4"/></>,
  'scale':        <><path d="M12 2v20"/><path d="M5 22h14"/><path d="M3 9h18"/><path d="M3 9l-2 4a4 4 0 0 0 6 0z"/><path d="M21 9l-2 4a4 4 0 0 0 6 0z"/></>,
  'search':       <><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></>,
  'message':      <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
  'shield':       <><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"/></>,
  'sparkles':     <><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9z"/></>,
  'settings':     <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3 1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8 1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></>,
  'plus':         <><path d="M12 5v14"/><path d="M5 12h14"/></>,
  'send':         <><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></>,
  'chevron-r':    <><path d="M9 6l6 6-6 6"/></>,
  'chevron-d':    <><path d="M6 9l6 6 6-6"/></>,
  'alert':        <><circle cx="12" cy="12" r="9"/><path d="M12 8v4"/><circle cx="12" cy="16" r="0.5" fill="currentColor"/></>,
  'check':        <><polyline points="20 6 9 17 4 12"/></>,
  'check-circle': <><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></>,
  'clock':        <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  'folder':       <><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></>,
  'user':         <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  'command':      <><path d="M9 5a3 3 0 1 1 0 6h6a3 3 0 1 1 0-6v14a3 3 0 1 1 0-6H9a3 3 0 1 1 0 6z"/></>,
  'filter':       <><path d="M3 5h18l-7 9v6l-4-2v-4z"/></>,
  'more':         <><circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/></>,
  'download':     <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></>,
  'edit':         <><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></>,
  'lightning':    <><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></>,
}

export default function Icon({ name, size = 20, stroke = 1.6, className, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ flex: 'none', ...style }}
    >
      {PATHS[name] ?? null}
    </svg>
  )
}
