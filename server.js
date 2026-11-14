const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Landing page RekanIQ — dibuat oleh Gemini 4 Argon (penalaran Tinggi), 15 Nov 2026.
// Sumber mentah: rekaniq-landing.html di repo ini.
const LANDING_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RekanIQ — Tes IQ Online 15 Menit</title>
  <meta name="description" content="Ukur IQ-mu dalam 15 menit dengan 24 soal logika, pola, angka, spasial, verbal, dan memori. Tes gratis, buka skor detail, sertifikat, dan pembahasan seharga Rp12.000.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-white: #FFFFFF;
      --bg-soft: #F1F5FD;
      --primary: #0050FB;
      --primary-hover: #003ECA;
      --heading: #030C1D;
      --body: #475569;
      --border: #E4ECFC;
      --container-max: 1150px;
      --transition-fast: 200ms ease;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      overflow-x: hidden;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 16px;
      line-height: 1.65;
      color: var(--body);
      background-color: var(--bg-white);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4 {
      font-family: 'Poppins', sans-serif;
      color: var(--heading);
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    h1 {
      font-size: 36px;
      font-weight: 800;
    }

    h2 {
      font-size: 28px;
      font-weight: 700;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
    }

    p {
      font-size: 16px;
      color: var(--body);
    }

    a {
      color: inherit;
      text-decoration: none;
      transition: color var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
    }

    ul {
      list-style: none;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      border: none;
      background: none;
    }

    a:focus-visible,
    button:focus-visible {
      outline: 3px solid var(--primary);
      outline-offset: 3px;
      border-radius: 6px;
    }

    .container {
      width: 100%;
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 20px;
    }

    .section {
      padding: 60px 0;
    }

    .section-White {
      background-color: var(--bg-white);
    }

    .section-soft {
      background-color: var(--bg-soft);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .section-header {
      max-width: 680px;
      margin: 0 auto 40px auto;
      text-align: center;
    }

    .section-tag {
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      color: var(--primary);
      background-color: var(--bg-soft);
      border: 1px solid var(--border);
      padding: 6px 14px;
      border-radius: 999px;
      margin-bottom: 14px;
    }

    .section-soft .section-tag {
      background-color: var(--bg-white);
    }

    .section-header h2 {
      margin-bottom: 12px;
    }

    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 48px;
      padding: 12px 24px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 10px;
      transition: background-color var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
      text-align: center;
      white-space: nowrap;
    }

    .btn-primary {
      background-color: var(--primary);
      color: var(--bg-white);
      border: 2px solid var(--primary);
    }

    .btn-primary:hover {
      background-color: var(--primary-hover);
      border-color: var(--primary-hover);
      transform: translateY(-1px);
    }

    .btn-secondary {
      background-color: var(--bg-white);
      color: var(--heading);
      border: 2px solid var(--border);
    }

    .btn-secondary:hover {
      background-color: var(--bg-soft);
      border-color: var(--primary);
      color: var(--primary);
      transform: translateY(-1px);
    }

    /* Wordmark Logo */
    .logo {
      display: inline-flex;
      align-items: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 800;
      font-size: 24px;
      letter-spacing: -0.03em;
      line-height: 1;
    }

    .logo-rekan {
      color: var(--heading);
    }

    .logo-iq {
      color: var(--primary);
    }

    /* 1. Sticky Navbar */
    .site-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background-color: var(--bg-white);
      border-bottom: 1px solid var(--border);
    }

    .nav-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 72px;
      gap: 16px;
    }

    .nav-links {
      display: none;
      align-items: center;
      gap: 32px;
    }

    .nav-links a {
      font-size: 16px;
      font-weight: 500;
      color: var(--body);
      padding: 8px 4px;
    }

    .nav-links a:hover {
      color: var(--primary);
    }

    .nav-cta-desktop {
      display: none;
    }

    .mobile-menu-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      color: var(--heading);
      border: 1px solid var(--border);
      border-radius: 8px;
      background-color: var(--bg-white);
    }

    .mobile-menu-btn:hover {
      background-color: var(--bg-soft);
      color: var(--primary);
    }

    .mobile-nav {
      display: none;
      background-color: var(--bg-white);
      border-bottom: 1px solid var(--border);
      padding: 16px 20px 24px 20px;
    }

    .mobile-nav.is-open {
      display: block;
    }

    .mobile-nav-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    .mobile-nav-list a {
      display: flex;
      align-items: center;
      min-height: 44px;
      padding: 8px 12px;
      font-size: 16px;
      font-weight: 500;
      color: var(--heading);
      border-radius: 8px;
    }

    .mobile-nav-list a:hover {
      background-color: var(--bg-soft);
      color: var(--primary);
    }

    .mobile-nav .btn {
      width: 100%;
    }

    /* 2. Hero Section */
    .hero {
      padding: 56px 0 64px 0;
      text-align: center;
      background-color: var(--bg-white);
    }

    .hero-inner {
      max-width: 780px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background-color: var(--bg-soft);
      border: 1px solid var(--border);
      border-radius: 999px;
      font-size: 14px;
      font-weight: 600;
      color: var(--primary);
      margin-bottom: 24px;
    }

    .hero-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      margin-bottom: 24px;
    }

    .hero-title-line {
      display: block;
    }

    .hero-highlight {
      display: inline-block;
      background-color: var(--primary);
      color: var(--bg-white);
      padding: 2px 16px 6px 16px;
      border-radius: 10px;
      margin-top: 4px;
    }

    .hero-subtitle {
      max-width: 600px;
      margin: 0 auto 32px auto;
      font-size: 17px;
      color: var(--body);
    }

    .hero-actions {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      gap: 12px;
      max-width: 420px;
      margin: 0 auto 32px auto;
    }

    .hero-chips {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background-color: var(--bg-soft);
      border: 1px solid var(--border);
      border-radius: 999px;
      font-size: 14px;
      font-weight: 600;
      color: var(--heading);
    }

    .chip svg {
      color: var(--primary);
      flex-shrink: 0;
    }

    /* 3. Manfaat Timeline Section */
    .timeline-wrapper {
      max-width: 760px;
      margin: 0 auto;
      position: relative;
    }

    .timeline-list {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .timeline-list::before {
      content: "";
      position: absolute;
      top: 28px;
      bottom: 28px;
      left: 27px;
      width: 2px;
      background-color: var(--border);
      z-index: 1;
    }

    .timeline-item {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }

    .timeline-number {
      flex-shrink: 0;
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background-color: var(--primary);
      color: var(--bg-white);
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 4px solid var(--bg-soft);
    }

    .timeline-card {
      flex: 1;
      background-color: var(--bg-white);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
    }

    .timeline-card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .timeline-card-header svg {
      color: var(--primary);
      flex-shrink: 0;
    }

    /* 4. Cara Kerja Section */
    .steps-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .step-card {
      background-color: var(--bg-soft);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      transition: border-color var(--transition-fast), transform var(--transition-fast);
    }

    .step-card:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
    }

    .step-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .step-icon-box {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background-color: var(--bg-white);
      border: 1px solid var(--border);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
    }

    .step-badge {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: var(--primary);
      background-color: var(--bg-white);
      border: 1px solid var(--border);
      padding: 4px 12px;
      border-radius: 999px;
    }

    /* 5. Yang Diukur Section */
    .measured-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .measured-card {
      background-color: var(--bg-white);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 24px;
      transition: border-color var(--transition-fast), transform var(--transition-fast);
    }

    .measured-card:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
    }

    .measured-icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      background-color: var(--bg-soft);
      border: 1px solid var(--border);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      margin-bottom: 16px;
    }

    .measured-card h3 {
      margin-bottom: 8px;
    }

    /* 6. Harga Section */
    .pricing-wrapper {
      max-width: 540px;
      margin: 0 auto;
    }

    .pricing-card {
      background-color: var(--bg-white);
      border: 2px solid var(--primary);
      border-radius: 16px;
      padding: 32px 24px;
    }

    .pricing-top {
      text-align: center;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 24px;
    }

    .pricing-pill {
      display: inline-block;
      background-color: var(--bg-soft);
      color: var(--primary);
      border: 1px solid var(--border);
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 700;
      padding: 6px 16px;
      border-radius: 999px;
      margin-bottom: 16px;
    }

    .pricing-title {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .pricing-amount {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 8px;
      margin: 16px 0 8px 0;
    }

    .price-value {
      font-family: 'Poppins', sans-serif;
      font-size: 40px;
      font-weight: 800;
      color: var(--heading);
      line-height: 1;
    }

    .price-period {
      font-size: 15px;
      font-weight: 500;
      color: var(--body);
    }

    .pricing-note {
      font-size: 15px;
      color: var(--body);
    }

    .pricing-features {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-bottom: 28px;
    }

    .pricing-feature-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 16px;
      color: var(--heading);
      font-weight: 500;
    }

    .pricing-feature-item svg {
      color: var(--primary);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .pricing-card .btn {
      width: 100%;
    }

    .pricing-subnote {
      margin-top: 14px;
      text-align: center;
      font-size: 14px;
      color: var(--body);
    }

    /* 7. FAQ Section */
    .faq-wrapper {
      max-width: 760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .faq-item {
      background-color: var(--bg-white);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      transition: border-color var(--transition-fast);
    }

    .faq-item.is-open {
      border-color: var(--primary);
    }

    .faq-trigger {
      width: 100%;
      min-height: 60px;
      padding: 18px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      text-align: left;
      font-family: 'Poppins', sans-serif;
      font-size: 17px;
      font-weight: 700;
      color: var(--heading);
      background-color: var(--bg-white);
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    .faq-trigger:hover {
      background-color: var(--bg-soft);
      color: var(--primary);
    }

    .faq-icon {
      flex-shrink: 0;
      color: var(--primary);
      transition: transform var(--transition-fast);
    }

    .faq-item.is-open .faq-icon {
      transform: rotate(180deg);
    }

    .faq-content {
      display: none;
      padding: 0 20px 20px 20px;
      border-top: 1px solid var(--border);
    }

    .faq-item.is-open .faq-content {
      display: block;
    }

    .faq-content p {
      padding-top: 14px;
      font-size: 16px;
      color: var(--body);
    }

    /* 8. Closing CTA & Footer */
    .closing-cta {
      padding: 60px 0;
      background-color: var(--bg-white);
      border-bottom: 1px solid var(--border);
    }

    .closing-box {
      background-color: var(--bg-soft);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 40px 24px;
      text-align: center;
      max-width: 880px;
      margin: 0 auto;
    }

    .closing-box h2 {
      margin-bottom: 12px;
    }

    .closing-box p {
      max-width: 540px;
      margin: 0 auto 24px auto;
    }

    .site-footer {
      background-color: var(--bg-white);
      padding: 56px 0 36px 0;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 36px;
      padding-bottom: 40px;
      border-bottom: 1px solid var(--border);
    }

    .footer-brand p {
      margin-top: 12px;
      max-width: 360px;
      font-size: 15px;
    }

    .footer-col h3 {
      font-size: 16px;
      margin-bottom: 16px;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .footer-links a {
      display: inline-flex;
      align-items: center;
      min-height: 36px;
      font-size: 15px;
      color: var(--body);
    }

    .footer-links a:hover {
      color: var(--primary);
    }

    .social-links {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .social-btn {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background-color: var(--bg-soft);
      border: 1px solid var(--border);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--heading);
    }

    .social-btn:hover {
      background-color: var(--primary);
      border-color: var(--primary);
      color: var(--bg-white);
      transform: translateY(-1px);
    }

    .footer-bottom {
      padding-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      font-size: 14px;
      color: var(--body);
    }

    /* Scroll Reveal */
    .reveal {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 260ms ease, transform 260ms ease;
    }

    .reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Breakpoints: 768px, 1024px, 1440px */
    @media (min-width: 768px) {
      body, p {
        font-size: 17px;
      }

      h1 {
        font-size: 52px;
      }

      h2 {
        font-size: 36px;
      }

      .container {
        padding: 0 32px;
      }

      .section {
        padding: 88px 0;
      }

      .hero {
        padding: 80px 0 96px 0;
      }

      .hero-subtitle {
        font-size: 18px;
      }

      .hero-actions {
        flex-direction: row;
        max-width: none;
      }

      .steps-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .measured-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .pricing-card {
        padding: 40px;
      }

      .closing-box {
        padding: 56px 40px;
      }

      .footer-grid {
        grid-template-columns: 1.5fr 1fr 1fr;
      }

      .footer-bottom {
        flex-direction: row;
        text-align: left;
      }
    }

    @media (min-width: 1024px) {
      h1 {
        font-size: 60px;
      }

      h2 {
        font-size: 38px;
      }

      .section {
        padding: 100px 0;
      }

      .nav-links {
        display: flex;
      }

      .nav-cta-desktop {
        display: inline-flex;
      }

      .mobile-menu-btn,
      .mobile-nav {
        display: none !important;
      }

      .measured-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1440px) {
      h1 {
        font-size: 64px;
      }

      h2 {
        font-size: 40px;
      }

      .section {
        padding: 112px 0;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      .reveal {
        opacity: 1 !important;
        transform: none !important;
      }
    }
  </style>
</head>
<body>

  <!-- 1. Nav Sticky Putih -->
  <header class="site-header">
    <div class="container nav-bar">
      <a href="#" class="logo" aria-label="RekanIQ Beranda">
        <span class="logo-rekan">Rekan</span><span class="logo-iq">IQ</span>
      </a>

      <nav aria-label="Navigasi Utama">
        <ul class="nav-links">
          <li><a href="#cara-kerja">Cara Kerja</a></li>
          <li><a href="#yang-diukur">Yang Diukur</a></li>
          <li><a href="#harga">Harga</a></li>
        </ul>
      </nav>

      <div class="nav-cta-desktop">
        <a href="#harga" class="btn btn-primary">Mulai Tes Gratis</a>
      </div>

      <button type="button" class="mobile-menu-btn" id="mobileMenuBtn" aria-expanded="false" aria-controls="mobileNav" aria-label="Buka menu navigasi">
        <svg id="iconMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
        <svg id="iconMenuClose" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display: none;">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div class="mobile-nav" id="mobileNav">
      <ul class="mobile-nav-list">
        <li><a href="#cara-kerja" class="mobile-nav-link">Cara Kerja</a></li>
        <li><a href="#yang-diukur" class="mobile-nav-link">Yang Diukur</a></li>
        <li><a href="#harga" class="mobile-nav-link">Harga</a></li>
      </ul>
      <a href="#harga" class="btn btn-primary mobile-nav-link">Mulai Tes Gratis</a>
    </div>
  </header>

  <main>
    <!-- 2. Hero Section -->
    <section class="hero">
      <div class="container hero-inner reveal">
        <div class="hero-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>Tes IQ Online • 15 Menit</span>
        </div>

        <h1 class="hero-title">
          <span class="hero-title-line">Ukur IQ-mu</span>
          <span class="hero-title-line">dalam 15 Menit</span>
          <span class="hero-title-line"><span class="hero-highlight">Gratis.</span></span>
        </h1>

        <p class="hero-subtitle">
          Jawab 24 soal terstruktur untuk memetakan kemampuan penalaran kognitifmu. Kerjakan tesnya gratis sekarang dan buka laporan lengkapnya kapan saja.
        </p>

        <div class="hero-actions">
          <a href="#harga" class="btn btn-primary">
            <span>Mulai Tes Gratis</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#harga" class="btn btn-secondary">Lihat Harga</a>
        </div>

        <div class="hero-chips">
          <div class="chip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 11l3 3L22 4"></path>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            <span>24 Soal</span>
          </div>
          <div class="chip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <span>Hasil Instan</span>
          </div>
          <div class="chip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="6"></circle>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
            </svg>
            <span>Sertifikat</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Manfaat Section -->
    <section class="section section-soft">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Manfaat Lengkap</span>
          <h2>Apa yang kamu dapatkan di RekanIQ</h2>
          <p>Hasil evaluasi disusun ringkas dan mudah dipahami untuk membantu kamu mengenali kekuatan kognitifmu.</p>
        </div>

        <div class="timeline-wrapper">
          <div class="timeline-list">
            <div class="timeline-item reveal">
              <div class="timeline-number">01</div>
              <div class="timeline-card">
                <div class="timeline-card-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                  <h3>Skor IQ + analisis kemampuan</h3>
                </div>
                <p>Dapatkan estimasi skor IQ total beserta rincian performa pada enam domain kognitif utama.</p>
              </div>
            </div>

            <div class="timeline-item reveal">
              <div class="timeline-number">02</div>
              <div class="timeline-card">
                <div class="timeline-card-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                  <h3>Sertifikat hasil tes</h3>
                </div>
                <p>Unduh sertifikat digital berformat rapi lengkap dengan rincian skor dan nomor seri hasil tes.</p>
              </div>
            </div>

            <div class="timeline-item reveal">
              <div class="timeline-number">03</div>
              <div class="timeline-card">
                <div class="timeline-card-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <h3>Pembahasan tiap jawaban</h3>
                </div>
                <p>Pelajari kunci jawaban dan logika penyelesaian untuk seluruh 24 soal yang telah kamu kerjakan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Cara Kerja Section -->
    <section id="cara-kerja" class="section section-White">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Cara Kerja</span>
          <h2>Tiga langkah mudah mulai tes</h2>
          <p>Tanpa registrasi rumit. Kamu bisa langsung mengerjakan soal dari perangkat apa pun.</p>
        </div>

        <div class="steps-grid">
          <div class="step-card reveal">
            <div class="step-top">
              <div class="step-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <span class="step-badge">Langkah 1</span>
            </div>
            <h3>Kerjakan 24 soal</h3>
            <p>Jawab 24 pertanyaan pilihan ganda dalam batas waktu 15 menit secara gratis tanpa biaya awal.</p>
          </div>

          <div class="step-card reveal">
            <div class="step-top">
              <div class="step-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <span class="step-badge">Langkah 2</span>
            </div>
            <h3>Lihat skormu</h3>
            <p>Sistem menghitung jawabanmu secara instan begitu waktu selesai atau semua soal terjawab.</p>
          </div>

          <div class="step-card reveal">
            <div class="step-top">
              <div class="step-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                </svg>
              </div>
              <span class="step-badge">Langkah 3</span>
            </div>
            <h3>Buka hasil lengkap Rp12.000</h3>
            <p>Bayar sekali via Midtrans untuk membuka detail skor, unduhan sertifikat, dan pembahasan soal.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Yang Diukur Section -->
    <section id="yang-diukur" class="section section-soft">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Yang Diukur</span>
          <h2>Enam dimensi kemampuan kognitif</h2>
          <p>Setiap soal dirancang untuk menguji aspek spesifik dari ketajaman berpikir dan pemecahan masalah.</p>
        </div>

        <div class="measured-grid">
          <div class="measured-card reveal">
            <div class="measured-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="18" cy="18" r="3"></circle>
                <circle cx="6" cy="6" r="3"></circle>
                <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                <line x1="6" y1="9" x2="6" y2="21"></line>
              </svg>
            </div>
            <h3>Logika</h3>
            <p>Kemampuan menarik kesimpulan yang valid dari premis dan aturan yang diberikan.</p>
          </div>

          <div class="measured-card reveal">
            <div class="measured-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <h3>Pola</h3>
            <p>Ketajaman mengenali keteraturan bentuk visual dan urutan matriks yang berulang.</p>
          </div>

          <div class="measured-card reveal">
            <div class="measured-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="9" x2="20" y2="9"></line>
                <line x1="4" y1="15" x2="20" y2="15"></line>
                <line x1="10" y1="3" x2="8" y2="21"></line>
                <line x1="16" y1="3" x2="14" y2="21"></line>
              </svg>
            </div>
            <h3>Angka</h3>
            <p>Kecepatan mengolah deret bilangan dan hubungan aritmetika secara akurat.</p>
          </div>

          <div class="measured-card reveal">
            <div class="measured-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3>Spasial</h3>
            <p>Keterampilan memvisualisasikan rotasi objek dua maupun tiga dimensi di dalam pikiran.</p>
          </div>

          <div class="measured-card reveal">
            <div class="measured-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>Verbal</h3>
            <p>Pemahaman hubungan makna kata, analogi bahasa, dan klasifikasi konsep verbal.</p>
          </div>

          <div class="measured-card reveal">
            <div class="measured-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            <h3>Memori</h3>
            <p>Kapasitas menyimpan dan memanggil kembali informasi jangka pendek secara presisi.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Harga Section -->
    <section id="harga" class="section section-White">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Harga Transparan</span>
          <h2>Kerjakan gratis, bayar jika ingin hasil lengkap</h2>
          <p>Tidak ada biaya berlangganan. Kamu hanya membayar satu kali saat ingin membuka laporan detail.</p>
        </div>

        <div class="pricing-wrapper reveal">
          <div class="pricing-card">
            <div class="pricing-top">
              <span class="pricing-pill">Tes Gratis</span>
              <h3 class="pricing-title">Akses Hasil Lengkap</h3>
              <div class="pricing-amount">
                <span class="price-value">Rp12.000</span>
                <span class="price-period">/ sekali bayar</span>
              </div>
              <p class="pricing-note">Kerjakan seluruh 24 soal secara gratis. Buka hasil lengkap setelah selesai.</p>
            </div>

            <ul class="pricing-features">
              <li class="pricing-feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Akses penuh 24 soal tes IQ selama 15 menit (Gratis)</span>
              </li>
              <li class="pricing-feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Skor IQ detail dan rincian 6 domain kemampuan</span>
              </li>
              <li class="pricing-feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Sertifikat hasil tes digital siap unduh dan cetak</span>
              </li>
              <li class="pricing-feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Kunci jawaban dan pembahasan lengkap 24 soal</span>
              </li>
              <li class="pricing-feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Pembayaran instan via Midtrans (QRIS, E-Wallet, VA Bank)</span>
              </li>
            </ul>

            <a href="#harga" class="btn btn-primary">Mulai Tes Gratis</a>
            <p class="pricing-subnote">Sekali bayar Rp12.000 via Midtrans tanpa biaya tambahan tersembunyi.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. FAQ Section -->
    <section id="faq" class="section section-soft">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag">Tanya Jawab</span>
          <h2>Pertanyaan yang sering diajukan</h2>
          <p>Informasi penting seputar pelaksanaan tes, pembayaran, dan kegunaan hasil RekanIQ.</p>
        </div>

        <div class="faq-wrapper">
          <div class="faq-item is-open reveal">
            <button type="button" class="faq-trigger" aria-expanded="true">
              <span>Berapa lama waktu pengerjaan tesnya?</span>
              <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              <p>Durasi tes adalah 15 menit untuk mengerjakan 24 soal pilihan ganda. Timer berjalan otomatis saat kamu memulai sesi dan tes berakhir saat waktu habis atau seluruh soal selesai dijawab.</p>
            </div>
          </div>

          <div class="faq-item reveal">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>Apa saja yang gratis di RekanIQ?</span>
              <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              <p>Kamu dapat mengakses dan mengerjakan seluruh 24 soal tes IQ dari awal hingga selesai secara gratis tanpa perlu memasukkan metode pembayaran di awal.</p>
            </div>
          </div>

          <div class="faq-item reveal">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>Apa yang terkunci sampai saya membayar?</span>
              <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              <p>Skor IQ detail, analisis 6 domain kemampuan kognitif, sertifikat digital siap unduh, serta pembahasan tiap jawaban akan terbuka penuh setelah kamu menyelesaikan pembayaran sekali sebesar Rp12.000.</p>
            </div>
          </div>

          <div class="faq-item reveal">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>Bagaimana cara membayar via Midtrans?</span>
              <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              <p>Setelah selesai mengerjakan soal, klik tombol buka hasil lengkap dan pilih metode pembayaran Midtrans yang tersedia seperti QRIS, GoPay, ShopeePay, DANA, OVO, atau Virtual Account bank. Hasil langsung terbuka otomatis setelah pembayaran berhasil.</p>
            </div>
          </div>

          <div class="faq-item reveal">
            <button type="button" class="faq-trigger" aria-expanded="false">
              <span>Apakah hasil tes ini merupakan diagnosis klinis?</span>
              <svg class="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="faq-content">
              <p>Bukan. Tes di RekanIQ dirancang sebagai sarana latihan dan gambaran umum kemampuan kognitif serta penalaran logis kamu, bukan diagnosis klinis atau pemeriksaan psikologis resmi dari psikolog profesional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. CTA Penutup Singkat -->
    <section class="closing-cta">
      <div class="container">
        <div class="closing-box reveal">
          <h2>Siap mengetahui potensi kognitifmu?</h2>
          <p>Luangkan 15 menit untuk mengerjakan 24 soal sekarang. Tanpa registrasi rumit dan gratis untuk memulai.</p>
          <a href="#harga" class="btn btn-primary">
            <span>Mulai Tes Gratis</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo" aria-label="RekanIQ Beranda">
            <span class="logo-rekan">Rekan</span><span class="logo-iq">IQ</span>
          </a>
          <p>Platform tes IQ online 15 menit dengan 24 soal terstruktur untuk memberikan gambaran umum kemampuan kognitif secara cepat dan terjangkau.</p>
        </div>

        <div class="footer-col">
          <h3>Bantuan &amp; Panduan</h3>
          <ul class="footer-links">
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#">Syarat &amp; Ketentuan</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Ikuti Kami</h3>
          <div class="social-links">
            <a href="#" class="social-btn" aria-label="Instagram RekanIQ">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="social-btn" aria-label="X RekanIQ">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" class="social-btn" aria-label="LinkedIn RekanIQ">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>&copy; 2026 RekanIQ. Hak cipta dilindungi.</span>
        <span>Gambaran umum kognitif, bukan diagnosis klinis.</span>
      </div>
    </div>
  </footer>

  <script>
    (function () {
      // Mobile menu toggle
      var mobileMenuBtn = document.getElementById('mobileMenuBtn');
      var mobileNav = document.getElementById('mobileNav');
      var iconMenuOpen = document.getElementById('iconMenuOpen');
      var iconMenuClose = document.getElementById('iconMenuClose');
      var mobileLinks = document.querySelectorAll('.mobile-nav-link');

      function setMenuState(isOpen) {
        if (!mobileMenuBtn || !mobileNav) {
          return;
        }
        if (isOpen) {
          mobileNav.classList.add('is-open');
          mobileMenuBtn.setAttribute('aria-expanded', 'true');
          mobileMenuBtn.setAttribute('aria-label', 'Tutup menu navigasi');
          if (iconMenuOpen) iconMenuOpen.style.display = 'none';
          if (iconMenuClose) iconMenuClose.style.display = 'block';
        } else {
          mobileNav.classList.remove('is-open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          mobileMenuBtn.setAttribute('aria-label', 'Buka menu navigasi');
          if (iconMenuOpen) iconMenuOpen.style.display = 'block';
          if (iconMenuClose) iconMenuClose.style.display = 'none';
        }
      }

      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
          var currentlyOpen = mobileNav.classList.contains('is-open');
          setMenuState(!currentlyOpen);
        });
      }

      for (var i = 0; i < mobileLinks.length; i++) {
        mobileLinks[i].addEventListener('click', function () {
          setMenuState(false);
        });
      }

      // FAQ Accordion
      var faqItems = document.querySelectorAll('.faq-item');

      for (var j = 0; j < faqItems.length; j++) {
        (function (item) {
          var trigger = item.querySelector('.faq-trigger');
          if (!trigger) {
            return;
          }
          trigger.addEventListener('click', function () {
            var isOpen = item.classList.contains('is-open');

            for (var k = 0; k < faqItems.length; k++) {
              faqItems[k].classList.remove('is-open');
              var otherTrigger = faqItems[k].querySelector('.faq-trigger');
              if (otherTrigger) {
                otherTrigger.setAttribute('aria-expanded', 'false');
              }
            }

            if (!isOpen) {
              item.classList.add('is-open');
              trigger.setAttribute('aria-expanded', 'true');
            }
          });
        })(faqItems[j]);
      }

      // Smooth Scroll Reveal
      var revealElements = document.querySelectorAll('.reveal');
      var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        for (var m = 0; m < revealElements.length; m++) {
          revealElements[m].classList.add('is-visible');
        }
      } else {
        var observer = new IntersectionObserver(function (entries, obs) {
          for (var n = 0; n < entries.length; n++) {
            if (entries[n].isIntersecting) {
              entries[n].target.classList.add('is-visible');
              obs.unobserve(entries[n].target);
            }
          }
        }, {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        });

        for (var p = 0; p < revealElements.length; p++) {
          observer.observe(revealElements[p]);
        }
      }
    })();
  </script>
</body>
</html>`;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(LANDING_HTML);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
  });
}

module.exports = app;
