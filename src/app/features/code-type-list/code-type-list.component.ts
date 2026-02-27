import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeTypeService } from '../../core/services/code-type.service';

interface CodeTypeItem {
    id: number;
    codeTypeCode: string;
    nameAr: string;
    nameEn: string;
    descriptionAr: string;
    descriptionEn: string;
    isActive: boolean;
    createdAt: string;
    createdBy: string;
    approvedAt: string | null;
    approvedBy: string | null;
}

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

    // Filter state
    showFilter = false;
    filterRequest = {
        nameEn: '',
        nameAr: '',
        approvedBy: ''
    };

    constructor(
        private codeTypeService: CodeTypeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadCodeTypes();
    }

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

    toggleFilter(): void {
        this.showFilter = !this.showFilter;
    }

    applyFilter(): void {
        const nameEn = this.filterRequest.nameEn.toLowerCase().trim();
        const nameAr = this.filterRequest.nameAr.trim();
        const approvedBy = this.filterRequest.approvedBy.toLowerCase().trim();

        this.filteredCodeTypes = this.codeTypes.filter(item => {
            const matchesNameEn = nameEn ? item.nameEn.toLowerCase().includes(nameEn) : true;
            const matchesNameAr = nameAr ? item.nameAr.includes(nameAr) : true;
            const matchesApprovedBy = approvedBy
                ? (item.approvedBy ?? '').toLowerCase().includes(approvedBy)
                : true;
            return matchesNameEn && matchesNameAr && matchesApprovedBy;
        });
    }

    resetFilter(): void {
        this.filterRequest = { nameEn: '', nameAr: '', approvedBy: '' };
        this.filteredCodeTypes = [...this.codeTypes];
    }

    navigateToAdd(): void {
        this.router.navigate(['/code-type']);
    }

    formatDate(dateStr: string | null): string {
        if (!dateStr) return '—';
        return new Date(dateStr).toISOString().split('T')[0];
    }
}
