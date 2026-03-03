import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeTypeService, CodeTypeItem } from '../../core/services/code-type.service';

@Component({
    selector: 'app-code-type-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './code-type-list.component.html',
    styleUrl: './code-type-list.component.css'
})
export class CodeTypeListComponent implements OnInit {
    codeTypes: CodeTypeItem[] = [];
    filteredCodeTypes: CodeTypeItem[] = [];
    isLoading = false;
    errorMessage = '';

    // ── Filter ────────────────────────────────────────────────────────────────
    showFilter = false;
    filterRequest = { nameEn: '', nameAr: '' };

    constructor(
        private codeTypeService: CodeTypeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadCodeTypes();
    }

    // ── Load ──────────────────────────────────────────────────────────────────

    loadCodeTypes(): void {
        this.isLoading = true;
        this.errorMessage = '';
        this.codeTypeService.getAllCodeTypes().subscribe({
            next: (response) => {
                this.isLoading = false;
                this.codeTypes = response.data;
                this.filteredCodeTypes = [...this.codeTypes];
            },
            error: (err) => {
                this.isLoading = false;
                this.errorMessage = err.error?.message || 'Failed to load code types.';
            }
        });
    }

    // ── Filter ────────────────────────────────────────────────────────────────

    toggleFilter(): void { this.showFilter = !this.showFilter; }

    applyFilter(): void {
        const nameEn = this.filterRequest.nameEn.toLowerCase().trim();
        const nameAr = this.filterRequest.nameAr.trim();
        this.filteredCodeTypes = this.codeTypes.filter(item => {
            const matchesNameEn = nameEn ? item.nameEn.toLowerCase().includes(nameEn) : true;
            const matchesNameAr = nameAr ? item.nameAr.includes(nameAr) : true;
            return matchesNameEn && matchesNameAr;
        });
    }

    resetFilter(): void {
        this.filterRequest = { nameEn: '', nameAr: '' };
        this.filteredCodeTypes = [...this.codeTypes];
    }

    // ── Navigation ────────────────────────────────────────────────────────────

    navigateToAdd(): void {
        this.router.navigate(['/code-type']);
    }

    navigateToEdit(item: CodeTypeItem): void {
        this.router.navigate(['/update-code-type', item.id]);
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    formatDate(dateStr: string | null): string {
        if (!dateStr) return '—';
        return new Date(dateStr).toISOString().split('T')[0];
    }
}
