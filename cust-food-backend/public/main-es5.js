function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _pages_login_page_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/login-page/register-page/register-page.component */
    "./src/app/pages/login-page/register-page/register-page.component.ts");
    /* harmony import */


    var _pages_dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/dashboard2/dashboard2.component */
    "./src/app/pages/dashboard2/dashboard2.component.ts");
    /* harmony import */


    var _pages_dashboard2_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/dashboard2/recipe/recipe.component */
    "./src/app/pages/dashboard2/recipe/recipe.component.ts");
    /* harmony import */


    var _pages_dashboard2_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/dashboard2/my-profile/my-profile.component */
    "./src/app/pages/dashboard2/my-profile/my-profile.component.ts");
    /* harmony import */


    var _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/refresh/refresh.component */
    "./src/app/pages/refresh/refresh.component.ts");
    /* harmony import */


    var _pages_login_page_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/login-page/forgot-password/forgot-password.component */
    "./src/app/pages/login-page/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _pages_login_page_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/login-page/reset-password/reset-password.component */
    "./src/app/pages/login-page/reset-password/reset-password.component.ts");
    /* harmony import */


    var _pages_login_page_confirm_user_confirm_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/login-page/confirm-user/confirm-user.component */
    "./src/app/pages/login-page/confirm-user/confirm-user.component.ts");

    var routes = [{
      path: 'dashboard',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      children: [// routes that need authentication
      {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-dashboard-page-dashboard-page-module */
          "pages-dashboard-page-dashboard-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/dashboard-page/dashboard-page.module */
          "./src/app/pages/dashboard-page/dashboard-page.module.ts")).then(function (m) {
            return m.DashboardPageModule;
          });
        }
      }]
    }, {
      /**
       * Authentication routes: login& logout
       * need to use the matcher to not consume the "login" and "logout" segments
       */
      matcher: function matcher(url) {
        var _a;

        return ((_a = url[0]) === null || _a === void 0 ? void 0 : _a.path.match(/^(login|logout)/)) ? {
          consumed: []
        } : null;
      },
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-page-login-page-module */
        "pages-login-page-login-page-module").then(__webpack_require__.bind(null,
        /*! ./pages/login-page/login-page.module */
        "./src/app/pages/login-page/login-page.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'dashboardPage/:userId',
      component: _pages_dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard2Component"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      children: [{
        path: 'searchRecipe/:userId',
        component: _pages_dashboard2_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeComponent"]
      }, {
        path: 'myProfile/:userId',
        component: _pages_dashboard2_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__["MyProfileComponent"]
      }]
    }, {
      path: 'refresh',
      component: _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_7__["RefreshComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'register',
      component: _pages_login_page_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__["RegisterPageComponent"]
    }, {
      path: 'forgotPassword',
      component: _pages_login_page_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]
    }, {
      path: 'resetPassword/:token',
      component: _pages_login_page_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]
    }, {
      path: 'confirmUser/:token',
      component: _pages_login_page_confirm_user_confirm_user_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmUserComponent"]
    }, {
      path: '**',
      redirectTo: 'login'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _backend_mock_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../backend-mock/interceptor */
    "./src/backend-mock/interceptor.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _pages_login_page_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/login-page/register-page/register-page.component */
    "./src/app/pages/login-page/register-page/register-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_inputs_inputs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/inputs/inputs.module */
    "./src/app/components/inputs/inputs.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pages_dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/dashboard2/dashboard2.component */
    "./src/app/pages/dashboard2/dashboard2.component.ts");
    /* harmony import */


    var _pages_dashboard2_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/dashboard2/recipe/recipe.component */
    "./src/app/pages/dashboard2/recipe/recipe.component.ts");
    /* harmony import */


    var _pages_dashboard2_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/dashboard2/my-profile/my-profile.component */
    "./src/app/pages/dashboard2/my-profile/my-profile.component.ts");
    /* harmony import */


    var _pages_dashboard2_dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/dashboard2/dashboard2-routing.module */
    "./src/app/pages/dashboard2/dashboard2-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/token-interceptor.service */
    "./src/app/services/token-interceptor.service.ts");
    /* harmony import */


    var _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/refresh/refresh.component */
    "./src/app/pages/refresh/refresh.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts"); // http interceptors


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptorService"],
        multi: true
      }, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], // provider used to create fake backend
      _backend_mock_interceptor__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _components_inputs_inputs_module__WEBPACK_IMPORTED_MODULE_9__["InputsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _pages_dashboard2_dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_14__["Dashboard2RoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_login_page_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPageComponent"], _pages_dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_11__["Dashboard2Component"], _pages_dashboard2_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_12__["RecipeComponent"], _pages_dashboard2_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_13__["MyProfileComponent"], _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_18__["RefreshComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _components_inputs_inputs_module__WEBPACK_IMPORTED_MODULE_9__["InputsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _pages_dashboard2_dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_14__["Dashboard2RoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_login_page_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPageComponent"], _pages_dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_11__["Dashboard2Component"], _pages_dashboard2_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_12__["RecipeComponent"], _pages_dashboard2_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_13__["MyProfileComponent"], _pages_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_18__["RefreshComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _components_inputs_inputs_module__WEBPACK_IMPORTED_MODULE_9__["InputsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _pages_dashboard2_dashboard2_routing_module__WEBPACK_IMPORTED_MODULE_14__["Dashboard2RoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptorService"],
            multi: true
          }, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], // provider used to create fake backend
          _backend_mock_interceptor__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _directives_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../directives/directives.module */
    "./src/app/directives/directives.module.ts");
    /* harmony import */


    var _inputs_inputs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inputs/inputs.module */
    "./src/app/components/inputs/inputs.module.ts");
    /* harmony import */


    var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page-header/page-header.component */
    "./src/app/components/page-header/page-header.component.ts");
    /* harmony import */


    var _page_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page-header/navigation/navigation.component */
    "./src/app/components/page-header/navigation/navigation.component.ts");
    /* harmony import */


    var _logo_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _page_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./page-header/notifications/notifications.component */
    "./src/app/components/page-header/notifications/notifications.component.ts");
    /* harmony import */


    var _page_header_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./page-header/user-profile/user-profile.component */
    "./src/app/components/page-header/user-profile/user-profile.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _sidebar_editors_manage_regions_areas_manage_regions_areas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sidebar/editors/manage-regions-areas/manage-regions-areas.component */
    "./src/app/components/sidebar/editors/manage-regions-areas/manage-regions-areas.component.ts");
    /* harmony import */


    var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./mobile-menu/mobile-menu.component */
    "./src/app/components/mobile-menu/mobile-menu.component.ts");
    /* harmony import */


    var _container_header_container_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./container-header/container-header.component */
    "./src/app/components/container-header/container-header.component.ts");
    /* harmony import */


    var _radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./radio-group/radio-group.component */
    "./src/app/components/radio-group/radio-group.component.ts");
    /* harmony import */


    var _table_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./table/table.component */
    "./src/app/components/table/table.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _table_check_box_table_check_box_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./table/check-box-table/check-box-table.component */
    "./src/app/components/table/check-box-table/check-box-table.component.ts");
    /* harmony import */


    var _icons_icons_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./icons/icons.module */
    "./src/app/components/icons/icons.module.ts");
    /* harmony import */


    var _table_radio_table_radio_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./table/radio-table/radio-table.component */
    "./src/app/components/table/radio-table/radio-table.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./result-card/result-card.component */
    "./src/app/components/result-card/result-card.component.ts");
    /* harmony import */


    var _error_message_error_message_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./error-message/error-message.component */
    "./src/app/components/error-message/error-message.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _food_icon_food_icon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./food-icon/food-icon.component */
    "./src/app/components/food-icon/food-icon.component.ts");
    /* harmony import */


    var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./loading-spinner/loading-spinner.component */
    "./src/app/components/loading-spinner/loading-spinner.component.ts");
    /* harmony import */


    var _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./recipe-card/recipe-card.component */
    "./src/app/components/recipe-card/recipe-card.component.ts");

    var components = [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _page_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"], _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_22__["ResultCardComponent"], _container_header_container_header_component__WEBPACK_IMPORTED_MODULE_14__["ContainerHeaderComponent"], _radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_15__["RadioGroupComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_16__["TableComponent"], _table_radio_table_radio_table_component__WEBPACK_IMPORTED_MODULE_20__["RadioTableComponent"], _table_check_box_table_check_box_table_component__WEBPACK_IMPORTED_MODULE_18__["CheckBoxTableComponent"], _error_message_error_message_component__WEBPACK_IMPORTED_MODULE_23__["ErrorMessageComponent"], _page_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"], _page_header_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], _sidebar_editors_manage_regions_areas_manage_regions_areas_component__WEBPACK_IMPORTED_MODULE_12__["ManageRegionsAreasComponent"], _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_13__["MobileMenuComponent"], _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_22__["ResultCardComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"], _food_icon_food_icon_component__WEBPACK_IMPORTED_MODULE_25__["FoodIconComponent"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_26__["LoadingSpinnerComponent"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_27__["RecipeCardComponent"]];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"], _inputs_inputs_module__WEBPACK_IMPORTED_MODULE_5__["InputsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_19__["IconsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
        declarations: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _page_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"], _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_22__["ResultCardComponent"], _container_header_container_header_component__WEBPACK_IMPORTED_MODULE_14__["ContainerHeaderComponent"], _radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_15__["RadioGroupComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_16__["TableComponent"], _table_radio_table_radio_table_component__WEBPACK_IMPORTED_MODULE_20__["RadioTableComponent"], _table_check_box_table_check_box_table_component__WEBPACK_IMPORTED_MODULE_18__["CheckBoxTableComponent"], _error_message_error_message_component__WEBPACK_IMPORTED_MODULE_23__["ErrorMessageComponent"], _page_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"], _page_header_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], _sidebar_editors_manage_regions_areas_manage_regions_areas_component__WEBPACK_IMPORTED_MODULE_12__["ManageRegionsAreasComponent"], _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_13__["MobileMenuComponent"], _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_22__["ResultCardComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"], _food_icon_food_icon_component__WEBPACK_IMPORTED_MODULE_25__["FoodIconComponent"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_26__["LoadingSpinnerComponent"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_27__["RecipeCardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"], _inputs_inputs_module__WEBPACK_IMPORTED_MODULE_5__["InputsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_19__["IconsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]],
        exports: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__["PageHeaderComponent"], _page_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"], _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_22__["ResultCardComponent"], _container_header_container_header_component__WEBPACK_IMPORTED_MODULE_14__["ContainerHeaderComponent"], _radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_15__["RadioGroupComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_16__["TableComponent"], _table_radio_table_radio_table_component__WEBPACK_IMPORTED_MODULE_20__["RadioTableComponent"], _table_check_box_table_check_box_table_component__WEBPACK_IMPORTED_MODULE_18__["CheckBoxTableComponent"], _error_message_error_message_component__WEBPACK_IMPORTED_MODULE_23__["ErrorMessageComponent"], _page_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"], _page_header_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], _sidebar_editors_manage_regions_areas_manage_regions_areas_component__WEBPACK_IMPORTED_MODULE_12__["ManageRegionsAreasComponent"], _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_13__["MobileMenuComponent"], _result_card_result_card_component__WEBPACK_IMPORTED_MODULE_22__["ResultCardComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"], _food_icon_food_icon_component__WEBPACK_IMPORTED_MODULE_25__["FoodIconComponent"], _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_26__["LoadingSpinnerComponent"], _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_27__["RecipeCardComponent"], _container_header_container_header_component__WEBPACK_IMPORTED_MODULE_14__["ContainerHeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [].concat(components),
          exports: [].concat(components, [_container_header_container_header_component__WEBPACK_IMPORTED_MODULE_14__["ContainerHeaderComponent"]]),
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"], _directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"], _inputs_inputs_module__WEBPACK_IMPORTED_MODULE_5__["InputsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_19__["IconsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/container-header/container-header.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/container-header/container-header.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ContainerHeaderComponent */

  /***/
  function srcAppComponentsContainerHeaderContainerHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerHeaderComponent", function () {
      return ContainerHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContainerHeaderComponent = /*#__PURE__*/function () {
      function ContainerHeaderComponent() {
        _classCallCheck(this, ContainerHeaderComponent);
      }

      _createClass(ContainerHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContainerHeaderComponent;
    }();

    ContainerHeaderComponent.ɵfac = function ContainerHeaderComponent_Factory(t) {
      return new (t || ContainerHeaderComponent)();
    };

    ContainerHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContainerHeaderComponent,
      selectors: [["app-container-header"]],
      inputs: {
        title: "title"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "row"], [1, "title"]],
      template: function ContainerHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 550;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci1oZWFkZXIvY29udGFpbmVyLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXItaGVhZGVyL2NvbnRhaW5lci1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFFQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXItaGVhZGVyL2NvbnRhaW5lci1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcblxuICBmb250LXdlaWdodDogNTUwO1xufVxuIiwiLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-container-header',
          templateUrl: './container-header.component.html',
          styleUrls: ['./container-header.component.scss']
        }]
      }], function () {
        return [];
      }, {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/error-message/error-message.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/error-message/error-message.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ErrorMessageComponent */

  /***/
  function srcAppComponentsErrorMessageErrorMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function () {
      return ErrorMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorMessageComponent = /*#__PURE__*/function () {
      function ErrorMessageComponent() {
        _classCallCheck(this, ErrorMessageComponent);
      }

      _createClass(ErrorMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorMessageComponent;
    }();

    ErrorMessageComponent.ɵfac = function ErrorMessageComponent_Factory(t) {
      return new (t || ErrorMessageComponent)();
    };

    ErrorMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorMessageComponent,
      selectors: [["app-error-message"]],
      inputs: {
        message: "message"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "alert-warning", "d-flex", "justify-content-center"]],
      template: function ErrorMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-message',
          templateUrl: './error-message.component.html',
          styleUrls: ['./error-message.component.scss']
        }]
      }], function () {
        return [];
      }, {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/food-icon/food-icon.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/food-icon/food-icon.component.ts ***!
    \*************************************************************/

  /*! exports provided: FoodIconComponent */

  /***/
  function srcAppComponentsFoodIconFoodIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodIconComponent", function () {
      return FoodIconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        height: a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "background-image": a0
      };
    };

    function FoodIconComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FoodIconComponent_div_0_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.changeStatut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.height));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, "url(../../../assets/ingredients/" + ctx_r0.icon + ".svg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.capitalizeFirstLetter(ctx_r0.name), " ");
      }
    }

    function FoodIconComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FoodIconComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.changeStatut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.height));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, "url(../../../assets/ingredients/" + ctx_r1.icon + ".svg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.capitalizeFirstLetter(ctx_r1.name), " ");
      }
    }

    var FoodIconComponent = /*#__PURE__*/function () {
      function FoodIconComponent() {
        _classCallCheck(this, FoodIconComponent);

        this.changeStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.statut = false;
      }

      _createClass(FoodIconComponent, [{
        key: "capitalizeFirstLetter",
        value: function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeStatut",
        value: function changeStatut() {
          this.statut = !this.statut;
          var status = this.name + ',' + this.statut;
          this.changeStatus.emit(status);
        }
      }]);

      return FoodIconComponent;
    }();

    FoodIconComponent.ɵfac = function FoodIconComponent_Factory(t) {
      return new (t || FoodIconComponent)();
    };

    FoodIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FoodIconComponent,
      selectors: [["app-food-icon"]],
      inputs: {
        height: "height",
        icon: "icon",
        width: "width",
        name: "name"
      },
      outputs: {
        changeStatus: "changeStatus"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "container", 3, "ngStyle", "click", 4, "ngIf"], ["class", "container1", 3, "ngStyle", "click", 4, "ngIf"], [1, "container", 3, "ngStyle", "click"], [1, "content", 3, "ngStyle"], [1, "d-flex", "justify-content-center", "name"], [1, "container1", 3, "ngStyle", "click"], [1, "content1", 3, "ngStyle"], [1, "d-flex", "justify-content-center", "name1"]],
      template: function FoodIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FoodIconComponent_div_0_Template, 4, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FoodIconComponent_div_1_Template, 4, 7, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.statut == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.statut == true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".container[_ngcontent-%COMP%] {\n  border: 2px solid #0066b2;\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]:hover {\n  background-color: #0066b2;\n}\n.container1[_ngcontent-%COMP%] {\n  border: 2px solid #0066b2;\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n  background-color: #0066b2;\n}\n.container[_ngcontent-%COMP%]:hover    > .content[_ngcontent-%COMP%] {\n  -webkit-filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(290deg) brightness(109%) contrast(101%);\n          filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(290deg) brightness(109%) contrast(101%);\n}\n.container[_ngcontent-%COMP%]:hover    > .name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-bottom: 2px;\n  margin-top: -10%;\n  font-weight: 600;\n}\n.container[_ngcontent-%COMP%]:active    > .content[_ngcontent-%COMP%] {\n  -webkit-filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(290deg) brightness(109%) contrast(101%);\n          filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(290deg) brightness(109%) contrast(101%);\n}\n.container[_ngcontent-%COMP%]:active    > .name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-bottom: 2px;\n  margin-top: -10%;\n  font-weight: 600;\n}\n.container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n  \n}\n.container1[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n  \n}\n.content[_ngcontent-%COMP%] {\n  padding: 0px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  height: calc((100% / 3) * 2);\n  width: calc(100% / 2);\n  background-repeat: no-repeat;\n  -webkit-filter: invert(20%) sepia(94%) saturate(7237%) hue-rotate(195deg) brightness(98%) contrast(101%);\n          filter: invert(20%) sepia(94%) saturate(7237%) hue-rotate(195deg) brightness(98%) contrast(101%);\n}\n.content1[_ngcontent-%COMP%] {\n  padding: 0px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  height: calc((100% / 3) * 2);\n  width: calc(100% / 2);\n  background-repeat: no-repeat;\n  -webkit-filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(290deg) brightness(109%) contrast(101%);\n          filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(290deg) brightness(109%) contrast(101%);\n}\n.name[_ngcontent-%COMP%] {\n  color: #0066b2;\n  margin-bottom: 2px;\n  margin-top: -10%;\n  font-weight: 600;\n  font-size: 1vw;\n}\n.name1[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-bottom: 2px;\n  margin-top: -10%;\n  font-weight: 600;\n}\n@media only screen and (max-width: 900px) {\n  .name[_ngcontent-%COMP%] {\n    color: #0066b2;\n    margin-bottom: 2px;\n    margin-top: -10%;\n    font-weight: 600;\n    font-size: 3vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2Zvb2QtaWNvbi9mb29kLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vZC1pY29uL2Zvb2QtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7QUNFSjtBRENBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRUY7QURBQTtFQUNFLHlHQUFBO1VBQUEsaUdBQUE7QUNHRjtBREFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0dGO0FEREE7RUFDRSx5R0FBQTtVQUFBLGlHQUFBO0FDSUY7QUREQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJRjtBREZBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDS0Y7QURIQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ01GO0FESkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0dBQUE7VUFBQSxnR0FBQTtBQ09GO0FESkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUdBQUE7VUFBQSxpR0FBQTtBQ09GO0FESkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ09GO0FETEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDUUY7QUROQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNTRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb29kLWljb24vZm9vZC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDY2YjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XG4gIH1cbn1cbi5jb250YWluZXIxIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNjZiMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbn1cbi5jb250YWluZXI6aG92ZXIgPiAuY29udGVudCB7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgyOTBkZWcpXG4gICAgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCgxMDElKTtcbn1cbi5jb250YWluZXI6aG92ZXIgPiAubmFtZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIG1hcmdpbi10b3A6IC0xMCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFpbmVyOmFjdGl2ZSA+IC5jb250ZW50IHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDI5MGRlZylcbiAgICBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDEwMSUpO1xufVxuLmNvbnRhaW5lcjphY3RpdmUgPiAubmFtZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIG1hcmdpbi10b3A6IC0xMCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgLyogaW5pdGlhbCByYXRpbyBvZiAxOjEqL1xufVxuLmNvbnRhaW5lcjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAxMDAlO1xuICAvKiBpbml0aWFsIHJhdGlvIG9mIDE6MSovXG59XG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiBjYWxjKCgxMDAlIC8gMykgKiAyKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IGludmVydCgyMCUpIHNlcGlhKDk0JSkgc2F0dXJhdGUoNzIzNyUpIGh1ZS1yb3RhdGUoMTk1ZGVnKVxuICAgIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMDElKTtcbn1cbi5jb250ZW50MSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiBjYWxjKCgxMDAlIC8gMykgKiAyKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMjkwZGVnKVxuICAgIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoMTAxJSk7XG59XG4ubmFtZSB7XG4gIGNvbG9yOiAjMDA2NmIyO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIG1hcmdpbi10b3A6IC0xMCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMXZ3O1xufVxuLm5hbWUxIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLm5hbWUge1xuICAgIGNvbG9yOiAjMDA2NmIyO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gIH1cbn1cbiIsIi5jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA2NmIyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XG59XG5cbi5jb250YWluZXIxIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNjZiMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbn1cblxuLmNvbnRhaW5lcjpob3ZlciA+IC5jb250ZW50IHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDI5MGRlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCgxMDElKTtcbn1cblxuLmNvbnRhaW5lcjpob3ZlciA+IC5uYW1lIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbnRhaW5lcjphY3RpdmUgPiAuY29udGVudCB7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgyOTBkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoMTAxJSk7XG59XG5cbi5jb250YWluZXI6YWN0aXZlID4gLm5hbWUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgLyogaW5pdGlhbCByYXRpbyBvZiAxOjEqL1xufVxuXG4uY29udGFpbmVyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDEwMCU7XG4gIC8qIGluaXRpYWwgcmF0aW8gb2YgMToxKi9cbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogY2FsYygoMTAwJSAvIDMpICogMik7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBpbnZlcnQoMjAlKSBzZXBpYSg5NCUpIHNhdHVyYXRlKDcyMzclKSBodWUtcm90YXRlKDE5NWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMSUpO1xufVxuXG4uY29udGVudDEge1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogY2FsYygoMTAwJSAvIDMpICogMik7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDI5MGRlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCgxMDElKTtcbn1cblxuLm5hbWUge1xuICBjb2xvcjogIzAwNjZiMjtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDF2dztcbn1cblxuLm5hbWUxIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAubmFtZSB7XG4gICAgY29sb3I6ICMwMDY2YjI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-food-icon',
          templateUrl: './food-icon.component.html',
          styleUrls: ['./food-icon.component.scss']
        }]
      }], function () {
        return [];
      }, {
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changeStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/sidebars.service */
    "./src/app/services/sidebars.service.ts");
    /* harmony import */


    var src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/unit.service */
    "./src/app/services/unit.service.ts");
    /* harmony import */


    var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function HeaderComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_14_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleMenu(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, page_r1.path));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1.title);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, route, authenticationService, sidebar, unitsService) {
        var _this = this;

        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.sidebar = sidebar;
        this.unitsService = unitsService;
        this.userName = '';
        this.menu = {
          isOpen: false
        };
        this.userId = this.route.snapshot.paramMap.get('userId');
        this.pages = [{
          title: 'Search Recipe',
          path: 'searchRecipe/' + this.userId
        }, {
          title: 'My Profile',
          path: 'myProfile/' + this.userId
        }];
        console.log(this.userId);
        this.authenticationService.getData(this.userId).subscribe(function (res) {
          _this.userName = res.userName;
        });
      }

      _createClass(HeaderComponent, [{
        key: "logout",
        value: function logout() {
          localStorage.removeItem('token');
          this.router.navigate(['login']);
        }
      }, {
        key: "reset",
        value: function reset() {
          var _this2 = this;

          this.router.navigateByUrl('refresh', {
            skipLocationChange: true
          }).then(function () {
            _this2.router.navigateByUrl('dashboardPage/' + _this2.userId + '/searchRecipe/' + _this2.userId);
          });
        }
        /**
         * Toggle mobile menu
         * @param toggl Show or hide menu
         */

      }, {
        key: "toggleMenu",
        value: function toggleMenu(toggl) {
          var isOpen = this.menu.isOpen;
          this.menu.isOpen = typeof toggl === 'boolean' ? toggl : !isOpen;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_3__["SidebarsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_4__["UnitService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        user: "user"
      },
      decls: 19,
      vars: 3,
      consts: [[1, "wrap"], [2, "padding", "25px"], [1, "flex", "center", "is-mobile", 3, "hidden"], ["type", "form"], [2, "display", "flex", "flex-direction", "row-reverse"], ["type", "form", 2, "position", "absolute", "left", "50%", "transform", "translate(-52%, -15%)", "margin-bottom", "5px"], [1, "user-data", "flex"], ["id", "userName", 1, "mr-2"], [2, "display", "inline-block", 3, "click"], [1, "fa", "fa-sign-out"], [1, "content-wrap", "nav-wrap", 2, "padding-top", "20px", "padding-bottom", "20px"], [4, "ngFor", "ngForOf"], [1, "btn", "primary", "add-transaction-btn", 3, "click"], ["id", "refreshIcon", 1, "fa", "fa-refresh"], [1, "is-not-mobile"], ["routerLinkActive", "active", 3, "routerLink", "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-logo", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-logo", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_9_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_li_14_Template, 3, 4, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_15_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.menu.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        }
      },
      directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.flex.center[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 100%;\n}\n.wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  padding-top: 2px;\n}\n.wrap[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #0066b2;\n}\n.content-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.content-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  justify-content: space-between;\n}\n.content-wrap[_ngcontent-%COMP%]   .notif-el[_ngcontent-%COMP%]    + .profile-el[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 60px;\n  position: relative;\n}\n.nav-wrap[_ngcontent-%COMP%] {\n  height: 50px;\n  border-top: 1px solid #f5f6f7;\n}\n.add-transaction-btn[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: auto;\n  justify-content: center;\n  align-items: center;\n}\n.add-transaction-btn[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  width: 9px;\n  margin-right: 5px;\n}\n.header-inputs[_ngcontent-%COMP%] {\n  min-width: 375px;\n}\n.header-inputs[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%]    + app-select[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.settings-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 4px;\n  border: 1px solid #dbdcdd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.settings-btn[_ngcontent-%COMP%]:hover, .settings-btn[_ngcontent-%COMP%]:focus, .settings-btn[_ngcontent-%COMP%]:active {\n  border-color: #0066b2;\n}\n.toggle-mobile-menu[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 16px;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: block;\n  height: calc(100vh - 60px);\n  width: 100%;\n  position: absolute;\n  top: 60px;\n  left: 0;\n  background: #fff;\n}\n.mobile-menu[_ngcontent-%COMP%]:not(.is-open) {\n  display: none;\n}\n#refreshIcon[_ngcontent-%COMP%] {\n  width: 12px;\n  margin-right: 4px;\n}\n.user-data[_ngcontent-%COMP%] {\n  color: #6b6d6f;\n}\n.user-data[_ngcontent-%COMP%]:hover {\n  color: #0066b2;\n}\n.user-data[_ngcontent-%COMP%]   #userName[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n.user-data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  font-size: 14px;\n  line-height: 16px;\n  font-weight: 600;\n}\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin: 0 -22px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6b6d6f;\n  margin: 0 22px;\n  padding-left: 4px;\n  padding-right: 4px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  height: 2px;\n  margin-top: 5px;\n  background: #0066b2;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #009dd9;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  padding-bottom: 2px;\n  color: #0066b2;\n  text-decoration: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #0066b2;\n  text-decoration: none;\n  border-radius: 1px;\n}\n.active-route[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  color: #0066b2;\n  font-weight: 600;\n}\n.active-route[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL3N0eWxlcy9pbmNsdWRlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RGO0FERUU7RUFDRSx1QkFBQTtFQUNBLFdBQUE7QUNBSjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CRVRXO0FEUWY7QURLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FESUU7RUFDRSxVQUFBO0FDRko7QURLRTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQ0hKO0FETUU7RUFDRSxpQkFBQTtBQ0pKO0FEUUE7RUFDRSxZRXhDbUI7RUZ5Q25CLGtCQUFBO0FDTEY7QURRQTtFQUNFLFlFNUNrQjtFRjZDbEIsNkJBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0xGO0FETUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRFFBO0VBQ0UsZ0JBQUE7QUNMRjtBRE1FO0VBQ0UsaUJBQUE7QUNKSjtBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDTEY7QURPRTtFQUdFLHFCRXhFVztBRGlFZjtBRFdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDUkY7QURXQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFNFL0ZtQjtFRmdHbkIsT0FBQTtFQUVBLGdCRTVGTTtBRGtGUjtBRFlFO0VBQ0UsYUFBQTtBQ1ZKO0FENkNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDMUNGO0FENENBO0VBSUUsY0FBQTtBQzVDRjtBRHlDRTtFQUNFLGNFdElXO0FEK0ZmO0FEMENFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDeENKO0FEMkNJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUN6Q047QUQrQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDNUNGO0FENkNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0VqS1M7RUZrS1QsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMzQ0o7QUQ2Q0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUMzQ047QUQ2Q007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CRXhMTztBRDZJZjtBRDhDTTtFQUNFLFdBQUE7QUM1Q1I7QUQ4Q007RUFDRSxnQkFBQTtFQUNBLGNFL0xHO0FEbUpYO0FEOENNO0VBQ0UsbUJBQUE7RUFDQSxjRXBNTztFRnFNUCxxQkFBQTtBQzVDUjtBRCtDSTtFQUNFLGNFek1TO0VGME1ULHFCQUFBO0VBRUEsa0JBQUE7QUM5Q047QURtREE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0VyTmE7RUZzTmIsZ0JBQUE7QUNoREY7QURpREU7RUFDRSxnQkFBQTtBQy9DSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJpbmNsdWRlcy92YXJpYWJsZXNcIjtcblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmLmNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLndyYXAge1xuICBiYWNrZ3JvdW5kOiAkY29udGVudC1ib3gtYmc7XG4gIHBhZGRpbmctdG9wOiAycHg7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICRibHVlLXByaW1hcnk7XG4gIH1cbn1cblxuLmNvbnRlbnQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmxlZnQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAucmlnaHQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLm5vdGlmLWVsICsgLnByb2ZpbGUtZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG59XG5cbi50b3BiYXIge1xuICBoZWlnaHQ6ICRwYWdlLWhlYWRlci1oZWlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi13cmFwIHtcbiAgaGVpZ2h0OiAkbmF2aWdhdGlvbi1oZWlnaHQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYmctY29sb3I7XG59XG5cbi5hZGQtdHJhbnNhY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuaWMge1xuICAgIHdpZHRoOiA5cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbn1cblxuLmhlYWRlci1pbnB1dHMge1xuICBtaW4td2lkdGg6IDM3NXB4O1xuICBhcHAtc2VsZWN0ICsgYXBwLXNlbGVjdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLnNldHRpbmdzLWJ0biB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktbGlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWUtcHJpbWFyeTtcbiAgfVxufVxuXG4udG9nZ2xlLW1vYmlsZS1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLm1vYmlsZS1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICN7JHBhZ2UtaGVhZGVyLWhlaWdodH0pO1xuICB3aWR0aDogMTAwJTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHBhZ2UtaGVhZGVyLWhlaWdodDtcbiAgbGVmdDogMDtcblxuICBiYWNrZ3JvdW5kOiAkY29udGVudC1ib3gtYmc7XG5cbiAgJjpub3QoLmlzLW9wZW4pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8vIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWJyKSB7XG4vLyAgIC50b2dnbGUtbW9iaWxlLW1lbnUge1xuLy8gICAgICYuaXMtb3BlbiArIC5oZWFkZXItaW5wdXRzIHtcbi8vICAgICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgLmNvbnRlbnQtd3JhcCB7XG4vLyAgICAgcGFkZGluZzogMCAxNnB4O1xuLy8gICAgIC5sZWZ0LFxuLy8gICAgIC5yaWdodCB7XG4vLyAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICAuaGVhZGVyLWlucHV0cyB7XG4vLyAgICAgbWluLXdpZHRoOiBhdXRvO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgfVxuXG4vLyAgIC51c2VyLWRhdGEge1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICBwYWRkaW5nOiAwIDE2cHg7XG4vLyAgIH1cblxuLy8gICAuYWRkLXRyYW5zYWN0aW9uLWJ0biB7XG4vLyAgICAgaGVpZ2h0OiAzNHB4O1xuLy8gICAgIHdpZHRoOiAzNHB4O1xuLy8gICAgIG1pbi13aWR0aDogYXV0bztcbi8vICAgfVxuLy8gfVxuI3JlZnJlc2hJY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLnVzZXItZGF0YSB7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkYmx1ZS1wcmltYXJ5O1xuICB9XG4gIGNvbG9yOiAjNmI2ZDZmO1xuICAjdXNlck5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIHNwYW4ge1xuICAgIGkge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuQGltcG9ydCBcImluY2x1ZGVzL3ZhcmlhYmxlc1wiO1xuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbjogMCAtMjJweDtcbiAgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGxpbmstY29sb3I7XG4gICAgbWFyZ2luOiAwIDIycHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xuXG4gICAgYSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGJsdWUtcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogJGJsdWUtYWx0O1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1wcmltYXJ5O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRibHVlLXByaW1hcnk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICB9XG4gIH1cbn1cblxuLmFjdGl2ZS1yb3V0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICRibHVlLXByaW1hcnk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC5pYyB7XG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgfVxufVxuXG4vLyBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1icikge1xuLy8gICBuYXYge1xuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICB0b3A6ICRwYWdlLWhlYWRlci1oZWlnaHQgKyAkbmF2aWdhdGlvbi1oZWlnaHQ7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBiYWNrZ3JvdW5kOiAkY29udGVudC1ib3gtYmc7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgICAgJjpub3QoLmlzLW9wZW4pIHtcbi8vICAgICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgdWwge1xuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuXG4vLyAgICAgbGkge1xuLy8gICAgICAgJjpob3ZlciB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlLXRlcm5hcnk7XG4vLyAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbi8vICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICBwYWRkaW5nOiAwIDIxcHg7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbi8vICAgICAgIH1cblxuLy8gICAgICAgYSB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAmOmFmdGVyIHtcbi8vICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgICYuYWN0aXZlIHtcbi8vICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuLy8gICAgICAgICAgIGNvbG9yOiAkYmx1ZS1hbHQ7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbiIsIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mbGV4LmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndyYXAge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLndyYXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwMDY2YjI7XG59XG5cbi5jb250ZW50LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQtd3JhcCAubGVmdCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uY29udGVudC13cmFwIC5yaWdodCB7XG4gIHdpZHRoOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250ZW50LXdyYXAgLm5vdGlmLWVsICsgLnByb2ZpbGUtZWwge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnRvcGJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2LXdyYXAge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVmNmY3O1xufVxuXG4uYWRkLXRyYW5zYWN0aW9uLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGQtdHJhbnNhY3Rpb24tYnRuIC5pYyB7XG4gIHdpZHRoOiA5cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaGVhZGVyLWlucHV0cyB7XG4gIG1pbi13aWR0aDogMzc1cHg7XG59XG4uaGVhZGVyLWlucHV0cyBhcHAtc2VsZWN0ICsgYXBwLXNlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc2V0dGluZ3MtYnRuIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkY2RkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNldHRpbmdzLWJ0bjpob3ZlciwgLnNldHRpbmdzLWJ0bjpmb2N1cywgLnNldHRpbmdzLWJ0bjphY3RpdmUge1xuICBib3JkZXItY29sb3I6ICMwMDY2YjI7XG59XG5cbi50b2dnbGUtbW9iaWxlLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4ubW9iaWxlLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tb2JpbGUtbWVudTpub3QoLmlzLW9wZW4pIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3JlZnJlc2hJY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4udXNlci1kYXRhIHtcbiAgY29sb3I6ICM2YjZkNmY7XG59XG4udXNlci1kYXRhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDY2YjI7XG59XG4udXNlci1kYXRhICN1c2VyTmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi51c2VyLWRhdGEgc3BhbiBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luOiAwIC0yMnB4O1xufVxudWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzZiNmQ2ZjtcbiAgbWFyZ2luOiAwIDIycHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG51bCBsaSBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudWwgbGkgYTphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDY2YjI7XG59XG51bCBsaSBhLmFjdGl2ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG51bCBsaSBhLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDA5ZGQ5O1xufVxudWwgbGkgYTpob3ZlciB7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIGNvbG9yOiAjMDA2NmIyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG51bCBsaTpob3ZlciB7XG4gIGNvbG9yOiAjMDA2NmIyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cblxuLmFjdGl2ZS1yb3V0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMDY2YjI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYWN0aXZlLXJvdXRlIC5pYyB7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59IiwiLy8gZm9udHNcbiRtYWluLWZvbnQ6IEFyaWFsO1xuJGFsdC1mb250OiBBcmlhbDtcblxuLy8gc2l6ZXNcbiRjb250ZW50LXdpZHRoOiAxMzY2cHg7XG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA2MHB4O1xuJG5hdmlnYXRpb24taGVpZ2h0OiA1MHB4O1xuXG4vLyBjb2xvcnNcbiR0ZXh0LWNvbG9yOiAjMDAwO1xuJGJnLWNvbG9yOiAjZjVmNmY3O1xuJHdoaXRlOiAjZmZmO1xuJGNvbnRlbnQtYm94LWJnOiAkd2hpdGU7XG4kYmx1ZS1wcmltYXJ5OiAjMDA2NmIyO1xuJGJsdWUtYWx0OiAjMDA5ZGQ5O1xuJGJsdWUtdGVybmFyeTogI2YyZmFmZDtcbiRncmF5LXByaW1hcnk6ICM4YzhmOTM7XG4kZ3JheS1saWdodDogI2RiZGNkZDtcbiRhY3RpdmUtbGluay1jb2xvcjogIzAwMDtcbiRsaW5rLWNvbG9yOiAjNmI2ZDZmO1xuJG5vdGlmaWNhdGlvbi1jb2xvcjogI2UyMTgzNjtcblxuJHVzZXItYXZhdGFyLWJnLWNvbG9yOiAjMDBiMmJkO1xuXG4vLyBzaWRlYmFyXG4kb3ZlcmxheS1jb2xvcjogcmdiYSgwLDAsMCwuMjUpO1xuJHNpZGViYXItd2lkdGg6IDM2MHB4O1xuXG4kbW9iaWxlLWJyOiA3NjhweDtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_3__["SidebarsService"]
        }, {
          type: src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_4__["UnitService"]
        }];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/icons/calendar/calendar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/icons/calendar/calendar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppComponentsIconsCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CalendarComponent = /*#__PURE__*/function () {
      function CalendarComponent() {
        _classCallCheck(this, CalendarComponent);
      }

      _createClass(CalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CalendarComponent;
    }();

    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)();
    };

    CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarComponent,
      selectors: [["app-calendar"]],
      decls: 3,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 16 16"], ["width", "16", "height", "16", 1, "a"], ["d", "M1.333,14.667A1.334,1.334,0,0,1,0,13.334v-10A1.335,1.335,0,0,1,1.333,2H2V0H4.666V2h4V0h2.667V2H12a1.335,1.335,0,0,1,1.333,1.333v10A1.335,1.335,0,0,1,12,14.667Zm0-1.333H12V6H1.333Z", "transform", "translate(1.333 0.666)", 1, "b"]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".a[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.b[_ngcontent-%COMP%] {\n  fill: #6b6d6f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2ljb25zL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ljb25zL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pY29ucy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cbi5iIHtcbiAgZmlsbDogIzZiNmQ2Zjtcbn1cbiIsIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cblxuLmIge1xuICBmaWxsOiAjNmI2ZDZmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calendar',
          templateUrl: './calendar.component.html',
          styleUrls: ['./calendar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/icons/download/download.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/icons/download/download.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DownloadComponent */

  /***/
  function srcAppComponentsIconsDownloadDownloadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadComponent", function () {
      return DownloadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DownloadComponent = /*#__PURE__*/function () {
      function DownloadComponent() {
        _classCallCheck(this, DownloadComponent);
      }

      _createClass(DownloadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DownloadComponent;
    }();

    DownloadComponent.ɵfac = function DownloadComponent_Factory(t) {
      return new (t || DownloadComponent)();
    };

    DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DownloadComponent,
      selectors: [["app-download"]],
      decls: 3,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14"], ["width", "14", "height", "14", 1, "a"], ["d", "M8.749,10.5H0V7H1.75v1.75h7V7H10.5v3.5Zm-7-6.126H3.5V0H7V4.373h1.75l-3.5,3.5Z", "transform", "translate(1.75 2.625)", 1, "b"]],
      template: function DownloadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".a[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.b[_ngcontent-%COMP%] {\n  fill: #8c8f93;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2ljb25zL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ljb25zL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pY29ucy9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cbi5iIHtcbiAgZmlsbDogIzhjOGY5Mztcbn1cbiIsIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cblxuLmIge1xuICBmaWxsOiAjOGM4ZjkzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-download',
          templateUrl: './download.component.html',
          styleUrls: ['./download.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/icons/full-screen/full-screen.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/icons/full-screen/full-screen.component.ts ***!
    \***********************************************************************/

  /*! exports provided: FullScreenComponent */

  /***/
  function srcAppComponentsIconsFullScreenFullScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function () {
      return FullScreenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FullScreenComponent = /*#__PURE__*/function () {
      function FullScreenComponent() {
        _classCallCheck(this, FullScreenComponent);
      }

      _createClass(FullScreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FullScreenComponent;
    }();

    FullScreenComponent.ɵfac = function FullScreenComponent_Factory(t) {
      return new (t || FullScreenComponent)();
    };

    FullScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FullScreenComponent,
      selectors: [["app-full-screen"]],
      decls: 3,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14"], ["d", "M12.167,8.25H11V10H9.25v1.167h2.917ZM7.5,6.5H9.25V5.333H6.333V8.25H7.5ZM13.333,3H5.167A1.17,1.17,0,0,0,4,4.167v8.167A1.17,1.17,0,0,0,5.167,13.5h8.167A1.17,1.17,0,0,0,14.5,12.333V4.167A1.17,1.17,0,0,0,13.333,3Zm0,9.339H5.167V4.161h8.167Z", "transform", "translate(-2.25 -1.25)", 1, "a"], ["d", "M0,0H14V14H0Z", 1, "b"]],
      template: function FullScreenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".a[_ngcontent-%COMP%] {\n  fill: #8c8f93;\n}\n\n.b[_ngcontent-%COMP%] {\n  fill: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2ljb25zL2Z1bGwtc2NyZWVuL2Z1bGwtc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ljb25zL2Z1bGwtc2NyZWVuL2Z1bGwtc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pY29ucy9mdWxsLXNjcmVlbi9mdWxsLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hIHtcbiAgZmlsbDogIzhjOGY5Mztcbn1cbi5iIHtcbiAgZmlsbDogbm9uZTtcbn1cbiIsIi5hIHtcbiAgZmlsbDogIzhjOGY5Mztcbn1cblxuLmIge1xuICBmaWxsOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-full-screen',
          templateUrl: './full-screen.component.html',
          styleUrls: ['./full-screen.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/icons/icons.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/icons/icons.module.ts ***!
    \**************************************************/

  /*! exports provided: IconsModule */

  /***/
  function srcAppComponentsIconsIconsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsModule", function () {
      return IconsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _upload_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./upload/upload.component */
    "./src/app/components/icons/upload/upload.component.ts");
    /* harmony import */


    var _letter_letter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./letter/letter.component */
    "./src/app/components/icons/letter/letter.component.ts");
    /* harmony import */


    var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./calendar/calendar.component */
    "./src/app/components/icons/calendar/calendar.component.ts");
    /* harmony import */


    var _upload2_upload2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./upload2/upload2.component */
    "./src/app/components/icons/upload2/upload2.component.ts");
    /* harmony import */


    var _download_download_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./download/download.component */
    "./src/app/components/icons/download/download.component.ts");
    /* harmony import */


    var _full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./full-screen/full-screen.component */
    "./src/app/components/icons/full-screen/full-screen.component.ts");

    var IconsModule = function IconsModule() {
      _classCallCheck(this, IconsModule);
    };

    IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconsModule
    });
    IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IconsModule_Factory(t) {
        return new (t || IconsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, {
        declarations: [_upload_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], _letter_letter_component__WEBPACK_IMPORTED_MODULE_3__["LetterComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], _upload2_upload2_component__WEBPACK_IMPORTED_MODULE_5__["Upload2Component"], _download_download_component__WEBPACK_IMPORTED_MODULE_6__["DownloadComponent"], _full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_7__["FullScreenComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_upload_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], _letter_letter_component__WEBPACK_IMPORTED_MODULE_3__["LetterComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], _upload2_upload2_component__WEBPACK_IMPORTED_MODULE_5__["Upload2Component"], _download_download_component__WEBPACK_IMPORTED_MODULE_6__["DownloadComponent"], _full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_7__["FullScreenComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_upload_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], _letter_letter_component__WEBPACK_IMPORTED_MODULE_3__["LetterComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], _upload2_upload2_component__WEBPACK_IMPORTED_MODULE_5__["Upload2Component"], _download_download_component__WEBPACK_IMPORTED_MODULE_6__["DownloadComponent"], _full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_7__["FullScreenComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_upload_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], _letter_letter_component__WEBPACK_IMPORTED_MODULE_3__["LetterComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"], _upload2_upload2_component__WEBPACK_IMPORTED_MODULE_5__["Upload2Component"], _download_download_component__WEBPACK_IMPORTED_MODULE_6__["DownloadComponent"], _full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_7__["FullScreenComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/icons/letter/letter.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/icons/letter/letter.component.ts ***!
    \*************************************************************/

  /*! exports provided: LetterComponent */

  /***/
  function srcAppComponentsIconsLetterLetterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LetterComponent", function () {
      return LetterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LetterComponent = /*#__PURE__*/function () {
      function LetterComponent() {
        _classCallCheck(this, LetterComponent);
      }

      _createClass(LetterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LetterComponent;
    }();

    LetterComponent.ɵfac = function LetterComponent_Factory(t) {
      return new (t || LetterComponent)();
    };

    LetterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LetterComponent,
      selectors: [["app-letter"]],
      decls: 3,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14"], ["width", "14", "height", "14", 1, "a"], ["d", "M11.25,8.75H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0H11.25a1,1,0,0,1,1,1V7.75A1,1,0,0,1,11.25,8.75Zm-9.5-7,4.375,3.5L10.5,1.75Z", "transform", "translate(0.875 2.625)", 1, "b"]],
      template: function LetterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".a[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.b[_ngcontent-%COMP%] {\n  fill: #8c8f93;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2ljb25zL2xldHRlci9sZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaWNvbnMvbGV0dGVyL2xldHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWNvbnMvbGV0dGVyL2xldHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cbi5iIHtcbiAgZmlsbDogIzhjOGY5Mztcbn1cbiIsIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cblxuLmIge1xuICBmaWxsOiAjOGM4ZjkzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LetterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-letter',
          templateUrl: './letter.component.html',
          styleUrls: ['./letter.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/icons/upload/upload.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/icons/upload/upload.component.ts ***!
    \*************************************************************/

  /*! exports provided: UploadComponent */

  /***/
  function srcAppComponentsIconsUploadUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
      return UploadComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UploadComponent = /*#__PURE__*/function () {
      function UploadComponent() {
        _classCallCheck(this, UploadComponent);
      }

      _createClass(UploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UploadComponent;
    }();

    UploadComponent.ɵfac = function UploadComponent_Factory(t) {
      return new (t || UploadComponent)();
    };

    UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UploadComponent,
      selectors: [["app-upload"]],
      decls: 3,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14"], ["width", "14", "height", "14", 1, "a"], ["d", "M0,10.5V7H1.75v1.75h7V7H10.5v3.5ZM3.5,7.873V3.5H1.75L5.249,0l3.5,3.5H7V7.873Z", "transform", "translate(1.75 2.625)", 1, "b"]],
      template: function UploadComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".a[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.b[_ngcontent-%COMP%] {\n  fill: #8c8f93;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2ljb25zL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaWNvbnMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWNvbnMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cbi5iIHtcbiAgZmlsbDogIzhjOGY5Mztcbn1cbiIsIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cblxuLmIge1xuICBmaWxsOiAjOGM4ZjkzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-upload',
          templateUrl: './upload.component.html',
          styleUrls: ['./upload.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/icons/upload2/upload2.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/icons/upload2/upload2.component.ts ***!
    \***************************************************************/

  /*! exports provided: Upload2Component */

  /***/
  function srcAppComponentsIconsUpload2Upload2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Upload2Component", function () {
      return Upload2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Upload2Component = /*#__PURE__*/function () {
      function Upload2Component() {
        _classCallCheck(this, Upload2Component);
      }

      _createClass(Upload2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Upload2Component;
    }();

    Upload2Component.ɵfac = function Upload2Component_Factory(t) {
      return new (t || Upload2Component)();
    };

    Upload2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Upload2Component,
      selectors: [["app-upload2"]],
      decls: 3,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 14 14"], ["width", "14", "height", "14", 1, "a"], ["d", "M0,10.5V7H1.75v1.75h7V7H10.5v3.5ZM3.5,7.873V3.5H1.75L5.249,0l3.5,3.5H7V7.873Z", "transform", "translate(1.75 2.625)", 1, "b"]],
      template: function Upload2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".a[_ngcontent-%COMP%] {\n  fill: none;\n}\n\n.b[_ngcontent-%COMP%] {\n  fill: #8c8f93;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2ljb25zL3VwbG9hZDIvdXBsb2FkMi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pY29ucy91cGxvYWQyL3VwbG9hZDIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ljb25zL3VwbG9hZDIvdXBsb2FkMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cbi5iIHtcbiAgZmlsbDogIzhjOGY5Mztcbn1cbiIsIi5hIHtcbiAgZmlsbDogbm9uZTtcbn1cblxuLmIge1xuICBmaWxsOiAjOGM4ZjkzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Upload2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-upload2',
          templateUrl: './upload2.component.html',
          styleUrls: ['./upload2.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/inputs/checkbox/checkbox.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/inputs/checkbox/checkbox.component.ts ***!
    \******************************************************************/

  /*! exports provided: CheckboxComponent */

  /***/
  function srcAppComponentsInputsCheckboxCheckboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
      return CheckboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CheckboxComponent = /*#__PURE__*/function () {
      function CheckboxComponent() {
        _classCallCheck(this, CheckboxComponent);

        this.check = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CheckboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckboxComponent;
    }();

    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) {
      return new (t || CheckboxComponent)();
    };

    CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckboxComponent,
      selectors: [["app-checkbox"]],
      inputs: {
        checked: "checked"
      },
      outputs: {
        check: "check"
      },
      decls: 3,
      vars: 1,
      consts: [["type", "checkbox", "name", "checkbox", 1, "oldCheckbox", 3, "checked"], [1, "checkmark"]],
      template: function CheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked);
        }
      },
      styles: [".checkmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 1px;\n  bottom: 0px;\n  width: 16px;\n  cursor: pointer;\n  height: 16px;\n  background-color: transparent;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  opacity: 1;\n}\n.checkmark[_ngcontent-%COMP%]:hover {\n  background-color: #f5f6f7;\n}\n.oldCheckbox[_ngcontent-%COMP%] {\n  display: none;\n}\n.oldCheckbox[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  content: url(\"/assets/i/checkbox.png\");\n}\nlabel[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQUU7RUFDRSx5QkFBQTtBQ0VKO0FERUE7RUFDRSxhQUFBO0FDQ0Y7QURDQTtFQUNFLHNDQUFBO0FDRUY7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja21hcmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmNztcbiAgfVxufVxuXG4ub2xkQ2hlY2tib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm9sZENoZWNrYm94OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pL2NoZWNrYm94LnBuZ1wiKTtcbn1cbmxhYmVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbiIsIi5jaGVja21hcmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3BhY2l0eTogMTtcbn1cbi5jaGVja21hcms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuXG4ub2xkQ2hlY2tib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2xkQ2hlY2tib3g6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2kvY2hlY2tib3gucG5nXCIpO1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-checkbox',
          templateUrl: './checkbox.component.html',
          styleUrls: ['./checkbox.component.scss']
        }]
      }], function () {
        return [];
      }, {
        check: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/inputs/date-picker/date-picker.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/inputs/date-picker/date-picker.component.ts ***!
    \************************************************************************/

  /*! exports provided: DatePickerComponent */

  /***/
  function srcAppComponentsInputsDatePickerDatePickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function () {
      return DatePickerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _dateformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dateformat */
    "./src/app/components/inputs/dateformat.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _icons_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../icons/calendar/calendar.component */
    "./src/app/components/icons/calendar/calendar.component.ts");

    var DatePickerComponent = /*#__PURE__*/function () {
      function DatePickerComponent() {
        _classCallCheck(this, DatePickerComponent);

        this.selectedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(DatePickerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DatePickerComponent;
    }();

    DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) {
      return new (t || DatePickerComponent)();
    };

    DatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DatePickerComponent,
      selectors: [["app-date-picker"]],
      outputs: {
        selectedDate: "selectedDate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
        useClass: _dateformat__WEBPACK_IMPORTED_MODULE_2__["NgbDateCustomParserFormatter"]
      }])],
      decls: 8,
      vars: 1,
      consts: [[1, "form-inline"], [1, "form-group"], [1, "input-group"], ["placeholder", "dd/mm/yyyy", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"]],
      template: function DatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatePickerComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.model = $event;
          })("ngModelChange", function DatePickerComponent_Template_input_ngModelChange_3_listener() {
            return ctx.selectedDate.emit(ctx.model);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePickerComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _icons_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"]],
      styles: [".myForm[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  height: 32px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  max-width: 125px;\n  height: 32px;\n  font-family: Arial;\n  color: #000000;\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 32px;\n  font-family: Arial;\n  min-width: 35px;\n  background: #ffffff;\n  margin-left: 0px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  border-left: 0px;\n  cursor: pointer;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tb2hhbWVkL0Rlc2t0b3AvY3VzdC1mb29kL2FuZ3VsYXItc3JjL3NyYy9zdHlsZXMvaW5jbHVkZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtBQ0RGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCRVZTO0VGV1QsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGtCRWxCUztFRm1CVCxlQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXRzL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImluY2x1ZGVzL3ZhcmlhYmxlcy5zY3NzXCI7XG4ubXlGb3JtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gIGhlaWdodDogMzJweDtcbn1cbmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXgtd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiAkYWx0LWZvbnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4ge1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiAkYWx0LWZvbnQ7XG4gIG1pbi13aWR0aDogMzVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcblxuICBtYXJnaW4tbGVmdDogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1sZWZ0OiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbnB1dC1ncm91cCB7XG4gIGhlaWdodDogMzJweDtcbn1cbiIsIi5teUZvcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1heC13aWR0aDogMTI1cHg7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIG1pbi13aWR0aDogMzVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItbGVmdDogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIGhlaWdodDogMzJweDtcbn0iLCIvLyBmb250c1xuJG1haW4tZm9udDogQXJpYWw7XG4kYWx0LWZvbnQ6IEFyaWFsO1xuXG4vLyBzaXplc1xuJGNvbnRlbnQtd2lkdGg6IDEzNjZweDtcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDYwcHg7XG4kbmF2aWdhdGlvbi1oZWlnaHQ6IDUwcHg7XG5cbi8vIGNvbG9yc1xuJHRleHQtY29sb3I6ICMwMDA7XG4kYmctY29sb3I6ICNmNWY2Zjc7XG4kd2hpdGU6ICNmZmY7XG4kY29udGVudC1ib3gtYmc6ICR3aGl0ZTtcbiRibHVlLXByaW1hcnk6ICMwMDY2YjI7XG4kYmx1ZS1hbHQ6ICMwMDlkZDk7XG4kYmx1ZS10ZXJuYXJ5OiAjZjJmYWZkO1xuJGdyYXktcHJpbWFyeTogIzhjOGY5MztcbiRncmF5LWxpZ2h0OiAjZGJkY2RkO1xuJGFjdGl2ZS1saW5rLWNvbG9yOiAjMDAwO1xuJGxpbmstY29sb3I6ICM2YjZkNmY7XG4kbm90aWZpY2F0aW9uLWNvbG9yOiAjZTIxODM2O1xuXG4kdXNlci1hdmF0YXItYmctY29sb3I6ICMwMGIyYmQ7XG5cbi8vIHNpZGViYXJcbiRvdmVybGF5LWNvbG9yOiByZ2JhKDAsMCwwLC4yNSk7XG4kc2lkZWJhci13aWR0aDogMzYwcHg7XG5cbiRtb2JpbGUtYnI6IDc2OHB4O1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-date-picker',
          templateUrl: './date-picker.component.html',
          styleUrls: ['./date-picker.component.scss'],
          providers: [{
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
            useClass: _dateformat__WEBPACK_IMPORTED_MODULE_2__["NgbDateCustomParserFormatter"]
          }]
        }]
      }], function () {
        return [];
      }, {
        selectedDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/inputs/date-range-picker/date-range-picker.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/inputs/date-range-picker/date-range-picker.component.ts ***!
    \************************************************************************************/

  /*! exports provided: DateRangePickerComponent */

  /***/
  function srcAppComponentsInputsDateRangePickerDateRangePickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateRangePickerComponent", function () {
      return DateRangePickerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _icons_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../icons/calendar/calendar.component */
    "./src/app/components/icons/calendar/calendar.component.ts");

    function DateRangePickerComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DateRangePickerComponent_ng_template_5_Template_span_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var date_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.hoveredDate = date_r3;
        })("mouseleave", function DateRangePickerComponent_ng_template_5_Template_span_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.hoveredDate = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var date_r3 = ctx.$implicit;
        var focused_r4 = ctx.focused;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r4)("range", ctx_r2.isRange(date_r3))("faded", ctx_r2.isHovered(date_r3) || ctx_r2.isInside(date_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r3.day, " ");
      }
    }

    var DateRangePickerComponent = /*#__PURE__*/function () {
      function DateRangePickerComponent(calendar, formatter) {
        _classCallCheck(this, DateRangePickerComponent);

        this.calendar = calendar;
        this.formatter = formatter;
        this.hoveredDate = null;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
      }

      _createClass(DateRangePickerComponent, [{
        key: "onDateSelection",
        value: function onDateSelection(date) {
          if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
          } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
            this.toDate = date;
          } else {
            this.toDate = null;
            this.fromDate = date;
          }
        }
      }, {
        key: "isHovered",
        value: function isHovered(date) {
          return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
        }
      }, {
        key: "isInside",
        value: function isInside(date) {
          return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
        }
      }, {
        key: "isRange",
        value: function isRange(date) {
          return date.equals(this.fromDate) || this.toDate && date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          var myDate = date.day + '/' + date.month + '/' + date.year;
          return myDate;
        }
      }, {
        key: "validateInput",
        value: function validateInput(currentValue, input) {
          var parsed = this.formatter.parse(input);
          return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed) : currentValue;
        }
      }]);

      return DateRangePickerComponent;
    }();

    DateRangePickerComponent.ɵfac = function DateRangePickerComponent_Factory(t) {
      return new (t || DateRangePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]));
    };

    DateRangePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DateRangePickerComponent,
      selectors: [["app-date-range-picker"]],
      decls: 11,
      vars: 6,
      consts: [[1, "form-inline"], [1, "form-group", "hidden"], [1, "input-group"], ["name", "datepicker", "ngbDatepicker", "", "outsideDays", "hidden", 1, "form-control", 3, "autoClose", "displayMonths", "dayTemplate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], ["id", "exampleFormControlInput1", 1, "form-control"], [1, "calendarIcon"], [3, "click"], [1, "custom-day", 3, "mouseenter", "mouseleave"]],
      template: function DateRangePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function DateRangePickerComponent_Template_input_dateSelect_3_listener($event) {
            return ctx.onDateSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DateRangePickerComponent_ng_template_5_Template, 2, 7, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-calendar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerComponent_Template_app_calendar_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r0.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside")("displayMonths", 2)("dayTemplate", _r1)("startDate", ctx.fromDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.formatDate(ctx.fromDate), " - ", ctx.formatDate(ctx.toDate), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _icons_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"]],
      styles: [".form-group.hidden[_ngcontent-%COMP%] {\n  width: 0;\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: #0275d8;\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\ninput[_ngcontent-%COMP%] {\n  border-width: 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  z-index: 2;\n  text-align: left;\n  font-weight: normal;\n  font-size: 12px;\n  font-family: Arial;\n  color: #000000;\n  letter-spacing: 0px;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border: 1px solid #0066b2;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border: 1px solid #0066b2;\n}\n\n.calendarIcon[_ngcontent-%COMP%] {\n  margin-left: 28px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9kYXRlLXJhbmdlLXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvZGF0ZS1yYW5nZS1waWNrZXIvZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTs7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLHdDQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7RUFFQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREhFO0VBQ0UseUJBQUE7QUNLSjs7QURIRTtFQUNFLHlCQUFBO0FDS0o7O0FERkE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9kYXRlLXJhbmdlLXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJpbmNsdWRlcy92YXJpYWJsZXNcIjtcbi5mb3JtLWdyb3VwLmhpZGRlbiB7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY3VzdG9tLWRheS5mYWRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcblxuICB6LWluZGV4OiAyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDY2YjI7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwNjZiMjtcbiAgfVxufVxuLmNhbGVuZGFySWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiIsIi5mb3JtLWdyb3VwLmhpZGRlbiB7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuaW5wdXQge1xuICBib3JkZXItd2lkdGg6IDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIHotaW5kZXg6IDI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA2NmIyO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDY2YjI7XG59XG5cbi5jYWxlbmRhckljb24ge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateRangePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-date-range-picker',
          templateUrl: './date-range-picker.component.html',
          styleUrls: ['./date-range-picker.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/inputs/dateformat.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/inputs/dateformat.ts ***!
    \*************************************************/

  /*! exports provided: NgbDateCustomParserFormatter */

  /***/
  function srcAppComponentsInputsDateformatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDateCustomParserFormatter", function () {
      return NgbDateCustomParserFormatter;
    });
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NgbDateCustomParserFormatter = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
      _inherits(NgbDateCustomParserFormatter, _ng_bootstrap_ng_boot);

      var _super = _createSuper(NgbDateCustomParserFormatter);

      function NgbDateCustomParserFormatter() {
        _classCallCheck(this, NgbDateCustomParserFormatter);

        return _super.apply(this, arguments);
      }

      _createClass(NgbDateCustomParserFormatter, [{
        key: "parse",
        value: function parse(value) {
          if (value) {
            var dateParts = value.trim().split('/');

            if (dateParts.length === 1 && this.isNumber(dateParts[0])) {
              return {
                day: this.toInteger(dateParts[0]),
                month: 0,
                year: 0
              };
            } else if (dateParts.length === 2 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1])) {
              return {
                day: this.toInteger(dateParts[0]),
                month: this.toInteger(dateParts[1]),
                year: 0
              };
            } else if (dateParts.length === 3 && this.isNumber(dateParts[0]) && this.isNumber(dateParts[1]) && this.isNumber(dateParts[2])) {
              return {
                day: this.toInteger(dateParts[0]),
                month: this.toInteger(dateParts[1]),
                year: this.toInteger(dateParts[2])
              };
            }
          }

          return {
            day: 0,
            month: 0,
            year: 0
          };
        }
      }, {
        key: "isNumber",
        value: function isNumber(value) {
          return !isNaN(this.toInteger(value));
        }
      }, {
        key: "toInteger",
        value: function toInteger(value) {
          return parseInt("".concat(value), 10);
        }
      }, {
        key: "padNumber",
        value: function padNumber(value) {
          if (this.isNumber(value)) {
            return "0".concat(value).slice(-2);
          } else {
            return '';
          }
        }
      }, {
        key: "format",
        value: function format(date) {
          return date ? "".concat(this.isNumber(date.day) ? this.padNumber(date.day) : '', "/").concat(this.isNumber(date.month) ? this.padNumber(date.month) : '', "/").concat(date.year) : '';
        }
      }]);

      return NgbDateCustomParserFormatter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDateParserFormatter"]);

    NgbDateCustomParserFormatter.ɵfac = function NgbDateCustomParserFormatter_Factory(t) {
      return ɵNgbDateCustomParserFormatter_BaseFactory(t || NgbDateCustomParserFormatter);
    };

    NgbDateCustomParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NgbDateCustomParserFormatter,
      factory: NgbDateCustomParserFormatter.ɵfac
    });

    var ɵNgbDateCustomParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](NgbDateCustomParserFormatter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgbDateCustomParserFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/inputs/inputs.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/inputs/inputs.module.ts ***!
    \****************************************************/

  /*! exports provided: InputsModule */

  /***/
  function srcAppComponentsInputsInputsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputsModule", function () {
      return InputsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./select/select.component */
    "./src/app/components/inputs/select/select.component.ts");
    /* harmony import */


    var _simple_select_simple_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./simple-select/simple-select.component */
    "./src/app/components/inputs/simple-select/simple-select.component.ts");
    /* harmony import */


    var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./checkbox/checkbox.component */
    "./src/app/components/inputs/checkbox/checkbox.component.ts");
    /* harmony import */


    var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./date-picker/date-picker.component */
    "./src/app/components/inputs/date-picker/date-picker.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _icons_icons_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../icons/icons.module */
    "./src/app/components/icons/icons.module.ts");
    /* harmony import */


    var _date_range_picker_date_range_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./date-range-picker/date-range-picker.component */
    "./src/app/components/inputs/date-range-picker/date-range-picker.component.ts");
    /* harmony import */


    var _simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./simple-input/simple-input.component */
    "./src/app/components/inputs/simple-input/simple-input.component.ts");
    /* harmony import */


    var _search_field_search_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./search-field/search-field.component */
    "./src/app/components/inputs/search-field/search-field.component.ts");

    var InputsModule = function InputsModule() {
      _classCallCheck(this, InputsModule);
    };

    InputsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputsModule
    });
    InputsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InputsModule_Factory(t) {
        return new (t || InputsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputsModule, {
        declarations: [_select_select_component__WEBPACK_IMPORTED_MODULE_2__["SelectComponent"], _simple_select_simple_select_component__WEBPACK_IMPORTED_MODULE_3__["SimpleSelectComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_5__["DatePickerComponent"], _date_range_picker_date_range_picker_component__WEBPACK_IMPORTED_MODULE_9__["DateRangePickerComponent"], _simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_10__["SimpleInputComponent"], _search_field_search_field_component__WEBPACK_IMPORTED_MODULE_11__["SearchFieldComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"]],
        exports: [_select_select_component__WEBPACK_IMPORTED_MODULE_2__["SelectComponent"], _simple_select_simple_select_component__WEBPACK_IMPORTED_MODULE_3__["SimpleSelectComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_5__["DatePickerComponent"], _date_range_picker_date_range_picker_component__WEBPACK_IMPORTED_MODULE_9__["DateRangePickerComponent"], _simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_10__["SimpleInputComponent"], _search_field_search_field_component__WEBPACK_IMPORTED_MODULE_11__["SearchFieldComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_select_select_component__WEBPACK_IMPORTED_MODULE_2__["SelectComponent"], _simple_select_simple_select_component__WEBPACK_IMPORTED_MODULE_3__["SimpleSelectComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_5__["DatePickerComponent"], _date_range_picker_date_range_picker_component__WEBPACK_IMPORTED_MODULE_9__["DateRangePickerComponent"], _simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_10__["SimpleInputComponent"], _search_field_search_field_component__WEBPACK_IMPORTED_MODULE_11__["SearchFieldComponent"]],
          exports: [_select_select_component__WEBPACK_IMPORTED_MODULE_2__["SelectComponent"], _simple_select_simple_select_component__WEBPACK_IMPORTED_MODULE_3__["SimpleSelectComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_5__["DatePickerComponent"], _date_range_picker_date_range_picker_component__WEBPACK_IMPORTED_MODULE_9__["DateRangePickerComponent"], _simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_10__["SimpleInputComponent"], _search_field_search_field_component__WEBPACK_IMPORTED_MODULE_11__["SearchFieldComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _icons_icons_module__WEBPACK_IMPORTED_MODULE_8__["IconsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/inputs/search-field/search-field.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/inputs/search-field/search-field.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SearchFieldComponent */

  /***/
  function srcAppComponentsInputsSearchFieldSearchFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchFieldComponent", function () {
      return SearchFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return {
        width: a0
      };
    };

    var SearchFieldComponent = /*#__PURE__*/function () {
      function SearchFieldComponent() {
        _classCallCheck(this, SearchFieldComponent);

        this.getInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SearchFieldComponent, [{
        key: "getInputValue",
        value: function getInputValue(value) {
          this.getInput.emit(value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchFieldComponent;
    }();

    SearchFieldComponent.ɵfac = function SearchFieldComponent_Factory(t) {
      return new (t || SearchFieldComponent)();
    };

    SearchFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchFieldComponent,
      selectors: [["app-search-field"]],
      inputs: {
        placeholder: "placeholder",
        width: "width"
      },
      outputs: {
        getInput: "getInput"
      },
      decls: 4,
      vars: 4,
      consts: [[1, "inputWithIcon", 3, "ngStyle"], ["ngModel", "", 3, "placeholder", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-search", 2, "position", "absolute", "left", "0", "top", "6px", "padding", "9px 8px", "color", "#aaa", "transition", "0.3s"]],
      template: function SearchFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchFieldComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.getInputValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.width));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["input[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  width: 100%;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  height: 36px;\n  font-family: Arial;\n  color: #000000;\n  font-size: 12px;\n  font-weight: normal;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #000000;\n  opacity: 87%;\n  margin-bottom: 0px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #0066b2;\n  box-shadow: 0 0 8px 0 #0066b2;\n}\n\n.inputWithIcon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n\n.inputWithIcon[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.search[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 15px;\n  padding: 9px 8px;\n  color: #aaa;\n  transition: 0.3s;\n}\n\n.inputWithIcon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + i[_ngcontent-%COMP%] {\n  color: dodgerBlue;\n}\n\n.inputWithIcon.inputIconBg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  color: #fff;\n  padding: 9px 4px;\n  border-radius: 4px 0 0 4px;\n}\n\n.inputWithIcon.inputIconBg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + i[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0066b2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9oYW1lZC9EZXNrdG9wL2N1c3QtZm9vZC9hbmd1bGFyLXNyYy9zcmMvc3R5bGVzL2luY2x1ZGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9zZWFyY2gtZmllbGQvc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkNYUztFRFlULGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUVERjs7QUZHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FFQUY7O0FGRUE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0FFQ0Y7O0FGRUE7RUFDRSxrQkFBQTtBRUNGOztBRkVBO0VBQ0Usa0JBQUE7QUVDRjs7QUZFQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRUNGOztBRkVBO0VBQ0UsaUJBQUE7QUVDRjs7QUZFQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUVDRjs7QUZFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBRUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvc2VhcmNoLWZpZWxkL3NlYXJjaC1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJpbmNsdWRlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiAkYWx0LWZvbnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDg3JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwMDY2YjI7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCAjMDA2NmIyO1xufVxuXG4uaW5wdXRXaXRoSWNvbiBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmlucHV0V2l0aEljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTVweDtcbiAgcGFkZGluZzogOXB4IDhweDtcbiAgY29sb3I6ICNhYWE7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5pbnB1dFdpdGhJY29uIGlucHV0OmZvY3VzICsgaSB7XG4gIGNvbG9yOiBkb2RnZXJCbHVlO1xufVxuXG4uaW5wdXRXaXRoSWNvbi5pbnB1dEljb25CZyBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDlweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4uaW5wdXRXaXRoSWNvbi5pbnB1dEljb25CZyBpbnB1dDpmb2N1cyArIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbn1cbiIsIi8vIGZvbnRzXG4kbWFpbi1mb250OiBBcmlhbDtcbiRhbHQtZm9udDogQXJpYWw7XG5cbi8vIHNpemVzXG4kY29udGVudC13aWR0aDogMTM2NnB4O1xuJHBhZ2UtaGVhZGVyLWhlaWdodDogNjBweDtcbiRuYXZpZ2F0aW9uLWhlaWdodDogNTBweDtcblxuLy8gY29sb3JzXG4kdGV4dC1jb2xvcjogIzAwMDtcbiRiZy1jb2xvcjogI2Y1ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRjb250ZW50LWJveC1iZzogJHdoaXRlO1xuJGJsdWUtcHJpbWFyeTogIzAwNjZiMjtcbiRibHVlLWFsdDogIzAwOWRkOTtcbiRibHVlLXRlcm5hcnk6ICNmMmZhZmQ7XG4kZ3JheS1wcmltYXJ5OiAjOGM4ZjkzO1xuJGdyYXktbGlnaHQ6ICNkYmRjZGQ7XG4kYWN0aXZlLWxpbmstY29sb3I6ICMwMDA7XG4kbGluay1jb2xvcjogIzZiNmQ2ZjtcbiRub3RpZmljYXRpb24tY29sb3I6ICNlMjE4MzY7XG5cbiR1c2VyLWF2YXRhci1iZy1jb2xvcjogIzAwYjJiZDtcblxuLy8gc2lkZWJhclxuJG92ZXJsYXktY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiRzaWRlYmFyLXdpZHRoOiAzNjBweDtcblxuJG1vYmlsZS1icjogNzY4cHg7XG4iLCJpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiA4NyU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwMDY2YjI7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCAjMDA2NmIyO1xufVxuXG4uaW5wdXRXaXRoSWNvbiBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmlucHV0V2l0aEljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTVweDtcbiAgcGFkZGluZzogOXB4IDhweDtcbiAgY29sb3I6ICNhYWE7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5pbnB1dFdpdGhJY29uIGlucHV0OmZvY3VzICsgaSB7XG4gIGNvbG9yOiBkb2RnZXJCbHVlO1xufVxuXG4uaW5wdXRXaXRoSWNvbi5pbnB1dEljb25CZyBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDlweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4uaW5wdXRXaXRoSWNvbi5pbnB1dEljb25CZyBpbnB1dDpmb2N1cyArIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-field',
          templateUrl: './search-field.component.html',
          styleUrls: ['./search-field.component.scss']
        }]
      }], function () {
        return [];
      }, {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        getInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/inputs/select/select.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/inputs/select/select.component.ts ***!
    \**************************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function srcAppComponentsInputsSelectSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var popper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! popper.js */
    "./node_modules/popper.js/dist/esm/popper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SelectComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ic ic-", ctx_r1.icon, "");
      }
    }

    function SelectComponent_ng_template_6_div_2_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var option_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5[ctx_r6.labelKey]);
      }
    }

    function SelectComponent_ng_template_6_div_2_2_ng_template_0_Template(rf, ctx) {}

    function SelectComponent_ng_template_6_div_2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectComponent_ng_template_6_div_2_2_ng_template_0_Template, 0, 0, "ng-template");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        $implicit: a0
      };
    };

    function SelectComponent_ng_template_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_ng_template_6_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var option_r5 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.select(option_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectComponent_ng_template_6_div_2_ng_template_1_Template, 1, 1, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectComponent_ng_template_6_div_2_2_Template, 1, 0, undefined, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r4.isActive(option_r5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.optionTpl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.optionTpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, option_r5));
      }
    }

    function SelectComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectComponent_ng_template_6_div_2_Template, 3, 7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.options);
      }
    }

    var SelectComponent = /*#__PURE__*/function () {
      function SelectComponent(vcr, zone, cdr) {
        _classCallCheck(this, SelectComponent);

        this.vcr = vcr;
        this.zone = zone;
        this.cdr = cdr;
        this.labelKey = 'label';
        this.idKey = 'id';
        this.options = [];
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.originalOptions = [];
      }

      _createClass(SelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.originalOptions = _toConsumableArray(this.options);

          if (typeof this.selected === 'string') {
            this.selected = this.options.find(function (currentOption) {
              return currentOption[_this3.idKey] === _this3.selected;
            });
          }
        }
      }, {
        key: "open",

        /**
         * Open the select dropdown
         * @param dropdownTpl template for the dropdown
         * @param origin anchor element
         */
        value: function open(dropdownTpl, origin) {
          var _this4 = this;

          if (this.view) {
            return;
          }

          this.view = this.vcr.createEmbeddedView(dropdownTpl);
          var dropdown = this.view.rootNodes[0];
          document.body.appendChild(dropdown);
          dropdown.style.width = "".concat(origin.offsetWidth, "px");
          this.zone.runOutsideAngular(function () {
            _this4.popperRef = new popper_js__WEBPACK_IMPORTED_MODULE_3__["default"](origin, dropdown, {
              removeOnDestroy: true
            });
          });
          this.handleClickOutside();
        }
        /**
         * Close the select dropdown
         */

      }, {
        key: "close",
        value: function close() {
          var _a, _b;

          this.closed.emit();
          (_a = this.popperRef) === null || _a === void 0 ? void 0 : _a.destroy();
          (_b = this.view) === null || _b === void 0 ? void 0 : _b.destroy();
          this.view = null;
          this.popperRef = null;
        }
        /**
         * Select an option
         * @param option Option to select
         */

      }, {
        key: "select",
        value: function select(option) {
          this.selected = option;
          this.selectedChange.emit(option[this.idKey]);
        }
        /**
         * Check if option is active
         * @param option Option to check
         */

      }, {
        key: "isActive",
        value: function isActive(option) {
          if (!this.selected) {
            return false;
          }

          return option[this.idKey] === this.selected[this.idKey];
        }
        /**
         * Hide dropdown when clicking outside
         */

      }, {
        key: "handleClickOutside",
        value: function handleClickOutside() {
          var _this5 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref) {
            var target = _ref.target;

            var _a;

            var origin = (_a = _this5.popperRef) === null || _a === void 0 ? void 0 : _a.reference;
            return origin.contains(target) === false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.closed)).subscribe(function () {
            _this5.close();

            _this5.cdr.detectChanges();
          });
        }
      }, {
        key: "isOpen",
        get: function get() {
          return !!this.popperRef;
        }
      }, {
        key: "label",
        get: function get() {
          return this.selected ? this.selected[this.labelKey] : 'Select...';
        }
      }]);

      return SelectComponent;
    }();

    SelectComponent.ɵfac = function SelectComponent_Factory(t) {
      return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectComponent,
      selectors: [["app-select"]],
      inputs: {
        selected: "selected",
        labelKey: "labelKey",
        idKey: "idKey",
        options: "options",
        optionTpl: "optionTpl",
        icon: "icon"
      },
      outputs: {
        selectedChange: "selectedChange",
        closed: "closed"
      },
      decls: 8,
      vars: 4,
      consts: [[1, "dropdown"], ["type", "button", 1, "select-trigger", 3, "click"], ["origin", ""], [3, "class", 4, "ngIf"], [1, "down-icon"], ["dropdown", ""], [1, "select-menu"], [1, "select-menu-inner"], ["class", "select-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "select-item", 3, "click"], [3, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.open(_r2, _r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectComponent_span_3_Template, 1, 3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectComponent_ng_template_6_Template, 3, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
      styles: [".select-menu[_ngcontent-%COMP%] {\n  color: #000;\n  text-align: left;\n  list-style: none;\n  overflow-x: hidden;\n  background-color: #fff;\n  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.05);\n}\n\n.select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 28px;\n  min-width: 90px;\n  background: #f5f6f7;\n  border-radius: 4px;\n  text-align: left;\n  padding: 5px 10px;\n  font: 12px/1 Arial;\n  color: #000;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n\n.select-trigger.is-open[_ngcontent-%COMP%], .select-trigger[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066b2;\n}\n\n.select-trigger[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 10px;\n  flex: 0 0 auto;\n}\n\n.select-trigger[_ngcontent-%COMP%]   .down-icon[_ngcontent-%COMP%] {\n  display: block;\n  background: url(\"/assets/i/ic-down-triangle-arrow.png\") center no-repeat;\n  background-size: contain;\n  width: 8px;\n  height: 5px;\n  margin-left: 30px;\n  transition: 0.15s ease;\n}\n\n.select-trigger.is-open[_ngcontent-%COMP%]   .down-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.select-menu-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 200px;\n}\n\n.select-item[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding: 0 7px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.select-item[_ngcontent-%COMP%]:hover {\n  background-color: #f2fafd;\n  color: #009dd9;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9oYW1lZC9EZXNrdG9wL2N1c3QtZm9vZC9hbmd1bGFyLXNyYy9zcmMvc3R5bGVzL2luY2x1ZGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0NPVztFRE5YLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQ0tNO0VESk4sMkNBQUE7QUVERjs7QUZJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJDTFM7RURNVCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdDWFc7RURZWCxlQUFBO0VBQ0EsNkJBQUE7QUVERjs7QUZHRTtFQUVFLGFBQUE7RUFDQSxxQkNkVztBQ1lmOztBRktFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRUhKOztBRk1FO0VBQ0UsY0FBQTtFQUNBLHdFQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUVKSjs7QUZRSTtFQUNFLHlCQUFBO0FFTk47O0FGV0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUVSRjs7QUZXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUVSRjs7QUZVRTtFQUNFLHlCQ3BEVztFRHFEWCxjQ3RETztFRHVEUCxpQkFBQTtBRVJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2luY2x1ZGVzL3ZhcmlhYmxlcyc7XG5cbi5zZWxlY3QtbWVudSB7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5zZWxlY3QtdHJpZ2dlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjhweDtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQ6IDEycHgvMSAkYWx0LWZvbnQ7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAmLmlzLW9wZW4sXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZS1wcmltYXJ5O1xuICB9XG5cbiAgLmljIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZmxleDogMCAwIGF1dG87XG4gIH1cblxuICAuZG93bi1pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaS9pYy1kb3duLXRyaWFuZ2xlLWFycm93LnBuZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgdHJhbnNpdGlvbjogLjE1cyBlYXNlO1xuICB9XG5cbiAgJi5pcy1vcGVuIHtcbiAgICAuZG93bi1pY29uIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuICB9XG59XG5cbi5zZWxlY3QtbWVudS1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNlbGVjdC1pdGVtIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUtdGVybmFyeTtcbiAgICBjb2xvcjogJGJsdWUtYWx0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4iLCIvLyBmb250c1xuJG1haW4tZm9udDogQXJpYWw7XG4kYWx0LWZvbnQ6IEFyaWFsO1xuXG4vLyBzaXplc1xuJGNvbnRlbnQtd2lkdGg6IDEzNjZweDtcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDYwcHg7XG4kbmF2aWdhdGlvbi1oZWlnaHQ6IDUwcHg7XG5cbi8vIGNvbG9yc1xuJHRleHQtY29sb3I6ICMwMDA7XG4kYmctY29sb3I6ICNmNWY2Zjc7XG4kd2hpdGU6ICNmZmY7XG4kY29udGVudC1ib3gtYmc6ICR3aGl0ZTtcbiRibHVlLXByaW1hcnk6ICMwMDY2YjI7XG4kYmx1ZS1hbHQ6ICMwMDlkZDk7XG4kYmx1ZS10ZXJuYXJ5OiAjZjJmYWZkO1xuJGdyYXktcHJpbWFyeTogIzhjOGY5MztcbiRncmF5LWxpZ2h0OiAjZGJkY2RkO1xuJGFjdGl2ZS1saW5rLWNvbG9yOiAjMDAwO1xuJGxpbmstY29sb3I6ICM2YjZkNmY7XG4kbm90aWZpY2F0aW9uLWNvbG9yOiAjZTIxODM2O1xuXG4kdXNlci1hdmF0YXItYmctY29sb3I6ICMwMGIyYmQ7XG5cbi8vIHNpZGViYXJcbiRvdmVybGF5LWNvbG9yOiByZ2JhKDAsMCwwLC4yNSk7XG4kc2lkZWJhci13aWR0aDogMzYwcHg7XG5cbiRtb2JpbGUtYnI6IDc2OHB4O1xuIiwiLnNlbGVjdC1tZW51IHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnNlbGVjdC10cmlnZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY2Zjc7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQ6IDEycHgvMSBBcmlhbDtcbiAgY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uc2VsZWN0LXRyaWdnZXIuaXMtb3BlbiwgLnNlbGVjdC10cmlnZ2VyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA2NmIyO1xufVxuLnNlbGVjdC10cmlnZ2VyIC5pYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuLnNlbGVjdC10cmlnZ2VyIC5kb3duLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pL2ljLWRvd24tdHJpYW5nbGUtYXJyb3cucG5nXCIpIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlO1xufVxuLnNlbGVjdC10cmlnZ2VyLmlzLW9wZW4gLmRvd24taWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5zZWxlY3QtbWVudS1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNlbGVjdC1pdGVtIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2VsZWN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmYWZkO1xuICBjb2xvcjogIzAwOWRkOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select',
          templateUrl: './select.component.html',
          styleUrls: ['./select.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labelKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        optionTpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/inputs/simple-input/simple-input.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/inputs/simple-input/simple-input.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SimpleInputComponent */

  /***/
  function srcAppComponentsInputsSimpleInputSimpleInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleInputComponent", function () {
      return SimpleInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SimpleInputComponent_i_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
      }
    }

    function SimpleInputComponent_i_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
      }
    }

    function SimpleInputComponent_i_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
      }
    }

    function SimpleInputComponent_small_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SimpleInputComponent = /*#__PURE__*/function () {
      function SimpleInputComponent() {
        _classCallCheck(this, SimpleInputComponent);

        this.getInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getInputStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SimpleInputComponent, [{
        key: "getInputValue",
        value: function getInputValue(value) {
          this.getInput.emit(value);
        }
      }, {
        key: "getStatus",
        value: function getStatus(value) {
          if (value == null) {
            this.getInputStatus.emit(true);
          } else {
            this.getInputStatus.emit(value);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SimpleInputComponent;
    }();

    SimpleInputComponent.ɵfac = function SimpleInputComponent_Factory(t) {
      return new (t || SimpleInputComponent)();
    };

    SimpleInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimpleInputComponent,
      selectors: [["app-simple-input"]],
      inputs: {
        label: "label",
        placeholder: "placeholder",
        inputValue: "inputValue",
        type: "type",
        icon: "icon",
        name: "name",
        required: "required",
        pattern: "pattern"
      },
      outputs: {
        getInput: "getInput",
        getInputStatus: "getInputStatus"
      },
      decls: 9,
      vars: 11,
      consts: [[1, "inputWithIcon"], ["ngModel", "", 3, "type", "ngModel", "name", "placeholder", "required", "pattern", "ngModelChange"], ["input", "ngModel"], ["class", "fa fa-envelope", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-unlock-alt", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-user", "aria-hidden", "true", 4, "ngIf"], ["class", "alert-warning d-flex justify-content-center", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["aria-hidden", "true", 1, "fa", "fa-unlock-alt"], ["aria-hidden", "true", 1, "fa", "fa-user"], [1, "alert-warning", "d-flex", "justify-content-center"]],
      template: function SimpleInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SimpleInputComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.getInputValue($event);
          })("ngModelChange", function SimpleInputComponent_Template_input_ngModelChange_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.getStatus(_r0.invalid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SimpleInputComponent_i_5_Template, 1, 0, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimpleInputComponent_i_6_Template, 1, 0, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SimpleInputComponent_i_7_Template, 1, 0, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SimpleInputComponent_small_8_Template, 2, 0, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("ngModel", ctx.inputValue)("name", ctx.name)("placeholder", ctx.placeholder)("required", ctx.required)("pattern", ctx.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon.toLowerCase() == "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon.toLowerCase() == "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon.toLowerCase() == "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["input[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  width: 100%;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  margin: 8px 0;\n  outline: none;\n  padding: 8px;\n  box-sizing: border-box;\n  transition: 0.3s;\n  height: 32px;\n  font-family: Arial;\n  color: #000000;\n  font-size: 12px;\n  font-weight: normal;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #000000;\n  opacity: 87%;\n  margin-bottom: 0px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #0066b2;\n  box-shadow: 0 0 8px 0 #0066b2;\n}\n\n.inputWithIcon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n\n.inputWithIcon[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.inputWithIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 31px;\n  padding: 9px 8px;\n  color: #aaa;\n  transition: 0.3s;\n}\n\n.inputWithIcon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + i[_ngcontent-%COMP%] {\n  color: dodgerBlue;\n}\n\n.inputWithIcon.inputIconBg[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  color: #fff;\n  padding: 9px 4px;\n  border-radius: 4px 0 0 4px;\n}\n\n.inputWithIcon.inputIconBg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + i[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0066b2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9zaW1wbGUtaW5wdXQvc2ltcGxlLWlucHV0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9oYW1lZC9EZXNrdG9wL2N1c3QtZm9vZC9hbmd1bGFyLXNyYy9zcmMvc3R5bGVzL2luY2x1ZGVzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9zaW1wbGUtaW5wdXQvc2ltcGxlLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkNYUztFRFlULGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUVERjs7QUZHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FFQUY7O0FGRUE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0FFQ0Y7O0FGRUE7RUFDRSxrQkFBQTtBRUNGOztBRkVBO0VBQ0Usa0JBQUE7QUVDRjs7QUZFQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRUNGOztBRkVBO0VBQ0UsaUJBQUE7QUVDRjs7QUZFQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUVDRjs7QUZFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBRUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvc2ltcGxlLWlucHV0L3NpbXBsZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJpbmNsdWRlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiAkYWx0LWZvbnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDg3JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwMDY2YjI7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCAjMDA2NmIyO1xufVxuXG4uaW5wdXRXaXRoSWNvbiBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmlucHV0V2l0aEljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dFdpdGhJY29uIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMzFweDtcbiAgcGFkZGluZzogOXB4IDhweDtcbiAgY29sb3I6ICNhYWE7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5pbnB1dFdpdGhJY29uIGlucHV0OmZvY3VzICsgaSB7XG4gIGNvbG9yOiBkb2RnZXJCbHVlO1xufVxuXG4uaW5wdXRXaXRoSWNvbi5pbnB1dEljb25CZyBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDlweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4uaW5wdXRXaXRoSWNvbi5pbnB1dEljb25CZyBpbnB1dDpmb2N1cyArIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbn1cbiIsIi8vIGZvbnRzXG4kbWFpbi1mb250OiBBcmlhbDtcbiRhbHQtZm9udDogQXJpYWw7XG5cbi8vIHNpemVzXG4kY29udGVudC13aWR0aDogMTM2NnB4O1xuJHBhZ2UtaGVhZGVyLWhlaWdodDogNjBweDtcbiRuYXZpZ2F0aW9uLWhlaWdodDogNTBweDtcblxuLy8gY29sb3JzXG4kdGV4dC1jb2xvcjogIzAwMDtcbiRiZy1jb2xvcjogI2Y1ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRjb250ZW50LWJveC1iZzogJHdoaXRlO1xuJGJsdWUtcHJpbWFyeTogIzAwNjZiMjtcbiRibHVlLWFsdDogIzAwOWRkOTtcbiRibHVlLXRlcm5hcnk6ICNmMmZhZmQ7XG4kZ3JheS1wcmltYXJ5OiAjOGM4ZjkzO1xuJGdyYXktbGlnaHQ6ICNkYmRjZGQ7XG4kYWN0aXZlLWxpbmstY29sb3I6ICMwMDA7XG4kbGluay1jb2xvcjogIzZiNmQ2ZjtcbiRub3RpZmljYXRpb24tY29sb3I6ICNlMjE4MzY7XG5cbiR1c2VyLWF2YXRhci1iZy1jb2xvcjogIzAwYjJiZDtcblxuLy8gc2lkZWJhclxuJG92ZXJsYXktY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiRzaWRlYmFyLXdpZHRoOiAzNjBweDtcblxuJG1vYmlsZS1icjogNzY4cHg7XG4iLCJpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiA4NyU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwMDY2YjI7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCAjMDA2NmIyO1xufVxuXG4uaW5wdXRXaXRoSWNvbiBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmlucHV0V2l0aEljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dFdpdGhJY29uIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMzFweDtcbiAgcGFkZGluZzogOXB4IDhweDtcbiAgY29sb3I6ICNhYWE7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5pbnB1dFdpdGhJY29uIGlucHV0OmZvY3VzICsgaSB7XG4gIGNvbG9yOiBkb2RnZXJCbHVlO1xufVxuXG4uaW5wdXRXaXRoSWNvbi5pbnB1dEljb25CZyBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDlweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4uaW5wdXRXaXRoSWNvbi5pbnB1dEljb25CZyBpbnB1dDpmb2N1cyArIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-simple-input',
          templateUrl: './simple-input.component.html',
          styleUrls: ['./simple-input.component.scss']
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        getInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        getInputStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/inputs/simple-select/simple-select.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/inputs/simple-select/simple-select.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SimpleSelectComponent */

  /***/
  function srcAppComponentsInputsSimpleSelectSimpleSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleSelectComponent", function () {
      return SimpleSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! popper.js */
    "./node_modules/popper.js/dist/esm/popper.js");
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/internal/observable/fromEvent */
    "./node_modules/rxjs/internal/observable/fromEvent.js");
    /* harmony import */


    var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SimpleSelectComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ic ic-", ctx_r1.icon, "");
      }
    }

    function SimpleSelectComponent_ng_template_6_div_2_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var option_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5[ctx_r6.labelKey]);
      }
    }

    function SimpleSelectComponent_ng_template_6_div_2_2_ng_template_0_Template(rf, ctx) {}

    function SimpleSelectComponent_ng_template_6_div_2_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SimpleSelectComponent_ng_template_6_div_2_2_ng_template_0_Template, 0, 0, "ng-template");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        $implicit: a0
      };
    };

    function SimpleSelectComponent_ng_template_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleSelectComponent_ng_template_6_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var option_r5 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.select(option_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimpleSelectComponent_ng_template_6_div_2_ng_template_1_Template, 1, 1, "ng-template", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleSelectComponent_ng_template_6_div_2_2_Template, 1, 0, undefined, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r4.isActive(option_r5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.optionTpl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.optionTpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, option_r5));
      }
    }

    function SimpleSelectComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleSelectComponent_ng_template_6_div_2_Template, 3, 7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.options);
      }
    }

    var SimpleSelectComponent = /*#__PURE__*/function () {
      function SimpleSelectComponent(vcr, zone, cdr) {
        _classCallCheck(this, SimpleSelectComponent);

        this.vcr = vcr;
        this.zone = zone;
        this.cdr = cdr;
        this.labelKey = 'label';
        this.idKey = 'id';
        this.options = [];
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.originalOptions = [];
      }

      _createClass(SimpleSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.originalOptions = _toConsumableArray(this.options);

          if (typeof this.selected === 'string') {
            this.selected = this.options.find(function (currentOption) {
              return currentOption[_this6.idKey] === _this6.selected;
            });
          }
        }
      }, {
        key: "open",

        /**
         * Open the select dropdown
         * @param dropdownTpl template for the dropdown
         * @param origin anchor element
         */
        value: function open(dropdownTpl, origin) {
          var _this7 = this;

          if (this.view) {
            return;
          }

          this.view = this.vcr.createEmbeddedView(dropdownTpl);
          var dropdown = this.view.rootNodes[0];
          document.body.appendChild(dropdown);
          dropdown.style.width = "".concat(origin.offsetWidth, "px");
          this.zone.runOutsideAngular(function () {
            _this7.popperRef = new popper_js__WEBPACK_IMPORTED_MODULE_1__["default"](origin, dropdown, {
              removeOnDestroy: true
            });
          });
          this.handleClickOutside();
        }
        /**
         * Close the select dropdown
         */

      }, {
        key: "close",
        value: function close() {
          var _a, _b;

          this.closed.emit();
          (_a = this.popperRef) === null || _a === void 0 ? void 0 : _a.destroy();
          (_b = this.view) === null || _b === void 0 ? void 0 : _b.destroy();
          this.view = null;
          this.popperRef = null;
        }
        /**
         * Select an option
         * @param option Option to select
         */

      }, {
        key: "select",
        value: function select(option) {
          this.selected = option;
          this.selectedChange.emit(option[this.idKey]);
        }
        /**
         * Check if option is active
         * @param option Option to check
         */

      }, {
        key: "isActive",
        value: function isActive(option) {
          if (!this.selected) {
            return false;
          }

          return option[this.idKey] === this.selected[this.idKey];
        }
        /**
         * Hide dropdown when clicking outside
         */

      }, {
        key: "handleClickOutside",
        value: function handleClickOutside() {
          var _this8 = this;

          Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref2) {
            var target = _ref2.target;

            var _a;

            var origin = (_a = _this8.popperRef) === null || _a === void 0 ? void 0 : _a.reference;
            return origin.contains(target) === false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.closed)).subscribe(function () {
            _this8.close();

            _this8.cdr.detectChanges();
          });
        }
      }, {
        key: "isOpen",
        get: function get() {
          return !!this.popperRef;
        }
      }, {
        key: "label",
        get: function get() {
          return this.selected ? this.selected[this.labelKey] : this.myLabel;
        }
      }]);

      return SimpleSelectComponent;
    }();

    SimpleSelectComponent.ɵfac = function SimpleSelectComponent_Factory(t) {
      return new (t || SimpleSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    SimpleSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimpleSelectComponent,
      selectors: [["app-simple-select"]],
      inputs: {
        selected: "selected",
        labelKey: "labelKey",
        idKey: "idKey",
        options: "options",
        optionTpl: "optionTpl",
        icon: "icon",
        myLabel: "myLabel"
      },
      outputs: {
        selectedChange: "selectedChange",
        closed: "closed"
      },
      decls: 8,
      vars: 4,
      consts: [[1, "dropdown"], ["type", "button", 1, "select-trigger", 3, "click"], ["origin", ""], [3, "class", 4, "ngIf"], [1, "down-icon"], ["dropdown", ""], [1, "select-menu"], [1, "select-menu-inner"], ["class", "select-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "select-item", 3, "click"], [3, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function SimpleSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleSelectComponent_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.open(_r2, _r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimpleSelectComponent_span_3_Template, 1, 3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimpleSelectComponent_ng_template_6_Template, 3, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
      styles: [".select-menu[_ngcontent-%COMP%] {\n  color: #000;\n  text-align: left;\n  list-style: none;\n  overflow-x: hidden;\n  background-color: #fff;\n  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.05);\n  border: 1px solid #ebebeb;\n}\n\n.select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 32px;\n  min-width: 150px;\n  background: #fff;\n  border-radius: 4px;\n  text-align: left;\n  padding: 5px 10px;\n  font: 12px/1 Arial;\n  color: #000;\n  cursor: pointer;\n  border: 1px solid #ebebeb;\n}\n\n.select-trigger.is-open[_ngcontent-%COMP%], .select-trigger[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0066b2;\n}\n\n.select-trigger[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 10px;\n  flex: 0 0 auto;\n}\n\n.select-trigger[_ngcontent-%COMP%]   .down-icon[_ngcontent-%COMP%] {\n  display: block;\n  background: url(\"/assets/i/arrow-down.png\") center no-repeat;\n  background-size: contain;\n  width: 8px;\n  height: 5px;\n  margin-left: 0px;\n  transition: 0.15s ease;\n}\n\n.select-trigger.is-open[_ngcontent-%COMP%]   .down-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.select-menu-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 200px;\n}\n\n.select-item[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding: 0 7px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.select-item[_ngcontent-%COMP%]:hover {\n  background-color: #f2fafd;\n  color: #009dd9;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2lucHV0cy9zaW1wbGUtc2VsZWN0L3NpbXBsZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tb2hhbWVkL0Rlc2t0b3AvY3VzdC1mb29kL2FuZ3VsYXItc3JjL3NyYy9zdHlsZXMvaW5jbHVkZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXRzL3NpbXBsZS1zZWxlY3Qvc2ltcGxlLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdDT1c7RUROWCxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkNLTTtFREpOLDJDQUFBO0VBQ0EseUJBQUE7QUVERjs7QUZJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkNQTTtFRFFOLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0NkVztFRGVYLGVBQUE7RUFDQSx5QkFBQTtBRURGOztBRkdFO0VBRUUsYUFBQTtFQUNBLHFCQ2pCVztBQ2VmOztBRktFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRUhKOztBRk1FO0VBQ0UsY0FBQTtFQUNBLDREQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUVKSjs7QUZRSTtFQUNFLHlCQUFBO0FFTk47O0FGV0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUVSRjs7QUZXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUVSRjs7QUZVRTtFQUNFLHlCQ3ZEVztFRHdEWCxjQ3pETztFRDBEUCxpQkFBQTtBRVJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnB1dHMvc2ltcGxlLXNlbGVjdC9zaW1wbGUtc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImluY2x1ZGVzL3ZhcmlhYmxlc1wiO1xuXG4uc2VsZWN0LW1lbnUge1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDE1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xufVxuXG4uc2VsZWN0LXRyaWdnZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzJweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250OiAxMnB4LzEgJGFsdC1mb250O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcblxuICAmLmlzLW9wZW4sXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAkYmx1ZS1wcmltYXJ5O1xuICB9XG5cbiAgLmljIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZmxleDogMCAwIGF1dG87XG4gIH1cblxuICAuZG93bi1pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2kvYXJyb3ctZG93bi5wbmdcIikgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2U7XG4gIH1cblxuICAmLmlzLW9wZW4ge1xuICAgIC5kb3duLWljb24ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuLnNlbGVjdC1tZW51LWlubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2VsZWN0LWl0ZW0ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS10ZXJuYXJ5O1xuICAgIGNvbG9yOiAkYmx1ZS1hbHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cbiIsIi8vIGZvbnRzXG4kbWFpbi1mb250OiBBcmlhbDtcbiRhbHQtZm9udDogQXJpYWw7XG5cbi8vIHNpemVzXG4kY29udGVudC13aWR0aDogMTM2NnB4O1xuJHBhZ2UtaGVhZGVyLWhlaWdodDogNjBweDtcbiRuYXZpZ2F0aW9uLWhlaWdodDogNTBweDtcblxuLy8gY29sb3JzXG4kdGV4dC1jb2xvcjogIzAwMDtcbiRiZy1jb2xvcjogI2Y1ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRjb250ZW50LWJveC1iZzogJHdoaXRlO1xuJGJsdWUtcHJpbWFyeTogIzAwNjZiMjtcbiRibHVlLWFsdDogIzAwOWRkOTtcbiRibHVlLXRlcm5hcnk6ICNmMmZhZmQ7XG4kZ3JheS1wcmltYXJ5OiAjOGM4ZjkzO1xuJGdyYXktbGlnaHQ6ICNkYmRjZGQ7XG4kYWN0aXZlLWxpbmstY29sb3I6ICMwMDA7XG4kbGluay1jb2xvcjogIzZiNmQ2ZjtcbiRub3RpZmljYXRpb24tY29sb3I6ICNlMjE4MzY7XG5cbiR1c2VyLWF2YXRhci1iZy1jb2xvcjogIzAwYjJiZDtcblxuLy8gc2lkZWJhclxuJG92ZXJsYXktY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiRzaWRlYmFyLXdpZHRoOiAzNjBweDtcblxuJG1vYmlsZS1icjogNzY4cHg7XG4iLCIuc2VsZWN0LW1lbnUge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDE1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xufVxuXG4uc2VsZWN0LXRyaWdnZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzJweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udDogMTJweC8xIEFyaWFsO1xuICBjb2xvcjogIzAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xufVxuLnNlbGVjdC10cmlnZ2VyLmlzLW9wZW4sIC5zZWxlY3QtdHJpZ2dlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzAwNjZiMjtcbn1cbi5zZWxlY3QtdHJpZ2dlciAuaWMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi5zZWxlY3QtdHJpZ2dlciAuZG93bi1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaS9hcnJvdy1kb3duLnBuZ1wiKSBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlO1xufVxuLnNlbGVjdC10cmlnZ2VyLmlzLW9wZW4gLmRvd24taWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5zZWxlY3QtbWVudS1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNlbGVjdC1pdGVtIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2VsZWN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmYWZkO1xuICBjb2xvcjogIzAwOWRkOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-simple-select',
          templateUrl: './simple-select.component.html',
          styleUrls: ['./simple-select.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labelKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        optionTpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        myLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/loading-spinner/loading-spinner.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/loading-spinner/loading-spinner.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LoadingSpinnerComponent */

  /***/
  function srcAppComponentsLoadingSpinnerLoadingSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function () {
      return LoadingSpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingSpinnerComponent = /*#__PURE__*/function () {
      function LoadingSpinnerComponent() {
        _classCallCheck(this, LoadingSpinnerComponent);
      }

      _createClass(LoadingSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingSpinnerComponent;
    }();

    LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || LoadingSpinnerComponent)();
    };

    LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingSpinnerComponent,
      selectors: [["app-loading-spinner"]],
      decls: 9,
      vars: 0,
      consts: [[1, "lds-roller"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".lds-roller[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #0066b2;\n  margin: -4px 0 0 -4px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0Usd0VBQUE7VUFBQSxnRUFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNHRjs7QUREQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNJRjs7QURGQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDS0Y7O0FESEE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDTUY7O0FESkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ09GOztBRExBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ1FGOztBRE5BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNTRjs7QURQQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNVRjs7QURSQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDV0Y7O0FEVEE7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDWUY7O0FEVkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ2FGOztBRFhBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ2NGOztBRFpBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNlRjs7QURiQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNnQkY7O0FEZEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ2lCRjs7QURmQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNtQkY7O0FEakJBO0VBQ0U7SUFDRSx1QkFBQTtFQ29CRjtFRGxCQTtJQUNFLHlCQUFBO0VDb0JGO0FBQ0Y7O0FEMUJBO0VBQ0U7SUFDRSx1QkFBQTtFQ29CRjtFRGxCQTtJQUNFLHlCQUFBO0VDb0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLXJvbGxlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2IHtcbiAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDY2YjI7XG4gIG1hcmdpbjogLTRweCAwIDAgLTRweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgdG9wOiA2M3B4O1xuICBsZWZ0OiA2M3B4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogNDhweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgdG9wOiA3MnB4O1xuICBsZWZ0OiA0MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogMzJweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgdG9wOiA2OHB4O1xuICBsZWZ0OiAyNHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDE3cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMTJweDtcbn1cbkBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iLCIubGRzLXJvbGxlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXYge1xuICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA2NmIyO1xuICBtYXJnaW46IC00cHggMCAwIC00cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDYzcHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICB0b3A6IDcxcHg7XG4gIGxlZnQ6IDQ4cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICB0b3A6IDcycHg7XG4gIGxlZnQ6IDQwcHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogMzJweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG4gIHRvcDogNjhweDtcbiAgbGVmdDogMjRweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gIHRvcDogNjNweDtcbiAgbGVmdDogMTdweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMTJweDtcbn1cblxuQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loading-spinner',
          templateUrl: './loading-spinner.component.html',
          styleUrls: ['./loading-spinner.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/logo/logo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/logo/logo.component.ts ***!
    \***************************************************/

  /*! exports provided: LogoComponent */

  /***/
  function srcAppComponentsLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
      return LogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LogoComponent_a_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogoComponent_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LogoComponent = function LogoComponent() {
      _classCallCheck(this, LogoComponent);
    };

    LogoComponent.ɵfac = function LogoComponent_Factory(t) {
      return new (t || LogoComponent)();
    };

    LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoComponent,
      selectors: [["app-logo"]],
      inputs: {
        type: "type"
      },
      decls: 2,
      vars: 2,
      consts: [["href", "/", "class", "logo", 4, "ngIf"], ["href", "/", "class", "logo1", 4, "ngIf"], ["href", "/", 1, "logo"], ["src", "/assets/i/myLogo.png", "alt", "custFood"], ["href", "/", 1, "logo1"]],
      template: function LogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LogoComponent_a_0_Template, 2, 0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LogoComponent_a_1_Template, 2, 0, "a", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "form");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".logo[_ngcontent-%COMP%] {\n  display: flex;\n  height: 18px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.logo1[_ngcontent-%COMP%] {\n  display: flex;\n  height: 50px;\n  width: 160px;\n}\n.logo1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0FDQ0o7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxOHB4O1xuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4ubG9nbzEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiIsIi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubG9nbzEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxNjBweDtcbn1cbi5sb2dvMSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logo',
          templateUrl: './logo.component.html',
          styleUrls: ['./logo.component.scss']
        }]
      }], null, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/mobile-menu/mobile-menu.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/mobile-menu/mobile-menu.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MobileMenuComponent */

  /***/
  function srcAppComponentsMobileMenuMobileMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function () {
      return MobileMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = [[["", 8, "user-data"]]];
    var _c1 = [".user-data"];

    var MobileMenuComponent = /*#__PURE__*/function () {
      function MobileMenuComponent() {
        _classCallCheck(this, MobileMenuComponent);

        this.open = false;
      }

      _createClass(MobileMenuComponent, [{
        key: "isOpen",
        set: function set(open) {
          this.open = open;
          document.body.classList[open ? 'add' : 'remove']('no-overflow');
        }
      }]);

      return MobileMenuComponent;
    }();

    MobileMenuComponent.ɵfac = function MobileMenuComponent_Factory(t) {
      return new (t || MobileMenuComponent)();
    };

    MobileMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MobileMenuComponent,
      selectors: [["app-mobile-menu"]],
      hostVars: 2,
      hostBindings: function MobileMenuComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.open);
        }
      },
      inputs: {
        isOpen: "isOpen"
      },
      ngContentSelectors: _c1,
      decls: 2,
      vars: 1,
      consts: [[1, "wrap", 3, "hidden"]],
      template: function MobileMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.open);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mobile-menu',
          templateUrl: './mobile-menu.component.html',
          styleUrls: ['./mobile-menu.component.scss']
        }]
      }], null, {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.is-open']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/page-header/navigation/navigation.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/page-header/navigation/navigation.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsPageHeaderNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/navigation.service */
    "./src/app/services/navigation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function NavigationComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_li_6_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleMenu(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var page_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, page_r1.path));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r1.title);
      }
    }

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(nav, route, router) {
        _classCallCheck(this, NavigationComponent);

        this.nav = nav;
        this.route = route;
        this.router = router;
        this.pages = [{
          title: 'sdsd',
          path: 'contacts'
        }, {
          title: 'Terminal Companies',
          path: 'terminal-companies'
        }, {
          title: 'Tanks',
          path: 'tanks'
        }];
        this.menu = {
          isOpen: false
        };
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // load the correct navigation routes for current user

        /**
         * Get the active route
         */

      }, {
        key: "toggleMenu",

        /**
         * Toggle mobile menu
         * @param toggl Show or hide menu
         */
        value: function toggleMenu(toggl) {
          var isOpen = this.menu.isOpen;
          this.menu.isOpen = typeof toggl === 'boolean' ? toggl : !isOpen;
        }
      }, {
        key: "activeRoute",
        get: function get() {
          var _this9 = this;

          return this.pages.find(function (_ref3) {
            var path = _ref3.path;
            return _this9.router.isActive(_this9.router.parseUrl("/dashboard/".concat(path)), false);
          });
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 7,
      vars: 4,
      consts: [[1, "wrap"], [1, "active-route", "is-mobile", 3, "click"], [1, "ic", "ic-arrow-down---sm--gray"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "click"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_1_listener() {
            return ctx.toggleMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavigationComponent_li_6_Template, 3, 4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.activeRoute == null ? null : ctx.activeRoute.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.menu.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: [".wrap[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 600;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin: 0 -22px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #6b6d6f;\n  margin: 0 22px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  height: 2px;\n  margin-top: 5px;\n  background: #0066b2;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n}\n\n.active-route[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  color: #0066b2;\n  font-weight: 600;\n}\n\n.active-route[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 110px;\n    left: 0;\n    width: 100%;\n    background: #fff;\n    font-size: 14px;\n    font-weight: normal;\n  }\n  nav[_ngcontent-%COMP%]:not(.is-open) {\n    display: none;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin: 0;\n    line-height: 40px;\n    width: 100%;\n  }\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    background: #f2fafd;\n    color: #000;\n    margin: 0;\n    padding: 0 21px;\n  }\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    font-weight: 700;\n    color: #009dd9;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLWhlYWRlci9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tb2hhbWVkL0Rlc2t0b3AvY3VzdC1mb29kL2FuZ3VsYXItc3JjL3NyYy9zdHlsZXMvaW5jbHVkZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0VMUztFRk1ULGNBQUE7QUNBSjs7QURFSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0FOOztBREVNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkUxQk87QUQwQmY7O0FER007RUFDRSxXQUFBO0FDRFI7O0FET0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0V4Q2E7RUZ5Q2IsZ0JBQUE7QUNKRjs7QURLRTtFQUNFLGdCQUFBO0FDSEo7O0FET0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxVQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSxnQkV2REk7SUZ3REosZUFBQTtJQUNBLG1CQUFBO0VDSkY7RURLRTtJQUNFLGFBQUE7RUNISjs7RURPQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ0pGO0VET0k7SUFDRSxtQkVuRU87SUZvRVAsV0UxRUs7SUYyRUwsU0FBQTtJQUNBLGVBQUE7RUNMTjtFRFFJO0lBQ0UsV0FBQTtFQ05OO0VET007SUFDRSxhQUFBO0VDTFI7RURPTTtJQUNFLGdCQUFBO0lBQ0EsY0VqRkM7RUQ0RVQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImluY2x1ZGVzL3ZhcmlhYmxlc1wiO1xuXG4ud3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luOiAwIC0yMnB4O1xuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgICBtYXJnaW46IDAgMjJweDtcblxuICAgIGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRibHVlLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmFjdGl2ZS1yb3V0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICRibHVlLXByaW1hcnk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC5pYyB7XG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1icikge1xuICBuYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6ICRwYWdlLWhlYWRlci1oZWlnaHQgKyAkbmF2aWdhdGlvbi1oZWlnaHQ7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkY29udGVudC1ib3gtYmc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgJjpub3QoLmlzLW9wZW4pIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgbGkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRibHVlLXRlcm5hcnk7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDIxcHg7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogJGJsdWUtYWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIud3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luOiAwIC0yMnB4O1xufVxudWwgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzZiNmQ2ZjtcbiAgbWFyZ2luOiAwIDIycHg7XG59XG51bCBsaSBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudWwgbGkgYTphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDY2YjI7XG59XG51bCBsaSBhLmFjdGl2ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5hY3RpdmUtcm91dGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDA2NmIyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmFjdGl2ZS1yb3V0ZSAuaWMge1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgbmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbiAgbmF2Om5vdCguaXMtb3Blbikge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdWwgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmMmZhZmQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgMjFweDtcbiAgfVxuICB1bCBsaSBhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICB1bCBsaSBhOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIHVsIGxpIGEuYWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMDA5ZGQ5O1xuICB9XG59IiwiLy8gZm9udHNcbiRtYWluLWZvbnQ6IEFyaWFsO1xuJGFsdC1mb250OiBBcmlhbDtcblxuLy8gc2l6ZXNcbiRjb250ZW50LXdpZHRoOiAxMzY2cHg7XG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA2MHB4O1xuJG5hdmlnYXRpb24taGVpZ2h0OiA1MHB4O1xuXG4vLyBjb2xvcnNcbiR0ZXh0LWNvbG9yOiAjMDAwO1xuJGJnLWNvbG9yOiAjZjVmNmY3O1xuJHdoaXRlOiAjZmZmO1xuJGNvbnRlbnQtYm94LWJnOiAkd2hpdGU7XG4kYmx1ZS1wcmltYXJ5OiAjMDA2NmIyO1xuJGJsdWUtYWx0OiAjMDA5ZGQ5O1xuJGJsdWUtdGVybmFyeTogI2YyZmFmZDtcbiRncmF5LXByaW1hcnk6ICM4YzhmOTM7XG4kZ3JheS1saWdodDogI2RiZGNkZDtcbiRhY3RpdmUtbGluay1jb2xvcjogIzAwMDtcbiRsaW5rLWNvbG9yOiAjNmI2ZDZmO1xuJG5vdGlmaWNhdGlvbi1jb2xvcjogI2UyMTgzNjtcblxuJHVzZXItYXZhdGFyLWJnLWNvbG9yOiAjMDBiMmJkO1xuXG4vLyBzaWRlYmFyXG4kb3ZlcmxheS1jb2xvcjogcmdiYSgwLDAsMCwuMjUpO1xuJHNpZGViYXItd2lkdGg6IDM2MHB4O1xuXG4kbW9iaWxlLWJyOiA3NjhweDtcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-header/notifications/notifications.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/page-header/notifications/notifications.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppComponentsPageHeaderNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotificationsComponent = function NotificationsComponent() {
      _classCallCheck(this, NotificationsComponent);

      this.hasNotifications = null;
    };

    NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)();
    };

    NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      inputs: {
        hasNotifications: "hasNotifications"
      },
      decls: 1,
      vars: 1,
      consts: [[1, "notifications-bell"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-has-notifications", ctx.hasNotifications);
        }
      },
      styles: [".notifications-bell[_ngcontent-%COMP%] {\n  display: block;\n  width: 14px;\n  height: 16px;\n  position: relative;\n  background: url(\"/assets/i/bell@2x.png\") center no-repeat;\n  background-size: contain;\n}\n.notifications-bell[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  background: #8c8f93;\n  width: 8px;\n  height: 8px;\n  border-radius: 8px;\n  border: 1px solid #fff;\n}\n.notifications-bell[data-has-notifications][_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #e21836;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLWhlYWRlci9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tb2hhbWVkL0Rlc2t0b3AvY3VzdC1mb29kL2FuZ3VsYXItc3JjL3NyYy9zdHlsZXMvaW5jbHVkZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLHlEQUFBO0VBQ0Esd0JBQUE7QUNGRjtBRElFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNGSjtBRE1JO0VBQ0UsV0FBQTtFQUNBLG1CRU5lO0FERXJCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlLWhlYWRlci9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdpbmNsdWRlcy92YXJpYWJsZXMnO1xuXG4ubm90aWZpY2F0aW9ucy1iZWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaS9iZWxsQDJ4LnBuZycpIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtM3B4O1xuICAgIHJpZ2h0OiAtM3B4O1xuICAgIGJhY2tncm91bmQ6ICRncmF5LXByaW1hcnk7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xuICB9XG5cbiAgJltkYXRhLWhhcy1ub3RpZmljYXRpb25zXSB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQ6ICRub3RpZmljYXRpb24tY29sb3I7XG4gICAgfVxuICB9XG59XG4iLCIubm90aWZpY2F0aW9ucy1iZWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pL2JlbGxAMngucG5nXCIpIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5ub3RpZmljYXRpb25zLWJlbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogLTNweDtcbiAgYmFja2dyb3VuZDogIzhjOGY5MztcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cbi5ub3RpZmljYXRpb25zLWJlbGxbZGF0YS1oYXMtbm90aWZpY2F0aW9uc106YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogI2UyMTgzNjtcbn0iLCIvLyBmb250c1xuJG1haW4tZm9udDogQXJpYWw7XG4kYWx0LWZvbnQ6IEFyaWFsO1xuXG4vLyBzaXplc1xuJGNvbnRlbnQtd2lkdGg6IDEzNjZweDtcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDYwcHg7XG4kbmF2aWdhdGlvbi1oZWlnaHQ6IDUwcHg7XG5cbi8vIGNvbG9yc1xuJHRleHQtY29sb3I6ICMwMDA7XG4kYmctY29sb3I6ICNmNWY2Zjc7XG4kd2hpdGU6ICNmZmY7XG4kY29udGVudC1ib3gtYmc6ICR3aGl0ZTtcbiRibHVlLXByaW1hcnk6ICMwMDY2YjI7XG4kYmx1ZS1hbHQ6ICMwMDlkZDk7XG4kYmx1ZS10ZXJuYXJ5OiAjZjJmYWZkO1xuJGdyYXktcHJpbWFyeTogIzhjOGY5MztcbiRncmF5LWxpZ2h0OiAjZGJkY2RkO1xuJGFjdGl2ZS1saW5rLWNvbG9yOiAjMDAwO1xuJGxpbmstY29sb3I6ICM2YjZkNmY7XG4kbm90aWZpY2F0aW9uLWNvbG9yOiAjZTIxODM2O1xuXG4kdXNlci1hdmF0YXItYmctY29sb3I6ICMwMGIyYmQ7XG5cbi8vIHNpZGViYXJcbiRvdmVybGF5LWNvbG9yOiByZ2JhKDAsMCwwLC4yNSk7XG4kc2lkZWJhci13aWR0aDogMzYwcHg7XG5cbiRtb2JpbGUtYnI6IDc2OHB4O1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notifications',
          templateUrl: './notifications.component.html',
          styleUrls: ['./notifications.component.scss']
        }]
      }], null, {
        hasNotifications: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/page-header/page-header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/page-header/page-header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PageHeaderComponent */

  /***/
  function srcAppComponentsPageHeaderPageHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
      return PageHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/sidebars.service */
    "./src/app/services/sidebars.service.ts");
    /* harmony import */


    var src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/unit.service */
    "./src/app/services/unit.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/components/page-header/notifications/notifications.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/components/page-header/user-profile/user-profile.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/components/page-header/navigation/navigation.component.ts");
    /* harmony import */


    var _directives_if_role_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../directives/if-role.directive */
    "./src/app/directives/if-role.directive.ts");
    /* harmony import */


    var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../mobile-menu/mobile-menu.component */
    "./src/app/components/mobile-menu/mobile-menu.component.ts");
    /* harmony import */


    var _inputs_select_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../inputs/select/select.component */
    "./src/app/components/inputs/select/select.component.ts");

    function PageHeaderComponent_ng_template_5_app_select_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-select", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function PageHeaderComponent_ng_template_5_app_select_0_Template_app_select_selectedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.changeLocation("region", $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r2.regionData.regions)("selected", ctx_r2.regionData.region);
      }
    }

    function PageHeaderComponent_ng_template_5_app_select_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function PageHeaderComponent_ng_template_5_app_select_2_Template_app_select_selectedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.changeUnit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.units)("selected", ctx_r3.unit);
      }
    }

    function PageHeaderComponent_ng_template_5_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageHeaderComponent_ng_template_5_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.editRegions();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PageHeaderComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageHeaderComponent_ng_template_5_app_select_0_Template, 1, 2, "app-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function PageHeaderComponent_ng_template_5_Template_app_select_selectedChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.changeLocation("area", $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageHeaderComponent_ng_template_5_app_select_2_Template, 1, 2, "app-select", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageHeaderComponent_ng_template_5_div_3_Template, 2, 0, "div", 19);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appIfRole", "admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.regionData.areas)("selected", ctx_r0.regionData.area);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appIfRole", "scheduler marketer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appIfRole", "admin");
      }
    }

    function PageHeaderComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Transaction");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PageHeaderComponent = /*#__PURE__*/function () {
      function PageHeaderComponent(sidebar, unitsService) {
        _classCallCheck(this, PageHeaderComponent);

        this.sidebar = sidebar;
        this.unitsService = unitsService;
        this.regionData = {
          area: null,
          region: null,
          areas: [],
          regions: []
        };
        this.changeRegion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menu = {
          isOpen: false
        };
      }

      _createClass(PageHeaderComponent, [{
        key: "changeLocation",

        /**
         * Change the selected region & area
         * @param type Region or area to change
         * @param value Actual value for the new region/area
         */
        value: function changeLocation(type, value) {
          this.changeRegion.emit({
            type: type,
            value: this.regionData["".concat(type, "s")].find(function (d) {
              return d.id === value;
            })
          });
        }
      }, {
        key: "changeUnit",
        value: function changeUnit(value) {
          this.unitsService.change(value);
        }
        /**
         * Open the sidebar for managing regions & areas
         */

      }, {
        key: "editRegions",
        value: function editRegions() {
          this.sidebar.open({
            editor: 'manage-regions-areas'
          });
        }
        /**
         * Toggle mobile menu
         * @param toggl Show or hide menu
         */

      }, {
        key: "toggleMenu",
        value: function toggleMenu(toggl) {
          var isOpen = this.menu.isOpen;
          this.menu.isOpen = typeof toggl === 'boolean' ? toggl : !isOpen;
        }
      }, {
        key: "units",
        get: function get() {
          return this.unitsService.units;
        }
      }, {
        key: "unit",
        get: function get() {
          return this.unitsService.currentUnit;
        }
      }]);

      return PageHeaderComponent;
    }();

    PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
      return new (t || PageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_1__["SidebarsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_2__["UnitService"]));
    };

    PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageHeaderComponent,
      selectors: [["app-page-header"]],
      inputs: {
        user: "user",
        regionData: "regionData"
      },
      outputs: {
        changeRegion: "changeRegion"
      },
      decls: 21,
      vars: 12,
      consts: [[1, "wrap"], [1, "content-wrap", "topbar"], [1, "toggle-mobile-menu", "is-mobile", 3, "click"], [1, "ic", "ic-menu"], [1, "flex", "left", "header-inputs"], [3, "ngIf"], [1, "flex", "center", "is-mobile", 3, "hidden"], [1, "logo"], [1, "right", "flex", "is-not-mobile"], [1, "user-data", "flex"], [1, "notif-el", 3, "hasNotifications"], [1, "profile-el", 3, "user"], [1, "content-wrap", "nav-wrap"], ["class", "btn primary add-transaction-btn", 4, "appIfRole"], [1, "content-wrap"], [1, "mobile-menu", "is-mobile", 3, "isOpen"], ["labelKey", "name", "icon", "glob", 3, "options", "selected", "selectedChange", 4, "appIfRole"], ["labelKey", "name", "icon", "location", 3, "options", "selected", "selectedChange"], ["icon", "db", 3, "options", "selected", "selectedChange", 4, "appIfRole"], ["class", "settings-btn", 3, "click", 4, "appIfRole"], ["labelKey", "name", "icon", "glob", 3, "options", "selected", "selectedChange"], ["icon", "db", 3, "options", "selected", "selectedChange"], [1, "settings-btn", 3, "click"], [1, "ic", "ic-cog"], [1, "btn", "primary", "add-transaction-btn"], [1, "ic", "ic-add"], [1, "is-not-mobile"]],
      template: function PageHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageHeaderComponent_Template_div_click_2_listener() {
            return ctx.toggleMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageHeaderComponent_ng_template_5_Template, 4, 5, "ng-template", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-logo", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-logo", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-notifications", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-user-profile", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PageHeaderComponent_button_15_Template, 4, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-mobile-menu", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-user-profile", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-notifications", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.menu.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.menu.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.regionData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.menu.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasNotifications", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appIfRole", "scheduler marketer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", ctx.menu.isOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasNotifications", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _directives_if_role_directive__WEBPACK_IMPORTED_MODULE_8__["IfRoleDirective"], _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_9__["MobileMenuComponent"], _inputs_select_select_component__WEBPACK_IMPORTED_MODULE_10__["SelectComponent"]],
      styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.flex.center[_ngcontent-%COMP%] {\n  justify-content: center;\n  width: 100%;\n}\n.wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  padding-top: 2px;\n}\n.wrap[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #0066b2;\n}\n.content-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.content-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.content-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50%;\n  justify-content: space-between;\n}\n.content-wrap[_ngcontent-%COMP%]   .notif-el[_ngcontent-%COMP%]    + .profile-el[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 60px;\n  position: relative;\n}\n.nav-wrap[_ngcontent-%COMP%] {\n  height: 50px;\n  border-top: 1px solid #f5f6f7;\n}\n.add-transaction-btn[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: auto;\n  justify-content: center;\n  align-items: center;\n}\n.add-transaction-btn[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  width: 9px;\n  margin-right: 5px;\n}\n.header-inputs[_ngcontent-%COMP%] {\n  min-width: 375px;\n}\n.header-inputs[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%]    + app-select[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.settings-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 4px;\n  border: 1px solid #dbdcdd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.settings-btn[_ngcontent-%COMP%]:hover, .settings-btn[_ngcontent-%COMP%]:focus, .settings-btn[_ngcontent-%COMP%]:active {\n  border-color: #0066b2;\n}\n.toggle-mobile-menu[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 16px;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: block;\n  height: calc(100vh - 60px);\n  width: 100%;\n  position: absolute;\n  top: 60px;\n  left: 0;\n  background: #fff;\n}\n.mobile-menu[_ngcontent-%COMP%]:not(.is-open) {\n  display: none;\n}\n@media (max-width: 768px) {\n  .toggle-mobile-menu.is-open[_ngcontent-%COMP%]    + .header-inputs[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content-wrap[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .content-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .content-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .header-inputs[_ngcontent-%COMP%] {\n    min-width: auto;\n    justify-content: space-between;\n  }\n\n  .user-data[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    padding: 0 16px;\n  }\n\n  .add-transaction-btn[_ngcontent-%COMP%] {\n    height: 34px;\n    width: 34px;\n    min-width: auto;\n  }\n  .add-transaction-btn[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n    width: 12px;\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9oYW1lZC9EZXNrdG9wL2N1c3QtZm9vZC9hbmd1bGFyLXNyYy9zcmMvc3R5bGVzL2luY2x1ZGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDREY7QURFRTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FESUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJFVFc7QURRZjtBREtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDRkY7QURJRTtFQUNFLFVBQUE7QUNGSjtBREtFO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDSEo7QURNRTtFQUNFLGlCQUFBO0FDSko7QURRQTtFQUNFLFlFeENtQjtFRnlDbkIsa0JBQUE7QUNMRjtBRFFBO0VBQ0UsWUU1Q2tCO0VGNkNsQiw2QkFBQTtBQ0xGO0FEUUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTEY7QURNRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0pKO0FEUUE7RUFDRSxnQkFBQTtBQ0xGO0FETUU7RUFDRSxpQkFBQTtBQ0pKO0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNMRjtBRE9FO0VBR0UscUJFeEVXO0FEaUVmO0FEV0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNSRjtBRFdBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsU0UvRm1CO0VGZ0duQixPQUFBO0VBRUEsZ0JFNUZNO0FEa0ZSO0FEWUU7RUFDRSxhQUFBO0FDVko7QURjQTtFQUVJO0lBQ0UsYUFBQTtFQ1pKOztFRGdCQTtJQUNFLGVBQUE7RUNiRjtFRGNFO0lBQ0UsV0FBQTtFQ1pKOztFRGdCQTtJQUNFLGVBQUE7SUFDQSw4QkFBQTtFQ2JGOztFRGdCQTtJQUNFLDhCQUFBO0lBQ0EsZUFBQTtFQ2JGOztFRGdCQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ2JGO0VEY0U7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQ1pKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaW5jbHVkZXMvdmFyaWFibGVzJztcblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmLmNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLndyYXAge1xuICBiYWNrZ3JvdW5kOiAkY29udGVudC1ib3gtYmc7XG4gIHBhZGRpbmctdG9wOiAycHg7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICRibHVlLXByaW1hcnk7XG4gIH1cbn1cblxuLmNvbnRlbnQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmxlZnQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICAucmlnaHQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLm5vdGlmLWVsICsgLnByb2ZpbGUtZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG59XG5cbi50b3BiYXIge1xuICBoZWlnaHQ6ICRwYWdlLWhlYWRlci1oZWlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi13cmFwIHtcbiAgaGVpZ2h0OiAkbmF2aWdhdGlvbi1oZWlnaHQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYmctY29sb3I7XG59XG5cbi5hZGQtdHJhbnNhY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuaWMge1xuICAgIHdpZHRoOiA5cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbn1cblxuLmhlYWRlci1pbnB1dHMge1xuICBtaW4td2lkdGg6IDM3NXB4O1xuICBhcHAtc2VsZWN0ICsgYXBwLXNlbGVjdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLnNldHRpbmdzLWJ0biB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktbGlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogJGJsdWUtcHJpbWFyeTtcbiAgfVxufVxuXG4udG9nZ2xlLW1vYmlsZS1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLm1vYmlsZS1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICN7JHBhZ2UtaGVhZGVyLWhlaWdodH0pO1xuICB3aWR0aDogMTAwJTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHBhZ2UtaGVhZGVyLWhlaWdodDtcbiAgbGVmdDogMDtcblxuICBiYWNrZ3JvdW5kOiAkY29udGVudC1ib3gtYmc7XG5cbiAgJjpub3QoLmlzLW9wZW4pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWJyKSB7XG4gIC50b2dnbGUtbW9iaWxlLW1lbnUge1xuICAgICYuaXMtb3BlbiArIC5oZWFkZXItaW5wdXRzIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQtd3JhcCB7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIC5sZWZ0LCAucmlnaHQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1pbnB1dHMge1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudXNlci1kYXRhIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICB9XG5cbiAgLmFkZC10cmFuc2FjdGlvbi1idG4ge1xuICAgIGhlaWdodDogMzRweDtcbiAgICB3aWR0aDogMzRweDtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgLmljIHtcbiAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuIiwiLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZsZXguY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud3JhcCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG4ud3JhcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzAwNjZiMjtcbn1cblxuLmNvbnRlbnQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVudC13cmFwIC5sZWZ0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5jb250ZW50LXdyYXAgLnJpZ2h0IHtcbiAgd2lkdGg6IDUwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbnRlbnQtd3JhcCAubm90aWYtZWwgKyAucHJvZmlsZS1lbCB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4udG9wYmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXYtd3JhcCB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNWY2Zjc7XG59XG5cbi5hZGQtdHJhbnNhY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZC10cmFuc2FjdGlvbi1idG4gLmljIHtcbiAgd2lkdGg6IDlweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5oZWFkZXItaW5wdXRzIHtcbiAgbWluLXdpZHRoOiAzNzVweDtcbn1cbi5oZWFkZXItaW5wdXRzIGFwcC1zZWxlY3QgKyBhcHAtc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zZXR0aW5ncy1idG4ge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRjZGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2V0dGluZ3MtYnRuOmhvdmVyLCAuc2V0dGluZ3MtYnRuOmZvY3VzLCAuc2V0dGluZ3MtYnRuOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwNjZiMjtcbn1cblxuLnRvZ2dsZS1tb2JpbGUtbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5tb2JpbGUtbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLm1vYmlsZS1tZW51Om5vdCguaXMtb3Blbikge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRvZ2dsZS1tb2JpbGUtbWVudS5pcy1vcGVuICsgLmhlYWRlci1pbnB1dHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGVudC13cmFwIHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbiAgLmNvbnRlbnQtd3JhcCAubGVmdCwgLmNvbnRlbnQtd3JhcCAucmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmhlYWRlci1pbnB1dHMge1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAudXNlci1kYXRhIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICB9XG5cbiAgLmFkZC10cmFuc2FjdGlvbi1idG4ge1xuICAgIGhlaWdodDogMzRweDtcbiAgICB3aWR0aDogMzRweDtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gIH1cbiAgLmFkZC10cmFuc2FjdGlvbi1idG4gLmljIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn0iLCIvLyBmb250c1xuJG1haW4tZm9udDogQXJpYWw7XG4kYWx0LWZvbnQ6IEFyaWFsO1xuXG4vLyBzaXplc1xuJGNvbnRlbnQtd2lkdGg6IDEzNjZweDtcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDYwcHg7XG4kbmF2aWdhdGlvbi1oZWlnaHQ6IDUwcHg7XG5cbi8vIGNvbG9yc1xuJHRleHQtY29sb3I6ICMwMDA7XG4kYmctY29sb3I6ICNmNWY2Zjc7XG4kd2hpdGU6ICNmZmY7XG4kY29udGVudC1ib3gtYmc6ICR3aGl0ZTtcbiRibHVlLXByaW1hcnk6ICMwMDY2YjI7XG4kYmx1ZS1hbHQ6ICMwMDlkZDk7XG4kYmx1ZS10ZXJuYXJ5OiAjZjJmYWZkO1xuJGdyYXktcHJpbWFyeTogIzhjOGY5MztcbiRncmF5LWxpZ2h0OiAjZGJkY2RkO1xuJGFjdGl2ZS1saW5rLWNvbG9yOiAjMDAwO1xuJGxpbmstY29sb3I6ICM2YjZkNmY7XG4kbm90aWZpY2F0aW9uLWNvbG9yOiAjZTIxODM2O1xuXG4kdXNlci1hdmF0YXItYmctY29sb3I6ICMwMGIyYmQ7XG5cbi8vIHNpZGViYXJcbiRvdmVybGF5LWNvbG9yOiByZ2JhKDAsMCwwLC4yNSk7XG4kc2lkZWJhci13aWR0aDogMzYwcHg7XG5cbiRtb2JpbGUtYnI6IDc2OHB4O1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-header',
          templateUrl: './page-header.component.html',
          styleUrls: ['./page-header.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_1__["SidebarsService"]
        }, {
          type: src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_2__["UnitService"]
        }];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        regionData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changeRegion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/page-header/user-profile/user-profile.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/page-header/user-profile/user-profile.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppComponentsPageHeaderUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserProfileComponent = function UserProfileComponent() {
      _classCallCheck(this, UserProfileComponent);

      this.user = {};
    };

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)();
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["app-user-profile"]],
      inputs: {
        user: "user"
      },
      decls: 0,
      vars: 0,
      template: function UserProfileComponent_Template(rf, ctx) {},
      styles: [".wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.wrap[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]    + .middle-text[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.wrap[_ngcontent-%COMP%]   .middle-text[_ngcontent-%COMP%]    + .dd[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: flex;\n  width: 28px;\n  height: 28px;\n  background: #00b2bd;\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative;\n  flex: 0 0 auto;\n}\n.avatar[_ngcontent-%COMP%]:before {\n  content: attr(data-text);\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-family: Arial;\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n}\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.middle-text[_ngcontent-%COMP%] {\n  display: block;\n  font-family: Arial;\n}\n.middle-text[_ngcontent-%COMP%]   .fullname[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.middle-text[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #009dd9;\n}\n.dd-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  background: #f5f6f7 url(\"/assets/i/sm-down-arrow-ic.png\") center no-repeat;\n  border-radius: 8px;\n}\n@media (max-width: 768px) {\n  .avatar[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .avatar[_ngcontent-%COMP%]:before {\n    font-size: 17px;\n  }\n\n  .dd[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .middle-text[_ngcontent-%COMP%]   .fullname[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n  .middle-text[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL3N0eWxlcy9pbmNsdWRlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RGO0FER0U7RUFDRSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxpQkFBQTtBQ0ZKO0FETUE7RUFDRSxhQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxtQkVFcUI7RUZEckIsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0xGO0FET0U7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCRXBDTztFRnFDUCxXRTNCSTtFRjRCSixnQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNOSjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGtCRXBEUztBRDZDWDtBRFFFO0VBQ0UsZUFBQTtBQ05KO0FEUUU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNFL0NPO0FEeUNYO0FEVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBFQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ1BGO0VEUUU7SUFDRSxlQUFBO0VDTko7O0VEVUE7SUFDRSxhQUFBO0VDUEY7O0VEV0U7SUFDRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ1JKO0VEV0U7SUFDRSxlQUFBO0VDVEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2luY2x1ZGVzL3ZhcmlhYmxlcyc7XG5cbi53cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuYXZhdGFyICsgLm1pZGRsZS10ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG5cbiAgLm1pZGRsZS10ZXh0ICsgLmRkIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgfVxufVxuXG4uYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcblxuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuXG4gIGJhY2tncm91bmQ6ICR1c2VyLWF2YXRhci1iZy1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDAgMCBhdXRvO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAkYWx0LWZvbnQ7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG5cbi5taWRkbGUtdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogJGFsdC1mb250O1xuICAuZnVsbG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAucm9sZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogJGJsdWUtYWx0O1xuICB9XG59XG5cbi5kZC1pY29uIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogJGJnLWNvbG9yIHVybCgnL2Fzc2V0cy9pL3NtLWRvd24tYXJyb3ctaWMucG5nJykgY2VudGVyIG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1icikge1xuICAuYXZhdGFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgJjpiZWZvcmUge1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgfVxuXG4gIC5kZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5taWRkbGUtdGV4dCB7XG4gICAgLmZ1bGxuYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLnJvbGUge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgfVxufVxuIiwiLndyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndyYXAgLmF2YXRhciArIC5taWRkbGUtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ud3JhcCAubWlkZGxlLXRleHQgKyAuZGQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6ICMwMGIyYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi5hdmF0YXI6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5taWRkbGUtdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG4ubWlkZGxlLXRleHQgLmZ1bGxuYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1pZGRsZS10ZXh0IC5yb2xlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwOWRkOTtcbn1cblxuLmRkLWljb24ge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNmY3IHVybChcIi9hc3NldHMvaS9zbS1kb3duLWFycm93LWljLnBuZ1wiKSBjZW50ZXIgbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXZhdGFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLmF2YXRhcjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgfVxuXG4gIC5kZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5taWRkbGUtdGV4dCAuZnVsbG5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAubWlkZGxlLXRleHQgLnJvbGUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufSIsIi8vIGZvbnRzXG4kbWFpbi1mb250OiBBcmlhbDtcbiRhbHQtZm9udDogQXJpYWw7XG5cbi8vIHNpemVzXG4kY29udGVudC13aWR0aDogMTM2NnB4O1xuJHBhZ2UtaGVhZGVyLWhlaWdodDogNjBweDtcbiRuYXZpZ2F0aW9uLWhlaWdodDogNTBweDtcblxuLy8gY29sb3JzXG4kdGV4dC1jb2xvcjogIzAwMDtcbiRiZy1jb2xvcjogI2Y1ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRjb250ZW50LWJveC1iZzogJHdoaXRlO1xuJGJsdWUtcHJpbWFyeTogIzAwNjZiMjtcbiRibHVlLWFsdDogIzAwOWRkOTtcbiRibHVlLXRlcm5hcnk6ICNmMmZhZmQ7XG4kZ3JheS1wcmltYXJ5OiAjOGM4ZjkzO1xuJGdyYXktbGlnaHQ6ICNkYmRjZGQ7XG4kYWN0aXZlLWxpbmstY29sb3I6ICMwMDA7XG4kbGluay1jb2xvcjogIzZiNmQ2ZjtcbiRub3RpZmljYXRpb24tY29sb3I6ICNlMjE4MzY7XG5cbiR1c2VyLWF2YXRhci1iZy1jb2xvcjogIzAwYjJiZDtcblxuLy8gc2lkZWJhclxuJG92ZXJsYXktY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiRzaWRlYmFyLXdpZHRoOiAzNjBweDtcblxuJG1vYmlsZS1icjogNzY4cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-profile',
          templateUrl: './user-profile.component.html',
          styleUrls: ['./user-profile.component.scss']
        }]
      }], null, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/radio-group/radio-group.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/radio-group/radio-group.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RadioGroupComponent */

  /***/
  function srcAppComponentsRadioGroupRadioGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioGroupComponent", function () {
      return RadioGroupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RadioGroupComponent = /*#__PURE__*/function () {
      function RadioGroupComponent() {
        _classCallCheck(this, RadioGroupComponent);

        this.pageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(RadioGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RadioGroupComponent;
    }();

    RadioGroupComponent.ɵfac = function RadioGroupComponent_Factory(t) {
      return new (t || RadioGroupComponent)();
    };

    RadioGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RadioGroupComponent,
      selectors: [["app-radio-group"]],
      outputs: {
        pageSelected: "pageSelected"
      },
      decls: 9,
      vars: 0,
      consts: [[1, "row"], [1, "custom-control", "custom-radio", "mr-2"], ["type", "radio", "id", "currentSpecs", "name", "customRadio", "checked", "", 1, "custom-control-input", "mb-3", 3, "click"], ["for", "currentSpecs", 1, "custom-control-label"], [1, "custom-control", "custom-radio"], ["type", "radio", "id", "historicalSpecs", "name", "customRadio", 1, "custom-control-input", 3, "click"], ["for", "historicalSpecs", 1, "custom-control-label"]],
      template: function RadioGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadioGroupComponent_Template_input_click_2_listener() {
            return ctx.pageSelected.emit("currentSpecs");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Current Specs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RadioGroupComponent_Template_input_click_6_listener() {
            return ctx.pageSelected.emit("historicalSpecs");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Historical Specs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["label[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 12px;\n  font-family: Arial;\n  font-weight: 600;\n  padding-top: 4px;\n  letter-spacing: 0px;\n  color: #000000;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3JhZGlvLWdyb3VwL3JhZGlvLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JhZGlvLWdyb3VwL3JhZGlvLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yYWRpby1ncm91cC9yYWRpby1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAxO1xufVxuIiwibGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-radio-group',
          templateUrl: './radio-group.component.html',
          styleUrls: ['./radio-group.component.scss']
        }]
      }], function () {
        return [];
      }, {
        pageSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/recipe-card/recipe-card.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/recipe-card/recipe-card.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RecipeCardComponent */

  /***/
  function srcAppComponentsRecipeCardRecipeCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeCardComponent", function () {
      return RecipeCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_rescipes_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/rescipes-service.service */
    "./src/app/services/rescipes-service.service.ts");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RecipeCardComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeCardComponent_button_6_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.addWishList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add to WishList");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecipeCardComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeCardComponent_button_7_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.deleteWishList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Remove from WishList");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    var RecipeCardComponent = /*#__PURE__*/function () {
      function RecipeCardComponent(route, recipesService, userService) {
        _classCallCheck(this, RecipeCardComponent);

        this.route = route;
        this.recipesService = recipesService;
        this.userService = userService;
        this.remove = false;
        this.userId = this.route.snapshot.paramMap.get('userId');
      }

      _createClass(RecipeCardComponent, [{
        key: "addWishList",
        value: function addWishList() {
          var _this10 = this;

          this.recipesService.getRecipe(this.label).subscribe(function (res) {
            _this10.recipesService.addWishList(res._id, _this10.userId).subscribe(function (res) {
              return _this10.remove = true;
            });
          });
        }
      }, {
        key: "deleteWishList",
        value: function deleteWishList() {
          var _this11 = this;

          this.recipesService.getRecipe(this.label).subscribe(function (res) {
            _this11.recipesService.deleteWishList(res._id, _this11.userId).subscribe(function (res) {
              return _this11.remove = false;
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.recipesService.getRecipe(this.label).subscribe(function (res) {
            var id = res._id;

            _this12.userService.getData(_this12.userId).subscribe(function (res) {
              var _iterator = _createForOfIteratorHelper(res.wishList),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;

                  if (item._id == id) {
                    _this12.remove = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          });
        }
      }]);

      return RecipeCardComponent;
    }();

    RecipeCardComponent.ɵfac = function RecipeCardComponent_Factory(t) {
      return new (t || RecipeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_rescipes_service_service__WEBPACK_IMPORTED_MODULE_2__["RescipesServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    RecipeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeCardComponent,
      selectors: [["app-recipe-card"]],
      inputs: {
        label: "label",
        imageSrc: "imageSrc",
        url: "url",
        ingredients: "ingredients",
        calories: "calories"
      },
      decls: 30,
      vars: 9,
      consts: [[1, "container"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [2, "display", "flex", "flex-direction", "row-reverse"], ["class", "btn primary add-transaction-btn justify-content-lg-between", 4, "ngIf"], ["class", "btn btn-danger add-transaction-btn justify-content-lg-between", 4, "ngIf"], [2, "border", "4px"], [2, "width", "6vw", "vertical-align", "top"], [2, "height", "10vh", "width", "44vw", "vertical-align", "top", "overflow", "hidden"], [1, "image", 3, "ngStyle"], [2, "display", "flex", "flex-direction", "row"], [2, "display", "inline-block"], [3, "href"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], [1, "btn", "primary", "add-transaction-btn", "justify-content-lg-between"], [1, "fa", "fa-plus", 2, "margin-right", "3px"], [1, "is-not-mobile", 3, "click"], [1, "btn", "btn-danger", "add-transaction-btn", "justify-content-lg-between"], [1, "fa", "fa-ban", 2, "margin-right", "3px"]],
      template: function RecipeCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecipeCardComponent_button_6_Template, 4, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecipeCardComponent_button_7_Template, 4, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Calories:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ingredients:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "How To Cook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.remove);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.remove);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.calories, " calories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ingredients, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(" + ctx.imageSrc + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      styles: [".container[_ngcontent-%COMP%] {\n  border: 2px solid #0066b2;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 20px;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]:hover {\n  background-color: #f5f6f7;\n}\nh4[_ngcontent-%COMP%] {\n  font-weight: 520;\n  color: #0066b2;\n}\n.image[_ngcontent-%COMP%] {\n  height: 10vw;\n  width: 10vw;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  color: #0066b2;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 8.6vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3JlY2lwZS1jYXJkL3JlY2lwZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlY2lwZS1jYXJkL3JlY2lwZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7QUNFSjtBRENBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDRUY7QURBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDR0Y7QUREQTs7RUFFRSxjQUFBO0FDSUY7QURGQTtFQUNFLFlBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLWNhcmQvcmVjaXBlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNjZiMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmNztcbiAgfVxufVxuaDQge1xuICBmb250LXdlaWdodDogNTIwO1xuICBjb2xvcjogIzAwNjZiMjtcbn1cbi5pbWFnZSB7XG4gIGhlaWdodDogMTB2dztcbiAgd2lkdGg6IDEwdnc7XG59XG50aCxcbnRkIHtcbiAgY29sb3I6ICMwMDY2YjI7XG59XG5idXR0b24ge1xuICB3aWR0aDogOC42dnc7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNjZiMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuXG5oNCB7XG4gIGZvbnQtd2VpZ2h0OiA1MjA7XG4gIGNvbG9yOiAjMDA2NmIyO1xufVxuXG4uaW1hZ2Uge1xuICBoZWlnaHQ6IDEwdnc7XG4gIHdpZHRoOiAxMHZ3O1xufVxuXG50aCxcbnRkIHtcbiAgY29sb3I6ICMwMDY2YjI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA4LjZ2dztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe-card',
          templateUrl: './recipe-card.component.html',
          styleUrls: ['./recipe-card.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_rescipes_service_service__WEBPACK_IMPORTED_MODULE_2__["RescipesServiceService"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ingredients: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        calories: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/result-card/result-card.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/result-card/result-card.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ResultCardComponent */

  /***/
  function srcAppComponentsResultCardResultCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultCardComponent", function () {
      return ResultCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ResultCardComponent = /*#__PURE__*/function () {
      function ResultCardComponent() {
        _classCallCheck(this, ResultCardComponent);
      }

      _createClass(ResultCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultCardComponent;
    }();

    ResultCardComponent.ɵfac = function ResultCardComponent_Factory(t) {
      return new (t || ResultCardComponent)();
    };

    ResultCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultCardComponent,
      selectors: [["app-result-card"]],
      inputs: {
        mix: "mix",
        date: "date",
        maxOrder: "maxOrder",
        unity: "unity"
      },
      decls: 22,
      vars: 6,
      consts: [[1, "bigContainer"], [1, "label"], [1, "container"], [1, "title"], [1, "myRow"], [1, "mix"], [1, "total"], [1, "unity"], [1, "myRow2"], [1, "availability"], [1, "date"], [1, "maxOrder"]],
      template: function ResultCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AVAILABLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Blend will be vailable on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Maximum Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mix);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.maxOrder, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, ctx.unity));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  background: #f5f6f7 0% 0% no-repeat padding-box;\n  border-radius: 4px;\n  opacity: 1;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  padding-right: 16px;\n  padding-left: 24px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  color: #0b2d71;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #769231;\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.mix[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.availability[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-style: italic;\n  color: #6b6d6f;\n}\n\n.unity[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.date[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: bolder;\n  font-style: italic;\n  color: #000000;\n}\n\n.myRow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.myRow2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: -4px;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #000000;\n}\n\n.maxOrder[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b6d6f;\n}\n\n.bigContainer[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC1jYXJkL3Jlc3VsdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC1jYXJkL3Jlc3VsdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNNRjs7QURKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDU0Y7O0FEUEE7RUFDRSxpQkFBQTtBQ1VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQtY2FyZC9yZXN1bHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJpbmNsdWRlcy92YXJpYWJsZXNcIjtcblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmNWY2ZjcgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuLmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgY29sb3I6ICMwYjJkNzE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGl0bGUge1xuICBjb2xvcjogIzc2OTIzMTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5taXgge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYXZhaWxhYmlsaXR5IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjNmI2ZDZmO1xufVxuLnVuaXR5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmRhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5teVJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5teVJvdzIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG4udG90YWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5tYXhPcmRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2YjZkNmY7XG59XG4uYmlnQ29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjZmNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGNvbG9yOiAjMGIyZDcxO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzc2OTIzMTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1peCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmF2YWlsYWJpbGl0eSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzZiNmQ2Zjtcbn1cblxuLnVuaXR5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubXlSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5teVJvdzIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG5cbi50b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubWF4T3JkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNmI2ZDZmO1xufVxuXG4uYmlnQ29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result-card',
          templateUrl: './result-card.component.html',
          styleUrls: ['./result-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        mix: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        unity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/sidebar/editors/manage-regions-areas/manage-regions-areas.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/sidebar/editors/manage-regions-areas/manage-regions-areas.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ManageRegionsAreasComponent */

  /***/
  function srcAppComponentsSidebarEditorsManageRegionsAreasManageRegionsAreasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageRegionsAreasComponent", function () {
      return ManageRegionsAreasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/sidebars.service */
    "./src/app/services/sidebars.service.ts");

    var ManageRegionsAreasComponent = /*#__PURE__*/function () {
      function ManageRegionsAreasComponent(sidebar) {
        _classCallCheck(this, ManageRegionsAreasComponent);

        this.sidebar = sidebar;
      }

      _createClass(ManageRegionsAreasComponent, [{
        key: "close",
        value: function close() {
          this.sidebar.close();
        }
      }]);

      return ManageRegionsAreasComponent;
    }();

    ManageRegionsAreasComponent.ɵfac = function ManageRegionsAreasComponent_Factory(t) {
      return new (t || ManageRegionsAreasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_1__["SidebarsService"]));
    };

    ManageRegionsAreasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageRegionsAreasComponent,
      selectors: [["app-manage-regions-areas"]],
      decls: 8,
      vars: 0,
      consts: [[1, "sidebar-editor"], [1, "section-title"], [1, "bottom-actions"], [1, "btn", "primary", 3, "click"], [1, "btn", "outline", 3, "click"]],
      template: function ManageRegionsAreasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage Regions and areas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRegionsAreasComponent_Template_button_click_4_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Save Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageRegionsAreasComponent_Template_button_click_6_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9lZGl0b3JzL21hbmFnZS1yZWdpb25zLWFyZWFzL21hbmFnZS1yZWdpb25zLWFyZWFzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageRegionsAreasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-manage-regions-areas',
          templateUrl: './manage-regions-areas.component.html',
          styleUrls: ['./manage-regions-areas.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_1__["SidebarsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sidebar/sidebar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.ts ***!
    \*********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/sidebars.service */
    "./src/app/services/sidebars.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _editors_manage_regions_areas_manage_regions_areas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./editors/manage-regions-areas/manage-regions-areas.component */
    "./src/app/components/sidebar/editors/manage-regions-areas/manage-regions-areas.component.ts");

    function SidebarComponent_app_manage_regions_areas_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-manage-regions-areas");
      }
    }

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(service) {
        _classCallCheck(this, SidebarComponent);

        this.service = service;
        this.next = '';
        this.state = {};
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          // subscribe to sidebar service
          // open the sidebar based on service state
          this.sub = this.service.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (state) {
            return Object.assign(Object.assign({}, state), {
              visible: Boolean(state.editor)
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (state) {
            return _this13.next = state.visible ? 'show' : 'hide';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            return _this13.next = '';
          })).subscribe(function (state) {
            return _this13.state = state;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe from service
          this.sub.unsubscribe();
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_2__["SidebarsService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 4,
      vars: 7,
      consts: [[1, "content-wrap"], [1, "editor-wrap", 3, "ngSwitch"], [4, "ngSwitchCase"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_app_manage_regions_areas_3_Template, 1, 0, "app-manage-regions-areas", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrap ", ctx.next ? "will-" + ctx.next : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.state.visible);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.state.editor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "manage-regions-areas");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _editors_manage_regions_areas_manage_regions_areas_component__WEBPACK_IMPORTED_MODULE_4__["ManageRegionsAreasComponent"]],
      styles: [".wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.wrap[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.25);\n  opacity: 1;\n  transition: opacity 0.3s ease-in-out;\n}\n.wrap[_ngcontent-%COMP%]:not(.will-show):not(.visible) {\n  display: none;\n}\n.wrap.will-hide[_ngcontent-%COMP%]:before, .wrap.will-show[_ngcontent-%COMP%]:before {\n  opacity: 0;\n}\n.wrap.will-hide[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%], .wrap.will-show[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.content-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n  max-width: 360px;\n  height: 100%;\n  overflow: auto;\n  padding: 24px 24px 32px;\n  background: #fff;\n  display: flex;\n  transition: transform 0.3s ease-in-out;\n  transform: translateX(0);\n}\n.editor-wrap[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.editor-wrap[_ngcontent-%COMP%]     .sidebar-editor {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.editor-wrap[_ngcontent-%COMP%]     .bottom-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tb2hhbWVkL0Rlc2t0b3AvY3VzdC1mb29kL2FuZ3VsYXItc3JjL3NyYy9zdHlsZXMvaW5jbHVkZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGO0FERUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCRVVZO0VGVFosVUFBQTtFQUNBLG9DQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7QUNESjtBRE1JO0VBQ0UsVUFBQTtBQ0pOO0FETUk7RUFDRSwyQkFBQTtBQ0pOO0FEU0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGdCRWRjO0VGZWQsWUFBQTtFQUNBLGNBQUE7RUFFQSx1QkFBQTtFQUNBLGdCRWxDTTtFRm1DTixhQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtBQ1BGO0FEVUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ1BGO0FEVUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1JOO0FEV0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2luY2x1ZGVzL3ZhcmlhYmxlcyc7XG5cbi53cmFwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogJG92ZXJsYXktY29sb3I7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlLWluLW91dDtcbiAgfVxuXG4gICY6bm90KC53aWxsLXNob3cpOm5vdCgudmlzaWJsZSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmLndpbGwtaGlkZSxcbiAgJi53aWxsLXNob3cge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC5jb250ZW50LXdyYXAge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgfVxufVxuXG4uY29udGVudC13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAkc2lkZWJhci13aWR0aDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcblxuICBwYWRkaW5nOiAyNHB4IDI0cHggMzJweDtcbiAgYmFja2dyb3VuZDogJGNvbnRlbnQtYm94LWJnO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5lZGl0b3Itd3JhcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgOjpuZy1kZWVwIHtcbiAgICAuc2lkZWJhci1lZGl0b3Ige1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuYm90dG9tLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuIiwiLndyYXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53cmFwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLndyYXA6bm90KC53aWxsLXNob3cpOm5vdCgudmlzaWJsZSkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndyYXAud2lsbC1oaWRlOmJlZm9yZSwgLndyYXAud2lsbC1zaG93OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDA7XG59XG4ud3JhcC53aWxsLWhpZGUgLmNvbnRlbnQtd3JhcCwgLndyYXAud2lsbC1zaG93IC5jb250ZW50LXdyYXAge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5jb250ZW50LXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAyNHB4IDI0cHggMzJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmVkaXRvci13cmFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5lZGl0b3Itd3JhcCA6Om5nLWRlZXAgLnNpZGViYXItZWRpdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5lZGl0b3Itd3JhcCA6Om5nLWRlZXAgLmJvdHRvbS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufSIsIi8vIGZvbnRzXG4kbWFpbi1mb250OiBBcmlhbDtcbiRhbHQtZm9udDogQXJpYWw7XG5cbi8vIHNpemVzXG4kY29udGVudC13aWR0aDogMTM2NnB4O1xuJHBhZ2UtaGVhZGVyLWhlaWdodDogNjBweDtcbiRuYXZpZ2F0aW9uLWhlaWdodDogNTBweDtcblxuLy8gY29sb3JzXG4kdGV4dC1jb2xvcjogIzAwMDtcbiRiZy1jb2xvcjogI2Y1ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRjb250ZW50LWJveC1iZzogJHdoaXRlO1xuJGJsdWUtcHJpbWFyeTogIzAwNjZiMjtcbiRibHVlLWFsdDogIzAwOWRkOTtcbiRibHVlLXRlcm5hcnk6ICNmMmZhZmQ7XG4kZ3JheS1wcmltYXJ5OiAjOGM4ZjkzO1xuJGdyYXktbGlnaHQ6ICNkYmRjZGQ7XG4kYWN0aXZlLWxpbmstY29sb3I6ICMwMDA7XG4kbGluay1jb2xvcjogIzZiNmQ2ZjtcbiRub3RpZmljYXRpb24tY29sb3I6ICNlMjE4MzY7XG5cbiR1c2VyLWF2YXRhci1iZy1jb2xvcjogIzAwYjJiZDtcblxuLy8gc2lkZWJhclxuJG92ZXJsYXktY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiRzaWRlYmFyLXdpZHRoOiAzNjBweDtcblxuJG1vYmlsZS1icjogNzY4cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_sidebars_service__WEBPACK_IMPORTED_MODULE_2__["SidebarsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/table/check-box-table/check-box-table.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/table/check-box-table/check-box-table.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CheckBoxTableComponent */

  /***/
  function srcAppComponentsTableCheckBoxTableCheckBoxTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckBoxTableComponent", function () {
      return CheckBoxTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _inputs_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../inputs/checkbox/checkbox.component */
    "./src/app/components/inputs/checkbox/checkbox.component.ts");

    var _c0 = ["myCheckBox"];

    function CheckBoxTableComponent_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
      }
    }

    function CheckBoxTableComponent_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-checkbox", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckBoxTableComponent_tr_7_Template_app_checkbox_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var item_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.select(item_r3.key);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r3.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tank ", item_r3.key.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.key.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.key.currentAvailability);
      }
    }

    var CheckBoxTableComponent = /*#__PURE__*/function () {
      function CheckBoxTableComponent() {
        _classCallCheck(this, CheckBoxTableComponent);

        this.tanksMap = new Map();
        this.checkedTank = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CheckBoxTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _iterator2 = _createForOfIteratorHelper(this.data),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              this.tanksMap.set(item, false);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "select",
        value: function select(item) {
          this.tanksMap.set(item, !this.tanksMap.get(item));
          this.checkedTank.emit(this.tanksMap);
        }
      }]);

      return CheckBoxTableComponent;
    }();

    CheckBoxTableComponent.ɵfac = function CheckBoxTableComponent_Factory(t) {
      return new (t || CheckBoxTableComponent)();
    };

    CheckBoxTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckBoxTableComponent,
      selectors: [["app-check-box-table"]],
      viewQuery: function CheckBoxTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myCheckbox = _t.first);
        }
      },
      inputs: {
        labels: "labels",
        data: "data"
      },
      outputs: {
        checkedTank: "checkedTank"
      },
      decls: 9,
      vars: 4,
      consts: [[1, "table", "table-hover"], ["src", "../../../../assets/i/checkbox.png"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["scope", "col"], [3, "checked", "change"], ["myCheckBox", ""]],
      template: function CheckBoxTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CheckBoxTableComponent_td_5_Template, 2, 1, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CheckBoxTableComponent_tr_7_Template, 10, 4, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.tanksMap));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _inputs_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  border-radius: 4px 4px 4px 4px;\n  opacity: 1;\n}\n\n.table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: Arial;\n  font-weight: normal;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n  background: #f5f6f7 0% 0% no-repeat padding-box;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  color: #6b6d6f;\n  opacity: 1;\n  text-align: left;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #6b6d6f;\n  opacity: 1;\n  text-align: left;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #000000;\n  opacity: 1;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 12px;\n  letter-spacing: 0px;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3RhYmxlL2NoZWNrLWJveC10YWJsZS9jaGVjay1ib3gtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvY2hlY2stYm94LXRhYmxlL2NoZWNrLWJveC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREdFO0VBQ0UsK0NBQUE7QUNBSjs7QURDSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURHSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNETjs7QURPSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDSk47O0FETUk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtBQ0xOOztBRFNBO0VBQ0UsaUJBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvY2hlY2stYm94LXRhYmxlL2NoZWNrLWJveC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJpbmNsdWRlcy92YXJpYWJsZXNcIjtcbnRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICBvcGFjaXR5OiAxO1xufVxuLnRhYmxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnRoZWFkIHtcbiAgdHI6Zmlyc3QtY2hpbGQge1xuICAgIGJhY2tncm91bmQ6ICNmNWY2ZjcgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIHRkIHtcbiAgICAgIGNvbG9yOiAjNmI2ZDZmO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG4gIHRyIHtcbiAgICB0ZCB7XG4gICAgICBjb2xvcjogIzZiNmQ2ZjtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxufVxudGJvZHkge1xuICB0ciB7XG4gICAgdGQge1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0aCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIH1cbiAgfVxufVxuLmNoZWNrYm94IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4iLCJ0YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRhYmxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnRoZWFkIHRyOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjZmNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG50aGVhZCB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIGNvbG9yOiAjNmI2ZDZmO1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGhlYWQgdHIgdGQge1xuICBjb2xvcjogIzZiNmQ2ZjtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGJvZHkgdHIgdGQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbnRib2R5IHRyIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuXG4uY2hlY2tib3gge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckBoxTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-check-box-table',
          templateUrl: './check-box-table.component.html',
          styleUrls: ['./check-box-table.component.scss']
        }]
      }], function () {
        return [];
      }, {
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        myCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myCheckBox']
        }],
        checkedTank: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/table/radio-table/radio-table.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/table/radio-table/radio-table.component.ts ***!
    \***********************************************************************/

  /*! exports provided: RadioTableComponent */

  /***/
  function srcAppComponentsTableRadioTableRadioTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioTableComponent", function () {
      return RadioTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_backend_mock_data_mixes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/backend-mock/data/mixes */
    "./src/backend-mock/data/mixes.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function RadioTableComponent_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
      }
    }

    function RadioTableComponent_tr_7_span_10_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r6.name, " + ");
      }
    }

    function RadioTableComponent_tr_7_span_10_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r6.name, " = ");
      }
    }

    function RadioTableComponent_tr_7_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RadioTableComponent_tr_7_span_10_span_3_Template, 2, 1, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RadioTableComponent_tr_7_span_10_span_4_Template, 2, 1, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = ctx.$implicit;
        var index_r7 = ctx.index;

        var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r6.percentage, "", ctx_r5.space, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r7 < item_r4.description.length - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r7 === item_r4.description.length - 1);
      }
    }

    function RadioTableComponent_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RadioTableComponent_tr_7_span_10_Template, 5, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "100% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tank ", item_r4.sn, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r1.getRandomColors());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.productName);
      }
    }

    var RadioTableComponent = /*#__PURE__*/function () {
      function RadioTableComponent() {
        _classCallCheck(this, RadioTableComponent);

        this.tanks = new Map();
        this.mixesToShow = [];
        this.data = src_backend_mock_data_mixes__WEBPACK_IMPORTED_MODULE_1__["Mixes"];
        this.space = '% ';
        this.labels = ['SN', 'Product', 'Product Description'];
      } // getChosenTanks() {
      //   let mixesToShow: any = [];
      //   let ch = '';
      //   for (let [key, value] of this.tanks) {
      //     if (value === true) {
      //       for (let item2 of this.data) {
      //         for (let item of this.data.description) {
      //           if (key.productName === item.productName && item.percentage > 0) {
      //             mixesToShow.push(item2);
      //           }
      //         }
      //       }
      //     }
      //   }
      //   return ch;
      // }


      _createClass(RadioTableComponent, [{
        key: "searchProduct",
        value: function searchProduct() {}
      }, {
        key: "getDescriptionString",
        value: function getDescriptionString(item) {
          var ch = '';

          var _iterator3 = _createForOfIteratorHelper(item.description),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var i = _step3.value;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "getRandomColors",
        value: function getRandomColors() {
          var colors = ['#B2CC34', '#00B2BD', '#009DD9', '#0B2D71', '#769231'];
          var randomColor = colors[Math.floor(Math.random() * colors.length)];
          return randomColor;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RadioTableComponent;
    }();

    RadioTableComponent.ɵfac = function RadioTableComponent_Factory(t) {
      return new (t || RadioTableComponent)();
    };

    RadioTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RadioTableComponent,
      selectors: [["app-radio-table"]],
      inputs: {
        tanks: "tanks"
      },
      decls: 23,
      vars: 4,
      consts: [[1, "bigContainer"], [1, "table", "table-hover"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["myForm", "ngForm"], ["for", "exampleInputEmail1"], ["ngModel", "", "required", "", "name", "targetBlend", "type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter ", 1, "form-control"], [2, "margin-top", "25px"], ["type", "button", "id", "clearButton", 1, "btn", "btn-light", 3, "disabled"], ["type", "button", "id", "forecastButton", 1, "btn", "btn-light", 3, "disabled"], ["scope", "col"], [1, "radio"], [1, "radios"], ["type", "radio", "name", "mix", 1, "oldCheckbox", 3, "value"], [1, "checkmark"], ["style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "percentage"], [2, "display", "inline-block"], [2, "margin-right", "0.5em"], ["class", "normal", "class", "strong", 4, "ngIf"], [1, "strong"]],
      template: function RadioTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RadioTableComponent_td_5_Template, 2, 1, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RadioTableComponent_tr_7_Template, 15, 7, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Target Blend (MT)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " View Forecast ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r2.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r2.form.invalid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["table[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  border-radius: 4px 4px 4px 4px;\n  opacity: 1;\n  border-style: hidden;\n}\n\n.bigContainer[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px 4px 4px 4px;\n  opacity: 1;\n  padding-bottom: 18px;\n}\n\n.table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: Arial;\n  font-weight: normal;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n  background: #f5f6f7 0% 0% no-repeat padding-box;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  color: #6b6d6f;\n  opacity: 1;\n  text-align: left;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #6b6d6f;\n  opacity: 1;\n  text-align: left;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #000000;\n  opacity: 1;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 12px;\n  letter-spacing: 0px;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  bottom: 0px;\n  width: 16px;\n  cursor: pointer;\n  height: 16px;\n  background-color: transparent;\n  border: 1px solid #ebebeb;\n  border-radius: 50%;\n  opacity: 1;\n}\n\n.checkmark[_ngcontent-%COMP%]:hover {\n  background-color: #f5f6f7;\n}\n\n.oldCheckbox[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.oldCheckbox[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  content: url(\"/assets/i/radioButton.png\");\n}\n\n.radio[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.radios[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(1) {\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  width: 151px;\n  height: 28px;\n  font-family: Arial;\n  color: #000000;\n  font-size: 12px;\n  font-weight: bolder;\n  direction: rtl;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(1)::-webkit-input-placeholder {\n  font-size: 12px;\n  font-weight: normal;\n  color: #8c8f93;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(1)::-moz-placeholder {\n  font-size: 12px;\n  font-weight: normal;\n  color: #8c8f93;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(1)::-ms-input-placeholder {\n  font-size: 12px;\n  font-weight: normal;\n  color: #8c8f93;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(1)::placeholder {\n  font-size: 12px;\n  font-weight: normal;\n  color: #8c8f93;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(2) {\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  width: 125px;\n  height: 28px;\n  font-family: Arial;\n  color: #000000;\n  font-size: 12px;\n  font-weight: bolder;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(2)::-webkit-input-placeholder {\n  font-size: 12px;\n  font-weight: normal;\n  color: #8c8f93;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(2)::-moz-placeholder {\n  font-size: 12px;\n  font-weight: normal;\n  color: #8c8f93;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(2)::-ms-input-placeholder {\n  font-size: 12px;\n  font-weight: normal;\n  color: #8c8f93;\n}\n\ninput[_ngcontent-%COMP%]:nth-of-type(2)::placeholder {\n  font-size: 12px;\n  font-weight: normal;\n  color: #8c8f93;\n}\n\n.input2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  margin-top: 34px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: normal;\n  color: #6b6d6f;\n}\n\nspan[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.percentage[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n}\n\n#clearButton[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 28px;\n  background-color: white;\n  color: #009dd9;\n  border: none;\n  width: 70px;\n  font-size: 11px;\n  font-weight: bold;\n}\n\n#clearButton[_ngcontent-%COMP%]:disabled, #clearButton[disabled][_ngcontent-%COMP%] {\n  color: #8c8f93;\n}\n\n#forecastButton[_ngcontent-%COMP%] {\n  background-color: #0066b2;\n  color: #ffffff;\n  border-radius: 4px;\n  width: 106px;\n  font-size: 11px;\n  font-weight: bold;\n}\n\n#forecastButton[_ngcontent-%COMP%]:disabled, #forecastButton[disabled][_ngcontent-%COMP%] {\n  background-color: #ebebeb;\n  color: #8c8f93;\n  font-size: 11px;\n  font-weight: bold;\n}\n\nform[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  margin-right: 24px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: -15px;\n  margin-left: 24px;\n  margin-right: 24px;\n}\n\n.strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 12px;\n  margin-right: 2px;\n  letter-spacing: 0px;\n}\n\n.normal[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n}\n\n.percentage[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  margin-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3RhYmxlL3JhZGlvLXRhYmxlL3JhZGlvLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RhYmxlL3JhZGlvLXRhYmxlL3JhZGlvLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9oYW1lZC9EZXNrdG9wL2N1c3QtZm9vZC9hbmd1bGFyLXNyYy9zcmMvc3R5bGVzL2luY2x1ZGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREVFO0VBQ0UsK0NBQUE7QUNDSjs7QURBSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNFTjs7QURFSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURNSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDSE47O0FETUk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtBQ0xOOztBRFNBO0VBQ0UsaUJBQUE7QUNORjs7QURRQTtFQUNFLHFCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNQRjs7QURRRTtFQUNFLHlCQUFBO0FDTko7O0FEVUE7RUFDRSxhQUFBO0FDUEY7O0FEU0E7RUFDRSx5Q0FBQTtBQ05GOztBRFFBO0VBQ0UsV0FBQTtBQ0xGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCRXhGUztFRnlGVCxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0hGOztBRElFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRERFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRERFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRERFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JFeEdTO0VGeUdULGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURHRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNESjs7QURGRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNESjs7QURGRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNESjs7QURGRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUY7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTs7RUFFRSxjQUFBO0FDSUY7O0FERkE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURIQTs7RUFFRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QURKQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ09GOztBRExBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDU0Y7O0FEUEE7RUFDRSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtBQ1VGOztBRFJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNXRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvcmFkaW8tdGFibGUvcmFkaW8tdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaW5jbHVkZXMvdmFyaWFibGVzXCI7XG50YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG4uYmlnQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbn1cbi50YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG50aGVhZCB7XG4gIHRyOmZpcnN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNmY3IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICB0ZCB7XG4gICAgICBjb2xvcjogIzZiNmQ2ZjtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuICB0ciB7XG4gICAgdGQge1xuICAgICAgY29sb3I6ICM2YjZkNmY7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cbnRib2R5IHtcbiAgdHIge1xuICAgIHRkIHtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIH1cbiAgfVxufVxuLmNoZWNrYm94IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY2hlY2ttYXJrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTZweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmNztcbiAgfVxufVxuXG4ub2xkQ2hlY2tib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm9sZENoZWNrYm94OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pL3JhZGlvQnV0dG9uLnBuZ1wiKTtcbn1cbi5yYWRpbyB7XG4gIHdpZHRoOiAyNXB4O1xufVxuLnJhZGlvcyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5pbnB1dDpudGgtb2YtdHlwZSgxKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDE1MXB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiAkYWx0LWZvbnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGRpcmVjdGlvbjogcnRsO1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICM4YzhmOTM7XG4gIH1cbn1cbmlucHV0Om50aC1vZi10eXBlKDIpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTI1cHg7XG4gIGhlaWdodDogMjhweDtcbiAgZm9udC1mYW1pbHk6ICRhbHQtZm9udDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiAjOGM4ZjkzO1xuICB9XG59XG4uaW5wdXQyIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmZvcm0tcm93IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDM0cHg7XG59XG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM2YjZkNmY7XG59XG5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBlcmNlbnRhZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4jY2xlYXJCdXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMDA5ZGQ5O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2NsZWFyQnV0dG9uOmRpc2FibGVkLFxuI2NsZWFyQnV0dG9uW2Rpc2FibGVkXSB7XG4gIGNvbG9yOiAjOGM4ZjkzO1xufVxuI2ZvcmVjYXN0QnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZiMjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwNnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2ZvcmVjYXN0QnV0dG9uOmRpc2FibGVkLFxuI2ZvcmVjYXN0QnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGNvbG9yOiAjOGM4ZjkzO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhyIHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG4uc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cbi5ub3JtYWwge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnBlcmNlbnRhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuIiwidGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuXG4uYmlnQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbn1cblxuLnRhYmxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnRoZWFkIHRyOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjZmNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG50aGVhZCB0cjpmaXJzdC1jaGlsZCB0ZCB7XG4gIGNvbG9yOiAjNmI2ZDZmO1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGhlYWQgdHIgdGQge1xuICBjb2xvcjogIzZiNmQ2ZjtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGJvZHkgdHIgdGQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbnRib2R5IHRyIHRoIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuXG4uY2hlY2tib3gge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMTtcbn1cbi5jaGVja21hcms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuXG4ub2xkQ2hlY2tib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2xkQ2hlY2tib3g6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2kvcmFkaW9CdXR0b24ucG5nXCIpO1xufVxuXG4ucmFkaW8ge1xuICB3aWR0aDogMjVweDtcbn1cblxuLnJhZGlvcyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlucHV0Om50aC1vZi10eXBlKDEpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTUxcHg7XG4gIGhlaWdodDogMjhweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cbmlucHV0Om50aC1vZi10eXBlKDEpOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM4YzhmOTM7XG59XG5cbmlucHV0Om50aC1vZi10eXBlKDIpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTI1cHg7XG4gIGhlaWdodDogMjhweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuaW5wdXQ6bnRoLW9mLXR5cGUoMik6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzhjOGY5Mztcbn1cblxuLmlucHV0MiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5mb3JtLXJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiAzNHB4O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM2YjZkNmY7XG59XG5cbnNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wZXJjZW50YWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4jY2xlYXJCdXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMDA5ZGQ5O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jY2xlYXJCdXR0b246ZGlzYWJsZWQsXG4jY2xlYXJCdXR0b25bZGlzYWJsZWRdIHtcbiAgY29sb3I6ICM4YzhmOTM7XG59XG5cbiNmb3JlY2FzdEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2YjI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDZweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2ZvcmVjYXN0QnV0dG9uOmRpc2FibGVkLFxuI2ZvcmVjYXN0QnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGNvbG9yOiAjOGM4ZjkzO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5mb3JtIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG4uc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cblxuLm5vcm1hbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wZXJjZW50YWdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn0iLCIvLyBmb250c1xuJG1haW4tZm9udDogQXJpYWw7XG4kYWx0LWZvbnQ6IEFyaWFsO1xuXG4vLyBzaXplc1xuJGNvbnRlbnQtd2lkdGg6IDEzNjZweDtcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDYwcHg7XG4kbmF2aWdhdGlvbi1oZWlnaHQ6IDUwcHg7XG5cbi8vIGNvbG9yc1xuJHRleHQtY29sb3I6ICMwMDA7XG4kYmctY29sb3I6ICNmNWY2Zjc7XG4kd2hpdGU6ICNmZmY7XG4kY29udGVudC1ib3gtYmc6ICR3aGl0ZTtcbiRibHVlLXByaW1hcnk6ICMwMDY2YjI7XG4kYmx1ZS1hbHQ6ICMwMDlkZDk7XG4kYmx1ZS10ZXJuYXJ5OiAjZjJmYWZkO1xuJGdyYXktcHJpbWFyeTogIzhjOGY5MztcbiRncmF5LWxpZ2h0OiAjZGJkY2RkO1xuJGFjdGl2ZS1saW5rLWNvbG9yOiAjMDAwO1xuJGxpbmstY29sb3I6ICM2YjZkNmY7XG4kbm90aWZpY2F0aW9uLWNvbG9yOiAjZTIxODM2O1xuXG4kdXNlci1hdmF0YXItYmctY29sb3I6ICMwMGIyYmQ7XG5cbi8vIHNpZGViYXJcbiRvdmVybGF5LWNvbG9yOiByZ2JhKDAsMCwwLC4yNSk7XG4kc2lkZWJhci13aWR0aDogMzYwcHg7XG5cbiRtb2JpbGUtYnI6IDc2OHB4O1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-radio-table',
          templateUrl: './radio-table.component.html',
          styleUrls: ['./radio-table.component.scss']
        }]
      }], function () {
        return [];
      }, {
        tanks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/table/table.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/table/table.component.ts ***!
    \*****************************************************/

  /*! exports provided: TableComponent */

  /***/
  function srcAppComponentsTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TableComponent_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.label);
      }
    }

    function TableComponent_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.unity);
      }
    }

    function TableComponent_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tank ", item_r5.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.api);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.viscosity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.sulfur);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.flashPt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.water);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.alAndsl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.mcr);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.na);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.van);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.ccai);
      }
    }

    var TableComponent = /*#__PURE__*/function () {
      function TableComponent() {
        _classCallCheck(this, TableComponent);
      }

      _createClass(TableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TableComponent;
    }();

    TableComponent.ɵfac = function TableComponent_Factory(t) {
      return new (t || TableComponent)();
    };

    TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableComponent,
      selectors: [["app-table"]],
      inputs: {
        labels: "labels",
        data: "data"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "table", "table-hover"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["scope", "col"]],
      template: function TableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_td_3_Template, 2, 1, "td", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_td_5_Template, 2, 1, "td", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableComponent_tr_7_Template, 25, 12, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["table[_ngcontent-%COMP%] {\n  border: 1px solid #ebebeb;\n  border-radius: 4px 4px 4px 4px;\n  opacity: 1;\n}\n\n.table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: Arial;\n  font-weight: normal;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n  background: #f5f6f7 0% 0% no-repeat padding-box;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   td[_ngcontent-%COMP%] {\n  color: #6b6d6f;\n  opacity: 1;\n  text-align: left;\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #6b6d6f;\n  opacity: 1;\n  text-align: left;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #000000;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FER0U7RUFDRSwrQ0FBQTtBQ0FKOztBRENJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NOOztBREdJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0ROOztBRE9JO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaW5jbHVkZXMvdmFyaWFibGVzXCI7XG50YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNHB4IDRweDtcbiAgb3BhY2l0eTogMTtcbn1cbi50YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG50aGVhZCB7XG4gIHRyOmZpcnN0LWNoaWxkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNmY3IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICB0ZCB7XG4gICAgICBjb2xvcjogIzZiNmQ2ZjtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuICB0ciB7XG4gICAgdGQge1xuICAgICAgY29sb3I6ICM2YjZkNmY7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbn1cbnRib2R5IHtcbiAgdHIge1xuICAgIHRkIHtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cbiIsInRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGFibGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxudGhlYWQgdHI6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiAjZjVmNmY3IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cbnRoZWFkIHRyOmZpcnN0LWNoaWxkIHRkIHtcbiAgY29sb3I6ICM2YjZkNmY7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG50aGVhZCB0ciB0ZCB7XG4gIGNvbG9yOiAjNmI2ZDZmO1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50Ym9keSB0ciB0ZCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-table',
          templateUrl: './table.component.html',
          styleUrls: ['./table.component.scss']
        }]
      }], function () {
        return [];
      }, {
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/directives.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/directives/directives.module.ts ***!
    \*************************************************/

  /*! exports provided: DirectivesModule */

  /***/
  function srcAppDirectivesDirectivesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectivesModule", function () {
      return DirectivesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _if_role_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./if-role.directive */
    "./src/app/directives/if-role.directive.ts");

    var DirectivesModule = function DirectivesModule() {
      _classCallCheck(this, DirectivesModule);
    };

    DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DirectivesModule
    });
    DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DirectivesModule_Factory(t) {
        return new (t || DirectivesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesModule, {
        declarations: [_if_role_directive__WEBPACK_IMPORTED_MODULE_2__["IfRoleDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_if_role_directive__WEBPACK_IMPORTED_MODULE_2__["IfRoleDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_if_role_directive__WEBPACK_IMPORTED_MODULE_2__["IfRoleDirective"]],
          exports: [_if_role_directive__WEBPACK_IMPORTED_MODULE_2__["IfRoleDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/if-role.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/directives/if-role.directive.ts ***!
    \*************************************************/

  /*! exports provided: IfRoleDirective */

  /***/
  function srcAppDirectivesIfRoleDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IfRoleDirective", function () {
      return IfRoleDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /**
     * Check if current auth user has any of the specified roles
     */


    var IfRoleDirective = /*#__PURE__*/function () {
      function IfRoleDirective(templateRef, viewContainer, auth) {
        _classCallCheck(this, IfRoleDirective);

        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.auth = auth;
        this.hasView = false;
        this.role$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
      }

      _createClass(IfRoleDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.role$)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.checkRoles.bind(this))).subscribe(this.updateView.bind(this));
        }
        /**
         * Check if expected roles are met
         * @param param0 Data from observables
         */

      }, {
        key: "checkRoles",
        value: function checkRoles(_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              user = _ref5[0],
              expected = _ref5[1];

          return expected.split(' ').some(function (role) {
            return user.roles.indexOf(role) > -1;
          });
        }
        /**
         * Attach the view element if condition is met
         * @param condition True or false if user has expected role
         */

      }, {
        key: "updateView",
        value: function updateView(condition) {
          if (condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
          } else if (!condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
          }
        }
      }, {
        key: "appIfRole",
        set: function set(role) {
          this.role$.next(role);
        }
      }]);

      return IfRoleDirective;
    }();

    IfRoleDirective.ɵfac = function IfRoleDirective_Factory(t) {
      return new (t || IfRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    IfRoleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: IfRoleDirective,
      selectors: [["", "appIfRole", ""]],
      inputs: {
        appIfRole: "appIfRole"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IfRoleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appIfRole]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, {
        appIfRole: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!localStorage.getItem('token')) {
            this.router.navigate(['login']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard2/dashboard2-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/dashboard2/dashboard2-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: Dashboard2RoutingModule */

  /***/
  function srcAppPagesDashboard2Dashboard2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dashboard2RoutingModule", function () {
      return Dashboard2RoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./recipe/recipe.component */
    "./src/app/pages/dashboard2/recipe/recipe.component.ts");
    /* harmony import */


    var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile/my-profile.component */
    "./src/app/pages/dashboard2/my-profile/my-profile.component.ts");

    var routes = [{
      path: 'searchRecipe',
      component: _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_2__["RecipeComponent"]
    }, {
      path: 'myProfile',
      component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"]
    }];

    var Dashboard2RoutingModule = function Dashboard2RoutingModule() {
      _classCallCheck(this, Dashboard2RoutingModule);
    };

    Dashboard2RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Dashboard2RoutingModule
    });
    Dashboard2RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Dashboard2RoutingModule_Factory(t) {
        return new (t || Dashboard2RoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Dashboard2RoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard2RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard2/dashboard2.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/dashboard2/dashboard2.component.ts ***!
    \**********************************************************/

  /*! exports provided: Dashboard2Component */

  /***/
  function srcAppPagesDashboard2Dashboard2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function () {
      return Dashboard2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");

    var Dashboard2Component = /*#__PURE__*/function () {
      function Dashboard2Component(route) {
        _classCallCheck(this, Dashboard2Component);

        this.route = route;
        this.userId = this.route.snapshot.paramMap.get('userId');
        console.log(this.userId);
      }

      _createClass(Dashboard2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Dashboard2Component;
    }();

    Dashboard2Component.ɵfac = function Dashboard2Component_Factory(t) {
      return new (t || Dashboard2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    Dashboard2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Dashboard2Component,
      selectors: [["app-dashboard2"]],
      decls: 3,
      vars: 0,
      template: function Dashboard2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["div[_ngcontent-%COMP%] {\n  margin: 20px;\n  background-color: #ffffff;\n  border-radius: 4px;\n  padding: 20px;\n  padding-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQyL2Rhc2hib2FyZDIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZDIvZGFzaGJvYXJkMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQyL2Rhc2hib2FyZDIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICBtYXJnaW46IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuIiwiZGl2IHtcbiAgbWFyZ2luOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard2',
          templateUrl: './dashboard2.component.html',
          styleUrls: ['./dashboard2.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard2/my-profile/my-profile.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/dashboard2/my-profile/my-profile.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppPagesDashboard2MyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_container_header_container_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../components/container-header/container-header.component */
    "./src/app/components/container-header/container-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _components_food_icon_food_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/food-icon/food-icon.component */
    "./src/app/components/food-icon/food-icon.component.ts");
    /* harmony import */


    var _components_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/recipe-card/recipe-card.component */
    "./src/app/components/recipe-card/recipe-card.component.ts");
    /* harmony import */


    var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/loading-spinner/loading-spinner.component */
    "./src/app/components/loading-spinner/loading-spinner.component.ts");

    function MyProfileComponent_div_1_div_5_app_food_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-food-icon", 13);
      }

      if (rf & 2) {
        var item1_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", item1_r7)("icon", item1_r7);
      }
    }

    function MyProfileComponent_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyProfileComponent_div_1_div_5_app_food_icon_2_Template, 1, 2, "app-food-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.makeArray(item_r5));
      }
    }

    function MyProfileComponent_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r8.label)("calories", item_r8.calories)("imageSrc", item_r8.image)("url", item_r8.url)("ingredients", item_r8.ingredientLines);
      }
    }

    function MyProfileComponent_div_1_app_loading_spinner_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner", 15);
      }
    }

    function MyProfileComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Last Reasearches");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyProfileComponent_div_1_div_5_Template, 4, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WishList");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyProfileComponent_div_1_div_9_Template, 3, 5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyProfileComponent_div_1_app_loading_spinner_10_Template, 1, 0, "app-loading-spinner", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.lastReasearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.recipes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
      }
    }

    function MyProfileComponent_div_2_div_5_app_food_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-food-icon", 13);
      }

      if (rf & 2) {
        var item1_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", item1_r14)("icon", item1_r14);
      }
    }

    function MyProfileComponent_div_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyProfileComponent_div_2_div_5_app_food_icon_2_Template, 1, 2, "app-food-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.makeArray(item_r12));
      }
    }

    function MyProfileComponent_div_2_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r15.label)("calories", item_r15.calories)("imageSrc", item_r15.image)("url", item_r15.url)("ingredients", item_r15.ingredientLines);
      }
    }

    function MyProfileComponent_div_2_app_loading_spinner_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner", 15);
      }
    }

    function MyProfileComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Last Reasearchs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyProfileComponent_div_2_div_5_Template, 4, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "WishList");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyProfileComponent_div_2_div_9_Template, 3, 5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyProfileComponent_div_2_app_loading_spinner_10_Template, 1, 0, "app-loading-spinner", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.lastReasearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.recipes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
      }
    }

    var MyProfileComponent = /*#__PURE__*/function () {
      function MyProfileComponent(authenticationService, route) {
        _classCallCheck(this, MyProfileComponent);

        this.authenticationService = authenticationService;
        this.route = route;
        this.width = window.innerWidth;
        this.loading = false;
        this.width = window.innerWidth;
        this.userId = this.route.snapshot.paramMap.get('userId');
      }

      _createClass(MyProfileComponent, [{
        key: "onWindowResize",
        value: function onWindowResize(event) {
          this.width = event.target.innerWidth;
          console.log(this.width);
        }
      }, {
        key: "makeArray",
        value: function makeArray(value) {
          var arr = value.trim().split(',');
          console.log(arr);
          if (arr.length > 1) arr.pop();
          return arr;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.loading = true;
          this.authenticationService.getData(this.userId).subscribe(function (res) {
            console.log(res);
            _this14.recipes = res.wishList;
            _this14.loading = false;
            _this14.lastReasearch = res.lastReasearch;
            console.log(_this14.lastReasearch);
          });
        }
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) {
      return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyProfileComponent,
      selectors: [["app-my-profile"]],
      hostBindings: function MyProfileComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MyProfileComponent_resize_HostBindingHandler($event) {
            return ctx.onWindowResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 3,
      vars: 2,
      consts: [["title", "My Profile"], ["class", "myContainer", 4, "ngIf"], ["style", "padding-right: 15px;", 4, "ngIf"], [1, "myContainer"], [1, "currentInventory"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "padding-right", "34px", "justify-content", "space-between", "margin-bottom", "20px"], [1, "ingredients"], [4, "ngFor", "ngForOf"], [1, "inventoryForecast"], [1, "ingredients", "mb-2"], ["class", "spinner", 4, "ngIf"], ["fxLayoutGap", "20px", 2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap"], ["class", "foodIcon", 3, "name", "icon", 4, "ngFor", "ngForOf"], [1, "foodIcon", 3, "name", "icon"], [3, "label", "calories", "imageSrc", "url", "ingredients"], [1, "spinner"], [2, "padding-right", "15px"]],
      template: function MyProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-container-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyProfileComponent_div_1_Template, 11, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyProfileComponent_div_2_Template, 11, 3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width > 1050);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width <= 1050);
        }
      },
      directives: [_components_container_header_container_header_component__WEBPACK_IMPORTED_MODULE_3__["ContainerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _components_food_icon_food_icon_component__WEBPACK_IMPORTED_MODULE_6__["FoodIconComponent"], _components_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_7__["RecipeCardComponent"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]],
      styles: [".myContainer[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-top: 19px;\n  margin-left: 0px;\n  margin-right: 0px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  opacity: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 75vh;\n  padding-bottom: 3vh;\n}\n\n.ingredients[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-right: 20px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.bigContainer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-left: 56px;\n  margin-right: 56px;\n  margin-bottom: 60px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0px 0px 4px 4px;\n  opacity: 1;\n  padding-top: 19px;\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n.currentInventory[_ngcontent-%COMP%] {\n  width: calc((100% - 40px) * 2 / 5);\n  margin-right: 40px;\n  padding-right: 0px !important;\n  overflow-y: scroll;\n}\n\n.inventoryForecast[_ngcontent-%COMP%] {\n  width: calc((100% - 40px) * 3 / 5);\n  position: relative;\n  overflow-y: scroll;\n  padding-right: 1vw;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add-transaction-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-left: 5px;\n  display: flex;\n  margin-left: auto;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-transaction-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  width: 9px;\n  margin-right: 5px;\n}\n\n.foodIcon[_ngcontent-%COMP%] {\n  width: calc((100% - 80px) / 4);\n  margin-bottom: 20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 8px;\n  background: #0066b2;\n}\n\n.notFound[_ngcontent-%COMP%] {\n  font-size: 1.8vw;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #6b6d6f;\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQyL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkMi9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QURIRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREZBO0VBQ0UsOEJBbEVVO0VBbUVWLG1CQUFBO0FDS0Y7O0FESEE7RUFFRSxVQUFBO0VBRUEsWUFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0tGOztBREhBO0VBQ0UsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZDIvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdpZHRoSWNvbjogY2FsYygoMTAwJSAtIDgwcHgpIC8gNCk7XG4ubXlDb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNzV2aDtcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcbn1cbi5pbmdyZWRpZW50cyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmlnQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDU2cHg7XG4gIG1hcmdpbi1yaWdodDogNTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZy10b3A6IDE5cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cbi5jdXJyZW50SW52ZW50b3J5IHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSA0MHB4KSAqIDIgLyA1KTtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmludmVudG9yeUZvcmVjYXN0IHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSA0MHB4KSAqIDMgLyA1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcbn1cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmFkZC10cmFuc2FjdGlvbi1idG4ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmZhIHtcbiAgICB3aWR0aDogOXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG4uZm9vZEljb24ge1xuICB3aWR0aDogJHdpZHRoSWNvbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvLyBXaWR0aCBvZiB2ZXJ0aWNhbCBzY3JvbGwgYmFyXG4gIHdpZHRoOiA4cHg7XG4gIC8vIEhlaWdodCBvZiBob3Jpem9udGFsIHNjcm9sbCBiYXJcbiAgaGVpZ2h0OiAxMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzAwNjZiMjtcbn1cbi5ub3RGb3VuZCB7XG4gIGZvbnQtc2l6ZTogMS44dnc7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzZiNmQ2ZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4iLCIubXlDb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNzV2aDtcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcbn1cblxuLmluZ3JlZGllbnRzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5iaWdDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogNTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nLXRvcDogMTlweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4uY3VycmVudEludmVudG9yeSB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gNDBweCkgKiAyIC8gNSk7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmludmVudG9yeUZvcmVjYXN0IHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSA0MHB4KSAqIDMgLyA1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcbn1cblxuLnNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYWRkLXRyYW5zYWN0aW9uLWJ0biB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZC10cmFuc2FjdGlvbi1idG4gLmZhIHtcbiAgd2lkdGg6IDlweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5mb29kSWNvbiB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gODBweCkgLyA0KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzAwNjZiMjtcbn1cblxuLm5vdEZvdW5kIHtcbiAgZm9udC1zaXplOiAxLjh2dztcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNmI2ZDZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAyMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-profile',
          templateUrl: './my-profile.component.html',
          styleUrls: ['./my-profile.component.scss'],
          host: {
            '(window:resize)': 'onWindowResize($event)'
          }
        }]
      }], function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard2/recipe/recipe.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard2/recipe/recipe.component.ts ***!
    \*************************************************************/

  /*! exports provided: RecipeComponent */

  /***/
  function srcAppPagesDashboard2RecipeRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeComponent", function () {
      return RecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_rescipes_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/rescipes-service.service */
    "./src/app/services/rescipes-service.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_container_header_container_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/container-header/container-header.component */
    "./src/app/components/container-header/container-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_inputs_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/inputs/search-field/search-field.component */
    "./src/app/components/inputs/search-field/search-field.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _components_food_icon_food_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/food-icon/food-icon.component */
    "./src/app/components/food-icon/food-icon.component.ts");
    /* harmony import */


    var _components_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../components/recipe-card/recipe-card.component */
    "./src/app/components/recipe-card/recipe-card.component.ts");
    /* harmony import */


    var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../components/loading-spinner/loading-spinner.component */
    "./src/app/components/loading-spinner/loading-spinner.component.ts");
    /* harmony import */


    var _pipes_ingredients_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../pipes/ingredients-filter.pipe */
    "./src/app/pipes/ingredients-filter.pipe.ts");

    function RecipeComponent_div_1_app_search_field_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-field", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function RecipeComponent_div_1_app_search_field_6_Template_app_search_field_getInput_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.showSearch($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecipeComponent_div_1_app_search_field_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function RecipeComponent_div_1_app_search_field_7_Template_app_search_field_getInput_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.showSearch($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecipeComponent_div_1_div_12_app_food_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-food-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeStatus", function RecipeComponent_div_1_div_12_app_food_icon_1_Template_app_food_icon_changeStatus_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r16.changeStatus($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", item_r15)("icon", item_r15);
      }
    }

    function RecipeComponent_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipeComponent_div_1_div_12_app_food_icon_1_Template, 1, 2, "app-food-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ingredientsFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r4.ingredients, ctx_r4.searchString));
      }
    }

    function RecipeComponent_div_1_div_13_app_food_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-food-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeStatus", function RecipeComponent_div_1_div_13_app_food_icon_1_Template_app_food_icon_changeStatus_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r20.changeStatus($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r19 = ctx.$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r18.width)("name", item_r19)("icon", item_r19);
      }
    }

    function RecipeComponent_div_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipeComponent_div_1_div_13_app_food_icon_1_Template, 1, 3, "app-food-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ingredientsFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r5.ingredients, ctx_r5.searchString));
      }
    }

    function RecipeComponent_div_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You will see Your recipes Here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecipeComponent_div_1_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Recipes Found ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecipeComponent_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r22.recipe.label)("calories", item_r22.recipe.calories)("imageSrc", item_r22.recipe.image)("url", item_r22.recipe.url)("ingredients", item_r22.recipe.ingredientLines);
      }
    }

    function RecipeComponent_div_1_app_loading_spinner_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner", 27);
      }
    }

    function RecipeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ingredients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecipeComponent_div_1_app_search_field_6_Template, 1, 0, "app-search-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecipeComponent_div_1_app_search_field_7_Template, 1, 0, "app-search-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeComponent_div_1_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.getRecipes();
        })("click", function RecipeComponent_div_1_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.addWishList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Get Recipes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecipeComponent_div_1_div_12_Template, 3, 4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RecipeComponent_div_1_div_13_Template, 3, 4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RecipeComponent_div_1_div_15_Template, 2, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RecipeComponent_div_1_div_16_Template, 2, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RecipeComponent_div_1_div_17_Template, 3, 5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RecipeComponent_div_1_app_loading_spinner_18_Template, 1, 0, "app-loading-spinner", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.width > 1210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.width <= 1210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.width > 1210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.width <= 1210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.noSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.notFound && !ctx_r0.noSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.recipes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
      }
    }

    function RecipeComponent_div_2_app_food_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-food-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeStatus", function RecipeComponent_div_2_app_food_icon_7_Template_app_food_icon_changeStatus_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.changeStatus($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", item_r30)("icon", item_r30);
      }
    }

    function RecipeComponent_div_2_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You will see Your recipes Here ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecipeComponent_div_2_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-recipe-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r33.recipe.label)("calories", item_r33.recipe.calories)("imageSrc", item_r33.recipe.image)("url", item_r33.recipe.url)("ingredients", item_r33.recipe.ingredientLines);
      }
    }

    function RecipeComponent_div_2_app_loading_spinner_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner", 27);
      }
    }

    function RecipeComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeComponent_div_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.getRecipes();
        })("click", function RecipeComponent_div_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.addWishList();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get Recipes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecipeComponent_div_2_app_food_icon_7_Template, 1, 2, "app-food-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "ingredientsFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RecipeComponent_div_2_div_9_Template, 2, 0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecipeComponent_div_2_div_10_Template, 3, 5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecipeComponent_div_2_app_loading_spinner_11_Template, 1, 0, "app-loading-spinner", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, ctx_r1.ingredients, ctx_r1.searchString));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.noSearch);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.recipes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
      }
    }

    var RecipeComponent = /*#__PURE__*/function () {
      function RecipeComponent(recipesService, auth, route) {
        _classCallCheck(this, RecipeComponent);

        this.recipesService = recipesService;
        this.auth = auth;
        this.route = route;
        this.width = window.innerWidth;
        this.ingredientsMap = new Map();
        this.noSearch = true;
        this.notFound = false;
        this.searchString = '';
        this.loading = false;
        this.recipes = [];
        this.ingredients = ['apple', 'banana', 'beans', 'bread', 'broccoli', 'candy', 'carrot', 'cherry', 'chicken', 'chips', 'cocktail', 'coffee', 'cookie', 'corn', 'cream', 'eggplant', 'fish', 'garlic', 'grapefruit', 'grapes', 'ham', 'lemon', 'lettuce', 'meat', 'milk', 'mushroom', 'noodles', 'orange', 'peach', 'pear', 'peas', 'pepper', 'pineapple', 'potatoe', 'sausage', 'Shrimp', 'soda', 'soup', 'spatula', 'strawberry', 'tomato', 'watermelon', 'wine'];
        this.userId = this.route.snapshot.paramMap.get('userId');
        console.log(this.userId);
        this.width = window.innerWidth;
        console.log(this.width);
      }

      _createClass(RecipeComponent, [{
        key: "onWindowResize",
        value: function onWindowResize(event) {
          this.width = event.target.innerWidth;
          console.log(this.width);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _iterator4 = _createForOfIteratorHelper(this.ingredients),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var item = _step4.value;
              this.ingredientsMap.set(item, false);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(value) {
          var name = value.trim().split(',')[0];
          var status = value.trim().split(',')[1];
          var booleanString;

          if (status == 'false') {
            booleanString = false;
          } else {
            booleanString = true;
          }

          this.ingredientsMap.set(name, booleanString);
          console.log(this.ingredientsMap);
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          var _this15 = this;

          this.notFound = false;
          this.noSearch = false;
          this.loading = true;
          var ingredients = '';

          var _iterator5 = _createForOfIteratorHelper(this.ingredientsMap),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _step5$value = _slicedToArray(_step5.value, 2),
                  key = _step5$value[0],
                  value = _step5$value[1];

              if (value == true) {
                ingredients += key + ',';
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          console.log(ingredients);
          this.recipesService.getRecipes(ingredients).subscribe(function (res) {
            _this15.recipes = res;

            if (_this15.recipes.length == 0) {
              _this15.notFound = true;
            }

            _this15.loading = false;
          });
        }
      }, {
        key: "addWishList",
        value: function addWishList() {
          var ingredients = '';

          var _iterator6 = _createForOfIteratorHelper(this.ingredientsMap),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _step6$value = _slicedToArray(_step6.value, 2),
                  key = _step6$value[0],
                  value = _step6$value[1];

              if (value == true) {
                ingredients += key + ',';
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          this.auth.addLastReasearch(ingredients, this.userId).subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "showSearch",
        value: function showSearch(value) {
          console.log(value);
          this.searchString = value;
        }
      }]);

      return RecipeComponent;
    }();

    RecipeComponent.ɵfac = function RecipeComponent_Factory(t) {
      return new (t || RecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_rescipes_service_service__WEBPACK_IMPORTED_MODULE_1__["RescipesServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    RecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipeComponent,
      selectors: [["app-recipe"]],
      hostBindings: function RecipeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function RecipeComponent_resize_HostBindingHandler($event) {
            return ctx.onWindowResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 3,
      vars: 2,
      consts: [["title", "Search Recipes"], ["class", "myContainer", 4, "ngIf"], ["style", "padding-right: 15px;", 4, "ngIf"], [1, "myContainer"], [1, "currentInventory"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "padding-right", "34px", "justify-content", "space-between", "margin-bottom", "20px"], [1, "ingredients"], [1, "row"], ["width", "300px", "style", "margin-right: 10px;", "placeholder", "Search ...", 3, "getInput", 4, "ngIf"], ["width", "150px", "style", "margin-right: 5px; margin-left: 15px;", "placeholder", "Search ...", 3, "getInput", 4, "ngIf"], [1, "btn", "primary", "add-transaction-btn", 3, "click"], [1, "fa", "fa-cutlery"], [1, "is-not-mobile"], ["fxLayoutGap", "20px", "style", "display: flex; flex-direction: row; flex-wrap: wrap;", 4, "ngIf"], [1, "inventoryForecast"], ["class", "notFound", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "spinner", 4, "ngIf"], ["width", "300px", "placeholder", "Search ...", 2, "margin-right", "10px", 3, "getInput"], ["width", "150px", "placeholder", "Search ...", 2, "margin-right", "5px", "margin-left", "15px", 3, "getInput"], ["fxLayoutGap", "20px", 2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap"], ["class", "foodIcon", 3, "name", "icon", "changeStatus", 4, "ngFor", "ngForOf"], [1, "foodIcon", 3, "name", "icon", "changeStatus"], ["class", "foodIcon1", 3, "width", "name", "icon", "changeStatus", 4, "ngFor", "ngForOf"], [1, "foodIcon1", 3, "width", "name", "icon", "changeStatus"], [1, "notFound"], [3, "label", "calories", "imageSrc", "url", "ingredients"], [1, "spinner"], [2, "padding-right", "15px"], [1, "btn", "primary", "add-transaction-btn", 2, "width", "100%", "margin-right", "30px", 3, "click"], ["class", "foodIcon1", 3, "name", "icon", "changeStatus", 4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], [1, "foodIcon1", 3, "name", "icon", "changeStatus"], [2, "text-align", "center"]],
      template: function RecipeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-container-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipeComponent_div_1_Template, 19, 8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecipeComponent_div_2_Template, 12, 7, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width > 1050);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width <= 1050);
        }
      },
      directives: [_components_container_header_container_header_component__WEBPACK_IMPORTED_MODULE_4__["ContainerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_inputs_search_field_search_field_component__WEBPACK_IMPORTED_MODULE_6__["SearchFieldComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _components_food_icon_food_icon_component__WEBPACK_IMPORTED_MODULE_8__["FoodIconComponent"], _components_recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_9__["RecipeCardComponent"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"]],
      pipes: [_pipes_ingredients_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["IngredientsFilterPipe"]],
      styles: [".myContainer[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-top: 19px;\n  margin-left: 0px;\n  margin-right: 0px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  opacity: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 75vh;\n  padding-bottom: 3vh;\n}\n\n.myContainer1[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-top: 19px;\n  margin-left: 0px;\n  margin-right: 0px;\n  border: 1px solid #ebebeb;\n  border-radius: 4px;\n  opacity: 1;\n  height: 75vh;\n  padding-bottom: 3vh;\n}\n\n.ingredients[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-right: 20px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.bigContainer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-left: 56px;\n  margin-right: 56px;\n  margin-bottom: 60px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0px 0px 4px 4px;\n  opacity: 1;\n  padding-top: 19px;\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n.bigContainer1[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-left: 56px;\n  margin-right: 56px;\n  margin-bottom: 60px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0px 0px 4px 4px;\n  opacity: 1;\n  padding-top: 19px;\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n.currentInventory[_ngcontent-%COMP%] {\n  width: calc((100% - 40px) * 2 / 5);\n  margin-right: 40px;\n  padding-right: 0px !important;\n  overflow-y: scroll;\n}\n\n.currentInventory1[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding-right: 0px !important;\n  overflow-y: scroll;\n}\n\n.inventoryForecast[_ngcontent-%COMP%] {\n  width: calc((100% - 40px) * 3 / 5);\n  position: relative;\n  overflow-y: scroll;\n  padding-right: 1vw;\n}\n\n.inventoryForecast1[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-y: scroll;\n  padding-right: 1vw;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add-transaction-btn[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-left: 5px;\n  display: flex;\n  margin-left: auto;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-transaction-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  width: 9px;\n  margin-right: 5px;\n}\n\n.foodIcon[_ngcontent-%COMP%] {\n  width: calc((100% - 80px) / 4);\n  margin-bottom: 20px;\n}\n\n.foodIcon1[_ngcontent-%COMP%] {\n  width: calc((100% - 40px) / 2);\n  margin-bottom: 20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 8px;\n  background: #0066b2;\n}\n\n.notFound[_ngcontent-%COMP%] {\n  font-size: 1.8vw;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #6b6d6f;\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  transform: translateX(-50%);\n}\n\n.notFound1[_ngcontent-%COMP%] {\n  font-size: 1.8vw;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #6b6d6f;\n  left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQyL3JlY2lwZS9yZWNpcGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZDIvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ01GOztBREhBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ01GOztBRExFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDT0o7O0FESkE7RUFDRSw4QkFyR1U7RUFzR1YsbUJBQUE7QUNPRjs7QURMQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNRRjs7QUROQTtFQUVFLFVBQUE7RUFFQSxZQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDUUY7O0FETkE7RUFDRSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ1NGOztBRFBBO0VBQ0UsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFFQSxTQUFBO0VBRUEsMkJBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZDIvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aWR0aEljb246IGNhbGMoKDEwMCUgLSA4MHB4KSAvIDQpO1xuLm15Q29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLXRvcDogMTlweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDc1dmg7XG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XG59XG5cbi5teUNvbnRhaW5lcjEge1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvcGFjaXR5OiAxO1xuXG4gIGhlaWdodDogNzV2aDtcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcbn1cbi5pbmdyZWRpZW50cyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmlnQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDU2cHg7XG4gIG1hcmdpbi1yaWdodDogNTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZy10b3A6IDE5cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cbi5iaWdDb250YWluZXIxIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDU2cHg7XG4gIG1hcmdpbi1yaWdodDogNTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZy10b3A6IDE5cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cbi5jdXJyZW50SW52ZW50b3J5IHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSA0MHB4KSAqIDIgLyA1KTtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmN1cnJlbnRJbnZlbnRvcnkxIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5pbnZlbnRvcnlGb3JlY2FzdCB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gNDBweCkgKiAzIC8gNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XG59XG4uaW52ZW50b3J5Rm9yZWNhc3QxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcbn1cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmFkZC10cmFuc2FjdGlvbi1idG4ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmZhIHtcbiAgICB3aWR0aDogOXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG4uZm9vZEljb24ge1xuICB3aWR0aDogJHdpZHRoSWNvbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5mb29kSWNvbjEge1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDQwcHgpIC8gMik7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLy8gV2lkdGggb2YgdmVydGljYWwgc2Nyb2xsIGJhclxuICB3aWR0aDogOHB4O1xuICAvLyBIZWlnaHQgb2YgaG9yaXpvbnRhbCBzY3JvbGwgYmFyXG4gIGhlaWdodDogMTBweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMwMDY2YjI7XG59XG4ubm90Rm91bmQge1xuICBmb250LXNpemU6IDEuOHZ3O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2YjZkNmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLm5vdEZvdW5kMSB7XG4gIGZvbnQtc2l6ZTogMS44dnc7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzZiNmQ2ZjtcblxuICBsZWZ0OiA1MCU7XG5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuIiwiLm15Q29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLXRvcDogMTlweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDc1dmg7XG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XG59XG5cbi5teUNvbnRhaW5lcjEge1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDc1dmg7XG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XG59XG5cbi5pbmdyZWRpZW50cyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYmlnQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDU2cHg7XG4gIG1hcmdpbi1yaWdodDogNTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZy10b3A6IDE5cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cblxuLmJpZ0NvbnRhaW5lcjEge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogNTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nLXRvcDogMTlweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4uY3VycmVudEludmVudG9yeSB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gNDBweCkgKiAyIC8gNSk7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmN1cnJlbnRJbnZlbnRvcnkxIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmludmVudG9yeUZvcmVjYXN0IHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSA0MHB4KSAqIDMgLyA1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcbn1cblxuLmludmVudG9yeUZvcmVjYXN0MSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XG59XG5cbi5zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmFkZC10cmFuc2FjdGlvbi1idG4ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGQtdHJhbnNhY3Rpb24tYnRuIC5mYSB7XG4gIHdpZHRoOiA5cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZm9vZEljb24ge1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDgwcHgpIC8gNCk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb29kSWNvbjEge1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDQwcHgpIC8gMik7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMwMDY2YjI7XG59XG5cbi5ub3RGb3VuZCB7XG4gIGZvbnQtc2l6ZTogMS44dnc7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzZiNmQ2ZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5ub3RGb3VuZDEge1xuICBmb250LXNpemU6IDEuOHZ3O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2YjZkNmY7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipe',
          templateUrl: './recipe.component.html',
          styleUrls: ['./recipe.component.scss'],
          host: {
            '(window:resize)': 'onWindowResize($event)'
          }
        }]
      }], function () {
        return [{
          type: _services_rescipes_service_service__WEBPACK_IMPORTED_MODULE_1__["RescipesServiceService"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login-page/confirm-user/confirm-user.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/login-page/confirm-user/confirm-user.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ConfirmUserComponent */

  /***/
  function srcAppPagesLoginPageConfirmUserConfirmUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmUserComponent", function () {
      return ConfirmUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/loading-spinner/loading-spinner.component */
    "./src/app/components/loading-spinner/loading-spinner.component.ts");

    function ConfirmUserComponent_div_0_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ConfirmUserComponent_div_0_form_1_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.onSubmit(_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["login"];
    };

    function ConfirmUserComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Go to Login Page? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.resultMessage, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function ConfirmUserComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmUserComponent_div_0_form_1_Template, 5, 0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmUserComponent_div_0_div_2_Template, 5, 3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && ctx_r0.success);
      }
    }

    function ConfirmUserComponent_app_loading_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner", 12);
      }
    }

    var ConfirmUserComponent = /*#__PURE__*/function () {
      function ConfirmUserComponent(auth, route) {
        var _this16 = this;

        _classCallCheck(this, ConfirmUserComponent);

        this.auth = auth;
        this.route = route;
        this.loading = false;
        this.success = false;
        this.resultMessage = ';';
        this.token = this.route.snapshot.paramMap.get('token');
        console.log(this.token);
        this.auth.checkConfimationToken(this.token).subscribe(function (res) {}, function (err) {
          _this16.resultMessage = 'Invalid Token';
          _this16.success = true;
        });
      }

      _createClass(ConfirmUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this17 = this;

          this.loading = true;
          this.auth.confirmUser(this.token).subscribe(function (res) {
            _this17.success = true;
            _this17.resultMessage = 'Your Account is confirmed';
            _this17.loading = false;
          });
          this.loading = false;
        }
      }]);

      return ConfirmUserComponent;
    }();

    ConfirmUserComponent.ɵfac = function ConfirmUserComponent_Factory(t) {
      return new (t || ConfirmUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ConfirmUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmUserComponent,
      selectors: [["app-confirm-user"]],
      decls: 2,
      vars: 2,
      consts: [["class", "login-content", 4, "ngIf"], ["class", "loadingSpinner", 4, "ngIf"], [1, "login-content"], ["class", "form", "type", "form", 3, "submit", 4, "ngIf"], ["class", "register", 4, "ngIf"], ["type", "form", 1, "form", 3, "submit"], ["registerForm", "ngForm"], ["type", "form", 1, "d-flex", "justify-content-center"], [1, "btn-group"], ["type", "submit", "value", "Reset Password", 1, "btn", "primary"], [1, "register"], [2, "font-size", "14px", "font-weight", "bold", 3, "routerLink"], [1, "loadingSpinner"]],
      template: function ConfirmUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmUserComponent_div_0_Template, 3, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmUserComponent_app_loading_spinner_1_Template, 1, 0, "app-loading-spinner", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"]],
      styles: [".loginForm[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.login-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 400px;\n  margin: 0 auto;\n  padding-top: 35px;\n  padding-left: 30px;\n  padding-right: 30px;\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]   .error-tips[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 18px;\n  color: #fff;\n}\n\napp-select[_ngcontent-%COMP%]  .select-trigger {\n  width: 100%;\n  border: #0066b2;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: 20px;\n  margin-bottom: 30px;\n  width: 170px;\n}\n\n.register[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 60%;\n  cursor: pointer;\n}\n\n.loadingSpinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2NvbmZpcm0tdXNlci9jb25maXJtLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvY29uZmlybS11c2VyL2NvbmZpcm0tdXNlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL3N0eWxlcy9pbmNsdWRlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsV0VkSTtBRGlCUjs7QURFRTtFQUNFLFdBQUE7RUFDQSxlRW5CVztBRG9CZjs7QURHQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9jb25maXJtLXVzZXIvY29uZmlybS11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImluY2x1ZGVzL3ZhcmlhYmxlc1wiO1xuLmxvZ2luRm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmVycm9yLXRpcHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cbn1cblxuYXBwLXNlbGVjdDo6bmctZGVlcCB7XG4gIC5zZWxlY3QtdHJpZ2dlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAkYmx1ZS1wcmltYXJ5O1xuICB9XG59XG5cbi5idG4tZ3JvdXAge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuLnJlZ2lzdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiA2MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2FkaW5nU3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iLCIubG9naW5Gb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxvZ2luLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtIC5lcnJvci10aXBzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5hcHAtc2VsZWN0OjpuZy1kZWVwIC5zZWxlY3QtdHJpZ2dlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6ICMwMDY2YjI7XG59XG5cbi5idG4tZ3JvdXAge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4ucmVnaXN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDYwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGluZ1NwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSIsIi8vIGZvbnRzXG4kbWFpbi1mb250OiBBcmlhbDtcbiRhbHQtZm9udDogQXJpYWw7XG5cbi8vIHNpemVzXG4kY29udGVudC13aWR0aDogMTM2NnB4O1xuJHBhZ2UtaGVhZGVyLWhlaWdodDogNjBweDtcbiRuYXZpZ2F0aW9uLWhlaWdodDogNTBweDtcblxuLy8gY29sb3JzXG4kdGV4dC1jb2xvcjogIzAwMDtcbiRiZy1jb2xvcjogI2Y1ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRjb250ZW50LWJveC1iZzogJHdoaXRlO1xuJGJsdWUtcHJpbWFyeTogIzAwNjZiMjtcbiRibHVlLWFsdDogIzAwOWRkOTtcbiRibHVlLXRlcm5hcnk6ICNmMmZhZmQ7XG4kZ3JheS1wcmltYXJ5OiAjOGM4ZjkzO1xuJGdyYXktbGlnaHQ6ICNkYmRjZGQ7XG4kYWN0aXZlLWxpbmstY29sb3I6ICMwMDA7XG4kbGluay1jb2xvcjogIzZiNmQ2ZjtcbiRub3RpZmljYXRpb24tY29sb3I6ICNlMjE4MzY7XG5cbiR1c2VyLWF2YXRhci1iZy1jb2xvcjogIzAwYjJiZDtcblxuLy8gc2lkZWJhclxuJG92ZXJsYXktY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiRzaWRlYmFyLXdpZHRoOiAzNjBweDtcblxuJG1vYmlsZS1icjogNzY4cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirm-user',
          templateUrl: './confirm-user.component.html',
          styleUrls: ['./confirm-user.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login-page/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/login-page/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppPagesLoginPageForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _components_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../components/inputs/simple-input/simple-input.component */
    "./src/app/components/inputs/simple-input/simple-input.component.ts");
    /* harmony import */


    var _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/error-message/error-message.component */
    "./src/app/components/error-message/error-message.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/loading-spinner/loading-spinner.component */
    "./src/app/components/loading-spinner/loading-spinner.component.ts");

    function ForgotPasswordComponent_div_0_form_1_app_error_message_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error-message", 13);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r6.errorMessage);
      }
    }

    function ForgotPasswordComponent_div_0_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_div_0_form_1_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onSubmit(_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-simple-input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function ForgotPasswordComponent_div_0_form_1_Template_app_simple_input_getInput_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.email = $event;
        })("getInputStatus", function ForgotPasswordComponent_div_0_form_1_Template_app_simple_input_getInputStatus_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.emailStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgotPasswordComponent_div_0_form_1_app_error_message_5_Template, 1, 1, "app-error-message", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.emailStatus);
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    function ForgotPasswordComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Go to Login! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function ForgotPasswordComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is sent to You ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function ForgotPasswordComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_div_0_form_1_Template, 8, 2, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_div_0_div_2_Template, 2, 2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotPasswordComponent_div_0_div_3_Template, 2, 2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && !ctx_r0.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && ctx_r0.success);
      }
    }

    function ForgotPasswordComponent_app_loading_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner", 15);
      }
    }

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(auth) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.auth = auth;
        this.loading = false;
        this.error = false;
        this.errorMessage = '';
        this.emailStatus = true;
        this.resultMessage = '';
        this.success = false;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this18 = this;

          this.error = false;
          this.loading = true;
          this.auth.sendResetEmail(this.email).subscribe(function (res) {
            console.log(res);
            _this18.resultMessage = 'An email is sent to you ';
            _this18.success = true;
            _this18.loading = false;
          }, function (err) {
            _this18.error = true;
            _this18.errorMessage = err.error.message;
            _this18.loading = false;
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 2,
      vars: 2,
      consts: [["class", "login-content", 4, "ngIf"], ["class", "loadingSpinner", 4, "ngIf"], [1, "login-content"], ["class", "form", "type", "form", 3, "submit", 4, "ngIf"], ["class", "register", 3, "routerLink", 4, "ngIf"], ["type", "form", 1, "form", 3, "submit"], ["registerForm", "ngForm"], ["type", "form", 1, "d-flex", "justify-content-center"], ["label", "Email", "type", "email", "placeholder", "Email", "icon", "email", "required", "true", "name", "email", 3, "getInput", "getInputStatus"], [1, "d-flex", "justify-content-center"], [3, "message", 4, "ngIf"], [1, "btn-group"], ["type", "submit", "value", "Send Email", 1, "btn", "primary", 3, "disabled"], [3, "message"], [1, "register", 3, "routerLink"], [1, "loadingSpinner"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForgotPasswordComponent_div_0_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_app_loading_spinner_1_Template, 1, 0, "app-loading-spinner", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _components_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_5__["SimpleInputComponent"], _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]],
      styles: [".loginForm[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.login-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 400px;\n  margin: 0 auto;\n  padding-top: 35px;\n  padding-left: 30px;\n  padding-right: 30px;\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]   .error-tips[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 18px;\n  color: #fff;\n}\n\napp-select[_ngcontent-%COMP%]  .select-trigger {\n  width: 100%;\n  border: #0066b2;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: 20px;\n  margin-bottom: 30px;\n  width: 170px;\n}\n\n.register[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 60%;\n  cursor: pointer;\n}\n\n.loadingSpinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL3N0eWxlcy9pbmNsdWRlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsV0VkSTtBRGlCUjs7QURFRTtFQUNFLFdBQUE7RUFDQSxlRW5CVztBRG9CZjs7QURHQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImluY2x1ZGVzL3ZhcmlhYmxlc1wiO1xuLmxvZ2luRm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmVycm9yLXRpcHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cbn1cblxuYXBwLXNlbGVjdDo6bmctZGVlcCB7XG4gIC5zZWxlY3QtdHJpZ2dlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAkYmx1ZS1wcmltYXJ5O1xuICB9XG59XG5cbi5idG4tZ3JvdXAge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuLnJlZ2lzdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiA2MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2FkaW5nU3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iLCIubG9naW5Gb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxvZ2luLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtIC5lcnJvci10aXBzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5hcHAtc2VsZWN0OjpuZy1kZWVwIC5zZWxlY3QtdHJpZ2dlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6ICMwMDY2YjI7XG59XG5cbi5idG4tZ3JvdXAge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4ucmVnaXN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDYwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGluZ1NwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSIsIi8vIGZvbnRzXG4kbWFpbi1mb250OiBBcmlhbDtcbiRhbHQtZm9udDogQXJpYWw7XG5cbi8vIHNpemVzXG4kY29udGVudC13aWR0aDogMTM2NnB4O1xuJHBhZ2UtaGVhZGVyLWhlaWdodDogNjBweDtcbiRuYXZpZ2F0aW9uLWhlaWdodDogNTBweDtcblxuLy8gY29sb3JzXG4kdGV4dC1jb2xvcjogIzAwMDtcbiRiZy1jb2xvcjogI2Y1ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRjb250ZW50LWJveC1iZzogJHdoaXRlO1xuJGJsdWUtcHJpbWFyeTogIzAwNjZiMjtcbiRibHVlLWFsdDogIzAwOWRkOTtcbiRibHVlLXRlcm5hcnk6ICNmMmZhZmQ7XG4kZ3JheS1wcmltYXJ5OiAjOGM4ZjkzO1xuJGdyYXktbGlnaHQ6ICNkYmRjZGQ7XG4kYWN0aXZlLWxpbmstY29sb3I6ICMwMDA7XG4kbGluay1jb2xvcjogIzZiNmQ2ZjtcbiRub3RpZmljYXRpb24tY29sb3I6ICNlMjE4MzY7XG5cbiR1c2VyLWF2YXRhci1iZy1jb2xvcjogIzAwYjJiZDtcblxuLy8gc2lkZWJhclxuJG92ZXJsYXktY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiRzaWRlYmFyLXdpZHRoOiAzNjBweDtcblxuJG1vYmlsZS1icjogNzY4cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login-page/register-page/register-page.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/login-page/register-page/register-page.component.ts ***!
    \***************************************************************************/

  /*! exports provided: RegisterPageComponent */

  /***/
  function srcAppPagesLoginPageRegisterPageRegisterPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function () {
      return RegisterPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _components_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/inputs/simple-input/simple-input.component */
    "./src/app/components/inputs/simple-input/simple-input.component.ts");
    /* harmony import */


    var _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/error-message/error-message.component */
    "./src/app/components/error-message/error-message.component.ts");
    /* harmony import */


    var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/loading-spinner/loading-spinner.component */
    "./src/app/components/loading-spinner/loading-spinner.component.ts");

    function RegisterPageComponent_div_0_form_1_app_error_message_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error-message", 17);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r6.errorMessage);
      }
    }

    function RegisterPageComponent_div_0_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterPageComponent_div_0_form_1_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onSubmit(_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-simple-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function RegisterPageComponent_div_0_form_1_Template_app_simple_input_getInput_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.userName = $event;
        })("getInputStatus", function RegisterPageComponent_div_0_form_1_Template_app_simple_input_getInputStatus_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.userNameStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-simple-input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function RegisterPageComponent_div_0_form_1_Template_app_simple_input_getInput_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.email = $event;
        })("getInputStatus", function RegisterPageComponent_div_0_form_1_Template_app_simple_input_getInputStatus_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.emailStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-simple-input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function RegisterPageComponent_div_0_form_1_Template_app_simple_input_getInput_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.password1 = $event;
        })("getInputStatus", function RegisterPageComponent_div_0_form_1_Template_app_simple_input_getInputStatus_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.password1Status = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-simple-input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function RegisterPageComponent_div_0_form_1_Template_app_simple_input_getInput_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.password2 = $event;
        })("getInputStatus", function RegisterPageComponent_div_0_form_1_Template_app_simple_input_getInputStatus_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.password2Status = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterPageComponent_div_0_form_1_app_error_message_8_Template, 1, 1, "app-error-message", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.emailStatus || ctx_r2.password1Status || ctx_r2.password2Status || ctx_r2.userNameStatus || ctx_r2.passwordsCheck());
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    function RegisterPageComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You already have an account? Go to Login! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function RegisterPageComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.resultMessage, " ");
      }
    }

    function RegisterPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_div_0_form_1_Template, 11, 2, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterPageComponent_div_0_div_2_Template, 2, 2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterPageComponent_div_0_div_3_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && !ctx_r0.success);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && ctx_r0.success);
      }
    }

    function RegisterPageComponent_app_loading_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner", 20);
      }
    }

    var RegisterPageComponent = /*#__PURE__*/function () {
      function RegisterPageComponent(authService, router) {
        _classCallCheck(this, RegisterPageComponent);

        this.authService = authService;
        this.router = router;
        this.errorMessage = '';
        this.loading = false;
        this.error = false;
        this.emailStatus = true;
        this.password1Status = true;
        this.password2Status = true;
        this.userNameStatus = true;
        this.success = false;
        this.resultMessage = 'A Confirmation Email is Sent (You may sometimes find it in the spam) ';
      }

      _createClass(RegisterPageComponent, [{
        key: "passwordsCheck",
        value: function passwordsCheck() {
          if (this.password1 == this.password2) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this19 = this;

          this.error = false;
          this.loading = true;
          var user = {
            email: this.email,
            userName: this.userName,
            password: this.password1
          };
          this.authService.register(user).subscribe(function (res) {
            console.log(res);

            _this19.authService.createConfirmToken(_this19.email).subscribe(function (res) {
              _this19.loading = false;
              _this19.success = true;
            });
          }, function (err) {
            console.log(err);
            _this19.error = true;
            _this19.errorMessage = err.error.message;
            _this19.loading = false;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterPageComponent;
    }();

    RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) {
      return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterPageComponent,
      selectors: [["app-register-page"]],
      decls: 2,
      vars: 2,
      consts: [["class", "login-content", 4, "ngIf"], ["class", "loadingSpinner", 4, "ngIf"], [1, "login-content"], ["class", "form", "type", "form", 3, "submit", 4, "ngIf"], ["class", "register", 3, "routerLink", 4, "ngIf"], ["class", "register", 4, "ngIf"], ["type", "form", 1, "form", 3, "submit"], ["registerForm", "ngForm"], ["type", "form", 1, "d-flex", "justify-content-center"], ["label", "Username", "type", "text", "placeholder", "Username", "icon", "person", "required", "true", "name", "userName", 3, "getInput", "getInputStatus"], ["label", "Email", "type", "email", "placeholder", "Email", "icon", "email", "required", "true", "name", "email", 3, "getInput", "getInputStatus"], ["label", "Password1", "type", "password", "placeholder", "Password1", "icon", "Password", "required", "true", "name", "password1", 3, "getInput", "getInputStatus"], ["label", "Password2", "type", "password", "placeholder", "Password2", "icon", "Password", "required", "true", "name", "password2", 3, "getInput", "getInputStatus"], [1, "d-flex", "justify-content-center"], [3, "message", 4, "ngIf"], [1, "btn-group"], ["type", "submit", "value", "Register", 1, "btn", "primary", 3, "disabled"], [3, "message"], [1, "register", 3, "routerLink"], [1, "register"], [1, "loadingSpinner"]],
      template: function RegisterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegisterPageComponent_div_0_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPageComponent_app_loading_spinner_1_Template, 1, 0, "app-loading-spinner", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _components_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_6__["SimpleInputComponent"], _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]],
      styles: [".loginForm[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.login-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 400px;\n  margin: 0 auto;\n  padding-top: 35px;\n  padding-left: 30px;\n  padding-right: 30px;\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]   .error-tips[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 18px;\n  color: #fff;\n}\n\napp-select[_ngcontent-%COMP%]  .select-trigger {\n  width: 100%;\n  border: #0066b2;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: 20px;\n  margin-bottom: 30px;\n  width: 170px;\n}\n\n.register[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 60%;\n  cursor: pointer;\n}\n\n.loadingSpinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9tb2hhbWVkL0Rlc2t0b3AvY3VzdC1mb29kL2FuZ3VsYXItc3JjL3NyYy9zdHlsZXMvaW5jbHVkZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLFdFZEk7QURpQlI7O0FERUU7RUFDRSxXQUFBO0VBQ0EsZUVuQlc7QURvQmY7O0FER0E7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImluY2x1ZGVzL3ZhcmlhYmxlc1wiO1xuLmxvZ2luRm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmVycm9yLXRpcHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cbn1cblxuYXBwLXNlbGVjdDo6bmctZGVlcCB7XG4gIC5zZWxlY3QtdHJpZ2dlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAkYmx1ZS1wcmltYXJ5O1xuICB9XG59XG5cbi5idG4tZ3JvdXAge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuLnJlZ2lzdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiA2MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2FkaW5nU3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iLCIubG9naW5Gb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxvZ2luLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtIC5lcnJvci10aXBzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5hcHAtc2VsZWN0OjpuZy1kZWVwIC5zZWxlY3QtdHJpZ2dlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6ICMwMDY2YjI7XG59XG5cbi5idG4tZ3JvdXAge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4ucmVnaXN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDYwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGluZ1NwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSIsIi8vIGZvbnRzXG4kbWFpbi1mb250OiBBcmlhbDtcbiRhbHQtZm9udDogQXJpYWw7XG5cbi8vIHNpemVzXG4kY29udGVudC13aWR0aDogMTM2NnB4O1xuJHBhZ2UtaGVhZGVyLWhlaWdodDogNjBweDtcbiRuYXZpZ2F0aW9uLWhlaWdodDogNTBweDtcblxuLy8gY29sb3JzXG4kdGV4dC1jb2xvcjogIzAwMDtcbiRiZy1jb2xvcjogI2Y1ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRjb250ZW50LWJveC1iZzogJHdoaXRlO1xuJGJsdWUtcHJpbWFyeTogIzAwNjZiMjtcbiRibHVlLWFsdDogIzAwOWRkOTtcbiRibHVlLXRlcm5hcnk6ICNmMmZhZmQ7XG4kZ3JheS1wcmltYXJ5OiAjOGM4ZjkzO1xuJGdyYXktbGlnaHQ6ICNkYmRjZGQ7XG4kYWN0aXZlLWxpbmstY29sb3I6ICMwMDA7XG4kbGluay1jb2xvcjogIzZiNmQ2ZjtcbiRub3RpZmljYXRpb24tY29sb3I6ICNlMjE4MzY7XG5cbiR1c2VyLWF2YXRhci1iZy1jb2xvcjogIzAwYjJiZDtcblxuLy8gc2lkZWJhclxuJG92ZXJsYXktY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiRzaWRlYmFyLXdpZHRoOiAzNjBweDtcblxuJG1vYmlsZS1icjogNzY4cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register-page',
          templateUrl: './register-page.component.html',
          styleUrls: ['./register-page.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login-page/reset-password/reset-password.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/login-page/reset-password/reset-password.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppPagesLoginPageResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _components_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/inputs/simple-input/simple-input.component */
    "./src/app/components/inputs/simple-input/simple-input.component.ts");
    /* harmony import */


    var _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/error-message/error-message.component */
    "./src/app/components/error-message/error-message.component.ts");
    /* harmony import */


    var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/loading-spinner/loading-spinner.component */
    "./src/app/components/loading-spinner/loading-spinner.component.ts");

    function ResetPasswordComponent_div_0_form_1_app_error_message_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error-message", 15);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r6.errorMessage);
      }
    }

    function ResetPasswordComponent_div_0_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ResetPasswordComponent_div_0_form_1_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onSubmit(_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-simple-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function ResetPasswordComponent_div_0_form_1_Template_app_simple_input_getInput_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.password1 = $event;
        })("getInputStatus", function ResetPasswordComponent_div_0_form_1_Template_app_simple_input_getInputStatus_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.password1Status = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-simple-input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function ResetPasswordComponent_div_0_form_1_Template_app_simple_input_getInput_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.password2 = $event;
        })("getInputStatus", function ResetPasswordComponent_div_0_form_1_Template_app_simple_input_getInputStatus_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.password2Status = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResetPasswordComponent_div_0_form_1_app_error_message_6_Template, 1, 1, "app-error-message", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.password1Status || ctx_r2.password2Status || ctx_r2.passwordsCheck());
      }
    }

    var _c0 = function _c0() {
      return ["/login"];
    };

    function ResetPasswordComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Go to Login! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function ResetPasswordComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.resultMessage, " ");
      }
    }

    function ResetPasswordComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_div_0_form_1_Template, 9, 2, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_div_0_div_2_Template, 2, 2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResetPasswordComponent_div_0_div_3_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.failure);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && !ctx_r0.failure);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && ctx_r0.failure);
      }
    }

    function ResetPasswordComponent_app_loading_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner", 18);
      }
    }

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(router, auth, route) {
        var _this20 = this;

        _classCallCheck(this, ResetPasswordComponent);

        this.router = router;
        this.auth = auth;
        this.route = route;
        this.password1 = '';
        this.password2 = '';
        this.password1Status = false;
        this.password2Status = false;
        this.error = false;
        this.errorMessage = '';
        this.loading = false;
        this.failure = false;
        this.resultMessage = 'Token Not Found';
        this.token = this.route.snapshot.paramMap.get('token');
        this.auth.checkToken(this.token).subscribe(function (res) {
          console.log(res);
        }, function (err) {
          _this20.failure = true;
        });
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "passwordsCheck",
        value: function passwordsCheck() {
          if (this.password1.length == 0) return true;

          if (this.password1 == this.password2) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this21 = this;

          this.auth.resetPassword(this.password1, this.token).subscribe(function (res) {
            {
              _this21.failure = true;
              _this21.resultMessage = 'Password Updated Successfully';
            }
          });
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 2,
      vars: 2,
      consts: [["class", "login-content", 4, "ngIf"], ["class", "loadingSpinner", 4, "ngIf"], [1, "login-content"], ["class", "form", "type", "form", 3, "submit", 4, "ngIf"], ["class", "register", 3, "routerLink", 4, "ngIf"], ["class", "register", 4, "ngIf"], ["type", "form", 1, "form", 3, "submit"], ["registerForm", "ngForm"], ["type", "form", 1, "d-flex", "justify-content-center"], ["label", "Password1", "type", "password", "placeholder", "Password1", "icon", "Password", "required", "true", "name", "password1", 3, "getInput", "getInputStatus"], ["label", "Password2", "type", "password", "placeholder", "Password2", "icon", "Password", "required", "true", "name", "password2", 3, "getInput", "getInputStatus"], [1, "d-flex", "justify-content-center"], [3, "message", 4, "ngIf"], [1, "btn-group"], ["type", "submit", "value", "Reset Password", 1, "btn", "primary", 3, "disabled"], [3, "message"], [1, "register", 3, "routerLink"], [1, "register"], [1, "loadingSpinner"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResetPasswordComponent_div_0_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_app_loading_spinner_1_Template, 1, 0, "app-loading-spinner", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _components_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_6__["SimpleInputComponent"], _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]],
      styles: [".loginForm[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.login-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.form[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 400px;\n  margin: 0 auto;\n  padding-top: 35px;\n  padding-left: 30px;\n  padding-right: 30px;\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%]   .error-tips[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 18px;\n  color: #fff;\n}\n\napp-select[_ngcontent-%COMP%]  .select-trigger {\n  width: 100%;\n  border: #0066b2;\n}\n\n.btn-group[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: 20px;\n  margin-bottom: 30px;\n  width: 170px;\n}\n\n.register[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 60%;\n  cursor: pointer;\n}\n\n.loadingSpinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9oYW1lZC9EZXNrdG9wL2N1c3QtZm9vZC9hbmd1bGFyLXNyYy9zcmMvc3R5bGVzL2luY2x1ZGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxXRWRJO0FEaUJSOztBREVFO0VBQ0UsV0FBQTtFQUNBLGVFbkJXO0FEb0JmOztBREdBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImluY2x1ZGVzL3ZhcmlhYmxlc1wiO1xuLmxvZ2luRm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmVycm9yLXRpcHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cbn1cblxuYXBwLXNlbGVjdDo6bmctZGVlcCB7XG4gIC5zZWxlY3QtdHJpZ2dlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAkYmx1ZS1wcmltYXJ5O1xuICB9XG59XG5cbi5idG4tZ3JvdXAge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuLnJlZ2lzdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiA2MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2FkaW5nU3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iLCIubG9naW5Gb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxvZ2luLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtIC5lcnJvci10aXBzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5hcHAtc2VsZWN0OjpuZy1kZWVwIC5zZWxlY3QtdHJpZ2dlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6ICMwMDY2YjI7XG59XG5cbi5idG4tZ3JvdXAge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4ucmVnaXN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDYwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGluZ1NwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSIsIi8vIGZvbnRzXG4kbWFpbi1mb250OiBBcmlhbDtcbiRhbHQtZm9udDogQXJpYWw7XG5cbi8vIHNpemVzXG4kY29udGVudC13aWR0aDogMTM2NnB4O1xuJHBhZ2UtaGVhZGVyLWhlaWdodDogNjBweDtcbiRuYXZpZ2F0aW9uLWhlaWdodDogNTBweDtcblxuLy8gY29sb3JzXG4kdGV4dC1jb2xvcjogIzAwMDtcbiRiZy1jb2xvcjogI2Y1ZjZmNztcbiR3aGl0ZTogI2ZmZjtcbiRjb250ZW50LWJveC1iZzogJHdoaXRlO1xuJGJsdWUtcHJpbWFyeTogIzAwNjZiMjtcbiRibHVlLWFsdDogIzAwOWRkOTtcbiRibHVlLXRlcm5hcnk6ICNmMmZhZmQ7XG4kZ3JheS1wcmltYXJ5OiAjOGM4ZjkzO1xuJGdyYXktbGlnaHQ6ICNkYmRjZGQ7XG4kYWN0aXZlLWxpbmstY29sb3I6ICMwMDA7XG4kbGluay1jb2xvcjogIzZiNmQ2ZjtcbiRub3RpZmljYXRpb24tY29sb3I6ICNlMjE4MzY7XG5cbiR1c2VyLWF2YXRhci1iZy1jb2xvcjogIzAwYjJiZDtcblxuLy8gc2lkZWJhclxuJG92ZXJsYXktY29sb3I6IHJnYmEoMCwwLDAsLjI1KTtcbiRzaWRlYmFyLXdpZHRoOiAzNjBweDtcblxuJG1vYmlsZS1icjogNzY4cHg7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-password',
          templateUrl: './reset-password.component.html',
          styleUrls: ['./reset-password.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/refresh/refresh.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/refresh/refresh.component.ts ***!
    \****************************************************/

  /*! exports provided: RefreshComponent */

  /***/
  function srcAppPagesRefreshRefreshComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefreshComponent", function () {
      return RefreshComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RefreshComponent = /*#__PURE__*/function () {
      function RefreshComponent() {
        _classCallCheck(this, RefreshComponent);
      }

      _createClass(RefreshComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RefreshComponent;
    }();

    RefreshComponent.ɵfac = function RefreshComponent_Factory(t) {
      return new (t || RefreshComponent)();
    };

    RefreshComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RefreshComponent,
      selectors: [["app-refresh"]],
      decls: 2,
      vars: 0,
      template: function RefreshComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "refresh works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZnJlc2gvcmVmcmVzaC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefreshComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-refresh',
          templateUrl: './refresh.component.html',
          styleUrls: ['./refresh.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/ingredients-filter.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/pipes/ingredients-filter.pipe.ts ***!
    \**************************************************/

  /*! exports provided: IngredientsFilterPipe */

  /***/
  function srcAppPipesIngredientsFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngredientsFilterPipe", function () {
      return IngredientsFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IngredientsFilterPipe = /*#__PURE__*/function () {
      function IngredientsFilterPipe() {
        _classCallCheck(this, IngredientsFilterPipe);
      }

      _createClass(IngredientsFilterPipe, [{
        key: "transform",
        value: function transform(value, searchString) {
          if (!searchString) {
            console.log('no search');
            return value;
          }

          return value.filter(function (it) {
            var ingredient = it.includes(searchString);
            return ingredient;
          });
        }
      }]);

      return IngredientsFilterPipe;
    }();

    IngredientsFilterPipe.ɵfac = function IngredientsFilterPipe_Factory(t) {
      return new (t || IngredientsFilterPipe)();
    };

    IngredientsFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "ingredientsFilter",
      type: IngredientsFilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientsFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'ingredientsFilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/initials.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/initials.pipe.ts ***!
    \****************************************/

  /*! exports provided: InitialsPipe */

  /***/
  function srcAppPipesInitialsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitialsPipe", function () {
      return InitialsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InitialsPipe = /*#__PURE__*/function () {
      function InitialsPipe() {
        _classCallCheck(this, InitialsPipe);
      }

      _createClass(InitialsPipe, [{
        key: "transform",

        /**
         * Transform a fullName string to initials only
         * @param value String value
         */
        value: function transform(value) {
          if (!value) {
            return '';
          }

          return value.split(' ').map(function (d) {
            return d[0].toUpperCase();
          }).join('');
        }
      }]);

      return InitialsPipe;
    }();

    InitialsPipe.ɵfac = function InitialsPipe_Factory(t) {
      return new (t || InitialsPipe)();
    };

    InitialsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "initials",
      type: InitialsPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitialsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'initials'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _initials_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./initials.pipe */
    "./src/app/pipes/initials.pipe.ts");
    /* harmony import */


    var _ingredients_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ingredients-filter.pipe */
    "./src/app/pipes/ingredients-filter.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_initials_pipe__WEBPACK_IMPORTED_MODULE_2__["InitialsPipe"], _ingredients_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["IngredientsFilterPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_initials_pipe__WEBPACK_IMPORTED_MODULE_2__["InitialsPipe"], _ingredients_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["IngredientsFilterPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_initials_pipe__WEBPACK_IMPORTED_MODULE_2__["InitialsPipe"], _ingredients_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["IngredientsFilterPipe"]],
          exports: [_initials_pipe__WEBPACK_IMPORTED_MODULE_2__["InitialsPipe"], _ingredients_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["IngredientsFilterPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var _src_environments_env = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api,
        HOST_URL = _src_environments_env.HOST_URL,
        BASE_PATH = _src_environments_env.BASE_PATH;
    /**
     * This is an abstract api service
     * Extend this for defining a specific api service (see: regions.service)
     */

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      }
      /**
       * Returns an Observable for the HTTP GET request for the JSON resource.
       * @return The Observable for the HTTP request.
       */


      _createClass(ApiService, [{
        key: "fetch",
        value: function fetch(path, options) {
          return this.http.get("".concat(HOST_URL).concat(BASE_PATH).concat(path), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
        }
        /**
         * Returns an Observable for the HTTP POST request for the JSON resource.
         * @return The Observable for the HTTP request.
         */

      }, {
        key: "post",
        value: function post(path, options) {
          return this.http.post("".concat(HOST_URL).concat(BASE_PATH).concat(path), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
        }
        /**
         * Handle HTTP error
         */

      }, {
        key: "handleError",
        value: function handleError(error) {
          // In a real world app, we might use a remote logging infrastructure
          // We'd also dig deeper into the error to get a better message
          var errMsg = error.message ? error.message : error.status ? "".concat(error.status, " - ").concat(error.statusText) : 'Server error';
          console.error(errMsg); // log to console instead

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");

    var localUser = function localUser() {
      return JSON.parse(localStorage.getItem('currentUser') || 'null');
    };

    var AuthService = /*#__PURE__*/function (_api_service__WEBPACK) {
      _inherits(AuthService, _api_service__WEBPACK);

      var _super2 = _createSuper(AuthService);

      function AuthService() {
        var _this22;

        _classCallCheck(this, AuthService);

        _this22 = _super2.apply(this, arguments); // internal use only - user, as a behaviorSubject to be able to get currentUser

        _this22.user$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](localUser()); // user data available publicly

        _this22.user = _this22.user$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (d) {
          return d !== null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () {
          return _this22.fetch('/users/me');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (u) {
          return Object.assign(Object.assign({}, u), {
            isAdmin: u.roles.indexOf('admin') > -1
          });
        }));
        return _this22;
      }
      /**
       * Authenticate user
       * @param username Username for user to authenticate
       * @param password Password for user to authenticate
       */


      _createClass(AuthService, [{
        key: "login",
        value: function login(username, password) {
          var _this23 = this;

          return this.post('/users/authenticate', {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful
            if (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this23.user$.next(user);
            }

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.user$.next(null);
        }
      }, {
        key: "currentUser",
        get: function get() {
          return this.user$.getValue();
        }
      }]);

      return AuthService;
    }(_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]);

    AuthService.ɵfac = function AuthService_Factory(t) {
      return ɵAuthService_BaseFactory(t || AuthService);
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });

    var ɵAuthService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AuthService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.localHost = 'api/user/';
      }

      _createClass(AuthenticationService, [{
        key: "register",
        value: function register(user) {
          return this.http.post(this.localHost, user);
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.http.post(this.localHost + 'login', user);
        }
      }, {
        key: "getData",
        value: function getData(id) {
          return this.http.get(this.localHost + id);
        }
      }, {
        key: "sendResetEmail",
        value: function sendResetEmail(email) {
          return this.http.post(this.localHost + 'sendEmail', {
            email: email
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(password, token) {
          return this.http.post(this.localHost + 'resetPassword', {
            password: password,
            token: token
          });
        }
      }, {
        key: "checkToken",
        value: function checkToken(token) {
          return this.http.post(this.localHost + 'checkToken', {
            token: token
          });
        }
      }, {
        key: "addLastReasearch",
        value: function addLastReasearch(ch, userId) {
          return this.http.post(this.localHost + 'addToSearchList/' + userId, {
            ingredients: ch
          });
        }
      }, {
        key: "createConfirmToken",
        value: function createConfirmToken(email) {
          return this.http.post(this.localHost + 'confirmtoken', {
            email: email
          });
        }
      }, {
        key: "checkConfimationToken",
        value: function checkConfimationToken(token) {
          return this.http.post(this.localHost + 'checkConfimationToken', {
            token: token
          });
        }
      }, {
        key: "confirmUser",
        value: function confirmUser(token) {
          return this.http.post(this.localHost + 'confirmUser', {
            token: token
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: ".concat(error.error.message);
          } else {
            if (error.status === 401) {
              errorMessage = "Password or Email incorrect ";
            } else {
              errorMessage = 'Internal error ';
            }
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }, {
        key: "handleError3",
        value: function handleError3() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Internal Error');
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/navigation.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/navigation.service.ts ***!
    \************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcAppServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var navigationConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].navigationConfig;
    /**
     * Filter all dynamic routes and get the routes available to current user based on user roles
     */

    var NavigationService = /*#__PURE__*/function () {
      function NavigationService(auth) {
        _classCallCheck(this, NavigationService);

        this.routes$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.routes = this.routes$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (d) {
          return d !== null;
        }));
        auth.user.subscribe(this.updateRoutes.bind(this));
      }
      /**
       * Filter all dynamic routes and get the routes available to current user based on user roles
       * @param param0 Current User
       */


      _createClass(NavigationService, [{
        key: "updateRoutes",
        value: function updateRoutes() {
          var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              userRoles = _ref6.roles;

          this.routes$.next(navigationConfig.filter(function (_ref7) {
            var roles = _ref7.roles;
            return roles.some(function (role) {
              return userRoles.indexOf(role) > -1;
            });
          }));
        }
      }]);

      return NavigationService;
    }();

    NavigationService.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/rescipes-service.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/rescipes-service.service.ts ***!
    \******************************************************/

  /*! exports provided: RescipesServiceService */

  /***/
  function srcAppServicesRescipesServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RescipesServiceService", function () {
      return RescipesServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RescipesServiceService = /*#__PURE__*/function () {
      function RescipesServiceService(http) {
        _classCallCheck(this, RescipesServiceService);

        this.http = http;
        this.url = 'api/recipe';
        this.userUrl = 'api/user';
      }

      _createClass(RescipesServiceService, [{
        key: "getRecipes",
        value: function getRecipes(ingredientString) {
          var ingredients = {
            ingredients: ingredientString
          };
          return this.http.post(this.url, ingredients);
        }
      }, {
        key: "addWishList",
        value: function addWishList(recipeId, userId) {
          return this.http.post(this.userUrl + '/updateWishList/' + userId, {
            recipe: recipeId
          });
        }
      }, {
        key: "deleteWishList",
        value: function deleteWishList(recipeId, userId) {
          return this.http.post(this.userUrl + '/deleteWishList/' + userId, {
            recipe: recipeId
          });
        }
      }, {
        key: "getRecipe",
        value: function getRecipe(label1) {
          return this.http.post(this.url + '/getByLabel', {
            label: label1
          });
        }
      }]);

      return RescipesServiceService;
    }();

    RescipesServiceService.ɵfac = function RescipesServiceService_Factory(t) {
      return new (t || RescipesServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RescipesServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RescipesServiceService,
      factory: RescipesServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RescipesServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/sidebars.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/sidebars.service.ts ***!
    \**********************************************/

  /*! exports provided: SidebarsService */

  /***/
  function srcAppServicesSidebarsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarsService", function () {
      return SidebarsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SidebarsService = /*#__PURE__*/function () {
      function SidebarsService() {
        _classCallCheck(this, SidebarsService);

        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.state = this.state$.asObservable();
      }
      /**
       * Open a sidebar
       */


      _createClass(SidebarsService, [{
        key: "open",
        value: function open(state) {
          this.state$.next(state);
        }
        /**
         * Close any active sidebar
         */

      }, {
        key: "close",
        value: function close() {
          this.state$.next({});
        }
      }]);

      return SidebarsService;
    }();

    SidebarsService.ɵfac = function SidebarsService_Factory(t) {
      return new (t || SidebarsService)();
    };

    SidebarsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SidebarsService,
      factory: SidebarsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/token-interceptor.service.ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService(injector) {
        _classCallCheck(this, TokenInterceptorService);

        this.injector = injector;
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authService = this.injector.get(_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]);
          var tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + localStorage.getItem('token'))
          });
          return next.handle(tokenizedReq);
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
      return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptorService,
      factory: TokenInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/unit.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/unit.service.ts ***!
    \******************************************/

  /*! exports provided: UnitService */

  /***/
  function srcAppServicesUnitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitService", function () {
      return UnitService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var units = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].units;

    var UnitService = /*#__PURE__*/function () {
      function UnitService() {
        _classCallCheck(this, UnitService);

        this.unit$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](units[0]);
        this.unit = this.unit$.asObservable();
      }

      _createClass(UnitService, [{
        key: "change",
        value: function change(unit) {
          this.unit$.next(units.find(function (_ref8) {
            var id = _ref8.id;
            return id === unit;
          }));
        }
      }, {
        key: "convert",
        value: function convert(value, sourceUnit) {
          // TODO implement unit conversion
          return value;
        }
      }, {
        key: "units",
        get: function get() {
          return _toConsumableArray(units);
        }
      }, {
        key: "currentUnit",
        get: function get() {
          return this.unit$.getValue();
        }
      }]);

      return UnitService;
    }();

    UnitService.ɵfac = function UnitService_Factory(t) {
      return new (t || UnitService)();
    };

    UnitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UnitService,
      factory: UnitService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/backend-mock/auth/users.ts":
  /*!****************************************!*\
    !*** ./src/backend-mock/auth/users.ts ***!
    \****************************************/

  /*! exports provided: users */

  /***/
  function srcBackendMockAuthUsersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "users", function () {
      return users;
    });

    var users = [{
      id: 1,
      username: 'admin',
      fullName: 'Romey Patt',
      avatar: '/assets/i/user-1.jpg',
      password: 'password',
      roles: 'admin'
    }, {
      id: 2,
      username: 'scheduler',
      fullName: 'Romey Patt',
      avatar: '/assets/i/user-2.jpg',
      password: 'password',
      roles: 'scheduler'
    }, {
      id: 3,
      username: 'marketer',
      fullName: 'Tim Smith',
      avatar: '/assets/i/user-3.jpg',
      password: 'password',
      roles: 'marketer'
    }];
    /***/
  },

  /***/
  "./src/backend-mock/data/index.ts":
  /*!****************************************!*\
    !*** ./src/backend-mock/data/index.ts ***!
    \****************************************/

  /*! exports provided: regions, areas */

  /***/
  function srcBackendMockDataIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _regions_areas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./regions-areas */
    "./src/backend-mock/data/regions-areas.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "regions", function () {
      return _regions_areas__WEBPACK_IMPORTED_MODULE_0__["regions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "areas", function () {
      return _regions_areas__WEBPACK_IMPORTED_MODULE_0__["areas"];
    });
    /***/

  },

  /***/
  "./src/backend-mock/data/mixes.ts":
  /*!****************************************!*\
    !*** ./src/backend-mock/data/mixes.ts ***!
    \****************************************/

  /*! exports provided: Mixes */

  /***/
  function srcBackendMockDataMixesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mixes", function () {
      return Mixes;
    });

    var description1 = [{
      name: 'Product  A',
      percentage: 40
    }, {
      name: 'Product  B',
      percentage: 20
    }, {
      name: 'Product  C',
      percentage: 40
    }];
    var description2 = [{
      name: 'Product  A',
      percentage: 30
    }, {
      name: 'Product  B',
      percentage: 50
    }, {
      name: 'Product  C',
      percentage: 20
    }];
    var description3 = [{
      name: 'Product  A',
      percentage: 70
    }, {
      name: 'Product  B',
      percentage: 20
    }, {
      name: 'Product  C',
      percentage: 10
    }];
    var description4 = [{
      name: 'Product  A',
      percentage: 80
    }, {
      name: 'Product  B',
      percentage: 10
    }, {
      name: 'Product  C',
      percentage: 10
    }];
    var Mixes = [{
      sn: '001',
      productName: 'Product 1',
      description: description1
    }, {
      sn: '002',
      productName: 'Product 2',
      description: description2
    }, {
      sn: '003',
      productName: 'Product 3',
      description: description3
    }, {
      sn: '004',
      productName: 'Product 4',
      description: description4
    }];
    /***/
  },

  /***/
  "./src/backend-mock/data/regions-areas.ts":
  /*!************************************************!*\
    !*** ./src/backend-mock/data/regions-areas.ts ***!
    \************************************************/

  /*! exports provided: regions, areas */

  /***/
  function srcBackendMockDataRegionsAreasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "regions", function () {
      return regions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "areas", function () {
      return areas;
    });

    var regions = [{
      id: 1,
      name: 'US West Coast'
    }, {
      id: 2,
      name: 'US Gulf Coast'
    }, {
      id: 3,
      name: 'Panama'
    }, {
      id: 4,
      name: 'Region 1'
    }];
    var areas = [{
      id: 1,
      name: 'San Francisco',
      region: 1
    }, {
      id: 2,
      name: 'Los Angeles',
      region: 1
    }, {
      id: 3,
      name: 'Alabama',
      region: 2
    }, {
      id: 4,
      name: 'Louisiana',
      region: 2
    }, {
      id: 5,
      name: 'Atlantic',
      region: 3
    }, {
      id: 6,
      name: 'Pacific',
      region: 3
    }, {
      id: 7,
      name: 'Area 1',
      region: 4
    }];
    /***/
  },

  /***/
  "./src/backend-mock/interceptor.ts":
  /*!*****************************************!*\
    !*** ./src/backend-mock/interceptor.ts ***!
    \*****************************************/

  /*! exports provided: BackendInterceptor, fakeBackendProvider */

  /***/
  function srcBackendMockInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendInterceptor", function () {
      return BackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/users */
    "./src/backend-mock/auth/users.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./data */
    "./src/backend-mock/data/index.ts");

    var BackendInterceptor = /*#__PURE__*/function () {
      function BackendInterceptor() {
        _classCallCheck(this, BackendInterceptor);
      }

      _createClass(BackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // wrap in delayed observable to simulate server api call
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
              // find if any user matches login credentials
              var filteredUsers = _auth_users__WEBPACK_IMPORTED_MODULE_4__["users"].filter(function (user) {
                return user.username === request.body.username && user.password === request.body.password;
              });

              if (filteredUsers.length) {
                // if login details are valid return 200 OK with user details and fake jwt token
                var user = filteredUsers[0];
                var body = Object.assign(Object.assign({}, user), {
                  password: undefined
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                  status: 200,
                  body: body
                }));
              } else {
                // else return 400 bad request
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                  error: {
                    message: 'Wrong password or user name'
                  }
                });
              }
            } // get user


            if (request.url.match(/\/users\/me$/i) && request.method === 'GET') {
              var userId = parseInt(request.headers.get('Authorization') || '', 10);

              var _user = _auth_users__WEBPACK_IMPORTED_MODULE_4__["users"].find(function (u) {
                return u.id === userId;
              });

              var _body = Object.assign(Object.assign({}, _user), {
                password: undefined
              });

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                status: 200,
                body: _body
              }));
            } // get regions & areas


            if (request.url.endsWith('/regions') && request.method === 'GET') {
              var _body2 = {
                regions: _data__WEBPACK_IMPORTED_MODULE_5__["regions"],
                areas: _data__WEBPACK_IMPORTED_MODULE_5__["areas"]
              };
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                status: 200,
                body: _body2
              }));
            } // pass through any requests not handled above


            return next.handle(request);
          })) // call materialize and dematerialize to ensure delay even if an error is
          // thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        }
      }]);

      return BackendInterceptor;
    }();

    BackendInterceptor.ɵfac = function BackendInterceptor_Factory(t) {
      return new (t || BackendInterceptor)();
    };

    BackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BackendInterceptor,
      factory: BackendInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    var fakeBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: BackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var _navigation_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./navigation.config */
    "./src/environments/navigation.config.ts");
    /* harmony import */


    var _units_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./units.config */
    "./src/environments/units.config.ts"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      api: {
        HOST_URL: '',
        BASE_PATH: '/api/v1.0'
      },
      navigationConfig: _navigation_config__WEBPACK_IMPORTED_MODULE_0__["navigation"],
      units: _units_config__WEBPACK_IMPORTED_MODULE_1__["units"]
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/environments/navigation.config.ts":
  /*!***********************************************!*\
    !*** ./src/environments/navigation.config.ts ***!
    \***********************************************/

  /*! exports provided: adminRoutes, schedulerRoutes, marketerRoutes, navigation */

  /***/
  function srcEnvironmentsNavigationConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adminRoutes", function () {
      return adminRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "schedulerRoutes", function () {
      return schedulerRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marketerRoutes", function () {
      return marketerRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "navigation", function () {
      return navigation;
    });

    var adminRoutes = [{
      title: 'Contacts',
      path: 'contacts',
      roles: ['admin']
    }, {
      title: 'Terminal Companies',
      path: 'terminal-companies',
      roles: ['admin']
    }, {
      title: 'Tanks',
      path: 'tanks',
      roles: ['admin']
    }];
    var schedulerRoutes = [{
      title: 'Bunker Desk',
      path: 'bunker-desk',
      roles: ['scheduler']
    }, {
      title: 'Terminal Tanks & Barges',
      path: 'terminal-tanks-barges',
      roles: ['scheduler']
    }, {
      title: 'Forecast Availability',
      path: 'forecast-availability',
      roles: ['scheduler']
    }, {
      title: 'Current & Historical Specs',
      path: 'current-and-historical-specs',
      roles: ['scheduler']
    }];
    var marketerRoutes = [{
      title: 'Quick Search',
      path: 'quick-search',
      roles: ['marketer']
    }];
    var navigation = [].concat(adminRoutes, schedulerRoutes, marketerRoutes);
    /***/
  },

  /***/
  "./src/environments/units.config.ts":
  /*!******************************************!*\
    !*** ./src/environments/units.config.ts ***!
    \******************************************/

  /*! exports provided: units */

  /***/
  function srcEnvironmentsUnitsConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "units", function () {
      return units;
    });

    var units = [{
      id: 'mt',
      label: 'MT'
    }, {
      id: 'barrels',
      label: 'Barrels'
    }];
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/mohamed/Desktop/cust-food/angular-src/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map