import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-EMSVNVEL.js";

// src/app/features/settings/settings.component.ts
var SettingsComponent = class _SettingsComponent {
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 5, vars: 0, consts: [[1, "settings-container"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Settings");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Configure your application preferences here.");
      \u0275\u0275domElementEnd()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n.settings-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #1a202c;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule], template: '<div class="settings-container">\r\n    <h1>Settings</h1>\r\n    <p>Configure your application preferences here.</p>\r\n</div>', styles: ["/* src/app/features/settings/settings.component.css */\n.settings-container {\n  padding: 2rem;\n}\nh1 {\n  font-size: 2rem;\n  color: #1a202c;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 11 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-HZQ5DEXF.js.map
