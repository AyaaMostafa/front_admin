import {
    Component, Output, EventEmitter, signal,
    HostListener, OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    @Output() toggleSidebar = new EventEmitter<void>();

    // Signals
    isDarkMode = signal(false);
    notificationCount = signal(4);
    userName = signal('Ashton Cox');
    userRole = signal('Web Developer');

    // State
    userMenuOpen = false;
    scrolled = false;

    constructor(private router: Router) { }

    ngOnInit(): void { }

    // ── Sidebar ────────────────────────────────────────────
    onToggleSidebar(): void {
        this.toggleSidebar.emit();
    }

    // ── Search ─────────────────────────────────────────────
    onSearch(event: Event): void {
        const target = event.target as HTMLInputElement;
        console.log('Search:', target.value);
    }

    // ── User Menu ──────────────────────────────────────────
    toggleUserMenu(): void {
        this.userMenuOpen = !this.userMenuOpen;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (!target.closest('.user-menu')) {
            this.userMenuOpen = false;
        }
    }

    signout(): void {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }

    // ── Fullscreen ─────────────────────────────────────────
    toggleFullscreen(): void {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    // ── Dark Mode ──────────────────────────────────────────
    toggleDarkMode(): void {
        this.isDarkMode.update(mode => !mode);
        document.body.classList.toggle('dark-theme', this.isDarkMode());
    }

    // ── Scroll shadow ──────────────────────────────────────
    @HostListener('window:scroll')
    onWindowScroll(): void {
        this.scrolled = window.scrollY > 10;
    }
}
