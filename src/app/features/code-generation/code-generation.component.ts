import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CodeGenerationService, CodeItem } from '../../core/services/code-generation.service';
import { CodeTypeService, CodeTypeItem } from '../../core/services/code-type.service';

import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
    selector: 'app-code-generation',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, AlertComponent],
    templateUrl: './code-generation.component.html',
    styleUrl: './code-generation.component.css'
})
export class CodeGenerationComponent implements OnInit {
    genForm!: FormGroup;

    // Dropdown
    codeTypes: CodeTypeItem[] = [];
    isLoadingTypes = true;

    // State
    isSaving = false;
    errorMessage = '';
    successMessage = '';

    // Result
    generatedCodeData: any = null;

    constructor(
        private fb: FormBuilder,
        private codeGenerationService: CodeGenerationService,
        private codeTypeService: CodeTypeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.loadCodeTypes();
    }

    initForm(): void {
        this.genForm = this.fb.group({
            codeTypeId: [null, Validators.required],
            nameEn: ['', Validators.required],
            nameAr: [''],
            descriptionEn: [''],
            descriptionAr: [''],
            externalSystem: ['']
        });
    }

    loadCodeTypes(): void {
        this.isLoadingTypes = true;
        this.codeTypeService.getAllCodeTypes().subscribe({
            next: (res) => { this.codeTypes = res.data; this.isLoadingTypes = false; },
            error: () => { this.errorMessage = 'Failed to load code types. Please refresh.'; this.isLoadingTypes = false; }
        });
    }

    onGenerate(): void {
        if (!this.genForm.valid || this.isSaving) {
            this.genForm.markAllAsTouched();
            return;
        }

        this.isSaving = true;
        this.errorMessage = '';
        this.successMessage = '';
        this.generatedCodeData = null;

        const fv = this.genForm.value;
        const payload = {
            codeTypeId: +fv.codeTypeId,
            nameEn: fv.nameEn,
            nameAr: fv.nameAr || '',
            descriptionEn: fv.descriptionEn || '',
            descriptionAr: fv.descriptionAr || '',
            externalSystem: fv.externalSystem || '',
            externalReferenceId: 'NA' // Defaulted since it was removed from simplified form
        };

        this.codeGenerationService.generateCode(payload).subscribe({
            next: (res) => {
                this.isSaving = false;
                this.generatedCodeData = res.data;
                this.successMessage = `✓ Code ${res.data.codeGenerated} generated successfully!`;

                // Keep type, reset rest
                const keepType = this.genForm.get('codeTypeId')?.value;
                this.genForm.reset();
                this.genForm.patchValue({ codeTypeId: keepType });

                setTimeout(() => this.successMessage = '', 4000);
            },
            error: (err) => {
                this.isSaving = false;
                this.errorMessage = err.error?.message || 'Failed to generate code. Please try again.';
            }
        });
    }

    get codeTypeId() { return this.genForm.get('codeTypeId'); }
    get nameEn() { return this.genForm.get('nameEn'); }
}
