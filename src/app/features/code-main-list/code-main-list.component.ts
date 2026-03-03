import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeAttributeMainService, CodeAttributeMainItem } from '../../core/services/code-attribute-main.service';

@Component({
    selector: 'app-code-main-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './code-main-list.component.html',
    styleUrl: './code-main-list.component.css'
})
export class CodeMainListComponent implements OnInit {
    mains: CodeAttributeMainItem[] = [];
    filteredMains: CodeAttributeMainItem[] = [];
    isLoading = false;
    errorMessage = '';

    showFilter = false;
    filterRequest = { nameEn: '', nameAr: '', code: '' };

    constructor(
        private codeAttributeMainService: CodeAttributeMainService,
        private router: Router
    ) { }

    ngOnInit(): void { this.loadMains(); }

    loadMains(): void {
        this.isLoading = true;
        this.errorMessage = '';
        this.codeAttributeMainService.getAllCodeAttributeMains().subscribe({
            next: (response) => {
                this.isLoading = false;
                this.mains = response.data;
                this.filteredMains = [...this.mains];
            },
            error: (err) => {
                this.isLoading = false;
                this.errorMessage = err.error?.message || 'Failed to load main entries.';
            }
        });
    }

    toggleFilter(): void { this.showFilter = !this.showFilter; }

    applyFilter(): void {
        const nameEn = this.filterRequest.nameEn.toLowerCase().trim();
        const nameAr = this.filterRequest.nameAr.trim();
        const code = this.filterRequest.code.toLowerCase().trim();
        this.filteredMains = this.mains.filter(item => {
            const matchesNameEn = nameEn ? item.nameEn.toLowerCase().includes(nameEn) : true;
            const matchesNameAr = nameAr ? item.nameAr.includes(nameAr) : true;
            const matchesCode = code ? item.code.toLowerCase().includes(code) : true;
            return matchesNameEn && matchesNameAr && matchesCode;
        });
    }

    resetFilter(): void {
        this.filterRequest = { nameEn: '', nameAr: '', code: '' };
        this.filteredMains = [...this.mains];
    }

    navigateToAdd(): void { this.router.navigate(['/code-type-main']); }

    navigateToEdit(item: CodeAttributeMainItem): void {
        this.router.navigate(['/update-code-main', item.id]);
    }

    formatDate(dateStr: string | null): string {
        if (!dateStr) return '—';
        return new Date(dateStr).toISOString().split('T')[0];
    }
}
