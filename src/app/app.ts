import { Component, afterNextRender, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './core/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private router = inject(Router);
  private authService = inject(AuthService);

  constructor() {
 
    afterNextRender(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');

      if (!token) {
        // No token in URL — app opens normally, router handles routing.
        return;
      }

      // Token found in URL (passed from the administrative system).
      // Validate it with the backend and create a local session.
      this.authService.loginWithToken(token).subscribe({
        next: (success) => {
          // Always clean the token out of the address bar
          window.history.replaceState({}, '', window.location.pathname);

          if (success) {
            console.log('[SSO] Token validated — session stored in localStorage.');
            this.router.navigateByUrl('/');
          } else {
            console.warn('[SSO] Token rejected by server.');
          }
        },
        error: (err) => {
          console.error('[SSO] Token validation request failed:', err);
          window.history.replaceState({}, '', window.location.pathname);
        }
      });
    });
  }
}
