export function renderPasswordForm(dataFile, error = false) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV Access</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .password-container {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 400px;
            width: 90%;
        }
        h1 {
            font-size: 1.75rem;
            margin-bottom: 0.5rem;
            color: #333;
        }
        p {
            color: #666;
            margin-bottom: 2rem;
        }
        .error {
            background: #fee;
            color: #c33;
            padding: 0.75rem;
            border-radius: 6px;
            margin-bottom: 1rem;
            border: 1px solid #fcc;
        }
        input[type="password"] {
            width: 100%;
            padding: 0.875rem;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 1rem;
            font-family: 'Inter', sans-serif;
            margin-bottom: 1rem;
            transition: border-color 0.3s;
        }
        input[type="password"]:focus {
            outline: none;
            border-color: #667eea;
        }
        button {
            width: 100%;
            padding: 0.875rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
        }
        button:active {
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <div class="password-container">
        <h1>CV Access</h1>
        <p>This CV is password protected. Please enter the password to continue.</p>
        ${error ? '<div class="error">Incorrect password. Please try again.</div>' : ""}
        <form method="GET" action="/cv">
            <input type="hidden" name="data" value="${dataFile}">
            <input type="password" name="password" placeholder="Enter password" required autofocus>
            <button type="submit">Access CV</button>
        </form>
    </div>
</body>
</html>`;
}

export function renderCV(data) {
  const colors = data.colors || {
    primary: "#FF6B35",
    secondary: "#1A1A2E",
    accent: "#FFEB3B",
    text: "#1A1A2E",
    textLight: "#6B7280",
    background: "#FFFFFF",
    backgroundAlt: "#F9FAFB",
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="/styles.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '${colors.primary}',
                        secondary: '${colors.secondary}',
                        accent: '${colors.accent}',
                    }
                }
            }
        }
    </script>
    <style>
        :root {
            --color-primary: ${colors.primary};
            --color-secondary: ${colors.secondary};
            --color-accent: ${colors.accent};
            --color-text: ${colors.text};
            --color-text-light: ${colors.textLight};
            --color-bg: ${colors.background};
            --color-bg-alt: ${colors.backgroundAlt};
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <p class="subtitle">${data.subtitle || "Engineer"}</p>
            <h1>${data.name.split(" ")[0]}<span class="hero-title-accent">${data.name.split(" ").slice(1).join(" ")}</span></h1>
            <p class="value-prop">${data.valueProp}</p>
        </div>
        <div class="hero-image">
            <img src="${data.profileImage || "https://via.placeholder.com/400x400"}" alt="profileImage" />
        </div>
    </section>

    <!-- Quick Stats Bar -->
    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                ${data.stats
                  .map(
                    (stat) => `
                <div class="stat-card">
                    <span class="stat-number">${stat.number}</span>
                    <span class="stat-label">${stat.label}</span>
                </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    </section>

    <!-- About / Value Proposition -->
    <section class="about">
        <div class="container">
            <h2 class="section-title">Why I'm Different</h2>
            <div class="about-content">
                ${data.about.map((para) => `<p>${para}</p>`).join("\n                ")}
            </div>
        </div>
    </section>

    <!-- Diving Qualifications -->
    <section class="qualifications">
        <div class="container">
            <h2 class="section-title">Diving Qualifications</h2>

            <div class="main-cert">
                <h3>${data.mainCert.title}</h3>
                <p class="cert-meta">Member #${data.mainCert.memberId} • Certified ${data.mainCert.certified} • Teaching Language: ${data.mainCert.language}</p>
                <p>500+ logged dives since ${data.mainCert.divesSince} • Experience: ${data.mainCert.experience}</p>
            </div>

            <div class="specialty-grid">
                ${data.specialties
                  .map(
                    (spec) => `
                <div class="specialty-card">
                    <div class="specialty-title">${spec.title}</div>
                </div>
                `,
                  )
                  .join("")}
            </div>

            <div style="background: white; padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--color-primary);">
                <strong>Additional:</strong> ${data.additionalCerts}
            </div>
        </div>
    </section>

    <!-- Experience Timeline -->
    <section class="timeline">
        <div class="container">
            <h2 class="section-title">Experience</h2>
            <div>
                ${data.experience
                  .map(
                    (exp) => `
                <div class="timeline-item">
                    <div class="timeline-title">${exp.title}</div>
                    <div class="timeline-meta">${exp.organization} • ${exp.period}</div>
                    <div class="timeline-subheading">${exp.subtitle}</div>
                    <ul>
                        ${exp.points.map((point) => `<li>${point}</li>`).join("\n                        ")}
                    </ul>
                    ${
                      exp.tags
                        ? `
                    <div class="tech-tags">
                        ${exp.tags.map((tag) => `<span class="tag">${tag}</span>`).join("\n                        ")}
                    </div>
                    `
                        : ""
                    }
                    ${
                      exp.callout
                        ? `
                    <div class="callout">
                        <strong>Conservation Relevance:</strong> ${exp.callout}
                    </div>
                    `
                        : ""
                    }
                </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    </section>

    <!-- Skills Matrix -->
    <section class="skills">
        <div class="container">
            <h2 class="section-title">Skills Matrix</h2>
            <div class="skills-grid">
                ${data.skills
                  .map(
                    (skill) => `
                <div class="skill-card">
                    <div class="skill-icon">${skill.icon}</div>
                    <h3>${skill.title}</h3>
                    <ul>
                        ${skill.items.map((item) => `<li>${item}</li>`).join("\n                        ")}
                    </ul>
                </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    </section>

    <!-- Contact / CTA Section -->
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="section-title">Let's Work Together</h2>

            <div class="commitment-text">
                <p>${data.commitment.text}</p>
            </div>
            <div class="commitment-grid">
              <div class="commitment-item">
                  <div class="commitment-icon">${data.commitment.timeline.icon}</div>
                  <h3>${data.commitment.timeline.title}</h3>
                  ${data.commitment.timeline.lines.map((line) => `<p>${line}</p>`).join("\n                    ")}
              </div>
              <div class="commitment-item">
                  <div class="commitment-icon">${data.commitment.location.icon}</div>
                  <h3>${data.commitment.location.title}</h3>
                  ${data.commitment.location.lines.map((line) => `<p>${line}</p>`).join("\n                    ")}
              </div>
              <div class="commitment-item">
                  <div class="commitment-icon">${data.commitment.motivation.icon}</div>
                  <h3>${data.commitment.motivation.title}</h3>
                  ${data.commitment.motivation.lines.map((line) => `<p>${line}</p>`).join("\n                    ")}
              </div>
            </div>
        </div>
    </section>
</body>
</html>`;
}
