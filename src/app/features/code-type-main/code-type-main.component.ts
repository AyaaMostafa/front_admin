import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CodeAttributeMainService } from '../../core/services/code-attribute-main.service';
import { CodeTypeService } from '../../core/services/code-type.service';
import { CodeAttributeTypeService } from '../../core/services/code-attribute-type.service';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
    selector: 'app-code-type-main',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, AlertComponent],
    templateUrl: './code-type-main.component.html',
    styleUrl: './code-type-main.component.css'
})
export class CodeTypeMainComponent implements OnInit {

    mainForm!: FormGroup;
    isSaving = false;
    errorMessage = '';
    successMessage = '';

    // Dropdown data
    codeTypes: any[] = [];
    codeAttributeTypes: any[] = [];
    isLoadingData = true;

    // Local accumulation list
    pendingMains: any[] = [];

    constructor(
        private fb: FormBuilder,
        private codeAttributeMainService: CodeAttributeMainService,
        private codeTypeService: CodeTypeService,
        private codeAttributeTypeService: CodeAttributeTypeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.loadDropdownData();
    }

    loadDropdownData(): void {
        let loaded = 0;
        const done = () => { if (++loaded >= 2) this.isLoadingData = false; };

        this.codeTypeService.getAllCodeTypes().subscribe({
            next: (res) => { this.codeTypes = res.data; done(); },
            error: () => done()
        });

        this.codeAttributeTypeService.getAllCodeAttributeTypes().subscribe({
            next: (res) => { this.codeAttributeTypes = res.data; done(); },
            error: () => done()
        });
    }

    initForm(): void {
        this.mainForm = this.fb.group({
            codeTypeId: ['', Validators.required],
            codeAttributeTypeId: ['', Validators.required],
            code: ['', [Validators.required, Validators.minLength(2)]],
            nameAr: [''],
            nameEn: ['', Validators.required],
            descriptionAr: [''],
            descriptionEn: ['']
        });
    }

    onAddEntry(): void {
        if (this.mainForm.invalid) {
            this.mainForm.markAllAsTouched();
            return;
        }

        const fv = this.mainForm.value;
        const ct = this.codeTypes.find(c => c.id == fv.codeTypeId);
        const at = this.codeAttributeTypes.find(a => a.id == fv.codeAttributeTypeId);

        this.pendingMains.push({
            ...fv,
            codeTypeLabel: ct ? `${ct.codeTypeCode} — ${ct.nameEn}` : `#${fv.codeTypeId}`,
            attrTypeLabel: at ? at.nameEn : `#${fv.codeAttributeTypeId}`
        });

        this.successMessage = `✓ Entry "${fv.code}" added to list.`;

        // Reset code/names but keep types
        this.mainForm.patchValue({
            code: '',
            nameAr: '',
            nameEn: '',
            descriptionAr: '',
            descriptionEn: ''
        });
        this.mainForm.get('code')?.setErrors(null);
        this.mainForm.get('nameEn')?.setErrors(null);

        setTimeout(() => this.successMessage = '', 2000);
    }

    removePending(index: number): void {
        this.pendingMains.splice(index, 1);
    }

    saveAllAndContinue(): void {
        if (this.pendingMains.length === 0) {
            this.errorMessage = 'Please add at least one entry before continuing.';
            return;
        }

        this.isSaving = true;
        this.errorMessage = '';
        this.successMessage = '';

        let completed = 0;
        const total = this.pendingMains.length;

        this.pendingMains.forEach((entry, index) => {
            const payload = {
                codeTypeId: +entry.codeTypeId,
                codeAttributeTypeId: +entry.codeAttributeTypeId,
                code: entry.code,
                nameAr: entry.nameAr || '',
                nameEn: entry.nameEn,
                descriptionAr: entry.descriptionAr || '',
                descriptionEn: entry.descriptionEn || ''
            };

            this.codeAttributeMainService.createCodeAttributeMain(payload).subscribe({
                next: () => {
                    completed++;
                    if (completed === total) {
                        this.isSaving = false;
                        this.successMessage = `All ${total} entries saved! Moving to Details...`;
                        setTimeout(() => this.router.navigate(['/code-details']), 1500);
                    }
                },
                error: (err) => {
                    this.isSaving = false;
                    this.errorMessage = err.error?.message || `Failed to save entry ${index + 1}.`;
                }
            });
        });
    }

    get codeTypeId() { return this.mainForm.get('codeTypeId'); }
    get codeAttributeTypeId() { return this.mainForm.get('codeAttributeTypeId'); }
    get code() { return this.mainForm.get('code'); }
    get nameEn() { return this.mainForm.get('nameEn'); }
}
