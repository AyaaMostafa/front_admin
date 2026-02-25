import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="landing-container">

      <!-- Animated Background Blobs -->
      <div class="bg-blob blob-1"></div>
      <div class="bg-blob blob-2"></div>
      <div class="bg-blob blob-3"></div>

      <!-- Navbar -->
      <nav class="landing-nav">
        <div class="nav-logo">
          <div class="logo-mark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span class="logo-text">CodeGen</span>
        </div>
      </nav>

      <!-- Hero -->
      <main class="hero">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Intelligent Code Generation Platform
        </div>

        <h1 class="hero-title">
          Build Faster with
          <span class="hero-highlight">Smart Code</span>
          Generation
        </h1>

        <p class="hero-desc">
          Streamline your development workflow with automated code generation,
          type management, and intelligent sequencing — all in one place.
        </p>

        <a routerLink="/auth/login" class="btn-login">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
          Sign In to Dashboard
        </a>
      </main>

    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    .landing-container {
      min-height: 100vh;
      background: #f0fdfb;
      font-family: 'Inter', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 0 1.5rem 4rem;
    }

    /* ── Background Blobs ── */
    .bg-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
      z-index: 0;
    }

    .blob-1 {
      width: 480px;
      height: 480px;
      background: rgba(65, 205, 183, 0.22);
      top: -100px;
      right: -80px;
      animation: blob-drift 10s ease-in-out infinite;
    }

    .blob-2 {
      width: 320px;
      height: 320px;
      background: rgba(65, 205, 183, 0.12);
      bottom: 100px;
      left: -80px;
      animation: blob-drift 14s ease-in-out infinite reverse;
    }

    .blob-3 {
      width: 220px;
      height: 220px;
      background: rgba(43, 168, 154, 0.1);
      top: 50%;
      left: 30%;
      animation: blob-drift 18s ease-in-out infinite;
    }

    @keyframes blob-drift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33%  { transform: translate(20px, -20px) scale(1.05); }
      66%  { transform: translate(-15px, 15px) scale(0.95); }
    }

    /* ── Navbar ── */
    .landing-nav {
      width: 100%;
      max-width: 1100px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1.75rem 0;
      position: relative;
      z-index: 10;
    }

    .nav-logo {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .logo-mark {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #41CDB7, #2ba89a);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 4px 14px rgba(65, 205, 183, 0.35);
    }

    .logo-text {
      font-size: 1.2rem;
      font-weight: 800;
      color: #1a202c;
    }

    /* ── Hero ── */
    .hero {
      flex: 1;
      max-width: 720px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.75rem;
      padding: 3rem 0 4rem;
      position: relative;
      z-index: 5;
    }

    /* Badge */
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(65, 205, 183, 0.12);
      border: 1px solid rgba(65, 205, 183, 0.3);
      color: #2ba89a;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0.4rem 1rem;
      border-radius: 50px;
      letter-spacing: 0.3px;
    }

    .badge-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #41CDB7;
      animation: pulse-dot 2s ease-in-out infinite;
    }

    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.5; transform: scale(1.3); }
    }

    /* Title */
    .hero-title {
      font-size: 3.4rem;
      font-weight: 800;
      color: #0f172a;
      line-height: 1.15;
      letter-spacing: -0.5px;
    }

    .hero-highlight {
      color: #41CDB7;
      position: relative;
      display: inline-block;
    }

    .hero-highlight::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #41CDB7, #2ba89a);
      border-radius: 4px;
      opacity: 0.35;
    }

    /* Description */
    .hero-desc {
      font-size: 1.1rem;
      color: #64748b;
      line-height: 1.75;
      max-width: 560px;
    }

    /* Single Login Button */
    .btn-login {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1rem 2.25rem;
      background: linear-gradient(135deg, #41CDB7 0%, #2ba89a 100%);
      color: #ffffff;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 700;
      font-family: 'Inter', sans-serif;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(65, 205, 183, 0.4);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      letter-spacing: 0.1px;
    }

    .btn-login:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 32px rgba(65, 205, 183, 0.55);
    }

    .btn-login:active {
      transform: translateY(0);
      box-shadow: 0 6px 16px rgba(65, 205, 183, 0.35);
    }

    /* ── Responsive ── */
    @media (max-width: 768px) {
      .hero-title { font-size: 2.2rem; }
      .hero-desc  { font-size: 1rem; }
      .btn-login  { padding: 0.9rem 1.75rem; font-size: 0.95rem; }
    }
  `]
})
export class LandingComponent { }
