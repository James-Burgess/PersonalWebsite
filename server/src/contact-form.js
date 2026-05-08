export function renderContactForm(sent = false, error = false) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact — JimmyB</title>
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
            max-width: 560px;
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

        .success {
            background: #0e1a0e;
            border: 1px solid #1a3a1a;
            color: #4ade80;
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
            margin-bottom: 1.25rem;
        }

        .error {
            background: #1a0e0e;
            border: 1px solid #3a1a1a;
            color: #c8241b;
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
            margin-bottom: 1.25rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group:last-of-type {
            margin-bottom: 1.25rem;
        }

        label {
            display: block;
            font-size: 0.82rem;
            color: #666;
            margin-bottom: 0.5rem;
            text-transform: lowercase;
        }

        label .cursor {
            display: inline-block;
            width: 8px;
            height: 1.1em;
            background: #4ade80;
            vertical-align: text-bottom;
            margin-left: 4px;
            animation: blink 1s step-end infinite;
        }

        @keyframes blink {
            50% { opacity: 0; }
        }

        input[type="text"],
        input[type="email"],
        textarea {
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

        input[type="text"]:focus,
        input[type="email"]:focus,
        textarea:focus {
            border-color: #333;
        }

        input::placeholder,
        textarea::placeholder {
            color: #444;
        }

        textarea {
            min-height: 120px;
            resize: vertical;
            line-height: 1.6;
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
        <h1>Contact</h1>
        <p class="subtitle">Drop a message. It goes straight to my phone via ntfy.</p>
        ${sent ? '<div class="success">message sent. i\'ll get back to you.</div>' : ""}
        ${error ? '<div class="error">failed to send. try again later.</div>' : ""}
        <form method="POST" action="/contact">
            <div class="form-group">
                <label for="name">name<span class="cursor"></span></label>
                <input type="text" id="name" name="name" placeholder="your name" required>
            </div>
            <div class="form-group">
                <label for="email">email<span class="cursor"></span></label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required>
            </div>
            <div class="form-group">
                <label for="message">message<span class="cursor"></span></label>
                <textarea id="message" name="message" placeholder="what's on your mind?" required></textarea>
            </div>
            <button type="submit">send message</button>
        </form>
        <a class="back-link" href="/">&larr; back to jimmyb.co.za</a>
    </div>
</body>
</html>`;
}
