# RekanIQ — Landing Page Tes IQ (Node.js + Express)

Landing page RekanIQ: tes IQ online 15 menit, 24 soal. Tes gratis; skor detail,
sertifikat, unduhan, dan pembahasan jawaban terbuka setelah bayar Rp12.000
sekali via Midtrans.

Dibuat dan di-deploy dari HP (tanpa PC, tanpa VPS).

## Struktur

- `server.js` — aplikasi Express, menyajikan landing page di `/`.
- `rekaniq-landing.html` — sumber mentah landing page (dibuat oleh Gemini 4 Argon,
  penalaran Tinggi, 15 Nov 2026; tema putih-biru adaptasi dari ternakuang.id).
- `api/index.js` — entry serverless untuk Vercel.
- `vercel.json` — rewrite semua route ke `/api/index`.

## Jalankan lokal

```bash
npm install
npm start
```

Buka http://localhost:3000

## Deploy

Deploy otomatis ke Vercel (free tier, Hobby) dari repo ini.
URL live: https://hello-world-node-beta.vercel.app/
