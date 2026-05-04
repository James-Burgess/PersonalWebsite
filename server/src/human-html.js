const humanHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nothing to see here</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: #f5f5f5;
            color: #333;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #666;
        }
        p {
            font-size: 1.1rem;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>This page is for robots only</h1>
        <p>Nothing to see here, human.</p>
        <p>If you are a robot, change user agent or add a param to the url</p>
    </div>
</body>
</html>`;

export default humanHtml;
