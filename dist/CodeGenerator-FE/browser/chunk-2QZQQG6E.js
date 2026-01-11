import {
  AuthService,
  ROUTES
} from "./chunk-Z4TN2G7U.js";
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
import "./chunk-IAFF5KEP.js";
import {
  Router,
  RouterLink
} from "./chunk-DCKXGUGL.js";
import "./chunk-6MNRTQKI.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-EMSVNVEL.js";

// src/app/features/auth/login.component.ts
function LoginComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function LoginComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " User code is required ");
  }
}
function LoginComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " User code must be at least 2 characters ");
  }
}
function LoginComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_12_Conditional_1_Template, 1, 0)(2, LoginComponent_Conditional_12_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.userCode == null ? null : ctx_r0.userCode.errors == null ? null : ctx_r0.userCode.errors["required"]) ? 1 : (ctx_r0.userCode == null ? null : ctx_r0.userCode.errors == null ? null : ctx_r0.userCode.errors["minlength"]) ? 2 : -1);
  }
}
function LoginComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Password is required ");
  }
}
function LoginComponent_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Password must be at least 6 characters ");
  }
}
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_17_Conditional_1_Template, 1, 0)(2, LoginComponent_Conditional_17_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]) ? 1 : (ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["minlength"]) ? 2 : -1);
  }
}
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
    \u0275\u0275text(1, " Logging in... ");
  }
}
function LoginComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In ");
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  loginForm;
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loginForm = this.fb.group({
      userCode: ["", [Validators.required, Validators.minLength(2)]],
      password: ["", [Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid && !this.isLoading()) {
      this.isLoading.set(true);
      this.errorMessage.set(null);
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate([ROUTES.DASHBOARD]);
          } else {
            this.errorMessage.set(response.message || "Login failed");
            this.isLoading.set(false);
          }
        },
        error: (error) => {
          this.isLoading.set(false);
          this.errorMessage.set(error.error?.message || "Login failed. Please try again.");
        }
      });
    }
  }
  get userCode() {
    return this.loginForm.get("userCode");
  }
  get password() {
    return this.loginForm.get("password");
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 25, vars: 10, consts: [[1, "login-container"], [1, "login-card"], [1, "subtitle"], [1, "error-alert"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "userCode"], ["id", "userCode", "type", "text", "formControlName", "userCode", "placeholder", "Enter your user code"], [1, "error-message"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Enter your password"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "register-link"], ["routerLink", "/auth/register"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Sign in to continue to Code Generator");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, LoginComponent_Conditional_6_Template, 2, 1, "div", 3);
      \u0275\u0275elementStart(7, "form", 4);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(8, "div", 5)(9, "label", 6);
      \u0275\u0275text(10, "User Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 7);
      \u0275\u0275conditionalCreate(12, LoginComponent_Conditional_12_Template, 3, 1, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 5)(14, "label", 9);
      \u0275\u0275text(15, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 10);
      \u0275\u0275conditionalCreate(17, LoginComponent_Conditional_17_Template, 3, 1, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275conditionalCreate(19, LoginComponent_Conditional_19_Template, 2, 0)(20, LoginComponent_Conditional_20_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p", 12);
      \u0275\u0275text(22, " Don't have an account? ");
      \u0275\u0275elementStart(23, "a", 13);
      \u0275\u0275text(24, "Sign up");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.errorMessage() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", (ctx.userCode == null ? null : ctx.userCode.invalid) && (ctx.userCode == null ? null : ctx.userCode.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.userCode == null ? null : ctx.userCode.invalid) && (ctx.userCode == null ? null : ctx.userCode.touched) ? 12 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched) ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 19 : 20);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 2rem;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(20px, 20px);\n  }\n}\n.login-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 3rem;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 100%;\n  max-width: 450px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 0.5rem 0;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #718096;\n  margin: 0 0 2rem 0;\n}\n.error-alert[_ngcontent-%COMP%] {\n  background-color: #fee;\n  border: 1px solid #fcc;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: #2d3748;\n  font-size: 0.9rem;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid[_ngcontent-%COMP%] {\n  border-color: #fc8181;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: block;\n  color: #e53e3e;\n  font-size: 0.85rem;\n  margin-top: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: #718096;\n  font-size: 0.9rem;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink], template: `<div class="login-container">\r
  <div class="login-card">\r
    <h1>Welcome Back</h1>\r
    <p class="subtitle">Sign in to continue to Code Generator</p>\r
\r
    @if (errorMessage()) {\r
    <div class="error-alert">\r
      {{ errorMessage() }}\r
    </div>\r
    }\r
\r
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\r
      <div class="form-group">\r
        <label for="userCode">User Code</label>\r
        <input id="userCode" type="text" formControlName="userCode" placeholder="Enter your user code"\r
          [class.invalid]="userCode?.invalid && userCode?.touched" />\r
        @if (userCode?.invalid && userCode?.touched) {\r
        <span class="error-message">\r
          @if (userCode?.errors?.['required']) {\r
          User code is required\r
          } @else if (userCode?.errors?.['minlength']) {\r
          User code must be at least 2 characters\r
          }\r
        </span>\r
        }\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="password">Password</label>\r
        <input id="password" type="password" formControlName="password" placeholder="Enter your password"\r
          [class.invalid]="password?.invalid && password?.touched" />\r
        @if (password?.invalid && password?.touched) {\r
        <span class="error-message">\r
          @if (password?.errors?.['required']) {\r
          Password is required\r
          } @else if (password?.errors?.['minlength']) {\r
          Password must be at least 6 characters\r
          }\r
        </span>\r
        }\r
      </div>\r
\r
      <button type="submit" class="btn-primary" [disabled]="loginForm.invalid || isLoading()">\r
        @if (isLoading()) {\r
        <span class="spinner"></span> Logging in...\r
        } @else {\r
        Sign In\r
        }\r
      </button>\r
    </form>\r
\r
    <p class="register-link">\r
      Don't have an account? <a routerLink="/auth/register">Sign up</a>\r
    </p>\r
  </div>\r
</div>`, styles: ["/* src/app/features/auth/login.component.css */\n.login-container {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 2rem;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translate(0, 0);\n  }\n  50% {\n    transform: translate(20px, 20px);\n  }\n}\n.login-card {\n  background: white;\n  padding: 3rem;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 100%;\n  max-width: 450px;\n}\nh1 {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1a202c;\n  margin: 0 0 0.5rem 0;\n}\n.subtitle {\n  color: #718096;\n  margin: 0 0 2rem 0;\n}\n.error-alert {\n  background-color: #fee;\n  border: 1px solid #fcc;\n  color: #c33;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-size: 0.9rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\nlabel {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: #2d3748;\n  font-size: 0.9rem;\n}\ninput {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.3s;\n  box-sizing: border-box;\n}\ninput:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\ninput.invalid {\n  border-color: #fc8181;\n}\n.error-message {\n  display: block;\n  color: #e53e3e;\n  font-size: 0.85rem;\n  margin-top: 0.5rem;\n}\n.btn-primary {\n  width: 100%;\n  padding: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.register-link {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: #718096;\n  font-size: 0.9rem;\n}\n.register-link a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s;\n}\n.register-link a:hover {\n  color: #764ba2;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login.component.ts", lineNumber: 15 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-2QZQQG6E.js.map
