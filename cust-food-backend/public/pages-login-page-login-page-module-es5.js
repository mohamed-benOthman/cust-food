function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-page-login-page-module"], {
  /***/
  "./src/app/pages/login-page/components/login-form/login-form.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/login-page/components/login-form/login-form.component.ts ***!
    \********************************************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppPagesLoginPageComponentsLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
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
    /*! ../../../../components/logo/logo.component */
    "./src/app/components/logo/logo.component.ts");
    /* harmony import */


    var _components_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../components/inputs/simple-input/simple-input.component */
    "./src/app/components/inputs/simple-input/simple-input.component.ts");
    /* harmony import */


    var _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../components/error-message/error-message.component */
    "./src/app/components/error-message/error-message.component.ts");
    /* harmony import */


    var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../components/loading-spinner/loading-spinner.component */
    "./src/app/components/loading-spinner/loading-spinner.component.ts");

    function LoginFormComponent_form_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
      }
    }

    function LoginFormComponent_form_0_app_error_message_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error-message", 13);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r5.errMessage);
      }
    }

    function LoginFormComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginFormComponent_form_0_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onSubmit(_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginFormComponent_form_0_div_2_Template, 1, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-logo", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-simple-input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function LoginFormComponent_form_0_Template_app_simple_input_getInput_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.email = $event;
        })("getInputStatus", function LoginFormComponent_form_0_Template_app_simple_input_getInputStatus_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.emailStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-simple-input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getInput", function LoginFormComponent_form_0_Template_app_simple_input_getInput_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.password = $event;
        })("getInputStatus", function LoginFormComponent_form_0_Template_app_simple_input_getInputStatus_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.passwordStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginFormComponent_form_0_app_error_message_6_Template, 1, 1, "app-error-message", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " LOGIN ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("submitted", ctx_r0.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.emailStatus || ctx_r0.passwordStatus);
      }
    }

    var _c0 = function _c0() {
      return ["/register"];
    };

    var _c1 = function _c1() {
      return ["/forgotPassword"];
    };

    function LoginFormComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You don't have an Account, Register! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Forgot Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      }
    }

    function LoginFormComponent_app_loading_spinner_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-spinner");
      }
    }

    var LoginFormComponent = /*#__PURE__*/function () {
      function LoginFormComponent(authenticationService, router) {
        _classCallCheck(this, LoginFormComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.submitted = false;
        this.focusedInput = '';
        this.loading = false;
        this.emailStatus = true;
        this.passwordStatus = true;
        this.error = false;
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LoginFormComponent, [{
        key: "getInputValue",
        value: function getInputValue(value) {}
        /**
         * Trigger a login event when submitting the form
         */

      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this = this;

          this.error = false;
          this.loading = true;
          var user = {
            password: this.password,
            email: this.email
          };
          this.authenticationService.login(user).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);

            _this.router.navigateByUrl('dashboardPage/' + res.id + '/searchRecipe/' + res.id);
          }, function (err) {
            _this.error = true;
            _this.errMessage = err.error.message;
            _this.loading = false;
          });
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
      return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginFormComponent,
      selectors: [["app-login"]],
      outputs: {
        login: "login"
      },
      decls: 3,
      vars: 3,
      consts: [["class", "form", 3, "submitted", "submit", 4, "ngIf"], ["class", "d-flex justify-content-between", 4, "ngIf"], [4, "ngIf"], [1, "form", 3, "submit"], ["loginForm", "ngForm"], ["class", "loading", 4, "ngIf"], ["type", "form", 1, "d-flex", "justify-content-center"], ["label", "Email", "type", "email", "placeholder", "Email", "icon", "email", "pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$", "required", "true", "name", "email", 3, "getInput", "getInputStatus"], ["label", "Password", "type", "password", "placeholder", "Password", "icon", "Password", "name", "password", "required", "true", 3, "getInput", "getInputStatus"], [3, "message", 4, "ngIf"], [1, "btn-group"], ["type", "submit", 1, "btn", "primary", 3, "disabled"], [1, "loading"], [3, "message"], [1, "d-flex", "justify-content-between"], [1, "register", 3, "routerLink"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginFormComponent_form_0_Template, 10, 5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginFormComponent_div_1_Template, 5, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginFormComponent_app_loading_spinner_2_Template, 1, 0, "app-loading-spinner", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _components_inputs_simple_input_simple_input_component__WEBPACK_IMPORTED_MODULE_6__["SimpleInputComponent"], _components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"]],
      styles: [".form[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 400px;\n  margin: 0 auto;\n  padding-top: 35px;\n  padding-left: 30px;\n  padding-right: 30px;\n  position: relative;\n}\n.form[_ngcontent-%COMP%]   .error-tips[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 18px;\n  color: #fff;\n}\napp-select[_ngcontent-%COMP%]  .select-trigger {\n  width: 100%;\n  border: #0066b2;\n}\n.btn-group[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: 20px;\n  margin-bottom: 30px;\n  width: 170px;\n}\n.register[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 60%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9oYW1lZC9EZXNrdG9wL2N1c3QtZm9vZC9hbmd1bGFyLXNyYy9zcmMvc3R5bGVzL2luY2x1ZGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREY7QURFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsV0VISTtBREdSO0FES0U7RUFDRSxXQUFBO0VBQ0EsZUVSVztBRE1mO0FETUE7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0hGO0FES0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaW5jbHVkZXMvdmFyaWFibGVzXCI7XG5cbi5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuZXJyb3ItdGlwcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgfVxufVxuXG5hcHAtc2VsZWN0OjpuZy1kZWVwIHtcbiAgLnNlbGVjdC10cmlnZ2VyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6ICRibHVlLXByaW1hcnk7XG4gIH1cbn1cblxuLmJ0bi1ncm91cCB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB3aWR0aDogMTcwcHg7XG59XG4ucmVnaXN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDYwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLmZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9ybSAuZXJyb3ItdGlwcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYXBwLXNlbGVjdDo6bmctZGVlcCAuc2VsZWN0LXRyaWdnZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAjMDA2NmIyO1xufVxuXG4uYnRuLWdyb3VwIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiA2MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIvLyBmb250c1xuJG1haW4tZm9udDogQXJpYWw7XG4kYWx0LWZvbnQ6IEFyaWFsO1xuXG4vLyBzaXplc1xuJGNvbnRlbnQtd2lkdGg6IDEzNjZweDtcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDYwcHg7XG4kbmF2aWdhdGlvbi1oZWlnaHQ6IDUwcHg7XG5cbi8vIGNvbG9yc1xuJHRleHQtY29sb3I6ICMwMDA7XG4kYmctY29sb3I6ICNmNWY2Zjc7XG4kd2hpdGU6ICNmZmY7XG4kY29udGVudC1ib3gtYmc6ICR3aGl0ZTtcbiRibHVlLXByaW1hcnk6ICMwMDY2YjI7XG4kYmx1ZS1hbHQ6ICMwMDlkZDk7XG4kYmx1ZS10ZXJuYXJ5OiAjZjJmYWZkO1xuJGdyYXktcHJpbWFyeTogIzhjOGY5MztcbiRncmF5LWxpZ2h0OiAjZGJkY2RkO1xuJGFjdGl2ZS1saW5rLWNvbG9yOiAjMDAwO1xuJGxpbmstY29sb3I6ICM2YjZkNmY7XG4kbm90aWZpY2F0aW9uLWNvbG9yOiAjZTIxODM2O1xuXG4kdXNlci1hdmF0YXItYmctY29sb3I6ICMwMGIyYmQ7XG5cbi8vIHNpZGViYXJcbiRvdmVybGF5LWNvbG9yOiByZ2JhKDAsMCwwLC4yNSk7XG4kc2lkZWJhci13aWR0aDogMzYwcHg7XG5cbiRtb2JpbGUtYnI6IDc2OHB4O1xuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login-form.component.html',
          styleUrls: ['./login-form.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        login: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/login-page/login-page-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/login-page/login-page-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginPageLoginPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login-page.component */
    "./src/app/pages/login-page/login-page.component.ts");
    /* harmony import */


    var _logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logout.component */
    "./src/app/pages/login-page/logout.component.ts");

    var routes = [{
      path: 'login',
      component: _login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"]
    }, {
      path: 'logout',
      component: _logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginPageRoutingModule
    });
    LoginPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginPageRoutingModule_Factory(t) {
        return new (t || LoginPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageRoutingModule, [{
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
  "./src/app/pages/login-page/login-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/login-page/login-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppPagesLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/navigation.service */
    "./src/app/services/navigation.service.ts");
    /* harmony import */


    var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/login-form/login-form.component */
    "./src/app/pages/login-page/components/login-form/login-form.component.ts");

    var LoginPageComponent = /*#__PURE__*/function () {
      function LoginPageComponent(auth, route, router, nav) {
        _classCallCheck(this, LoginPageComponent);

        this.auth = auth;
        this.route = route;
        this.router = router;
        this.nav = nav;
        this.authErrors = null;
      }

      _createClass(LoginPageComponent, [{
        key: "login",

        /**
         * Authenticate user
         * @param param0 Username & password
         */
        value: function login() {
          var _this2 = this;

          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
              _ref2 = _slicedToArray(_ref, 2),
              username = _ref2[0],
              password = _ref2[1];

          this.auth.login(username, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this2.authErrors = error.error, [];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function () {
            return _this2.nav.routes;
          })).subscribe(this.redirectOnAuth.bind(this));
        }
        /**
         * On a successful auth event, redirect user either to homepage or returnUrl
         * ?: move the redirect based on user role (eg. on `Contacts` page for admin) to the dashboard page?
         * @param path Path to redirect
         */

      }, {
        key: "redirectOnAuth",
        value: function redirectOnAuth(routes) {
          this.router.navigate([this.returnUrl || routes && "/dashboard/".concat(routes[0].path) || '/']);
        }
      }, {
        key: "returnUrl",
        get: function get() {
          return this.route.snapshot.queryParams.returnUrl;
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["ng-component"]],
      decls: 2,
      vars: 0,
      consts: [[1, "login-content"], [1, "loginForm"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]],
      styles: [".loginForm[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vaGFtZWQvRGVza3RvcC9jdXN0LWZvb2QvYW5ndWxhci1zcmMvc3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luRm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iLCIubG9naW5Gb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login-page/login-page.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/login-page/login-page.module.ts ***!
    \*******************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginPageLoginPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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
    /* harmony import */


    var _login_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-page-routing.module */
    "./src/app/pages/login-page/login-page-routing.module.ts");
    /* harmony import */


    var _login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-page.component */
    "./src/app/pages/login-page/login-page.component.ts");
    /* harmony import */


    var _logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logout.component */
    "./src/app/pages/login-page/logout.component.ts");
    /* harmony import */


    var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/login-form/login-form.component */
    "./src/app/pages/login-page/components/login-form/login-form.component.ts");
    /* harmony import */


    var src_app_components_inputs_inputs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/inputs/inputs.module */
    "./src/app/components/inputs/inputs.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/pages/login-page/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/pages/login-page/reset-password/reset-password.component.ts");
    /* harmony import */


    var _confirm_user_confirm_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./confirm-user/confirm-user.component */
    "./src/app/pages/login-page/confirm-user/confirm-user.component.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginPageModule
    });
    LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginPageModule_Factory(t) {
        return new (t || LoginPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _login_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginPageRoutingModule"], src_app_components_inputs_inputs_module__WEBPACK_IMPORTED_MODULE_7__["InputsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginPageModule, {
        declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"], _logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"], _confirm_user_confirm_user_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmUserComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _login_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginPageRoutingModule"], src_app_components_inputs_inputs_module__WEBPACK_IMPORTED_MODULE_7__["InputsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"], _logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"], _confirm_user_confirm_user_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmUserComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _login_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginPageRoutingModule"], src_app_components_inputs_inputs_module__WEBPACK_IMPORTED_MODULE_7__["InputsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login-page/logout.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/login-page/logout.component.ts ***!
    \******************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppPagesLoginPageLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent(auth, router) {
        _classCallCheck(this, LogoutComponent);

        this.auth = auth;
        this.router = router;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.auth.logout();
          this.router.navigate(['login']);
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["ng-component"]],
      decls: 0,
      vars: 0,
      template: function LogoutComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: ''
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-login-page-login-page-module-es5.js.map