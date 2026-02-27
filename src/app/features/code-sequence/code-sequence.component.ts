import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeTypeSequenceService } from '../../core/services/code-type-sequence.service';
import { CodeGeneratorService } from '../../core/services/code-generator.service';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
    selector: 'app-code-sequence',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, AlertComponent],
    templateUrl: './code-sequence.component.html',
    styleUrl: './code-sequence.component.css'
})
export class CodeSequenceComponent implements OnInit {
    sequenceForm!: FormGroup;
    isLoading = false;
    errorMessage = '';
    successMessage = '';

    sequenceData: any = null;
    countdown = 30;
    countdownInterval: any;

    codeTypeId!: number;

    isSidebarCollapsed = false;

    constructor(
        private fb: FormBuilder,
        private codeTypeSequenceService: CodeTypeSequenceService,
        private codeGeneratorService: CodeGeneratorService,
        private router: Router
    ) { }

    ngOnInit() {
        const state = this.codeGeneratorService.getState();
        this.codeTypeId = state.codeTypeId!;

        if (!this.codeTypeId) {
            this.errorMessage = 'Missing required data. Please complete previous steps.';
            return;
        }

        this.initForm();
    }

    initForm() {
        this.sequenceForm = this.fb.group({
            nameAr: [''],
            nameEn: ['', [Validators.required]],
            descriptionAr: [''],
            descriptionEn: [''],
            startWith: [100, [Validators.required, Validators.min(1)]],
            minValue: [100, [Validators.required, Validators.min(1)]],
            maxValue: [9999, [Validators.required, Validators.min(1)]],
            currentValue: [100, [Validators.required, Validators.min(1)]],
            isCycling: [0, [Validators.required, Validators.min(0)]]
        });
    }

    onSubmit() {
        if (this.sequenceForm.valid && !this.isLoading) {
            this.isLoading = true;
            this.errorMessage = '';

            const requestData = {
                nameEn: this.sequenceForm.value.nameEn,
                codeTypeId: this.codeTypeId,
                startWith: this.sequenceForm.value.startWith,
                minValue: this.sequenceForm.value.minValue,
                maxValue: this.sequenceForm.value.maxValue,
                currentValue: this.sequenceForm.value.currentValue,
                isCycling: this.sequenceForm.value.isCycling
            };

            this.codeTypeSequenceService.createCodeTypeSequence(requestData).subscribe({
                next: (response) => {
                    this.sequenceData = response.data;
                    this.successMessage = response.message;
                    this.isLoading = false;
                    this.codeGeneratorService.completeStep(5);

                    // Start 30-second countdown
                    this.startCountdown();
                },
                error: (error) => {
                    this.isLoading = false;
                    this.errorMessage = error.error?.message || 'Failed to create sequence. Please try again.';
                }
            });
        } else {
            Object.keys(this.sequenceForm.controls).forEach(key => {
                this.sequenceForm.get(key)?.markAsTouched();
            });
        }
    }

    startCountdown() {
        this.countdown = 30;
        this.countdownInterval = setInterval(() => {
            this.countdown--;
            if (this.countdown <= 0) {
                clearInterval(this.countdownInterval);
                this.router.navigate(['/code-generation']);
            }
        }, 1000);
    }

    skipToGeneration() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
        this.router.navigate(['/code-generation']);
    }

    ngOnDestroy() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    }

    toggleSidebar(): void {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }

    get nameAr() { return this.sequenceForm.get('nameAr'); }
    get nameEn() { return this.sequenceForm.get('nameEn'); }
    get descriptionAr() { return this.sequenceForm.get('descriptionAr'); }
    get descriptionEn() { return this.sequenceForm.get('descriptionEn'); }
    get startWith() { return this.sequenceForm.get('startWith'); }
    get minValue() { return this.sequenceForm.get('minValue'); }
    get maxValue() { return this.sequenceForm.get('maxValue'); }
    get currentValue() { return this.sequenceForm.get('currentValue'); }
    get isCycling() { return this.sequenceForm.get('isCycling'); }
}
