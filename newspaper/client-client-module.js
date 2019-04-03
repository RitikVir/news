(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "./src/app/client/client-root/client-root.component.css":
/*!**************************************************************!*\
  !*** ./src/app/client/client-root/client-root.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtcm9vdC9jbGllbnQtcm9vdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/client/client-root/client-root.component.html":
/*!***************************************************************!*\
  !*** ./src/app/client/client-root/client-root.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  client-root works!\n</p>\n"

/***/ }),

/***/ "./src/app/client/client-root/client-root.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/client/client-root/client-root.component.ts ***!
  \*************************************************************/
/*! exports provided: ClientRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRootComponent", function() { return ClientRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientRootComponent = /** @class */ (function () {
    function ClientRootComponent() {
    }
    ClientRootComponent.prototype.ngOnInit = function () {
    };
    ClientRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-root',
            template: __webpack_require__(/*! ./client-root.component.html */ "./src/app/client/client-root/client-root.component.html"),
            styles: [__webpack_require__(/*! ./client-root.component.css */ "./src/app/client/client-root/client-root.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientRootComponent);
    return ClientRootComponent;
}());



/***/ }),

/***/ "./src/app/client/client-root/make-payment/make-payment.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/client/client-root/make-payment/make-payment.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtcm9vdC9tYWtlLXBheW1lbnQvbWFrZS1wYXltZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/client/client-root/make-payment/make-payment.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/client/client-root/make-payment/make-payment.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"abc\"></div>\n<button type=\"button\" (click)=\"pay()\">Pay</button>\n"

/***/ }),

/***/ "./src/app/client/client-root/make-payment/make-payment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/client/client-root/make-payment/make-payment.component.ts ***!
  \***************************************************************************/
/*! exports provided: MakePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePaymentComponent", function() { return MakePaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");



var MakePaymentComponent = /** @class */ (function () {
    function MakePaymentComponent(auth) {
        this.auth = auth;
        this.str = '';
    }
    MakePaymentComponent.prototype.ngOnInit = function () {
        console.log(this.auth.getString());
        this.str = this.auth.getString();
        document.getElementById('abc').innerHTML = this.str;
        var inputFields = document.getElementById('f1');
        inputFields.submit();
    };
    MakePaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-make-payment',
            template: __webpack_require__(/*! ./make-payment.component.html */ "./src/app/client/client-root/make-payment/make-payment.component.html"),
            styles: [__webpack_require__(/*! ./make-payment.component.css */ "./src/app/client/client-root/make-payment/make-payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MakePaymentComponent);
    return MakePaymentComponent;
}());



/***/ }),

/***/ "./src/app/client/client-root/payment-status/payment-status.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/client/client-root/payment-status/payment-status.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtcm9vdC9wYXltZW50LXN0YXR1cy9wYXltZW50LXN0YXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/client/client-root/payment-status/payment-status.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/client/client-root/payment-status/payment-status.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Payment {{ status }}</h1>\n\n<button (click)=\"pricing()\">Go Back to buy more units</button>\n"

/***/ }),

/***/ "./src/app/client/client-root/payment-status/payment-status.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/client/client-root/payment-status/payment-status.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PaymentStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentStatusComponent", function() { return PaymentStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PaymentStatusComponent = /** @class */ (function () {
    function PaymentStatusComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    PaymentStatusComponent.prototype.ngOnInit = function () {
        this.status = this.route.snapshot.paramMap.get('status');
    };
    PaymentStatusComponent.prototype.pricing = function () {
        this.router.navigate(['/pricing']);
    };
    PaymentStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-status',
            template: __webpack_require__(/*! ./payment-status.component.html */ "./src/app/client/client-root/payment-status/payment-status.component.html"),
            styles: [__webpack_require__(/*! ./payment-status.component.css */ "./src/app/client/client-root/payment-status/payment-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PaymentStatusComponent);
    return PaymentStatusComponent;
}());



/***/ }),

/***/ "./src/app/client/client-root/pricing/pricing.component.css":
/*!******************************************************************!*\
  !*** ./src/app/client/client-root/pricing/pricing.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtcm9vdC9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/client/client-root/pricing/pricing.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/client/client-root/pricing/pricing.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formgroup\" (ngSubmit)=\"onSubmit()\">\n  <p>One unit contains 10 story and 5 poll and cost {{ env.price }}</p>\n\n  <p>Select the number of units u need</p>\n\n  <input\n    type=\"number\"\n    formControlName=\"units\"\n    placeholder=\"Enter Units required\"\n  />\n\n  <button type=\"submit\">\n    Make Payment of {{ this.formgroup.get('units').value * env.price }} Rupees\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/client/client-root/pricing/pricing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/client-root/pricing/pricing.component.ts ***!
  \*****************************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../key */ "./key.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _client_serv_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client-serv.service */ "./src/app/client/client-serv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var PricingComponent = /** @class */ (function () {
    function PricingComponent(auth, getClientService, router) {
        this.auth = auth;
        this.getClientService = getClientService;
        this.router = router;
        this.env = _key__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.formgroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            units: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    PricingComponent.prototype.ngOnInit = function () { };
    PricingComponent.prototype.onSubmit = function () {
        var _this = this;
        var transactionInfo = {
            amount: this.formgroup.get('units').value * _key__WEBPACK_IMPORTED_MODULE_2__["environment"].price,
            userId: this.auth.userInfo().userId
        };
        this.getClientService.makePayment(transactionInfo).subscribe(function (data) {
            console.log(data);
            _this.auth.setString(data.formString);
            _this.router.navigate(['/client/makepayment']);
        });
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/client/client-root/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/client/client-root/pricing/pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _client_serv_service__WEBPACK_IMPORTED_MODULE_5__["ClientServService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/client/client-root/profile/profile.component.css":
/*!******************************************************************!*\
  !*** ./src/app/client/client-root/profile/profile.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtcm9vdC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/client/client-root/profile/profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/client/client-root/profile/profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/client/client-root/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/client-root/profile/profile.component.ts ***!
  \*****************************************************************/
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
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/client/client-root/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/client/client-root/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/client/client-root/request-poll/request-poll.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/client/client-root/request-poll/request-poll.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtcm9vdC9yZXF1ZXN0LXBvbGwvcmVxdWVzdC1wb2xsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/client/client-root/request-poll/request-poll.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/client/client-root/request-poll/request-poll.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formgroup\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"row\">\n    <input\n      type=\"text\"\n      formControlName=\"heading\"\n      class=\"form-control\"\n      placeholder=\"Heading*\"\n    />\n  </div>\n  <div class=\"row\">\n    <input\n      type=\"text\"\n      formControlName=\"detail\"\n      class=\"form-control\"\n      placeholder=\"Detail*\"\n    />\n  </div>\n  <div class=\"row\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"fileUpload.click()\">\n      File Upload\n    </button>\n    {{ filename }}\n  </div>\n  <div class=\"row\">\n    <!-- <label for=\"imageUrl\">Upload Image</label> -->\n    <input\n      type=\"file\"\n      style=\"display: none;\"\n      id=\"imageUrl\"\n      class=\"form-control\"\n      (change)=\"imageChanged($event)\"\n      #fileUpload\n    />\n  </div>\n  <button type=\"submit\" [disabled]=\"!this.formgroup.valid\">Create Poll</button>\n</form>\n"

/***/ }),

/***/ "./src/app/client/client-root/request-poll/request-poll.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/client/client-root/request-poll/request-poll.component.ts ***!
  \***************************************************************************/
/*! exports provided: RequestPollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestPollComponent", function() { return RequestPollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_serv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client-serv.service */ "./src/app/client/client-serv.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");






var RequestPollComponent = /** @class */ (function () {
    function RequestPollComponent(getClientService, toastr, auth) {
        this.getClientService = getClientService;
        this.toastr = toastr;
        this.auth = auth;
        this.string = '';
        this.formgroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(300)
            ]),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    RequestPollComponent.prototype.ngOnInit = function () { };
    RequestPollComponent.prototype.imageChanged = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.formgroup.get('imageUrl').setValue(file);
            this.filename = file.name;
        }
    };
    RequestPollComponent.prototype.onSubmit = function () {
        var _this = this;
        var requestPollInfo = this.formgroup.value;
        console.log(requestPollInfo);
        requestPollInfo.authorId = this.auth.userInfo().userId;
        this.getClientService.requestPoll(requestPollInfo).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                var formData = new FormData();
                formData.append('imageUrl', _this.formgroup.value.imageUrl);
                _this.getClientService
                    .addImageToPoll(data._id, formData)
                    .subscribe(function (response) {
                    if (response.status) {
                        _this.toastr.success('Poll Request Made');
                        _this.formgroup.reset();
                        _this.filename = '';
                    }
                });
            }
            else {
                _this.toastr.error(data.comment);
            }
        });
    };
    RequestPollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-poll',
            template: __webpack_require__(/*! ./request-poll.component.html */ "./src/app/client/client-root/request-poll/request-poll.component.html"),
            styles: [__webpack_require__(/*! ./request-poll.component.css */ "./src/app/client/client-root/request-poll/request-poll.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_client_serv_service__WEBPACK_IMPORTED_MODULE_3__["ClientServService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], RequestPollComponent);
    return RequestPollComponent;
}());



/***/ }),

/***/ "./src/app/client/client-root/request-story/request-story.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/client/client-root/request-story/request-story.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtcm9vdC9yZXF1ZXN0LXN0b3J5L3JlcXVlc3Qtc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/client/client-root/request-story/request-story.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/client/client-root/request-story/request-story.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formgroup\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"row\">\n    <input\n      type=\"text\"\n      formControlName=\"heading\"\n      class=\"form-control\"\n      placeholder=\"Heading*\"\n    />\n  </div>\n  <div class=\"row\">\n    <input\n      type=\"text\"\n      formControlName=\"detail\"\n      class=\"form-control\"\n      placeholder=\"Detail*\"\n    />\n  </div>\n  <div class=\"row\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"fileUpload.click()\">\n      File Upload\n    </button>\n    {{ filename }}\n  </div>\n\n  <div class=\"row\">\n    <input\n      type=\"file\"\n      style=\"display: none;\"\n      id=\"imageUrl\"\n      class=\"form-control\"\n      (change)=\"imageChanged($event)\"\n      #fileUpload\n    />\n  </div>\n  <div class=\"row\">\n    <input\n      type=\"text\"\n      formControlName=\"storyUrl\"\n      class=\"form-control\"\n      placeholder=\"Story Url\"\n    />\n  </div>\n  <button type=\"submit\" [disabled]=\"!this.formgroup.valid\">Create Poll</button>\n</form>\n"

/***/ }),

/***/ "./src/app/client/client-root/request-story/request-story.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/client/client-root/request-story/request-story.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RequestStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestStoryComponent", function() { return RequestStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_serv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client-serv.service */ "./src/app/client/client-serv.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var RequestStoryComponent = /** @class */ (function () {
    function RequestStoryComponent(getClientService, auth, toastr) {
        this.getClientService = getClientService;
        this.auth = auth;
        this.toastr = toastr;
        this.formgroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            heading: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)
            ]),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            storyUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    RequestStoryComponent.prototype.ngOnInit = function () { };
    RequestStoryComponent.prototype.imageChanged = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.formgroup.get('imageUrl').setValue(file);
            this.filename = file.name;
        }
    };
    RequestStoryComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('heading', this.formgroup.value.heading);
        formData.append('detail', this.formgroup.value.detail);
        formData.append('imageUrl', this.formgroup.value.imageUrl);
        formData.append('storyUrl', this.formgroup.value.storyUrl);
        formData.append('authorId', this.auth.userInfo().userId);
        this.getClientService.requestStory(formData).subscribe(function (data) {
            if (!data.status) {
                _this.toastr.error('Recharge ur Stories');
            }
            else {
                _this.toastr.success('Request Generated');
            }
            _this.formgroup.reset();
            _this.filename = '';
        });
    };
    RequestStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request-story',
            template: __webpack_require__(/*! ./request-story.component.html */ "./src/app/client/client-root/request-story/request-story.component.html"),
            styles: [__webpack_require__(/*! ./request-story.component.css */ "./src/app/client/client-root/request-story/request-story.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_client_serv_service__WEBPACK_IMPORTED_MODULE_3__["ClientServService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RequestStoryComponent);
    return RequestStoryComponent;
}());



/***/ }),

/***/ "./src/app/client/client-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/client/client-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_root_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-root/pricing/pricing.component */ "./src/app/client/client-root/pricing/pricing.component.ts");
/* harmony import */ var _client_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-root/profile/profile.component */ "./src/app/client/client-root/profile/profile.component.ts");
/* harmony import */ var _client_root_request_poll_request_poll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-root/request-poll/request-poll.component */ "./src/app/client/client-root/request-poll/request-poll.component.ts");
/* harmony import */ var _client_root_request_story_request_story_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-root/request-story/request-story.component */ "./src/app/client/client-root/request-story/request-story.component.ts");
/* harmony import */ var _client_root_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-root/make-payment/make-payment.component */ "./src/app/client/client-root/make-payment/make-payment.component.ts");
/* harmony import */ var _client_root_payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-root/payment-status/payment-status.component */ "./src/app/client/client-root/payment-status/payment-status.component.ts");









var routes = [
    { path: 'pricing', component: _client_root_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_3__["PricingComponent"] },
    {
        path: 'profile',
        component: _client_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    },
    {
        path: 'requestpoll',
        component: _client_root_request_poll_request_poll_component__WEBPACK_IMPORTED_MODULE_5__["RequestPollComponent"]
    },
    {
        path: 'requeststory',
        component: _client_root_request_story_request_story_component__WEBPACK_IMPORTED_MODULE_6__["RequestStoryComponent"]
    },
    {
        path: 'makepayment',
        component: _client_root_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_7__["MakePaymentComponent"]
    },
    {
        path: 'paymentstatus/:status',
        component: _client_root_payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_8__["PaymentStatusComponent"]
    }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/client/client-serv.service.ts":
/*!***********************************************!*\
  !*** ./src/app/client/client-serv.service.ts ***!
  \***********************************************/
/*! exports provided: ClientServService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientServService", function() { return ClientServService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../key */ "./key.ts");




var ClientServService = /** @class */ (function () {
    function ClientServService(http) {
        this.http = http;
    }
    ClientServService.prototype.requestPoll = function (data) {
        return this.http.post(_key__WEBPACK_IMPORTED_MODULE_3__["environment"].API + '/client/requestpoll', data);
    };
    ClientServService.prototype.requestStory = function (data) {
        return this.http.post(_key__WEBPACK_IMPORTED_MODULE_3__["environment"].API + '/client/requeststory', data);
    };
    ClientServService.prototype.addImageToPoll = function (id, uploads) {
        return this.http.post(_key__WEBPACK_IMPORTED_MODULE_3__["environment"].API + '/client/addpollimage/' + id, uploads);
    };
    ClientServService.prototype.makePayment = function (transactionInfo) {
        return this.http.post(_key__WEBPACK_IMPORTED_MODULE_3__["environment"].API + '/client/startpayment', transactionInfo);
    };
    ClientServService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientServService);
    return ClientServService;
}());



/***/ }),

/***/ "./src/app/client/client.module.ts":
/*!*****************************************!*\
  !*** ./src/app/client/client.module.ts ***!
  \*****************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _client_root_request_story_request_story_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-root/request-story/request-story.component */ "./src/app/client/client-root/request-story/request-story.component.ts");
/* harmony import */ var _client_root_request_poll_request_poll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-root/request-poll/request-poll.component */ "./src/app/client/client-root/request-poll/request-poll.component.ts");
/* harmony import */ var _client_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-root/profile/profile.component */ "./src/app/client/client-root/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_root_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-root/pricing/pricing.component */ "./src/app/client/client-root/pricing/pricing.component.ts");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/client/client-routing.module.ts");
/* harmony import */ var _client_root_client_root_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-root/client-root.component */ "./src/app/client/client-root/client-root.component.ts");
/* harmony import */ var _client_root_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client-root/make-payment/make-payment.component */ "./src/app/client/client-root/make-payment/make-payment.component.ts");
/* harmony import */ var _client_root_payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-root/payment-status/payment-status.component */ "./src/app/client/client-root/payment-status/payment-status.component.ts");












var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _client_root_request_story_request_story_component__WEBPACK_IMPORTED_MODULE_3__["RequestStoryComponent"],
                _client_root_request_poll_request_poll_component__WEBPACK_IMPORTED_MODULE_4__["RequestPollComponent"],
                _client_root_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _client_root_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _client_root_client_root_component__WEBPACK_IMPORTED_MODULE_9__["ClientRootComponent"],
                _client_root_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_10__["MakePaymentComponent"],
                _client_root_payment_status_payment_status_component__WEBPACK_IMPORTED_MODULE_11__["PaymentStatusComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _client_routing_module__WEBPACK_IMPORTED_MODULE_8__["ClientRoutingModule"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map