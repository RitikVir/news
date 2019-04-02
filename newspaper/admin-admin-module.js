(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-root/add-client/add-client.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-root/add-client/add-client.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXJvb3QvYWRkLWNsaWVudC9hZGQtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-root/add-client/add-client.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-root/add-client/add-client.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formgroup\" (ngSubmit)=\"onSubmit()\">\n\n  <div class=\"row\">\n    <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Name*\">\n  </div>\n  <div class=\"row\">\n    <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email*\">\n  </div>\n  <div class=\"row\">\n    <input type=\"tel\" formControlName=\"phoneNumber\" class=\"form-control\" placeholder=\"Phone Number*\">\n  </div>\n  <button type=\"submit\" [disabled]=\"!this.formgroup.valid\">Add Client</button>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/admin-root/add-client/add-client.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-root/add-client/add-client.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin-service.service */ "./src/app/admin/admin-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(getAdminService, toastr) {
        this.getAdminService = getAdminService;
        this.toastr = toastr;
        this.formgroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
            ])
        });
    }
    AddClientComponent.prototype.ngOnInit = function () { };
    AddClientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.getAdminService.addClient(this.formgroup.value).subscribe(function (data) {
            if (data.status) {
                console.log('Added');
                _this.toastr.success('Client Added with 10 story and 5 Poll');
            }
            else {
                _this.toastr.error('Use Different Contact Number');
            }
        });
        this.formgroup.reset();
    };
    AddClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/admin/admin-root/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.css */ "./src/app/admin/admin-root/add-client/add-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-root/add-poll/add-poll.component.css":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-root/add-poll/add-poll.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXJvb3QvYWRkLXBvbGwvYWRkLXBvbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-root/add-poll/add-poll.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-root/add-poll/add-poll.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-root/add-poll/add-poll.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-root/add-poll/add-poll.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddPollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPollComponent", function() { return AddPollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin-service.service */ "./src/app/admin/admin-service.service.ts");



var AddPollComponent = /** @class */ (function () {
    function AddPollComponent(getAdminService) {
        this.getAdminService = getAdminService;
    }
    AddPollComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAdminService.pendingPollRequest().subscribe(function (polls) {
            _this.allPoll = polls;
        });
    };
    AddPollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-poll',
            template: __webpack_require__(/*! ./add-poll.component.html */ "./src/app/admin/admin-root/add-poll/add-poll.component.html"),
            styles: [__webpack_require__(/*! ./add-poll.component.css */ "./src/app/admin/admin-root/add-poll/add-poll.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]])
    ], AddPollComponent);
    return AddPollComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-root/add-story/add-story.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-root/add-story/add-story.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXJvb3QvYWRkLXN0b3J5L2FkZC1zdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-root/add-story/add-story.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-root/add-story/add-story.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-root/add-story/add-story.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-root/add-story/add-story.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStoryComponent", function() { return AddStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin-service.service */ "./src/app/admin/admin-service.service.ts");



var AddStoryComponent = /** @class */ (function () {
    function AddStoryComponent(getAdminService) {
        this.getAdminService = getAdminService;
    }
    AddStoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAdminService.pendingStoryRequest().subscribe(function (stories) {
            _this.allStory = stories;
        });
    };
    AddStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-story',
            template: __webpack_require__(/*! ./add-story.component.html */ "./src/app/admin/admin-root/add-story/add-story.component.html"),
            styles: [__webpack_require__(/*! ./add-story.component.css */ "./src/app/admin/admin-root/add-story/add-story.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"]])
    ], AddStoryComponent);
    return AddStoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-root/add-writer/add-writer.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-root/add-writer/add-writer.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXJvb3QvYWRkLXdyaXRlci9hZGQtd3JpdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-root/add-writer/add-writer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-root/add-writer/add-writer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formgroup\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"row\">\n    <input\n      type=\"text\"\n      formControlName=\"name\"\n      class=\"form-control\"\n      placeholder=\"Name*\"\n    />\n  </div>\n  <div class=\"row\">\n    <input\n      type=\"email\"\n      formControlName=\"email\"\n      class=\"form-control\"\n      placeholder=\"Email*\"\n    />\n  </div>\n  <div class=\"row\">\n    <input\n      type=\"tel\"\n      formControlName=\"phoneNumber\"\n      class=\"form-control\"\n      placeholder=\"Phone Number*\"\n    />\n  </div>\n  <button type=\"submit\" [disabled]=\"!this.formgroup.valid\">Add Writer</button>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/admin-root/add-writer/add-writer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-root/add-writer/add-writer.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddWriterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWriterComponent", function() { return AddWriterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin-service.service */ "./src/app/admin/admin-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AddWriterComponent = /** @class */ (function () {
    function AddWriterComponent(getAdminService, toastr) {
        this.getAdminService = getAdminService;
        this.toastr = toastr;
        this.formgroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
            ])
        });
    }
    AddWriterComponent.prototype.ngOnInit = function () { };
    AddWriterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.getAdminService.addWriter(this.formgroup.value).subscribe(function (data) {
            if (data.status) {
                _this.toastr.success('New Content Writer Added');
            }
            else {
                _this.toastr.error('Try another contact number');
            }
        });
        this.formgroup.reset();
    };
    AddWriterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-writer',
            template: __webpack_require__(/*! ./add-writer.component.html */ "./src/app/admin/admin-root/add-writer/add-writer.component.html"),
            styles: [__webpack_require__(/*! ./add-writer.component.css */ "./src/app/admin/admin-root/add-writer/add-writer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service_service__WEBPACK_IMPORTED_MODULE_3__["AdminServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AddWriterComponent);
    return AddWriterComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-root/admin-root.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin-root/admin-root.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXJvb3QvYWRtaW4tcm9vdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-root/admin-root.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-root/admin-root.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-root works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin-root/admin-root.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-root/admin-root.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRootComponent", function() { return AdminRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminRootComponent = /** @class */ (function () {
    function AdminRootComponent() {
    }
    AdminRootComponent.prototype.ngOnInit = function () {
    };
    AdminRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-root',
            template: __webpack_require__(/*! ./admin-root.component.html */ "./src/app/admin/admin-root/admin-root.component.html"),
            styles: [__webpack_require__(/*! ./admin-root.component.css */ "./src/app/admin/admin-root/admin-root.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminRootComponent);
    return AdminRootComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-root/profile/profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-root/profile/profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXJvb3QvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-root/profile/profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-root/profile/profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin-root/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-root/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/admin/admin-root/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/admin/admin-root/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_root_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-root/add-client/add-client.component */ "./src/app/admin/admin-root/add-client/add-client.component.ts");
/* harmony import */ var _admin_root_add_writer_add_writer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-root/add-writer/add-writer.component */ "./src/app/admin/admin-root/add-writer/add-writer.component.ts");
/* harmony import */ var _admin_root_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-root/add-story/add-story.component */ "./src/app/admin/admin-root/add-story/add-story.component.ts");
/* harmony import */ var _admin_root_add_poll_add_poll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-root/add-poll/add-poll.component */ "./src/app/admin/admin-root/add-poll/add-poll.component.ts");
/* harmony import */ var _admin_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-root/profile/profile.component */ "./src/app/admin/admin-root/profile/profile.component.ts");








var routes = [
    { path: 'addclient', component: _admin_root_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_3__["AddClientComponent"] },
    {
        path: 'addwriter',
        component: _admin_root_add_writer_add_writer_component__WEBPACK_IMPORTED_MODULE_4__["AddWriterComponent"]
    },
    {
        path: 'addstory',
        component: _admin_root_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_5__["AddStoryComponent"]
    },
    {
        path: 'addpoll',
        component: _admin_root_add_poll_add_poll_component__WEBPACK_IMPORTED_MODULE_6__["AddPollComponent"]
    },
    {
        path: 'profile',
        component: _admin_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin-service.service.ts ***!
  \************************************************/
/*! exports provided: AdminServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServiceService", function() { return AdminServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../key */ "./key.ts");




var AdminServiceService = /** @class */ (function () {
    function AdminServiceService(http) {
        this.http = http;
    }
    AdminServiceService.prototype.addClient = function (data) {
        return this.http.post(_key__WEBPACK_IMPORTED_MODULE_3__["environment"].API + '/admin/addclient', data);
    };
    AdminServiceService.prototype.addWriter = function (data) {
        return this.http.post(_key__WEBPACK_IMPORTED_MODULE_3__["environment"].API + '/admin/addwriter', data);
    };
    AdminServiceService.prototype.pendingStoryRequest = function () {
        return this.http.get(_key__WEBPACK_IMPORTED_MODULE_3__["environment"].API + '/admin/publishstory');
    };
    AdminServiceService.prototype.pendingPollRequest = function () {
        return this.http.get(_key__WEBPACK_IMPORTED_MODULE_3__["environment"].API + '/admin/publishpoll');
    };
    AdminServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminServiceService);
    return AdminServiceService;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_root_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-root/add-client/add-client.component */ "./src/app/admin/admin-root/add-client/add-client.component.ts");
/* harmony import */ var _admin_root_add_writer_add_writer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-root/add-writer/add-writer.component */ "./src/app/admin/admin-root/add-writer/add-writer.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_root_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-root/add-story/add-story.component */ "./src/app/admin/admin-root/add-story/add-story.component.ts");
/* harmony import */ var _admin_root_add_poll_add_poll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-root/add-poll/add-poll.component */ "./src/app/admin/admin-root/add-poll/add-poll.component.ts");
/* harmony import */ var _admin_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-root/profile/profile.component */ "./src/app/admin/admin-root/profile/profile.component.ts");
/* harmony import */ var _admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-root/admin-root.component */ "./src/app/admin/admin-root/admin-root.component.ts");











var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_root_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__["AddClientComponent"],
                _admin_root_add_writer_add_writer_component__WEBPACK_IMPORTED_MODULE_5__["AddWriterComponent"],
                _admin_root_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_7__["AddStoryComponent"],
                _admin_root_add_poll_add_poll_component__WEBPACK_IMPORTED_MODULE_8__["AddPollComponent"],
                _admin_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_10__["AdminRootComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map