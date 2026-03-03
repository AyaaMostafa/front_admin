import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeGenerationService } from '../../core/services/code-generation.service';

interface CodeItem {
    id: number;
    codeTypeId: number;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    codeGenerated: string;
    status: string;
    externalSystem: string;
    externalReferenceId: string;
    createdBy: string;
    createdAt: string;
    approvedAt: string | null;
    approvedBy: string | null;
}

@Component({
    selector: 'app-codes-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './codes-list.component.html',
    styleUrl: './codes-list.component.css'
})
export class CodesListComponent implements OnInit {
    codes: CodeItem[] = [];
    filteredCodes: CodeItem[] = [];
    isLoading = false;
    errorMessage = '';

    // Filter state
    showFilter = false;
    filterRequest = {
        nameEn: '',
        nameAr: '',
        externalSystem: ''
    };

    constructor(
        private codeGenerationService: CodeGenerationService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadCodes();
    }

    loadCodes(): void {
        this.isLoading = true;
        this.errorMessage = '';
        this.codeGenerationService.getAllCodes().subscribe({
            next: (response) => {
                this.isLoading = false;
                this.codes = response.data;
                this.filteredCodes = [...this.codes];
            },
            error: (err) => {
                this.isLoading = false;
                this.errorMessage = err.error?.message || 'Failed to load generated codes.';
            }
        });
    }

    toggleFilter(): void {
        this.showFilter = !this.showFilter;
    }

    applyFilter(): void {
        const nameEn = this.filterRequest.nameEn.toLowerCase().trim();
        const nameAr = this.filterRequest.nameAr.trim();
        const extSystem = this.filterRequest.externalSystem.toLowerCase().trim();

        this.filteredCodes = this.codes.filter(item => {
            const matchesNameEn = nameEn ? item.nameEn.toLowerCase().includes(nameEn) : true;
            const matchesNameAr = nameAr ? item.nameAr.includes(nameAr) : true;
            const matchesExtSystem = extSystem ? item.externalSystem.toLowerCase().includes(extSystem) : true;
            return matchesNameEn && matchesNameAr && matchesExtSystem;
        });
    }

    resetFilter(): void {
        this.filterRequest = { nameEn: '', nameAr: '', externalSystem: '' };
        this.filteredCodes = [...this.codes];
    }

    navigateToAdd(): void {
        this.router.navigate(['/code-generation']);
    }



    formatDate(dateStr: string | null): string {
        if (!dateStr) return '—';
        return new Date(dateStr).toISOString().split('T')[0];
    }
}
