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
  forkJoin,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EMSVNVEL.js";

// src/app/core/services/code-type-setting.service.ts
var CodeTypeSettingService = class _CodeTypeSettingService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  createCodeTypeSetting(data) {
    return this.http.post(`${this.apiUrl}/CodeTypeSettings/Create`, data);
  }
  static \u0275fac = function CodeTypeSettingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeTypeSettingService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CodeTypeSettingService, factory: _CodeTypeSettingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeTypeSettingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/code-settings/code-settings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CodeSettingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function CodeSettingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function CodeSettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275domElement(1, "div", 8);
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Creating settings...");
    \u0275\u0275domElementEnd()();
  }
}
function CodeSettingsComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "div", 18)(2, "label");
    \u0275\u0275text(3, "Code");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(4, "input", 19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 18)(6, "label");
    \u0275\u0275text(7, "Sort Order");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(8, "input", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 18)(10, "label");
    \u0275\u0275text(11, "Separator");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(12, "input", 19);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div", 18)(14, "label");
    \u0275\u0275text(15, "Required");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(16, "input", 19);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const setting_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", setting_r3.code);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", setting_r3.sortOrder);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", setting_r3.separator);
    \u0275\u0275advance(4);
    \u0275\u0275domProperty("value", setting_r3.isRequired ? "Yes" : "No");
  }
}
function CodeSettingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, CodeSettingsComponent_Conditional_15_For_2_Template, 17, 4, "div", 10, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 11)(4, "h4");
    \u0275\u0275text(5, "Generated Code Pattern");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 13);
    \u0275\u0275text(9, " This is the pattern that will be used for code generation ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "div", 14)(11, "button", 15);
    \u0275\u0275domListener("click", function CodeSettingsComponent_Conditional_15_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSave());
    });
    \u0275\u0275text(12, " Continue to Sequence ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(13, "svg", 16);
    \u0275\u0275domElement(14, "path", 17);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.settings());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.generatedPattern(), " ");
  }
}
var CodeSettingsComponent = class _CodeSettingsComponent {
  codeTypeSettingService;
  codeGeneratorService;
  router;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  settings = signal([], ...ngDevMode ? [{ debugName: "settings" }] : []);
  generatedPattern = signal("", ...ngDevMode ? [{ debugName: "generatedPattern" }] : []);
  codeTypeId;
  detailIds = [];
  savedCodes = [];
  constructor(codeTypeSettingService, codeGeneratorService, router) {
    this.codeTypeSettingService = codeTypeSettingService;
    this.codeGeneratorService = codeGeneratorService;
    this.router = router;
  }
  ngOnInit() {
    const state = this.codeGeneratorService.getState();
    this.codeTypeId = state.codeTypeId;
    this.detailIds = state.codeAttributeDetailIds;
    if (!this.codeTypeId || this.detailIds.length !== 3) {
      this.errorMessage = "Missing required data. Please complete previous steps.";
      return;
    }
    this.savedCodes = this.getSavedCodesFromDetails();
    this.createSettings();
  }
  getSavedCodesFromDetails() {
    return ["XYZ", "ABC", "VBV"];
  }
  createSettings() {
    this.isLoading = true;
    const settingRequests = this.detailIds.map((detailId, index) => {
      return this.codeTypeSettingService.createCodeTypeSetting({
        codeTypeId: this.codeTypeId,
        attributeDetailId: detailId,
        sortOrder: index + 1,
        separator: "-",
        isRequired: true
      });
    });
    forkJoin(settingRequests).subscribe({
      next: (responses) => {
        const settingsData = responses.map((r, i) => ({
          id: r.data.id,
          code: this.savedCodes[i],
          sortOrder: r.data.sortOrder,
          separator: r.data.separator,
          isRequired: r.data.isRequired
        }));
        this.settings.set(settingsData);
        this.generatedPattern.set(this.savedCodes.join("-"));
        this.isLoading = false;
        this.successMessage = "Settings created successfully!";
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || "Failed to create settings. Please try again.";
      }
    });
  }
  onSave() {
    this.codeGeneratorService.completeStep(4);
    this.router.navigate(["/code-sequence"]);
  }
  static \u0275fac = function CodeSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeSettingsComponent)(\u0275\u0275directiveInject(CodeTypeSettingService), \u0275\u0275directiveInject(CodeGeneratorService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CodeSettingsComponent, selectors: [["app-code-settings"]], decls: 16, vars: 4, consts: [[1, "code-settings-container"], [1, "header"], [1, "description"], [1, "content"], [1, "card"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "loading-container"], [1, "spinner-large"], [1, "settings-display"], [1, "setting-row"], [1, "pattern-preview"], [1, "pattern-display"], [1, "pattern-description"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "setting-field"], ["type", "text", "readonly", "", 1, "readonly-input", 3, "value"], ["type", "number", "readonly", "", 1, "readonly-input", 3, "value"]], template: function CodeSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Code Settings");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p", 2);
      \u0275\u0275text(5, "Review and confirm code structure settings");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 3)(7, "div", 4)(8, "h3");
      \u0275\u0275text(9, "Settings Configuration");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "p");
      \u0275\u0275text(11, "The following settings have been auto-configured based on your details.");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(12, CodeSettingsComponent_Conditional_12_Template, 2, 1, "div", 5);
      \u0275\u0275conditionalCreate(13, CodeSettingsComponent_Conditional_13_Template, 2, 1, "div", 6);
      \u0275\u0275conditionalCreate(14, CodeSettingsComponent_Conditional_14_Template, 4, 0, "div", 7);
      \u0275\u0275conditionalCreate(15, CodeSettingsComponent_Conditional_15_Template, 15, 1);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.successMessage ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading && ctx.settings().length > 0 ? 15 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n\n.code-settings-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.spinner-large[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 1rem;\n}\n.settings-display[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.setting-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  border: 1px solid #e5e7eb;\n}\n.setting-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.setting-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.readonly-input[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  background: #ffffff;\n  color: #374151;\n  font-weight: 600;\n  cursor: not-allowed;\n}\n.pattern-preview[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #e0f2fe 100%);\n  border-radius: 12px;\n  border: 2px solid #0ea5e9;\n}\n.pattern-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #075985;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.pattern-display[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0c4a6e;\n  font-family: "Courier New", monospace;\n  text-align: center;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 8px;\n  border: 2px dashed #0ea5e9;\n  margin-bottom: 1rem;\n  letter-spacing: 2px;\n}\n.pattern-description[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #075985;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .setting-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pattern-display[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=code-settings.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-code-settings", standalone: true, imports: [CommonModule], template: `<div class="code-settings-container">\r
    <div class="header">\r
        <h2>Code Settings</h2>\r
        <p class="description">Review and confirm code structure settings</p>\r
    </div>\r
\r
    <div class="content">\r
        <div class="card">\r
            <h3>Settings Configuration</h3>\r
            <p>The following settings have been auto-configured based on your details.</p>\r
\r
            @if (successMessage) {\r
            <div class="alert alert-success">{{ successMessage }}</div>\r
            }\r
\r
            @if (errorMessage) {\r
            <div class="alert alert-error">{{ errorMessage }}</div>\r
            }\r
\r
            @if (isLoading) {\r
            <div class="loading-container">\r
                <div class="spinner-large"></div>\r
                <p>Creating settings...</p>\r
            </div>\r
            }\r
\r
            @if (!isLoading && settings().length > 0) {\r
            <div class="settings-display">\r
                @for (setting of settings(); track setting.id) {\r
                <div class="setting-row">\r
                    <div class="setting-field">\r
                        <label>Code</label>\r
                        <input type="text" [value]="setting.code" readonly class="readonly-input" />\r
                    </div>\r
                    <div class="setting-field">\r
                        <label>Sort Order</label>\r
                        <input type="number" [value]="setting.sortOrder" readonly class="readonly-input" />\r
                    </div>\r
                    <div class="setting-field">\r
                        <label>Separator</label>\r
                        <input type="text" [value]="setting.separator" readonly class="readonly-input" />\r
                    </div>\r
                    <div class="setting-field">\r
                        <label>Required</label>\r
                        <input type="text" [value]="setting.isRequired ? 'Yes' : 'No'" readonly\r
                            class="readonly-input" />\r
                    </div>\r
                </div>\r
                }\r
            </div>\r
\r
            <div class="pattern-preview">\r
                <h4>Generated Code Pattern</h4>\r
                <div class="pattern-display">\r
                    {{ generatedPattern() }}\r
                </div>\r
                <p class="pattern-description">\r
                    This is the pattern that will be used for code generation\r
                </p>\r
            </div>\r
\r
            <div class="form-actions">\r
                <button class="btn btn-primary" (click)="onSave()">\r
                    Continue to Sequence\r
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                        <path d="M5 12h14M12 5l7 7-7 7" />\r
                    </svg>\r
                </button>\r
            </div>\r
            }\r
        </div>\r
    </div>\r
</div>`, styles: ['/* src/app/features/code-settings/code-settings.component.css */\n.code-settings-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.header {\n  margin-bottom: 2rem;\n}\n.header h2 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.description {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.content {\n  max-width: 1200px;\n}\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.card h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a202c;\n  margin-bottom: 0.5rem;\n}\n.card > p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.alert {\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-success {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n}\n.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.loading-container {\n  text-align: center;\n  padding: 3rem;\n}\n.spinner-large {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 0 auto 1rem;\n}\n.settings-display {\n  margin: 2rem 0;\n}\n.setting-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  padding: 1.5rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  border: 1px solid #e5e7eb;\n}\n.setting-field {\n  display: flex;\n  flex-direction: column;\n}\n.setting-field label {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.readonly-input {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 1rem;\n  background: #ffffff;\n  color: #374151;\n  font-weight: 600;\n  cursor: not-allowed;\n}\n.pattern-preview {\n  margin: 2rem 0;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f9ff 0%,\n      #e0f2fe 100%);\n  border-radius: 12px;\n  border: 2px solid #0ea5e9;\n}\n.pattern-preview h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #075985;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.pattern-display {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #0c4a6e;\n  font-family: "Courier New", monospace;\n  text-align: center;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 8px;\n  border: 2px dashed #0ea5e9;\n  margin-bottom: 1rem;\n  letter-spacing: 2px;\n}\n.pattern-description {\n  text-align: center;\n  color: #075985;\n  font-size: 0.875rem;\n  margin: 0;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .setting-row {\n    grid-template-columns: 1fr;\n  }\n  .pattern-display {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=code-settings.component.css.map */\n'] }]
  }], () => [{ type: CodeTypeSettingService }, { type: CodeGeneratorService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CodeSettingsComponent, { className: "CodeSettingsComponent", filePath: "src/app/features/code-settings/code-settings.component.ts", lineNumber: 23 });
})();
export {
  CodeSettingsComponent
};
//# sourceMappingURL=chunk-A2OIJIYB.js.map
