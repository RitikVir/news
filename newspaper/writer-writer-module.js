(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["writer-writer-module"],{

/***/ "./src/app/writer/profile.service.ts":
/*!*******************************************!*\
  !*** ./src/app/writer/profile.service.ts ***!
  \*******************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! key */ "./key.ts");




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.uri = key__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    ProfileService.prototype.getWriterProfile = function (userId) {
        return this.http.post(this.uri + "/writer/profile", { userId: userId });
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/writer/story.service.ts":
/*!*****************************************!*\
  !*** ./src/app/writer/story.service.ts ***!
  \*****************************************/
/*! exports provided: StoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryService", function() { return StoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../key */ "./key.ts");




var StoryService = /** @class */ (function () {
    function StoryService(http) {
        this.http = http;
        this.uri = _key__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    StoryService.prototype.addStory = function (storyInfo) {
        return this.http.post(this.uri + "/writer/addStory", storyInfo);
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

/***/ "./src/app/writer/writer-root/add-poll/add-poll.component.css":
/*!********************************************************************!*\
  !*** ./src/app/writer/writer-root/add-poll/add-poll.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyaXRlci93cml0ZXItcm9vdC9hZGQtcG9sbC9hZGQtcG9sbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/writer/writer-root/add-poll/add-poll.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/writer/writer-root/add-poll/add-poll.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"container\">\n    <div class=\"form-group\">\n      <label for=\"heading\">Heading</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"heading\" />\n      <label for=\"detail\">Details</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"detail\" />\n      <label for=\"date\">Last Date</label>\n      <input type=\"date\" class=\"form-control\" formControlName=\"lastDate\" />\n      <label for=\"image\">Image</label>\n      <input type=\"file\" class=\"form-control\" (change)=\"handleChange($event)\" />\n      <button class=\"btn btn-primary\">Add Poll</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/writer/writer-root/add-poll/add-poll.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/writer/writer-root/add-poll/add-poll.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddPollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPollComponent", function() { return AddPollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_writer_poll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/writer/poll.service */ "./src/app/writer/poll.service.ts");





var AddPollComponent = /** @class */ (function () {
    function AddPollComponent(fb, auth, poll) {
        this.fb = fb;
        this.auth = auth;
        this.poll = poll;
        this.formGroup = this.fb.group({
            heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    AddPollComponent.prototype.handleChange = function (event) {
        if (event.target.files.length > 0) {
            this.formGroup.get('imageUrl').setValue(event.target.files[0]);
        }
    };
    AddPollComponent.prototype.onSubmit = function () {
        var formData = new FormData();
        formData.append('heading', this.formGroup.value.heading);
        formData.append('detail', this.formGroup.value.detail);
        formData.append('lastDate', this.formGroup.value.lastDate);
        formData.append('imageUrl', this.formGroup.value.imageUrl);
        formData.append('authorRole', 'writer');
        formData.append('positiveCount', '0');
        formData.append('negativeCount', '0');
        formData.append('neutralCount', '0');
        formData.append('authorId', this.auth.userInfo().userId);
        this.poll.addPoll(formData).subscribe(function (data) { return alert(data.message); });
    };
    AddPollComponent.prototype.ngOnInit = function () { };
    AddPollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-poll',
            template: __webpack_require__(/*! ./add-poll.component.html */ "./src/app/writer/writer-root/add-poll/add-poll.component.html"),
            styles: [__webpack_require__(/*! ./add-poll.component.css */ "./src/app/writer/writer-root/add-poll/add-poll.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_writer_poll_service__WEBPACK_IMPORTED_MODULE_4__["PollService"]])
    ], AddPollComponent);
    return AddPollComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-root/add-story/add-story.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/writer/writer-root/add-story/add-story.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyaXRlci93cml0ZXItcm9vdC9hZGQtc3RvcnkvYWRkLXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/writer/writer-root/add-story/add-story.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/writer/writer-root/add-story/add-story.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"container table-bordered\">\n    <div class=\"form-group\" style=\"padding: 15px\">\n      <div class=\"row\">\n        <label for=\"heading\" class=\"col-sm-2\">Heading</label>\n        <div class=\"col-sm-9\">\n          <input\n            type=\"text\"\n            formControlName=\"heading\"\n            id=\"heading\"\n            class=\"form-control\"\n          />\n        </div>\n      </div>\n      <hr />\n      <div class=\"row\">\n        <label for=\"description\" class=\"col-sm-2\">Description</label>\n        <div class=\"col-sm-9\">\n          <input\n            type=\"text\"\n            formControlName=\"detail\"\n            id=\"description\"\n            class=\"form-control\"\n          />\n        </div>\n      </div>\n      <hr />\n      <div class=\"row\">\n        <label for=\"image\" class=\"col-sm-2\">Image</label>\n        <div class=\"col-sm-9\">\n          <input\n            type=\"file\"\n            (change)=\"onSelectImage($event)\"\n            class=\"form-control\"\n          />\n        </div>\n      </div>\n      <hr />\n      <div class=\"row\">\n        <label for=\"story\" class=\"col-sm-2\">Story Url</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" formControlName=\"storyUrl\" class=\"form-control\" />\n        </div>\n      </div>\n      <button class=\"btn btn-primary\" [disabled]=\"!this.formGroup.valid\">\n        Add Story\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/writer/writer-root/add-story/add-story.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/writer/writer-root/add-story/add-story.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStoryComponent", function() { return AddStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _story_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../story.service */ "./src/app/writer/story.service.ts");





var AddStoryComponent = /** @class */ (function () {
    function AddStoryComponent(fb, auth, story) {
        this.fb = fb;
        this.auth = auth;
        this.story = story;
        this.formGroup = this.fb.group({
            heading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            detail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imageUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            storyUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AddStoryComponent.prototype.onSelectImage = function (event) {
        if (event.target.files.length > 0) {
            this.formGroup.get('imageUrl').setValue(event.target.files[0]);
        }
    };
    AddStoryComponent.prototype.onSubmit = function () {
        var formData = new FormData();
        formData.append('heading', this.formGroup.value.heading);
        formData.append('detail', this.formGroup.value.detail);
        formData.append('imageUrl', this.formGroup.value.imageUrl);
        formData.append('storyUrl', this.formGroup.value.storyUrl);
        formData.append('authorRole', 'writer');
        formData.append('views', '0');
        formData.append('authorId', this.auth.userInfo().userId);
        this.story.addStory(formData).subscribe(function (data) { return alert(data.message); });
    };
    AddStoryComponent.prototype.ngOnInit = function () { };
    AddStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-story',
            template: __webpack_require__(/*! ./add-story.component.html */ "./src/app/writer/writer-root/add-story/add-story.component.html"),
            styles: [__webpack_require__(/*! ./add-story.component.css */ "./src/app/writer/writer-root/add-story/add-story.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _story_service__WEBPACK_IMPORTED_MODULE_4__["StoryService"]])
    ], AddStoryComponent);
    return AddStoryComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-root/profile/profile.component.css":
/*!******************************************************************!*\
  !*** ./src/app/writer/writer-root/profile/profile.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyaXRlci93cml0ZXItcm9vdC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/writer/writer-root/profile/profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/writer/writer-root/profile/profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\" *ngIf=\"!profile; else renderContent\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n<ng-template #renderContent>\n  <div class=\"container table-bordered\">\n    <div class=\"form-group\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\"><b>Name</b></div>\n        <div class=\"col-sm-8\">{{ profile.name }}</div>\n      </div>\n      <hr />\n      <div class=\"row\">\n        <div class=\"col-sm-2\">Email</div>\n        <div class=\"col-sm-8\">{{ profile.email }}</div>\n      </div>\n      <hr />\n      <div class=\"row\">\n        <div class=\"col-sm-2\">Contact</div>\n        <div class=\"col-sm-8\">{{ profile.phoneNumber }}</div>\n      </div>\n      <hr />\n      <div class=\"row\">\n        <div class=\"col-sm-2\">Stories Added</div>\n        <div class=\"col-sm-8\">{{ profile.storyCount }}</div>\n      </div>\n      <hr />\n      <div class=\"row\">\n        <div class=\"col-sm-2\">Poll Count</div>\n        <div class=\"col-sm-8\">{{ profile.pollCount }}</div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/writer/writer-root/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/writer/writer-root/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile.service */ "./src/app/writer/profile.service.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(writer, auth) {
        this.writer = writer;
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.writer
            .getWriterProfile(this.auth.userInfo().userId)
            .subscribe(function (data) {
            data.success ? (_this.profile = data.writerInfo) : alert(data.message);
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/writer/writer-root/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/writer/writer-root/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-root/writer-root.component.css":
/*!**************************************************************!*\
  !*** ./src/app/writer/writer-root/writer-root.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyaXRlci93cml0ZXItcm9vdC93cml0ZXItcm9vdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/writer/writer-root/writer-root.component.html":
/*!***************************************************************!*\
  !*** ./src/app/writer/writer-root/writer-root.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  writer-root works!\n</p>\n"

/***/ }),

/***/ "./src/app/writer/writer-root/writer-root.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/writer/writer-root/writer-root.component.ts ***!
  \*************************************************************/
/*! exports provided: WriterRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterRootComponent", function() { return WriterRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WriterRootComponent = /** @class */ (function () {
    function WriterRootComponent() {
    }
    WriterRootComponent.prototype.ngOnInit = function () {
    };
    WriterRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-writer-root',
            template: __webpack_require__(/*! ./writer-root.component.html */ "./src/app/writer/writer-root/writer-root.component.html"),
            styles: [__webpack_require__(/*! ./writer-root.component.css */ "./src/app/writer/writer-root/writer-root.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WriterRootComponent);
    return WriterRootComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/writer/writer-routing.module.ts ***!
  \*************************************************/
/*! exports provided: WriterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterRoutingModule", function() { return WriterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _writer_root_add_poll_add_poll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./writer-root/add-poll/add-poll.component */ "./src/app/writer/writer-root/add-poll/add-poll.component.ts");
/* harmony import */ var _writer_root_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./writer-root/add-story/add-story.component */ "./src/app/writer/writer-root/add-story/add-story.component.ts");
/* harmony import */ var _writer_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./writer-root/profile/profile.component */ "./src/app/writer/writer-root/profile/profile.component.ts");






var routes = [
    {
        path: 'addpoll',
        component: _writer_root_add_poll_add_poll_component__WEBPACK_IMPORTED_MODULE_3__["AddPollComponent"]
    },
    {
        path: 'addstory',
        component: _writer_root_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_4__["AddStoryComponent"]
    },
    {
        path: 'profile',
        component: _writer_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }
];
var WriterRoutingModule = /** @class */ (function () {
    function WriterRoutingModule() {
    }
    WriterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], WriterRoutingModule);
    return WriterRoutingModule;
}());



/***/ }),

/***/ "./src/app/writer/writer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/writer/writer.module.ts ***!
  \*****************************************/
/*! exports provided: WriterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterModule", function() { return WriterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _writer_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./writer-routing.module */ "./src/app/writer/writer-routing.module.ts");
/* harmony import */ var _writer_root_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./writer-root/add-story/add-story.component */ "./src/app/writer/writer-root/add-story/add-story.component.ts");
/* harmony import */ var _writer_root_add_poll_add_poll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./writer-root/add-poll/add-poll.component */ "./src/app/writer/writer-root/add-poll/add-poll.component.ts");
/* harmony import */ var _writer_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./writer-root/profile/profile.component */ "./src/app/writer/writer-root/profile/profile.component.ts");
/* harmony import */ var _writer_root_writer_root_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./writer-root/writer-root.component */ "./src/app/writer/writer-root/writer-root.component.ts");









var WriterModule = /** @class */ (function () {
    function WriterModule() {
    }
    WriterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _writer_root_add_story_add_story_component__WEBPACK_IMPORTED_MODULE_5__["AddStoryComponent"],
                _writer_root_add_poll_add_poll_component__WEBPACK_IMPORTED_MODULE_6__["AddPollComponent"],
                _writer_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _writer_root_writer_root_component__WEBPACK_IMPORTED_MODULE_8__["WriterRootComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _writer_routing_module__WEBPACK_IMPORTED_MODULE_4__["WriterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        })
    ], WriterModule);
    return WriterModule;
}());



/***/ })

}]);
//# sourceMappingURL=writer-writer-module.js.map