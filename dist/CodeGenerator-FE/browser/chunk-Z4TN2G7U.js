import {
  environment
} from "./chunk-IAFF5KEP.js";
import {
  Router
} from "./chunk-DCKXGUGL.js";
import {
  HttpClient
} from "./chunk-6MNRTQKI.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  computed,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-EMSVNVEL.js";

// src/app/core/constants/app.constants.ts
var API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    PROFILE: "/auth/profile"
  },
  USERS: {
    LIST: "/users",
    DETAIL: (id) => `/users/${id}`,
    UPDATE: (id) => `/users/${id}`,
    DELETE: (id) => `/users/${id}`
  },
  CODE_GENERATOR: {
    GENERATE: "/code-generator/generate",
    TEMPLATES: "/code-generator/templates",
    HISTORY: "/code-generator/history"
  }
};
var STORAGE_KEYS = {
  TOKEN: "auth_token",
  REFRESH_TOKEN: "refresh_token",
  USER: "user_data",
  LANGUAGE: "app_language",
  THEME: "app_theme"
};
var ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register"
  },
  DASHBOARD: "/dashboard",
  SETTINGS: "/settings",
  LANDING: "/landing"
};

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  apiUrl = environment.apiUrl;
  currentUserSubject = new BehaviorSubject(this.getUserFromStorage());
  // Signals for reactive state management
  currentUser = signal(this.getUserFromStorage(), ...ngDevMode ? [{ debugName: "currentUser" }] : []);
  isAuthenticated = computed(() => this.currentUser() !== null, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  // Observable for legacy support
  currentUser$ = this.currentUserSubject.asObservable();
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.currentUser$.subscribe((user) => this.currentUser.set(user));
  }
  /**
   * Login user with credentials
   */
  login(credentials) {
    return this.http.post(`${this.apiUrl}${API_ENDPOINTS.AUTH.LOGIN}`, credentials).pipe(tap((response) => {
      if (response.success && response.data) {
        this.handleLoginSuccess(response.data);
      }
    }), catchError((error) => this.handleAuthError(error)));
  }
  /**
   * Register new user (if needed in the future)
   */
  register(data) {
    return this.http.post(`${this.apiUrl}${API_ENDPOINTS.AUTH.REGISTER}`, data).pipe(catchError((error) => this.handleAuthError(error)));
  }
  /**
   * Logout current user
   */
  logout() {
    this.clearAuthData();
    this.currentUserSubject.next(null);
    this.router.navigate([ROUTES.AUTH.LOGIN]);
  }
  /**
   * Get current auth token
   */
  getToken() {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
  }
  /**
   * Check if user is authenticated
   */
  isLoggedIn() {
    const token = this.getToken();
    const user = this.currentUser();
    if (!token || !user) {
      return false;
    }
    if (user.expiresOn) {
      const expiryDate = new Date(user.expiresOn);
      const now = /* @__PURE__ */ new Date();
      if (now >= expiryDate) {
        this.logout();
        return false;
      }
    }
    return true;
  }
  /**
   * Check if user has a specific permission
   */
  hasPermission(permission) {
    const user = this.currentUser();
    return user?.permissions?.includes(permission) || false;
  }
  /**
   * Check if user has a specific role
   */
  hasRole(role) {
    const user = this.currentUser();
    return user?.roles?.includes(role) || false;
  }
  /**
   * Get user permissions
   */
  getPermissions() {
    return this.currentUser()?.permissions || [];
  }
  /**
   * Get user roles
   */
  getRoles() {
    return this.currentUser()?.roles || [];
  }
  /**
   * Handle successful login
   */
  handleLoginSuccess(data) {
    localStorage.setItem(STORAGE_KEYS.TOKEN, data.token);
    const user = {
      userCode: data.userCode,
      employeeName: data.employeeName,
      roles: data.roles,
      permissions: data.permissions,
      genderId: data.genderId,
      token: data.token,
      expiresOn: data.expiresOn
    };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    this.currentUserSubject.next(user);
    console.log("Login successful:", {
      user: data.employeeName,
      roles: data.roles,
      permissionsCount: data.permissions.length
    });
  }
  /**
   * Handle authentication error
   */
  handleAuthError(error) {
    console.error("Authentication error:", error);
    let errorMessage = "An error occurred during authentication";
    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    } else if (error.status === 0) {
      errorMessage = "Unable to connect to the server. Please check your connection.";
    } else if (error.status === 401) {
      errorMessage = "Invalid credentials. Please try again.";
    } else if (error.status === 500) {
      errorMessage = "Server error. Please try again later.";
    }
    return throwError(() => ({ error: { message: errorMessage } }));
  }
  /**
   * Get user from local storage
   */
  getUserFromStorage() {
    try {
      const userJson = localStorage.getItem(STORAGE_KEYS.USER);
      if (!userJson)
        return null;
      const user = JSON.parse(userJson);
      if (user.expiresOn) {
        const expiryDate = new Date(user.expiresOn);
        const now = /* @__PURE__ */ new Date();
        if (now >= expiryDate) {
          this.clearAuthData();
          return null;
        }
      }
      return user;
    } catch (error) {
      console.error("Error reading user from storage:", error);
      return null;
    }
  }
  /**
   * Clear all authentication data
   */
  clearAuthData() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

// src/app/core/services/translation.service.ts
var TranslationService = class _TranslationService {
  currentLanguage = signal(environment.defaultLanguage, ...ngDevMode ? [{ debugName: "currentLanguage" }] : []);
  availableLanguages = environment.supportedLanguages;
  // Simple translation dictionary
  translations = {
    "app.title": {
      en: "Code Generator",
      ar: "\u0645\u0648\u0644\u062F \u0627\u0644\u0623\u0643\u0648\u0627\u062F"
    },
    "auth.login": {
      en: "Login",
      ar: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"
    },
    "auth.register": {
      en: "Register",
      ar: "\u0627\u0644\u062A\u0633\u062C\u064A\u0644"
    }
  };
  constructor() {
    this.initializeLanguage();
  }
  /**
   * Initialize language from storage or default
   */
  initializeLanguage() {
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    const browserLanguage = navigator.language.split("-")[0];
    const languageToUse = savedLanguage || (this.availableLanguages.includes(browserLanguage) ? browserLanguage : environment.defaultLanguage);
    this.setLanguage(languageToUse);
  }
  /**
   * Change application language
   */
  setLanguage(language) {
    if (this.availableLanguages.includes(language)) {
      this.currentLanguage.set(language);
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
      this.updateDocumentDirection(language);
    }
  }
  /**
   * Update document direction for RTL languages
   */
  updateDocumentDirection(language) {
    const direction = language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", language);
  }
  /**
   * Get translation for a key
   */
  instant(key, params) {
    const lang = this.currentLanguage();
    return this.translations[key]?.[lang] || key;
  }
  /**
   * Switch between languages
   */
  toggleLanguage() {
    const currentLang = this.currentLanguage();
    const newLang = currentLang === "en" ? "ar" : "en";
    this.setLanguage(newLang);
  }
  static \u0275fac = function TranslationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslationService, factory: _TranslationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ROUTES,
  AuthService
};
//# sourceMappingURL=chunk-Z4TN2G7U.js.map
