import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CodeAttributeDetailService } from '../../core/services/code-attribute-detail.service';
import { CodeAttributeMainService, CodeAttributeMainItem } from '../../core/services/code-attribute-main.service';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
    selector: 'app-code-details',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, AlertComponent, RouterLink],
    templateUrl: './code-details.component.html',
    styleUrl: './code-details.component.css'
})
export class CodeDetailsComponent implements OnInit {
    detailForm!: FormGroup;

    // Loading states
    isLoadingMains = true;
    isSaving = false;

    // Data
    allMains: CodeAttributeMainItem[] = [];
    pendingDetails: any[] = [];

    // Messages
    errorMessage = '';
    successMessage = '';

    constructor(
        private fb: FormBuilder,
        private detailService: CodeAttributeDetailService,
        private mainService: CodeAttributeMainService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.loadMains();
    }

    initForm(): void {
        this.detailForm = this.fb.group({
            attributeMainId: [null, Validators.required],
            code: ['', [Validators.required, Validators.minLength(2)]],
            nameEn: ['', Validators.required],
            nameAr: [''],
            descriptionAr: ['']
        });
    }

    loadMains(): void {
        this.isLoadingMains = true;
        this.mainService.getAllCodeAttributeMains().subscribe({
            next: (res) => {
                this.allMains = res.data;
                this.isLoadingMains = false;
            },
            error: () => {
                this.errorMessage = 'Failed to load main entries. Please refresh.';
                this.isLoadingMains = false;
            }
        });
    }

    onAddDetail(): void {
        if (this.detailForm.invalid) {
            this.detailForm.markAllAsTouched();
            return;
        }

        const fv = this.detailForm.value;
        const main = this.allMains.find(m => m.id == fv.attributeMainId);

        this.pendingDetails.push({
            ...fv,
            mainLabel: main ? `${main.code} — ${main.nameEn}` : `#${fv.attributeMainId}`
        });

        this.successMessage = `✓ Detail "${fv.code}" added to list.`;

        // Reset detail fields
        this.detailForm.patchValue({
            code: '',
            nameEn: '',
            nameAr: '',
            descriptionAr: ''
        });
        this.detailForm.get('code')?.setErrors(null);
        this.detailForm.get('nameEn')?.setErrors(null);

        setTimeout(() => this.successMessage = '', 2000);
    }

    removePending(index: number): void {
        this.pendingDetails.splice(index, 1);
    }

    saveAllAndContinue(): void {
        if (this.pendingDetails.length === 0) {
            this.errorMessage = 'Please add at least one detail before continuing.';
            return;
        }

        this.isSaving = true;
        this.errorMessage = '';
        this.successMessage = '';

        let completed = 0;
        const total = this.pendingDetails.length;

        this.pendingDetails.forEach((detail, index) => {
            const payload = {
                code: detail.code,
                attributeMainId: +detail.attributeMainId,
                nameEn: detail.nameEn,
                nameAr: detail.nameAr || '',
                descriptionEn: detail.descriptionEn || '',
                descriptionAr: detail.descriptionAr || '',
                sortOrder: 1
            };

            this.detailService.createCodeAttributeDetail(payload).subscribe({
                next: () => {
                    completed++;
                    if (completed === total) {
                        this.isSaving = false;
                        this.successMessage = `All ${total} details saved! Moving to Settings...`;
                        setTimeout(() => this.router.navigate(['/code-settings']), 1500);
                    }
                },
                error: (err) => {
                    this.isSaving = false;
                    this.errorMessage = err.error?.message || `Failed to save detail ${index + 1}.`;
                }
            });
        });
    }

    get attributeMainId() { return this.detailForm.get('attributeMainId'); }
    get code() { return this.detailForm.get('code'); }
    get nameEn() { return this.detailForm.get('nameEn'); }
}
