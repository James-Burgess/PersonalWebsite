# v5 Markdown → Component Mapping

This site is rendered entirely from Markdown. There is no frontmatter, no types, no component logic in the page stubs. Just Markdown content + CSS.

## Philosophy

Every `.md` file in `src/sections/` is passed through `marked.parse()` and dropped into a `<section>` with an ID derived from the filename. The CSS does all the work of making it look like a component.

---

## Global Elements

### `h2`

Section headings. Prefixed with `//` via `::before`. Used for every section title.

```
## experience
```

Renders as:
```html
<h2>experience</h2>   <!-- ::before renders "//" -->
```

### `h3`

Sub-headings. Styled as bold, slightly smaller.

- In **experience**: job title
- In **capabilities**: skill category name

### `p`

Standard paragraph. `max-width: 68ch` for readability.

### `ul > li`

Bullet points. Render with `>` prefix. In `#experience` they switch to `-`.

### `code`

Inline monospace with green tint: `` `Python` `` → `<code>Python</code>`

### `a`

Green links. No underline until hover.

### `hr`

Thin `#1a1a1a` divider. Used inside `#experience` to separate jobs.

### `blockquote`

Used in `#selected-work` as a **repo card**. No left border, no italic — just a container.

---

## Section-Specific Patterns

### `#experience` — Job Entries

Each job follows this exact Markdown pattern:

```markdown
### Senior Software Engineer

**@ FAANG** · 2018 — 2022

*Large-Scale Distributed Systems & Data Infrastructure*

- Built and maintained services processing **petabytes of data daily**
- Led migration of legacy monoliths; improved performance **300%**

`Python` `Java` `AWS` `Kubernetes` `PostgreSQL` `Redis` `Kafka` `Docker`

---
```

| Markdown | Rendered As | CSS Target |
|----------|-------------|------------|
| `### Title` | Job title (bold, ~0.9rem) | `#experience h3` |
| `**@ Org** · period` | Org + period line | `#experience h3 + p` |
| `*subtitle*` | Subtitle (grey, small) | `#experience h3 + p + p em` |
| `- bullet` | Bullet list with `-` prefix | `#experience li::before { content: '-' }` |
| `` `tag` `` (alone in `p`) | Pill tags (`.tech-tag`) | Post-processed to `.tech-tags` div |
| `---` | Divider between jobs | `#experience hr` |

> **Rule**: A paragraph containing *only* inline `<code>` elements is transformed at build time into `<div class="tech-tags"><span class="tech-tag">...</span></div>`.

---

### `#selected-work` — Repo Cards

Each repo is a blockquote with two paragraphs:

```markdown
> [Wildbook](https://github.com/James-Burgess/Wildbook) fork · active
>
> Open-source ML platform for wildlife photo-ID...
```

| Markdown | Rendered As | CSS Target |
|----------|-------------|------------|
| `> [Name](href) meta` | Repo name (bold white) + meta (grey) | `blockquote > p:first-of-type a` |
| `> description` | Description text (grey) | `blockquote > p:last-of-type` |

The intro text before the blockquotes is a normal paragraph:

```markdown
A subset of 51 public repositories. Sorted by signal, not stars.
```

---

### `#capabilities` — Skill Blocks

Each skill category:

```markdown
### Systems & Data

Distributed systems, data pipelines... `Python`, `Java`, `Node.js`...
```

| Markdown | Rendered As | CSS Target |
|----------|-------------|------------|
| `### Heading` | Skill category title | `#capabilities h3` |
| Body paragraph | Description (grey, smaller) | `#capabilities h3 + p` |

---

### `#availability` — Contact / Status

```markdown
Open to senior IC or staff engineer roles...

Remote-first, but will relocate...

- distributed systems at scale
- conservation technology

[hello@jimmyb.co.za](mailto:hello@jimmyb.co.za) · [+27 65 244 2069](tel:+27652442069)
```

| Markdown | Rendered As | CSS Target |
|----------|-------------|------------|
| `p` | Status text | `#availability p` |
| `- item` | Interest list with `>` prefix | `#availability li::before` |
| `[text](href) · [text](href)` | Contact links | `#availability a` |

---

## Build-Time Magic

In `index.astro`, after `marked.parse()`, a regex post-processes the HTML:

```js
// Paragraphs containing ONLY <code> elements become pill divs
html.replace(
  /<p>((?:<code>[^<]+<\/code>[\s]*)+)<\/p>/g,
  (match, codes) => {
    // ...extract each <code> into <span class="tech-tag">...
  }
)
```

This means you can write:

```markdown
`Python` `Java` `AWS`
```

And it renders as:

```html
<div class="tech-tags">
  <span class="tech-tag">Python</span>
  <span class="tech-tag">Java</span>
  <span class="tech-tag">AWS</span>
</div>
```

---

## Adding a New Section

1. Create `src/sections/06-whatever.md`
2. Write Markdown
3. Add CSS in `public/styles/global.css` under `section#whatever { ... }`
4. Rebuild

No types. No frontmatter. No components. Just Markdown + CSS.
