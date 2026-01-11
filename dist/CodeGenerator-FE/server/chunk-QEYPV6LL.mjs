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
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BOLVHABB.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DTEGX4RB.mjs";

// src/app/core/services/code-generation.service.ts
var CodeGenerationService = class _CodeGenerationService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  generateCode(data) {
    return this.http.post(`${this.apiUrl}/Codes`, data);
  }
  static \u0275fac = function CodeGenerationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeGenerationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CodeGenerationService, factory: _CodeGenerationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeGenerationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/code-generation/code-generation.component.ts
function CodeGenerationComponent_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Copied! ");
  }
}
function CodeGenerationComponent_Conditional_7_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "rect", 34)(2, "path", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Copy to Clipboard ");
  }
}
function CodeGenerationComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 26);
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Code Generated Successfully!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27)(6, "div", 28);
    \u0275\u0275text(7, "Your Generated Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 30);
    \u0275\u0275listener("click", function CodeGenerationComponent_Conditional_7_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard());
    });
    \u0275\u0275conditionalCreate(11, CodeGenerationComponent_Conditional_7_Conditional_11_Template, 3, 0)(12, CodeGenerationComponent_Conditional_7_Conditional_12_Template, 4, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 31);
    \u0275\u0275text(14, " Your code has been generated and is ready to use! ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.generatedCode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.copiedToClipboard ? 11 : 12);
  }
}
function CodeGenerationComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function CodeGenerationComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Arabic name is required");
    \u0275\u0275elementEnd();
  }
}
function CodeGenerationComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "English name is required");
    \u0275\u0275elementEnd();
  }
}
function CodeGenerationComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Arabic description is required");
    \u0275\u0275elementEnd();
  }
}
function CodeGenerationComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "English description is required");
    \u0275\u0275elementEnd();
  }
}
function CodeGenerationComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "External system is required");
    \u0275\u0275elementEnd();
  }
}
function CodeGenerationComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "External reference ID is required");
    \u0275\u0275elementEnd();
  }
}
function CodeGenerationComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
    \u0275\u0275text(1, " Generating... ");
  }
}
function CodeGenerationComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 37)(2, "polyline", 38)(3, "line", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Generate Code ");
  }
}
var CodeGenerationComponent = class _CodeGenerationComponent {
  fb;
  codeGenerationService;
  codeGeneratorService;
  generationForm;
  isLoading = false;
  errorMessage = "";
  generatedCode = "";
  showCodeReveal = false;
  copiedToClipboard = false;
  codeTypeId;
  constructor(fb, codeGenerationService, codeGeneratorService) {
    this.fb = fb;
    this.codeGenerationService = codeGenerationService;
    this.codeGeneratorService = codeGeneratorService;
  }
  ngOnInit() {
    const state = this.codeGeneratorService.getState();
    this.codeTypeId = state.codeTypeId;
    if (!this.codeTypeId) {
      this.errorMessage = "Missing required data. Please complete previous steps.";
      return;
    }
    this.initForm();
  }
  initForm() {
    this.generationForm = this.fb.group({
      nameAr: ["", [Validators.required]],
      nameEn: ["", [Validators.required]],
      descriptionAr: ["", [Validators.required]],
      descriptionEn: ["", [Validators.required]],
      externalSystem: ["", [Validators.required]],
      externalReferenceId: ["", [Validators.required]]
    });
  }
  onGenerate() {
    if (this.generationForm.valid && !this.isLoading) {
      this.isLoading = true;
      this.errorMessage = "";
      this.showCodeReveal = false;
      const requestData = __spreadProps(__spreadValues({}, this.generationForm.value), {
        codeTypeId: this.codeTypeId
      });
      this.codeGenerationService.generateCode(requestData).subscribe({
        next: (response) => {
          this.generatedCode = response.data.codeGenerated;
          this.isLoading = false;
          setTimeout(() => {
            this.showCodeReveal = true;
            this.codeGeneratorService.completeStep(6);
          }, 500);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || "Failed to generate code. Please try again.";
        }
      });
    } else {
      Object.keys(this.generationForm.controls).forEach((key) => {
        this.generationForm.get(key)?.markAsTouched();
      });
    }
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedCode).then(() => {
      this.copiedToClipboard = true;
      setTimeout(() => {
        this.copiedToClipboard = false;
      }, 2e3);
    });
  }
  get nameAr() {
    return this.generationForm.get("nameAr");
  }
  get nameEn() {
    return this.generationForm.get("nameEn");
  }
  get descriptionAr() {
    return this.generationForm.get("descriptionAr");
  }
  get descriptionEn() {
    return this.generationForm.get("descriptionEn");
  }
  get externalSystem() {
    return this.generationForm.get("externalSystem");
  }
  get externalReferenceId() {
    return this.generationForm.get("externalReferenceId");
  }
  static \u0275fac = function CodeGenerationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeGenerationComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CodeGenerationService), \u0275\u0275directiveInject(CodeGeneratorService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeGenerationComponent, selectors: [["app-code-generation"]], decls: 64, vars: 25, consts: [[1, "code-generation-container"], [1, "header"], [1, "description"], [1, "content"], [1, "code-reveal-card"], [1, "card"], [1, "alert", "alert-error"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "nameAr"], [1, "required"], ["id", "nameAr", "type", "text", "formControlName", "nameAr", "placeholder", "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "dir", "rtl"], [1, "error-text"], ["for", "nameEn"], ["id", "nameEn", "type", "text", "formControlName", "nameEn", "placeholder", "English Name"], ["for", "descriptionAr"], ["id", "descriptionAr", "formControlName", "descriptionAr", "placeholder", "\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629", "dir", "rtl", "rows", "4"], ["for", "descriptionEn"], ["id", "descriptionEn", "formControlName", "descriptionEn", "placeholder", "English Description", "rows", "4"], ["for", "externalSystem"], ["id", "externalSystem", "type", "text", "formControlName", "externalSystem", "placeholder", "e.g., INVV"], ["for", "externalReferenceId"], ["id", "externalReferenceId", "type", "text", "formControlName", "externalReferenceId", "placeholder", "e.g., SRV-CARD-002"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-generate", 3, "disabled"], [1, "celebration-icon"], [1, "generated-code-display"], [1, "code-label"], [1, "code-value"], [1, "btn-copy", 3, "click"], [1, "success-message"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M20 6L9 17l-5-5"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"], [1, "spinner"], ["d", "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"]], template: function CodeGenerationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Code Generation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Generate your final code based on configurations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275conditionalCreate(7, CodeGenerationComponent_Conditional_7_Template, 15, 2, "div", 4);
      \u0275\u0275elementStart(8, "div", 5)(9, "h3");
      \u0275\u0275text(10, "Code Generation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "Fill in the details below to generate your code.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, CodeGenerationComponent_Conditional_13_Template, 2, 1, "div", 6);
      \u0275\u0275elementStart(14, "form", 7);
      \u0275\u0275listener("ngSubmit", function CodeGenerationComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onGenerate();
      });
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "label", 10);
      \u0275\u0275text(18, "Name (Arabic) ");
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "input", 12);
      \u0275\u0275conditionalCreate(22, CodeGenerationComponent_Conditional_22_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 9)(24, "label", 14);
      \u0275\u0275text(25, "Name (English) ");
      \u0275\u0275elementStart(26, "span", 11);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "input", 15);
      \u0275\u0275conditionalCreate(29, CodeGenerationComponent_Conditional_29_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 8)(31, "div", 9)(32, "label", 16);
      \u0275\u0275text(33, "Description (Arabic) ");
      \u0275\u0275elementStart(34, "span", 11);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "textarea", 17);
      \u0275\u0275conditionalCreate(37, CodeGenerationComponent_Conditional_37_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 9)(39, "label", 18);
      \u0275\u0275text(40, "Description (English) ");
      \u0275\u0275elementStart(41, "span", 11);
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "textarea", 19);
      \u0275\u0275conditionalCreate(44, CodeGenerationComponent_Conditional_44_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 8)(46, "div", 9)(47, "label", 20);
      \u0275\u0275text(48, "External System ");
      \u0275\u0275elementStart(49, "span", 11);
      \u0275\u0275text(50, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "input", 21);
      \u0275\u0275conditionalCreate(52, CodeGenerationComponent_Conditional_52_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 9)(54, "label", 22);
      \u0275\u0275text(55, "External Reference ID ");
      \u0275\u0275elementStart(56, "span", 11);
      \u0275\u0275text(57, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(58, "input", 23);
      \u0275\u0275conditionalCreate(59, CodeGenerationComponent_Conditional_59_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 24)(61, "button", 25);
      \u0275\u0275conditionalCreate(62, CodeGenerationComponent_Conditional_62_Template, 2, 0)(63, CodeGenerationComponent_Conditional_63_Template, 5, 0);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.showCodeReveal ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", ctx.showCodeReveal);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.errorMessage ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.generationForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.nameAr == null ? null : ctx.nameAr.invalid) && (ctx.nameAr == null ? null : ctx.nameAr.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.nameAr == null ? null : ctx.nameAr.invalid) && (ctx.nameAr == null ? null : ctx.nameAr.touched) ? 22 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched) ? 29 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.descriptionAr == null ? null : ctx.descriptionAr.invalid) && (ctx.descriptionAr == null ? null : ctx.descriptionAr.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.descriptionAr == null ? null : ctx.descriptionAr.invalid) && (ctx.descriptionAr == null ? null : ctx.descriptionAr.touched) ? 37 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.descriptionEn == null ? null : ctx.descriptionEn.invalid) && (ctx.descriptionEn == null ? null : ctx.descriptionEn.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.descriptionEn == null ? null : ctx.descriptionEn.invalid) && (ctx.descriptionEn == null ? null : ctx.descriptionEn.touched) ? 44 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.externalSystem == null ? null : ctx.externalSystem.invalid) && (ctx.externalSystem == null ? null : ctx.externalSystem.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.externalSystem == null ? null : ctx.externalSystem.invalid) && (ctx.externalSystem == null ? null : ctx.externalSystem.touched) ? 52 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.externalReferenceId == null ? null : ctx.externalReferenceId.invalid) && (ctx.externalReferenceId == null ? null : ctx.externalReferenceId.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.externalReferenceId == null ? null : ctx.externalReferenceId.invalid) && (ctx.externalReferenceId == null ? null : ctx.externalReferenceId.touched) ? 59 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 62 : 63);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.code-generation-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  transition: all 0.3s ease;\n}\n.card.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.95);\n  pointer-events: none;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.code-reveal-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 3rem;\n  text-align: center;\n  color: white;\n  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);\n  animation: _ngcontent-%COMP%_revealCard 0.6s ease-out;\n  position: relative;\n  overflow: hidden;\n}\n.code-reveal-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_rotate 20s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_revealCard {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.celebration-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  animation: _ngcontent-%COMP%_bounce 1s ease-in-out infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n}\n.code-reveal-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n  color: white;\n  position: relative;\n  z-index: 1;\n}\n.generated-code-display[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 12px;\n  padding: 2rem;\n  margin: 2rem auto;\n  max-width: 600px;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.code-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 1rem;\n}\n.code-value[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  font-family: "Courier New", monospace;\n  color: #1a202c;\n  letter-spacing: 3px;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #e0f2fe 100%);\n  border-radius: 8px;\n  border: 3px dashed #667eea;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_glow 2s ease-in-out infinite;\n  word-break: break-all;\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%, 100% {\n    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);\n  }\n}\n.btn-copy[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n  font-size: 0.875rem;\n}\n.btn-copy[_ngcontent-%COMP%]:hover {\n  background: #5a67d8;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.success-message[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1.125rem;\n  margin-top: 2rem;\n  position: relative;\n  z-index: 1;\n}\n.form[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus, \ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid[_ngcontent-%COMP%], \ntextarea.invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\ninput.invalid[_ngcontent-%COMP%]:focus, \ntextarea.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  font-family: inherit;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-generate[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n  padding: 1rem 2.5rem;\n  font-size: 1.125rem;\n}\n.btn-generate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);\n}\n.btn-generate[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .code-value[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n    letter-spacing: 1px;\n  }\n  .code-reveal-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=code-generation.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeGenerationComponent, [{
    type: Component,
    args: [{ selector: "app-code-generation", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: '<div class="code-generation-container">\r\n    <div class="header">\r\n        <h2>Code Generation</h2>\r\n        <p class="description">Generate your final code based on configurations</p>\r\n    </div>\r\n\r\n    <div class="content">\r\n        <!-- Generated Code Reveal (shown after generation) -->\r\n        @if (showCodeReveal) {\r\n        <div class="code-reveal-card">\r\n            <div class="celebration-icon">\u{1F389}</div>\r\n            <h3>Code Generated Successfully!</h3>\r\n            <div class="generated-code-display">\r\n                <div class="code-label">Your Generated Code:</div>\r\n                <div class="code-value">\r\n                    {{ generatedCode }}\r\n                </div>\r\n                <button class="btn-copy" (click)="copyToClipboard()">\r\n                    @if (copiedToClipboard) {\r\n                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n                        <path d="M20 6L9 17l-5-5" />\r\n                    </svg>\r\n                    Copied!\r\n                    } @else {\r\n                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />\r\n                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />\r\n                    </svg>\r\n                    Copy to Clipboard\r\n                    }\r\n                </button>\r\n            </div>\r\n            <p class="success-message">\r\n                Your code has been generated and is ready to use!\r\n            </p>\r\n        </div>\r\n        }\r\n\r\n        <!-- Generation Form -->\r\n        <div class="card" [class.hidden]="showCodeReveal">\r\n            <h3>Code Generation</h3>\r\n            <p>Fill in the details below to generate your code.</p>\r\n\r\n            @if (errorMessage) {\r\n            <div class="alert alert-error">{{ errorMessage }}</div>\r\n            }\r\n\r\n            <form [formGroup]="generationForm" (ngSubmit)="onGenerate()" class="form">\r\n                <div class="form-row">\r\n                    <div class="form-group">\r\n                        <label for="nameAr">Name (Arabic) <span class="required">*</span></label>\r\n                        <input id="nameAr" type="text" formControlName="nameAr" placeholder="\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629" dir="rtl"\r\n                            [class.invalid]="nameAr?.invalid && nameAr?.touched" />\r\n                        @if (nameAr?.invalid && nameAr?.touched) {\r\n                        <span class="error-text">Arabic name is required</span>\r\n                        }\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="nameEn">Name (English) <span class="required">*</span></label>\r\n                        <input id="nameEn" type="text" formControlName="nameEn" placeholder="English Name"\r\n                            [class.invalid]="nameEn?.invalid && nameEn?.touched" />\r\n                        @if (nameEn?.invalid && nameEn?.touched) {\r\n                        <span class="error-text">English name is required</span>\r\n                        }\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-row">\r\n                    <div class="form-group">\r\n                        <label for="descriptionAr">Description (Arabic) <span class="required">*</span></label>\r\n                        <textarea id="descriptionAr" formControlName="descriptionAr" placeholder="\u0627\u0644\u0648\u0635\u0641 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629"\r\n                            dir="rtl" rows="4"\r\n                            [class.invalid]="descriptionAr?.invalid && descriptionAr?.touched"></textarea>\r\n                        @if (descriptionAr?.invalid && descriptionAr?.touched) {\r\n                        <span class="error-text">Arabic description is required</span>\r\n                        }\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="descriptionEn">Description (English) <span class="required">*</span></label>\r\n                        <textarea id="descriptionEn" formControlName="descriptionEn" placeholder="English Description"\r\n                            rows="4" [class.invalid]="descriptionEn?.invalid && descriptionEn?.touched"></textarea>\r\n                        @if (descriptionEn?.invalid && descriptionEn?.touched) {\r\n                        <span class="error-text">English description is required</span>\r\n                        }\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-row">\r\n                    <div class="form-group">\r\n                        <label for="externalSystem">External System <span class="required">*</span></label>\r\n                        <input id="externalSystem" type="text" formControlName="externalSystem" placeholder="e.g., INVV"\r\n                            [class.invalid]="externalSystem?.invalid && externalSystem?.touched" />\r\n                        @if (externalSystem?.invalid && externalSystem?.touched) {\r\n                        <span class="error-text">External system is required</span>\r\n                        }\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="externalReferenceId">External Reference ID <span class="required">*</span></label>\r\n                        <input id="externalReferenceId" type="text" formControlName="externalReferenceId"\r\n                            placeholder="e.g., SRV-CARD-002"\r\n                            [class.invalid]="externalReferenceId?.invalid && externalReferenceId?.touched" />\r\n                        @if (externalReferenceId?.invalid && externalReferenceId?.touched) {\r\n                        <span class="error-text">External reference ID is required</span>\r\n                        }\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-actions">\r\n                    <button type="submit" class="btn btn-generate" [disabled]="isLoading">\r\n                        @if (isLoading) {\r\n                        <span class="spinner"></span>\r\n                        Generating...\r\n                        } @else {\r\n                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r\n                            stroke-width="2">\r\n                            <path\r\n                                d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />\r\n                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />\r\n                            <line x1="12" y1="22.08" x2="12" y2="12" />\r\n                        </svg>\r\n                        Generate Code\r\n                        }\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>', styles: ['/* src/app/features/code-generation/code-generation.component.css */\n.code-generation-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header {\n  margin-bottom: 2rem;\n}\n.header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.content {\n  max-width: 1200px;\n}\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  transition: all 0.3s ease;\n}\n.card.hidden {\n  opacity: 0;\n  transform: scale(0.95);\n  pointer-events: none;\n}\n.card h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card > p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.code-reveal-card {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  border-radius: 16px;\n  padding: 3rem;\n  text-align: center;\n  color: white;\n  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);\n  animation: revealCard 0.6s ease-out;\n  position: relative;\n  overflow: hidden;\n}\n.code-reveal-card::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  animation: rotate 20s linear infinite;\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes revealCard {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.celebration-icon {\n  font-size: 4rem;\n  animation: bounce 1s ease-in-out infinite;\n  margin-bottom: 1rem;\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-20px);\n  }\n}\n.code-reveal-card h3 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n  color: white;\n  position: relative;\n  z-index: 1;\n}\n.generated-code-display {\n  background: rgba(255, 255, 255, 0.95);\n  border-radius: 12px;\n  padding: 2rem;\n  margin: 2rem auto;\n  max-width: 600px;\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n}\n.code-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 1rem;\n}\n.code-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  font-family: "Courier New", monospace;\n  color: #1a202c;\n  letter-spacing: 3px;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #e0f2fe 100%);\n  border-radius: 8px;\n  border: 3px dashed #667eea;\n  margin-bottom: 1.5rem;\n  animation: glow 2s ease-in-out infinite;\n  word-break: break-all;\n}\n@keyframes glow {\n  0%, 100% {\n    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);\n  }\n}\n.btn-copy {\n  padding: 0.75rem 1.5rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n  font-size: 0.875rem;\n}\n.btn-copy:hover {\n  background: #5a67d8;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n}\n.success-message {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1.125rem;\n  margin-top: 2rem;\n  position: relative;\n  z-index: 1;\n}\n.form {\n  margin-top: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\nlabel {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required {\n  color: #ef4444;\n}\ninput,\ntextarea {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid,\ntextarea.invalid {\n  border-color: #ef4444;\n}\ninput.invalid:focus,\ntextarea.invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea {\n  resize: vertical;\n  font-family: inherit;\n}\n.error-text {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-generate {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  color: white;\n  padding: 1rem 2.5rem;\n  font-size: 1.125rem;\n}\n.btn-generate:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);\n}\n.btn-generate:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .code-value {\n    font-size: 1.75rem;\n    letter-spacing: 1px;\n  }\n  .code-reveal-card h3 {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=code-generation.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: CodeGenerationService }, { type: CodeGeneratorService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeGenerationComponent, { className: "CodeGenerationComponent", filePath: "src/app/features/code-generation/code-generation.component.ts", lineNumber: 14 });
})();
export {
  CodeGenerationComponent
};
//# sourceMappingURL=chunk-QEYPV6LL.mjs.map
