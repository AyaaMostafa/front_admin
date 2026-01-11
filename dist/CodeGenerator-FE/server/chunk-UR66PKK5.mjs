import './polyfills.server.mjs';
import {
  RouterLink
} from "./chunk-PMG2SGER.mjs";
import "./chunk-TLB5TFXO.mjs";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-BOLVHABB.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/features/landing/landing.component.ts
var LandingComponent = class _LandingComponent {
  static \u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], decls: 11, vars: 0, consts: [[1, "landing-container"], [1, "hero-section"], [1, "tagline"], [1, "cta-buttons"], ["routerLink", "/auth/login", 1, "btn", "btn-primary"], ["routerLink", "/dashboard", 1, "btn", "btn-secondary"]], template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Code Generator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Build amazing applications faster with intelligent code generation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3)(7, "a", 4);
      \u0275\u0275text(8, "Get Started");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 5);
      \u0275\u0275text(10, "View Dashboard");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.landing-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.hero-section[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.tagline[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: transform 0.2s, box-shadow 0.2s;\n  display: inline-block;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid white;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .tagline[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: true, imports: [CommonModule, RouterLink], template: `
    <div class="landing-container">
      <div class="hero-section">
        <h1>Code Generator</h1>
        <p class="tagline">Build amazing applications faster with intelligent code generation</p>
        <div class="cta-buttons">
          <a routerLink="/auth/login" class="btn btn-primary">Get Started</a>
          <a routerLink="/dashboard" class="btn btn-secondary">View Dashboard</a>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;8287f851cbeb1b896fb624e133c1614bd13181537484e8a03022b4e4f40149c7;D:/Angular/Coder-FE/CodeGenerator-FE/src/app/features/landing/landing.component.ts */\n.landing-container {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.hero-section {\n  text-align: center;\n  color: white;\n}\nh1 {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n.tagline {\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n}\n.cta-buttons {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn {\n  padding: 1rem 2rem;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: transform 0.2s, box-shadow 0.2s;\n  display: inline-block;\n}\n.btn-primary {\n  background: white;\n  color: #667eea;\n}\n.btn-secondary {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid white;\n}\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  h1 {\n    font-size: 2.5rem;\n  }\n  .tagline {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=landing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/features/landing/landing.component.ts", lineNumber: 92 });
})();
export {
  LandingComponent
};
//# sourceMappingURL=chunk-UR66PKK5.mjs.map
