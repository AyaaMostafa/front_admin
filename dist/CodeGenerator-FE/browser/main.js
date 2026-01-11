import {
  AuthService,
  ROUTES
} from "./chunk-Z4TN2G7U.js";
import "./chunk-IAFF5KEP.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  withEventReplay
} from "./chunk-DCKXGUGL.js";
import {
  provideHttpClient,
  withInterceptors
} from "./chunk-6MNRTQKI.js";
import {
  Component,
  __spreadValues,
  inject,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-EMSVNVEL.js";

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate([ROUTES.AUTH.LOGIN], {
    queryParams: { returnUrl: state.url }
  });
  return false;
};
var guestGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    return true;
  }
  router.navigate([ROUTES.DASHBOARD]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  // Landing page (public)
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-ICKBICJN.js").then((m) => m.LandingComponent)
  }, false ? { \u0275entryName: "src/app/features/landing/landing.component.ts" } : {}),
  // Auth routes (only for guests)
  __spreadValues({
    path: "auth/login",
    loadComponent: () => import("./chunk-2QZQQG6E.js").then((m) => m.LoginComponent),
    canActivate: [guestGuard]
  }, false ? { \u0275entryName: "src/app/features/auth/login.component.ts" } : {}),
  // Protected routes (require authentication)
  __spreadValues({
    path: "dashboard",
    loadComponent: () => import("./chunk-REAIRM2M.js").then((m) => m.DashboardComponent),
    canActivate: [authGuard]
  }, false ? { \u0275entryName: "src/app/features/dashboard/dashboard.component.ts" } : {}),
  // Code Generator Flow (protected)
  __spreadValues({
    path: "code-type",
    loadComponent: () => import("./chunk-LFVOMY5W.js").then((m) => m.CodeTypeComponent),
    canActivate: [authGuard]
  }, false ? { \u0275entryName: "src/app/features/code-type/code-type.component.ts" } : {}),
  __spreadValues({
    path: "code-type-attribute",
    loadComponent: () => import("./chunk-6GAHQXD2.js").then((m) => m.CodeTypeAttributeComponent),
    canActivate: [authGuard]
  }, false ? { \u0275entryName: "src/app/features/code-type-attribute/code-type-attribute.component.ts" } : {}),
  __spreadValues({
    path: "code-type-main",
    loadComponent: () => import("./chunk-FKRP32XP.js").then((m) => m.CodeTypeMainComponent),
    canActivate: [authGuard]
  }, false ? { \u0275entryName: "src/app/features/code-type-main/code-type-main.component.ts" } : {}),
  __spreadValues({
    path: "code-details",
    loadComponent: () => import("./chunk-PK7QKCCV.js").then((m) => m.CodeDetailsComponent),
    canActivate: [authGuard]
  }, false ? { \u0275entryName: "src/app/features/code-details/code-details.component.ts" } : {}),
  __spreadValues({
    path: "code-settings",
    loadComponent: () => import("./chunk-A2OIJIYB.js").then((m) => m.CodeSettingsComponent),
    canActivate: [authGuard]
  }, false ? { \u0275entryName: "src/app/features/code-settings/code-settings.component.ts" } : {}),
  __spreadValues({
    path: "code-sequence",
    loadComponent: () => import("./chunk-WC722KUP.js").then((m) => m.CodeSequenceComponent),
    canActivate: [authGuard]
  }, false ? { \u0275entryName: "src/app/features/code-sequence/code-sequence.component.ts" } : {}),
  __spreadValues({
    path: "code-generation",
    loadComponent: () => import("./chunk-NKHYSBGL.js").then((m) => m.CodeGenerationComponent),
    canActivate: [authGuard]
  }, false ? { \u0275entryName: "src/app/features/code-generation/code-generation.component.ts" } : {}),
  // Other protected routes
  __spreadValues({
    path: "settings",
    loadComponent: () => import("./chunk-HZQ5DEXF.js").then((m) => m.SettingsComponent),
    canActivate: [authGuard]
  }, false ? { \u0275entryName: "src/app/features/settings/settings.component.ts" } : {}),
  // Redirect unknown routes to landing
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideClientHydration(withEventReplay())
  ]
};

// src/app/app.ts
var App = class _App {
  title = signal("CodeGenerator-FE", ...ngDevMode ? [{ debugName: "title" }] : []);
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet />" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
