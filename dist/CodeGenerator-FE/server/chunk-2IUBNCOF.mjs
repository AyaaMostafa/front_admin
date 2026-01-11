import './polyfills.server.mjs';
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
  ɵɵtextInterpolate2
} from "./chunk-BOLVHABB.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DTEGX4RB.mjs";

// src/app/core/services/code-type-sequence.service.ts
var CodeTypeSequenceService = class _CodeTypeSequenceService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  createCodeTypeSequence(data) {
    return this.http.post(`${this.apiUrl}/CodeTypeSequences/Create`, data);
  }
  static \u0275fac = function CodeTypeSequenceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeTypeSequenceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CodeTypeSequenceService, factory: _CodeTypeSequenceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeTypeSequenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/code-sequence/code-sequence.component.ts
function CodeSequenceComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 28);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Sequence Created Successfully!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29)(6, "div", 30)(7, "span", 31);
    \u0275\u0275text(8, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 30)(12, "span", 31);
    \u0275\u0275text(13, "Start With:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 30)(17, "span", 31);
    \u0275\u0275text(18, "Range:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 32);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 30)(22, "span", 31);
    \u0275\u0275text(23, "Current Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 32);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 33)(27, "p");
    \u0275\u0275text(28, "Automatically proceeding to Code Generation in:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 34);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 35);
    \u0275\u0275text(32, "seconds");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 36);
    \u0275\u0275listener("click", function CodeSequenceComponent_Conditional_7_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.skipToGeneration());
    });
    \u0275\u0275text(34, " Skip & Continue Now ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 37);
    \u0275\u0275element(36, "path", 38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.sequenceData.nameEn);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.sequenceData.startWith);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.sequenceData.minValue, " - ", ctx_r1.sequenceData.maxValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.sequenceData.currentValue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.countdown);
  }
}
function CodeSequenceComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function CodeSequenceComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function CodeSequenceComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Sequence name is required");
    \u0275\u0275elementEnd();
  }
}
function CodeSequenceComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Start value is required");
    \u0275\u0275elementEnd();
  }
}
function CodeSequenceComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Current value is required");
    \u0275\u0275elementEnd();
  }
}
function CodeSequenceComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Minimum value is required");
    \u0275\u0275elementEnd();
  }
}
function CodeSequenceComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Maximum value is required");
    \u0275\u0275elementEnd();
  }
}
function CodeSequenceComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Cycling value is required");
    \u0275\u0275elementEnd();
  }
}
function CodeSequenceComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 39);
    \u0275\u0275text(1, " Creating... ");
  }
}
function CodeSequenceComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create Sequence ");
  }
}
var CodeSequenceComponent = class _CodeSequenceComponent {
  fb;
  codeTypeSequenceService;
  codeGeneratorService;
  router;
  sequenceForm;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  sequenceData = null;
  countdown = 30;
  countdownInterval;
  codeTypeId;
  constructor(fb, codeTypeSequenceService, codeGeneratorService, router) {
    this.fb = fb;
    this.codeTypeSequenceService = codeTypeSequenceService;
    this.codeGeneratorService = codeGeneratorService;
    this.router = router;
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
    this.sequenceForm = this.fb.group({
      nameEn: ["", [Validators.required]],
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
      this.errorMessage = "";
      const requestData = __spreadProps(__spreadValues({}, this.sequenceForm.value), {
        codeTypeId: this.codeTypeId
      });
      this.codeTypeSequenceService.createCodeTypeSequence(requestData).subscribe({
        next: (response) => {
          this.sequenceData = response.data;
          this.successMessage = response.message;
          this.isLoading = false;
          this.codeGeneratorService.completeStep(5);
          this.startCountdown();
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || "Failed to create sequence. Please try again.";
        }
      });
    } else {
      Object.keys(this.sequenceForm.controls).forEach((key) => {
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
        this.router.navigate(["/code-generation"]);
      }
    }, 1e3);
  }
  skipToGeneration() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    this.router.navigate(["/code-generation"]);
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  get nameEn() {
    return this.sequenceForm.get("nameEn");
  }
  get startWith() {
    return this.sequenceForm.get("startWith");
  }
  get minValue() {
    return this.sequenceForm.get("minValue");
  }
  get maxValue() {
    return this.sequenceForm.get("maxValue");
  }
  get currentValue() {
    return this.sequenceForm.get("currentValue");
  }
  get isCycling() {
    return this.sequenceForm.get("isCycling");
  }
  static \u0275fac = function CodeSequenceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeSequenceComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CodeTypeSequenceService), \u0275\u0275directiveInject(CodeGeneratorService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeSequenceComponent, selectors: [["app-code-sequence"]], decls: 66, vars: 26, consts: [[1, "code-sequence-container"], [1, "header"], [1, "description"], [1, "content"], [1, "success-card"], [1, "card"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group", "full-width"], ["for", "nameEn"], [1, "required"], ["id", "nameEn", "type", "text", "formControlName", "nameEn", "placeholder", "e.g., SEQ"], [1, "error-text"], [1, "form-group"], ["for", "startWith"], ["id", "startWith", "type", "number", "formControlName", "startWith", "placeholder", "100"], ["for", "currentValue"], ["id", "currentValue", "type", "number", "formControlName", "currentValue", "placeholder", "100"], ["for", "minValue"], ["id", "minValue", "type", "number", "formControlName", "minValue", "placeholder", "100"], ["for", "maxValue"], ["id", "maxValue", "type", "number", "formControlName", "maxValue", "placeholder", "9999"], ["for", "isCycling"], ["id", "isCycling", "type", "number", "formControlName", "isCycling", "placeholder", "0"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "success-icon"], [1, "sequence-details"], [1, "detail-row"], [1, "label"], [1, "value"], [1, "countdown-display"], [1, "countdown-timer"], [1, "countdown-text"], [1, "btn", "btn-skip", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "spinner"]], template: function CodeSequenceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Code Sequence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Configure sequence settings for code generation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275conditionalCreate(7, CodeSequenceComponent_Conditional_7_Template, 37, 6, "div", 4);
      \u0275\u0275elementStart(8, "div", 5)(9, "h3");
      \u0275\u0275text(10, "Sequence Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "Define the sequence settings for auto-incrementing codes.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, CodeSequenceComponent_Conditional_13_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(14, CodeSequenceComponent_Conditional_14_Template, 2, 1, "div", 7);
      \u0275\u0275elementStart(15, "form", 8);
      \u0275\u0275listener("ngSubmit", function CodeSequenceComponent_Template_form_ngSubmit_15_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(16, "div", 9)(17, "div", 10)(18, "label", 11);
      \u0275\u0275text(19, "Sequence Name ");
      \u0275\u0275elementStart(20, "span", 12);
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "input", 13);
      \u0275\u0275conditionalCreate(23, CodeSequenceComponent_Conditional_23_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 9)(25, "div", 15)(26, "label", 16);
      \u0275\u0275text(27, "Start With ");
      \u0275\u0275elementStart(28, "span", 12);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "input", 17);
      \u0275\u0275conditionalCreate(31, CodeSequenceComponent_Conditional_31_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 15)(33, "label", 18);
      \u0275\u0275text(34, "Current Value ");
      \u0275\u0275elementStart(35, "span", 12);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "input", 19);
      \u0275\u0275conditionalCreate(38, CodeSequenceComponent_Conditional_38_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 9)(40, "div", 15)(41, "label", 20);
      \u0275\u0275text(42, "Minimum Value ");
      \u0275\u0275elementStart(43, "span", 12);
      \u0275\u0275text(44, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(45, "input", 21);
      \u0275\u0275conditionalCreate(46, CodeSequenceComponent_Conditional_46_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 15)(48, "label", 22);
      \u0275\u0275text(49, "Maximum Value ");
      \u0275\u0275elementStart(50, "span", 12);
      \u0275\u0275text(51, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "input", 23);
      \u0275\u0275conditionalCreate(53, CodeSequenceComponent_Conditional_53_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 9)(55, "div", 15)(56, "label", 24);
      \u0275\u0275text(57, "Cycling ");
      \u0275\u0275elementStart(58, "span", 12);
      \u0275\u0275text(59, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(60, "input", 25);
      \u0275\u0275conditionalCreate(61, CodeSequenceComponent_Conditional_61_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 26)(63, "button", 27);
      \u0275\u0275conditionalCreate(64, CodeSequenceComponent_Conditional_64_Template, 2, 0)(65, CodeSequenceComponent_Conditional_65_Template, 1, 0);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.sequenceData ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", ctx.sequenceData);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.successMessage && !ctx.sequenceData ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.sequenceForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.nameEn == null ? null : ctx.nameEn.invalid) && (ctx.nameEn == null ? null : ctx.nameEn.touched) ? 23 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.startWith == null ? null : ctx.startWith.invalid) && (ctx.startWith == null ? null : ctx.startWith.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.startWith == null ? null : ctx.startWith.invalid) && (ctx.startWith == null ? null : ctx.startWith.touched) ? 31 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.currentValue == null ? null : ctx.currentValue.invalid) && (ctx.currentValue == null ? null : ctx.currentValue.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.currentValue == null ? null : ctx.currentValue.invalid) && (ctx.currentValue == null ? null : ctx.currentValue.touched) ? 38 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.minValue == null ? null : ctx.minValue.invalid) && (ctx.minValue == null ? null : ctx.minValue.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.minValue == null ? null : ctx.minValue.invalid) && (ctx.minValue == null ? null : ctx.minValue.touched) ? 46 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("invalid", (ctx.maxValue == null ? null : ctx.maxValue.invalid) && (ctx.maxValue == null ? null : ctx.maxValue.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.maxValue == null ? null : ctx.maxValue.invalid) && (ctx.maxValue == null ? null : ctx.maxValue.touched) ? 53 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("invalid", (ctx.isCycling == null ? null : ctx.isCycling.invalid) && (ctx.isCycling == null ? null : ctx.isCycling.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.isCycling == null ? null : ctx.isCycling.invalid) && (ctx.isCycling == null ? null : ctx.isCycling.touched) ? 61 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 64 : 65);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.code-sequence-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  transition: all 0.3s ease;\n}\n.card.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.success-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border-radius: 16px;\n  padding: 3rem;\n  text-align: center;\n  color: white;\n  box-shadow: 0 20px 60px rgba(16, 185, 129, 0.4);\n  animation: _ngcontent-%COMP%_slideIn 0.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  margin: 0 auto 1.5rem;\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.success-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.75rem;\n  margin-bottom: 2rem;\n}\n.sequence-details[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin: 2rem auto;\n  max-width: 500px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  opacity: 0.9;\n}\n.detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-weight: 700;\n}\n.countdown-display[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.countdown-display[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin-bottom: 1rem;\n  opacity: 0.95;\n}\n.countdown-timer[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: 700;\n  font-family: "Courier New", monospace;\n  background: rgba(255, 255, 255, 0.2);\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  animation: _ngcontent-%COMP%_countdown 1s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_countdown {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.countdown-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-top: 0.5rem;\n  opacity: 0.9;\n}\n.btn-skip[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 0.75rem 2rem;\n  background: white;\n  color: #059669;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.btn-skip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);\n}\n.form[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\ninput[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\ninput.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .countdown-timer[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    width: 100px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=code-sequence.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeSequenceComponent, [{
    type: Component,
    args: [{ selector: "app-code-sequence", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], template: '<div class="code-sequence-container">\r\n    <div class="header">\r\n        <h2>Code Sequence</h2>\r\n        <p class="description">Configure sequence settings for code generation</p>\r\n    </div>\r\n\r\n    <div class="content">\r\n        <!-- Success Display with Countdown -->\r\n        @if (sequenceData) {\r\n        <div class="success-card">\r\n            <div class="success-icon">\u2713</div>\r\n            <h3>Sequence Created Successfully!</h3>\r\n\r\n            <div class="sequence-details">\r\n                <div class="detail-row">\r\n                    <span class="label">Name:</span>\r\n                    <span class="value">{{ sequenceData.nameEn }}</span>\r\n                </div>\r\n                <div class="detail-row">\r\n                    <span class="label">Start With:</span>\r\n                    <span class="value">{{ sequenceData.startWith }}</span>\r\n                </div>\r\n                <div class="detail-row">\r\n                    <span class="label">Range:</span>\r\n                    <span class="value">{{ sequenceData.minValue }} - {{ sequenceData.maxValue }}</span>\r\n                </div>\r\n                <div class="detail-row">\r\n                    <span class="label">Current Value:</span>\r\n                    <span class="value">{{ sequenceData.currentValue }}</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="countdown-display">\r\n                <p>Automatically proceeding to Code Generation in:</p>\r\n                <div class="countdown-timer">{{ countdown }}</div>\r\n                <p class="countdown-text">seconds</p>\r\n                <button class="btn btn-skip" (click)="skipToGeneration()">\r\n                    Skip & Continue Now\r\n                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n                        <path d="M5 12h14M12 5l7 7-7 7" />\r\n                    </svg>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        }\r\n\r\n        <!-- Form -->\r\n        <div class="card" [class.hidden]="sequenceData">\r\n            <h3>Sequence Configuration</h3>\r\n            <p>Define the sequence settings for auto-incrementing codes.</p>\r\n\r\n            @if (successMessage && !sequenceData) {\r\n            <div class="alert alert-success">{{ successMessage }}</div>\r\n            }\r\n\r\n            @if (errorMessage) {\r\n            <div class="alert alert-error">{{ errorMessage }}</div>\r\n            }\r\n\r\n            <form [formGroup]="sequenceForm" (ngSubmit)="onSubmit()" class="form">\r\n                <div class="form-row">\r\n                    <div class="form-group full-width">\r\n                        <label for="nameEn">Sequence Name <span class="required">*</span></label>\r\n                        <input id="nameEn" type="text" formControlName="nameEn" placeholder="e.g., SEQ"\r\n                            [class.invalid]="nameEn?.invalid && nameEn?.touched" />\r\n                        @if (nameEn?.invalid && nameEn?.touched) {\r\n                        <span class="error-text">Sequence name is required</span>\r\n                        }\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-row">\r\n                    <div class="form-group">\r\n                        <label for="startWith">Start With <span class="required">*</span></label>\r\n                        <input id="startWith" type="number" formControlName="startWith" placeholder="100"\r\n                            [class.invalid]="startWith?.invalid && startWith?.touched" />\r\n                        @if (startWith?.invalid && startWith?.touched) {\r\n                        <span class="error-text">Start value is required</span>\r\n                        }\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="currentValue">Current Value <span class="required">*</span></label>\r\n                        <input id="currentValue" type="number" formControlName="currentValue" placeholder="100"\r\n                            [class.invalid]="currentValue?.invalid && currentValue?.touched" />\r\n                        @if (currentValue?.invalid && currentValue?.touched) {\r\n                        <span class="error-text">Current value is required</span>\r\n                        }\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-row">\r\n                    <div class="form-group">\r\n                        <label for="minValue">Minimum Value <span class="required">*</span></label>\r\n                        <input id="minValue" type="number" formControlName="minValue" placeholder="100"\r\n                            [class.invalid]="minValue?.invalid && minValue?.touched" />\r\n                        @if (minValue?.invalid && minValue?.touched) {\r\n                        <span class="error-text">Minimum value is required</span>\r\n                        }\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                        <label for="maxValue">Maximum Value <span class="required">*</span></label>\r\n                        <input id="maxValue" type="number" formControlName="maxValue" placeholder="9999"\r\n                            [class.invalid]="maxValue?.invalid && maxValue?.touched" />\r\n                        @if (maxValue?.invalid && maxValue?.touched) {\r\n                        <span class="error-text">Maximum value is required</span>\r\n                        }\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-row">\r\n                    <div class="form-group">\r\n                        <label for="isCycling">Cycling <span class="required">*</span></label>\r\n                        <input id="isCycling" type="number" formControlName="isCycling" placeholder="0"\r\n                            [class.invalid]="isCycling?.invalid && isCycling?.touched" />\r\n                        @if (isCycling?.invalid && isCycling?.touched) {\r\n                        <span class="error-text">Cycling value is required</span>\r\n                        }\r\n                    </div>\r\n                </div>\r\n\r\n                <div class="form-actions">\r\n                    <button type="submit" class="btn btn-primary" [disabled]="isLoading">\r\n                        @if (isLoading) {\r\n                        <span class="spinner"></span>\r\n                        Creating...\r\n                        } @else {\r\n                        Create Sequence\r\n                        }\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>', styles: ['/* src/app/features/code-sequence/code-sequence.component.css */\n.code-sequence-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header {\n  margin-bottom: 2rem;\n}\n.header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.content {\n  max-width: 1200px;\n}\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  transition: all 0.3s ease;\n}\n.card.hidden {\n  display: none;\n}\n.card h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card > p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.success-card {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n  border-radius: 16px;\n  padding: 3rem;\n  text-align: center;\n  color: white;\n  box-shadow: 0 20px 60px rgba(16, 185, 129, 0.4);\n  animation: slideIn 0.6s ease-out;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.success-icon {\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  margin: 0 auto 1.5rem;\n  animation: pulse 2s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n.success-card h3 {\n  color: white;\n  font-size: 1.75rem;\n  margin-bottom: 2rem;\n}\n.sequence-details {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin: 2rem auto;\n  max-width: 500px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-row .label {\n  font-weight: 600;\n  opacity: 0.9;\n}\n.detail-row .value {\n  font-family: "Courier New", monospace;\n  font-weight: 700;\n}\n.countdown-display {\n  margin-top: 3rem;\n}\n.countdown-display p {\n  font-size: 1.125rem;\n  margin-bottom: 1rem;\n  opacity: 0.95;\n}\n.countdown-timer {\n  font-size: 4rem;\n  font-weight: 700;\n  font-family: "Courier New", monospace;\n  background: rgba(255, 255, 255, 0.2);\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  animation: countdown 1s ease-in-out infinite;\n}\n@keyframes countdown {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.countdown-text {\n  font-size: 1rem;\n  margin-top: 0.5rem;\n  opacity: 0.9;\n}\n.btn-skip {\n  margin-top: 2rem;\n  padding: 0.75rem 2rem;\n  background: white;\n  color: #059669;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n.btn-skip:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);\n}\n.form {\n  margin-top: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width {\n  grid-column: 1 / -1;\n}\nlabel {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required {\n  color: #ef4444;\n}\ninput {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\ninput:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid {\n  border-color: #ef4444;\n}\ninput.invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.error-text {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .countdown-timer {\n    font-size: 3rem;\n    width: 100px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=code-sequence.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: CodeTypeSequenceService }, { type: CodeGeneratorService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeSequenceComponent, { className: "CodeSequenceComponent", filePath: "src/app/features/code-sequence/code-sequence.component.ts", lineNumber: 15 });
})();
export {
  CodeSequenceComponent
};
//# sourceMappingURL=chunk-2IUBNCOF.mjs.map
