import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services';

@Component({
    selector: 'app-token-auth',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="auth-container">
      <!-- Animated Background -->
      <div class="bg-blob blob-1"></div>
      <div class="bg-blob blob-2"></div>
      <div class="bg-blob blob-3"></div>

      <div class="auth-card">

        <!-- Loading / Validating State -->
        <ng-container *ngIf="state === 'loading'">
          <div class="spinner-ring">
            <svg class="spin-svg" viewBox="0 0 50 50">
              <circle class="spin-circle" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
            </svg>
          </div>
          <h2 class="auth-title">Authenticating…</h2>
          <p class="auth-sub">Validating your session, please wait.</p>
        </ng-container>

        <!-- Success State (briefly shown before redirect) -->
        <ng-container *ngIf="state === 'success'">
          <div class="icon-wrap success">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 class="auth-title">Authenticated!</h2>
          <p class="auth-sub">Redirecting to dashboard…</p>
        </ng-container>

        <!-- Error State -->
        <ng-container *ngIf="state === 'error'">
          <div class="icon-wrap error">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <h2 class="auth-title">Unauthorized</h2>
          <p class="auth-sub">{{ errorMessage }}</p>
          <p class="auth-sub small">Please log in from the administrative system to access this application.</p>
        </ng-container>

      </div>
    </div>
  `,
    styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    .auth-container {
      min-height: 100vh;
      background: #f0fdfb;
      font-family: 'Inter', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
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
      width: 480px; height: 480px;
      background: rgba(65, 205, 183, 0.22);
      top: -100px; right: -80px;
      animation: blob-drift 10s ease-in-out infinite;
    }
    .blob-2 {
      width: 320px; height: 320px;
      background: rgba(65, 205, 183, 0.12);
      bottom: 100px; left: -80px;
      animation: blob-drift 14s ease-in-out infinite reverse;
    }
    .blob-3 {
      width: 220px; height: 220px;
      background: rgba(43, 168, 154, 0.1);
      top: 50%; left: 30%;
      animation: blob-drift 18s ease-in-out infinite;
    }
    @keyframes blob-drift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33%  { transform: translate(20px, -20px) scale(1.05); }
      66%  { transform: translate(-15px, 15px) scale(0.95); }
    }

    /* ── Card ── */
    .auth-card {
      position: relative;
      z-index: 10;
      background: rgba(255,255,255,0.85);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(65, 205, 183, 0.2);
      border-radius: 24px;
      padding: 3rem 3.5rem;
      text-align: center;
      min-width: 340px;
      max-width: 440px;
      width: 100%;
      box-shadow: 0 20px 60px rgba(65, 205, 183, 0.15), 0 4px 20px rgba(0,0,0,0.06);
    }

    /* ── Spinner ── */
    .spinner-ring {
      width: 64px;
      height: 64px;
      margin: 0 auto 1.5rem;
    }
    .spin-svg {
      width: 64px;
      height: 64px;
      animation: rotate 1.4s linear infinite;
    }
    .spin-circle {
      stroke: #41CDB7;
      stroke-linecap: round;
      stroke-dasharray: 80, 200;
      stroke-dashoffset: 0;
      animation: dash 1.4s ease-in-out infinite;
    }
    @keyframes rotate { 100% { transform: rotate(360deg); } }
    @keyframes dash {
      0%   { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
      50%  { stroke-dasharray: 90, 200; stroke-dashoffset: -35px; }
      100% { stroke-dasharray: 90, 200; stroke-dashoffset: -124px; }
    }

    /* ── Icon wraps ── */
    .icon-wrap {
      width: 64px; height: 64px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 1.5rem;
    }
    .icon-wrap svg { width: 30px; height: 30px; }
    .icon-wrap.success {
      background: rgba(65, 205, 183, 0.15);
      color: #41CDB7;
      border: 2px solid rgba(65, 205, 183, 0.4);
    }
    .icon-wrap.error {
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      border: 2px solid rgba(239, 68, 68, 0.3);
    }

    /* ── Text ── */
    .auth-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.6rem;
    }
    .auth-sub {
      font-size: 0.95rem;
      color: #64748b;
      line-height: 1.6;
    }
    .auth-sub.small {
      font-size: 0.82rem;
      margin-top: 0.5rem;
      color: #94a3b8;
    }
  `]
})
export class TokenAuthComponent implements OnInit {
    state: 'loading' | 'success' | 'error' = 'loading';
    errorMessage = 'Invalid or expired session token.';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        // 1. If already authenticated, skip directly to dashboard
        if (this.authService.isLoggedIn()) {
            const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard';
            this.router.navigateByUrl(returnUrl);
            return;
        }

        // 2. Look for a token in the query string (?token=eyJ...)
        const token = this.route.snapshot.queryParamMap.get('token');
        if (!token) {
            this.state = 'error';
            this.errorMessage = 'No authentication token provided.';
            return;
        }

        // 3. Validate the token with the backend
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard';
        this.authService.loginWithToken(token).subscribe({
            next: (success) => {
                if (success) {
                    this.state = 'success';
                    setTimeout(() => this.router.navigateByUrl(returnUrl), 800);
                } else {
                    this.state = 'error';
                    this.errorMessage = 'Token validation failed. Please log in again from the administrative system.';
                }
            },
            error: () => {
                this.state = 'error';
                this.errorMessage = 'Could not reach the authentication server. Please try again.';
            }
        });
    }
}
