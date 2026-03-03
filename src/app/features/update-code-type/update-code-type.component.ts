import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeTypeService, CodeTypeItem } from '../../core/services/code-type.service';

@Component({
    selector: 'app-update-code-type',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './update-code-type.component.html',
    styleUrl: './update-code-type.component.css'
})
export class UpdateCodeTypeComponent implements OnInit {
    updateForm!: FormGroup;

    // States
    isLoadingData = true;
    isSaving = false;
    codeTypeItem: CodeTypeItem | null = null;
    loadError = '';
    saveError = '';
    saveSuccess = '';

    private codeTypeId!: number;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private codeTypeService: CodeTypeService
    ) { }

    ngOnInit(): void {
        this.updateForm = this.fb.group({
            nameEn: ['', Validators.required],
            nameAr: [''],
            descriptionEn: [''],
            descriptionAr: [''],
            isActive: [true]
        });

        // Read ID from route param (/update-code-type/:id)
        const idParam = this.route.snapshot.paramMap.get('id');
        if (!idParam || isNaN(+idParam)) {
            // No ID provided (e.g. clicked directly from sidebar) — go to list
            this.router.navigate(['/all-code-types']);
            return;
        }

        this.codeTypeId = +idParam;
        this.loadCodeType();
    }

    private loadCodeType(): void {
        this.isLoadingData = true;
        this.loadError = '';

        this.codeTypeService.getAllCodeTypes().subscribe({
            next: (response) => {
                const found = response.data.find(ct => ct.id === this.codeTypeId);
                if (!found) {
                    this.loadError = `Code type with ID ${this.codeTypeId} was not found.`;
                    this.isLoadingData = false;
                    return;
                }
                this.codeTypeItem = found;
                this.updateForm.patchValue({
                    nameEn: found.nameEn,
                    nameAr: found.nameAr,
                    descriptionEn: found.descriptionEn,
                    descriptionAr: found.descriptionAr,
                    isActive: found.isActive
                });
                this.isLoadingData = false;
            },
            error: (err) => {
                this.loadError = err.error?.message || 'Failed to load code type data.';
                this.isLoadingData = false;
            }
        });
    }

    onSubmit(): void {
        if (this.updateForm.invalid || this.isSaving) {
            this.updateForm.markAllAsTouched();
            return;
        }

        this.isSaving = true;
        this.saveError = '';
        this.saveSuccess = '';

        this.codeTypeService.updateCodeType(this.codeTypeId, this.updateForm.value).subscribe({
            next: (response) => {
                this.isSaving = false;
                this.saveSuccess = response.message || 'Code type updated successfully.';
                // Navigate back to list after 1 second
                setTimeout(() => this.router.navigate(['/all-code-types']), 1000);
            },
            error: (err) => {
                this.isSaving = false;
                this.saveError = err.error?.message || 'Failed to update code type. Please try again.';
            }
        });
    }

    onCancel(): void {
        this.router.navigate(['/all-code-types']);
    }

    // Form control getters
    get nameEn() { return this.updateForm.get('nameEn'); }
    get nameAr() { return this.updateForm.get('nameAr'); }
    get descriptionEn() { return this.updateForm.get('descriptionEn'); }
    get descriptionAr() { return this.updateForm.get('descriptionAr'); }
    get isActive() { return this.updateForm.get('isActive'); }
}
