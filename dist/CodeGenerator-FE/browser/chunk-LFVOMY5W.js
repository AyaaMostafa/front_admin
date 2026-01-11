import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-AKWOM4FG.js";
import {
  environment
} from "./chunk-IAFF5KEP.js";
import {
  CodeGeneratorService
} from "./chunk-FZF4RZXG.js";
import {
  Router
} from "./chunk-DCKXGUGL.js";
import {
  HttpClient
} from "./chunk-6MNRTQKI.js";
import {
  CommonModule,
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-EMSVNVEL.js";

// src/app/core/services/code-type.service.ts
var CodeTypeService = class _CodeTypeService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  createCodeType(data) {
    return this.http.post(`${this.apiUrl}/CodeTypes/Create`, data);
  }
  static \u0275fac = function CodeTypeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeTypeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CodeTypeService, factory: _CodeTypeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeTypeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/code-type/code-type.component.ts
function CodeTypeComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function CodeTypeComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function CodeTypeComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Code Type Code is required ");
  }
}
function CodeTypeComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Code must be at least 2 characters ");
  }
}
function CodeTypeComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275conditionalCreate(1, CodeTypeComponent_Conditional_22_Conditional_1_Template, 1, 0)(2, CodeTypeComponent_Conditional_22_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.codeTypeCode == null ? null : ctx_r0.codeTypeCode.errors == null ? null : ctx_r0.codeTypeCode.errors["required"]) ? 1 : (ctx_r0.codeTypeCode == null ? null : ctx_r0.codeTypeCode.errors == null ? null : ctx_r0.codeTypeCode.errors["minlength"]) ? 2 : -1);
  }
}
function CodeTypeComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Arabic name is required");
    \u0275\u0275elementEnd();
  }
}
function CodeTypeComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "English name is required");
    \u0275\u0275elementEnd();
  }
}
function CodeTypeComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Arabic description is required");
    \u0275\u0275elementEnd();
  }
}
function CodeTypeComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "English description is required");
    \u0275\u0275elementEnd();
  }
}
function CodeTypeComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
    \u0275\u0275text(1, " Saving... ");
  }
}
function CodeTypeComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save & Continue ");
  }
}
var CodeTypeComponent = class _CodeTypeComponent {
  fb;
  codeTypeService;
  codeGeneratorService;
  router;
  codeTypeForm;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  constructor(fb, codeTypeService, codeGeneratorService, router) {
    this.fb = fb;
    this.codeTypeService = codeTypeService;
    this.codeGeneratorService = codeGeneratorService;
    this.router = router;
  }
  ngOnInit() {
    this.codeTypeForm = this.fb.group({
      codeTypeCode: ["", [Validators.required, Validators.minLength(2)]],
      nameAr: ["", [Validators.required]],
      nameEn: ["", [Validators.required]],
      descriptionAr: ["", [Validators.required]],
      descriptionEn: ["", [Validators.required]]
    });
  }
  onSubmit() {
    if (this.codeTypeForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";
      this.codeTypeService.createCodeType(this.codeTypeForm.value).subscribe({
        next: (response) => {
          this.successMessage = response.message;
          this.codeGeneratorService.setCodeTypeData(response.data.id, response.data.codeTypeCode);
          this.codeGeneratorService.completeStep(0);
          setTimeout(() => {
            this.router.navigate(["/code-type-attribute"]);
          }, 500);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || "Failed to create code type. Please try again.";
        }
      });
    } else {
      Object.keys(this.codeTypeForm.controls).forEach((key) => {
        this.codeTypeForm.get(key)?.markAsTouched();
      });
    }
  }
  get codeTypeCode() {
    return this.codeTypeForm.get("codeTypeCode");
  }
  get nameAr() {
    return this.codeTypeForm.get("nameAr");
  }
  get nameEn() {
    return this.codeTypeForm.get("nameEn");
  }
  get descriptionAr() {
    return this.codeTypeForm.get("descriptionAr");
  }
  get descriptionEn() {
    return this.codeTypeForm.get("descriptionEn");
  }
  static \u0275fac = function CodeTypeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeTypeComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CodeTypeService), \u0275\u0275directiveInject(CodeGeneratorService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeTypeComponent, selectors: [["app-code-type"]], decls: 57, vars: 20, consts: [[1, "code-type-container"], [1, "header"], [1, "description"], [1, "content"], [1, "card"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "codeTypeCode"], [1, "required"], ["id", "codeTypeCode", "type", "text", "formControlName", "codeTypeCode", "placeholder", "e.g., HIS"], [1, "error-text"], ["for", "nameAr"], ["id", "nameAr", "type", "text", "formControlName", "nameAr", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "dir", "rtl"], ["for", "nameEn"], ["id", "nameEn", "type", "text", "formControlName", "nameEn", "placeholder", "English Name"], ["for", "descriptionAr"], ["id", "descriptionAr", "formControlName", "descriptionAr", "placeholder", "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "dir", "rtl", "rows", "4"], ["for", "descriptionEn"], ["id", "descriptionEn", "formControlName", "descriptionEn", "placeholder", "English Description", "rows", "4"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner"]], template: function CodeTypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Code Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Define and manage your code types");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "h3");
      \u0275\u0275text(9, "Code Type Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Enter the details for your code type below.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, CodeTypeComponent_Conditional_12_Template, 2, 1, "div", 5);
      \u0275\u0275conditionalCreate(13, CodeTypeComponent_Conditional_13_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(14, "form", 7);
      \u0275\u0275listener("ngSubmit", function CodeTypeComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "label", 10);
      \u0275\u0275text(18, "Code Type Code ");
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "input", 12);
      \u0275\u0275conditionalCreate(22, CodeTypeComponent_Conditional_22_Template, 3, 1, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 8)(24, "div", 9)(25, "label", 14);
      \u0275\u0275text(26, "Name (Arabic) ");
      \u0275\u0275elementStart(27, "span", 11);
      \u0275\u0275text(28, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "input", 15);
      \u0275\u0275conditionalCreate(30, CodeTypeComponent_Conditional_30_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 9)(32, "label", 16);
      \u0275\u0275text(33, "Name (English) ");
      \u0275\u0275elementStart(34, "span", 11);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "input", 17);
      \u0275\u0275conditionalCreate(37, CodeTypeComponent_Conditional_37_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 8)(39, "div", 9)(40, "label", 18);
      \u0275\u0275text(41, "Description (Arabic) ");
      \u0275\u0275elementStart(42, "span", 11);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "textarea", 19);
      \u0275\u0275conditionalCreate(45, CodeTypeComponent_Conditional_45_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 9)(47, "label", 20);
      \u0275\u0275text(48, "Description (English) ");
      \u0275\u0275elementStart(49, "span", 11);
      \u0275\u0275text(50, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "textarea", 21);
      \u0275\u0275conditionalCreate(52, CodeTypeComponent_Conditional_52_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 22)(54, "button", 23);
      \u0275\u0275conditionalCreate(55, CodeTypeComponent_Conditional_55_Template, 2, 0)(56, CodeTypeComponent_Conditional_56_Template, 1, 0);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.successMessage ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.codeTypeForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.codeTypeCode == null ? null : ctx.codeTypeCode.invalid) && (ctx.codeTypeCode == null ? null : ctx.codeTypeCode.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.codeTypeCode == null ? null : ctx.codeTypeCode.invalid) && (ctx.codeTypeCode == null ? null : ctx.codeTypeCode.touched) ? 22 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.nameAr == null ? null : ctx.nameAr.invalid) && (ctx.nameAr == null ? null : ctx.nameAr.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.nameAr == null ? null : ctx.nameAr.invalid) && (ctx.nameAr == null ? null : ctx.nameAr.touched) ? 30 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched) ? 37 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.descriptionAr == null ? null : ctx.descriptionAr.invalid) && (ctx.descriptionAr == null ? null : ctx.descriptionAr.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.descriptionAr == null ? null : ctx.descriptionAr.invalid) && (ctx.descriptionAr == null ? null : ctx.descriptionAr.touched) ? 45 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.descriptionEn == null ? null : ctx.descriptionEn.invalid) && (ctx.descriptionEn == null ? null : ctx.descriptionEn.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.descriptionEn == null ? null : ctx.descriptionEn.invalid) && (ctx.descriptionEn == null ? null : ctx.descriptionEn.touched) ? 52 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 55 : 56);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.code-type-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.form[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid[_ngcontent-%COMP%], \ntextarea.invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\ninput.invalid[_ngcontent-%COMP%]:focus, \ntextarea.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=code-type.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeTypeComponent, [{
    type: Component,
    args: [{ selector: "app-code-type", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="code-type-container">\r
    <div class="header">\r
        <h2>Code Type</h2>\r
        <p class="description">Define and manage your code types</p>\r
    </div>\r
\r
    <div class="content">\r
        <div class="card">\r
            <h3>Code Type Configuration</h3>\r
            <p>Enter the details for your code type below.</p>\r
\r
            @if (successMessage) {\r
            <div class="alert alert-success">{{ successMessage }}</div>\r
            }\r
\r
            @if (errorMessage) {\r
            <div class="alert alert-error">{{ errorMessage }}</div>\r
            }\r
\r
            <form [formGroup]="codeTypeForm" (ngSubmit)="onSubmit()" class="form">\r
                <div class="form-row">\r
                    <div class="form-group">\r
                        <label for="codeTypeCode">Code Type Code <span class="required">*</span></label>\r
                        <input id="codeTypeCode" type="text" formControlName="codeTypeCode" placeholder="e.g., HIS"\r
                            [class.invalid]="codeTypeCode?.invalid && codeTypeCode?.touched" />\r
                        @if (codeTypeCode?.invalid && codeTypeCode?.touched) {\r
                        <span class="error-text">\r
                            @if (codeTypeCode?.errors?.['required']) {\r
                            Code Type Code is required\r
                            } @else if (codeTypeCode?.errors?.['minlength']) {\r
                            Code must be at least 2 characters\r
                            }\r
                        </span>\r
                        }\r
                    </div>\r
                </div>\r
\r
                <div class="form-row">\r
                    <div class="form-group">\r
                        <label for="nameAr">Name (Arabic) <span class="required">*</span></label>\r
                        <input id="nameAr" type="text" formControlName="nameAr" placeholder="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629" dir="rtl"\r
                            [class.invalid]="nameAr?.invalid && nameAr?.touched" />\r
                        @if (nameAr?.invalid && nameAr?.touched) {\r
                        <span class="error-text">Arabic name is required</span>\r
                        }\r
                    </div>\r
\r
                    <div class="form-group">\r
                        <label for="nameEn">Name (English) <span class="required">*</span></label>\r
                        <input id="nameEn" type="text" formControlName="nameEn" placeholder="English Name"\r
                            [class.invalid]="nameEn?.invalid && nameEn?.touched" />\r
                        @if (nameEn?.invalid && nameEn?.touched) {\r
                        <span class="error-text">English name is required</span>\r
                        }\r
                    </div>\r
                </div>\r
\r
                <div class="form-row">\r
                    <div class="form-group">\r
                        <label for="descriptionAr">Description (Arabic) <span class="required">*</span></label>\r
                        <textarea id="descriptionAr" formControlName="descriptionAr" placeholder="\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629"\r
                            dir="rtl" rows="4"\r
                            [class.invalid]="descriptionAr?.invalid && descriptionAr?.touched"></textarea>\r
                        @if (descriptionAr?.invalid && descriptionAr?.touched) {\r
                        <span class="error-text">Arabic description is required</span>\r
                        }\r
                    </div>\r
\r
                    <div class="form-group">\r
                        <label for="descriptionEn">Description (English) <span class="required">*</span></label>\r
                        <textarea id="descriptionEn" formControlName="descriptionEn" placeholder="English Description"\r
                            rows="4" [class.invalid]="descriptionEn?.invalid && descriptionEn?.touched"></textarea>\r
                        @if (descriptionEn?.invalid && descriptionEn?.touched) {\r
                        <span class="error-text">English description is required</span>\r
                        }\r
                    </div>\r
                </div>\r
\r
                <div class="form-actions">\r
                    <button type="submit" class="btn btn-primary" [disabled]="isLoading">\r
                        @if (isLoading) {\r
                        <span class="spinner"></span>\r
                        Saving...\r
                        } @else {\r
                        Save & Continue\r
                        }\r
                    </button>\r
                </div>\r
            </form>\r
        </div>\r
    </div>\r
</div>`, styles: ["/* src/app/features/code-type/code-type.component.css */\n.code-type-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header {\n  margin-bottom: 2rem;\n}\n.header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.card h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card > p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.form {\n  margin-top: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required {\n  color: #ef4444;\n}\ninput,\ntextarea {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid,\ntextarea.invalid {\n  border-color: #ef4444;\n}\ninput.invalid:focus,\ntextarea.invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea {\n  resize: vertical;\n  font-family: inherit;\n}\n.error-text {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=code-type.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: CodeTypeService }, { type: CodeGeneratorService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeTypeComponent, { className: "CodeTypeComponent", filePath: "src/app/features/code-type/code-type.component.ts", lineNumber: 15 });
})();
export {
  CodeTypeComponent
};
//# sourceMappingURL=chunk-LFVOMY5W.js.map
