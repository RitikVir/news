(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./key.ts":
/*!****************!*\
  !*** ./key.ts ***!
  \****************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    API: 'https://indiaknows.herokuapp.com/api',
    price: 2,
    clientId: '983115581931-5n2hlubh513hk1777kni0565a0jcp48p.apps.googleusercontent.com'
};


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	],
	"./client/client.module": [
		"./src/app/client/client.module.ts",
		"client-client-module"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"user-user-module"
	],
	"./writer/writer.module": [
		"./src/app/writer/writer.module.ts",
		"writer-writer-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _poll_poll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poll/poll.component */ "./src/app/poll/poll.component.ts");
/* harmony import */ var _role_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-guard.service */ "./src/app/role-guard.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-guard.service */ "./src/app/login-guard.service.ts");








var routes = [
    {
        path: 'story',
        component: _story_story_component__WEBPACK_IMPORTED_MODULE_3__["StoryComponent"]
    },
    {
        path: 'poll',
        component: _poll_poll_component__WEBPACK_IMPORTED_MODULE_4__["PollComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        canActivate: [_login_guard_service__WEBPACK_IMPORTED_MODULE_7__["LoginGuardService"]]
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_5__["RoleGuardService"]],
        data: { expectedRole: 'admin' }
    },
    {
        path: 'client',
        loadChildren: './client/client.module#ClientModule',
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_5__["RoleGuardService"]],
        data: { expectedRole: 'client' }
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_5__["RoleGuardService"]],
        data: { expectedRole: 'user' }
    },
    {
        path: 'writer',
        loadChildren: './writer/writer.module#WriterModule',
        canActivate: [_role_guard_service__WEBPACK_IMPORTED_MODULE_5__["RoleGuardService"]],
        data: { expectedRole: 'writer' }
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n\n<button (click)=\"logout()\">Logout</button>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'newspaper';
    }
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _poll_poll_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./poll/poll.component */ "./src/app/poll/poll.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _authServiceConfigs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authServiceConfigs */ "./src/app/authServiceConfigs.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _story_story_component__WEBPACK_IMPORTED_MODULE_10__["StoryComponent"], _poll_poll_component__WEBPACK_IMPORTED_MODULE_11__["PollComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
                    timeOut: 1000
                }),
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"]
            ],
            providers: [
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"],
                    useFactory: _authServiceConfigs__WEBPACK_IMPORTED_MODULE_13__["getAuthServiceConfigs"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../key */ "./key.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.formString = '';
    }
    AuthService.prototype.setString = function (string) {
        this.formString = string;
    };
    AuthService.prototype.getString = function () {
        return this.formString;
    };
    AuthService.prototype.doLogin = function (loginInfo) {
        return this.http
            .post(_key__WEBPACK_IMPORTED_MODULE_4__["environment"].API + '/login/', loginInfo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            if (!data.token) {
                return data;
            }
            var token = JSON.stringify(data.token);
            var decode = helper.decodeToken(token);
            if (token) {
                localStorage.setItem('token', token);
            }
            return decode;
        }));
    };
    AuthService.prototype.checkIfAlreadyRegistered = function (email) {
        return this.http.get(_key__WEBPACK_IMPORTED_MODULE_4__["environment"].API + "/login/checkAlreadyRegistered/" + email);
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        return !helper.isTokenExpired(token);
    };
    AuthService.prototype.userInfo = function () {
        var token = localStorage.getItem('token');
        var decode = helper.decodeToken(token);
        return decode;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/authServiceConfigs.ts":
/*!***************************************!*\
  !*** ./src/app/authServiceConfigs.ts ***!
  \***************************************/
/*! exports provided: getAuthServiceConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! key */ "./key.ts");


function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"](key__WEBPACK_IMPORTED_MODULE_1__["environment"].clientId)
        }
    ]);
    return config;
}


/***/ }),

/***/ "./src/app/login-guard.service.ts":
/*!****************************************!*\
  !*** ./src/app/login-guard.service.ts ***!
  \****************************************/
/*! exports provided: LoginGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardService", function() { return LoginGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");





var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
var LoginGuardService = /** @class */ (function () {
    function LoginGuardService(route, auth) {
        this.route = route;
        this.auth = auth;
    }
    LoginGuardService.prototype.canActivate = function () {
        var token = localStorage.getItem('token');
        if (token === null) {
            return true;
        }
        else {
            if (!this.auth.isAuthenticated()) {
                return true;
            }
            var tokenPayLoad = helper.decodeToken(token);
            if (tokenPayLoad.role === 'user') {
                this.route.navigate(['/user']);
            }
            else if (tokenPayLoad.role === 'admin') {
                this.route.navigate(['/admin']);
            }
            else {
                this.route.navigate(['/client']);
            }
            return true;
        }
    };
    LoginGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginGuardService);
    return LoginGuardService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #f9f9f9;\n}\n\n.container {\n  margin-top: 5%;\n}\n\n.card-header {\n  padding: 5px 15px;\n}\n\n.profile-img {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n.outer-div {\n  background-color: whitesmoke;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 15px 14px 33px -17px rgba(0, 0, 0, 1);\n}\n\n.outer-div .img-div {\n  margin-top: 0;\n}\n\n.outer-div .img-div img {\n  width: 280px;\n  height: auto;\n  border-radius: 50%;\n}\n\n.outer-div .login-div {\n  padding: 10px;\n}\n\n.login-div nav {\n  background-color: whitesmoke !important;\n}\n\n.login-div nav ul {\n  width: 100%;\n  padding: 5px;\n}\n\n.login-div nav ul:first-child {\n  margin-left: 60px;\n  float: left;\n}\n\n.login-div nav ul:last-child {\n  float: right;\n  margin-right: 60px;\n}\n\n.login-div nav ul li {\n  padding: 10px;\n  text-transform: uppercase;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.google-btn {\n  background-color: #fff;\n  padding: 10px 20px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n}\n\n.google-btn:hover {\n  box-shadow: 15px 14px 33px -17px rgba(0, 0, 0, 1);\n}\n\n.google-btn i {\n  color: #db4437;\n}\n\n.google-btn p {\n  text-transform: capitalize;\n  display: inline;\n  margin-left: 5px;\n}\n\n.login-btn {\n  color: #fff;\n  background-color: rgb(63, 151, 209);\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.login-btn:hover {\n  box-shadow: 15px 14px 33px -17px rgba(0, 0, 0, 1);\n}\n\n.login-btn p {\n  display: inline;\n  margin-left: 10px;\n  font-size: 1.1rem;\n  text-transform: capitalize;\n}\n\nnav ul li:hover {\n  background-color: rgb(63, 151, 209);\n  color: white;\n  padding: 10px;\n  border-radius: 10px;\n  font-weight: bold;\n}\n\nnav ul li .active {\n  font-weight: bold;\n}\n\nh6 {\n  margin-top: 5px;\n}\n\nh6:hover {\n  cursor: pointer;\n  box-shadow: 15px 14px 33px -17px rgba(0, 0, 0, 1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixtQkFBbUI7RUFHbkIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFHRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFHRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFHZixpREFBaUQ7QUFDbkQiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIHdpZHRoOiA5NnB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm91dGVyLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTVweCAxNHB4IDMzcHggLTE3cHggcmdiYSgwLCAwLCAwLCAxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAxNXB4IDE0cHggMzNweCAtMTdweCByZ2JhKDAsIDAsIDAsIDEpO1xuICBib3gtc2hhZG93OiAxNXB4IDE0cHggMzNweCAtMTdweCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuXG4ub3V0ZXItZGl2IC5pbWctZGl2IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5vdXRlci1kaXYgLmltZy1kaXYgaW1nIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm91dGVyLWRpdiAubG9naW4tZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxvZ2luLWRpdiBuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbi1kaXYgbmF2IHVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5sb2dpbi1kaXYgbmF2IHVsOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubG9naW4tZGl2IG5hdiB1bDpsYXN0LWNoaWxkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG5cbi5sb2dpbi1kaXYgbmF2IHVsIGxpIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmdvb2dsZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5nb29nbGUtYnRuOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxNXB4IDE0cHggMzNweCAtMTdweCByZ2JhKDAsIDAsIDAsIDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDE1cHggMTRweCAzM3B4IC0xN3B4IHJnYmEoMCwgMCwgMCwgMSk7XG4gIGJveC1zaGFkb3c6IDE1cHggMTRweCAzM3B4IC0xN3B4IHJnYmEoMCwgMCwgMCwgMSk7XG59XG5cbi5nb29nbGUtYnRuIGkge1xuICBjb2xvcjogI2RiNDQzNztcbn1cbi5nb29nbGUtYnRuIHAge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubG9naW4tYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTUxLCAyMDkpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2dpbi1idG46aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDE1cHggMTRweCAzM3B4IC0xN3B4IHJnYmEoMCwgMCwgMCwgMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMTVweCAxNHB4IDMzcHggLTE3cHggcmdiYSgwLCAwLCAwLCAxKTtcbiAgYm94LXNoYWRvdzogMTVweCAxNHB4IDMzcHggLTE3cHggcmdiYSgwLCAwLCAwLCAxKTtcbn1cblxuLmxvZ2luLWJ0biBwIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5uYXYgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDE1MSwgMjA5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubmF2IHVsIGxpIC5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDYge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmg2OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDE1cHggMTRweCAzM3B4IC0xN3B4IHJnYmEoMCwgMCwgMCwgMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMTVweCAxNHB4IDMzcHggLTE3cHggcmdiYSgwLCAwLCAwLCAxKTtcbiAgYm94LXNoYWRvdzogMTVweCAxNHB4IDMzcHggLTE3cHggcmdiYSgwLCAwLCAwLCAxKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"container d-flex justify-content-center outer-div\"\n  style=\" max-width: 650px;\"\n>\n  <div class=\"container col-sm-6 img-div\">\n    <img src=\"../../assets/img/login.svg\" alt=\"image\" />\n  </div>\n\n  <div class=\"col-sm-6 login-div\">\n    <nav class=\"navbar-nav bg-light navbar-expand-sm\">\n      <ul class=\"navbar navbar-nav\">\n        <li class=\"nav-item\">\n          <a (click)=\"openLogin()\">Sign In</a>\n        </li>\n        <li class=\"nav-item\">\n          <a (click)=\"openSignUp()\">Sign Up</a>\n        </li>\n      </ul>\n    </nav>\n    <form\n      [formGroup]=\"formGroup\"\n      *ngIf=\"currentComponent === 'login'; else signUp\"\n      (ngSubmit)=\"onSubmit()\"\n    >\n      <div class=\"container\">\n        <input\n          type=\"text\"\n          formControlName=\"phoneNumber\"\n          class=\"form-control\"\n          placeholder=\"Phone Number\"\n        />\n      </div>\n      <div class=\"container\">\n        <input\n          type=\"text\"\n          formControlName=\"password\"\n          class=\"form-control\"\n          placeholder=\"Password\"\n        />\n      </div>\n      <div class=\"text-center container\">\n        <button class=\"btn btn-default login-btn\">\n          <i class=\"fas fa-user\"></i>\n          <p>login</p>\n        </button>\n      </div>\n      <div class=\"container text-center\">\n        <h6>Forgot Password?</h6>\n\n        <button\n          class=\"btn btn-default google-btn\"\n          type=\"button\"\n          (click)=\"onPressSocialSignIn()\"\n        >\n          <i class=\"fab fa-google\"></i>\n          <p>Sign In With Google</p>\n        </button>\n      </div>\n\n      <button\n        type=\"button\"\n        id=\"modalButton\"\n        class=\"btn btn-info btn-lg\"\n        data-toggle=\"modal\"\n        data-target=\"#myModal\"\n        [hidden]=\"true\"\n      >\n        Open Modal\n      </button>\n\n      <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n          <!-- Modal content-->\n          <div class=\"modal-content\">\n            <form [formGroup]=\"socialAuthForm\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title text-center\">Enter your phone number</h4>\n              </div>\n              <div class=\"modal-body\">\n                <label for=\"phoneNumber\"><b>Phone Number</b></label>\n                <input\n                  type=\"text\"\n                  formControlName=\"phoneNumber\"\n                  class=\"form-control\"\n                />\n              </div>\n              <div class=\"modal-footer\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-default\"\n                  data-dismiss=\"modal\"\n                >\n                  Close\n                </button>\n                <button\n                  class=\"btn btn-primary\"\n                  type=\"button\"\n                  [disabled]=\"!this.socialAuthForm.valid\"\n                >\n                  Submit\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </form>\n    <ng-template #signUp>\n      <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onPressSignUp()\">\n        <div class=\"container\">\n          <input\n            type=\"text\"\n            formControlName=\"name\"\n            class=\"form-control\"\n            placeholder=\"Full Name*\"\n          />\n        </div>\n        <div class=\"container\">\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            class=\"form-control\"\n            placeholder=\"Email*\"\n          />\n        </div>\n        <div class=\"container\">\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            class=\"form-control\"\n            placeholder=\"Password*\"\n          />\n        </div>\n        <div class=\"container\">\n          <input\n            type=\"number\"\n            formControlName=\"phoneNumber\"\n            class=\"form-control\"\n            placeholder=\"Phone Number*\"\n          />\n        </div>\n        <div class=\"text-center container\">\n          <button\n            class=\"btn btn-default login-btn\"\n            [disabled]=\"!signUpForm.valid\"\n          >\n            <i class=\"fas fa-user\"></i>\n            <p>Sign Up</p>\n          </button>\n          <h6>Have Otp?</h6>\n        </div>\n      </form>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__);








var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, auth, router, fb, signup, socialAuth) {
        this.toastr = toastr;
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.signup = signup;
        this.socialAuth = socialAuth;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
            ])
        });
        this.signUpForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            phoneNumber: [
                [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ]
            ]
        });
        this.socialAuthForm = this.fb.group({
            phoneNumber: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]
            ]
        });
    }
    LoginComponent.prototype.openLogin = function () {
        this.currentComponent = 'login';
    };
    LoginComponent.prototype.openSignUp = function () {
        this.currentComponent = 'signUp';
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.currentComponent = 'login';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var loginInfo = this.formGroup.value;
        this.auth.doLogin(loginInfo).subscribe(function (data) {
            console.log(data);
            if (data.role === 'admin') {
                _this.router.navigate(['/admin/profile']);
            }
            else if (data.role === 'client') {
                _this.router.navigate(['/client/profile']);
            }
            else if (data.role === 'user') {
                _this.router.navigate(['/story']);
            }
            else if (data.role === 'writer') {
                _this.router.navigate(['/writer']);
            }
            else {
                _this.toastr.error('Invalid Credentials');
            }
        });
    };
    LoginComponent.prototype.onPressSignUp = function () {
        this.signup
            .signUp(this.signUpForm.value)
            .subscribe(function () { return console.log('signup done'); });
    };
    LoginComponent.prototype.onPressSocialSignIn = function () {
        var _this = this;
        this.socialAuth.signIn(angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID).then(function (userData) {
            // console.log(userData);
            _this.socialUserInfo = userData;
            _this.auth.checkIfAlreadyRegistered(userData.email).subscribe(function (data) {
                console.log('token  ', data.token);
                if (data.token !== null) {
                    localStorage.setItem('token', data.token.toString());
                }
                else {
                    console.log('clicked');
                    document.getElementById('modalButton').click();
                }
            });
        });
    };
    LoginComponent.prototype.onFinishSocialSignIn = function () {
        var _this = this;
        var userInfo = {
            name: this.socialUserInfo.name,
            email: this.socialUserInfo.email,
            phoneNumber: this.socialAuthForm.value.phoneNumber
        };
        this.signup.socialSignUp(userInfo).subscribe(function (data) {
            if (data.token) {
                localStorage.setItem('token', data.token);
                _this.router.navigate(['/user']);
            }
            else {
                alert('Error signing up');
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _signup_service__WEBPACK_IMPORTED_MODULE_6__["SignupService"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/poll/poll.component.css":
/*!*****************************************!*\
  !*** ./src/app/poll/poll.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.card{\n  background-color: #FFFDE7;\n  box-shadow: 1px 1px rgba(0,0,0,0.4);\n  margin: 5px;\n  padding: 5px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 1000px) {\n  /* For mobile phones: */\n  [class*=\"col-\"] {\n    width: 100%;\n  }\n  img {\n      height: 50% !important;\n      width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9sbC9wb2xsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QjtJQUNFLFdBQVc7RUFDYjtFQUNBO01BQ0ksc0JBQXNCO01BQ3RCLHNCQUFzQjtFQUMxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9sbC9wb2xsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGREU3O1xuICBib3gtc2hhZG93OiAxcHggMXB4IHJnYmEoMCwwLDAsMC40KTtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gIFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbWcge1xuICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/poll/poll.component.html":
/*!******************************************!*\
  !*** ./src/app/poll/poll.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Polls</h2>\n    <div *ngIf=\"!loading else spinner\">\n        <div class=\"card\">\n            <h3 class=\"text-center\">\n                No. of Polls: {{pollDetails.count}}\n            </h3>\n        </div>\n        <div class=\"card\" style=\"width: 100%;\" *ngFor=\"let poll of polls\">\n            <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <img class=\"card-img-top\" style=\"width:100%;\" [src]=\"getFileUrl(poll.imageUrl)\"\n                        alt=\"Card image cap\">\n                </div>\n                <div class=\"col-lg-8  col-12\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"> <b>{{poll.heading}}</b></h5>\n                        <p class=\"card-text\">{{poll.detail}}</p>\n                        <button type=\"button\" class=\"poll-button btn-primary\">Yes</button> &nbsp;\n                        <button type=\"button\" class=\"poll-button btn-danger\">No</button> &nbsp;\n                        <button type=\"button\" class=\"poll-button btn-warning\">Maybe</button> &nbsp;\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #spinner>Loading...</ng-template>"

/***/ }),

/***/ "./src/app/poll/poll.component.ts":
/*!****************************************!*\
  !*** ./src/app/poll/poll.component.ts ***!
  \****************************************/
/*! exports provided: PollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollComponent", function() { return PollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _writer_poll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../writer/poll.service */ "./src/app/writer/poll.service.ts");



var PollComponent = /** @class */ (function () {
    function PollComponent(pollService) {
        this.pollService = pollService;
        this.loading = false;
    }
    PollComponent.prototype.getFileUrl = function (filename) {
        return "api/story/storyImage/" + filename;
    };
    PollComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.pollService.getPolls({}).subscribe(function (response) {
            console.log(response);
            _this.pollDetails = response;
            _this.polls = _this.pollDetails.result;
            _this.loading = false;
        });
    };
    PollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-poll',
            template: __webpack_require__(/*! ./poll.component.html */ "./src/app/poll/poll.component.html"),
            styles: [__webpack_require__(/*! ./poll.component.css */ "./src/app/poll/poll.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_writer_poll_service__WEBPACK_IMPORTED_MODULE_2__["PollService"]])
    ], PollComponent);
    return PollComponent;
}());



/***/ }),

/***/ "./src/app/role-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/role-guard.service.ts ***!
  \***************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");





var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
var RoleGuardService = /** @class */ (function () {
    function RoleGuardService(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    RoleGuardService.prototype.canActivate = function (route) {
        var expectedRole = route.data.expectedRole;
        var token = localStorage.getItem('token');
        if (token === null || helper.isTokenExpired(token)) {
            localStorage.removeItem('token');
            this.route.navigate(['/login']);
            return true;
        }
        var tokenPayLoad = helper.decodeToken(token);
        if (this.auth.isAuthenticated() && expectedRole === tokenPayLoad.role) {
            if (tokenPayLoad.role === 'user' && !tokenPayLoad.isVerifiedOtp) {
                console.log('Otp Not verified');
                this.route.navigate(['/user/otpverify']);
                return true;
            }
            return true;
        }
        else {
            this.route.navigate(['/login']);
        }
    };
    RoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoleGuardService);
    return RoleGuardService;
}());



/***/ }),

/***/ "./src/app/signup.service.ts":
/*!***********************************!*\
  !*** ./src/app/signup.service.ts ***!
  \***********************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! key */ "./key.ts");




var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
        this.uri = key__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    SignupService.prototype.signUp = function (userInfo) {
        return this.http.post(this.uri + "/user/signup", userInfo);
    };
    SignupService.prototype.socialSignUp = function (userInfo) {
        return this.http.post(this.uri + "/user/socialSignUp", userInfo);
    };
    SignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/story.service.ts":
/*!**********************************!*\
  !*** ./src/app/story.service.ts ***!
  \**********************************/
/*! exports provided: StoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryService", function() { return StoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! key */ "./key.ts");




var StoryService = /** @class */ (function () {
    function StoryService(http) {
        this.http = http;
        this.uri = key__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    StoryService.prototype.getActiveStories = function () {
        return this.http.get(this.uri + "/story/activeStories");
    };
    StoryService.prototype.addBookMark = function (info) {
        return this.http.post(this.uri + "/user/addBookMark", info);
    };
    StoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StoryService);
    return StoryService;
}());



/***/ }),

/***/ "./src/app/story/story.component.css":
/*!*******************************************!*\
  !*** ./src/app/story/story.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L3N0b3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/story/story.component.html":
/*!********************************************!*\
  !*** ./src/app/story/story.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\" style=\"max-width: 1050px\" *ngFor=\"let item of stories\">\n    <img\n      class=\"card-img-top\"\n      style=\"max-height: 450px;\"\n      [src]=\"getFileUrl(item.imageUrl)\"\n      alt=\"Card Image\"\n    />\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"card-title col-sm-10\">\n          <b>{{ item.heading }}</b>\n        </div>\n        <button\n          class=\"btn btn-primary col-sm-2\"\n          [disabled]=\"!loggedIn\"\n          (click)=\"addBookMark(item._id)\"\n          data-toggle=\"tool-tip\"\n          title=\"login to bookmark\"\n        >\n          Bookmark\n        </button>\n      </div>\n      <p class=\"card-text\">{{ item.detail }}</p>\n      <a href=\"{{ item.storyUrl }}\" target=\"_blank\">Read more</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/story/story.component.ts":
/*!******************************************!*\
  !*** ./src/app/story/story.component.ts ***!
  \******************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _story_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../story.service */ "./src/app/story.service.ts");
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! key */ "./key.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var StoryComponent = /** @class */ (function () {
    function StoryComponent(story, auth) {
        this.story = story;
        this.auth = auth;
    }
    StoryComponent.prototype.getFileUrl = function (filename) {
        return key__WEBPACK_IMPORTED_MODULE_3__["environment"].API + "/story/storyImage/" + filename;
    };
    StoryComponent.prototype.addBookMark = function (storyId) {
        this.story
            .addBookMark({ storyId: storyId, userId: this.auth.userInfo().userId })
            .subscribe(function (data) { return alert(data.message); });
    };
    StoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedIn =
            this.auth.userInfo() && this.auth.userInfo().role === 'user';
        this.story.getActiveStories().subscribe(function (data) { return (_this.stories = data); });
    };
    StoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! ./story.component.html */ "./src/app/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/story/story.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_story_service__WEBPACK_IMPORTED_MODULE_2__["StoryService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/writer/poll.service.ts":
/*!****************************************!*\
  !*** ./src/app/writer/poll.service.ts ***!
  \****************************************/
/*! exports provided: PollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollService", function() { return PollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../key */ "./key.ts");




var PollService = /** @class */ (function () {
    function PollService(http) {
        this.http = http;
        this.uri = _key__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    PollService.prototype.addPoll = function (pollData) {
        return this.http.post(this.uri + "/writer/addPoll", pollData);
    };
    PollService.prototype.getPolls = function (params) {
        return this.http.post("/api/poll", params);
    };
    PollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PollService);
    return PollService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ri.virmani/newspaper/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map