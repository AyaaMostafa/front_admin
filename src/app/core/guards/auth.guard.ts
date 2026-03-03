import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services';

/**
 * Guard to protect routes that require authentication.
 * If not authenticated, redirects to the landing page ('/').
 */
export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isLoggedIn()) {
        return true;
    }

    // Redirect to root (landing page) if not logged in
    router.navigate(['/']);
    return false;
};

/**
 * Kept for backward compatibility.
 */
export const guestGuard: CanActivateFn = () => {
    // Allow guest routes when bypassing auth.
    return true;
};
