import {
  CodeGeneratorService
} from "./chunk-FZF4RZXG.js";
import {
  Router,
  RouterLink,
  RouterLinkActive
} from "./chunk-DCKXGUGL.js";
import "./chunk-6MNRTQKI.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-EMSVNVEL.js";

// src/app/shared/components/header/header.component.ts
var HeaderComponent = class _HeaderComponent {
  toggleSidebar = new EventEmitter();
  isDarkMode = signal(false, ...ngDevMode ? [{ debugName: "isDarkMode" }] : []);
  notificationCount = signal(4, ...ngDevMode ? [{ debugName: "notificationCount" }] : []);
  userName = signal("Ashton Cox", ...ngDevMode ? [{ debugName: "userName" }] : []);
  userRole = signal("Web Developer", ...ngDevMode ? [{ debugName: "userRole" }] : []);
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  toggleDarkMode() {
    this.isDarkMode.update((mode) => !mode);
  }
  onSearch(event) {
    const target = event.target;
    console.log("Search:", target.value);
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { toggleSidebar: "toggleSidebar" }, decls: 36, vars: 5, consts: [[1, "header"], [1, "header-container"], [1, "header-left"], ["aria-label", "Toggle sidebar", 1, "menu-toggle", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], ["routerLink", "/", 1, "logo"], [1, "logo-icon"], ["width", "32", "height", "32", "viewBox", "0 0 32 32"], ["cx", "16", "cy", "16", "r", "14", "fill", "#06b6d4"], ["d", "M12 10 L20 16 L12 22 Z", "fill", "white"], [1, "logo-text"], [1, "header-center"], [1, "search-container"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Search...", 1, "search-input", 3, "input"], [1, "header-right"], ["aria-label", "Fullscreen", 1, "icon-button"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"], [1, "user-profile"], [1, "user-avatar"], [3, "src", "alt"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["aria-label", "User menu", 1, "icon-button"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "6 9 12 15 18 9"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_3_listener() {
        return ctx.onToggleSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "line", 5)(6, "line", 6)(7, "line", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "a", 8)(9, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 10);
      \u0275\u0275element(11, "circle", 11)(12, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "span", 13);
      \u0275\u0275text(14, "nowa");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 14)(16, "div", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 16);
      \u0275\u0275element(18, "circle", 17)(19, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "input", 19);
      \u0275\u0275listener("input", function HeaderComponent_Template_input_input_20_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 20)(22, "button", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 22);
      \u0275\u0275element(24, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "div", 24)(26, "div", 25);
      \u0275\u0275element(27, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 27)(29, "div", 28);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 29);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 31);
      \u0275\u0275element(35, "polyline", 32);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275property("src", \u0275\u0275interpolate1("https://ui-avatars.com/api/?name=", ctx.userName(), "&background=06b6d4&color=fff"), \u0275\u0275sanitizeUrl)("alt", ctx.userName());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userRole());
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);\n}\n.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1.5rem;\n  gap: 1.5rem;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  min-width: 200px;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.menu-toggle[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: inherit;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.header-center[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 600px;\n}\n.search-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.625rem 1rem 0.625rem 2.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: #111827;\n  background: #f9fafb;\n  transition: all 0.2s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #06b6d4;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.icon-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: all 0.2s;\n  position: relative;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.icon-button.active[_ngcontent-%COMP%] {\n  color: #06b6d4;\n  background: rgba(6, 182, 212, 0.1);\n}\n.flag-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.notification-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notification-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n  background: #ef4444;\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 0.125rem 0.375rem;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n  line-height: 1.2;\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.2s;\n  margin-left: 0.5rem;\n}\n.user-profile[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n}\n.user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.2;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  line-height: 1.2;\n}\n.header-secondary[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  background: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n}\n.breadcrumb-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.breadcrumb-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n@media (max-width: 768px) {\n  .header-center[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-secondary[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  .icon-button[_ngcontent-%COMP%] {\n    padding: 0.375rem;\n  }\n}\n@media (max-width: 480px) {\n  .logo-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-right[_ngcontent-%COMP%]    > .icon-button[_ngcontent-%COMP%]:not(.notification-button) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule, RouterLink], template: '<header class="header">\r\n    <div class="header-container">\r\n        <!-- Left Section: Logo & Menu Toggle -->\r\n        <div class="header-left">\r\n            <button class="menu-toggle" (click)="onToggleSidebar()" aria-label="Toggle sidebar">\r\n                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n                    <line x1="3" y1="12" x2="21" y2="12"></line>\r\n                    <line x1="3" y1="6" x2="21" y2="6"></line>\r\n                    <line x1="3" y1="18" x2="21" y2="18"></line>\r\n                </svg>\r\n            </button>\r\n\r\n            <a routerLink="/" class="logo">\r\n                <div class="logo-icon">\r\n                    <svg width="32" height="32" viewBox="0 0 32 32">\r\n                        <circle cx="16" cy="16" r="14" fill="#06b6d4" />\r\n                        <path d="M12 10 L20 16 L12 22 Z" fill="white" />\r\n                    </svg>\r\n                </div>\r\n                <span class="logo-text">nowa</span>\r\n            </a>\r\n        </div>\r\n\r\n        <!-- Center Section: Search -->\r\n        <div class="header-center">\r\n            <div class="search-container">\r\n                <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r\n                    stroke-width="2">\r\n                    <circle cx="11" cy="11" r="8"></circle>\r\n                    <path d="m21 21-4.35-4.35"></path>\r\n                </svg>\r\n                <input type="text" class="search-input" placeholder="Search..." (input)="onSearch($event)" />\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Right Section: Actions & User -->\r\n        <div class="header-right">\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <!-- Fullscreen -->\r\n            <button class="icon-button" aria-label="Fullscreen">\r\n                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n                    <path\r\n                        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3">\r\n                    </path>\r\n                </svg>\r\n            </button>\r\n\r\n            <!-- User Profile -->\r\n            <div class="user-profile">\r\n                <div class="user-avatar">\r\n                    <img src="https://ui-avatars.com/api/?name={{ userName() }}&background=06b6d4&color=fff"\r\n                        [alt]="userName()" />\r\n                </div>\r\n                <div class="user-info">\r\n                    <div class="user-name">{{ userName() }}</div>\r\n                    <div class="user-role">{{ userRole() }}</div>\r\n                </div>\r\n                <button class="icon-button" aria-label="User menu">\r\n                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n                        <polyline points="6 9 12 15 18 9"></polyline>\r\n                    </svg>\r\n                </button>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</header>\r\n', styles: ["/* src/app/shared/components/header/header.component.css */\n.header {\n  background: #ffffff;\n  border-bottom: 1px solid #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);\n}\n.header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1.5rem;\n  gap: 1.5rem;\n}\n.header-left {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  min-width: 200px;\n}\n.menu-toggle {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.menu-toggle:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: inherit;\n}\n.logo-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo-text {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n}\n.header-center {\n  flex: 1;\n  max-width: 600px;\n}\n.search-container {\n  position: relative;\n  width: 100%;\n}\n.search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  padding: 0.625rem 1rem 0.625rem 2.75rem;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: #111827;\n  background: #f9fafb;\n  transition: all 0.2s;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #06b6d4;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);\n}\n.search-input::placeholder {\n  color: #9ca3af;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.icon-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  transition: all 0.2s;\n  position: relative;\n}\n.icon-button:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.icon-button.active {\n  color: #06b6d4;\n  background: rgba(6, 182, 212, 0.1);\n}\n.flag-icon {\n  font-size: 1.25rem;\n}\n.notification-button {\n  position: relative;\n}\n.notification-badge {\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n  background: #ef4444;\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 0.125rem 0.375rem;\n  border-radius: 10px;\n  min-width: 18px;\n  text-align: center;\n  line-height: 1.2;\n}\n.user-profile {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.2s;\n  margin-left: 0.5rem;\n}\n.user-profile:hover {\n  background: #f3f4f6;\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n}\n.user-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.user-name {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.2;\n}\n.user-role {\n  font-size: 0.75rem;\n  color: #6b7280;\n  line-height: 1.2;\n}\n.header-secondary {\n  padding: 0.5rem 1.5rem;\n  background: #f9fafb;\n  border-top: 1px solid #e5e7eb;\n}\n.breadcrumb-container {\n  display: flex;\n  align-items: center;\n}\n.breadcrumb-text {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n@media (max-width: 768px) {\n  .header-center {\n    display: none;\n  }\n  .user-info {\n    display: none;\n  }\n  .header-secondary {\n    display: none;\n  }\n  .header-right {\n    gap: 0.25rem;\n  }\n  .icon-button {\n    padding: 0.375rem;\n  }\n}\n@media (max-width: 480px) {\n  .logo-text {\n    display: none;\n  }\n  .header-right > .icon-button:not(.notification-button) {\n    display: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], null, { toggleSidebar: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/shared/components/header/header.component.ts", lineNumber: 12 });
})();

// src/app/shared/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  appName = "Nowa";
  companyName = "Spruko";
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 14, vars: 3, consts: [[1, "footer"], [1, "footer-container"], [1, "footer-content"], [1, "copyright"], [1, "brand-name"], [1, "heart"], ["href", "#", 1, "company-link"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementStart(5, "span", 4);
      \u0275\u0275text(6);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(7, ". Designed with ");
      \u0275\u0275domElementStart(8, "span", 5);
      \u0275\u0275text(9, "\u2764\uFE0F");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(10, " by ");
      \u0275\u0275domElementStart(11, "a", 6);
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(13, " All rights reserved ");
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Copyright \xA9 ", ctx.currentYear, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.appName);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.companyName);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-top: 1px solid #e5e7eb;\n  padding: 1.5rem 0;\n  margin-top: auto;\n}\n.footer-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.footer-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.copyright[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.heart[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 1rem;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_heartbeat 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_heartbeat {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.company-link[_ngcontent-%COMP%] {\n  color: #06b6d4;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n.company-link[_ngcontent-%COMP%]:hover {\n  color: #0891b2;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  .copyright[_ngcontent-%COMP%] {\n    font-size: 0.8125rem;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule], template: '<footer class="footer">\r\n    <div class="footer-container">\r\n        <div class="footer-content">\r\n            <p class="copyright">\r\n                Copyright \xA9 {{ currentYear }}\r\n                <span class="brand-name">{{ appName }}</span>.\r\n                Designed with\r\n                <span class="heart">\u2764\uFE0F</span>\r\n                by\r\n                <a href="#" class="company-link">{{ companyName }}</a>\r\n                All rights reserved\r\n            </p>\r\n        </div>\r\n    </div>\r\n</footer>', styles: ["/* src/app/shared/components/footer/footer.component.css */\n.footer {\n  background: #ffffff;\n  border-top: 1px solid #e5e7eb;\n  padding: 1.5rem 0;\n  margin-top: auto;\n}\n.footer-container {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n}\n.footer-content {\n  text-align: center;\n}\n.copyright {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.6;\n}\n.brand-name {\n  font-weight: 600;\n  color: #111827;\n}\n.heart {\n  color: #ef4444;\n  font-size: 1rem;\n  display: inline-block;\n  animation: heartbeat 1.5s ease-in-out infinite;\n}\n@keyframes heartbeat {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n.company-link {\n  color: #06b6d4;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n.company-link:hover {\n  color: #0891b2;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .footer {\n    padding: 1rem 0;\n  }\n  .copyright {\n    font-size: 0.8125rem;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/components/footer/footer.component.ts", lineNumber: 11 });
})();

// src/app/shared/components/sidebar/sidebar.component.ts
var _c0 = (a0) => ({ exact: a0 });
var _forTrack0 = ($index, $item) => $item.label;
function SidebarComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, "nowa");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_For_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r1.label);
  }
}
function SidebarComponent_For_11_Conditional_2_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 16);
    \u0275\u0275element(1, "path");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("d", ctx_r3.getIcon(item_r3.icon));
  }
}
function SidebarComponent_For_11_Conditional_2_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
}
function SidebarComponent_For_11_Conditional_2_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function SidebarComponent_For_11_Conditional_2_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.badge);
  }
}
function SidebarComponent_For_11_Conditional_2_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 22);
    \u0275\u0275element(1, "polyline", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("expanded", item_r3.expanded);
  }
}
function SidebarComponent_For_11_Conditional_2_For_1_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275element(1, "span", 25);
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subItem_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", subItem_r5.route || null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subItem_r5.label);
  }
}
function SidebarComponent_For_11_Conditional_2_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, SidebarComponent_For_11_Conditional_2_For_1_Conditional_7_For_2_Template, 4, 2, "a", 24, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r3.children);
  }
}
function SidebarComponent_For_11_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "a", 15);
    \u0275\u0275listener("click", function SidebarComponent_For_11_Conditional_2_For_1_Template_a_click_1_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(item_r3.children ? ctx_r3.toggleMenuItem(item_r3) : null);
    });
    \u0275\u0275conditionalCreate(2, SidebarComponent_For_11_Conditional_2_For_1_Conditional_2_Template, 2, 1, ":svg:svg", 16)(3, SidebarComponent_For_11_Conditional_2_For_1_Conditional_3_Template, 1, 0, "span", 17);
    \u0275\u0275conditionalCreate(4, SidebarComponent_For_11_Conditional_2_For_1_Conditional_4_Template, 2, 1, "span", 18);
    \u0275\u0275conditionalCreate(5, SidebarComponent_For_11_Conditional_2_For_1_Conditional_5_Template, 2, 1, "span", 19);
    \u0275\u0275conditionalCreate(6, SidebarComponent_For_11_Conditional_2_For_1_Conditional_6_Template, 2, 2, ":svg:svg", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SidebarComponent_For_11_Conditional_2_For_1_Conditional_7_Template, 3, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-children", item_r3.children && item_r3.children.length > 0);
    \u0275\u0275property("routerLink", item_r3.route || null)("routerLinkActiveOptions", \u0275\u0275pureFunction1(9, _c0, item_r3.route === "/"));
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.icon ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.isCollapsed ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.badge && !ctx_r3.isCollapsed ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.children && item_r3.children.length > 0 && !ctx_r3.isCollapsed ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.children && item_r3.children.length > 0 && item_r3.expanded && !ctx_r3.isCollapsed ? 7 : -1);
  }
}
function SidebarComponent_For_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SidebarComponent_For_11_Conditional_2_For_1_Template, 8, 11, "div", 14, _forTrack0);
  }
  if (rf & 2) {
    const section_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(section_r1.children);
  }
}
function SidebarComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275conditionalCreate(1, SidebarComponent_For_11_Conditional_1_Template, 2, 1, "div", 13);
    \u0275\u0275conditionalCreate(2, SidebarComponent_For_11_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.isCollapsed && section_r1.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r1.children ? 2 : -1);
  }
}
function SidebarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3, "Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5, "1.0.0");
    \u0275\u0275elementEnd()()();
  }
}
var SidebarComponent = class _SidebarComponent {
  isCollapsed = false;
  menuItems = signal([
    {
      label: "MAIN",
      icon: "",
      children: [
        {
          label: "Dashboards",
          icon: "home",
          expanded: true,
          children: [
            { label: "Code Generator", icon: "", route: "/dashboard" }
          ]
        }
      ]
    },
    {
      label: "WEB APPS",
      icon: "",
      children: [
        { label: "Apps", icon: "grid", route: "/apps" },
        { label: "Elements", icon: "layers", route: "/elements" },
        { label: "Advanced UI", icon: "box", route: "/advanced-ui" }
      ]
    },
    {
      label: "PAGES",
      icon: "",
      children: [
        { label: "Pages", icon: "file-text", route: "/pages" },
        { label: "Utilities", icon: "tool", route: "/utilities" }
      ]
    },
    {
      label: "GENERAL",
      icon: "",
      children: [
        { label: "Icons", icon: "star", route: "/icons" },
        { label: "Charts", icon: "bar-chart", route: "/charts" }
      ]
    },
    {
      label: "MULTI LEVELS",
      icon: "",
      children: [
        {
          label: "Menu-levels",
          icon: "menu",
          children: [
            { label: "Level 1.1", icon: "", route: "/level-1-1" },
            { label: "Level 1.2", icon: "", route: "/level-1-2" }
          ]
        }
      ]
    }
  ], ...ngDevMode ? [{ debugName: "menuItems" }] : []);
  toggleMenuItem(item) {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    }
  }
  getIcon(iconName) {
    const icons = {
      "home": "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      "grid": "M10 3H3v7h7V3zM21 3h-7v7h7V3zM21 14h-7v7h7v-7zM10 14H3v7h7v-7z",
      "layers": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      "box": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      "file-text": "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
      "tool": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      "star": "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      "bar-chart": "M18 20V10M12 20V4M6 20v-6",
      "menu": "M3 12h18M3 6h18M3 18h18"
    };
    return icons[iconName] || "";
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { isCollapsed: "isCollapsed" }, decls: 14, vars: 4, consts: [[1, "sidebar"], [1, "sidebar-header"], [1, "sidebar-logo"], [1, "logo-icon"], ["width", "32", "height", "32", "viewBox", "0 0 32 32"], ["cx", "16", "cy", "16", "r", "14", "fill", "#06b6d4"], ["d", "M12 10 L20 16 L12 22 Z", "fill", "white"], [1, "logo-text"], [1, "sidebar-nav"], [1, "nav-wrapper"], [1, "nav-section"], [1, "sidebar-footer"], [1, "footer-content"], [1, "section-header"], [1, "nav-item-wrapper"], ["routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLink", "routerLinkActiveOptions"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "nav-icon"], [1, "nav-icon-placeholder"], [1, "nav-label"], [1, "nav-badge"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "nav-arrow", 3, "expanded"], [1, "sub-menu"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "nav-arrow"], ["points", "9 18 15 12 9 6"], ["routerLinkActive", "active", 1, "sub-item", 3, "routerLink"], [1, "sub-item-dot"], [1, "sub-item-label"], [1, "version-info"], [1, "version-label"], [1, "version-number"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "circle", 5)(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, SidebarComponent_Conditional_7_Template, 2, 0, "span", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "nav", 8)(9, "div", 9);
      \u0275\u0275repeaterCreate(10, SidebarComponent_For_11_Template, 3, 2, "div", 10, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275conditionalCreate(13, SidebarComponent_Conditional_13_Template, 6, 0, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed", ctx.isCollapsed);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(!ctx.isCollapsed ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.menuItems());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.isCollapsed ? 13 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ['\n\n.sidebar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-right: 1px solid #e5e7eb;\n  height: 100vh;\n  width: 260px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s ease;\n  z-index: 999;\n  overflow-x: hidden;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #e5e7eb;\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.logo-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: #2bb673;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  white-space: nowrap;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0.5rem 0;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #d1d5db;\n  border-radius: 4px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #9ca3af;\n}\n.nav-wrapper[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n}\n.nav-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #9ca3af;\n  padding: 0.5rem 0.75rem;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.collapsed[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.nav-item-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.625rem 0.75rem;\n  border-radius: 8px;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  white-space: nowrap;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1);\n  color: #06b6d4;\n  font-weight: 600;\n}\n.nav-item.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 70%;\n  background: #06b6d4;\n  border-radius: 0 3px 3px 0;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n}\n.nav-icon-placeholder[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-badge[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 0.125rem 0.5rem;\n  border-radius: 12px;\n  line-height: 1.2;\n}\n.nav-arrow[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  margin-left: auto;\n}\n.nav-arrow.expanded[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.sub-menu[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  margin-left: 2rem;\n  padding-left: 0.75rem;\n  border-left: 2px solid #e5e7eb;\n}\n.sub-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0.5rem 0.625rem;\n  border-radius: 6px;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 0.125rem;\n}\n.sub-item[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.sub-item.active[_ngcontent-%COMP%] {\n  background: rgba(6, 182, 212, 0.1);\n  color: #06b6d4;\n  font-weight: 600;\n}\n.sub-item-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #d1d5db;\n  flex-shrink: 0;\n}\n.sub-item.active[_ngcontent-%COMP%]   .sub-item-dot[_ngcontent-%COMP%] {\n  background: #06b6d4;\n}\n.sub-item-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-top: 1px solid #e5e7eb;\n}\n.footer-content[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background: #f9fafb;\n  border-radius: 8px;\n}\n.version-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n}\n.version-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-weight: 500;\n}\n.version-number[_ngcontent-%COMP%] {\n  color: #111827;\n  font-weight: 600;\n}\n.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], \n.collapsed[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%], \n.collapsed[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%], \n.collapsed[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%], \n.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n.collapsed[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.625rem;\n}\n.collapsed[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    box-shadow: none;\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: `<aside class="sidebar" [class.collapsed]="isCollapsed">\r
    <!-- Sidebar Header -->\r
    <div class="sidebar-header">\r
        <div class="sidebar-logo">\r
            <div class="logo-icon">\r
                <svg width="32" height="32" viewBox="0 0 32 32">\r
                    <circle cx="16" cy="16" r="14" fill="#06b6d4" />\r
                    <path d="M12 10 L20 16 L12 22 Z" fill="white" />\r
                </svg>\r
            </div>\r
            @if (!isCollapsed) {\r
            <span class="logo-text">nowa</span>\r
            }\r
        </div>\r
    </div>\r
\r
    <!-- Navigation Menu -->\r
    <nav class="sidebar-nav">\r
        <div class="nav-wrapper">\r
            @for (section of menuItems(); track section.label) {\r
            <div class="nav-section">\r
                <!-- Section Header -->\r
                @if (!isCollapsed && section.label) {\r
                <div class="section-header">{{ section.label }}</div>\r
                }\r
\r
                <!-- Section Items -->\r
                @if (section.children) {\r
                @for (item of section.children; track item.label) {\r
                <div class="nav-item-wrapper">\r
                    <!-- Main Item -->\r
                    <a [routerLink]="item.route || null" routerLinkActive="active"\r
                        [routerLinkActiveOptions]="{ exact: item.route === '/' }" class="nav-item"\r
                        [class.has-children]="item.children && item.children.length > 0"\r
                        (click)="item.children ? toggleMenuItem(item) : null">\r
                        <!-- Icon -->\r
                        @if (item.icon) {\r
                        <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"\r
                            stroke="currentColor" stroke-width="2">\r
                            <path [attr.d]="getIcon(item.icon)"></path>\r
                        </svg>\r
                        } @else {\r
                        <span class="nav-icon-placeholder"></span>\r
                        }\r
\r
                        <!-- Label -->\r
                        @if (!isCollapsed) {\r
                        <span class="nav-label">{{ item.label }}</span>\r
                        }\r
\r
                        <!-- Badge -->\r
                        @if (item.badge && !isCollapsed) {\r
                        <span class="nav-badge">{{ item.badge }}</span>\r
                        }\r
\r
                        <!-- Expand Arrow -->\r
                        @if (item.children && item.children.length > 0 && !isCollapsed) {\r
                        <svg class="nav-arrow" [class.expanded]="item.expanded" width="16" height="16"\r
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                            <polyline points="9 18 15 12 9 6"></polyline>\r
                        </svg>\r
                        }\r
                    </a>\r
\r
                    <!-- Sub Items -->\r
                    @if (item.children && item.children.length > 0 && item.expanded && !isCollapsed) {\r
                    <div class="sub-menu">\r
                        @for (subItem of item.children; track subItem.label) {\r
                        <a [routerLink]="subItem.route || null" routerLinkActive="active" class="sub-item">\r
                            <span class="sub-item-dot"></span>\r
                            <span class="sub-item-label">{{ subItem.label }}</span>\r
                        </a>\r
                        }\r
                    </div>\r
                    }\r
                </div>\r
                }\r
                }\r
            </div>\r
            }\r
        </div>\r
    </nav>\r
\r
    <!-- Sidebar Footer (Optional) -->\r
    <div class="sidebar-footer">\r
        @if (!isCollapsed) {\r
        <div class="footer-content">\r
            <div class="version-info">\r
                <span class="version-label">Version</span>\r
                <span class="version-number">1.0.0</span>\r
            </div>\r
        </div>\r
        }\r
    </div>\r
</aside>`, styles: ['/* src/app/shared/components/sidebar/sidebar.component.css */\n.sidebar {\n  background: #ffffff;\n  border-right: 1px solid #e5e7eb;\n  height: 100vh;\n  width: 260px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  transition: width 0.3s ease;\n  z-index: 999;\n  overflow-x: hidden;\n}\n.sidebar.collapsed {\n  width: 70px;\n}\n.sidebar-header {\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #e5e7eb;\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n}\n.sidebar-logo {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.logo-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.logo-icon svg circle {\n  fill: #2bb673;\n}\n.logo-text {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  white-space: nowrap;\n}\n.sidebar-nav {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0.5rem 0;\n}\n.sidebar-nav::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar-nav::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar-nav::-webkit-scrollbar-thumb {\n  background: #d1d5db;\n  border-radius: 4px;\n}\n.sidebar-nav::-webkit-scrollbar-thumb:hover {\n  background: #9ca3af;\n}\n.nav-wrapper {\n  padding: 0 0.75rem;\n}\n.nav-section {\n  margin-bottom: 1.5rem;\n}\n.section-header {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #9ca3af;\n  padding: 0.5rem 0.75rem;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.25rem;\n}\n.collapsed .section-header {\n  display: none;\n}\n.nav-item-wrapper {\n  margin-bottom: 0.25rem;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.625rem 0.75rem;\n  border-radius: 8px;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  white-space: nowrap;\n}\n.nav-item:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.nav-item.active {\n  background: rgba(6, 182, 212, 0.1);\n  color: #06b6d4;\n  font-weight: 600;\n}\n.nav-item.active::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 70%;\n  background: #06b6d4;\n  border-radius: 0 3px 3px 0;\n}\n.nav-icon {\n  flex-shrink: 0;\n  width: 20px;\n  height: 20px;\n}\n.nav-icon-placeholder {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.nav-label {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-badge {\n  background: #ef4444;\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 0.125rem 0.5rem;\n  border-radius: 12px;\n  line-height: 1.2;\n}\n.nav-arrow {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  margin-left: auto;\n}\n.nav-arrow.expanded {\n  transform: rotate(90deg);\n}\n.sub-menu {\n  margin-top: 0.25rem;\n  margin-left: 2rem;\n  padding-left: 0.75rem;\n  border-left: 2px solid #e5e7eb;\n}\n.sub-item {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0.5rem 0.625rem;\n  border-radius: 6px;\n  color: #6b7280;\n  text-decoration: none;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 0.125rem;\n}\n.sub-item:hover {\n  background: #f3f4f6;\n  color: #111827;\n}\n.sub-item.active {\n  background: rgba(6, 182, 212, 0.1);\n  color: #06b6d4;\n  font-weight: 600;\n}\n.sub-item-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #d1d5db;\n  flex-shrink: 0;\n}\n.sub-item.active .sub-item-dot {\n  background: #06b6d4;\n}\n.sub-item-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sidebar-footer {\n  padding: 1rem 1.25rem;\n  border-top: 1px solid #e5e7eb;\n}\n.footer-content {\n  padding: 0.75rem;\n  background: #f9fafb;\n  border-radius: 8px;\n}\n.version-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n}\n.version-label {\n  color: #6b7280;\n  font-weight: 500;\n}\n.version-number {\n  color: #111827;\n  font-weight: 600;\n}\n.collapsed .nav-label,\n.collapsed .nav-badge,\n.collapsed .nav-arrow,\n.collapsed .sub-menu,\n.collapsed .sidebar-footer {\n  display: none;\n}\n.collapsed .nav-item {\n  justify-content: center;\n  padding: 0.625rem;\n}\n.collapsed .nav-icon {\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    transform: translateX(-100%);\n    box-shadow: none;\n  }\n  .sidebar.open {\n    transform: translateX(0);\n    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n'] }]
  }], null, { isCollapsed: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/components/sidebar/sidebar.component.ts", lineNumber: 21 });
})();

// src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function DashboardComponent_div_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "p");
    \u0275\u0275text(2, "You are working on ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ". When finished click Complete.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const name_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(name_r4);
  }
}
function DashboardComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "button", 30);
    \u0275\u0275listener("click", function DashboardComponent_div_27_Template_button_click_4_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCard(i_r3));
    });
    \u0275\u0275text(5, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function DashboardComponent_div_27_Template_button_click_6_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.completeCard(i_r3));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, DashboardComponent_div_27_div_8_Template, 6, 1, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("completed", ctx_r0.completed()[i_r3]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", i_r3 + 1, ". ", name_r4);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.canAccess(i_r3) || ctx_r0.completed()[i_r3]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.completed()[i_r3] ? "Completed" : "Complete", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeCard === i_r3);
  }
}
var DashboardComponent = class _DashboardComponent {
  codeGeneratorService;
  router;
  isSidebarCollapsed = false;
  cardNames = [
    "Code Type",
    "Code Type Attribute",
    "Code Type Main",
    "Code Details",
    "Code Settings",
    "Code Sequence",
    "Code Generator"
  ];
  cardRoutes = [
    "/code-type",
    "/code-type-attribute",
    "/code-type-main",
    "/code-details",
    "/code-settings",
    "/code-sequence",
    "/code-generation"
  ];
  completed = signal([], ...ngDevMode ? [{ debugName: "completed" }] : []);
  activeCard = null;
  errorMessage = "";
  constructor(codeGeneratorService, router) {
    this.codeGeneratorService = codeGeneratorService;
    this.router = router;
  }
  ngOnInit() {
    const state = this.codeGeneratorService.getState();
    this.completed.set(state.completedSteps);
  }
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  canAccess(index) {
    return this.codeGeneratorService.canAccessStep(index);
  }
  openCard(index) {
    this.clearError();
    if (!this.canAccess(index)) {
      const prevName = this.cardNames[index - 1] || "previous step";
      this.errorMessage = `Can't access without completing ${prevName.toLowerCase()} first`;
      return;
    }
    this.router.navigate([this.cardRoutes[index]]);
  }
  completeCard(index) {
    if (!this.canAccess(index)) {
      this.openCard(index);
      return;
    }
    this.codeGeneratorService.completeStep(index);
    const state = this.codeGeneratorService.getState();
    this.completed.set(state.completedSteps);
    this.activeCard = null;
    this.clearError();
  }
  clearError() {
    this.errorMessage = "";
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(CodeGeneratorService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 30, vars: 5, consts: [[3, "toggleSidebar"], [1, "layout"], [1, "layout-sidebar"], [3, "isCollapsed"], [1, "layout-main"], [1, "hero-section"], [1, "hero-illustration"], [1, "code-block", "block-1"], [1, "code-block", "block-2"], [1, "code-block", "block-3"], [1, "gear-icon"], ["width", "80", "height", "80", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M12 1v6m0 6v6m0-18l-2.5 2.5M12 1l2.5 2.5M1 12h6m6 0h6M1 12l2.5-2.5M1 12l2.5 2.5m18.5-2.5l-2.5-2.5m2.5 2.5l-2.5 2.5"], [1, "rocket-icon"], ["width", "60", "height", "60", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"], ["d", "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"], ["d", "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"], ["d", "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"], [1, "dashboard-header"], [1, "subtitle"], ["class", "alert", 4, "ngIf"], [1, "cards-grid"], ["class", "card", 3, "completed", 4, "ngFor", "ngForOf"], [1, "footer-wrapper"], [1, "alert"], [1, "card"], [1, "card-title"], [1, "card-actions"], [1, "btn", "btn-open", 3, "click"], [1, "btn", "btn-complete", 3, "click", "disabled"], ["class", "card-body", 4, "ngIf"], [1, "card-body"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-header", 0);
      \u0275\u0275listener("toggleSidebar", function DashboardComponent_Template_app_header_toggleSidebar_0_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "div", 1)(2, "aside", 2);
      \u0275\u0275element(3, "app-sidebar", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "main", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "div", 7)(8, "div", 8)(9, "div", 9);
      \u0275\u0275elementStart(10, "div", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 11);
      \u0275\u0275element(12, "circle", 12)(13, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 15);
      \u0275\u0275element(16, "path", 16)(17, "path", 17)(18, "path", 18)(19, "path", 19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "div", 20)(21, "h1");
      \u0275\u0275text(22, "Generate Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 21);
      \u0275\u0275text(24, "Create and manage code steps in sequence");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, DashboardComponent_div_25_Template, 2, 1, "div", 22);
      \u0275\u0275elementStart(26, "div", 23);
      \u0275\u0275template(27, DashboardComponent_div_27_Template, 9, 7, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 25);
      \u0275\u0275element(29, "app-footer");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("collapsed", ctx.isSidebarCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("isCollapsed", ctx.isSidebarCollapsed);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.cardNames);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, HeaderComponent, SidebarComponent, FooterComponent], styles: ['\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n[_ngcontent-%COMP%]:root {\n  --green-50: #eafff1;\n  --green-100: #d2f9dd;\n  --green-300: #7be08f;\n  --green-500: #2bb673;\n  --green-700: #1f8e4f;\n  --green-900: #0f4f2a;\n  --gradient:\n    linear-gradient(\n      135deg,\n      var(--green-300),\n      var(--green-500));\n}\n.layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: calc(100vh - 60px);\n}\n.layout-sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n  transition: width 200ms ease;\n  background: var(--green-50);\n}\n.layout-sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 64px;\n}\n.layout-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fff6 0%,\n      #ffffff 100%);\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  margin: -1.5rem -1.5rem 2rem -1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 50%,\n      #f093fb 100%);\n  overflow: hidden;\n  border-radius: 0 0 24px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.code-block[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.1);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.code-block[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  right: 8px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 2px;\n}\n.code-block[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 20px;\n  left: 8px;\n  right: 30%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 2px;\n}\n.block-1[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 80px;\n  top: 20%;\n  left: 10%;\n  animation: _ngcontent-%COMP%_float-1 6s ease-in-out infinite;\n}\n.block-2[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 70px;\n  top: 50%;\n  right: 15%;\n  animation: _ngcontent-%COMP%_float-2 8s ease-in-out infinite;\n}\n.block-3[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 60px;\n  bottom: 15%;\n  left: 20%;\n  animation: _ngcontent-%COMP%_float-3 7s ease-in-out infinite;\n}\n.gear-icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  animation: _ngcontent-%COMP%_rotate 20s linear infinite;\n}\n.gear-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 4px 20px rgba(255, 255, 255, 0.3));\n  stroke: white;\n}\n.rocket-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  right: 25%;\n  z-index: 3;\n  animation: _ngcontent-%COMP%_rocket-fly 4s ease-in-out infinite;\n}\n.rocket-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.4));\n  stroke: white;\n}\n@keyframes _ngcontent-%COMP%_float-1 {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(5deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_float-2 {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(20px) rotate(-5deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_float-3 {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-15px) rotate(3deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_rocket-fly {\n  0%, 100% {\n    transform: translate(0, 0) rotate(-45deg);\n  }\n  25% {\n    transform: translate(10px, -10px) rotate(-40deg);\n  }\n  50% {\n    transform: translate(20px, -20px) rotate(-45deg);\n  }\n  75% {\n    transform: translate(10px, -10px) rotate(-50deg);\n  }\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  color: var(--green-900);\n  font-size: 2rem;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  color: var(--green-700);\n}\n.alert[_ngcontent-%COMP%] {\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      #ff6b6b,\n      #ff8e53);\n  padding: 0.6rem 1rem;\n  border-radius: 6px;\n  margin-bottom: 1rem;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  padding: 1rem;\n  box-shadow: 0 6px 18px rgba(15, 79, 42, 0.06);\n  border: 1px solid rgba(43, 182, 115, 0.08);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.card.completed[_ngcontent-%COMP%] {\n  border-image: var(--gradient) 1;\n  box-shadow: 0 8px 24px rgba(43, 182, 115, 0.12);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--green-900);\n  margin-bottom: 0.6rem;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n}\n.btn-open[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--green-700);\n}\n.btn-complete[_ngcontent-%COMP%] {\n  background: var(--gradient);\n  color: white;\n}\n.btn-complete[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.card-body[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  color: #2d2d2d;\n}\n.footer-wrapper[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n@media (max-width: 700px) {\n  .layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .layout-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, HeaderComponent, SidebarComponent, FooterComponent], template: `<app-header (toggleSidebar)="toggleSidebar()"></app-header>\r
\r
<div class="layout">\r
    <aside class="layout-sidebar" [class.collapsed]="isSidebarCollapsed">\r
        <app-sidebar [isCollapsed]="isSidebarCollapsed"></app-sidebar>\r
    </aside>\r
\r
    <main class="layout-main">\r
        <!-- Hero Section -->\r
        <div class="hero-section">\r
            <div class="hero-illustration">\r
                <div class="code-block block-1"></div>\r
                <div class="code-block block-2"></div>\r
                <div class="code-block block-3"></div>\r
                <div class="gear-icon">\r
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                        <circle cx="12" cy="12" r="3"></circle>\r
                        <path\r
                            d="M12 1v6m0 6v6m0-18l-2.5 2.5M12 1l2.5 2.5M1 12h6m6 0h6M1 12l2.5-2.5M1 12l2.5 2.5m18.5-2.5l-2.5-2.5m2.5 2.5l-2.5 2.5">\r
                        </path>\r
                    </svg>\r
                </div>\r
                <div class="rocket-icon">\r
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                        <path\r
                            d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">\r
                        </path>\r
                        <path\r
                            d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">\r
                        </path>\r
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>\r
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>\r
                    </svg>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="dashboard-header">\r
            <h1>Generate Code</h1>\r
            <p class="subtitle">Create and manage code steps in sequence</p>\r
        </div>\r
\r
        <div *ngIf="errorMessage" class="alert">{{ errorMessage }}</div>\r
\r
        <div class="cards-grid">\r
            <div *ngFor="let name of cardNames; let i = index" class="card" [class.completed]="completed()[i]">\r
                <div class="card-title">{{ i + 1 }}. {{ name }}</div>\r
                <div class="card-actions">\r
                    <button class="btn btn-open" (click)="openCard(i)">Open</button>\r
                    <button class="btn btn-complete" (click)="completeCard(i)"\r
                        [disabled]="!canAccess(i) || completed()[i]">\r
                        {{ completed()[i] ? 'Completed' : 'Complete' }}\r
                    </button>\r
                </div>\r
                <div *ngIf="activeCard === i" class="card-body">\r
                    <p>You are working on <strong>{{ name }}</strong>. When finished click Complete.</p>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="footer-wrapper">\r
            <app-footer></app-footer>\r
        </div>\r
    </main>\r
</div>`, styles: ['/* src/app/features/dashboard/dashboard.component.css */\n.dashboard-container {\n  padding: 2rem;\n}\n:root {\n  --green-50: #eafff1;\n  --green-100: #d2f9dd;\n  --green-300: #7be08f;\n  --green-500: #2bb673;\n  --green-700: #1f8e4f;\n  --green-900: #0f4f2a;\n  --gradient:\n    linear-gradient(\n      135deg,\n      var(--green-300),\n      var(--green-500));\n}\n.layout {\n  display: flex;\n  min-height: calc(100vh - 60px);\n}\n.layout-sidebar {\n  width: 250px;\n  transition: width 200ms ease;\n  background: var(--green-50);\n}\n.layout-sidebar.collapsed {\n  width: 64px;\n}\n.layout-main {\n  flex: 1;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fff6 0%,\n      #ffffff 100%);\n}\n.hero-section {\n  position: relative;\n  height: 200px;\n  margin: -1.5rem -1.5rem 2rem -1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 50%,\n      #f093fb 100%);\n  overflow: hidden;\n  border-radius: 0 0 24px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero-illustration {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.code-block {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.1);\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.code-block::before {\n  content: "";\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  right: 8px;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 2px;\n}\n.code-block::after {\n  content: "";\n  position: absolute;\n  top: 20px;\n  left: 8px;\n  right: 30%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 2px;\n}\n.block-1 {\n  width: 120px;\n  height: 80px;\n  top: 20%;\n  left: 10%;\n  animation: float-1 6s ease-in-out infinite;\n}\n.block-2 {\n  width: 100px;\n  height: 70px;\n  top: 50%;\n  right: 15%;\n  animation: float-2 8s ease-in-out infinite;\n}\n.block-3 {\n  width: 90px;\n  height: 60px;\n  bottom: 15%;\n  left: 20%;\n  animation: float-3 7s ease-in-out infinite;\n}\n.gear-icon {\n  position: relative;\n  z-index: 2;\n  animation: rotate 20s linear infinite;\n}\n.gear-icon svg {\n  filter: drop-shadow(0 4px 20px rgba(255, 255, 255, 0.3));\n  stroke: white;\n}\n.rocket-icon {\n  position: absolute;\n  top: 30%;\n  right: 25%;\n  z-index: 3;\n  animation: rocket-fly 4s ease-in-out infinite;\n}\n.rocket-icon svg {\n  filter: drop-shadow(0 4px 15px rgba(255, 255, 255, 0.4));\n  stroke: white;\n}\n@keyframes float-1 {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(5deg);\n  }\n}\n@keyframes float-2 {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(20px) rotate(-5deg);\n  }\n}\n@keyframes float-3 {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-15px) rotate(3deg);\n  }\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rocket-fly {\n  0%, 100% {\n    transform: translate(0, 0) rotate(-45deg);\n  }\n  25% {\n    transform: translate(10px, -10px) rotate(-40deg);\n  }\n  50% {\n    transform: translate(20px, -20px) rotate(-45deg);\n  }\n  75% {\n    transform: translate(10px, -10px) rotate(-50deg);\n  }\n}\n.dashboard-header {\n  margin-bottom: 2rem;\n}\n.dashboard-header h1 {\n  margin: 0 0 0.25rem 0;\n  color: var(--green-900);\n  font-size: 2rem;\n}\n.subtitle {\n  margin: 0 0 1rem 0;\n  color: var(--green-700);\n}\n.alert {\n  color: #fff;\n  background:\n    linear-gradient(\n      90deg,\n      #ff6b6b,\n      #ff8e53);\n  padding: 0.6rem 1rem;\n  border-radius: 6px;\n  margin-bottom: 1rem;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1rem;\n}\n.card {\n  background: white;\n  border-radius: 10px;\n  padding: 1rem;\n  box-shadow: 0 6px 18px rgba(15, 79, 42, 0.06);\n  border: 1px solid rgba(43, 182, 115, 0.08);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.card.completed {\n  border-image: var(--gradient) 1;\n  box-shadow: 0 8px 24px rgba(43, 182, 115, 0.12);\n}\n.card-title {\n  font-weight: 600;\n  color: var(--green-900);\n  margin-bottom: 0.6rem;\n}\n.card-actions {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.btn {\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n}\n.btn-open {\n  background: transparent;\n  color: var(--green-700);\n}\n.btn-complete {\n  background: var(--gradient);\n  color: white;\n}\n.btn-complete[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.card-body {\n  margin-top: 0.75rem;\n  color: #2d2d2d;\n}\n.footer-wrapper {\n  margin-top: 2rem;\n}\n@media (max-width: 700px) {\n  .layout {\n    flex-direction: column;\n  }\n  .layout-sidebar {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [{ type: CodeGeneratorService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 16 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-REAIRM2M.js.map
