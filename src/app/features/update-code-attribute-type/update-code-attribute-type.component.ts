import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeAttributeTypeService, CodeAttributeTypeItem } from '../../core/services/code-attribute-type.service';

@Component({
    selector: 'app-update-code-attribute-type',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './update-code-attribute-type.component.html',
    styleUrl: './update-code-attribute-type.component.css'
})
export class UpdateCodeAttributeTypeComponent implements OnInit {
    updateForm!: FormGroup;

    isLoadingData = true;
    isSaving = false;
    attributeTypeItem: CodeAttributeTypeItem | null = null;
    loadError = '';
    saveError = '';
    saveSuccess = '';

    private itemId!: number;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service: CodeAttributeTypeService
    ) { }

    ngOnInit(): void {
        this.updateForm = this.fb.group({
            nameEn: ['', Validators.required],
            nameAr: [''],
            descriptionEn: [''],
            descriptionAr: [''],
            isActive: [true]
        });

        const idParam = this.route.snapshot.paramMap.get('id');
        if (!idParam || isNaN(+idParam)) {
            // No ID — redirect to list
            this.router.navigate(['/all-attribute-types']);
            return;
        }

        this.itemId = +idParam;
        this.loadItem();
    }

    private loadItem(): void {
        this.isLoadingData = true;
        this.loadError = '';

        this.service.getAllCodeAttributeTypes().subscribe({
            next: (response) => {
                const found = response.data.find(item => item.id === this.itemId);
                if (!found) {
                    this.loadError = `Attribute type with ID ${this.itemId} was not found.`;
                    this.isLoadingData = false;
                    return;
                }
                this.attributeTypeItem = found;
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
                this.loadError = err.error?.message || 'Failed to load attribute type data.';
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

        this.service.updateCodeAttributeType(this.itemId, this.updateForm.value).subscribe({
            next: (response) => {
                this.isSaving = false;
                this.saveSuccess = response.message || 'Attribute type updated successfully.';
                setTimeout(() => this.router.navigate(['/all-attribute-types']), 1000);
            },
            error: (err) => {
                this.isSaving = false;
                this.saveError = err.error?.message || 'Failed to update. Please try again.';
            }
        });
    }

    onCancel(): void {
        this.router.navigate(['/all-attribute-types']);
    }

    get nameEn() { return this.updateForm.get('nameEn'); }
    get nameAr() { return this.updateForm.get('nameAr'); }
    get descriptionEn() { return this.updateForm.get('descriptionEn'); }
    get descriptionAr() { return this.updateForm.get('descriptionAr'); }
    get isActive() { return this.updateForm.get('isActive'); }
}
