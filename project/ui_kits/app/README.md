# Lexara Web App — UI Kit

A click-thru recreation of the Lexara workspace surface: contract list → contract reader with AI-flagged clauses → agent chat for negotiation strategy. Built on the foundation tokens in `../../colors_and_type.css`.

> ⚠️ No production Lexara source was provided. This kit is a directional hi-fi mockup, not a reproduction. Names, taxonomies, and screen layouts are placeholders.

## Structure
- `index.html` — entry; renders the app shell with all surfaces wired up.
- `app.jsx` — root; routes between Workspace / Reader / Strategy via local state.
- `Sidebar.jsx`, `TopBar.jsx` — chrome.
- `Workspace.jsx` — contract list, filters, summary stats.
- `Reader.jsx` — contract document reader with inline Lexara annotations.
- `Strategy.jsx` — agent chat surface for negotiation strategy.
- `Inspector.jsx` — right-rail inspector for the selected clause.
- `Primitives.jsx` — Button, Badge, Card, Field, Avatar.

## Surfaces covered
1. Workspace (default landing) — list of contracts with filter rail.
2. Reader — long-form contract with Lexara annotations and risk inspector.
3. Strategy — agent chat with thinking trace + suggested moves.

Open `index.html` to step through them.
