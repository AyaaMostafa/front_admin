import {
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-EMSVNVEL.js";

// src/app/core/services/code-generator.service.ts
var CodeGeneratorService = class _CodeGeneratorService {
  state = signal({
    currentStep: 0,
    completedSteps: [false, false, false, false, false, false, false],
    codeAttributeTypeIds: [],
    codeAttributeMainIds: [],
    codeAttributeDetailIds: []
  }, ...ngDevMode ? [{ debugName: "state" }] : []);
  getState() {
    return this.state();
  }
  completeStep(stepIndex) {
    const currentState = this.state();
    const newCompleted = [...currentState.completedSteps];
    newCompleted[stepIndex] = true;
    this.state.set(__spreadProps(__spreadValues({}, currentState), {
      completedSteps: newCompleted,
      currentStep: stepIndex + 1
    }));
  }
  setCodeTypeData(id, code) {
    this.state.update((s) => __spreadProps(__spreadValues({}, s), {
      codeTypeId: id,
      codeTypeCode: code
    }));
  }
  addCodeAttributeTypeId(id) {
    this.state.update((s) => __spreadProps(__spreadValues({}, s), {
      codeAttributeTypeIds: [...s.codeAttributeTypeIds, id]
    }));
  }
  addCodeAttributeMainId(id) {
    this.state.update((s) => __spreadProps(__spreadValues({}, s), {
      codeAttributeMainIds: [...s.codeAttributeMainIds, id]
    }));
  }
  addCodeAttributeDetailId(id) {
    this.state.update((s) => __spreadProps(__spreadValues({}, s), {
      codeAttributeDetailIds: [...s.codeAttributeDetailIds, id]
    }));
  }
  isStepCompleted(stepIndex) {
    return this.state().completedSteps[stepIndex];
  }
  canAccessStep(stepIndex) {
    if (stepIndex === 0)
      return true;
    return this.state().completedSteps[stepIndex - 1];
  }
  reset() {
    this.state.set({
      currentStep: 0,
      completedSteps: [false, false, false, false, false, false, false],
      codeAttributeTypeIds: [],
      codeAttributeMainIds: [],
      codeAttributeDetailIds: []
    });
  }
  static \u0275fac = function CodeGeneratorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CodeGeneratorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CodeGeneratorService, factory: _CodeGeneratorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeGeneratorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CodeGeneratorService
};
//# sourceMappingURL=chunk-FZF4RZXG.js.map
