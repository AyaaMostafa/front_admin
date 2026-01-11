import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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
  __spreadProps,
  __spreadValues,
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
} from "./chunk-EMSVNVEL.js";

// src/app/core/services/code-attribute-detail.service.ts
var CodeAttributeDetailService = class _CodeAttributeDetailService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  createCodeAttributeDetail(data) {
    return this.http.post(`${this.apiUrl}/CodeAttributeDetails/Create`, data);
  }
  static \u0275fac = function CodeAttributeDetailService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeAttributeDetailService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CodeAttributeDetailService, factory: _CodeAttributeDetailService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeAttributeDetailService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/code-details/code-details.component.ts
function CodeDetailsComponent_Conditional_10_Template(rf, ctx) {
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
function CodeDetailsComponent_Conditional_11_Template(rf, ctx) {
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
function CodeDetailsComponent_Conditional_12_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.savedCodes.join(", "), " ");
  }
}
function CodeDetailsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Code is required (min 2 chars)");
    \u0275\u0275elementEnd();
  }
}
function CodeDetailsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Arabic name is required");
    \u0275\u0275elementEnd();
  }
}
function CodeDetailsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "English name is required");
    \u0275\u0275elementEnd();
  }
}
function CodeDetailsComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Arabic description is required");
    \u0275\u0275elementEnd();
  }
}
function CodeDetailsComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "English description is required");
    \u0275\u0275elementEnd();
  }
}
function CodeDetailsComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
    \u0275\u0275text(1, " Saving... ");
  }
}
function CodeDetailsComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save & Next ");
  }
}
function CodeDetailsComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save & Continue ");
  }
}
var CodeDetailsComponent = class _CodeDetailsComponent {
  fb;
  codeAttributeDetailService;
  codeGeneratorService;
  router;
  detailForm;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  currentEntry = 0;
  totalEntries = 3;
  savedIds = [];
  savedCodes = [];
  attributeMainIds = [];
  constructor(fb, codeAttributeDetailService, codeGeneratorService, router) {
    this.fb = fb;
    this.codeAttributeDetailService = codeAttributeDetailService;
    this.codeGeneratorService = codeGeneratorService;
    this.router = router;
  }
  ngOnInit() {
    const state = this.codeGeneratorService.getState();
    this.attributeMainIds = state.codeAttributeMainIds;
    if (this.attributeMainIds.length !== 3) {
      this.errorMessage = "Missing required data. Please complete previous steps.";
      return;
    }
    this.initForm();
  }
  initForm() {
    this.detailForm = this.fb.group({
      code: ["", [Validators.required, Validators.minLength(2)]],
      nameAr: ["", [Validators.required]],
      nameEn: ["", [Validators.required]],
      descriptionAr: ["", [Validators.required]],
      descriptionEn: ["", [Validators.required]],
      sortOrder: [this.currentEntry + 1, [Validators.required]]
    });
  }
  onSubmit() {
    if (this.detailForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.successMessage = "";
      const requestData = __spreadProps(__spreadValues({}, this.detailForm.value), {
        attributeMainId: this.attributeMainIds[this.currentEntry]
      });
      this.codeAttributeDetailService.createCodeAttributeDetail(requestData).subscribe({
        next: (response) => {
          this.savedIds.push(response.data.id);
          this.savedCodes.push(response.data.code);
          this.codeGeneratorService.addCodeAttributeDetailId(response.data.id);
          if (this.currentEntry < this.totalEntries - 1) {
            this.currentEntry++;
            this.successMessage = `Detail ${this.currentEntry}/${this.totalEntries} saved!`;
            this.detailForm.reset();
            this.detailForm.patchValue({ sortOrder: this.currentEntry + 1 });
            this.isLoading = false;
          } else {
            this.successMessage = "All 3 details saved successfully!";
            this.codeGeneratorService.completeStep(3);
            setTimeout(() => {
              this.router.navigate(["/code-settings"]);
            }, 1e3);
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || "Failed to create code attribute detail. Please try again.";
        }
      });
    } else {
      Object.keys(this.detailForm.controls).forEach((key) => {
        this.detailForm.get(key)?.markAsTouched();
      });
    }
  }
  get code() {
    return this.detailForm.get("code");
  }
  get nameAr() {
    return this.detailForm.get("nameAr");
  }
  get nameEn() {
    return this.detailForm.get("nameEn");
  }
  get descriptionAr() {
    return this.detailForm.get("descriptionAr");
  }
  get descriptionEn() {
    return this.detailForm.get("descriptionEn");
  }
  get sortOrder() {
    return this.detailForm.get("sortOrder");
  }
  static \u0275fac = function CodeDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeDetailsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CodeAttributeDetailService), \u0275\u0275directiveInject(CodeGeneratorService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeDetailsComponent, selectors: [["app-code-details"]], decls: 63, vars: 24, consts: [[1, "code-details-container"], [1, "header"], [1, "description"], [1, "content"], [1, "card"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "saved-info"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "code"], [1, "required"], ["id", "code", "type", "text", "formControlName", "code", "placeholder", "e.g., XYZ, ABC"], [1, "error-text"], ["for", "sortOrder"], ["id", "sortOrder", "type", "number", "formControlName", "sortOrder", "readonly", "", 1, "readonly-input"], ["for", "nameAr"], ["id", "nameAr", "type", "text", "formControlName", "nameAr", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "dir", "rtl"], ["for", "nameEn"], ["id", "nameEn", "type", "text", "formControlName", "nameEn", "placeholder", "English Name"], ["for", "descriptionAr"], ["id", "descriptionAr", "formControlName", "descriptionAr", "placeholder", "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "dir", "rtl", "rows", "4"], ["for", "descriptionEn"], ["id", "descriptionEn", "formControlName", "descriptionEn", "placeholder", "English Description", "rows", "4"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "spinner"]], template: function CodeDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Code Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "h3");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, CodeDetailsComponent_Conditional_10_Template, 2, 1, "div", 5);
      \u0275\u0275conditionalCreate(11, CodeDetailsComponent_Conditional_11_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(12, CodeDetailsComponent_Conditional_12_Template, 4, 1, "div", 7);
      \u0275\u0275elementStart(13, "form", 8);
      \u0275\u0275listener("ngSubmit", function CodeDetailsComponent_Template_form_ngSubmit_13_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "label", 11);
      \u0275\u0275text(17, "Code ");
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "input", 13);
      \u0275\u0275conditionalCreate(21, CodeDetailsComponent_Conditional_21_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 10)(23, "label", 15);
      \u0275\u0275text(24, "Sort Order ");
      \u0275\u0275elementStart(25, "span", 12);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "input", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 9)(29, "div", 10)(30, "label", 17);
      \u0275\u0275text(31, "Name (Arabic) ");
      \u0275\u0275elementStart(32, "span", 12);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(34, "input", 18);
      \u0275\u0275conditionalCreate(35, CodeDetailsComponent_Conditional_35_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 10)(37, "label", 19);
      \u0275\u0275text(38, "Name (English) ");
      \u0275\u0275elementStart(39, "span", 12);
      \u0275\u0275text(40, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(41, "input", 20);
      \u0275\u0275conditionalCreate(42, CodeDetailsComponent_Conditional_42_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 9)(44, "div", 10)(45, "label", 21);
      \u0275\u0275text(46, "Description (Arabic) ");
      \u0275\u0275elementStart(47, "span", 12);
      \u0275\u0275text(48, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(49, "textarea", 22);
      \u0275\u0275conditionalCreate(50, CodeDetailsComponent_Conditional_50_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 10)(52, "label", 23);
      \u0275\u0275text(53, "Description (English) ");
      \u0275\u0275elementStart(54, "span", 12);
      \u0275\u0275text(55, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "textarea", 24);
      \u0275\u0275conditionalCreate(57, CodeDetailsComponent_Conditional_57_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 25)(59, "button", 26);
      \u0275\u0275conditionalCreate(60, CodeDetailsComponent_Conditional_60_Template, 2, 0)(61, CodeDetailsComponent_Conditional_61_Template, 1, 0)(62, CodeDetailsComponent_Conditional_62_Template, 1, 0);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("Define details - Entry ", ctx.currentEntry + 1, " of ", ctx.totalEntries);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Detail ", ctx.currentEntry + 1, " Configuration");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMessage ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.savedCodes.length > 0 ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.detailForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.code == null ? null : ctx.code.invalid) && (ctx.code == null ? null : ctx.code.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.code == null ? null : ctx.code.invalid) && (ctx.code == null ? null : ctx.code.touched) ? 21 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("invalid", (ctx.nameAr == null ? null : ctx.nameAr.invalid) && (ctx.nameAr == null ? null : ctx.nameAr.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.nameAr == null ? null : ctx.nameAr.invalid) && (ctx.nameAr == null ? null : ctx.nameAr.touched) ? 35 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched) ? 42 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.descriptionAr == null ? null : ctx.descriptionAr.invalid) && (ctx.descriptionAr == null ? null : ctx.descriptionAr.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.descriptionAr == null ? null : ctx.descriptionAr.invalid) && (ctx.descriptionAr == null ? null : ctx.descriptionAr.touched) ? 50 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.descriptionEn == null ? null : ctx.descriptionEn.invalid) && (ctx.descriptionEn == null ? null : ctx.descriptionEn.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.descriptionEn == null ? null : ctx.descriptionEn.invalid) && (ctx.descriptionEn == null ? null : ctx.descriptionEn.touched) ? 57 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 60 : ctx.currentEntry < ctx.totalEntries - 1 ? 61 : 62);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.code-details-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.saved-info[_ngcontent-%COMP%] {\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  padding: 0.75rem;\n  border-radius: 6px;\n  margin-bottom: 1.5rem;\n  color: #0369a1;\n}\n.form[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid[_ngcontent-%COMP%], \ntextarea.invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\ninput.invalid[_ngcontent-%COMP%]:focus, \ntextarea.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.readonly-input[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=code-details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-code-details", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<div class="code-details-container">\r
    <div class="header">\r
        <h2>Code Details</h2>\r
        <p class="description">Define details - Entry {{ currentEntry + 1 }} of {{ totalEntries }}</p>\r
    </div>\r
\r
    <div class="content">\r
        <div class="card">\r
            <h3>Detail {{ currentEntry + 1 }} Configuration</h3>\r
\r
            @if (successMessage) {\r
            <div class="alert alert-success">{{ successMessage }}</div>\r
            }\r
\r
            @if (errorMessage) {\r
            <div class="alert alert-error">{{ errorMessage }}</div>\r
            }\r
\r
            @if (savedCodes.length > 0) {\r
            <div class="saved-info">\r
                <strong>Saved:</strong> {{ savedCodes.join(', ') }}\r
            </div>\r
            }\r
\r
            <form [formGroup]="detailForm" (ngSubmit)="onSubmit()" class="form">\r
                <div class="form-row">\r
                    <div class="form-group">\r
                        <label for="code">Code <span class="required">*</span></label>\r
                        <input id="code" type="text" formControlName="code" placeholder="e.g., XYZ, ABC"\r
                            [class.invalid]="code?.invalid && code?.touched" />\r
                        @if (code?.invalid && code?.touched) {\r
                        <span class="error-text">Code is required (min 2 chars)</span>\r
                        }\r
                    </div>\r
\r
                    <div class="form-group">\r
                        <label for="sortOrder">Sort Order <span class="required">*</span></label>\r
                        <input id="sortOrder" type="number" formControlName="sortOrder" readonly\r
                            class="readonly-input" />\r
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
                        } @else if (currentEntry < totalEntries - 1) { Save & Next } @else { Save & Continue } </button>\r
                </div>\r
            </form>\r
        </div>\r
    </div>\r
</div>`, styles: ["/* src/app/features/code-details/code-details.component.css */\n.code-details-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header {\n  margin-bottom: 2rem;\n}\n.header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.content {\n  max-width: 1200px;\n}\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.card h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card > p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.saved-info {\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  padding: 0.75rem;\n  border-radius: 6px;\n  margin-bottom: 1.5rem;\n  color: #0369a1;\n}\n.form {\n  margin-top: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required {\n  color: #ef4444;\n}\ninput,\ntextarea {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid,\ntextarea.invalid {\n  border-color: #ef4444;\n}\ninput.invalid:focus,\ntextarea.invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea {\n  resize: vertical;\n  font-family: inherit;\n}\n.readonly-input {\n  background: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.error-text {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=code-details.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: CodeAttributeDetailService }, { type: CodeGeneratorService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeDetailsComponent, { className: "CodeDetailsComponent", filePath: "src/app/features/code-details/code-details.component.ts", lineNumber: 15 });
})();
export {
  CodeDetailsComponent
};
//# sourceMappingURL=chunk-PK7QKCCV.js.map
