export function renderPasswordForm(error = false) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Access — JimmyB</title>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap");

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        html {
            font-size: 15px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        body {
            font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
            background: #0a0a0a;
            color: #b8b8b8;
            line-height: 1.65;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3rem 1.5rem;
        }

        ::selection {
            background: #1a3a1a;
            color: #4ade80;
        }

        a {
            color: #4ade80;
            text-decoration: none;
            transition: color 0.15s ease;
        }

        a:hover {
            color: #86efac;
            text-decoration: underline;
            text-underline-offset: 3px;
        }

        .container {
            max-width: 420px;
            width: 100%;
        }

        h1 {
            font-size: 1rem;
            font-weight: 600;
            color: #e8e8e8;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: baseline;
            gap: 0.75rem;
        }

        h1::before {
            content: '//';
            color: #4ade80;
            font-weight: 400;
        }

        .subtitle {
            font-size: 0.85rem;
            color: #666;
            margin-bottom: 2.5rem;
            max-width: 68ch;
        }

        .error {
            background: #1a1a1a;
            border: 1px solid #2a2a2a;
            color: #c8241b;
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
            margin-bottom: 1.25rem;
        }

        .form-group {
            margin-bottom: 1.25rem;
        }

        label {
            display: block;
            font-size: 0.82rem;
            color: #777;
            margin-bottom: 0.4rem;
            text-transform: lowercase;
        }

        input[type="password"] {
            width: 100%;
            background: #0e0e0e;
            border: 1px solid #1a1a1a;
            color: #e8e8e8;
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
            font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
            outline: none;
            transition: border-color 0.15s;
        }

        input[type="password"]:focus {
            border-color: #333;
        }

        input[type="password"]::placeholder {
            color: #444;
        }

        button {
            width: 100%;
            background: #0e0e0e;
            border: 1px solid #1a1a1a;
            color: #4ade80;
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
            font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
            font-weight: 500;
            cursor: pointer;
            text-transform: lowercase;
            transition: all 0.15s ease;
        }

        button:hover {
            border-color: #4ade80;
            color: #86efac;
            background: #111;
        }

        .back-link {
            display: block;
            margin-top: 2.5rem;
            font-size: 0.82rem;
            color: #444;
            text-transform: lowercase;
        }

        .back-link:hover {
            color: #4ade80;
            text-decoration: none;
        }

        @media (max-width: 480px) {
            body { padding: 1.5rem 1rem; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CV Access</h1>
        <p class="subtitle">This CV is password protected. Please enter the password to continue.</p>
        ${error ? '<div class="error">Incorrect password. Please try again.</div>' : ""}
        <form method="GET" action="/resume">
            <div class="form-group">
                <label for="password">password</label>
                <input type="password" id="password" name="password" placeholder="enter password" required autofocus>
            </div>
            <button type="submit">access cv</button>
        </form>
        <a class="back-link" href="/">&larr; back to jimmyb.co.za</a>
    </div>
</body>
</html>`;
}

export function renderCV(data) {
  const contact = data.contact || {};
  const profile = data.profile || [];
  const leadership = data.leadership || [];
  const projects = data.projects || [];
  const education = data.education || [];
  const links = data.links || [];
  const experience = data.experience || [];

  const labels = Object.assign({
    profile: "Profile",
    leadership: "Leadership Highlights",
    projects: "Selected Projects",
    education: "Education",
    links: "Links",
    experience: "Experience"
  }, data.sectionLabels || {});

  const leftSections = [];

  if (profile.length) {
    const html = profile.map(p => `<p class="summary-text">${p}</p>`).join("\n            ");
    leftSections.push(`<div class="theme-block theme-blue" id="section-profile">
          <div class="section-label">${labels.profile}</div>
          ${html}
        </div>`);
  }

  if (leadership.length) {
    const html = leadership.map(item => `<li>${item}</li>`).join("\n              ");
    leftSections.push(`<div class="theme-block theme-red" id="section-leadership">
          <div class="section-label">${labels.leadership}</div>
          <ul class="highlight-list">
            ${html}
          </ul>
        </div>`);
  }

  if (projects.length) {
    const html = projects.map(p =>
      `<li><strong>${p.name}</strong> — ${p.description}</li>`
    ).join("\n              ");
    leftSections.push(`<div class="theme-block theme-yellow" id="section-projects">
          <div class="section-label">${labels.projects}</div>
          <ul class="highlight-list">
            ${html}
          </ul>
        </div>`);
  }

  if (education.length) {
    const html = education.map(e =>
      `<div class="edu-item">
              <div class="title">${e.title}</div>
              ${e.sub ? `<div class="sub">${e.sub}</div>` : ""}
            </div>`
    ).join("\n            ");
    leftSections.push(`<div class="theme-block theme-black" id="section-education">
          <div class="section-label">${labels.education}</div>
          ${html}
        </div>`);
  }

  if (links.length) {
    const html = links.map(l =>
      `<li><strong>${l.label}:</strong> <a href="${l.url}" style="color: var(--ink); text-decoration: underline">${l.text}</a></li>`
    ).join("\n              ");
    leftSections.push(`<div class="theme-block theme-blue" id="section-links">
          <div class="section-label">${labels.links}</div>
          <ul class="highlight-list">
            ${html}
          </ul>
        </div>`);
  }

  const leftHtml = leftSections.join("\n\n");

  const experienceHtml = experience.map(exp => {
    const companyLink = exp.companyUrl
      ? `<a href="${exp.companyUrl}">${exp.company}</a>`
      : exp.company;
    const viaHtml = exp.via
      ? ` · via ${exp.viaUrl ? `<a href="${exp.viaUrl}">${exp.via}</a>` : exp.via}`
      : "";
    const badgeHtml = exp.badge
      ? `<span class="badge ${exp.badge}"></span>`
      : "";
    const stackHtml = exp.stack
      ? `<div class="exp-stack">${exp.stack}</div>`
      : "";
    const pointsHtml = (exp.points || []).map(p => `<li>${p}</li>`).join("\n                ");

    return `          <div class="theme-block theme-${exp.theme || "black"}">
            <div class="exp-item">
              <div class="exp-header">
                <span class="exp-role">${exp.role}</span>
                <span class="exp-date">${exp.date}</span>
              </div>
              <div class="exp-company">
                ${companyLink}${exp.companyContext ? ` (${exp.companyContext})` : ""}${viaHtml}${badgeHtml}
              </div>
              ${stackHtml}
              <ul class="exp-bullets">
                ${pointsHtml}
              </ul>
            </div>
          </div>`;
  }).join("\n\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${data.name || "James Burgess"} – CV</title>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap");

    * { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --ink: #101010;
      --muted: #4e5058;
      --red: #c8241b;
      --blue: #093466;
      --yellow: #dba625;
      --bg: #f5f4ef;
    }

    html, body {
      width: 100%;
      font-family: "Inter", -apple-system, sans-serif;
      background: #e8eaf0;
      color: var(--ink);
      font-size: 8.2pt;
      line-height: 1.5;
    }

    .page {
      width: 210mm;
      min-height: 297mm;
      padding: 10mm 12mm;
      background: var(--bg);
      margin: 5mm auto;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    /* ── HEADER ── */
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 4mm;
      margin-bottom: 5mm;
    }

    .name-block h1 {
      font-family: "DM Serif Display", Georgia, serif;
      font-size: 30pt;
      font-weight: 400;
      letter-spacing: -0.5px;
      color: var(--ink);
      line-height: 1.2;
    }

    .name-block h2 {
      font-size: 8.5pt;
      font-weight: 600;
      color: var(--ink);
      letter-spacing: 2.5px;
      text-transform: uppercase;
      margin-top: 2px;
    }

    .contact-block {
      text-align: right;
      color: var(--ink);
      font-size: 7.5pt;
      font-weight: 500;
      line-height: 1.7;
      position: relative;
      padding-right: 14px;
    }

    .contact-block a {
      color: var(--ink);
      text-decoration: none;
    }

    .contact-block::after {
      content: "";
      position: absolute;
      top: 2px;
      right: 0;
      width: 7px;
      bottom: 2px;
      background: linear-gradient(to bottom, var(--red) 50%, var(--blue) 50%);
    }

    /* ── LAYOUT ── */
    .body-grid {
      display: grid;
      grid-template-columns: 1fr 2.1fr;
      gap: 0 8mm;
    }

    /* ── COMPONENTS ── */
    .theme-block {
      padding-left: 12px;
      border-left: 5px solid var(--theme-color, transparent);
      margin-bottom: 5mm;
    }

    .theme-blue { --theme-color: var(--blue); }
    .theme-red { --theme-color: var(--red); }
    .theme-yellow { --theme-color: var(--yellow); }
    .theme-black { --theme-color: var(--ink); }

    .section-label {
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--ink);
      margin-bottom: 3mm;
    }

    .theme-block .section-label { margin-top: 0; }

    .badge {
      display: inline-block;
      vertical-align: middle;
      margin-left: 8px;
      position: relative;
      top: -1px;
    }
    .yellow-circle {
      width: 11px;
      height: 11px;
      background-color: var(--yellow);
      border-radius: 50%;
    }
    .black-square {
      width: 11px;
      height: 11px;
      background-color: var(--ink);
    }

    /* ── LEFT COLUMN ── */
    .summary-text {
      font-size: 8pt;
      color: var(--ink);
      line-height: 1.6;
      margin-bottom: 1mm;
    }

    .highlight-list {
      padding-left: 0;
      list-style: none;
    }
    .highlight-list li {
      font-size: 7.8pt;
      color: var(--ink);
      padding-left: 14px;
      position: relative;
      margin-bottom: 1.5mm;
      line-height: 1.45;
    }
    .highlight-list li::before {
      content: "■";
      position: absolute;
      left: 0;
      color: var(--theme-color);
      font-size: 5pt;
      top: 1.5mm;
    }

    .edu-item { margin-bottom: 2mm; }
    .edu-item .title {
      font-size: 8pt;
      font-weight: 600;
      color: var(--ink);
    }
    .edu-item .sub {
      font-size: 7.5pt;
      color: var(--muted);
    }

    /* ── RIGHT COLUMN ── */
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }

    .exp-role {
      font-size: 9pt;
      font-weight: 700;
      color: var(--ink);
    }

    .exp-date {
      font-size: 7.5pt;
      color: var(--ink);
      white-space: nowrap;
      margin-left: 4mm;
      font-weight: 500;
    }

    .exp-company {
      font-size: 8pt;
      color: var(--ink);
      font-weight: 600;
      margin-bottom: 1.5mm;
      display: flex;
      align-items: center;
    }

    .exp-company a {
      color: var(--ink);
      text-decoration: none;
    }

    .exp-company a:hover { text-decoration: underline; }

    .exp-stack {
      font-size: 7pt;
      color: var(--muted);
      margin-bottom: 2mm;
      font-style: italic;
    }

    .exp-bullets {
      padding-left: 0;
      list-style: none;
    }
    .exp-bullets li {
      font-size: 7.8pt;
      color: var(--ink);
      padding-left: 14px;
      position: relative;
      margin-bottom: 1.5mm;
      line-height: 1.45;
    }
    .exp-bullets li::before {
      content: "■";
      position: absolute;
      left: 0;
      color: var(--theme-color);
      font-size: 5pt;
      top: 1.5mm;
    }

    strong { font-weight: 600; color: var(--ink); }

    /* Footer */
    .cv-footer {
      margin-top: 4mm;
      padding-top: 3mm;
      text-align: center;
      font-size: 6.5pt;
      color: #b0b6c8;
    }

    .download-btn {
      position: fixed;
      top: 6mm;
      right: 6mm;
      z-index: 100;
      background: var(--blue);
      color: #fff;
      border: none;
      padding: 3mm 5mm;
      font-size: 7.5pt;
      font-weight: 600;
      letter-spacing: 0.5px;
      border-radius: 4px;
      cursor: pointer;
      font-family: "Inter", sans-serif;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: background 0.15s;
    }
    .download-btn:hover { background: #0d2d5a; }

    @media print {
      .download-btn { display: none !important; }
      html, body {
        width: 210mm;
        height: 297mm;
        margin: 0;
        padding: 0;
        background: #fff;
      }
      .page {
        margin: 0;
        box-shadow: none;
        background: var(--bg);
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        height: 297mm;
        overflow: hidden;
      }
      @page { size: A4; margin: 0; }
    }
  </style>
</head>
<body>
  <button class="download-btn" onclick="window.print()">Download PDF</button>
  <div class="page">
    <!-- HEADER -->
    <header>
      <div class="name-block">
        <h1>${data.name || "James Burgess"}</h1>
        <h2>${data.title || ""}</h2>
      </div>
      <div class="contact-block">
        ${contact.location || ""}<br />
        ${contact.email ? `<a href="mailto:${contact.email}">${contact.email}</a><br />` : ""}
        ${contact.phone ? `${contact.phone}<br />` : ""}
        ${contact.availability || ""}
      </div>
    </header>

    <!-- BODY -->
    <div class="body-grid">
      <!-- LEFT -->
      <div class="left">
${leftHtml}
      </div>
      <!-- /left -->

      <!-- RIGHT -->
      <div class="right" id="section-experience">
        <div class="section-label" style="padding-left: 17px">${labels.experience}</div>

${experienceHtml}
      </div>
      <!-- /right -->
    </div>
    <!-- /body-grid -->

    <div class="cv-footer">
      ${data.footer || ""}
    </div>
  </div>
</body>
</html>`;
}
