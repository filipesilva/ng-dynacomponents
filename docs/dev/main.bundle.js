webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideAnimation; });

var SlideAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* trigger */])('slideAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({
        opacity: 1,
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({
            opacity: 0,
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])('500ms ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* animate */])('500ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* style */])({
            opacity: 0,
        }))
    ])
]);
//# sourceMappingURL=slide.animation.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(170),
        styles: [__webpack_require__(165)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__states__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wizard__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__steps__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__wizard__["a" /* WizardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__wizard__["b" /* WizardStepDirective */],
            __WEBPACK_IMPORTED_MODULE_9__steps__["a" /* StepOneComponent */],
            __WEBPACK_IMPORTED_MODULE_9__steps__["b" /* StepTwoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_7__states__["a" /* Reducers */]),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__steps__["a" /* StepOneComponent */],
            __WEBPACK_IMPORTED_MODULE_9__steps__["b" /* StepTwoComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wizard_store__ = __webpack_require__(61);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reducers; });

// import { InputReducer } from './input.store';
// import { ResultReducer } from './result.store';

// export * from './input.store';
// export * from './result.store';
var Reducers = {
    wizard: __WEBPACK_IMPORTED_MODULE_0__wizard_store__["a" /* WizardReducer */],
};
// TODO export Wizards Reducers inside a meta-reducer
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__steps__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepOneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StepOneComponent = (function () {
    function StepOneComponent() {
        this.slideAnimation = true;
        this.display = 'block';
        this.padding = '20px';
        // @HostBinding('style.position')  position = 'absolute';
        this.backgroundColor = '#563d7c';
        this.color = 'white';
        this.actions = [];
        this.haveFooter = true;
        this.actions = [
            {
                text: 'Next',
                action: __WEBPACK_IMPORTED_MODULE_2__steps__["b" /* StepTwoComponent */],
                classes: ['btn-primary', 'float-right']
            }
        ];
    }
    return StepOneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('@slideAnimation'),
    __metadata("design:type", Object)
], StepOneComponent.prototype, "slideAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], StepOneComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('style.padding'),
    __metadata("design:type", Object)
], StepOneComponent.prototype, "padding", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('style.backgroundColor'),
    __metadata("design:type", Object)
], StepOneComponent.prototype, "backgroundColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('style.color'),
    __metadata("design:type", Object)
], StepOneComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], StepOneComponent.prototype, "exec", void 0);
StepOneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'step-one',
        template: __webpack_require__(171),
        styles: [__webpack_require__(166)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* SlideAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], StepOneComponent);

//# sourceMappingURL=step-one.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__steps__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StepTwoComponent = (function () {
    function StepTwoComponent() {
        this.slideAnimation = true;
        this.display = 'block';
        this.padding = '20px';
        // @HostBinding('style.position')  position = 'absolute';
        this.backgroundColor = '#563d7c';
        this.color = 'white';
        this.actions = [];
        this.haveFooter = true;
        this.actions = [
            {
                text: 'Previous',
                action: __WEBPACK_IMPORTED_MODULE_2__steps__["a" /* StepOneComponent */],
                classes: ['btn-default', 'float-left']
            }
        ];
    }
    return StepTwoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('@slideAnimation'),
    __metadata("design:type", Object)
], StepTwoComponent.prototype, "slideAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], StepTwoComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('style.padding'),
    __metadata("design:type", Object)
], StepTwoComponent.prototype, "padding", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('style.backgroundColor'),
    __metadata("design:type", Object)
], StepTwoComponent.prototype, "backgroundColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostBinding */])('style.color'),
    __metadata("design:type", Object)
], StepTwoComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], StepTwoComponent.prototype, "exec", void 0);
StepTwoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'step-two',
        template: __webpack_require__(172),
        styles: [__webpack_require__(167)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* SlideAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], StepTwoComponent);

//# sourceMappingURL=step-two.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wizard_component__ = __webpack_require__(109);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__wizard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wizard_step_directive__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__wizard_step_directive__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_step_directive__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WizardComponent = (function () {
    function WizardComponent(_store, _componentFactoryResolver) {
        var _this = this;
        this._store = _store;
        this._componentFactoryResolver = _componentFactoryResolver;
        this.subscription = this._store
            .select('wizard')
            .subscribe(function (state) {
            _this.state = state;
        });
    }
    WizardComponent.prototype.exec = function (action) {
        if (action.prototype /* && action.prototype instanceof WizardStepComponent*/) {
            this._store.dispatch({
                type: 'STEP_LOAD',
                payload: action
            });
        }
        else if (typeof action == 'function') {
            var result = action();
            if (result) {
                if (result.prototype /* && result.prototype instanceof WizardStepComponent*/) {
                    this._store.dispatch({
                        type: 'STEP_LOAD',
                        payload: result
                    });
                }
                else if (typeof result == 'object' && result.hasOwnProperty('type')) {
                    this._store.dispatch(result);
                }
            }
        }
        else if (typeof action == 'object' && action.hasOwnProperty('type')) {
            this._store.dispatch(action);
        }
    };
    WizardComponent.prototype.dispatch = function (action) {
        this._store.dispatch(action);
    };
    WizardComponent.prototype.ngAfterContentInit = function () {
        this.loadStep();
    };
    WizardComponent.prototype.ngDoCheck = function () {
        // manual check on component change
        if (this.step && this.step.instance.constructor.name != this.state.component.name) {
            this.loadStep();
        }
    };
    WizardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WizardComponent.prototype.loadStep = function () {
        var _this = this;
        if (this.step) {
            this.step.destroy();
        }
        setTimeout(function () {
            var componentFactory = _this._componentFactoryResolver.resolveComponentFactory(_this.state.component);
            var viewContainerRef = _this.stepHost.viewContainerRef;
            viewContainerRef.clear();
            _this.step = viewContainerRef.createComponent(componentFactory);
            _this.step.instance.exec = _this.exec.bind(_this);
        }, 510);
    };
    return WizardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__wizard_step_directive__["a" /* WizardStepDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__wizard_step_directive__["a" /* WizardStepDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wizard_step_directive__["a" /* WizardStepDirective */]) === "function" && _a || Object)
], WizardComponent.prototype, "stepHost", void 0);
WizardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'ng-wizard',
        template: __webpack_require__(173),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* ComponentFactoryResolver */]) === "function" && _c || Object])
], WizardComponent);

var _a, _b, _c;
//# sourceMappingURL=wizard.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".card {\n  height: 100%;\n  color: black;\n}\n\n.card-header {\n  background-color: #fff;\n  padding: 0;\n  font-size: 1.25rem;\n}\n\n.card-block {\n  overflow: hidden;\n}\n\n.card-footer {\n  background-color: #fff;\n  border-top: 0 none;\n}\n\n.nav-item {\n  padding: 1rem 0rem;\n  border-bottom: 0.5rem solid #ccc;\n}\n\n.active {\n  font-weight: bold;\n  color: black;\n  border-bottom-color: #1976D2 !important;\n}\n\n.enabled {\n  cursor: pointer;\n  border-bottom-color: rgb(88 162 234);\n}\n\n.disabled {\n  color: #ccc;\n}\n\n.completed {\n  cursor: default;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section>\n    <h1>\n      Animation Test\n    </h1>\n\n    <ng-wizard></ng-wizard>\n  </section>\n</div>\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div>\n  Step One Works!\n</div>\n"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<div>\n  Step Two Works!\n</div>\n"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <ng-template wizard-step></ng-template>\n  </div>\n  <div *ngIf=\"step\" class=\"card-footer\" [hidden]=\"!step.instance.haveFooter\">\n    <button *ngFor=\"let action of step.instance.actions\" type=\"button\"\n      class=\"btn\" [ngClass]=\"action.classes\"\n      [disabled]=\"action.disabled\"\n      [hidden]=\"action.hidden\"\n      (click)=\"exec(action.action)\">{{ action.text }}</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__step_one_step_one_component__ = __webpack_require__(106);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__step_one_step_one_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__step_two_step_two_component__ = __webpack_require__(107);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__step_two_step_two_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_animation__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__slide_animation__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__steps__ = __webpack_require__(23);
/* unused harmony export STEP_LOAD */
/* harmony export (immutable) */ __webpack_exports__["a"] = WizardReducer;
// import { WizardStepComponent } from '../wizard';

// INITIAL STATE
var initial = {
    component: __WEBPACK_IMPORTED_MODULE_0__steps__["a" /* StepOneComponent */]
};
// ACTIONS
var STEP_LOAD = 'STEP_LOAD';
// REDUCER
function WizardReducer(state, action) {
    if (state === void 0) { state = initial; }
    switch (action.type) {
        case STEP_LOAD:
            if (action.payload && action.payload.prototype /*&& action.payload.prototype instanceof WizardStepComponent*/) {
                return {
                    component: action.payload
                };
            }
            throw new Error('WizardAction payload should be a WizardStepComponent!');
        default:
            return state;
    }
}
//# sourceMappingURL=wizard.store.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardStepDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardStepDirective = (function () {
    function WizardStepDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return WizardStepDirective;
}());
WizardStepDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Directive */])({
        selector: '[wizard-step]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewContainerRef */]) === "function" && _a || Object])
], WizardStepDirective);

var _a;
//# sourceMappingURL=wizard-step.directive.js.map

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 84;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(110);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.bundle.js.map