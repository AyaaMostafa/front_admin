import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeAttributeTypeService, CodeAttributeTypeItem } from '../../core/services/code-attribute-type.service';

@Component({
    selector: 'app-code-attribute-type-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './code-attribute-type-list.component.html',
    styleUrl: './code-attribute-type-list.component.css'
})
export class CodeAttributeTypeListComponent implements OnInit {
    attributeTypes: CodeAttributeTypeItem[] = [];
    filteredAttributeTypes: CodeAttributeTypeItem[] = [];
    isLoading = false;
    errorMessage = '';

    // Filter state
    showFilter = false;
    filterRequest = { nameEn: '', nameAr: '' };

    constructor(
        private codeAttributeTypeService: CodeAttributeTypeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadAttributeTypes();
    }

    loadAttributeTypes(): void {
        this.isLoading = true;
        this.errorMessage = '';
        this.codeAttributeTypeService.getAllCodeAttributeTypes().subscribe({
            next: (response) => {
                this.isLoading = false;
                this.attributeTypes = response.data;
                this.filteredAttributeTypes = [...this.attributeTypes];
            },
            error: (err) => {
                this.isLoading = false;
                this.errorMessage = err.error?.message || 'Failed to load attribute types.';
            }
        });
    }

    toggleFilter(): void { this.showFilter = !this.showFilter; }

    applyFilter(): void {
        const nameEn = this.filterRequest.nameEn.toLowerCase().trim();
        const nameAr = this.filterRequest.nameAr.trim();
        this.filteredAttributeTypes = this.attributeTypes.filter(item => {
            const matchesNameEn = nameEn ? item.nameEn.toLowerCase().includes(nameEn) : true;
            const matchesNameAr = nameAr ? item.nameAr.includes(nameAr) : true;
            return matchesNameEn && matchesNameAr;
        });
    }

    resetFilter(): void {
        this.filterRequest = { nameEn: '', nameAr: '' };
        this.filteredAttributeTypes = [...this.attributeTypes];
    }

    navigateToAdd(): void {
        this.router.navigate(['/code-type-attribute']);
    }

    navigateToEdit(item: CodeAttributeTypeItem): void {
        this.router.navigate(['/update-code-attribute-type', item.id]);
    }

    formatDate(dateStr: string | null): string {
        if (!dateStr) return '—';
        return new Date(dateStr).toISOString().split('T')[0];
    }
}
