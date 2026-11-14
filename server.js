const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hello World — Node.js</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0f172a; color: #f1f5f9; font-family: system-ui, -apple-system, sans-serif; text-align: center; padding: 24px; }
  .card { max-width: 560px; }
  h1 { font-size: clamp(3rem, 12vw, 5rem); font-weight: 800; letter-spacing: -0.03em; }
  h1 span { color: #22c55e; }
  p { margin-top: 16px; font-size: 1.125rem; color: #94a3b8; line-height: 1.6; }
  .badge { display: inline-block; margin-top: 24px; padding: 8px 16px; border: 1px solid #334155; border-radius: 999px; font-size: 0.875rem; color: #cbd5e1; }
  a { color: #22c55e; }
</style>
</head>
<body>
  <div class="card">
    <h1>Hello <span>World!</span></h1>
    <p>Website ini berjalan di <strong>Node.js + Express</strong>, dibuat dan di-deploy dari HP &mdash; tanpa PC, tanpa VPS.</p>
    <div class="badge">Node.js &bull; Express &bull; GitHub &bull; Render</div>
    <p style="margin-top:24px;font-size:0.95rem">Kode sumber: <a href="https://github.com/rootremon/hello-world-node">github.com/rootremon/hello-world-node</a></p>
  </div>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
