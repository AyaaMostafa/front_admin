import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeAttributeMainService, CodeAttributeMainItem } from '../../core/services/code-attribute-main.service';

@Component({
    selector: 'app-update-code-main',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './update-code-main.component.html',
    styleUrl: './update-code-main.component.css'
})
export class UpdateCodeMainComponent implements OnInit {
    updateForm!: FormGroup;

    isLoadingData = true;
    isSaving = false;
    mainItem: CodeAttributeMainItem | null = null;
    loadError = '';
    saveError = '';
    saveSuccess = '';

    private itemId!: number;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service: CodeAttributeMainService
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
            this.router.navigate(['/all-main-entries']);
            return;
        }

        this.itemId = +idParam;
        this.loadItem();
    }

    private loadItem(): void {
        this.isLoadingData = true;
        this.loadError = '';

        this.service.getAllCodeAttributeMains().subscribe({
            next: (response) => {
                const found = response.data.find(item => item.id === this.itemId);
                if (!found) {
                    this.loadError = `Main entry with ID ${this.itemId} was not found.`;
                    this.isLoadingData = false;
                    return;
                }
                this.mainItem = found;
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
                this.loadError = err.error?.message || 'Failed to load main entry data.';
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

        this.service.updateCodeAttributeMain(this.itemId, this.updateForm.value).subscribe({
            next: (response) => {
                this.isSaving = false;
                this.saveSuccess = response.message || 'Main entry updated successfully.';
                setTimeout(() => this.router.navigate(['/all-main-entries']), 1000);
            },
            error: (err) => {
                this.isSaving = false;
                this.saveError = err.error?.message || 'Failed to update. Please try again.';
            }
        });
    }

    onCancel(): void {
        this.router.navigate(['/all-main-entries']);
    }

    get nameEn() { return this.updateForm.get('nameEn'); }
    get nameAr() { return this.updateForm.get('nameAr'); }
    get descriptionEn() { return this.updateForm.get('descriptionEn'); }
    get descriptionAr() { return this.updateForm.get('descriptionAr'); }
    get isActive() { return this.updateForm.get('isActive'); }
}
