import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeAttributeDetailService, CodeAttributeDetailItem } from '../../core/services/code-attribute-detail.service';

@Component({
    selector: 'app-update-code-detail',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './update-code-detail.component.html',
    styleUrl: './update-code-detail.component.css'
})
export class UpdateCodeDetailComponent implements OnInit {
    updateForm!: FormGroup;

    isLoadingData = true;
    isSaving = false;
    detailItem: CodeAttributeDetailItem | null = null;
    loadError = '';
    saveError = '';
    saveSuccess = '';

    private itemId!: number;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service: CodeAttributeDetailService
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
            this.router.navigate(['/code-details']);
            return;
        }

        this.itemId = +idParam;
        this.loadItem();
    }

    private loadItem(): void {
        this.isLoadingData = true;
        this.loadError = '';

        this.service.getAllCodeAttributeDetails().subscribe({
            next: (response) => {
                const found = response.data.find(item => item.id === this.itemId);
                if (!found) {
                    this.loadError = `Detail with ID ${this.itemId} was not found.`;
                    this.isLoadingData = false;
                    return;
                }
                this.detailItem = found;
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
                this.loadError = err.error?.message || 'Failed to load detail data.';
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

        this.service.updateCodeAttributeDetail(this.itemId, this.updateForm.value).subscribe({
            next: (response) => {
                this.isSaving = false;
                this.saveSuccess = response.message || 'Detail updated successfully.';
                setTimeout(() => this.router.navigate(['/code-details']), 1000);
            },
            error: (err) => {
                this.isSaving = false;
                this.saveError = err.error?.message || 'Failed to update. Please try again.';
            }
        });
    }

    onCancel(): void { this.router.navigate(['/code-details']); }

    get nameEn() { return this.updateForm.get('nameEn'); }
    get nameAr() { return this.updateForm.get('nameAr'); }
    get descriptionEn() { return this.updateForm.get('descriptionEn'); }
    get descriptionAr() { return this.updateForm.get('descriptionAr'); }
    get isActive() { return this.updateForm.get('isActive'); }
}
