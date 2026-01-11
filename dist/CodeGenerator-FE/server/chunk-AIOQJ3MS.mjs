import './polyfills.server.mjs';
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
} from "./chunk-UH6KU2F3.mjs";
import {
  environment
} from "./chunk-SQ7M6K5U.mjs";
import {
  CodeGeneratorService
} from "./chunk-YCHXDACK.mjs";
import {
  Router
} from "./chunk-PMG2SGER.mjs";
import {
  HttpClient
} from "./chunk-TLB5TFXO.mjs";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BOLVHABB.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/core/services/code-attribute-type.service.ts
var CodeAttributeTypeService = class _CodeAttributeTypeService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  createCodeAttributeType(data) {
    return this.http.post(`${this.apiUrl}/CodeAttributeTypes/Create`, data);
  }
  static \u0275fac = function CodeAttributeTypeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeAttributeTypeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CodeAttributeTypeService, factory: _CodeAttributeTypeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeAttributeTypeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/code-type-attribute/code-type-attribute.component.ts
function CodeTypeAttributeComponent_Conditional_12_Template(rf, ctx) {
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
function CodeTypeAttributeComponent_Conditional_13_Template(rf, ctx) {
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
function CodeTypeAttributeComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "strong");
    \u0275\u0275text(2, "Saved:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.savedIds.length, " of ", ctx_r0.totalEntries, " attributes ");
  }
}
function CodeTypeAttributeComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Arabic name is required");
    \u0275\u0275elementEnd();
  }
}
function CodeTypeAttributeComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "English name is required");
    \u0275\u0275elementEnd();
  }
}
function CodeTypeAttributeComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Arabic description is required");
    \u0275\u0275elementEnd();
  }
}
function CodeTypeAttributeComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "English description is required");
    \u0275\u0275elementEnd();
  }
}
function CodeTypeAttributeComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
    \u0275\u0275text(1, " Saving... ");
  }
}
function CodeTypeAttributeComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save & Next ");
  }
}
function CodeTypeAttributeComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save & Continue ");
  }
}
var CodeTypeAttributeComponent = class _CodeTypeAttributeComponent {
  fb;
  codeAttributeTypeService;
  codeGeneratorService;
  router;
  attributeForm;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  currentEntry = 0;
  totalEntries = 3;
  savedIds = [];
  constructor(fb, codeAttributeTypeService, codeGeneratorService, router) {
    this.fb = fb;
    this.codeAttributeTypeService = codeAttributeTypeService;
    this.codeGeneratorService = codeGeneratorService;
    this.router = router;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.attributeForm = this.fb.group({
      nameAr: ["", [Validators.required]],
      nameEn: ["", [Validators.required]],
      descriptionAr: ["", [Validators.required]],
      descriptionEn: ["", [Validators.required]]
    });
  }
  onSubmit() {
    if (this.attributeForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";
      this.codeAttributeTypeService.createCodeAttributeType(this.attributeForm.value).subscribe({
        next: (response) => {
          this.savedIds.push(response.data.id);
          this.codeGeneratorService.addCodeAttributeTypeId(response.data.id);
          if (this.currentEntry < this.totalEntries - 1) {
            this.currentEntry++;
            this.successMessage = `Attribute ${this.currentEntry}/${this.totalEntries} saved!`;
            this.attributeForm.reset();
            this.isLoading = false;
          } else {
            this.successMessage = "All 3 attributes saved successfully!";
            this.codeGeneratorService.completeStep(1);
            setTimeout(() => {
              this.router.navigate(["/code-type-main"]);
            }, 1e3);
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || "Failed to create code attribute type. Please try again.";
        }
      });
    } else {
      Object.keys(this.attributeForm.controls).forEach((key) => {
        this.attributeForm.get(key)?.markAsTouched();
      });
    }
  }
  get nameAr() {
    return this.attributeForm.get("nameAr");
  }
  get nameEn() {
    return this.attributeForm.get("nameEn");
  }
  get descriptionAr() {
    return this.attributeForm.get("descriptionAr");
  }
  get descriptionEn() {
    return this.attributeForm.get("descriptionEn");
  }
  static \u0275fac = function CodeTypeAttributeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeTypeAttributeComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CodeAttributeTypeService), \u0275\u0275directiveInject(CodeGeneratorService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeTypeAttributeComponent, selectors: [["app-code-type-attribute"]], decls: 51, vars: 22, consts: [[1, "code-type-attribute-container"], [1, "header"], [1, "description"], [1, "content"], [1, "card"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "saved-info"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "nameAr"], [1, "required"], ["id", "nameAr", "type", "text", "formControlName", "nameAr", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "dir", "rtl"], [1, "error-text"], ["for", "nameEn"], ["id", "nameEn", "type", "text", "formControlName", "nameEn", "placeholder", "English Name"], ["for", "descriptionAr"], ["id", "descriptionAr", "formControlName", "descriptionAr", "placeholder", "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "dir", "rtl", "rows", "4"], ["for", "descriptionEn"], ["id", "descriptionEn", "formControlName", "descriptionEn", "placeholder", "English Description", "rows", "4"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner"]], template: function CodeTypeAttributeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Code Type Attribute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "h3");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, CodeTypeAttributeComponent_Conditional_12_Template, 2, 1, "div", 5);
      \u0275\u0275conditionalCreate(13, CodeTypeAttributeComponent_Conditional_13_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(14, CodeTypeAttributeComponent_Conditional_14_Template, 4, 2, "div", 7);
      \u0275\u0275elementStart(15, "form", 8);
      \u0275\u0275listener("ngSubmit", function CodeTypeAttributeComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "label", 11);
      \u0275\u0275text(19, "Name (Arabic) ");
      \u0275\u0275elementStart(20, "span", 12);
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "input", 13);
      \u0275\u0275conditionalCreate(23, CodeTypeAttributeComponent_Conditional_23_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 10)(25, "label", 15);
      \u0275\u0275text(26, "Name (English) ");
      \u0275\u0275elementStart(27, "span", 12);
      \u0275\u0275text(28, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "input", 16);
      \u0275\u0275conditionalCreate(30, CodeTypeAttributeComponent_Conditional_30_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 9)(32, "div", 10)(33, "label", 17);
      \u0275\u0275text(34, "Description (Arabic) ");
      \u0275\u0275elementStart(35, "span", 12);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "textarea", 18);
      \u0275\u0275conditionalCreate(38, CodeTypeAttributeComponent_Conditional_38_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 10)(40, "label", 19);
      \u0275\u0275text(41, "Description (English) ");
      \u0275\u0275elementStart(42, "span", 12);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "textarea", 20);
      \u0275\u0275conditionalCreate(45, CodeTypeAttributeComponent_Conditional_45_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 21)(47, "button", 22);
      \u0275\u0275conditionalCreate(48, CodeTypeAttributeComponent_Conditional_48_Template, 2, 0)(49, CodeTypeAttributeComponent_Conditional_49_Template, 1, 0)(50, CodeTypeAttributeComponent_Conditional_50_Template, 1, 0);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("Define 3 attributes - Entry ", ctx.currentEntry + 1, " of ", ctx.totalEntries);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Attribute ", ctx.currentEntry + 1, " Configuration");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Enter details for attribute #", ctx.currentEntry + 1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMessage ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.savedIds.length > 0 ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.attributeForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.nameAr == null ? null : ctx.nameAr.invalid) && (ctx.nameAr == null ? null : ctx.nameAr.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.nameAr == null ? null : ctx.nameAr.invalid) && (ctx.nameAr == null ? null : ctx.nameAr.touched) ? 23 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched) ? 30 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.descriptionAr == null ? null : ctx.descriptionAr.invalid) && (ctx.descriptionAr == null ? null : ctx.descriptionAr.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.descriptionAr == null ? null : ctx.descriptionAr.invalid) && (ctx.descriptionAr == null ? null : ctx.descriptionAr.touched) ? 38 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.descriptionEn == null ? null : ctx.descriptionEn.invalid) && (ctx.descriptionEn == null ? null : ctx.descriptionEn.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.descriptionEn == null ? null : ctx.descriptionEn.invalid) && (ctx.descriptionEn == null ? null : ctx.descriptionEn.touched) ? 45 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 48 : ctx.currentEntry < ctx.totalEntries - 1 ? 49 : 50);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.code-type-attribute-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.form[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid[_ngcontent-%COMP%], \ntextarea.invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\ninput.invalid[_ngcontent-%COMP%]:focus, \ntextarea.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=code-type-attribute.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeTypeAttributeComponent, [{
    type: Component,
    args: [{ selector: "app-code-type-attribute", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: '<div class="code-type-attribute-container">\r\n    <div class="header">\r\n        <h2>Code Type Attribute</h2>\r\n        <p class="description">Define 3 attributes - Entry {{ currentEntry + 1 }} of {{ totalEntries }}</p>\r\n    </div>\r\n\r\n    <div class="content">\r\n        <div class="card">\r\n            <h3>Attribute {{ currentEntry + 1 }} Configuration</h3>\r\n            <p>Enter details for attribute #{{ currentEntry + 1 }}</p>\r\n\r\n            @if (successMessage) {\r\n            <div class="alert alert-success">{{ successMessage }}</div>\r\n            }\r\n\r\n            @if (errorMessage) {\r\n            <div class="alert alert-error">{{ errorMessage }}</div>\r\n            }\r\n\r\n            @if (savedIds.length > 0) {\r\n            <div class="saved-info">\r\n                <strong>Saved:</strong> {{ savedIds.length }} of {{ totalEntries }} attributes\r\n            </div>\r\n            }\r\n\r\n            <form [formGroup]="attributeForm" (ngSubmit)="onSubmit()" class="form">\r\n                <div class="form-row">\r\n                    <div class="form-group">\r\n                        <label for="nameAr">Name (Arabic) <span class="required">*</span></label>\r\n                        <input id="nameAr" type="text" formControlName="nameAr" placeholder="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629" dir="rtl"\r\n                            [class.invalid]="nameAr?.invalid && nameAr?.touched" />\r\n                        @if (nameAr?.invalid && nameAr?.touched) {\r\n                        <span class="error-text">Arabic name is required</span>\r\n                        }\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="nameEn">Name (English) <span class="required">*</span></label>\r\n                        <input id="nameEn" type="text" formControlName="nameEn" placeholder="English Name"\r\n                            [class.invalid]="nameEn?.invalid && nameEn?.touched" />\r\n                        @if (nameEn?.invalid && nameEn?.touched) {\r\n                        <span class="error-text">English name is required</span>\r\n                        }\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-row">\r\n                    <div class="form-group">\r\n                        <label for="descriptionAr">Description (Arabic) <span class="required">*</span></label>\r\n                        <textarea id="descriptionAr" formControlName="descriptionAr" placeholder="\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629"\r\n                            dir="rtl" rows="4"\r\n                            [class.invalid]="descriptionAr?.invalid && descriptionAr?.touched"></textarea>\r\n                        @if (descriptionAr?.invalid && descriptionAr?.touched) {\r\n                        <span class="error-text">Arabic description is required</span>\r\n                        }\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="descriptionEn">Description (English) <span class="required">*</span></label>\r\n                        <textarea id="descriptionEn" formControlName="descriptionEn" placeholder="English Description"\r\n                            rows="4" [class.invalid]="descriptionEn?.invalid && descriptionEn?.touched"></textarea>\r\n                        @if (descriptionEn?.invalid && descriptionEn?.touched) {\r\n                        <span class="error-text">English description is required</span>\r\n                        }\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-actions">\r\n                    <button type="submit" class="btn btn-primary" [disabled]="isLoading">\r\n                        @if (isLoading) {\r\n                        <span class="spinner"></span>\r\n                        Saving...\r\n                        } @else if (currentEntry < totalEntries - 1) { Save & Next } @else { Save & Continue } </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>', styles: ["/* src/app/features/code-type-attribute/code-type-attribute.component.css */\n.code-type-attribute-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header {\n  margin-bottom: 2rem;\n}\n.header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.card h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card > p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.form {\n  margin-top: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required {\n  color: #ef4444;\n}\ninput,\ntextarea {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid,\ntextarea.invalid {\n  border-color: #ef4444;\n}\ninput.invalid:focus,\ntextarea.invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea {\n  resize: vertical;\n  font-family: inherit;\n}\n.error-text {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=code-type-attribute.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: CodeAttributeTypeService }, { type: CodeGeneratorService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeTypeAttributeComponent, { className: "CodeTypeAttributeComponent", filePath: "src/app/features/code-type-attribute/code-type-attribute.component.ts", lineNumber: 15 });
})();
export {
  CodeTypeAttributeComponent
};
//# sourceMappingURL=chunk-AIOQJ3MS.mjs.map
