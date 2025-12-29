# 🎩 Claude Project

**A platform for complex systems, served with a twist.**  

We provide **tools, analytics, and utilities** for sophisticated minds who like clarity, performance, and a dash of chaos. This is **information, not instruction**—think of it as a roadmap drawn by someone who might be wearing a top hat sideways.  

---

## Our Focus

- **Clarity over cleverness** — yes, we like our code readable, even if the margins are a little crooked  
- **Performance over abstraction** — fast, lean, and just a tad magical  
- **Professional UX** — dense, data-rich, with just enough flair to make you smile  
- **Explicit handling of uncertainty** — no illusions, no smoke; errors are revealed in full costume  

---

## Product Philosophy

- We provide **information, analytics, and utilities**, not guarantees or advice  
- Data is probabilistic, comparative, and occasionally mischievous  
- Users are **sophisticated and risk-aware**, ready for surprises  

**Language we use:**  
- “Activity is above average”  
- “Data is concentrated in a few nodes”  
- “Response latency is elevated”  

**Language we avoid:**  
- “Guaranteed outcome”  
- “Safe choice”  
- “This will happen”  

---

## Design Principles

- **Silicon Valley vibes with a hint of Wonderland**  
- Dense, information-rich layouts, grids, separators, subtle gradients  
- Minimal animations, but occasionally a rabbit hole or two  
- Interactive elements are clear, accessible, and sometimes cheeky  

---

## Tech Stack

- **Modern JS/TS framework** (React/Vue)  
- **Strict TypeScript** with reusable, modular components  
- **Tailwind CSS** or similar utility-first styling  
- Async-first data fetching and state management  

> Everything lean, performant, and modular—no nonsense, just a touch of whimsy.  

---

## TypeScript Philosophy

- `strict: true` everywhere  
- No `any` or error suppression  
- Explicit return types for all exported functions  
- **Discriminated unions** for modeling state  
- `type` preferred over `interface` unless extension is required  

**Example:**
```ts
type DataFetchStatus<T> =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "ready"; data: T }
  | { state: "error"; message: string };
