import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/guards';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

export const routes: Routes = [
    // Landing page (public)
    {
        path: '',
        loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent)
    },

    // Auth routes (only for guests)
    {
        path: 'auth/login',
        loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent),
        canActivate: [guestGuard]
    },

    // Protected routes with layout (require authentication)
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'code-type',
                loadComponent: () => import('./features/code-type/code-type.component').then(m => m.CodeTypeComponent)
            },
            {
                path: 'code-type-attribute',
                loadComponent: () => import('./features/code-type-attribute/code-type-attribute.component').then(m => m.CodeTypeAttributeComponent)
            },
            {
                path: 'code-type-main',
                loadComponent: () => import('./features/code-type-main/code-type-main.component').then(m => m.CodeTypeMainComponent)
            },
            {
                path: 'code-details',
                loadComponent: () => import('./features/code-details/code-details.component').then(m => m.CodeDetailsComponent)
            },
            {
                path: 'code-settings',
                loadComponent: () => import('./features/code-settings/code-settings.component').then(m => m.CodeSettingsComponent)
            },
            {
                path: 'code-sequence',
                loadComponent: () => import('./features/code-sequence/code-sequence.component').then(m => m.CodeSequenceComponent)
            },
            {
                path: 'code-generation',
                loadComponent: () => import('./features/code-generation/code-generation.component').then(m => m.CodeGenerationComponent)
            },
            {
                path: 'settings',
                loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
            }
        ]
    },

    // Redirect unknown routes to landing
    {
        path: '**',
        redirectTo: ''
    }
];
