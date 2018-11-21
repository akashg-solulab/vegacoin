webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/affiliate/affiliate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"utf-8\";\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nh1,h2,h3,h4,h5,h6,p {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none !important;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  overflow-x: hidden;\n  width: 100vw;\n}\n\nhtml,body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.referral-container {\n  background-color: #1db8d3;\n/*   margin-top: -139px; */\n  color: white;\n  text-align: center;\n}\n\n.referral-container h1 {\n  margin-top: 50px;\n  font-weight: 700;\n  font-size: 48px;\n}\n\n.referral-container span {\n  color: rgba(255, 255, 255, 1);\n  border-bottom: 2px solid white;\n}\n\n.referral-container h3 {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.referral-container img {\n  width: 70vw;\n  margin-top: 30px;\n  max-width: 1000px;\n}\n\n.referral-container div {\n  margin: 0 auto;\n}\n\n.referral-icons {\n  margin:  0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  text-align:  center;\n}\n\n.referral-icons i {\n  font-size: 8vw;\n  opacity:  0.8;\n}\n\n.referral-info {\n  width: 70vw;\n  max-width: 1000px;\n  margin-top: 20px;\n  font-size: 18px;\n  margin: 0 auto;\n}\n\n.referral-info i {\n  color: #24537f;\n}\n\n.referral-info p {\n  color: #595959 !important;\n}\n\n.referral-info h2 {\n  font-size: 32px;\n  font-weight: 600;\n  color: black;\n}\n\n.referral-info h6 {\n  font-size: 20px;\n  margin: 16px;\n  color: black;\n}\n\n.referral-info h3 {\n  font-size: 28px;\n  font-weight: 700;\n  color: black;\n}\n\n.referral-box {\n  width: 800px;\n  -webkit-box-shadow: 0px 0px 18px #CCCCCC;\n          box-shadow: 0px 0px 18px #CCCCCC;\n  margin: 40px auto;\n  padding: 20px;\n  text-align: center;\n  border-radius: 2px;\n}\n\n.referral-button {\n  background-color: #fd8a66;\n  color: white;\n  width: 220px;\n  padding: 10px;\n  border-radius: 3px;\n  margin: 0 auto;\n  -webkit-box-shadow: 1px 1px 1px #CCCCCC;\n          box-shadow: 1px 1px 1px #CCCCCC;\n}\n\n.referral-button:hover {\n  cursor: pointer;\n  background-color: #D17356;\n}\n\n.referral-button:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: #BE684F;\n}\n\n.affiliate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.affiliate a {\n  color: #2C62F1;\n}\n\n.affiliate a:hover {\n  color: #1B46C1;\n  text-decoration: underline !important;\n}\n\n/* Media Queries */\n\n@media only screen and (max-width: 979px) {\n  .referral-box {\n    width: 80vw;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .referral-info {\n    width: 90vw;\n  }\n\n  .sign-up p {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .referral-container {\n    margin-top: -35px !important;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/affiliate/affiliate.component.html":
/***/ (function(module, exports) {

module.exports = "<app-homepage-header></app-homepage-header>\n\n  <div class=\"container-fluid referral-container\">\n    <h1>Affiliate Program</h1>\n    <br>\n    <div class=\"container\">\n      <h3>Refer your friends and earn <span>7%</span> on their contributions.</h3>\n    </div>\n    <img src=\"../../assets/referral.png\" alt=\"Referral Directions\">\n  </div>\n\n  <div class=\"container referral-info\">\n    <br>\n    <p>Welcome to the Clicktool referral program. Join today to help get the word out about Clicktool. This is a fantastic opportunity to earn a <b>7%</b> commission on purchases made by people you refer.</p>\n    <br>\n    <h2>How do you want to be paid?</h2>\n    <br>\n    <p>You can choose to be paid in ETH or Clickcoin. Let us break down the process for you:</p>\n    <br>\n    <h6><i class=\"fa fa-check\"></i>&nbsp;&nbsp;<b>Sign up for our affiliate program and receive a referral link.</b></h6>\n    <h6><i class=\"fa fa-check\"></i>&nbsp;&nbsp;<b>Send your referral link to your friends.</b></h6>\n    <h6><i class=\"fa fa-check\"></i>&nbsp;&nbsp;<b>When your friend uses your referral link, they register for the crowdsale and get assigned to you.</b></h6>\n    <br>\n    <h3>EXAMPLE:</h3>\n    <br>\n    <h6><i class=\"fa fa-check\"></i>&nbsp;&nbsp;<b>One of your referrals purchases 7,500 Clickcoins during our Crowdsale for a total of 1 ETH.</b></h6>\n    <h6><i class=\"fa fa-check\"></i>&nbsp;&nbsp;<b>Within 2 weeks of the end of the Crowdsale, we’ll send you 0.07 ETH or 525 Clickcoins - your choice!</b></h6>\n  </div>\n\n  <div class=\"referral-box\">\n    <h3>Sign up and start earning today.</h3>\n    <br>\n    <a href=\"https://clicktool.postaffiliatepro.com/affiliates/signup.php#SignupForm\" target=\"_blank\">\n      <div class=\"referral-button\">\n      <h4>GET REFERRAL LINK</h4>\n    </div>\n    </a>\n    <br>\n    <div class=\"affiliate\">\n      <p>Already an Affiliate?&nbsp;</p>\n      <a href=\"https://clicktool.postaffiliatepro.com/affiliates/login.php#login\" target=\"_blank\">Log In</a>\n    </div>\n  </div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/affiliate/affiliate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AffiliateComponent = /** @class */ (function () {
    function AffiliateComponent() {
    }
    AffiliateComponent.prototype.ngOnInit = function () {
    };
    AffiliateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-affiliate',
            template: __webpack_require__("../../../../../src/app/affiliate/affiliate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/affiliate/affiliate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AffiliateComponent);
    return AffiliateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http, app) {
        this.http = http;
        this.app = app;
        this.apiUrl = "http://18.221.203.247/api";
        this.params = {};
        this.options = {};
        this.id = "";
    }
    ApiService.prototype.setInstanceId = function (id) {
        this.id = id;
    };
    ApiService.prototype.fire = function (method, auth, ignoreRole, callback) {
        if (auth === void 0) { auth = false; }
        return this.sendRequest(method, auth, ignoreRole);
    };
    ApiService.prototype.sendRequest = function (method, auth, ignoreRole) {
        if (auth === void 0) { auth = false; }
        var m;
        var instance = this.instanceName;
        if (!ignoreRole) {
            if (this.app.isAdmin()) {
                instance = instance;
            }
            else if (this.app.isOwner()) {
                instance = "Members/" + this.app.getUserId() + "/" + instance;
            }
        }
        var url = this.apiUrl + "/" + instance;
        if (this.id) {
            url = url + "/" + this.id;
        }
        this.url = url;
        if (this.filter) {
            url = this.url + "?" + this.filter;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]();
        if (auth) {
            headers = this.createAuthorizationHeader(headers);
        }
        this.options["headers"] = headers;
        switch (method) {
            case 2 /* DELETE */:
                m = this.http.delete(url, this.options);
                break;
            case 0 /* CREATE */:
                m = this.http.post(url, this.params, this.options);
                break;
            case 1 /* UPDATE */:
                m = this.http.put(url, this.params, this.options);
                break;
            case 3 /* GET */:
                m = this.http.get(url, this.options);
                break;
            default: break;
        }
        return m;
    };
    ApiService.prototype.createAuthorizationHeader = function (headers) {
        return headers.set('Authorization', this.app.getAccessToken());
    };
    ApiService.prototype.setInstanceName = function (instanceName) {
        this.instanceName = instanceName;
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet (activate)=\"scrollToTop()\"></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.host = "http://18.221.203.247";
        this.bucketUrl = 'https://s3-us-west-1.amazonaws.com/clicktooluploads/';
        this.apiUrl = this.host + "/api";
        this.isMenuOpen = false;
        this.cookieService = new __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */](document);
    }
    AppComponent.prototype.getUserId = function () {
        if (this.getSession()) {
            return this.getSession()["userId"];
        }
        return null;
    };
    AppComponent.prototype.getUserName = function () {
        if (this.getMember()) {
            return this.getMember()["username"];
        }
        return null;
    };
    AppComponent.prototype.getSession = function () {
        if (this.cookieService.check("session")) {
            return JSON.parse(this.cookieService.get("session"));
        }
    };
    AppComponent.prototype.getMember = function () {
        if (this.cookieService.check("member")) {
            return JSON.parse(this.cookieService.get("member"));
        }
    };
    AppComponent.prototype.getAccessToken = function () {
        if (this.getSession()) {
            return this.getSession()["id"];
        }
        return null;
    };
    AppComponent.prototype.getUserRole = function () {
        if (!this.getSession()) {
            return null;
        }
        return this.getSession()["user"]["role"];
    };
    AppComponent.prototype.isAdmin = function () {
        if (this.getUserRole() == "admin") {
            return true;
        }
        return false;
    };
    AppComponent.prototype.isOwner = function () {
        if (this.getUserRole() == "owner") {
            return true;
        }
        return false;
    };
    AppComponent.prototype.isTeamMember = function () {
        if (this.getUserRole() == "teammember") {
            return true;
        }
        return false;
    };
    AppComponent.prototype.getTeam = function () {
        return JSON.parse(this.cookieService.get("team"));
    };
    AppComponent.prototype.getMemberStorage = function () {
        return JSON.parse(this.cookieService.get("member"));
    };
    AppComponent.prototype.isLoggedIn = function () {
        if (this.getSession()) {
            return true;
        }
        return false;
    };
    AppComponent.prototype.scrollToTop = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DemoMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__support_support_component__ = __webpack_require__("../../../../../src/app/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bounty_bounty_component__ = __webpack_require__("../../../../../src/app/bounty/bounty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_agreements_agreements_component__ = __webpack_require__("../../../../../src/app/signup/agreements/agreements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_account_info_account_info_component__ = __webpack_require__("../../../../../src/app/signup/account-info/account-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_contribution_contribution_component__ = __webpack_require__("../../../../../src/app/signup/contribution/contribution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_common_uploader_uploader_component__ = __webpack_require__("../../../../../src/app/shared/common/uploader/uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup_identification_identification_component__ = __webpack_require__("../../../../../src/app/signup/identification/identification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_common_dashboard_header_dashboard_header_component__ = __webpack_require__("../../../../../src/app/shared/common/dashboard-header/dashboard-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_common_dashboard_nav_dashboard_nav_component__ = __webpack_require__("../../../../../src/app/shared/common/dashboard-nav/dashboard-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__transactions_transactions_component__ = __webpack_require__("../../../../../src/app/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__password_password_component__ = __webpack_require__("../../../../../src/app/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_http_interceptor_service_service__ = __webpack_require__("../../../../../src/app/shared/services/http-interceptor-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_error_handler_service_service__ = __webpack_require__("../../../../../src/app/shared/services/error-handler-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_guards_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_guards_is_logged_in_guard__ = __webpack_require__("../../../../../src/app/shared/guards/is-logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__homepage_shared_homepage_header_homepage_header_component__ = __webpack_require__("../../../../../src/app/homepage/shared/homepage-header/homepage-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_forms_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/shared/forms/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_common_alert_alert_component__ = __webpack_require__("../../../../../src/app/shared/common/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_directives_if_admin_directive__ = __webpack_require__("../../../../../src/app/shared/directives/if-admin.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__documents_documents_component__ = __webpack_require__("../../../../../src/app/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__password_reset_password_reset_component__ = __webpack_require__("../../../../../src/app/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_common_text_action_text_action_component__ = __webpack_require__("../../../../../src/app/shared/common/text-action/text-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__update_password_update_password_component__ = __webpack_require__("../../../../../src/app/update-password/update-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__homepage_shared_machine_animation_machine_animation_component__ = __webpack_require__("../../../../../src/app/homepage/shared/machine-animation/machine-animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__homepage_shared_timelime_timelime_component__ = __webpack_require__("../../../../../src/app/homepage/shared/timelime/timelime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__homepage_shared_timelime_yellowbox_yellowbox_component__ = __webpack_require__("../../../../../src/app/homepage/shared/timelime/yellowbox/yellowbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__homepage_shared_small_screen_small_screen_component__ = __webpack_require__("../../../../../src/app/homepage/shared/small-screen/small-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__affiliate_affiliate_component__ = __webpack_require__("../../../../../src/app/affiliate/affiliate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__wire_info_wire_info_component__ = __webpack_require__("../../../../../src/app/wire-info/wire-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__homepage_shared_large_gear_large_gear_component__ = __webpack_require__("../../../../../src/app/homepage/shared/large-gear/large-gear.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__homepage_benefit_benefit_component__ = __webpack_require__("../../../../../src/app/homepage/benefit/benefit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__homepage_employee_employee_component__ = __webpack_require__("../../../../../src/app/homepage/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__shared_common_qr_card_qr_card_component__ = __webpack_require__("../../../../../src/app/shared/common/qr-card/qr-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__shared_common_lg_txt_w_button_lg_txt_w_button_component__ = __webpack_require__("../../../../../src/app/shared/common/lg-txt-w-button/lg-txt-w-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__shared_common_countdown_countdown_component__ = __webpack_require__("../../../../../src/app/shared/common/countdown/countdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__shared_directives_equal_height_col_directive__ = __webpack_require__("../../../../../src/app/shared/directives/equal-height-col.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__car_car_component__ = __webpack_require__("../../../../../src/app/car/car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__shared_common_search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/shared/common/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__transactions_transaction_table_transaction_table_component__ = __webpack_require__("../../../../../src/app/transactions/transaction-table/transaction-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__shared_common_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/shared/common/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__shared_common_exchange_rate_exchange_rate_component__ = __webpack_require__("../../../../../src/app/shared/common/exchange-rate/exchange-rate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__shared_common_video_card_video_card_component__ = __webpack_require__("../../../../../src/app/shared/common/video-card/video-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__transactions_transaction_table_transaction_row_transaction_row_component__ = __webpack_require__("../../../../../src/app/transactions/transaction-table/transaction-row/transaction-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__shared_common_form_toggler_form_toggler_component__ = __webpack_require__("../../../../../src/app/shared/common/form-toggler/form-toggler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__shared_directives_form_toggler_close_directive__ = __webpack_require__("../../../../../src/app/shared/directives/form-toggler-close.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__settings_security_security_component__ = __webpack_require__("../../../../../src/app/settings/security/security.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__settings_settings_nav_settings_nav_component__ = __webpack_require__("../../../../../src/app/settings/settings-nav/settings-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__settings_wallet_settings_wallet_settings_component__ = __webpack_require__("../../../../../src/app/settings/wallet-settings/wallet-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__shared_common_button_to_form_button_to_form_component__ = __webpack_require__("../../../../../src/app/shared/common/button-to-form/button-to-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__shared_common_sidebar_icon_sidebar_icon_component__ = __webpack_require__("../../../../../src/app/shared/common/sidebar-icon/sidebar-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__shared_common_signup_modal_signup_modal_component__ = __webpack_require__("../../../../../src/app/shared/common/signup-modal/signup-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__shared_guards_is_id_verified_guard__ = __webpack_require__("../../../../../src/app/shared/guards/is-id-verified.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__verify_verify_component__ = __webpack_require__("../../../../../src/app/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72_ngx_google_places_autocomplete__ = __webpack_require__("../../../../ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_72_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__shared_common_form_input_form_input_component__ = __webpack_require__("../../../../../src/app/shared/common/form-input/form-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__shared_directives_input_animation_directive__ = __webpack_require__("../../../../../src/app/shared/directives/input-animation.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__shared_directives_dob_input_directive__ = __webpack_require__("../../../../../src/app/shared/directives/dob-input.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__shared_ct_preloader_ct_preloader_component__ = __webpack_require__("../../../../../src/app/shared/ct-preloader/ct-preloader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__training_vor_vor_component__ = __webpack_require__("../../../../../src/app/training/vor/vor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































































var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_74__angular_material__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_74__angular_material__["b" /* MatFormFieldModule */],
            ],
            declarations: []
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_agreements_agreements_component__["a" /* AgreementsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__support_support_component__["a" /* SupportComponent */],
                __WEBPACK_IMPORTED_MODULE_6__privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_account_info_account_info_component__["a" /* AccountInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signup_contribution_contribution_component__["a" /* ContributionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_common_uploader_uploader_component__["a" /* UploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__signup_identification_identification_component__["a" /* IdentificationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__shared_common_dashboard_header_dashboard_header_component__["a" /* DashboardHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_common_dashboard_nav_dashboard_nav_component__["a" /* DashboardNavComponent */],
                __WEBPACK_IMPORTED_MODULE_19__transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__password_password_component__["a" /* PasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_30__homepage_shared_homepage_header_homepage_header_component__["a" /* HomepageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_31__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_32__shared_forms_login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_33__shared_common_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shared_directives_if_admin_directive__["a" /* IfAdminDirective */],
                __WEBPACK_IMPORTED_MODULE_36__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_37__documents_documents_component__["a" /* DocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__password_reset_password_reset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_39__shared_common_text_action_text_action_component__["a" /* TextActionComponent */],
                __WEBPACK_IMPORTED_MODULE_40__update_password_update_password_component__["a" /* UpdatePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_41__homepage_shared_machine_animation_machine_animation_component__["a" /* MachineAnimationComponent */],
                __WEBPACK_IMPORTED_MODULE_42__homepage_shared_timelime_timelime_component__["a" /* TimelimeComponent */],
                __WEBPACK_IMPORTED_MODULE_43__homepage_shared_timelime_yellowbox_yellowbox_component__["a" /* YellowboxComponent */],
                __WEBPACK_IMPORTED_MODULE_44__homepage_shared_small_screen_small_screen_component__["a" /* SmallScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_45__affiliate_affiliate_component__["a" /* AffiliateComponent */],
                __WEBPACK_IMPORTED_MODULE_46__wire_info_wire_info_component__["a" /* WireInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_47__homepage_shared_large_gear_large_gear_component__["a" /* LargeGearComponent */],
                __WEBPACK_IMPORTED_MODULE_48__homepage_benefit_benefit_component__["a" /* BenefitComponent */],
                __WEBPACK_IMPORTED_MODULE_49__homepage_employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_50__shared_common_qr_card_qr_card_component__["a" /* QrCardComponent */],
                __WEBPACK_IMPORTED_MODULE_51__shared_common_lg_txt_w_button_lg_txt_w_button_component__["a" /* LgTxtWButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_52__shared_common_countdown_countdown_component__["a" /* CountdownComponent */],
                __WEBPACK_IMPORTED_MODULE_53__shared_directives_equal_height_col_directive__["a" /* EqualHeightColDirective */],
                __WEBPACK_IMPORTED_MODULE_54__car_car_component__["a" /* CarComponent */],
                __WEBPACK_IMPORTED_MODULE_55__shared_common_search_bar_search_bar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_56__transactions_transaction_table_transaction_table_component__["a" /* TransactionTableComponent */],
                __WEBPACK_IMPORTED_MODULE_57__shared_common_timeline_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_58__shared_common_exchange_rate_exchange_rate_component__["a" /* ExchangeRateComponent */],
                __WEBPACK_IMPORTED_MODULE_59__shared_common_video_card_video_card_component__["a" /* VideoCardComponent */],
                __WEBPACK_IMPORTED_MODULE_60__transactions_transaction_table_transaction_row_transaction_row_component__["a" /* TransactionRowComponent */],
                __WEBPACK_IMPORTED_MODULE_61__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_62__shared_common_form_toggler_form_toggler_component__["a" /* FormTogglerComponent */],
                __WEBPACK_IMPORTED_MODULE_63__shared_directives_form_toggler_close_directive__["a" /* FormTogglerCloseDirective */],
                __WEBPACK_IMPORTED_MODULE_64__settings_security_security_component__["a" /* SecurityComponent */],
                __WEBPACK_IMPORTED_MODULE_65__settings_settings_nav_settings_nav_component__["a" /* SettingsNavComponent */],
                __WEBPACK_IMPORTED_MODULE_66__settings_wallet_settings_wallet_settings_component__["a" /* WalletSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_67__shared_common_button_to_form_button_to_form_component__["a" /* ButtonToFormComponent */],
                __WEBPACK_IMPORTED_MODULE_68__shared_common_sidebar_icon_sidebar_icon_component__["a" /* SidebarIconComponent */],
                __WEBPACK_IMPORTED_MODULE_69__shared_common_signup_modal_signup_modal_component__["a" /* SignupModalComponent */],
                __WEBPACK_IMPORTED_MODULE_71__verify_verify_component__["a" /* VerifyComponent */],
                __WEBPACK_IMPORTED_MODULE_75__shared_common_form_input_form_input_component__["a" /* FormInputComponent */],
                __WEBPACK_IMPORTED_MODULE_76__shared_directives_input_animation_directive__["a" /* InputAnimationDirective */],
                __WEBPACK_IMPORTED_MODULE_77__shared_directives_dob_input_directive__["a" /* DobInputDirective */],
                __WEBPACK_IMPORTED_MODULE_7__bounty_bounty_component__["a" /* BountyComponent */],
                __WEBPACK_IMPORTED_MODULE_78__shared_ct_preloader_ct_preloader_component__["a" /* CtPreloaderComponent */],
                __WEBPACK_IMPORTED_MODULE_79__training_vor_vor_component__["a" /* VorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_router__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_34_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_72_ngx_google_places_autocomplete__["GooglePlaceModule"],
                __WEBPACK_IMPORTED_MODULE_73__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                DemoMaterialModule,
                __WEBPACK_IMPORTED_MODULE_74__angular_material__["b" /* MatFormFieldModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__shared_services_member_service__["a" /* MemberService */],
                __WEBPACK_IMPORTED_MODULE_21__api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_28__shared_guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_29__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_27_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_70__shared_guards_is_id_verified_guard__["a" /* IsIdVerifiedGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_23__shared_services_http_interceptor_service_service__["a" /* HttpInterceptorServiceService */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_24__shared_services_error_handler_service_service__["a" /* ErrorHandlerService */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__affiliate_affiliate_component__ = __webpack_require__("../../../../../src/app/affiliate/affiliate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_support_component__ = __webpack_require__("../../../../../src/app/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bounty_bounty_component__ = __webpack_require__("../../../../../src/app/bounty/bounty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_agreements_agreements_component__ = __webpack_require__("../../../../../src/app/signup/agreements/agreements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_account_info_account_info_component__ = __webpack_require__("../../../../../src/app/signup/account-info/account-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_contribution_contribution_component__ = __webpack_require__("../../../../../src/app/signup/contribution/contribution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transactions_transactions_component__ = __webpack_require__("../../../../../src/app/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__password_password_component__ = __webpack_require__("../../../../../src/app/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__ = __webpack_require__("../../../../../src/app/shared/guards/is-logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__documents_documents_component__ = __webpack_require__("../../../../../src/app/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__password_reset_password_reset_component__ = __webpack_require__("../../../../../src/app/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_common_text_action_text_action_component__ = __webpack_require__("../../../../../src/app/shared/common/text-action/text-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__update_password_update_password_component__ = __webpack_require__("../../../../../src/app/update-password/update-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__wire_info_wire_info_component__ = __webpack_require__("../../../../../src/app/wire-info/wire-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__settings_security_security_component__ = __webpack_require__("../../../../../src/app/settings/security/security.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__settings_wallet_settings_wallet_settings_component__ = __webpack_require__("../../../../../src/app/settings/wallet-settings/wallet-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__verify_verify_component__ = __webpack_require__("../../../../../src/app/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__training_vor_vor_component__ = __webpack_require__("../../../../../src/app/training/vor/vor.component.ts");


























var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__["a" /* HomepageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'vor', component: __WEBPACK_IMPORTED_MODULE_25__training_vor_vor_component__["a" /* VorComponent */] },
    { path: 'affiliate', component: __WEBPACK_IMPORTED_MODULE_2__affiliate_affiliate_component__["a" /* AffiliateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'support', component: __WEBPACK_IMPORTED_MODULE_3__support_support_component__["a" /* SupportComponent */] },
    { path: 'bounty', component: __WEBPACK_IMPORTED_MODULE_4__bounty_bounty_component__["a" /* BountyComponent */] },
    { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_5__privacy_privacy_component__["a" /* PrivacyComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__signup_agreements_agreements_component__["a" /* AgreementsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'signup/account', component: __WEBPACK_IMPORTED_MODULE_7__signup_account_info_account_info_component__["a" /* AccountInfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'signup/contribution', component: __WEBPACK_IMPORTED_MODULE_8__signup_contribution_contribution_component__["a" /* ContributionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'signup/wire', component: __WEBPACK_IMPORTED_MODULE_20__wire_info_wire_info_component__["a" /* WireInfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'verify', component: __WEBPACK_IMPORTED_MODULE_24__verify_verify_component__["a" /* VerifyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_21__settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'settings/security', component: __WEBPACK_IMPORTED_MODULE_22__settings_security_security_component__["a" /* SecurityComponent */] },
    { path: 'settings/wallet', component: __WEBPACK_IMPORTED_MODULE_23__settings_wallet_settings_wallet_settings_component__["a" /* WalletSettingsComponent */] },
    { path: 'password/reset', component: __WEBPACK_IMPORTED_MODULE_17__password_reset_password_reset_component__["a" /* PasswordResetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'password/reset/checkemail', component: __WEBPACK_IMPORTED_MODULE_18__shared_common_text_action_text_action_component__["a" /* TextActionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'reset-password/:token', component: __WEBPACK_IMPORTED_MODULE_19__update_password_update_password_component__["a" /* UpdatePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_10__transactions_transactions_component__["a" /* TransactionsComponent */] },
    { path: 'user/:id/password', component: __WEBPACK_IMPORTED_MODULE_11__password_password_component__["a" /* PasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_15__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user/:id/documents', component: __WEBPACK_IMPORTED_MODULE_16__documents_documents_component__["a" /* DocumentsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "../../../../../src/app/bounty/bounty.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-content .active {\n    background: white;\n}\n.top-tab .nav {\n    background: #1db8d3;\n    border-bottom: 0;\n}\n.top-tab .nav li {\n    width: 20%;\n    text-align: center;\n    margin-bottom: 0;\n}\n.top-tab .nav a {\n    background: #1db8d3;\n    color: white;\n    font-size: 18px;\n    font-weight: 600;\n}\n.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n    background: #008ca5;\n    color: white;\n    border: 0;\n    margin-right: 0;\n}\n.top-tab .nav-tabs>li>a:hover {\n    border: 0;\n}\n.top-tab .tab-pane{\n    text-align: center;\n    padding: 15px 0;\n    background: #f5f6f5;\n}\n.tab-content .tab-pane .tab-container {\n    min-height: 315px;\n    margin-bottom: 150px;\n    background: #f5f6f5;\n}\n.top-tab .tab-pane h2 {\n    color: #15465d;\n}\n.top-tab .tab-pane p {\n    font-size: 14px;\n    font-weight: 500;\n}\n.tab1-elem {\n    width: 20%;\n    float: left;\n    position: relative;\n    top: 70px;\n    text-align: center;\n}\n.tab1-elem .inner-image{\n    width: 150px;\n}\n.avatar-gear {\n    width: 230px;\n    position: absolute;\n    left: -40px;\n    bottom: -30px;    \n}\n.inner-elem {\n    display: inline-block;\n    position: relative;\n}\n.tab1-elem h3 {\n    position: relative;\n    top: 30px;\n    color: #008ca5;\n}\n.tab1-elem:hover {\n    cursor: pointer;\n}\n.tab1-elem:hover .avatar-gear {\n    -webkit-animation: smallRotate 1s ease;\n            animation: smallRotate 1s ease;\n    transform: rotate(95deg);\n    -moz-transform: rotate(95deg);\n    -webkit-transform: rotate(95deg);\n    -o-transform: rotate(95deg);\n    -ms-transform: rotate(95deg);\n}\n@media only screen and (min-width: 768px) and (max-width: 1169px) {\n    .tab1-elem {\n        width: 33.33%;\n    }\n    .tab1-elem:nth-child(4), .tab1-elem:last-child {\n        padding-top: 100px;\n    }\n    .tab-content .tab-pane .tab-container {\n        height: 600px;\n        margin-bottom: 0;\n    }\n}\n@media only screen and (min-width: 460px) and (max-width: 767px) {\n    .tab1-elem {\n        width: 50%;\n    }\n    .tab1-elem:nth-child(3), .tab1-elem:nth-child(4), .tab1-elem:last-child {\n        padding-top: 100px;\n    }\n    .tab-content .tab-pane .tab-container {\n        height: 900px;\n        margin-bottom: 0;\n    }\n}\n@media only screen and (max-width: 469px) {\n    .tab1-elem {\n        width: 100%;\n    }\n    .tab1-elem:nth-child(2), .tab1-elem:nth-child(3), .tab1-elem:nth-child(4), .tab1-elem:last-child {\n        padding-top: 100px;\n    }\n    .tab-content .tab-pane .tab-container {\n        height: 1420px;\n        margin-bottom: 0;\n    }\n}\n@media only screen and (max-width: 991px) {\n    .top-tab .nav li{\n        width: 100%;\n        float: initial;\n    }\n}\n.tab-header {\n    min-height: 53px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bounty/bounty.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bounty\">\n  <app-homepage-header></app-homepage-header>\n\n  <div class=\"content\">\n    <div class=\"row top-tab\">\n      <div class=\"col-md-12 tab-container\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">Bounty Program</a></li>\n            <li><a data-toggle=\"tab\" href=\"#tab2\">Tab2</a></li>\n            <li><a data-toggle=\"tab\" href=\"#tab3\">Tab3</a></li>\n            <li><a data-toggle=\"tab\" href=\"#tab4\">Tab4</a></li>\n            <li><a data-toggle=\"tab\" href=\"#tab5\">Tab5</a></li>\n        </ul>\n\n        <div class=\"tab-content\">\n          <div id=\"tab1\" class=\"tab-pane fade in active\">\n            <div class=\"row\">\n              <div class=\"col-md-12 tab-header\">\n                <h2>CLICKTOOL BOUNTY CAMPAIGN</h2>\n                <p>Register for our official bounty program and earn CLC tokens</p>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12 tab-container\">\n                <a href=\"\">\n                  <div class=\"tab1-elem\">\n                    <div class=\"inner-elem\">\n                      <img class=\"avatar-gear\" src=\"../assets/avatar-gear.png\" alt=\"gear\">\n                      <img src=\"../assets/tab-social.png\" class=\"inner-image\" alt=\"Avatar\">\n                    </div>\n                    <h3>Social Media</h3>\n                  </div>\n                </a>\n                <a href=\"\">\n                  <div class=\"tab1-elem\">\n                    <div class=\"inner-elem\">\n                      <img class=\"avatar-gear\" src=\"../assets/avatar-gear.png\" alt=\"gear\">\n                      <img src=\"../assets/tab-sticky.png\" class=\"inner-image\" alt=\"Avatar\">\n                    </div>\n                    <h3>Content Creation</h3>\n                  </div>\n                </a>\n                <a href=\"\">\n                  <div class=\"tab1-elem\">\n                    <div class=\"inner-elem\">\n                      <img class=\"avatar-gear\" src=\"../assets/avatar-gear.png\" alt=\"gear\">\n                      <img src=\"../assets/tab-sound.png\" class=\"inner-image\" alt=\"Avatar\">\n                    </div>\n                    <h3>PR/Media Referral</h3>\n                  </div>\n                </a>\n                <a href=\"\">\n                  <div class=\"tab1-elem\">\n                    <div class=\"inner-elem\">\n                      <img class=\"avatar-gear\" src=\"../assets/avatar-gear.png\" alt=\"gear\">\n                      <img src=\"../assets/tab-forum.png\" class=\"inner-image\" alt=\"Avatar\">\n                    </div>\n                    <h3>Translation and Forum Moderation</h3>\n                  </div>\n                </a>\n                <a href=\"\">\n                  <div class=\"tab1-elem\">\n                    <div class=\"inner-elem\">\n                      <img class=\"avatar-gear\" src=\"../assets/avatar-gear.png\" alt=\"gear\">\n                      <img src=\"../assets/bitcoin.png\" class=\"inner-image\" alt=\"Avatar\">\n                    </div>\n                    <h3>Signature</h3>\n                  </div>   \n                </a>       \n              </div>\n            </div>\n          </div>\n\n          <div id=\"tab2\" class=\"tab-pane fade\">\n            <div class=\"row\">\n              <div class=\"col-md-12 tab-header\">\n                <h2>Tab 2</h2>\n              </div>\n            </div>\n            \n            <div class=\"row\">\n              <div class=\"col-md-12 tab-container\">\n\n              </div>\n            </div>\n          </div>\n\n          <div id=\"tab3\" class=\"tab-pane fade\">\n            <div class=\"row\">\n              <div class=\"col-md-12 tab-header\">\n                <h2>Tab 3</h2>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12 tab-container\">\n                \n              </div>\n            </div>\n          </div>          \n\n          <div id=\"tab4\" class=\"tab-pane fade\">\n            <div class=\"row\">\n              <div class=\"col-md-12 tab-header\">\n                <h2>Tab 4</h2>\n              </div>\n            </div>\n            \n            <div class=\"row\">\n              <div class=\"col-md-12 tab-container\">\n                \n              </div>\n            </div>\n          </div>\n\n          <div id=\"tab5\" class=\"tab-pane fade\">\n            <div class=\"row\">\n              <div class=\"col-md-12 tab-header\">\n                <h2>Tab 5</h2>\n              </div>\n            </div>\n            \n            <div class=\"row\">\n              <div class=\"col-md-12 tab-container\">\n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/bounty/bounty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BountyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BountyComponent = /** @class */ (function () {
    function BountyComponent() {
    }
    BountyComponent.prototype.ngOnInit = function () {
    };
    BountyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bounty',
            template: __webpack_require__("../../../../../src/app/bounty/bounty.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bounty/bounty.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BountyComponent);
    return BountyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/car/car.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car/car.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  car works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/car/car.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarComponent = /** @class */ (function () {
    function CarComponent() {
    }
    CarComponent.prototype.ngOnInit = function () {
    };
    CarComponent.prototype.moved = function () {
    };
    CarComponent.prototype.spoed = function () {
    };
    CarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-car',
            template: __webpack_require__("../../../../../src/app/car/car.component.html"),
            styles: [__webpack_require__("../../../../../src/app/car/car.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\n\n<div class=\"container-fluid npl npr brand-color-bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-white p-5 text-left\">\n        <div class=\"text-left\">\n          <h1 class=\"animated slideInDown\" style=\"font-size: 40px; margin-top: 137px; font-weight: 600;\">Crowdsale <span>Dashboard</span> </h1>\n        </div>\n      \n        <div class=\"container-fluid\" style=\"margin-bottom: 50px;\">\n          <app-timeline></app-timeline>        \n        </div>\n      </div>\n    </div>    \n  </div>\n  <img style=\"width: 100%;position: relative;margin-top: -57px;\" src=\"../../assets/wave2.png\">\n</div>\n\n<div class=\"container-fluid\" style=\"background-color: #f4fcff;\">\n  <div class=\"container\" style=\"margin-top: 40px;\">\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-md-2 text-center\" style=\"border-right: thin solid #9acce0;\">\n        <h3 style=\"font-weight: 300; color: #166888;\">\n          10 Million<br>\n          <span style=\"font-size: 16px;\">Soft cap</span>\n        </h3>\n      </div>\n      <div class=\"col-xs-6 col-md-2 text-center\" style=\"border-right: thin solid #9acce0;\">\n        <h3 style=\"font-weight: 300; color: #166888;\">\n          30 Million<br>\n          <span style=\"font-size: 16px;\">Hard cap</span>\n        </h3>\n      </div>      \n      <div class=\"col-xs-6 col-md-2 text-center\" style=\"border-right: thin solid #9acce0;\">\n        <h3 style=\"font-weight: 300; color: #166888;\">\n          445 M<br>\n          <span style=\"font-size: 16px;\">Total Supply</span>\n        </h3>\n      </div>\n      <div class=\"col-xs-6 col-md-2 text-center\" style=\"border-right: thin solid #9acce0;\">\n        <h3 style=\"font-weight: 300; color: #166888;\">\n          49k CLC<br>\n          <span style=\"font-size: 16px;\">Equals 1 ETH</span>\n        </h3>\n      </div>\n      <div class=\"col-xs-6 col-md-2 text-center\" style=\"border-right: thin solid #9acce0;\">\n        <h3 style=\"font-weight: 300; color: #166888;\">\n          60 Days<br>\n          <span style=\"font-size: 16px;\">ICO ends</span>\n        </h3>\n      </div>\n      <div class=\"col-xs-6 col-md-2 text-center\">\n        <h3 style=\"font-weight: 300; color: #166888;\">\n          ETH, BTC<br>\n          <span style=\"font-size: 16px;\">Currency</span>\n        </h3>\n      </div>                             \n    </div>\n    \n  </div>\n  <div class=\"container-fluid\" style=\"margin-top:40px; margin-bottom: 50px; max-width: 1200px;\">\n  <div appEqualHeightCol class=\"row\">\n    <div class=\"col col-sm-4 nrp padding-right-mobile\" style=\"margin-bottom: 15px;\">\n      <app-lg-txt-w-button\n      title=\"Balance\"\n      bodyText=\"0\"\n      subText=\"TOKENS\"\n      ></app-lg-txt-w-button>\n    </div>\n    <div class=\"col col-sm-4\" style=\"margin-bottom: 15px;\"> \n      <app-qr-card \n      title=\"Pay with Bitcoin\" \n      address=\"0x624D5050b12154Eb29BEc54B8faAeC3A3c01bDD6\" \n      minimum=\"Minimum payment 0.01 BTC\"\n      qrImageUrl=\"../../assets/qr.png\"\n      >\n      </app-qr-card>\n    </div>\n    <div class=\"col col-sm-4 nlp padding-left-mobile\" style=\"margin-bottom: 15px;\">\n      <app-qr-card \n      title=\"Pay with Ethereum\" \n      address=\"0x624D5050b12154Eb29BEc54B8faAeC3A3c01bDD6\" \n      minimum=\"Minimum payment 0.01 ETH\"\n      qrImageUrl=\"../../assets/qr.png\"\n      >\n      </app-qr-card>\n    </div>        \n  </div>\n\n\n  <div appEqualHeightCol class=\"row\">\n    <div class=\"col-sm-4 nrp padding-right-mobile\" style=\"margin-bottom: 15px;\">\n        <app-countdown></app-countdown>\n    </div>\n\n    <div class=\"col-sm-4\" style=\"margin-bottom: 15px;\">\n      <app-exchange-rate></app-exchange-rate>\n    </div>\n\n    <div class=\"col-sm-4 nlp padding-left-mobile\" style=\"margin-bottom: 15px;\">\n      <app-video-card></app-video-card>             \n    </div>\n  </div>\n\n\n<!--   <div class=\"row\" style=\"margin-bottom: 50px;\">\n    <div class=\"col-md-12\">\n      <h2 style=\"margin-top: 20px;\">Transactions</h2>\n      <div style=\"margin-top: 35px;\">\n        <app-transaction-table></app-transaction-table>\n      </div>\n    </div>\n  </div> -->\n\n  </div>\n</div>\n\n\n\n   \n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_vor_vor_component__ = __webpack_require__("../../../../../src/app/training/vor/vor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(vor) {
        this.vor = vor;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            var $car = $('.cars-bottom');
            $car.css({ "left": " " });
            $car.animate({ "right": -100 }, 5000);
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__training_vor_vor_component__["a" /* VorComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__training_vor_vor_component__["a" /* VorComponent */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/documents/documents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/documents/documents.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<table class=\"table\" style=\"margin-top: 50px;\">\n\t\t\t  <thead>\n\t\t\t    <tr>\n\t\t\t      <th width=\"600\" scope=\"col\">Preview</th>\t\n\t\t\t      <th scope=\"col\">Size</th>\n\t\t\t      <th>Download</th>\n\t\t\t    </tr>\n\t\t\t  </thead>\n\t\t\t  <tbody>\n\t\t\t    <tr *ngFor=\"let doc of documents.Contents\">\n\t\t\t      <td> <img width=\"500\" src=\"{{ app.bucketUrl }}{{ doc.Key }}\"> </td>\t\n\t\t\t      <td>{{ doc.Size }}</td>\n\t\t\t      <td>\n\t\t\t      \t<a href=\"{{ app.bucketUrl }}{{ doc.Key }}\" class=\"btn btn-primary\">Download</a>\n\t\t\t      </td>\n\t\t\t    </tr>\n\t\t\t  </tbody>\n\t\t\t</table>\t\n\t\t\t<h1 style=\"margin-top: 20px;\" *ngIf=\"documents && documents.Contents == 0\">No Documents</h1>\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/documents/documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent(activatedRoute, memberService, app) {
        this.activatedRoute = activatedRoute;
        this.memberService = memberService;
        this.app = app;
        this.documents = null;
    }
    DocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to router event 
        this.subscription = this.activatedRoute.params
            .subscribe(function (param) {
            var userId = param['id'];
            _this.memberService.getMemberDocuments(userId).subscribe(function (res) { return _this.afterGetDocuments(res); });
        });
    };
    DocumentsComponent.prototype.afterGetDocuments = function (res) {
        this.documents = res;
    };
    DocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__("../../../../../src/app/documents/documents.component.html"),
            styles: [__webpack_require__("../../../../../src/app/documents/documents.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/benefit/benefit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".featcont {\n  margin: 20px;\n  color: white;\n}\n\n.benefit-div {\n  max-width: 500px;\n}\n\n.benefit-div img {\n  max-height: 200px;\n}\n\n.featcont > h4 {\n  font-size: 18px;\n  font-weight: 800;\n  padding: 0;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n\n.featcont p {\n  font-family: 'Montserrat';\n  font-size: 16px;\n  line-height: 24px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/benefit/benefit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"benefit-div\">\n  <img src=\"{{ imageSrc }}\" alt=\"{{ imageAlt }}\">\n  <div class=\"featcont\">\n    <h4>{{ title }}</h4>\n    <p>{{ info }}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/benefit/benefit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenefitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BenefitComponent = /** @class */ (function () {
    function BenefitComponent() {
    }
    BenefitComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BenefitComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BenefitComponent.prototype, "subTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BenefitComponent.prototype, "info", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BenefitComponent.prototype, "imageSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BenefitComponent.prototype, "imageAlt", void 0);
    BenefitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-benefit',
            template: __webpack_require__("../../../../../src/app/homepage/benefit/benefit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/benefit/benefit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BenefitComponent);
    return BenefitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/employee/employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team-div {\n  position: relative;\n  margin: 20px auto;\n  /*background-color: white;*/\n  margin-top: 60px;\n  height: 250px;\n  text-align: center;\n  color: #2cbad3;\n  width: 220px;\n}\n\n.team-div h5 {\n  color: #B3B3B3;\n}\n\n.team-div:hover {\n  background-color: #2cb8d2;\n  color: white !important;\n  cursor: pointer;\n}\n\n.team-div:hover h5 {\n  color: white;\n}\n\n.team-div h1 {\n  color: white;\n}\n\n.team-div img {\n  height: 150px;\n}\n\n.employee {\n  width: 220px;\n  transition: -webkit-transform 0.3s;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.team-div:hover .employee {\n  transform: translate(0, -50px);\n  -moz-transform: translate(0, -50px);\n  -webkit-transform: translate(0, -50px);\n  -o-transform: translate(0, -50px);\n  -ms-transform: translate(0, -50px);\n}\n\n.team-div:hover .avatar-gear {\n  -webkit-animation: smallRotate 1s ease;\n          animation: smallRotate 1s ease;\n  transform: rotate(95deg);\n  -moz-transform: rotate(95deg);\n  -webkit-transform: rotate(95deg);\n  -o-transform: rotate(95deg);\n  -ms-transform: rotate(95deg);\n}\n\n.avatar-gear {\n  position: absolute;\n  height: 230px !important;\n  left: -5px;\n  top: -45px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"team-div\">\n  <div class=\"employee\">\n    <img class=\"avatar-gear\" src=\"../assets/avatar-gear.png\" alt=\"gear\">\n    <img src=\"{{ imageSrc }}\" alt=\"Avatar\">\n    <h3><br />{{ name }}</h3>\n    <h5>{{ role }}</h5>\n    <h1 *ngIf=\"icon\"><i class=\"fab fa-linkedin\"></i></h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmployeeComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmployeeComponent.prototype, "role", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmployeeComponent.prototype, "imageSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], EmployeeComponent.prototype, "icon", void 0);
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__("../../../../../src/app/homepage/employee/employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Top Section */\n\n.ie-warning {\n  width: 100vw;\n  background-color: #1db8d3;\n  color: white;\n  padding: 10px;\n  margin-bottom: -16px;\n}\n\n.dynamic-headline {\n  right: 11%;\n  top: 3%;\n  width: 35%;\n}\n\n.dynamic-headline-big {\n  position: absolute;\n}\n\n.dynamic-headline-mobile {\n  visibility: hidden;\n  width: 80vw;\n  margin: 0 auto;\n}\n\n.dynamic-headline a {\n  color: #205184;\n  border-right: 3px solid #1db8d3;\n  text-decoration: none;\n  font-size: 28px;\n}\n\n.dynamic-headline a:hover {\n  color: #205184;\n  cursor: default;\n}\n\n.dynamic-headline p {\n  font-size: 16px;\n  margin-top: 16px;\n}\n\n.dynamic-headline h1 {\n  height: 50px;\n}\n\n/* Top Animation Components */\n\n.top-design {\n  position: relative;\n  height: 800px;\n  width: 1200px;\n  left: 0;\n  right: 0;\n  top: 150px;\n  margin: auto;\n  z-index:  1;\n}\n\n.top-design img {\n  position: absolute;\n}\n\n.top-design div {\n  position: absolute;\n}\n\n.top-ani {\n  position: absolute;\n  top: -18%;\n  right: 0%;\n  width: 100%;\n  z-index: 2;\n}\n\n.blue-logo-gear {\n  position: absolute;\n  right: 65.1%;\n  top: 17.3%;\n  width: 6.1%;\n  z-index: 3;\n  animation: rotate 6s reverse linear infinite;\n}\n\n.top-design-logo {\n  right: 65.55%;\n  top: 18.8%;\n  width: 4.7%;\n  z-index: 4;\n}\n\n.blue-button-stay {\n  z-index: 3;\n  top: 8.93%;\n  width: 1.92%;\n  right: 76.35%;\n}\n\n.blue-buttons {\n  width: 1.9%;\n  top: 9%;\n  right: 76.35%;\n  z-index: 4;\n  -webkit-animation: blueButtons 5s ease infinite;\n          animation: blueButtons 5s ease infinite;\n  -webkit-filter: opacity(0%);\n          filter: opacity(0%);\n}\n\n.blue-buttons1 {\n  top: 8.93%;\n  width: 1.92%;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n\n.blue-buttons2 {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.blue-buttons3 {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n.blue-buttons4 {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n\n.blue-buttons5 {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n\n.exclamation {\n  position: absolute;\n  width: 5%;\n  right: 58.295%;\n  top: 14.7%;\n  z-index: 3;\n  -webkit-animation: exclamation 1s linear infinite;\n          animation: exclamation 1s linear infinite;\n}\n\n.stack {\n  width: 11%;\n  top: -2%;\n  right: 89.5%;\n  z-index: 1;\n  -webkit-animation: stack 2s ease infinite;\n          animation: stack 2s ease infinite;\n}\n\n.arrow-drop {\n  height: 11.4%;\n  width: 9%;\n  top: -10.6%;\n  right: 90.5%;\n  overflow: hidden;\n}\n\n.yellow-arrow {\n  width: 60%;\n  top: -70%;\n  right: 23%;\n  -webkit-animation: yellowArrow 2s linear infinite;\n          animation: yellowArrow 2s linear infinite;\n}\n\n.train-holder {\n  height: 5%;\n  width: 39.6%;\n  overflow: hidden;\n  right: 9.4%;\n  top: 27.6%;\n  z-index: 3;\n}\n\n.top-train {\n  width: 65%;\n  top: 21%;\n  right: -65%;\n  -webkit-animation: train 6s linear infinite;\n          animation: train 6s linear infinite;\n}\n\n.car-holder1 {\n  overflow: hidden;\n  height: 5%;\n  width: 16.8%;\n  top: 37.7%;\n  right: 29.45%;\n  z-index: 3;\n}\n\n.car1 {\n  width: 25%;\n  top: 24%;\n  right: -25%;\n  -webkit-animation: carOne 5s linear infinite;\n          animation: carOne 5s linear infinite;\n}\n\n.car-holder2 {\n  overflow: hidden;\n  height: 5%;\n  width: 21.75%;\n  top: 37.6%;\n  right: 2.65%;\n  z-index: 3;\n}\n\n.car2 {\n  width: 20%;\n  top: 12%;\n  right: 100%;\n  -webkit-animation: carTwo 4s linear infinite;\n          animation: carTwo 4s linear infinite;\n}\n\n.car-holder3 {\n  overflow: hidden;\n  height: 5%;\n  width: 32.25%;\n  top: 51.4%;\n  right: 18.55%;\n  z-index: 3;\n}\n\n.car3 {\n  width: 15%;\n  top: 5%;\n  right: 100%;\n  -webkit-animation: carTwo 6.5s linear infinite;\n          animation: carTwo 6.5s linear infinite;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.car4 {\n  width: 15%;\n  top: -4%;\n  right: 100%;\n  -webkit-animation: carTwo 6.5s linear infinite;\n          animation: carTwo 6.5s linear infinite;\n}\n\n.curvy-pipe-holder {\n  overflow: hidden;\n  height: 45%;\n  width: 10%;\n  right: -1.5%;\n  top: 2.6%;\n  z-index: 3;\n}\n\n.curvy-pipe {\n  width: 70%;\n  right: 7.5%;\n  top: 50%;\n  z-index: 3;\n  -webkit-animation: curvyPipe 6.2s ease infinite;\n          animation: curvyPipe 6.2s ease infinite;\n}\n\n.pink-pipe {\n  width: 35%;\n  right: 24%;\n  top: 15%;\n  z-index: 3;\n  -webkit-animation: pinkPipe 6.2s ease infinite;\n          animation: pinkPipe 6.2s ease infinite;\n}\n\n.knob {\n  width: 4%;\n  right: 22.88%;\n  top: -17%;\n  z-index: 3;\n  -webkit-animation: knob 7s ease infinite;\n          animation: knob 7s ease infinite;\n}\n\n.meter-needle {\n  width: 1.5%;\n  right: 63.3%;\n  top: -1.8%;\n  z-index: 3;\n  -webkit-animation: needle 3s ease infinite;\n          animation: needle 3s ease infinite;\n}\n\n.gray-fill-holder {\n  width: 5%;\n  height: 2.4%;\n  right: 66%;\n  top: 4.2%;\n  z-index: 3;\n  overflow: hidden;\n}\n\n.gray-fill {\n  width: 11.5%;\n  height: 140%;\n  right: 21.5%;\n  top: -1%;\n  z-index: 3;\n}\n\n.gray-fill1 {\n  right: 21.1%;\n  -webkit-animation: grayFill 4s ease-in-out infinite;\n          animation: grayFill 4s ease-in-out infinite;\n}\n\n.gray-fill2 {\n  right: 42.2%;\n  -webkit-animation: grayFill 5s ease-in-out infinite;\n          animation: grayFill 5s ease-in-out infinite;\n}\n\n.gray-fill3 {\n  right: 62.5%;\n  -webkit-animation: grayFill 4s ease-in-out infinite;\n          animation: grayFill 4s ease-in-out infinite;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  animation-direction: reverse;\n}\n\n.blue-slider {\n  width: 1.75%;\n  top: 16.7%;\n  z-index: 3;\n}\n\n.blue-slider1 {\n  right: 54.015%;\n  -webkit-animation: blueSlider 5s ease-in-out infinite;\n          animation: blueSlider 5s ease-in-out infinite;\n}\n\n.blue-slider2 {\n  right: 55.53%;\n  -webkit-animation: blueSlider 4s ease-in-out infinite;\n          animation: blueSlider 4s ease-in-out infinite;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  animation-direction: reverse;\n}\n\n.blue-slider3 {\n  right: 57.03%;\n  -webkit-animation: blueSlider 4s ease-in-out infinite;\n          animation: blueSlider 4s ease-in-out infinite;\n}\n\n.cloud-up-left {\n  width: 5%;\n  top: -2%;\n  right: 75%;\n  z-index: 3;\n  -webkit-animation: cloud 3s ease-in-out infinite;\n          animation: cloud 3s ease-in-out infinite;\n}\n\n.cloud-up-center {\n  width: 3%;\n  top: -1%;\n  right: 50%;\n  z-index: 3;\n  -webkit-animation: cloudTwo 3s ease-in-out infinite;\n          animation: cloudTwo 3s ease-in-out infinite;\n}\n\n.cloud-up-right {\n  width: 3%;\n  top: 1%;\n  right: 7%;\n  z-index: 3;\n  -webkit-animation: cloudTwo 3s ease-in-out infinite;\n          animation: cloudTwo 3s ease-in-out infinite;\n}\n\n.cloud-up-right2 {\n  width: 4%;\n  top: 2%;\n  right: 4%;\n  z-index: 3;\n  -webkit-animation: cloud 3s ease-in-out infinite;\n          animation: cloud 3s ease-in-out infinite;\n}\n\n.cloud-down-right {\n  width: 3%;\n  top: 42%;\n  right: 11.5%;\n  z-index: 3;\n  -webkit-animation: cloud 3s ease-in-out infinite;\n          animation: cloud 3s ease-in-out infinite;\n}\n\n.cloud-down-center {\n  width: 4%;\n  top: 43.3%;\n  right: 39%;\n  z-index: 3;\n  -webkit-animation: cloud 3s ease-in-out infinite;\n          animation: cloud 3s ease-in-out infinite;\n}\n\n.cloud-down-center2 {\n  width: 3%;\n  top: 42%;\n  right: 42.5%;\n  z-index: 3;\n  -webkit-animation: cloudTwo 3s ease-in-out infinite;\n          animation: cloudTwo 3s ease-in-out infinite;\n}\n\n.boat-holder1 {\n  height: 5%;\n  width: 5%;\n  right: 66.4%;\n  top: 62.6%;\n  overflow: hidden;\n  z-index: 3;\n}\n\n.boat-left {\n  width: 110%;\n  top: 23%;\n  right: -5%;\n  z-index: 3;\n  -webkit-animation: boat 2s ease-in-out infinite;\n          animation: boat 2s ease-in-out infinite;\n}\n\n.boat-holder2 {\n  height: 6%;\n  width: 5%;\n  right: 44.2%;\n  top: 61.8%;\n  overflow: hidden;\n  z-index: 3;\n}\n\n.boat-center {\n  width: 110%;\n  top: -7%;\n  right: -5%;\n  z-index: 3;\n  -webkit-animation: boat 2s ease-in-out infinite;\n          animation: boat 2s ease-in-out infinite;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n\n.boat-holder3 {\n  height: 6%;\n  width: 5%;\n  right: 25%;\n  top: 60.31%;\n  overflow: hidden;\n  z-index: 3;\n}\n\n.boat-right {\n  width: 110%;\n  top: 22%;\n  right: -5%;\n  z-index: 3;\n  -webkit-animation: boat 2s ease-in-out infinite;\n          animation: boat 2s ease-in-out infinite;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n\n.light-flash {\n  width: 0%;\n  height: 0%;\n  border-radius: 50%;\n  top: 11.4%;\n  z-index: 1;\n  opacity: 0;\n  -webkit-animation: lightFlash 2.5s ease infinite;\n          animation: lightFlash 2.5s ease infinite;\n}\n\n.red-flash {\n  -webkit-box-shadow: 0px 0px 50px 25px #fd8a66;\n          box-shadow: 0px 0px 50px 25px #fd8a66;\n  right: 84.1%;\n  background-color: #fd8a66;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n.yellow-flash {\n  -webkit-box-shadow: 0px 0px 50px 25px #fbc943;\n          box-shadow: 0px 0px 50px 25px #fbc943;\n  right: 88.4%;\n  background-color: #fbc943;\n}\n\n.red-button {\n  width: 2%;\n  top: 19.7%;\n  right: 88%;\n  z-index: 3;\n  -webkit-animation: button 7.5s ease-in-out infinite;\n          animation: button 7.5s ease-in-out infinite;\n}\n\n.yellow-button {\n  width: 2%;\n  top: 21.7%;\n  right: 87%;\n  z-index: 3;\n  -webkit-animation: button 7s ease-in-out infinite;\n          animation: button 7s ease-in-out infinite;\n  animation-direction: reverse;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n.machine-knob-red {\n  width: 2.2%;\n  right: 75.85%;\n  top: 31%;\n  z-index: 3;\n  -webkit-animation: knob 3s linear infinite;\n          animation: knob 3s linear infinite;\n}\n\n.machine-knob-yellow {\n  width: 2.2%;\n  right: 75.85%;\n  top: 33%;\n  z-index: 3;\n  -webkit-animation: knob 3.5s linear infinite;\n          animation: knob 3.5s linear infinite;\n  animation-direction: reverse;\n}\n\n.machine-knob-gray {\n  width: 2.2%;\n  right: 75.8%;\n  top: 35%;\n  z-index: 3;\n  -webkit-animation: knob 4s linear infinite;\n          animation: knob 4s linear infinite;\n}\n\n.analyzing {\n  width: 7%;\n  top: 34%;\n  right: 79.5%;\n  z-index: 3;\n  -webkit-animation: blink 0.8s ease infinite;\n          animation: blink 0.8s ease infinite;\n}\n\n.screen-icon {\n  width: 5%;\n  top: 35.5%;\n  right: 80.3%;\n  z-index: 3;\n  -webkit-animation: machineScreen 7.5s ease infinite;\n          animation: machineScreen 7.5s ease infinite;\n  opacity: 0;\n}\n\n.screen-icon2 {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s\n}\n\n.screen-icon3 {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s\n}\n\n.screen-icon4 {\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s\n}\n\n.screen-icon5 {\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s\n}\n\n.static-holder {\n  height: 11.5%;\n  width: 8.4%;\n  top: 32.25%;\n  right: 78.6%;\n\n  overflow: hidden;\n  z-index: 4;\n}\n\n.static {\n  width: 110%;\n  right: -5%;\n  top: -40%;\n  z-index: 4;\n  -webkit-animation: static 1.5s linear infinite;\n          animation: static 1.5s linear infinite;\n}\n\n.top-gear {\n  width: 3.2%;\n  top: 56.45%;\n\n  z-index: 3;\n  animation: rotate 5s reverse linear infinite;\n}\n\n.top-gear1 {\n  right: 81%;\n}\n\n.top-gear2 {\n  right: 77%;\n}\n\n.top-gear3 {\n  right: 73%;\n}\n\n.top-gear4 {\n  right: 69%;\n}\n\n.top-gear5 {\n  right: 65%;\n}\n\n.top-gear6 {\n  right: 61%;\n}\n\n.top-gear7 {\n  right: 57%;\n}\n\n.top-gear8 {\n  right: 53%;\n}\n\n.top-gear9 {\n  right: 49%;\n}\n\n.top-gear10 {\n  right: 45%;\n}\n\n.top-gear11 {\n  right: 41%;\n}\n\n.top-gear12 {\n  right: 37%;\n}\n\n.top-gear13 {\n  right: 33%;\n}\n\n.top-gear14 {\n  right: 29%;\n}\n\n.top-gear15 {\n  right: 25%;\n}\n\n.top-gear16 {\n  right: 21%;\n}\n\n.top-coin-holder {\n  width: 67.68%;\n  height: 10%;\n  right: 18.47%;\n  top: 47%;\n  z-index: 3;\n  overflow: hidden;\n}\n\n.top-coin {\n  width: 8%;\n  top: 10%;\n  right: 100%;\n}\n\n.top-coin1 {\n          -webkit-animation-name:  coin;\n                  animation-name:  coin;\n          -webkit-animation-duration: 10s;\n                  animation-duration: 10s;\n          -webkit-animation-timing-function: linear;\n                  animation-timing-function: linear;\n          -webkit-animation-delay: 1.25s;\n                  animation-delay: 1.25s;\n          -webkit-animation-iteration-count: infinite;\n                  animation-iteration-count: infinite;\n}\n\n.top-coin2 {\n          -webkit-animation-name:  coin;\n                  animation-name:  coin;\n          -webkit-animation-duration: 10s;\n                  animation-duration: 10s;\n          -webkit-animation-timing-function: linear;\n                  animation-timing-function: linear;\n          -webkit-animation-delay: 2.5s;\n                  animation-delay: 2.5s;\n          -webkit-animation-iteration-count: infinite;\n                  animation-iteration-count: infinite;\n\n}\n\n.top-coin3 {\n          -webkit-animation-name:  coin;\n                  animation-name:  coin;\n          -webkit-animation-duration: 10s;\n                  animation-duration: 10s;\n          -webkit-animation-timing-function: linear;\n                  animation-timing-function: linear;\n          -webkit-animation-delay: 3.75s;\n                  animation-delay: 3.75s;\n          -webkit-animation-iteration-count: infinite;\n                  animation-iteration-count: infinite;\n\n}\n\n.top-coin4 {\n          -webkit-animation-name:  coin;\n                  animation-name:  coin;\n          -webkit-animation-duration: 10s;\n                  animation-duration: 10s;\n          -webkit-animation-timing-function: linear;\n                  animation-timing-function: linear;\n          -webkit-animation-delay: 5s;\n                  animation-delay: 5s;\n          -webkit-animation-iteration-count: infinite;\n                  animation-iteration-count: infinite;\n\n}\n\n.top-coin5 {\n          -webkit-animation-name:  coin;\n                  animation-name:  coin;\n          -webkit-animation-duration: 10s;\n                  animation-duration: 10s;\n          -webkit-animation-timing-function: linear;\n                  animation-timing-function: linear;\n          -webkit-animation-delay: 6.25s;\n                  animation-delay: 6.25s;\n          -webkit-animation-iteration-count: infinite;\n                  animation-iteration-count: infinite;\n\n}\n\n.top-coin6 {\n          -webkit-animation-name:  coin;\n                  animation-name:  coin;\n          -webkit-animation-duration: 10s;\n                  animation-duration: 10s;\n          -webkit-animation-timing-function: linear;\n                  animation-timing-function: linear;\n          -webkit-animation-delay: 7.5s;\n                  animation-delay: 7.5s;\n          -webkit-animation-iteration-count: infinite;\n                  animation-iteration-count: infinite;\n\n}\n\n.top-coin7 {\n          -webkit-animation-name:  coin;\n                  animation-name:  coin;\n          -webkit-animation-duration: 10s;\n                  animation-duration: 10s;\n          -webkit-animation-timing-function: linear;\n                  animation-timing-function: linear;\n          -webkit-animation-delay: 8.75s;\n                  animation-delay: 8.75s;\n          -webkit-animation-iteration-count: infinite;\n                  animation-iteration-count: infinite;\n\n}\n\n.top-coin8 {\n          -webkit-animation-name:  coin;\n                  animation-name:  coin;\n          -webkit-animation-duration: 10s;\n                  animation-duration: 10s;\n          -webkit-animation-timing-function: linear;\n                  animation-timing-function: linear;\n          -webkit-animation-delay: 10s;\n                  animation-delay: 10s;\n          -webkit-animation-iteration-count: infinite;\n                  animation-iteration-count: infinite;\n\n}\n\n/* New Timer */\n\n.countdown {\n  width: 950px;\n  height: 250px;\n  position: relative;\n  margin: 0 auto;\n  top: -140px;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: -200px;\n}\n\n.countdown-right {\n  right: 3%;\n  width: 45%;\n  z-index: 2;\n}\n\n.countdown-left {\n  left: 3%;\n  width: 45%;\n  z-index: 2;\n}\n\n.countdown-wires {\n  right: 47%;\n  width: 5.2%;\n  top: 28px !important;\n  z-index: 1;\n}\n\n.countdown-handle {\n  width: 10%;\n  left: 0%;\n  top: 40px;\n  -webkit-animation: handle 6s ease-in-out infinite;\n          animation: handle 6s ease-in-out infinite;\n}\n\n.countdown h2 {\n  position: absolute;\n  text-align: center;\n  color: #24537f;\n  right: 59.7%;\n  top: 142px;\n  z-index: 4;\n}\n\n.countdown-btn {\n  height: 10px;\n  width: 10px;\n  border-radius: 5px;\n  z-index: 4;\n  position: absolute;\n  top: 20%;\n  -webkit-animation: countdownBtn 2.1s ease-in-out infinite;\n          animation: countdownBtn 2.1s ease-in-out infinite;\n}\n\n.countdown-btn-left {\n  right: 60%;\n  background-color: #fbc943;\n}\n\n.countdown-btn-middle {\n  right: 58%;\n  background-color: #fd8a66;\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\n\n.countdown-btn-right {\n  right: 56%;\n  background-color: #2cb8d1;\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n\n.countdown-chart {\n  height: 48px;\n  width: 56px;\n  overflow: hidden;\n  z-index: 4;\n  top: 48px;\n  right: 85.3%;\n}\n\n.countdown-chart img {\n  -webkit-animation: countdownChart 18s linear infinite;\n          animation: countdownChart 18s linear infinite;\n  left: 105%;\n}\n\n.countdown-chart img:nth-child(2) {\n  -webkit-animation-delay: 9s;\n          animation-delay: 9s;\n}\n\n.countdown-gear {\n  width: 11%;\n  top: 16px;\n  z-index: 3;\n  -webkit-animation: rotate 6s linear infinite;\n          animation: rotate 6s linear infinite;\n}\n\n.countdown-gear1 {\n  right: 5%;\n}\n\n.countdown-gear2 {\n  right: 15%;\n  animation-direction: reverse;\n}\n\n.countdown-gear3 {\n  right: 25%;\n}\n\n.countdown-gear4 {\n  right: 35%;\n  animation-direction: reverse;\n}\n\n.countdown p {\n  text-align: center;\n  font-size: 31px;\n}\n\n/*.countdown span {\n  font-size: 13px;\n  position: absolute;\n  top: 35px;\nmargin: 20px;\n}\n*/\n\n.countdown img {\n  position: absolute;\n}\n\n.countdown div {\n  position: absolute;\n}\n\n.count-machine {\n  width: 100%;\n}\n\n.timer-div {\n  top: 35px;\n  width: 90px;\n  height: 60px;\n  text-align: center;\n  z-index: 4;\n}\n\n.timer-text {\n  font-size: 14px !important;\n  margin-top: -10px;\n}\n\n#day-div {\n  right: 338px;\n}\n\n#hour-div {\n  right: 244px;\n}\n\n#minute-div {\n  right: 150px;\n}\n\n#second-div {\n  right: 54px;\n}\n\n/* About Section */\n\n.about {\n  margin-top: 40px !important;\n  margin: 60px;\n  font-weight: 300;\n  border-radius: 10px;\n  padding: 20px 20px 0px 20px;\n}\n\n.about p {\n  border: 1px solid #2cb8d1;\n  background-color: white;\n  border-radius: 20px;\n  padding: 10px;\n}\n\n.about-container {\n  height: 370px;\n}\n\n.wrench-container {\n  height: 330px;\n  position: relative;\n  overflow: hidden;\n  /* left: -100px;142 */\n}\n\n.wrench {\n  position: absolute;\n  height: 2000px;\n  transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -webkit-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  top: -820px;\n  left: -200px;\n  z-index: 2;\n}\n\n.multigray-circle {\n  position: absolute;\n  height: 105px;\n  top: 128px;\n  left: 110px;\n  z-index: 1;\n}\n\n#yellow-gear {\n  position: absolute;\n  z-index: -2 !important;\n  -webkit-filter: saturate(0%);\n          filter: saturate(0%);\n  left: 400px;\n  top: 30px;\n  height: 250px;\n  opacity: 0.2;\n}\n\n#pink-gear {\n  position: absolute;\n  z-index: -2 !important;\n  -webkit-filter: saturate(0%);\n          filter: saturate(0%);\n  left: -40px;\n  top: 170px;\n  height: 220px;\n  opacity: 0.1;\n}\n\n.white-lines {\n  position: absolute;\n  height: 250px;\n  width: 350px;\n  z-index: -1;\n}\n\n#whitelines1 {\n  left: -150px;\n  top: 0px;\n  transform: rotate(50deg);\n  -moz-transform: rotate(50deg);\n  -webkit-transform: rotate(50deg);\n  -o-transform: rotate(50deg);\n  -ms-transform: rotate(50deg);\n}\n\n#whitelines2 {\n  left: 330px;\n  top: 200px;\n  transform: rotate(120deg);\n  -moz-transform: rotate(120deg);\n  -webkit-transform: rotate(120deg);\n  -o-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n}\n\n.read-more {\n  height: 50px;\n  width: 230px;\n  border-radius: 25px;\n  background-color: #fe8962;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 16px;\n  border: none;\n}\n\n.read-more:hover {\n  background-color: #f36434 !important;\n}\n\n.read-more:active {\n  background-color: #1D7E8F !important;\n}\n\n/* Second Benefit */\n\n.second-container {\n  background-color: #1db8d3;\n  color: white;\n  padding: 50px;\n}\n\n.watch-video {\n  border: 1px solid white;\n  height: 50px;\n  width: 200px;\n  border-radius: 25px;\n  margin: 20px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.watch-video h5 {\n  font-weight: 300;\n  color: white;\n}\n\n.watch-video h3 {\n  color: white;\n}\n\n.watch-video:hover {\n  color: #1db8d3 !important;\n  background-color: white;\n  cursor: pointer;\n}\n\n.watch-video:hover h3  {\n  color: #1db8d3 !important;\n}\n\n.watch-video:hover h5  {\n  color: #1db8d3 !important;\n}\n\n/* Video Modal */\n\n.modal-backdrop.in {\n    filter: alpha(opacity=7);\n    opacity: 0.7;\n}\n\n.modal-content {\n    background: none;\n    border: 0; border-radius: 0; -webkit-box-shadow: none; box-shadow: none;\n}\n\n.modal-body {\n    padding: 0 25px 25px 25px;\n}\n\n.modal-header {\n    padding: 25px 25px 15px 25px;\n    text-align: right;\n}\n\n.modal-header, .modal-footer {\n    border: 0;\n}\n\n.modal-header .close {\n    float: none;\n    margin: 0;\n    font-size: 36px;\n    color: #fff;\n    font-weight: 300;\n    text-shadow: none;\n    opacity: 1;\n}\n\n/* Bonus Section */\n\n.bonus-section {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.gray-gear {\n  position: absolute;\n  opacity: 0.2;\n  -webkit-animation: rotate 50s linear infinite;\n          animation: rotate 50s linear infinite;\n  z-index: -1;\n}\n\n#gray-gear1 {\n  left: -320px;\n  top: -480px;\n}\n\n.bonus-section h3 {\n  font-size: 20px !important;\n}\n\n.bonus-section p {\n  font-weight: 300;\n}\n\n.bonus-vid {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n\n.bonus-item {\n  padding: 20px;\n}\n\n/* Experience Section */\n\n.top-divider {\n  width: 100vw;\n  margin-bottom: -5px;\n}\n\n.experience-container {\n  position: relative;\n  max-width: 1000px;\n  overflow: hidden;\n}\n\n.experience-container h4 {\n  margin-bottom: 10px;\n}\n\n#gray-gear2 {\n  right: -450px;\n  top: -450px;\n}\n\n.top-margin {\n  margin-top: 5%;\n}\n\n.info-row {\n  font-weight: 200;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.info-text {\n  width: 45vw;\n}\n\n.blue {\n  color: #1db8d3;\n}\n\n.info-row p {\n  color: black;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n.info-icon {\n  height: 15vw;\n  margin-right: 20px;\n}\n\n/* Benefits Section */\n\n.featuresdes {\n  background-color: #2cb8d1;\n  padding: 48px 0;\n  margin-bottom: -3px;\n  z-index: 6;\n  position: relative;\n}\n\n.featsecde {\n  color: #fff;\n  padding: 20px 0;\n  text-align: left;\n  display: inline;\n}\n\n.new-icons {\n  position: relative;\n  margin-left: 20px;\n  height: 120px;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.new-icons img {\n  position: absolute;\n  height: 100px;\n  width: 100px;\n}\n\n.benefit-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0 auto;\n  margin-top: -80px;\n  max-width: 1400px;\n}\n\n/* Chart Section */\n\n.chart-container {\n  text-align: center;\n}\n\n.chart-container h1 {\n  margin-top: 20px;\n  color: #24537f;\n}\n\n.chart-container h3 {\n  margin-top: 10px;\n  color: #7F7F7F;\n  font-weight: 300;\n}\n\n.chart-holder {\n  margin-top: 40px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.chart-holder h4 {\n  color: #24537f;\n  font-size: 24px;\n  z-index: 4;\n  position: relative;\n}\n\n.chart-line {\n  height: 55vw;\n  max-height: 1200px;\n  width: 1px;\n  background-color: #CCCCCC;\n  margin: 0 auto;\n}\n\n.chart1 {\n  position: relative;\n  width: 30vw;\n  height: 30vw;\n  max-width: 500px;\n  max-height: 500px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.chart2 {\n  position: relative;\n  width: 30vw;\n  height: 30vw;\n  max-width: 500px;\n  max-height: 500px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  margin-bottom: -45px;\n}\n\n#chart1a {\n  position: absolute;\n  height: 26%;\n  right: 32%;\n  top: 2%;\n}\n\n#chart1b {\n  position: absolute;\n  height: 40%;\n  top: 25%;\n  right: 45%;\n}\n\n#chart1c {\n  position: absolute;\n  height: 21%;\n  top: 41%;\n  right: 22%;\n}\n\n#chart1d {\n  position: absolute;\n  height: 16%;\n  top: 65%;\n  right: 50%;\n}\n\n#chart1e {\n  position: absolute;\n  height: 15%;\n  top: 10%;\n  right: 61%;\n}\n\n#chart1f {\n  position: absolute;\n  height: 8%;\n  top: 20%;\n  right: 75%;\n}\n\n#chart1g {\n  position: absolute;\n  height: 8%;\n  top: 60%;\n  right: 42%;\n}\n\n#chart1h {\n  position: absolute;\n  height: 13%;\n  top: 26%;\n  right: 27%;\n}\n\n#chart1i {\n  position: absolute;\n  height: 13%;\n  top: 12%;\n  right: 17%;\n}\n\n#chart1j {\n  position: absolute;\n  height: 21%;\n  top: 67%;\n  right: 28%;\n}\n\n#chart1k {\n  position: absolute;\n  height: 12%;\n  top: 64%;\n  right: 68%;\n}\n\n.chart-text1a {\n  position: absolute;\n  top: 40.5%;\n  right: 55.6%;\n  height: 9.5%;\n}\n\n.chart-text1b {\n  position: absolute;\n  top: 11.5%;\n  right: 37%;\n  height: 7%;\n}\n\n.chart-text1c {\n  position: absolute;\n  top: 48.5%;\n  right: 26%;\n  height: 6%;\n}\n\n.chart-text1d {\n  position: absolute;\n  top: 70.5%;\n  right: 54%;\n  height: 5%;\n}\n\n.chart-text1e {\n  position: absolute;\n  top: 67.5%;\n  right: 70%;\n  height: 4.5%;\n}\n\n#chart2a {\n  position: absolute;\n  top: 2%;\n  right: 15%;\n  height: 45%;\n}\n\n#chart2b {\n  position: absolute;\n  top: 2%;\n  right: 61%;\n  height: 22%;\n}\n\n#chart2c {\n  position: absolute;\n  top: 34%;\n  right: 55%;\n  height: 30%;\n}\n\n#chart2d {\n  position: absolute;\n  top: 62%;\n  right: 50%;\n  height: 16%;\n}\n\n#chart2e {\n  position: absolute;\n  top: 48%;\n  right: 40%;\n  height: 14%;\n}\n\n#chart2f {\n  position: absolute;\n  top: 22%;\n  right: 72%;\n  height: 14%;\n}\n\n#chart2g {\n  position: absolute;\n  top: 78%;\n  right: 48%;\n  height: 8%;\n}\n\n#chart2h {\n  position: absolute;\n  top: 66%;\n  right: 32%;\n  height: 17%;\n}\n\n#chart2i {\n  position: absolute;\n  top: 53%;\n  right: 22%;\n  height: 16%;\n}\n\n#chart2j {\n  position: absolute;\n  top: 44%;\n  right: 19%;\n  height: 10%;\n}\n\n#chart2k {\n  position: absolute;\n  top: 48%;\n  right: 33%;\n  height: 6%;\n}\n\n#chart2l {\n  position: absolute;\n  top: 25%;\n  right: 63%;\n  height: 7%;\n}\n\n#chart2m {\n  position: absolute;\n  top: -1%;\n  right: 53%;\n  height: 10%;\n}\n\n.chart-text2a {\n  position: absolute;\n  top: 20%;\n  right: 27%;\n  height: 9%;\n}\n\n.chart-text2b {\n  position: absolute;\n  top: 45.5%;\n  right: 63.5%;\n  height: 5.5%;\n}\n\n.chart-text2c {\n  position: absolute;\n  top: 9.8%;\n  right: 65%;\n  height: 6%;\n}\n\n.chart-text2d {\n  position: absolute;\n  top: 67.8%;\n  right: 53.2%;\n  height: 4%;\n}\n\n.chart-text2e {\n  position: absolute;\n  top: 53%;\n  right: 44%;\n  height: 3.5%;\n}\n\n.chart-text2f {\n  position: absolute;\n  top: 2.2%;\n  right: 55.3%;\n  height: 3.4%;\n}\n\n.chart-text2g {\n  position: absolute;\n  top: 80.3%;\n  right: 49.6%;\n  height: 3%;\n}\n\n.chart-gear {\n  -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n}\n\n.legend h4 {\n  color: #333333;\n  font-weight: 300;\n  padding: 10px;\n  width: 35vw;\n  max-width: 500px;\n  min-width: 280px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.legend h4:hover {\n  cursor: pointer;\n  color: white;\n}\n\n#legend1 h4:first-child span span:first-child {\n  color: #2cb8d1;\n  font-weight: 500;\n}\n\n#legend2 h4:first-child span span:first-child {\n  color: #fbc943;\n  font-weight: 500;\n}\n\n.legend h4:hover span span:first-child {\n  color: white !important;\n}\n\n.legend h4 span:nth-child(2) {\n  font-weight: 400;\n}\n\n.chart-active span {\n  color: white !important;\n}\n\n.chart-active1a {\n  background-color: #2cb8d1;\n}\n\n.chart-active2a {\n  background-color: #fd8a66 !important;\n}\n\n.chart-active3a {\n  background-color: #fbc943 !important;\n}\n\n.chart-active4a {\n  background-color: #9ee2ec !important;\n}\n\n.chart-active1b {\n  background-color: #fbc943;\n}\n\n.chart-active2b {\n  background-color: #24537f !important;\n}\n\n.chart-active3b {\n  background-color: #2cb8d1 !important;\n}\n\n.chart-active4b {\n  background-color: #fd8a66 !important;\n}\n\n.chart-active5 {\n  background-color: #9ee2ec !important;\n}\n\n#legend1 h4:first-child:hover {\n  background-color: #2cb8d1;\n}\n\n#legend2 h4:first-child:hover {\n  background-color: #fbc943;\n}\n\n#legend1 h4:nth-child(2) span span:first-child {\n  color: #fd8a66;\n  font-weight: 500;\n}\n\n#legend1 h4:nth-child(2):hover {\n  background-color: #fd8a66;\n}\n\n#legend2 h4:nth-child(2) span span:first-child {\n  color: #24537f;\n  font-weight: 500;\n}\n\n#legend2 h4:nth-child(2):hover {\n  background-color: #24537f;\n}\n\n.legend h4:nth-child(2) {\n  background-color: #F5F5F5;\n}\n\n.legend h4:nth-child(4) {\n  background-color: #F5F5F5;\n}\n\n#legend1 h4:nth-child(3) span span:first-child {\n  color: #fbc943;\n  font-weight: 500;\n}\n\n#legend1 h4:nth-child(3):hover {\n  background-color: #fbc943;\n}\n\n#legend2 h4:nth-child(3) span span:first-child {\n  color: #2cb8d1;\n  font-weight: 500;\n}\n\n#legend2 h4:nth-child(3):hover {\n  background-color: #2cb8d1;\n}\n\n#legend1 h4:nth-child(4) span span:first-child {\n  color: #9ee2ec;\n  font-weight: 500;\n}\n\n#legend1 h4:nth-child(4):hover {\n  background-color: #9ee2ec;\n}\n\n#legend1 h4:nth-child(5) span span:first-child {\n  color: #24537f;\n  font-weight: 500;\n}\n\n#legend1 h4:nth-child(5):hover {\n  background-color: #24537f;\n}\n\n#legend2 h4:nth-child(4) span span:first-child {\n  color: #fd8a66;\n  font-weight: 500;\n}\n\n#legend2 h4:nth-child(4):hover {\n  background-color: #fd8a66;\n}\n\n#community:nth-child(5) span span:first-child {\n  color: #9ee2ec;\n  font-weight: 500;\n}\n\n#community:nth-child(5):hover {\n  background-color: #9ee2ec;\n}\n\n#legend2 h4:nth-child(6) span span:first-child {\n  color: #fbc943;\n  font-weight: 500;\n}\n\n#legend2 h4:nth-child(6):hover {\n  background-color: #fbc943;\n}\n\n#legend2 h4:nth-child(7) span span:first-child {\n  color: #24537f;\n  font-weight: 500;\n}\n\n#legend2 h4:nth-child(7):hover {\n  background-color: #24537f;\n}\n\n/* Video Section */\n\n.vid-container {\n  position: relative;\n  width: 1200px;\n  height: 700px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.vid-screen-mobile-container {\n  display: none;\n  position: relative;\n  width: 100vw;\n  height: 50vw;\n  top: 0;\n}\n\n.vid-screen-mobile {\n  width: 140vw;\n  left: -22vw;\n  position: absolute;\n  z-index: 6;\n}\n\n.vid-text-mobile {\n  color: white;\n  position: absolute;\n  text-align: center;\n  z-index: 7;\n  width: 60vw;\n  left: 19vw;\n  top: 10vw;\n}\n\n.vid-text {\n  position: absolute;\n  color: white;\n  width: 40%;\n  right: 30%;\n  top: 10%;\n  text-align: center;\n  z-index: 6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.vid-text a {\n  right: 71%;\n  top: 90%;\n  position: absolute;\n}\n\n.vid-container img {\n  position: absolute;\n}\n\n.vid-container div {\n  position: absolute;\n}\n\n.vid-background {\n  width: 100%;\n  top: 0%;\n  right: 0%;\n  z-index: 1;\n}\n\n.vid-components {\n  width: 100%;\n  top: 0%;\n  right: 0%;\n  z-index: 5;\n}\n\n.vid-screen {\n  width: 100%;\n  top: 0%;\n  right: 0%;\n  z-index: 5;\n}\n\n.electricity-holder {\n  width: 100%;\n  height: 100%;\n  top: 0%;\n  right: 0%;\n  z-index: 4;\n  opacity: 1;\n}\n\n.vid-electricity {\n  width: 100%;\n  top: 0%;\n  right: 0%;\n  -webkit-clip-path: circle(0% at 15% 110%);\n          clip-path: circle(0% at 15% 110%);\n  -webkit-animation: electricity 2.9s linear infinite;\n          animation: electricity 2.9s linear infinite;\n}\n\n.vid-electricity2 {\n  width: 100%;\n  top: 0%;\n  right: 0%;\n  -webkit-clip-path: circle(0% at 90% 54%);\n          clip-path: circle(0% at 90% 54%);\n  -webkit-animation: electricityTwo 4.4s linear infinite;\n          animation: electricityTwo 4.4s linear infinite;\n}\n\n.vid-lines {\n  width: 100%;\n  top: 0%;\n  right: 0%;\n  z-index: 3;\n}\n\n.vid-line-mobile {\n  width: 100%;\n  right: 0%;\n  top: 0%;\n  z-index: 1;\n}\n\n.vid-cloud-left {\n  width: 5%;\n  top: 60%;\n  right: 93.5%;\n  z-index: 3;\n  -webkit-animation: vidCloud 3.5s ease-in-out infinite;\n          animation: vidCloud 3.5s ease-in-out infinite;\n}\n\n.vid-cloud-center {\n  width: 5%;\n  top: 51%;\n  right: 15%;\n  z-index: 3;\n  -webkit-animation: vidCloud 3s ease-in-out infinite;\n          animation: vidCloud 3s ease-in-out infinite;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.vid-cloud-right {\n  width: 7%;\n  top: 55%;\n  right: 7%;\n  z-index: 3;\n  -webkit-animation: vidCloud 2.5s ease-in-out infinite;\n          animation: vidCloud 2.5s ease-in-out infinite;\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n\n.vid-gear-up-light-blue {\n  width: 10%;\n  top: 42.57%;\n  right: 75.705%;\n  z-index: 2;\n  animation: rotate 6s reverse linear infinite;\n}\n\n.small-red-gear-holder {\n  width: 5%;\n  height: 6%;\n  top: 81.65%;\n  right: 85%;\n  z-index: 5;\n  overflow: hidden;\n}\n\n#vid-gear-small-red {\n  width: 105%;\n  right: -10%;\n  top: 23%;\n  -webkit-animation: rotate 7s reverse linear infinite;\n  animation: rotate 7s reverse linear infinite;\n}\n\n.left-gear-holder {\n  width: 20%;\n  height: 14%;\n  top: 71.6%;\n  right: 66%;\n  z-index: 4;\n  overflow: hidden;\n}\n\n#vid-gear-small-turquoise {\n  width: 35%;\n  right: 62%;\n  top: 55%;\n  -webkit-animation: rotate 7s reverse linear infinite;\n  animation: rotate 7s reverse linear infinite;\n}\n\n#vid-gear-left-yellow {\n  width: 35%;\n  right: 39.2%;\n  top: 12.5%;\n  -webkit-animation: rotate 7s linear infinite;\n          animation: rotate 7s linear infinite;\n}\n\n#vid-gear-down-light-blue {\n  width: 35%;\n  right: 21.2%;\n  top: 68.2%;\n  animation: rotate 7s reverse linear infinite;\n}\n\n.big-red-gear-holder {\n  width: 10%;\n  height: 14%;\n  top: 73.8%;\n  right: 20%;\n  z-index: 5;\n  overflow: hidden;\n}\n\n#vid-gear-big-red {\n  width: 105%;\n  right: 0%;\n  top: 30%;\n  -webkit-animation: rotate 7s linear infinite;\n          animation: rotate 7s linear infinite;\n}\n\n.vid-gear-big-turquoise {\n  width: 11%;\n  right: 10.62%;\n  top: 64.47%;\n  z-index: 2;\n  animation: rotate 8s reverse linear infinite;\n}\n\n.vid-gear-big-turquoise-mobile {\n  right: 74.8%;\n  top: 66.3%;\n}\n\n.vid-gear-right-yellow {\n  width: 7%;\n  right: 5%;\n  top: 73%;\n  z-index: 2;\n  -webkit-animation: rotate 6.7s linear infinite;\n          animation: rotate 6.7s linear infinite;\n}\n\n.vid-gear-right-yellow-mobile {\n  right: 92.6%;\n}\n\n.vid-gear-holder-mobile {\n  width: 14%;\n  right: 68.8%;\n  top: 69.8%;\n  z-index: 3;\n}\n\n.vid-gear-blue {\n  width: 4%;\n  right: 7.4%;\n  top: 67.3%;\n  z-index: 2;\n  animation: rotate 5.8s reverse linear infinite;\n}\n\n.vid-gear-blue-mobile {\n/*   right: 87%;\n  top: 79.3%; */\n  right: 81.2%;\n  top: 61.7%;\n}\n\n/*.faqandvideo {\n  position: relative;\n  height: 700px;\n}\n\n.video-ani {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n}\n\n.vid-container {\n  position: absolute;\n  z-index: 2;\n  text-align: center;\n  left: 0;\n  right: 0;\n  margin: auto;\n  color: white !important;\n  width: 100vw;\n}\n\n.vid-container h3 {\n  color: white;\n}\n\n.vid-text {\n  width: 300px;\n  margin: 0 auto;\n  margin-top: 80px;\n}*/\n\n/* Team Section */\n\n.team-member-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-bottom: 100px;\n}\n\n.team-div {\n  position: relative;\n  margin: 20px auto;\n  /*background-color: white;*/\n  margin-top: 60px;\n  height: 250px;\n  text-align: center;\n  color: #2cbad3;\n  width: 220px;\n}\n\n.team-div h5 {\n  color: #B3B3B3;\n}\n\n.team-div:hover {\n  background-color: #2cb8d2;\n  color: white !important;\n  cursor: pointer;\n}\n\n.team-div:hover h5 {\n  color: white;\n}\n\n.team-div:hover .hover-visibility {\n  opacity: 1;\n}\n\n.hover-visibility {\n  opacity: 0;\n}\n\n.team-div img {\n  height: 150px;\n}\n\n.employee {\n  width: 220px;\n  transition: -webkit-transform 0.3s;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.team-div:hover .employee {\n  transform: translate(0, -50px);\n  -moz-transform: translate(0, -50px);\n  -webkit-transform: translate(0, -50px);\n  -o-transform: translate(0, -50px);\n  -ms-transform: translate(0, -50px);\n}\n\n.team-div:hover .avatar-gear {\n  -webkit-animation: smallRotate 1s ease;\n          animation: smallRotate 1s ease;\n  transform: rotate(95deg);\n  -moz-transform: rotate(95deg);\n  -webkit-transform: rotate(95deg);\n  -o-transform: rotate(95deg);\n  -ms-transform: rotate(95deg);\n}\n\n.avatar-gear {\n  position: absolute;\n  height: 230px !important;\n  left: -5px;\n  top: -45px;\n}\n\n/* Call to Action */\n\n.action-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.indresgsec {\n  width: 550px;\n  margin: 0px auto;\n  padding: 16px;\n  margin-top: 60px !important;\n}\n\n.clicktool-city {\n  margin: 0 auto;\n  width: 550px;\n  min-width: 550px;\n  max-width: 550px;\n  height: 309.5px;\n  min-height: 309.5px;\n  max-height: 309.5px;\n  position: relative;\n}\n\n.clicktool-city img {\n  position: absolute;\n}\n\n.clicktool-city div {\n  position: absolute;\n}\n\n.city-background {\n  width: 100%;\n  top: 0%;\n  right: 0%;\n  z-index: 1;\n}\n\n.city-cloud-medium {\n  width: 4.5%;\n}\n\n.city-cloud-lg {\n  width: 6%;\n}\n\n.city-cloud-top-left1 {\n  top: 33%;\n  right: 93%;\n  z-index: 2;\n  -webkit-animation: cloud 3s ease-in-out infinite;\n          animation: cloud 3s ease-in-out infinite;\n}\n\n.city-cloud-top-left2 {\n  top: 20%;\n  right: 75%;\n  z-index: 2;\n  -webkit-animation: cloud 3.2s ease-in-out infinite;\n          animation: cloud 3.2s ease-in-out infinite;\n}\n\n.city-cloud-top-left3 {\n  top: 23%;\n  right: 70%;\n  z-index: 2;\n  -webkit-animation: cloud 3.2s ease-in-out infinite;\n          animation: cloud 3.2s ease-in-out infinite;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n.city-cloud-top-center {\n  top: 39%;\n  right: 34%;\n  z-index: 2;\n  -webkit-animation: cloud 3.3s ease-in-out infinite;\n          animation: cloud 3.3s ease-in-out infinite;\n}\n\n.city-cloud-top-right1 {\n  top: 17%;\n  right: 17%;\n  z-index: 2;\n  -webkit-animation: cloud 3.3s ease-in-out infinite;\n          animation: cloud 3.3s ease-in-out infinite;\n}\n\n.city-cloud-top-right2 {\n  top: 13%;\n  right: 15%;\n  z-index: 2;\n  -webkit-animation: cloud 3.1s ease-in-out infinite;\n          animation: cloud 3.1s ease-in-out infinite;\n}\n\n.city-cloud-top-right3 {\n  top: 24%;\n  right: 3%;\n  z-index: 2;\n  -webkit-animation: cloud 3s ease-in-out infinite;\n          animation: cloud 3s ease-in-out infinite;\n}\n\n.city-cloud-bottom-right {\n  top: 82%;\n  right: 4%;\n  z-index: 2;\n  -webkit-animation: cloud 3s ease-in-out infinite;\n          animation: cloud 3s ease-in-out infinite;\n}\n\n.city-cloud-bottom-left1 {\n  top: 81%;\n  right: 57%;\n  z-index: 2;\n  -webkit-animation: cloud 3s ease-in-out infinite;\n          animation: cloud 3s ease-in-out infinite;\n}\n\n.city-cloud-bottom-left2 {\n  width: 3%;\n  top: 79%;\n  right: 56%;\n  z-index: 2;\n  -webkit-animation: cloud 2.9s ease-in-out infinite;\n          animation: cloud 2.9s ease-in-out infinite;\n}\n\n.city-bird {\n  width: 3%;\n  -webkit-animation: bird 2s ease-in-out infinite;\n          animation: bird 2s ease-in-out infinite;\n}\n\n.city-bird-left {\n  top: 84%;\n  right: 45%;\n  z-index: 2;\n}\n\n.city-bird-right {\n  top: 86%;\n  right: 42%;\n  z-index: 2;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n.city-boat-holder-left {\n  height: 8%;\n  width: 7%;\n  top: 104.1%;\n  right: 78%;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.city-boat-holder-left img {\n  width: 90%;\n  top: 44%;\n  right: 18%;\n  -webkit-animation: boat 2s ease-in-out infinite;\n          animation: boat 2s ease-in-out infinite;\n}\n\n.city-boat-holder-center {\n  height: 9%;\n  width: 7%;\n  top: 103.1%;\n  right: 46%;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.city-boat-holder-center img {\n  width: 68%;\n  top: 5%;\n  right: 4%;\n  -webkit-animation: boat 1.9s ease-in-out infinite;\n          animation: boat 1.9s ease-in-out infinite;\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n\n.city-boat-holder-right {\n  height: 9%;\n  width: 7%;\n  top: 100.2%;\n  right: 17%;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.city-boat-holder-right img {\n  width: 68%;\n  top: 39%;\n  right: 26%;\n  -webkit-animation: boat 2.1s ease-in-out infinite;\n          animation: boat 2.1s ease-in-out infinite;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n.windmill {\n  width: 8%;\n  top: 38%;\n  right: 48%;\n  z-index: 2;\n  -webkit-animation: rotate 5s linear infinite;\n          animation: rotate 5s linear infinite;\n}\n\n.city-train-holder {\n  width: 50.5%;\n  height: 10%;\n  top: 51.8%;\n  right: 19%;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.city-train-holder img {\n  width: 50%;\n  top: 65%;\n  right: -50%;\n  -webkit-animation: cityTrain 5s linear infinite;\n          animation: cityTrain 5s linear infinite;\n}\n\n.city-car-holder-top-left {\n  height: 8%;\n  width: 22%;\n  top: 70%;\n  right: 43%;\n  overflow: hidden;\n  z-index: 2;\n}\n\n.city-car-holder-top-left img {\n  width: 20%;\n  top: 50%;\n  right: -20%;\n  -webkit-animation: cityCarOne 6s linear infinite;\n          animation: cityCarOne 6s linear infinite;\n}\n\n.city-car-holder-top-right {\n  height: 8%;\n  width: 13.2%;\n  top: 70.2%;\n  right: 22.8%;\n  overflow: hidden;\n  z-index: 2;\n}\n\n.city-car-holder-top-right img {\n  width: 40%;\n  top: 27%;\n  right: 100%;\n  -webkit-animation: cityCarTwo 4s linear infinite;\n          animation: cityCarTwo 4s linear infinite;\n}\n\n.city-car-holder-bottom {\n  height: 8%;\n  width: 50%;\n  top: 93%;\n  right: 18.25%;\n  overflow: hidden;\n  z-index: 2;\n}\n\n.city-car-holder-bottom img {\n  width: 10%;\n  top: 28%;\n  right: 100%;\n  -webkit-animation: cityCarThree 7s linear infinite;\n          animation: cityCarThree 7s linear infinite;\n}\n\n.city-car-holder-bottom img:first-child {\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n\n.city-logo {\n  width: 3.8%;\n  top: 27.5%;\n  right: 57.9%;\n  z-index: 3;\n}\n\n.city-logo2 {\n  width: 4%;\n  top: 26.9%;\n  right: 57.91%;\n  z-index: 2;\n  -webkit-animation: rotate 5s linear infinite;\n          animation: rotate 5s linear infinite;\n}\n\n.city-gear-bottom-right1 {\n  width: 5.5%;\n  top: 89.5%;\n  right: 7.7%;\n  z-index: 2;\n  animation: rotate 5s reverse linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.city-gear-bottom-left1 {\n  height: 15%;\n  width: 12%;\n  top: 87.45%;\n  right: 70%;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.city-gear-bottom-left1 img {\n  width: 80%;\n  top: 36%;\n  right: 15%;\n  animation: rotate 6s reverse linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.city-gear-bottom-right2 {\n  height: 15%;\n  width: 12%;\n  top: 87%;\n  right: 10%;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.city-gear-bottom-right2 img {\n  width: 75%;\n  top: 46%;\n  right: 4%;\n  -webkit-animation: rotate 8s linear infinite;\n          animation: rotate 8s linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.city-gear-top-left {\n  height: 12%;\n  width: 8%;\n  top: 43%;\n  right: 87.9%;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.city-gear-top-left img {\n  width: 80%;\n  top: 49%;\n  right: -12%;\n  animation: rotate 7s reverse linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.city-gear-bottom-left2 {\n  height: 16%;\n  width: 15%;\n  top: 84.8%;\n  right: 82%;\n  z-index: 3;\n  overflow: hidden;\n}\n\n.city-gear-bottom-left2 img {\n  width: 40%;\n  -webkit-animation: rotate 7s linear infinite;\n          animation: rotate 7s linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.city-gear-bottom-left2 img:first-child {\n  top: 64%;\n  right: 50%;\n}\n\n.city-gear-bottom-left2 img:nth-child(2) {\n  top: 29%;\n  right: 24%;\n  animation-direction: reverse;\n}\n\n.city-gear-bottom-left2 img:nth-child(3) {\n  top: 73.3%;\n  right: 3.2%;\n}\n\n.city-gear-middle {\n  width: 12%;\n  height: 10%;\n  top: 68%;\n  right: 69%;\n  z-index: 3;\n  overflow: hidden;\n}\n\n.city-gear-middle img:first-child {\n  width: 50%;\n  top: 40%;\n  right: 48%;\n  animation: rotate 7s reverse linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.city-gear-middle img:nth-child(2) {\n  width: 30%;\n  top: 68%;\n  right: 24%;\n  -webkit-animation: rotate 5.5s linear infinite;\n          animation: rotate 5.5s linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.city-gear-top-center {\n  width: 10%;\n  height: 12%;\n  top: 43%;\n  right: 41%;\n  z-index: 3;\n  overflow: hidden;\n}\n\n.city-gear-top-center img:first-child {\n  width: 48%;\n  top: 65%;\n  right: 40%;\n  -webkit-animation: rotate 5.5s linear infinite;\n          animation: rotate 5.5s linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.city-gear-top-center img:nth-child(2) {\n  width: 33%;\n  top: 75%;\n  right: 13%;\n  animation: rotate 7s reverse linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.city-gear-top-center img:nth-child(3) {\n  width: 40%;\n  top: 22%;\n  right: 19%;\n  animation: rotate 6s reverse linear infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n/* Sign Up */\n\n.sign-up {\n  text-align: center;\n  padding: 25px;\n  margin-top: 5px;\n  color: black;\n  background-color: #F2F2F2;\n}\n\n.sign-up h1 {\n  color: #24537f;\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  margin-top: -40px;\n}\n\n.sign-up p {\n  width: 70vw;\n  margin: 0 auto;\n}\n\n.btn-modal {\n  padding: 0;\n  border: 0;\n  position: relative;\n  top: 20px;\n  margin-bottom: 20px;\n}\n\n.btn-modal:focus {\n  outline: 0;\n}\n\n.action-button {\n  height: 50px;\n  width: 200px;\n  background-color: #fd8a66;\n  /* margin: 10px auto; */\n\n  color: white;\n  border-radius: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: 1px 1px 2px #CCCCCC;\n          box-shadow: 1px 1px 2px #CCCCCC;\n  overflow: hidden;\n}\n\n.shine {\n  height: 70px;\n  width: 10px;\n  background-color: white;\n  transform: rotate(20deg);\n  -moz-transform: rotate(20deg);\n  -webkit-transform: rotate(20deg);\n  -o-transform: rotate(20deg);\n  -ms-transform: rotate(20deg);\n  -webkit-animation: shine 2s ease infinite;\n          animation: shine 2s ease infinite;\n  opacity: 0.2;\n  -webkit-box-shadow: 0px 0px 12px 5px #FFFFFF;\n          box-shadow: 0px 0px 12px 5px #FFFFFF;\n}\n\n.action-button:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: #AC604A !important;\n}\n\n.action-button:hover {\n  background-color: #DD795B;\n  cursor: pointer;\n}\n\n.action-left {\n  width: 550px;\n}\n\n.action-container h1 {\n  color: #215281;\n}\n\n.action-container p {\n  color: #737373;\n}\n\n.social-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.social-icons p {\n  font-size: 30px;\n  margin-right: 40px;\n  margin-top: 10px;\n}\n\n.fa-div {\n  background: #0a243e none repeat scroll 0 0;\n  border-radius: 5px;\n  color: #fff;\n  font-family: open sans;\n  font-size: 14px;\n  margin: 30px auto !important;\n  text-align: center;\n  padding: 0 0 0 14px;\n  width: 380px !important;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  caret-color: #fd8a66;\n}\n\n.fa-div input {\n  border: none !important;\n  margin-left: -30px;\n  color: white;\n}\n\n.fa-margin {\n  margin-top: -155px;\n}\n\n.message {\n  padding-top: 12px !important;\n  height: 200px !important;\n  background: #0a243e none repeat scroll 0 0;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  border-radius: 5px;\n  resize: none;\n  outline: transparent;\n  caret-color: #fd8a66;\n  font-size: 14.5px;\n  margin-left: 5px;\n  color: white;\n}\n\n.send {\n  margin-left: 125px !important;\n  background: none;\n  color: white !important;\n  border: 1px solid white !important;\n}\n\n.indresgsec h2 {\n  color: white;\n  font-size: 35px;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.indresgsec > h2 span {\n  color: #0080ff;\n  display: block;\n  font-size: 20px;\n  padding: 7px 0 0;\n}\n\n.animation-none {\n  -webkit-animation: none !important;\n          animation: none !important;\n}\n\n.display-none {\n  display: none !important;\n}\n\n.facebook {\n  color:  #4468b0 !important;\n}\n\n.facebook:hover {\n  color:  #395897 !important;\n}\n\n.twitter {\n  color:  #2aa3ef !important;\n}\n\n.twitter:hover {\n  color:  #2592D6 !important;\n}\n\n.linkedin {\n  color:  #1178b3 !important;\n}\n\n.linkedin:hover {\n  color:  #0E6497 !important;\n}\n\n.reddit {\n  color:  #fc461e !important;\n}\n\n.reddit:hover {\n  color:  #DF3F1D !important;\n}\n\n.instagram {\n  margin-right: 40px;\n  margin-top: 15px;\n  color:  white !important;\n  height: 30px;\n  width: 30px;\n  font-size: 26px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 5px;\n  background: radial-gradient(circle at 33% 100%, #FED373 4%, #F15245 30%, #D92E7F 62%, #9B36B7 85%, #515ECF)\n}\n\n.instagram:hover {\n  background: radial-gradient(circle at 33% 100%, #E2BC69 4%, #D2483D 30%, #B5286B 62%, #802D99 85%, #424EAB)\n}\n\n.telegram {\n  color:  #3bb0ea !important;\n}\n\n.telegram:hover {\n  color:  #3191C1 !important;\n}\n\n.medium {\n  color:  #26b377 !important;\n}\n\n.medium:hover {\n  color:  #1E8B5E !important;\n}\n\n.desc-txt {\n  font-size: 16px;\n  line-height: 24px;\n}\n\n/* Media Queries */\n\n@media only screen and (min-width: 1866px){\n  .info-icon {\n    height: 300px;\n  } .info-text {\n    width: 35vw;\n  } .info-row {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n  }\n}\n\n@media only screen and (max-width: 1200px) {\n  .vid-container {\n    width: 991px;\n    height: 578.57px;\n  }\n}\n\n@media only screen and (max-width: 1052px) {\n  .dynamic-headline-big {\n    visibility: hidden;\n  } .dynamic-headline-mobile {\n    visibility: visible;\n  } .countdown {\n    top: 20px;\n    margin-bottom: 20px;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .vid-container {\n    width: 1200px;\n    height: 700px;\n  } .vid-screen-mobile-container {\n    display: unset;\n  } .vid-screen {\n    /* width: 85%;\n    left: 0%;\n    right: 0;\n    margin: auto; */\n    display: none;\n  } .vid-text {\n    /* width: 25%;\n    left: 20%; */\n    display: none;\n  } .vid-text h3 {\n    /* font-size: 18px; */\n    display: none;\n  } .vid-text a {\n    /* right: 83% !important; */\n    display: none;\n  } .vid-lines {\n    display: none;\n  } .vid-line-mobile {\n    display: unset;\n  } .vid-electricity2 {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 927px) {\n  .countdown {\n    width: 633.3px;\n    height: 166.7px;\n    top: 10px;\n    margin-bottom: 70px;\n  } .countdown-handle {\n    top: 28px;\n  } .countdown h2 {\n    font-size: 20px;\n    top: 95px;\n    right: 60%;\n  } .countdown-chart img {\n    width: 500%;\n  } .countdown-chart {\n    top: 35px;\n    height: 40px;\n    width: 44px;\n    right: 85%;\n  } .countdown-chart img {\n    -webkit-animation: countdownChartMobile 18s linear infinite;\n            animation: countdownChartMobile 18s linear infinite;\n  } .countdown-btn {\n    top: 35px;\n  } .countdown-wires {\n    top: 22px !important;\n  } .timer-text {\n    font-size: 10px !important;\n    margin-top: -5px;\n  } .timer-div p {\n    font-size: 18px;\n  } #day-div {\n    right: 212px;\n  } #hour-div {\n    right: 148px;\n  } #minute-div {\n    right: 84px;\n  } #second-div {\n    right: 22px;\n  } .timer-div {\n    top: 26px;\n  } .countdown-gear {\n    top: 12px;\n  }\n}\n\n@media only screen and (max-width: 800px){\n  .team-section {\n    margin-top: 0px;\n  }\n}\n\n@media only screen and (max-width: 767px){\n  .countdown {\n    top: 50px;\n    margin-bottom: 50px;\n  } .machine-box {\n    top: 23%;\n  } .top-design {\n    top: 80px;\n    width: 900px;\n    height: 600px;\n  } .milestone-container {\n    width: 280vw;\n    height: calc(280vw / 2.02);\n    left: -90%;\n    overflow: hidden;\n  } .info-text {\n    width: 90vw;\n  } .info-icon {\n    height: 30vw;\n  } .featcont {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 680px){\n  .countdown {\n    right: -3%;\n    top: 20px;\n    width: 320px;\n    margin-bottom: 150px;\n  } .countdown-wires {\n    opacity: 0;\n  } .countdown-left {\n    width: 100%;\n    top: 100px;\n    left: -5%;\n  } .countdown-right {\n    width: 100%;\n  } .countdown-chart {\n    right: 78%;\n    top: 140px;\n  } .countdown h2 {\n    top: 210px;\n    right: 23%;\n  } .countdown-handle {\n    left: -11%;\n    width: 20%;\n    top: 131px;\n  } .countdown-btn {\n    top: 140px;\n  } .countdown-btn-left {\n    right: 40%;\n  } .countdown-btn-middle {\n    right: 30%;\n  } .countdown-btn-right {\n    right: 20%;\n  } .countdown-gear {\n    width: 25%;\n  } .countdown-gear1 {\n    right: 7%;\n  } .countdown-gear2 {\n    right: 29%;\n  } .countdown-gear3 {\n    right: 51%;\n  } .countdown-gear4 {\n    right: 73%;\n  } #day-div {\n    right: 228px;\n  } #hour-div {\n    right: 158px;\n  } #minute-div {\n    right: 88px;\n  } #second-div {\n    right: 17px;\n  } .timer-div {\n    top: 30px;\n  } .vid-screen {\n    width: 75%;\n    left: -19%;\n  } .vid-text {\n    left: 9%;\n    top: 0%;\n    width: 20% !important;\n  } .vid-text a {\n    right: 94% !important;\n  } .sign-up h1 {\n    margin-top: -20px;\n  } .vid-screen-mobile-container {\n    top: 5vw;\n  } .vid-text-mobile h3 {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (max-width: 520px){\n  .dynamic-headline p {\n    margin-top: 60px !important;\n  }\n}\n\n@media only screen and (max-width: 460px){\n  .vid-screen {\n    width: 57%;\n    left: -13%;\n  } .vid-text {\n    left: 6%;\n  } .vid-text a {\n    right: 92% !important;\n  }\n  .action-container {\n    overflow: hidden !important;\n  }\n  .clicktool-city {\n    overflow: hidden !important;\n  }\n\n}\n\n@media only screen and (max-width: 420px){\n  .dynamic-headline {\n    left: 2%;\n    width: 95vw;\n  } .info-icon {\n    height: 50vw;\n  } .vid-screen-mobile {\n    width: 160vw;\n    left: -34vw;\n  }\n}\n\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .about-container {\n    height: 410px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"isIE\" class=\"ie-warning\">We want our users to have the best experience possible. For optimal performance, we recommend using Google Chrome or Mozilla\n  Firefox as your browser.</h3>\n\n<app-homepage-header></app-homepage-header>\n<app-sidebar-icon></app-sidebar-icon>\n<div class=\"container-fluid\" style=\"overflow: hidden;\">\n\n  <div id=\"top-design\" class=\"top-design\" style=\"opacity: 0;\">\n    <img id=\"top-ani\" class=\"top-ani\" src=\"../assets/top-background.png\" alt=\"clicktool machine background\">\n    <img class=\"blue-logo-gear\" src=\"../assets/blue-logo-gear.png\" alt=\"logo gear\">\n    <img class=\"top-design-logo\" src=\"../assets/top-design-logo.png\" alt=\"clicktool logo\">\n    <img class=\"blue-button-stay\" src=\"../assets/blue-buttons1.png\" alt=\"blue button\">\n    <img class=\"blue-buttons blue-buttons1\" src=\"../assets/blue-buttons1.png\" alt=\"blue button\">\n    <img class=\"blue-buttons blue-buttons2\" src=\"../assets/blue-buttons2.png\" alt=\"blue button\">\n    <img class=\"blue-buttons blue-buttons3\" src=\"../assets/blue-buttons3.png\" alt=\"blue button\">\n    <img class=\"blue-buttons blue-buttons4\" src=\"../assets/blue-buttons4.png\" alt=\"blue button\">\n    <img class=\"blue-buttons blue-buttons5\" src=\"../assets/blue-buttons2.png\" alt=\"blue button\">\n    <img class=\"exclamation\" src=\"../assets/exclamation.png\" alt=\"exclamation point\">\n    <img class=\"blue-slider blue-slider1\" src=\"../assets/blue-slider.png\" alt=\"blue slider\">\n    <img class=\"blue-slider blue-slider2\" src=\"../assets/blue-slider.png\" alt=\"blue slider\">\n    <img class=\"blue-slider blue-slider3\" src=\"../assets/blue-slider.png\" alt=\"blue slider\">\n    <img class=\"stack\" src=\"../assets/stack.png\" alt=\"machine stack\">\n    <div class=\"arrow-drop\">\n      <img class=\"yellow-arrow\" src=\"../assets/yellow-arrow.png\" alt=\"yellow arrow\">\n    </div>\n    <div class=\"train-holder\" [ngClass]=\"{'display-none':isSafari}\">\n      <img class=\"top-train\" src=\"../assets/top-train.png\" alt=\"train\">\n    </div>\n    <div class=\"car-holder1\" [ngClass]=\"{'display-none':isSafari}\">\n      <img class=\"car1\" src=\"../assets/car1.png\" alt=\"car\">\n    </div>\n    <div class=\"car-holder2\" [ngClass]=\"{'display-none':isSafari}\">\n      <img class=\"car2\" src=\"../assets/car2.png\" alt=\"car\">\n    </div>\n    <div class=\"car-holder3\" [ngClass]=\"{'display-none':isSafari}\">\n      <img class=\"car3\" src=\"../assets/car3.png\" alt=\"car\">\n      <img class=\"car4\" src=\"../assets/car2.png\" alt=\"car\">\n    </div>\n    <div class=\"curvy-pipe-holder\">\n      <img class=\"curvy-pipe\" [ngClass]=\"{'animation-none':isSafari}\" src=\"../assets/curvy-pipe.png\" alt=\"pipe\">\n      <img class=\"pink-pipe\" [ngClass]=\"{'animation-none':isSafari}\" src=\"../assets/pink-pipe.png\" alt=\"pipe\">\n    </div>\n    <img class=\"knob\" src=\"../assets/machine-knob.png\" alt=\"knob\">\n    <img class=\"meter-needle\" src=\"../assets/meter-needle.png\" alt=\"meter needle\">\n    <div class=\"gray-fill-holder\">\n      <img class=\"gray-fill gray-fill1\" src=\"../assets/gray-fill.png\" alt=\"gray\">\n      <img class=\"gray-fill gray-fill2\" src=\"../assets/gray-fill.png\" alt=\"gray\">\n      <img class=\"gray-fill gray-fill3\" src=\"../assets/gray-fill.png\" alt=\"gray\">\n    </div>\n    <img class=\"cloud-up-left\" src=\"../assets/big-cloud.png\" alt=\"cloud\">\n    <img class=\"cloud-up-center\" src=\"../assets/small-cloud.png\" alt=\"cloud\">\n    <img class=\"cloud-up-right\" src=\"../assets/small-cloud.png\" alt=\"cloud\">\n    <img class=\"cloud-up-right2\" src=\"../assets/med-cloud.png\" alt=\"cloud\">\n    <img class=\"cloud-down-right\" src=\"../assets/small-cloud.png\" alt=\"cloud\">\n    <img class=\"cloud-down-center\" src=\"../assets/med-cloud.png\" alt=\"cloud\">\n    <img class=\"cloud-down-center2\" src=\"../assets/small-cloud.png\" alt=\"cloud\">\n    <div class=\"boat-holder1\">\n      <img class=\"boat-left\" src=\"../assets/boat1.png\" alt=\"boat\">\n    </div>\n    <div class=\"boat-holder2\">\n      <img class=\"boat-center\" src=\"../assets/boat2.png\" alt=\"boat\">\n    </div>\n    <div class=\"boat-holder3\">\n      <img class=\"boat-right\" src=\"../assets/boat3.png\" alt=\"boat\">\n    </div>\n    <div class=\"light-flash red-flash\"></div>\n    <div class=\"light-flash yellow-flash\"></div>\n    <img class=\"red-button\" src=\"../assets/red-button.png\" alt=\"red button\">\n    <img class=\"yellow-button\" src=\"../assets/yellow-button.png\" alt=\"yellow button\">\n    <img class=\"machine-knob-red\" src=\"../assets/machine-knob-red.png\" alt=\"red knob\">\n    <img class=\"machine-knob-yellow\" src=\"../assets/machine-knob-yellow.png\" alt=\"yellow knob\">\n    <img class=\"machine-knob-gray\" src=\"../assets/machine-knob-gray.png\" alt=\"gray knob\">\n    <img class=\"analyzing\" src=\"../assets/analyzing.png\">\n    <img class=\"screen-icon screen-icon1\" src=\"../assets/screen-icon1.png\" alt=\"icon\">\n    <img class=\"screen-icon screen-icon2\" src=\"../assets/screen-icon2.png\" alt=\"icon\">\n    <img class=\"screen-icon screen-icon3\" src=\"../assets/screen-icon3.png\" alt=\"icon\">\n    <img class=\"screen-icon screen-icon4\" src=\"../assets/screen-icon4.png\" alt=\"icon\">\n    <img class=\"screen-icon screen-icon5\" src=\"../assets/screen-icon5.png\" alt=\"icon\">\n    <div class=\"static-holder\">\n      <img class=\"static\" src=\"../assets/static.png\" alt=\"static\">\n    </div>\n    <img class=\"top-gear top-gear1\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear2\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear3\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear4\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear5\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear6\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear7\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear8\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear9\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear10\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear11\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear12\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear13\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear14\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear15\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <img class=\"top-gear top-gear16\" src=\"../assets/top-gear.png\" alt=\"gear\">\n    <div class=\"top-coin-holder\">\n      <img class=\"top-coin top-coin1\" src=\"../assets/top-coin.png\" alt=\"coin\">\n      <img [ngClass]=\"{'display-none' : isSafari || isMobileOrTablet}\" class=\"top-coin top-coin2\" src=\"../assets/top-coin.png\"\n        alt=\"coin\">\n      <img [ngClass]=\"{'display-none' : isSafari || isMobileOrTablet}\" class=\"top-coin top-coin3\" src=\"../assets/top-coin.png\"\n        alt=\"coin\">\n      <img [ngClass]=\"{'display-none' : isSafari || isMobileOrTablet}\" class=\"top-coin top-coin4\" src=\"../assets/top-coin.png\"\n        alt=\"coin\">\n      <img class=\"top-coin top-coin5\" src=\"../assets/top-coin.png\" alt=\"coin\">\n      <img [ngClass]=\"{'display-none' : isSafari || isMobileOrTablet}\" class=\"top-coin top-coin6\" src=\"../assets/top-coin.png\"\n        alt=\"coin\">\n      <img [ngClass]=\"{'display-none' : isSafari || isMobileOrTablet}\" class=\"top-coin top-coin7\" src=\"../assets/top-coin.png\"\n        alt=\"coin\">\n      <img [ngClass]=\"{'display-none' : isSafari || isMobileOrTablet}\" class=\"top-coin top-coin8\" src=\"../assets/top-coin.png\"\n        alt=\"coin\">\n      <img class=\"top-coin top-coin9\" src=\"../assets/top-coin.png\" alt=\"coin\">\n    </div>\n    <div class=\"dynamic-headline dynamic-headline-big\">\n      <h1>\n        <a href=\"\" class=\"typewrite\" data-period=\"2000\" data-type='[ \"Reshaping Advertising With Blockchain       \", \"The First Decentralized Online Advertising Platform        \", \"Marketing Analytics Made Easy       \", \"Businesses Can Easily Track Their Marketing Dollars       \", \"Making Online Advertising Simple And Secure       \", \"The future of the web is decentralized       \"]'>\n          <span class=\"wrap\"></span>\n        </a>\n      </h1>\n      <br>\n      <p>Clicktool is a first of it’s kind digital marketing tracking platform that redefines security, decentralized storage\n        and ease of use. ICO coming soon!</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"dynamic-headline dynamic-headline-mobile\">\n  <h1>\n    <a href=\"\" class=\"typewrite\" data-period=\"2000\" data-type='[ \"Reshaping Advertising With Blockchain       \", \"The First Decentralized Online Advertising Platform        \", \"Marketing Analytics Made Easy       \", \"Businesses Can Easily Track Their Marketing Dollars       \", \"Making Online Advertising Simple And Secure       \", \"The future of the web is decentralized       \"]'>\n      <span class=\"wrap\"></span>\n    </a>\n  </h1>\n  <br>\n  <p>Clicktool is a platform that will provide you with all the tools you need to build fully decentralized applications.</p>\n</div>\n\n<!-- Countdown Section -->\n<div class=\"countdown\">\n  <img class=\"countdown-right\" src=\"../assets/countdown-right.png\" alt=\"countdown machine\">\n  <img class=\"countdown-left\" src=\"../assets/countdown-left.png\" alt=\"countdown machine\">\n  <img class=\"countdown-wires\" src=\"../assets/countdown-wires.png\" alt=\"wires\">\n  <img class=\"countdown-handle\" src=\"../assets/countdown-handle.png\" alt=\"handle\">\n  <img class=\"countdown-gear countdown-gear1\" src=\"../assets/countdown-gear.png\" alt=\"gear\">\n  <img class=\"countdown-gear countdown-gear2\" src=\"../assets/countdown-gear.png\" alt=\"gear\">\n  <img class=\"countdown-gear countdown-gear3\" src=\"../assets/countdown-gear.png\" alt=\"gear\">\n  <img class=\"countdown-gear countdown-gear4\" src=\"../assets/countdown-gear.png\" alt=\"gear\">\n  <h2>UNTIL\n    <br>LAUNCH</h2>\n  <div class=\"countdown-btn countdown-btn-left\" alt=\"button\"></div>\n  <div class=\"countdown-btn countdown-btn-middle\" alt=\"button\"></div>\n  <div class=\"countdown-btn countdown-btn-right\" alt=\"button\"></div>\n  <div class=\"countdown-chart\">\n    <img src=\"../assets/countdown-chart.png\" alt=\"chart\">\n    <img src=\"../assets/countdown-chart.png\" alt=\"chart\">\n  </div>\n  <!--     <img src=\"../assets/Countdown-timer_1050x.gif\" class=\"count-machine\">\n    <img src=\"../assets/Countdown-timer_1050x.gif\" class=\"count-machine-tablet1\">\n    <img src=\"../assets/Countdown-timer_1050x.gif\" class=\"count-machine-tablet2\">\n    <img src=\"../assets/3_Timer_Mobile_900x.gif\" class=\"count-machine-mobile\"> -->\n  <div class=\"timer-div\" id=\"day-div\">\n    <p id=\"days\"></p>\n    <p class=\"timer-text\">Days</p>\n  </div>\n  <div class=\"timer-div\" id=\"hour-div\">\n    <p id=\"hours\"></p>\n    <p class=\"timer-text\">Hours</p>\n  </div>\n  <div class=\"timer-div\" id=\"minute-div\">\n    <p id=\"minutes\"></p>\n    <p class=\"timer-text\">Minutes</p>\n  </div>\n  <div class=\"timer-div\" id=\"second-div\">\n    <p id=\"seconds\"></p>\n    <p class=\"timer-text\">Seconds</p>\n  </div>\n</div>\n\n<div style=\"width: 100vw; height: 10px; background-color: #2cb8d1; margin-top: 70px;\"></div>\n\n<div class=\"hidden-md hidden-lg hidden-xl\">\n  <br>\n  <p style=\"padding: 10px;\">The Clicktool team is based in Santa Monica, California. Our core team consists of 12 members and quickly growing. We’ve\n    been hard at work building our first working prototype which is now live in BETA and has satisfied paying customers.\n    Click on the link below to view the Clicktool Tracker webpage.</p>\n  <br>\n</div>\n\n<div class=\"container about-container hidden-xs hidden-sm\">\n  <!-- About Section -->\n  <div class=\"row\">\n    <div class=\"container wrench-container hidden-md hidden-lg hidden-xl\">\n      <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n        <img class=\"wrench\" src=\"../assets/wrench.png\" alt=\"wrench\">\n        <img class=\"multigray-circle\" src=\"../assets/gray-circle.png\" alt=\"circle\">\n      </div>\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"about\">\n        <!--           <img id=\"yellow-gear\" src=\"../assets/yellow-gear.png\">\n          <img id=\"pink-gear\" class=\"hidden-xs hidden-sm\" src=\"../assets/pink-gear.png\"> -->\n        <!-- <img id=\"whitelines1\" class=\"white-lines\" src=\"../assets/white-lines.png\">\n          <img id=\"whitelines2\" class=\"white-lines\" src=\"../assets/white-lines.png\"> -->\n        <h2 class=\"title\">About Clicktool</h2>\n        <br>\n        <br>\n        <p class=\"desc-txt\">The Clicktool team is based in Santa Monica, California. Our core team consists of 12 members and quickly growing.\n          We’ve been hard at work building our first working prototype which is now live in BETA and has satisfied paying\n          customers. Click on the link below to view the Clicktool Tracker webpage.</p>\n        <br>\n        <a href=\"https://tracking.clicktool.com/\" target=\"_blank\" class=\"btn btn-info read-more\">Clicktool Tracker Beta</a>\n      </div>\n    </div>\n    <div class=\"col-md-5 hidden-xs hidden-sm\">\n      <div class=\"wrench-container\">\n        <img class=\"wrench\" src=\"../assets/wrench.png\" alt=\"wrench\">\n        <img class=\"multigray-circle\" src=\"../assets/gray-circle.png\" alt=\"circle\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Second Major Benefit -->\n<div class=\"container-fluid second-container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6\">\n        <h3>THE FIRST ANALYTICS PLATFORM OF ITS KIND. OUR ANALYTICS PLATFORM KEEPS DATA WHERE IT BELONGS: IN THE HANDS OF THE\n          OWNER. </h3>\n        <a href=\"#\" class=\"launch-modal\" data-modal-id=\"modal-video1\">\n          <div class=\"watch-video\">\n            <h3>\n              <i class=\"fa fa-play-circle\"></i>&nbsp;&nbsp;</h3>\n            <h5>Watch Video</h5>\n          </div>\n        </a>\n      </div>\n      <div class=\"col-xs-12 col-sm-6\">\n        <p class=\"desc-txt\">Clicktool is a decentralized tracking platform that allows businesses to easily identify their most most valuable\n          placements in order to maximize their online advertising campaigns.\n          <br>\n          <br>Our goal is to help businesses easily achieve their marketing goals. We do that by providing them with cutting\n          edge tools, helping them easily analyze their data, and by protecting their information in the blockchain. </p>\n      </div>\n    </div>\n  </div>\n  <!-- Video Modal -->\n  <div class=\"modal fade modal-video-div\" id=\"modal-video1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-video-label\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" onclick=\"document.getElementByClass('video-frame').pause();\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"modal-video\">\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <iframe src=\"\" id=\"video-frame1\" class=\"video-frame embed-responsive-item\" width=\"420\" height=\"315\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid bonus-section\">\n  <!-- Bonus Section -->\n  <img class=\"gray-gear\" id=\"gray-gear1\" src=\"../assets/gray-gear1.png\" alt=\"gear\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"text-center\">\n          <h2 class=\"title\">\n            <br />Worldwide Spending On Marketing Automation Software Will Hit $32 Billion This Year. </h2>\n          <br>\n          <p class=\"desc-txt\">Clickcoin Gives You Access To Own A Piece Of This Market.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"videdes bonus-vid\">\n        <img class=\"img-responsive\" src=\"../assets/vide.png\" alt=\"video placeholder\" />\n        <span>\n          <img class=\"img-responsive\" src=\"../assets/vidicon.png\" alt=\"video placeholder\" />\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"experience-container container\">\n  <!-- Experience Section -->\n  <img class=\"gray-gear hidden-xs hidden-sm\" id=\"gray-gear2\" src=\"../assets/gray-gear1.png\" alt=\"gear\">\n  <br>\n  <div class=\"text-center\">\n    <h2 class=\"title blue\">THE FUTURE OF DIGITAL MARKETING IS HERE</h2>\n  </div>\n  <div class=\"info-row\">\n    <img class=\"info-icon\" src=\"../assets/icons-300x/ClickTool_Icons_Current Price.png\" alt=\"dollar icon\">\n    <div class=\"info-text blue\">\n      <br>\n      <h4>ADVANCED TRAFFIC DISTRIBUTION STRATEGIES</h4>\n      <p class=\"desc-txt\">Clicktool’s platform allows users to run advanced A/B tests and test strategic market segmentation to maximize the\n        value of their digital marketing campaigns.\n        <br>Cutting edge no-redirect campaigns represent a breakthrough in tracking technology. We’ve achieved what many called\n        \"impossible.\" This breakthrough represents faster load times, campaign stability and increased value for our customers.\n        </p>\n      <br>\n    </div>\n  </div>\n  <div class=\"info-row\">\n    <img class=\"info-icon hidden-md hidden-lg hidden-xl\" src=\"../assets/icons-300x/ClickTool_Icons_Contributors.png\" alt=\"distributor icon\">\n    <div class=\"info-text blue\">\n      <br>\n      <h4>ADVANCED REPORTING</h4>\n      <p class=\"desc-txt\">Data is the lifeblood of any successful digital advertising campaign. But data is only as good as the decisions it\n        enables.\n        <br>Clicktool’s tracking platform is designed to empower its users. Its easy-to-use reporting allows business owners\n        and campaign managers to visualize the data and clearly see where their most valuable segments are.</p>\n      <br>\n    </div>\n    <img class=\"info-icon hidden-xs hidden-sm\" src=\"../assets/icons-300x/ClickTool_Icons_Contributors.png\" alt=\"contributor icon\">\n  </div>\n  <div class=\"info-row\">\n    <img class=\"info-icon\" src=\"../assets/icons-300x/Icons_pixel-13.png\" alt=\"check mark\">\n    <div class=\"info-text blue\">\n      <br>\n      <h4>SECURITY THROUGH BLOCKCHAIN</h4>\n      <p class=\"desc-txt\">Analytics platforms, by their very nature, contain valuable business data. Centralized applications can’t provide the\n        level of security that a decentralized blockchain can. Clicktool protects its users' valuable analytics data by storing\n        it in a cutting edge blockchain database.</p>\n      <br>\n    </div>\n  </div>\n</div>\n\n<!-- Icon Section -->\n\n<img src=\"../assets/Background_4-top.png\" class=\"top-divider\" alt=\"section divider\">\n<div class=\"container-fluid featuresdes\" id=\"read-more-redirect\">\n  <div class=\"benefit-row\">\n    <app-benefit imageSrc=\"../../assets/0718_icons-01.png\" alt=\"cryptocurrency shopping cart\" imageAlt=\"cryptocurrency shopping cart\"\n      title=\"TRACKING MADE EASY\" info=\"We’ve taken very complex tasks and made them extremely simple. Tasks that would take hours of daily manual labor now can be done in seconds. We’ve designed our tool so that the most relevant data for your business is displayed first. \">\n    </app-benefit>\n    <app-benefit imageSrc=\"../assets/0718_icons-02.png\" imageAlt=\"withdrawal\" title=\"BLOCKCHAIN BASED TRACKING\" info='No more complicated impractical \"self hosted\" solutions. No more unease when using an analytics service because you suspect they may be looking at your data. Blockchain based tracking means only you have access.'>\n    </app-benefit>\n    <app-benefit imageSrc=\"../assets/0718_icons-03.png\" imageAlt=\"dollar gear\" title=\"BYZANTINE FAULT TOLERANT DATABASE\" info=\"Achieving Byzantine Fault tolerance is one of the most difficult challenges for any blockchain based project. Clicktool uses Tendermint for all networking and consensus. Each node has its own local MongoDB database. Full Decentralization at its best.\">\n    </app-benefit>\n    <app-benefit imageSrc=\"../assets/0718_icons-04.png\" imageAlt=\"papers\" title=\"INDEXING AND QUERYING STRUCTURED DATA\" info=\"Each node operator has access to the full power of MongoDB for indexing and querying the stored data. This makes our blockchain enabled database fast and powerful enough to suit every business need.\">\n    </app-benefit>\n    <app-benefit imageSrc=\"../assets/0718_icons-05.png\" imageAlt=\"graph\" title=\"CUTTING EDGE HIGH TRANSACTION RATE BLOCKCHAIN\"\n      info=\"Powered by BigchainDB, our goal has always been the agility to process a large number of transactions each second. We are now able to bring the best of both worlds by providing speed and security in one easy-to-use application.\">\n    </app-benefit>\n    <app-benefit imageSrc=\"../assets/0718_icons-06.png\" imageAlt=\"id\" title=\"TURN AD CLICKS INTO SALES\" info=\"Putting data under a microscope has never been easier. Our users can create reports based on location, device, browsers, type of objective, and many more. If a users wants to send 90% of traffic to one page and 10% to another? They can do it with 1 click. \">\n    </app-benefit>\n    <app-benefit imageSrc=\"../assets/0718_icons-07.png\" imageAlt=\"database\" title=\"FIRST OF IT’S KIND PHONE CALL TRACKING\" info=\"Selling over the phone? We have that covered. Click to call is becoming increasingly important in today’s world. We’ve invented completely new ways to track phone call objectives so you can see where your results are coming from. \">\n    </app-benefit>\n    <app-benefit imageSrc=\"../assets/0718_icons-08.png\" imageAlt=\"vault safe\" title=\"MULTIPLE OBJECTIVE TRACKING\" info=\"Customers do so much before they buy. We help track it all. Want to track when a customer initiates a checkout? Want to track an email signup? We’ve developed objective tracking that allows businesses to record everything a visitor does.\">\n    </app-benefit>\n  </div>\n</div>\n\n\n<app-timelime></app-timelime>\n\n<!-- Chart Section -->\n<br>\n<br>\n<br>\n<div class=\"container chart-container\">\n  <h1>The Distribution Plan</h1>\n  <h3>Transparency from Day One</h3>\n  <div class=\"chart-holder row\">\n    <div class=\"col-sm-12 col-md-5\">\n      <h4>USAGE OF FUNDS</h4>\n      <br>\n      <div class=\"chart1\">\n        <img class=\"chart-gear\" id=\"chart1a\" src=\"../assets/1_400x_Cog_3.png\" alt=\"gear\">\n        <!-- Large Orange Gear -->\n        <img class=\"chart-gear\" id=\"chart1b\" src=\"../assets/1_400x_Cog_7.png\">\n        <!-- Large Turqoise Gear -->\n        <img class=\"chart-gear\" id=\"chart1c\" src=\"../assets/1_400x_Cog_4.png\" alt=\"gear\">\n        <!-- Yellow Gear -->\n        <img class=\"chart-gear\" id=\"chart1d\" src=\"../assets/1_400x_Cog_2.png\" alt=\"gear\">\n        <!-- Medium Light Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart1e\" src=\"../assets/1_400x_Cog_1.png\" alt=\"gear\">\n        <!-- Medium Dark Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart1f\" src=\"../assets/1_400x_Cog_9.png\" alt=\"gear\">\n        <!-- Small Dark Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart1g\" src=\"../assets/1_400x_Cog_6.png\" alt=\"gear\">\n        <!-- Small Dark Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart1h\" src=\"../assets/1_400x_Cog_5.png\" alt=\"gear\">\n        <!-- Medium Dark Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart1i\" src=\"../assets/1_400x_Cog_8.png\" alt=\"gear\">\n        <!-- Medium Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart1j\" src=\"../assets/1_400x_Cog_10.png\" alt=\"gear\">\n        <!-- Medium Orange Gear -->\n        <img class=\"chart-gear\" id=\"chart1k\" src=\"../assets/1_400x_Cog_11.png\" alt=\"gear\">\n        <!-- Small Dark Blue Gear -->\n        <img class=\"chart-text1a\" src=\"../assets/61percent.png\" alt=\"percentage\">\n        <img class=\"chart-text1b\" src=\"../assets/17percent.png\" alt=\"percentage\">\n        <img class=\"chart-text1c\" src=\"../assets/15percent.png\" alt=\"percentage\">\n        <img class=\"chart-text1d\" src=\"../assets/5percent.png\" alt=\"percentage\">\n        <img class=\"chart-text1e\" src=\"../assets/2percent.png\" alt=\"percentage\">\n      </div>\n      <div id=\"legend1\" class=\"legend\">\n        <h4 id=\"marketing\">\n          <span>\n            <span>O </span>Production</span>\n          <span>61%</span>\n        </h4>\n        <h4 id=\"development\">\n          <span>\n            <span>O </span>Marketing</span>\n          <span>17%</span>\n        </h4>\n        <h4 id=\"acquisition\">\n          <span>\n            <span>O </span>Operation</span>\n          <span>15%</span>\n        </h4>\n        <h4 id=\"legal\">\n          <span>\n            <span>O </span>Dapp Platform</span>\n          <span>5%</span>\n        </h4>\n        <h4 id=\"legal2\">\n          <span>\n            <span>O </span>Legal</span>\n          <span>2%</span>\n        </h4>\n        <h4>&nbsp;</h4>\n      </div>\n    </div>\n    <div class=\"col-md-2 hidden-sm hidden-xs\">\n      <div class=\"chart-line\"></div>\n    </div>\n    <div class=\"col-sm-12 col-md-5\">\n      <h4>TOKEN DISTRIBUTION BREAKDOWN</h4>\n      <br>\n      <div class=\"chart2\">\n        <img class=\"chart-gear\" id=\"chart2a\" src=\"../assets/2_400x_Cog_6.png\" alt=\"gear\">\n        <!-- Large Yellow Gear -->\n        <img class=\"chart-gear\" id=\"chart2b\" src=\"../assets/2_400x_Cog_1.png\" alt=\"gear\">\n        <!-- Large Turqoise Gear -->\n        <img class=\"chart-gear\" id=\"chart2c\" src=\"../assets/2_400x_Cog_7.png\" alt=\"gear\">\n        <!-- Large Dark Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart2d\" src=\"../assets/2_400x_Cog_8.png\" alt=\"gear\">\n        <!-- Labelled Orange Gear -->\n        <img class=\"chart-gear\" id=\"chart2e\" src=\"../assets/2_400x_Cog_2.png\" alt=\"gear\">\n        <!-- Medium Light Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart2f\" src=\"../assets/2_400x_Cog_4.png\" alt=\"gear\">\n        <!-- Unlabelled Orange Gear -->\n        <img class=\"chart-gear\" id=\"chart2g\" src=\"../assets/1_400x_Cog_11.png\" alt=\"gear\">\n        <!-- Small Light Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart2h\" src=\"../assets/2_400x_Cog_10.png\" alt=\"gear\">\n        <!-- Medium Yellow Gear -->\n        <img class=\"chart-gear\" id=\"chart2i\" src=\"../assets/2_400x_Cog_5.png\" alt=\"gear\">\n        <!-- Medium Dark Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart2j\" src=\"../assets/2_400x_Cog_9.png\" alt=\"gear\">\n        <!-- Small Dark Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart2k\" src=\"../assets/1_400x_Cog_1.png\" alt=\"gear\">\n        <!-- Smallest Dark Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart2l\" src=\"../assets/1_400x_Cog_1.png\" alt=\"gear\">\n        <!-- Smaller Dark Blue Gear -->\n        <img class=\"chart-gear\" id=\"chart2m\" src=\"../assets/1_400x_Cog_4.png\" alt=\"gear\">\n        <!-- Small Yellow Gear -->\n        <img class=\"chart-text2a\" src=\"../assets/40percent.png\" alt=\"percentage\">\n        <img class=\"chart-text2b\" src=\"../assets/20percent.png\" alt=\"percentage\">\n        <img class=\"chart-text2c\" src=\"../assets/20percent.png\" alt=\"percentage\">\n        <img class=\"chart-text2d\" src=\"../assets/13percent.png\" alt=\"percentage\">\n        <img class=\"chart-text2e\" src=\"../assets/4percent.png\" alt=\"percentage\">\n        <img class=\"chart-text2f\" src=\"../assets/2percentblue.png\" alt=\"percentage\">\n        <img class=\"chart-text2g\" src=\"../assets/1percent.png\" alt=\"percentage\">\n      </div>\n      <div id=\"legend2\" class=\"legend\">\n        <h4 id=\"ico\">\n          <span>\n            <span>O </span>Public Sale</span>\n          <span>40%</span>\n        </h4>\n        <h4 id=\"liquidity\">\n          <span>\n            <span>O </span>Reserve</span>\n          <span>20%</span>\n        </h4>\n        <h4 id=\"distribution\">\n          <span>\n            <span>O </span>Presale</span>\n          <span>10%</span>\n        </h4>\n        <h4 id=\"presale\">\n          <span>\n            <span>O </span>Team</span>\n          <span>13%</span>\n        </h4>\n        <h4 id=\"community\">\n          <span>\n            <span>O </span>Bounty Programs</span>\n          <span>4%</span>\n        </h4>\n        <h4 id=\"advisors\">\n          <span>\n            <span>O </span>Advisors</span>\n          <span>2%</span>\n        </h4>\n        <h4 id=\"air-drop\">\n          <span>\n            <span>O </span>Airdrop</span>\n          <span>1%</span>\n        </h4>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Video Section -->\n<div class=\"container-fluid\" style=\"overflow: hidden;\">\n  <div class=\"vid-screen-mobile-container\">\n    <img class=\"vid-screen-mobile\" src=\"../assets/vid-screen.png\" alt=\"video screen\">\n    <div class=\"vid-text-mobile\">\n      <h3>Blockchain is disrupting Digital Marketing. Clicktool is leading that change.</h3>\n      <a href=\"#\" class=\"launch-modal\" data-modal-id=\"modal-video2\">\n        <div class=\"watch-video\">\n          <h3>\n            <i class=\"fa fa-play-circle\"></i>&nbsp;&nbsp;</h3>\n          <h5>Watch Video</h5>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"vid-container\">\n    <div class=\"vid-text\">\n      <h3>Blockchain is disrupting Digital Marketing. Clicktool is leading that change.</h3>\n      <a href=\"#\" class=\"launch-modal\" data-modal-id=\"modal-video2\">\n        <div class=\"watch-video\">\n          <h3>\n            <i class=\"fa fa-play-circle\"></i>&nbsp;&nbsp;</h3>\n          <h5>Watch Video</h5>\n        </div>\n      </a>\n    </div>\n    <img class=\"vid-background\" src=\"../assets/vid-background.png\" alt=\"video background\">\n    <img class=\"vid-components\" src=\"../assets/vid-components.png\" alt=\"video components\">\n    <img class=\"vid-screen\" src=\"../assets/vid-screen.png\" alt=\"video screen\">\n    <div class=\"electricity-holder\">\n      <img class=\"vid-electricity\" [ngClass]=\"{'display-none':isIE || isMobileOrTablet}\" src=\"../assets/vid-electricity.png\" alt=\"electricity\">\n      <img class=\"vid-electricity2\" [ngClass]=\"{'display-none':isIE}\" src=\"../assets/vid-electricity.png\" alt=\"electricity\">\n    </div>\n    <img class=\"vid-lines\" src=\"../assets/vid-lines.png\" alt=\"line\">\n    <img class=\"vid-line-mobile\" src=\"../assets/vid-line-mobile.png\" alt=\"line\">\n    <img class=\"vid-cloud-left\" src=\"../assets/med-cloud.png\" alt=\"cloud\">\n    <img class=\"vid-cloud-center\" src=\"../assets/med-cloud.png\" alt=\"cloud\">\n    <img class=\"vid-cloud-right\" src=\"../assets/big-cloud.png\" alt=\"cloud\">\n    <img class=\"vid-gear-up-light-blue\" src=\"../assets/gear-up-light-blue.png\" alt=\"gear\">\n    <div class=\"small-red-gear-holder\">\n      <img id=\"vid-gear-small-red\" [ngClass]=\"{'display-none':isMobileOrTablet}\" src=\"../assets/gear-small-red.png\" alt=\"gear\">\n    </div>\n    <div class=\"left-gear-holder\">\n      <img id=\"vid-gear-small-turquoise\" [ngClass]=\"{'display-none':isMobileOrTablet}\" src=\"../assets/gear-small-turquoise.png\"\n        alt=\"gear\">\n      <img id=\"vid-gear-left-yellow\" [ngClass]=\"{'display-none':isMobileOrTablet}\" src=\"../assets/gear-left-yellow.png\" alt=\"gear\">\n      <img id=\"vid-gear-down-light-blue\" [ngClass]=\"{'display-none':isMobileOrTablet}\" src=\"../assets/gear-down-light-blue.png\"\n        alt=\"gear\">\n    </div>\n    <div class=\"big-red-gear-holder\">\n      <img id=\"vid-gear-big-red\" [ngClass]=\"{'display-none':isMobileOrTablet}\" src=\"../assets/gear-big-red.png\" alt=\"gear\">\n    </div>\n    <img class=\"vid-gear-big-turquoise\" src=\"../assets/gear-big-turquoise.png\" alt=\"gear\">\n    <img class=\"vid-gear-right-yellow\" src=\"../assets/gear-right-yellow.png\" alt=\"gear\">\n    <img class=\"vid-gear-blue\" src=\"../assets/gear-blue.png\" alt=\"gear\">\n    <img class=\"vid-gear-big-turquoise vid-gear-big-turquoise-mobile\" [ngClass]=\"{'display-none':!isMobileOrTablet}\" src=\"../assets/gear-big-turquoise.png\"\n      alt=\"gear\">\n    <img class=\"vid-gear-right-yellow vid-gear-right-yellow-mobile\" [ngClass]=\"{'display-none':!isMobileOrTablet}\" src=\"../assets/gear-right-yellow.png\"\n      alt=\"gear\">\n    <img class=\"vid-gear-blue vid-gear-blue-mobile\" [ngClass]=\"{'display-none':!isMobileOrTablet}\" src=\"../assets/gear-blue.png\"\n      alt=\"gear\">\n    <img class=\"vid-gear-holder-mobile\" [ngClass]=\"{'display-none':!isMobileOrTablet}\" src=\"../assets/vid-cog-holder.png\" alt=\"gear\">\n  </div>\n</div>\n<div class=\"modal fade modal-video-div\" id=\"modal-video2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-video-label\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"modal-video\">\n          <div class=\"embed-responsive embed-responsive-16by9\">\n            <iframe src=\"\" id=\"video-frame2\" class=\"video-frame embed-responsive-item\" width=\"420\" height=\"315\" frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Team Section -->\n<div class=\"container team-section\">\n  <h2 class=\"title\">MEET OUR TEAM</h2>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/carlos-cruz-3a98ba100/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/carlos-800.png\" name=\"Carlos Cruz\" role=\"CEO\" icon=\"true\">\n        </app-employee>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/irina-mamneva-1536116b/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/Irika_800x.png\" name=\"Irina Cruz\" role=\"Financial Advisor\" icon=\"true\">\n\n        </app-employee>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/jamie3160003/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/jamie-800.png\" name=\"Yu-Jen Su\" role=\"Software Developer\" icon=\"true\">\n        </app-employee>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/voranon-chumnansiri-77030798/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/voranon.png\" name=\"Voranon Chumnansiri\" role=\"Software Developer\" icon=\"true\">\n        </app-employee>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/chriskendrick25/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/chris.png\" name=\"Chris Kendrick\" role=\"Software Developer\" icon=\"true\">\n        </app-employee>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/jurick-joling/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/jurick-800.png\" name=\"Jurick Joling\" role=\"Software Developer\" icon=\"true\">\n        </app-employee>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/bryant-h-5691947a/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/bryant-800.png\" name=\"Bryant Higa\" role=\"Marketing\" icon=\"true\">\n        </app-employee>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/calistasin/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/calista.png\" name=\"Calista Sin\" role=\"Marketing\" icon=\"true\">\n        </app-employee>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/vladyyurov/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/vlad.png\" name=\"Vlad Yurov\" role=\"Social Media Buyer\" icon=\"true\">\n        </app-employee>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-3\">\n      <a href=\"https://www.linkedin.com/in/stellalyn-njue-2559368b/\" target=\"_blank\">\n        <app-employee imageSrc=\"../assets/cammie-800.png\" name=\"Cammie Njue\" role=\"Executive Assistant\" icon=\"true\">\n        </app-employee>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- Call to Action -->\n<div class=\"action-container\">\n  <div class=\"clicktool-city\">\n    <img class=\"city-background\" src=\"../assets/city-background.png\" alt=\"city background\">\n    <img class=\"city-cloud-medium city-cloud-top-left1\" src=\"../assets/city-cloud-medium.png\" alt=\"cloud\">\n    <img class=\"city-cloud-medium city-cloud-top-left2\" src=\"../assets/city-cloud-medium.png\" alt=\"cloud\">\n    <img class=\"city-cloud-lg city-cloud-top-left3\" src=\"../assets/city-cloud-lg.png\" alt=\"cloud\">\n    <img class=\"city-cloud-medium city-cloud-top-center\" src=\"../assets/city-cloud-medium.png\" alt=\"cloud\">\n    <img class=\"city-cloud-lg city-cloud-top-right1\" src=\"../assets/city-cloud-lg.png\" alt=\"cloud\">\n    <img class=\"city-cloud-medium city-cloud-top-right2\" src=\"../assets/city-cloud-medium.png\" alt=\"cloud\">\n    <img class=\"city-cloud-medium city-cloud-top-right3\" src=\"../assets/city-cloud-medium.png\" alt=\"cloud\">\n    <img class=\"city-cloud-medium city-cloud-bottom-right\" src=\"../assets/city-cloud-medium.png\" alt=\"cloud\">\n    <img class=\"city-cloud-medium city-cloud-bottom-left1\" src=\"../assets/city-cloud-medium.png\" alt=\"cloud\">\n    <img class=\"city-cloud-bottom-left2\" src=\"../assets/city-cloud-sm.png\" alt=\"cloud\">\n    <img class=\"city-bird city-bird-left\" src=\"../assets/city-bird.png\" alt=\"bird\">\n    <img class=\"city-bird city-bird-right\" src=\"../assets/city-bird.png\" alt=\"bird\">\n    <div class=\"city-boat-holder-left\">\n      <img src=\"../assets/city-boat1.png\" alt=\"boat\">\n    </div>\n    <div class=\"city-boat-holder-center\">\n      <img src=\"../assets/city-boat2.png\" alt=\"boat\">\n    </div>\n    <div class=\"city-boat-holder-right\">\n      <img src=\"../assets/city-boat3.png\" alt=\"boat\">\n    </div>\n    <img class=\"windmill\" src=\"../assets/windmill.png\">\n    <div class=\"city-train-holder\">\n      <img src=\"../assets/city-train.png\" alt=\"train\">\n    </div>\n    <div class=\"city-car-holder-top-left\">\n      <img src=\"../assets/city-car1.png\" alt=\"car\">\n    </div>\n    <div class=\"city-car-holder-top-right\">\n      <img src=\"../assets/city-car2.png\" alt=\"car\">\n    </div>\n    <div class=\"city-car-holder-bottom\">\n      <img src=\"../assets/city-car3.png\" alt=\"car\">\n      <img src=\"../assets/city-car4.png\" alt=\"car\">\n    </div>\n    <img class=\"city-logo\" src=\"../assets/city-logo.png\" alt=\"logo\">\n    <img class=\"city-logo2\" src=\"../assets/city-logo2.png\" alt=\"logo\">\n    <img class=\"city-gear-bottom-right1\" src=\"../assets/city-gear-right-turquoise.png\" alt=\"gear\">\n    <div class=\"city-gear-bottom-right2\" alt=\"gear\">\n      <img id=\"city-gear-bottom-right-two\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/gear-small-red.png\" alt=\"gear\">\n    </div>\n    <div class=\"city-gear-bottom-left1\">\n      <img id=\"city-gear-bottom-left-one\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/gear-big-red.png\" alt=\"gear\">\n    </div>\n    <div class=\"city-gear-top-left\">\n      <img id=\"city-gear-top-left-img\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/city-gear-top-yellow.png\"\n        alt=\"gear\">\n    </div>\n    <div class=\"city-gear-bottom-left2\">\n      <img id=\"city-gear-bottom-left2a\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/city-gear-left-turquoise.png\"\n        alt=\"gear\">\n      <img id=\"city-gear-bottom-left2b\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/city-gear-bottom-left-yellow.png\"\n        alt=\"gear\">\n      <img id=\"city-gear-bottom-left2c\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/city-gear-bottom-left-lightblue.png\"\n        alt=\"gear\">\n    </div>\n    <div class=\"city-gear-middle\">\n      <img id=\"city-gear-middle-one\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/city-gear-middle-white.png\"\n        alt=\"gear\">\n      <img id=\"city-gear-middle-two\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/city-gear-middle-blue.png\"\n        alt=\"gear\">\n    </div>\n    <div class=\"city-gear-top-center\">\n      <img id=\"city-gear-top-center-one\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/city-gear-gray.png\" alt=\"gear\">\n      <img id=\"city-gear-top-center-two\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/city-gear-top-right-yellow.png\"\n        alt=\"gear\">\n      <img id=\"city-gear-top-center-three\" [ngClass]=\"{'animation-none':isMobileOrTablet}\" src=\"../assets/city-gear-top-blue.png\"\n        alt=\"gear\">\n    </div>\n  </div>\n  <div class=\"indresgsec\">\n    <h1>Join Our Fast Growing Community, Get Exclusive Rewards</h1>\n    <br>\n    <p class=\"desc-txt\">Have questions that need answers? Join our telegram group and ask away. Our community is here to help 24/7. Follow us\n      on all social media channels and get exclusive bonuses, airdrops, bounty rewards and the latest news. Help us improve\n      this industry, your voice matters to us!</p>\n    <div class=\"social-icons\">\n      <a href=\"https://www.facebook.com/click.tool.71\" target=\"_blank\">\n        <p class=\"facebook\">\n          <i class=\"fab fa-facebook-square\"></i>\n        </p>\n      </a>\n      <a href=\"https://twitter.com/clickcoins\" target=\"_blank\">\n        <p class=\"twitter\">\n          <i class=\"fab fa-twitter-square\"></i>\n        </p>\n      </a>\n      <a href=\"https://www.linkedin.com/company/clicktool/\" target=\"_blank\">\n        <p class=\"linkedin\">\n          <i class=\"fab fa-linkedin\"></i>\n        </p>\n      </a>\n      <a href=\"https://www.instagram.com/clicktool/\" target=\"_blank\">\n        <div class=\"instagram\">\n          <i class=\"fab fa-instagram\"></i>\n        </div>\n      </a>\n      <a href=\"https://www.reddit.com/user/ClickTool/\" target=\"_blank\">\n        <p class=\"reddit\">\n          <i class=\"fab fa-reddit-square\"></i>\n        </p>\n      </a>\n      <a href=\"https://t.me/clicktool\" target=\"_blank\">\n        <p class=\"telegram\">\n          <i class=\"fab fa-telegram\"></i>\n          <p>\n      </a>\n      <a href=\"https://medium.com/@clicktool\" target=\"_blank\">\n        <p class=\"medium\">\n          <i class=\"fab fa-medium\"></i>\n        </p>\n      </a>\n    </div>\n  </div>\n  <!--     <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6\">\n\n      </div>\n      <div class=\"col-xs-12 col-sm-6\">\n        <div class=\"hidden-xs\">\n          <br class=\"hidden-sm\">\n          <br class=\"hidden-sm\">\n          <br>\n          <br>\n          <br>\n        </div>\n\n      </div>\n    </div> -->\n</div>\n\n<br>\n<br>\n<img src=\"../assets/Background_3-top.png\" class=\"top-divider\" alt=\"background\">\n<div class=\"container-fluid sign-up\">\n  <h1>Get The Latest News On Our ICO</h1>\n  <p class=\"desc-txt\">Sign up to our newsletter to receive the latest news. Our email subscribers may receive early discount, special bonuses\n    and a behind the scenes look of our company. Sign up below to stay updated.</p>\n  <!-- <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#signupModal\">Open Modal</button> -->\n  <a href=\"#\" class=\"btn btn-modal\" data-toggle=\"modal\" data-target=\"#signupModal\">\n\n    <div class=\"action-button\">\n      <h3>\n        <i class=\"fa fa-check-circle\"></i>&nbsp;&nbsp;</h3>\n      <h5>Sign Up</h5>\n      <div class=\"shine\"></div>\n    </div>\n  </a>\n</div>\n\n<app-footer></app-footer>\n\n<app-signup-modal></app-signup-modal>"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_util_util__ = __webpack_require__("../../../../../src/app/shared/util/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(u) {
        this.u = u;
        this.isMobileOrTablet = false;
        this.isSafari = false;
        this.isIE = false;
    }
    HomepageComponent.prototype.ngOnDestroy = function () {
        this.u.deleteLocalObject("user");
    };
    // onScroll() {
    //   var offset = this.document.scrollTop();
    //   offset = 75 + (offset * 0.2);
    //   console.log(offset);
    //   $('.wrench').css({
    //     '-moz-transform': 'rotate(' + offset + 'deg)',
    //     '-webkit-transform': 'rotate(' + offset + 'deg)',
    //     '-o-transform': 'rotate(' + offset + 'deg)',
    //     '-ms-transform': 'rotate(' + offset + 'deg)',
    //     'transform': 'rotate(' + offset + 'deg)',
    //   });
    //   $('#yellow-gear').css({
    //     '-moz-transform': 'rotate(' + offset + 'deg)',
    //     '-webkit-transform': 'rotate(' + offset + 'deg)',
    //     '-o-transform': 'rotate(' + offset + 'deg)',
    //     '-ms-transform': 'rotate(' + offset + 'deg)',
    //     'transform': 'rotate(' + offset + 'deg)',
    //   });
    //   offset = 360 - offset;
    //   $('.multigray-circle').css({
    //     '-moz-transform': 'rotate(' + offset + 'deg)',
    //     '-webkit-transform': 'rotate(' + offset + 'deg)',
    //     '-o-transform': 'rotate(' + offset + 'deg)',
    //     '-ms-transform': 'rotate(' + offset + 'deg)',
    //     'transform': 'rotate(' + offset + 'deg)',
    //   });
    //   $('#pink-gear').css({
    //     '-moz-transform': 'rotate(' + offset + 'deg)',
    //     '-webkit-transform': 'rotate(' + offset + 'deg)',
    //     '-o-transform': 'rotate(' + offset + 'deg)',
    //     '-ms-transform': 'rotate(' + offset + 'deg)',
    //     'transform': 'rotate(' + offset + 'deg)',
    //   });
    // }
    HomepageComponent.prototype.ngOnInit = function () {
        var ua = navigator.userAgent;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
            this.isMobileOrTablet = true;
        }
        else if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(ua)) {
            this.isMobileOrTablet = true;
        }
        if (navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
            this.isSafari = true;
        }
        if (/msie\s|trident\/|edge\//i.test(ua)) {
            this.isIE = true;
        }
        // Scoll implemenation
        // window.addEventListener('scroll', this.onScroll, true )
        // Dynamic Headline - https://css-tricks.com/snippets/css/typewriter-effect/
        var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = 90;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
        TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            }
            else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
            var that = this;
            var delta = 90;
            if (this.isDeleting) {
                delta /= 2;
            }
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = 90;
                this.isDeleting = true;
            }
            else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 90;
            }
            setTimeout(function () {
                that.tick();
            }, delta);
        };
        window.onload = function () {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
        // New Countdown Timer
        // Set the date we're counting down to
        var countDownDate = new Date("Oct 1, 2018 12:00:00").getTime();
        var secondsDegree = 0;
        var minutesDegree = 15;
        //window.addEventListener('blur', x); TODO fix it
        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get todays date and time
            var now = new Date().getTime();
            // Find the distance between now an the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            secondsDegree += 30;
            minutesDegree -= 30;
            // Display the result
            document.getElementById("days").innerHTML = String(days);
            document.getElementById("hours").innerHTML = String(hours);
            document.getElementById("minutes").innerHTML = String(minutes);
            document.getElementById("seconds").innerHTML = String(seconds);
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
        // Gear Charts
        function chartGearSpin(item) {
            $(item).stop(true);
            $(item).animate({ rotation: 180 }, {
                duration: 500,
                easing: 'swing',
                step: function (now, fx) {
                    $(this).css({ "transform": "rotate(" + now + "deg)" });
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                }
            });
            $(item).animate({ rotation: 0 }, {
                duration: .0001,
                easing: 'linear',
                step: function (now, fx) {
                    $(this).css({ "transform": "rotate(" + now + "deg)" });
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                }
            });
        }
        // Bind Legend and Gears
        $('.chart-gear').mouseenter(function () {
            chartGearSpin(this);
        });
        $('.chart-text1a, #chart1b').mouseenter(function () {
            $('#marketing').addClass('chart-active chart-active1a');
        });
        $('#chart1b, .chart-text1a').mouseleave(function () {
            $('#marketing').removeClass('chart-active chart-active1a');
        });
        $('#marketing').mouseenter(function () {
            chartGearSpin('#chart1b');
        });
        $('#chart1a, .chart-text1b').mouseenter(function () {
            $('#development').addClass('chart-active chart-active2a');
        });
        $('#chart1a, .chart-text1b').mouseleave(function () {
            $('#development').removeClass('chart-active chart-active2a');
        });
        $('#development').mouseenter(function () {
            chartGearSpin('#chart1a');
        });
        $('#chart1c, .chart-text1c').mouseenter(function () {
            $('#acquisition').addClass('chart-active chart-active3a');
        });
        $('#chart1c, .chart-text1c').mouseleave(function () {
            $('#acquisition').removeClass('chart-active chart-active3a');
        });
        $('#acquisition').mouseenter(function () {
            chartGearSpin('#chart1c');
        });
        $('#chart1d, .chart-text1d').mouseenter(function () {
            $('#legal').addClass('chart-active chart-active4a');
        });
        $('#chart1d, .chart-text1d').mouseleave(function () {
            $('#legal').removeClass('chart-active chart-active4a');
        });
        $('#chart1k, .chart-text1e').mouseenter(function () {
            $('#legal2').addClass('chart-active chart-active2b');
        });
        $('#chart1k, .chart-text1e').mouseleave(function () {
            $('#legal2').removeClass('chart-active chart-active2b');
        });
        $('#legal').mouseenter(function () {
            chartGearSpin('#chart1d');
        });
        $('#legal2').mouseenter(function () {
            chartGearSpin('#chart1k');
        });
        $('#chart2a, .chart-text2a').mouseenter(function () {
            $('#ico').addClass('chart-active chart-active1b');
        });
        $('#chart2a, .chart-text2a').mouseleave(function () {
            $('#ico').removeClass('chart-active chart-active1b');
        });
        $('#ico').mouseenter(function () {
            chartGearSpin('#chart2a');
        });
        $('#chart2c, .chart-text2b').mouseenter(function () {
            $('#liquidity').addClass('chart-active chart-active2b');
        });
        $('#chart2c, .chart-text2b').mouseleave(function () {
            $('#liquidity').removeClass('chart-active chart-active2b');
        });
        $('#liquidity').mouseenter(function () {
            chartGearSpin('#chart2c');
        });
        $('#chart2b, .chart-text2c').mouseenter(function () {
            $('#distribution').addClass('chart-active chart-active3b');
        });
        $('#chart2b, .chart-text2c').mouseleave(function () {
            $('#distribution').removeClass('chart-active chart-active3b');
        });
        $('#distribution').mouseenter(function () {
            chartGearSpin('#chart2b');
        });
        $('#chart2d, .chart-text2d').mouseenter(function () {
            $('#presale').addClass('chart-active chart-active4b');
        });
        $('#chart2d, .chart-text2d').mouseleave(function () {
            $('#presale').removeClass('chart-active chart-active4b');
        });
        $('#presale').mouseenter(function () {
            chartGearSpin('#chart2d');
        });
        $('#chart2e, .chart-text2e').mouseenter(function () {
            $('#community').addClass('chart-active chart-active5');
        });
        $('#chart2e, .chart-text2e').mouseleave(function () {
            $('#community').removeClass('chart-active chart-active5');
        });
        $('#community').mouseenter(function () {
            chartGearSpin('#chart2e');
        });
        $('#chart2m, .chart-text2f').mouseenter(function () {
            $('#advisors').addClass('chart-active chart-active1b');
        });
        $('#chart2m, .chart-text2f').mouseleave(function () {
            $('#advisors').removeClass('chart-active chart-active1b');
        });
        $('#advisors').mouseenter(function () {
            chartGearSpin('#chart2m');
        });
        $('#chart2g, .chart-text2g').mouseenter(function () {
            $('#air-drop').addClass('chart-active chart-active2b');
        });
        $('#chart2g, .chart-text2g').mouseleave(function () {
            $('#air-drop').removeClass('chart-active chart-active2b');
        });
        $('#air-drop').mouseenter(function () {
            chartGearSpin('#chart2g');
        });
        // Video Modal -------------------
        $('.launch-modal').on('click', function (e) {
            e.preventDefault();
            $('#' + $(this).data('modal-id')).modal();
            if ($($(this).data('modal-id')).modal().selector == 'modal-video1') {
                $('#video-frame1').attr("src", "https://youtube.com/embed/r43LhSUUGTQ?version=3&enablejsapi=1");
                // document.getElementById('video-frame1').play();
            }
            else if ($($(this).data('modal-id')).modal().selector == 'modal-video2') {
                $('#video-frame2').attr("src", "https://youtube.com/embed/r43LhSUUGTQ?version=3&enablejsapi=1");
                // document.getElementById('video-frame2').play();
            }
        });
        $(".modal-video-div").on("hidden.bs.modal", function () {
            $('#video-frame1').attr("src", "");
            $('#video-frame2').attr("src", "");
            // document.getElementById('video-frame1').pause();
            // document.getElementById('video-frame2').pause();
        });
    }; // End ngOnInit
    HomepageComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            document.querySelector('#top-design').style.opacity = '1';
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Boolean)
    ], HomepageComponent.prototype, "isMobileOrTablet", void 0);
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_util_util__["a" /* Util */]],
            host: { '(window:scroll)': 'track($event)' },
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_util_util__["a" /* Util */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/shared/homepage-header/homepage-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  right: 15px;\n}\n\n.nav-btn i {\n  font-size: 32px;\n}\n\n.nav-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.nav-buttons a {\n  margin-right: 30px;\n}\n\n.nav-buttons a div{\n  color: white;\n  font-size: 18px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  text-align: center;\n  -webkit-box-shadow: 1px 1px 2px 0px #CCCCCC;\n          box-shadow: 1px 1px 2px 0px #CCCCCC;\n}\n\n.nav-dropdown-style {\n  padding-left: 20px;\n  background-color: white;\n}\n\n.nav-dropdown-style li {\n  background-color: white;\n  border-bottom: 1px solid #24537f;\n  width: 80%;\n}\n\n.navbar {\n  position: relative;\n  z-index:  100;\n}\n\n.nav-login {\n  background-color: #24537f;\n}\n\n.nav-login:hover {\n  background-color: #1D4265;\n}\n\n.nav-login:active {\n  background-color: #153048;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n.nav-signup {\n  background-color: #fd8a66;\n}\n\n.nav-signup:hover {\n  background-color: #D77659;\n}\n\n.nav-signup:active {\n  background-color: #AB5E48;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n@media (max-width: 767px) {\n/*  .nav-btn {\n    margin-right: -28px;\n  }*/\n}\n\n.ico-tab {\n  position: absolute;\n  background: #f5f6f5;\n  z-index: 1000;\n  top: 95px;\n  width: 100%;\n}\n\n@media only screen and (max-width: 991px) {\n  .ico-tab {\n    top: 82px;\n    \n  } \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/shared/homepage-header/homepage-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"indextopsection\"><!-- Language Bar -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <br>\n      </div>\n    </div>\n</div>\n<div class=\"banners\"> <!-- Navbar -->\n  <header class=\"home-header\">\n    <div>\n      <div class=\"row\" style=\"margin-left: 0; margin-right: 0;\">\n        <div class=\"col-lg-12\" style=\"padding-left: 0; padding-right: 0;\">\n          <nav class=\"navbar navbar-shadow navbar-xtra-pad\">\n            <br>\n            <div class=\"navbar-header\">\n              <a href=\"index.html\"><img class=\"nav-logo img-responsive\" src=\"../assets/logo.png\"></a>\n              <!-- <button data-target=\"#myNavbar\" data-toggle=\"collapse\" class=\"navbar-toggle\" type=\"button\"> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button> -->\n            </div>\n\n            <div id=\"myNavbar\" class=\"hidden-xs hidden-sm\">\n              <ul class=\"nav navbar-nav\">\n                <li><a href=\"index.html\">Home</a></li>\n                <li><a href=\"whitepaper.html\">Whitepaper</a></li>\n                <li><a href=\"http://blog.clicktool.com/\">Blog</a></li>\n                <li><a routerLink=\"/affiliate\" href=\"/affiliate\">Affiliate Program</a></li>\n                <li><a href=\"#\" routeLink=\"/bounty\" href=\"/bounty\" id=\"bt\">ICO</a></li>\n<!--                   <li class=\"hidden-md hidden-sm hidden-lg hidden-xl\"><a routerLink=\"/login\" href=\"/login\">Login</a></li>\n                <li class=\"hidden-md hidden-sm hidden-lg hidden-xl\"><a routerLink=\"/signup\" href=\"/signup\">Buy Tokens</a></li> -->\n              </ul>\n            </div>\n            <div class=\"nav-btn\">\n              <div class=\"dropdown hidden-md hidden-lg hidden-xl\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n                </button>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                  <ul class=\"nav nav-dropdown-style\">\n                    <li><a href=\"index.html\">Home</a></li>\n                    <li><a href=\"whitepaper.html\">Whitepaper</a></li>\n                    <li><a href=\"http://blog.clicktool.com/\">Blog</a></li>\n                    <li><a routerLink=\"/affiliate\" href=\"/affiliate\">Affiliate Program</a></li>\n                    <li><a routeLink=\"/bounty\" href=\"/bounty\" id=\"bt\">ICO</a></li>\n                    <li><a routerLink=\"/login\" href=\"/login\">Login</a></li>\n                    <li style=\"border-bottom: none\"><a routerLink=\"/signup\" href=\"/signup\">Buy Tokens</a></li>\n                  </ul>\n                </div>\n              </div>\n              <!-- <div class=\"nav-buttons\">\n                <a routerLink=\"/login\" href=\"/login\"><div class=\"nav-login hidden-xs hidden-sm\"><p>Login</p></div></a>\n                <a routerLink=\"/signup\" href=\"/signup\"><div class=\"nav-signup hidden-xs hidden-sm\"><p>Buy Tokens</p></div></a>\n              </div> -->\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </header>\n</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/shared/homepage-header/homepage-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageHeaderComponent = /** @class */ (function () {
    function HomepageHeaderComponent() {
        this.tabshow = false;
    }
    HomepageHeaderComponent.prototype.ngOnInit = function () {
    };
    HomepageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage-header',
            template: __webpack_require__("../../../../../src/app/homepage/shared/homepage-header/homepage-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/shared/homepage-header/homepage-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageHeaderComponent);
    return HomepageHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/shared/large-gear/large-gear.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".milestone-gear {\n  pointer-events: none;\n  -o-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 73%;\n  position: absolute;\n  width: 30%;\n  z-index: 6;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/shared/large-gear/large-gear.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/big Cog.png\" class=\"milestone-gear\" #mileStoneGear>"

/***/ }),

/***/ "../../../../../src/app/homepage/shared/large-gear/large-gear.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LargeGearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_util_animation__ = __webpack_require__("../../../../../src/app/shared/util/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LargeGearComponent = /** @class */ (function () {
    function LargeGearComponent(animation) {
        this.animation = animation;
    }
    LargeGearComponent.prototype.ngOnInit = function () {
        this.$this = $(this.mileStoneGear.nativeElement);
        this.repeat();
    };
    LargeGearComponent.prototype.repeat = function () {
        var _this = this;
        this.intervalID = setInterval(function () {
            if (_this.isAnimatingRight) {
                _this.position = 45;
            }
            else {
                _this.position = -45;
            }
            if (!_this.isPaused) {
                _this.animate();
            }
        }, +this.pauseTime);
    };
    LargeGearComponent.prototype.animate = function () {
        this.animation.spin(this.mileStoneGear.nativeElement, this.position, this.animationSpeed, function () {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mileStoneGear'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LargeGearComponent.prototype, "mileStoneGear", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LargeGearComponent.prototype, "isPaused", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LargeGearComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], LargeGearComponent.prototype, "isAnimatingRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LargeGearComponent.prototype, "animationSpeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LargeGearComponent.prototype, "pauseTime", void 0);
    LargeGearComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-large-gear',
            template: __webpack_require__("../../../../../src/app/homepage/shared/large-gear/large-gear.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/shared/large-gear/large-gear.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_util_animation__["a" /* Animation */]])
    ], LargeGearComponent);
    return LargeGearComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/shared/machine-animation/machine-animation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Milestone Section */\n\n.milestone-container {\n  overflow: hidden;\n  -o-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  position: relative;\n  width: 100.5vw;\n  height: calc(101vw / 2.02);\n  top: 0;\n  right: 1.6vw;\n  margin: auto;\n}\n\n.milestone-container div {\n  position: absolute;\n}\n\n.milestone-text {\n  text-align: center;\n  padding: 20px;\n  color: #737373;\n}\n\n.milestone-container img {\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n  user-drag: none;\n  position: absolute;\n}\n\n.timeline-background {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1 !important;\n}\n\n.timeline-button-left {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  top: 0;\n  -webkit-animation: timelineButtonLeft 5s linear infinite;\n          animation: timelineButtonLeft 5s linear infinite;\n}\n\n.tl-button-left1 {\n  animation-direction: reverse;\n}\n\n.timeline-button-right {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  top: 0;\n  -webkit-animation: timelineButtonRight 4s linear infinite;\n          animation: timelineButtonRight 4s linear infinite;\n}\n\n.tl-button-right2 {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.tl-button-right3 {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n.timeline-button-big {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: timelineButtonRight 2.2s linear infinite;\n          animation: timelineButtonRight 2.2s linear infinite;\n}\n\n.timeline-slider {\n  width: 1.5%;\n  top: 14%;\n  z-index: 3;\n}\n\n.timeline-slider1 {\n  right: 66.4%;\n  -webkit-animation: blueSlider 5s ease-in-out infinite;\n          animation: blueSlider 5s ease-in-out infinite;\n}\n\n.timeline-slider2 {\n  right: 64.8%;\n  -webkit-animation: blueSlider 5.2s ease-in-out infinite;\n          animation: blueSlider 5.2s ease-in-out infinite;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.timeline-slider3 {\n  right: 63.25%;\n  -webkit-animation: blueSlider 4.8s ease-in-out infinite;\n          animation: blueSlider 4.8s ease-in-out infinite;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n.timeline-gear-holder {\n  height: 6%;\n  width: 6%;\n  overflow: hidden;\n  top: 3.3%;\n  right: 62%;\n  z-index: 3;\n}\n\n.timeline-gear-holder img {\n  width: 84%;\n  top: 16%;\n  right: 14%;\n  animation: rotate 6s reverse linear infinite;\n}\n\n.timeline-gray-gear-bottom-left {\n  width: 4%;\n  top: 74.2%;\n  right: 62%;\n  z-index: 3;\n  -webkit-animation: rotate 7s linear infinite;\n          animation: rotate 7s linear infinite;\n}\n\n.timeline-gray-gear-bottom-right {\n  width: 4%;\n  top: 87.2%;\n  right: 10.2%;\n  z-index: 3;\n  -webkit-animation: rotate 7s linear infinite;\n          animation: rotate 7s linear infinite;\n}\n\n.timeline-gray-gear-top-left {\n  width: 4%;\n  top: 25%;\n  right: 82%;\n  z-index: 3;\n  -webkit-animation: rotate 7s linear infinite;\n          animation: rotate 7s linear infinite;\n}\n\n.timeline-gray-gear-top-right {\n  width: 4%;\n  top: 27.6%;\n  right: 78.5%;\n  z-index: 3;\n  animation: rotate 7s reverse linear infinite;\n}\n\n.expanding-pipe {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  z-index: 3;\n  -webkit-animation: expandingPipe 3s ease-in-out infinite;\n          animation: expandingPipe 3s ease-in-out infinite;\n}\n\n.timeline-lower-left-box {\n  width: 100%;\n  height: 100%;\n  top: 0%;\n  -webkit-animation: timelineBox 5s ease-in-out infinite;\n          animation: timelineBox 5s ease-in-out infinite;\n}\n\n.timeline-silhouette-machine {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n}\n\n.timeline-silhouette-machine2 {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: silhouetteMachine 5s ease-in-out infinite;\n          animation: silhouetteMachine 5s ease-in-out infinite;\n}\n\n.timeline-silhouette-button {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n  -webkit-animation: silhouetteButton 2.4s ease-in-out infinite;\n          animation: silhouetteButton 2.4s ease-in-out infinite;\n}\n\n.timeline-moving-pipe {\n  width: 108%;\n  height: 110%;\n  top: 0;\n  z-index: 3;\n  right: -0.4%;\n  -webkit-animation: movingPipe 3s ease-in-out infinite;\n          animation: movingPipe 3s ease-in-out infinite;\n}\n\n.timeline-pipefill-top-left {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillTopLeft 3s linear infinite;\n          animation: pipefillTopLeft 3s linear infinite;\n}\n\n.timeline-pipeoverlay-top-left {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n}\n\n.timeline-pipefill-top-right {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillTopRight 3.2s linear infinite;\n          animation: pipefillTopRight 3.2s linear infinite;\n}\n\n.timeline-red-pipe-end {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n}\n\n.timeline-pipeoverlay-top-center {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n}\n\n.timeline-pipefill-top-center {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillTopCenter 4s linear infinite;\n          animation: pipefillTopCenter 4s linear infinite;\n}\n\n.timeline-pipefill-top-left2 {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillTopLeftTwo 4s linear infinite;\n          animation: pipefillTopLeftTwo 4s linear infinite;\n}\n\n.timeline-pipefill-center-left {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillTopRightTwo 3.1s linear infinite;\n          animation: pipefillTopRightTwo 3.1s linear infinite;\n}\n\n.timeline-pipefill-center-right {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillCenterRight 3.2s linear infinite;\n          animation: pipefillCenterRight 3.2s linear infinite;\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s;\n}\n\n.timeline-pipefill-center-right2 {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillCenterRightTwo 5.2s linear infinite;\n          animation: pipefillCenterRightTwo 5.2s linear infinite;\n}\n\n.timeline-pipeoverlay-center-right {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n  -webkit-clip-path: inset(60% 0% 0% 0%);\n          clip-path: inset(60% 0% 0% 0%)\n}\n\n.timeline-pipe-overflow {\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  top: 0;\n  -webkit-animation: timelinePipeOverflow 2.8s linear infinite;\n          animation: timelinePipeOverflow 2.8s linear infinite;\n}\n\n.timeline-pipe-overflow2 {\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  top: 0;\n  -webkit-animation: timelinePipeOverflowTwo 2.9s linear infinite;\n          animation: timelinePipeOverflowTwo 2.9s linear infinite;\n}\n\n.conveyor {\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 52%;\n  position: absolute;\n  width: 100%;\n  z-index: 4;\n}\n\n.machine {\n  right: -25%;\n  top: -64.8%;\n  position: absolute;\n  width: 145%;\n  z-index: 5;\n}\n\n.machine-box {\n  top: 28%;\n  position: absolute;\n  width: 700%;\n  z-index: 3;\n}\n\n.machine-screen {\n  position: absolute;\n  top: 20%;\n  width: 15%;\n  left: 42.8%;\n  height: 26%;\n  z-index: 6;\n}\n\n.yellow-light {\n  height: 4%;\n  width: 4%;\n  background-color: #fbc943;\n  position: absolute;\n  top: 4%;\n  z-index: 7;\n}\n\n.yellow-light1 {\n  right: 5%;\n  -webkit-animation: blink 1s ease-in-out infinite;\n          animation: blink 1s ease-in-out infinite;\n}\n\n.yellow-light2 {\n  right: 12%;\n  -webkit-animation-delay: .75s;\n          animation-delay: .75s;\n  -webkit-animation: blink 3s ease-in-out infinite;\n          animation: blink 3s ease-in-out infinite;\n}\n\n.yellow-light3 {\n  right: 19%;\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n  -webkit-animation: blink 2s ease-in-out infinite;\n          animation: blink 2s ease-in-out infinite;\n}\n\n.yellow-bar {\n  height: 4%;\n  width: 40%;\n  background-color: #fbc943;\n  position: absolute;\n  left: 0%;\n  z-index: 7;\n}\n\n.yellow-bar1 {\n  top: 5%;\n  -webkit-animation: 3s yellowBar ease infinite;\n          animation: 3s yellowBar ease infinite;\n}\n\n.yellow-bar2 {\n  top: 11%;\n  -webkit-animation: 4s yellowBar ease infinite;\n          animation: 4s yellowBar ease infinite;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.machine-text {\n  top: -7%;\n  position: absolute;\n  width: 700%;\n}\n\n.directions {\n  height: 28%;\n  position: absolute;\n  bottom: 0;\n  z-index: 10;\n  width: 60%;\n  left: 20%;\n  border: 1px solid red;\n}\n\n.directions:hover {\n  cursor: pointer;\n}\n\n.left {\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  z-index: -1;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 6vw;\n  padding-right: -15%;\n  visibility: hidden;\n}\n\n.right {\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  z-index: -1;\n  bottom: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 6vw;\n  padding-left: -15%;\n  visibility: hidden;\n}\n\n.blue-arrow {\n  color: #24537f;\n  -webkit-animation: arrowFade 2s infinite;\n          animation: arrowFade 2s infinite;\n}\n\n.blue-arrow2 {\n  color: #24537f;\n  -webkit-animation: arrowFade 2s infinite;\n          animation: arrowFade 2s infinite;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.instructions {\n  position: absolute;\n  width: 10%;\n  bottom: -0.1%;\n  left: 45%;\n  z-index: 7;\n}\n\n.instructions-icons {\n  bottom: 9%;\n  opacity: 0.5;\n}\n\n.small-gear {\n  left: 0;\n  margin: auto;\n  top: 54.5%;\n  position: absolute;\n  width: 3%;\n  z-index: 4;\n}\n\n.small-gear1 {\n  right: 90%;\n}\n\n.small-gear2 {\n  right: 75%;\n}\n\n.small-gear3 {\n  right: 60%;\n}\n\n.small-gear4 {\n  right: 45%;\n}\n\n.small-gear5 {\n  right: 30%;\n}\n\n.small-gear6 {\n  right: -30%;\n}\n\n.small-gear7 {\n  right: -45%;\n}\n\n.small-gear8 {\n  right: -60%;\n}\n\n.small-gear9 {\n  right: -75%;\n}\n\n.small-gear10 {\n  right: -90%;\n}\n\n.milestone-gear {\n  pointer-events: none;\n  -o-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 73%;\n  position: absolute;\n  width: 30%;\n  z-index: 6;\n}\n\n.gear-spinning {\n  -webkit-animation: rotate 8s linear infinite;\n          animation: rotate 8s linear infinite;\n  animation-direction: reverse;\n}\n\n.timeline-rotate {\n  -webkit-animation: timelineRotate 0.5s ease-in-out;\n          animation: timelineRotate 0.5s ease-in-out;\n}\n\n.reverse {\n  animation-direction: reverse;\n}\n\n@media only screen and (max-width: 767px){\n  .milestone-container {\n    width: 280vw;\n    height: calc(280vw / 2.02);\n    left: -101%;\n    overflow: hidden;\n  } .right {\n    visibility: visible;\n    z-index: 4;\n  } .left {\n    visibility: visible;\n    z-index: 4;\n  } .instructions {\n    display: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/shared/machine-animation/machine-animation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Milestone / Timeline Section -->\n  <div class=\"container-fluid\" style=\"overflow: hidden;\">\n    <div class=\"milestone-container\">\n      <img src=\"../assets/big Cog.png\" class=\"milestone-gear\">\n      <img src=\"../assets/timeline-background.png\" class=\"timeline-background\">\n      <img src=\"../assets/timeline-button-left-top.png\" class=\"timeline-button-left tl-button-left1\">\n      <img src=\"../assets/timeline-button-left-bottom.png\" class=\"timeline-button-left\">\n      <img src=\"../assets/timeline-button-right-top.png\" class=\"timeline-button-right\">\n      <img src=\"../assets/timeline-button-right-middle.png\" class=\"timeline-button-right tl-button-right2\">\n      <img src=\"../assets/timeline-button-right-bottom.png\" class=\"timeline-button-right tl-button-right3\">\n      <img src=\"../assets/timeline-button-big.png\" class=\"timeline-button-big tl-button-right3\">\n      <img class=\"timeline-slider timeline-slider1\" src=\"../assets/blue-slider.png\">\n      <img class=\"timeline-slider timeline-slider2\" src=\"../assets/blue-slider.png\">\n      <img class=\"timeline-slider timeline-slider3\" src=\"../assets/blue-slider.png\">\n      <div class=\"timeline-gear-holder\">\n        <img src=\"../assets/timeline-gear1.png\">\n      </div>\n      <img src=\"../assets/timeline-gray-gear1.png\" class=\"timeline-gray-gear-bottom-left\">\n      <img src=\"../assets/timeline-gray-gear1.png\" class=\"timeline-gray-gear-bottom-right\">\n      <img src=\"../assets/timeline-gray-gear2.png\" class=\"timeline-gray-gear-top-left\">\n      <img src=\"../assets/timeline-gray-gear2.png\" class=\"timeline-gray-gear-top-right\">\n      <img src=\"../assets/expanding-pipe.png\" class=\"expanding-pipe\">\n      <img src=\"../assets/timeline-lower-left-box.png\" class=\"timeline-lower-left-box\">\n      <img src=\"../assets/timeline-silhouette-machine.png\" class=\"timeline-silhouette-machine\">\n      <img src=\"../assets/timeline-silhouette-machine2.png\" class=\"timeline-silhouette-machine2\">\n      <img src=\"../assets/timeline-silhouette-button.png\" class=\"timeline-silhouette-button\">\n      <img src=\"../assets/timeline-moving-pipe.png\" class=\"timeline-moving-pipe\">\n      <img src=\"../assets/timeline-pipefill-top-left.png\" class=\"timeline-pipefill-top-left\">\n      <img src=\"../assets/timeline-pipeoverlay-top-left.png\" class=\"timeline-pipeoverlay-top-left\">\n      <img src=\"../assets/timeline-pipefill-top-right.png\" class=\"timeline-pipefill-top-right\">\n      <img src=\"../assets/timeline-red-pipe-end.png\" class=\"timeline-red-pipe-end\">\n      <img src=\"../assets/timeline-pipeoverlay-top-center.png\" class=\"timeline-pipeoverlay-top-center\">\n      <img src=\"../assets/timeline-pipefill-top-center.png\" class=\"timeline-pipefill-top-center\">\n      <img src=\"../assets/timeline-pipefill-top-left2.png\" class=\"timeline-pipefill-top-left2\">\n      <img src=\"../assets/timeline-pipefill-center-left.png\" class=\"timeline-pipefill-center-left\">\n      <img src=\"../assets/timeline-pipefill-center-right.png\" class=\"timeline-pipefill-center-right\">\n      <img src=\"../assets/timeline-pipeoverlay-center-right.png\" class=\"timeline-pipeoverlay-center-right\">\n      <img src=\"../assets/timeline-pipefill-center-right2.png\" class=\"timeline-pipefill-center-right2\">\n      <img src=\"../assets/timeline-pipe-overflow.png\" class=\"timeline-pipe-overflow\">\n      <img src=\"../assets/timeline-pipe-overflow2.png\" class=\"timeline-pipe-overflow2\">\n      <img src=\"../assets/Conveyor Belt.png\" class=\"conveyor\">\n      <div class=\"machine-screen\">\n        <div class=\"yellow-light yellow-light1\"></div>\n        <div class=\"yellow-light yellow-light2\"></div>\n        <div class=\"yellow-light yellow-light3\"></div>\n        <div class=\"yellow-bar yellow-bar1\"></div>\n        <div class=\"yellow-bar yellow-bar2\"></div>\n        <img src=\"../assets/yellowboxes.png\" class=\"machine-box yellowbox\">\n        <img src=\"../assets/yellowboxes.png\" class=\"machine-box yellowbox2\">\n        <img src=\"../assets/Machine_full copy.png\" class=\"machine\">\n      </div>\n      <div class=\"machine-screen\" style=\"overflow: hidden;\">\n        <img src=\"../assets/machine-text.png\" class=\"machine-text yellowbox\">\n        <img src=\"../assets/machine-text.png\" class=\"machine-text yellowbox2\">\n      </div>\n\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear1\">\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear2\">\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear3\">\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear4\">\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear5\">\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear6\">\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear7\">\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear8\">\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear9\">\n      <img src=\"../assets/Small Cog.png\" class=\"small-gear small-gear10\">\n      <div class=\"directions\">\n        <div class=\"right right-mobile\">\n          <i class=\"fas fa-arrow-right blue-arrow\"></i>\n        </div>\n        <div class=\"left left-mobile\">\n          <i class=\"fas fa-arrow-left blue-arrow2\"></i>\n        </div>\n      </div>\n      <img class=\"instructions\" src=\"../assets/mouse-instructions.png\">\n      <img class=\"instructions instructions-icons\" src=\"../assets/mouse-instructions-icon.png\">\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/shared/machine-animation/machine-animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MachineAnimationComponent = /** @class */ (function () {
    function MachineAnimationComponent() {
        this.dragging = false;
        this.spinning = true;
        this.degree = 0;
        this.right = 100;
        this.position = 1;
        this.box_position = 110;
        this.box_start = -309;
        this.box_start_two = 391;
        this.forward = 139.5;
        this.clicked = false;
        this.finished = false;
        this.start_time = 0;
        this.now_time = 0;
        this.first_click = true;
        this.bigGearElement = $('.milestone-gear');
        this.smallGearElement = $('.small-gear');
        this.didMouseDownOnGear = false;
    }
    MachineAnimationComponent.prototype.ngOnInit = function () {
        this.yellowBoxStart();
        this.startInterval();
        this.stopSpin();
        this.startSpin();
        this.mouseInfo();
        this.mouseUpTimeline();
        this.clickAndDrag();
        this.leftMobile();
        this.rightMobile();
    };
    // Move the 2 Yellowbox images to their starting positions
    MachineAnimationComponent.prototype.yellowBoxStart = function () {
        $('.yellowbox').css({ "right": -309 + '%' });
        $('.yellowbox2').css({ "right": 391 + '%' });
    };
    // Rotate the big gear at the bottom
    MachineAnimationComponent.prototype.milestoneGear = function (deg, sec) {
        var _this = this;
        $(".milestone-gear").on('mousedown', function () {
            _this.didMouseDownOnGear = true;
        });
        $(".milestone-gear").animate({ rotation: deg }, {
            duration: sec,
            easing: 'linear',
            step: function (now, fx) {
                $(this).css({ "transform": "rotate(" + now + "deg)" });
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
            }
        });
    };
    // Rotate the small gears in the conveyor belt
    MachineAnimationComponent.prototype.smallMilestoneGear = function (deg, sec) {
        $(".small-gear").animate({ rotation: deg }, {
            duration: sec,
            easing: 'linear',
            step: function (now, fx) {
                $(this).css({ "transform": "rotate(" + now + "deg)" });
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-o-transform', 'rotate(' + now + 'deg)');
                $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
                this.degree = now;
            }
        });
    };
    // Move the first yellowbox image
    MachineAnimationComponent.prototype.firstYellowbox = function (dist, sec) {
        $(".yellowbox").animate({ right: dist + '%' }, {
            duration: sec,
            easing: 'linear',
            step: function (now, fx) {
                $(this).css({ 'right': +now + '%)' });
                this.box_start = now;
            }
        });
    };
    // Move the second yellowbox image
    MachineAnimationComponent.prototype.secondYellowbox = function (dist, sec) {
        $(".yellowbox2").animate({ right: dist + '%' }, {
            duration: sec,
            easing: 'linear',
            step: function (now, fx) {
                $(this).css({ 'right': +now + '%)' });
                this.box_start_two = now;
            }
        });
    };
    // End current animations
    MachineAnimationComponent.prototype.endAnimations = function () {
        $(".milestone-gear").clearQueue();
        $(".small-gear").clearQueue();
        $(".yellowbox").clearQueue();
        $(".yellowbox2").clearQueue();
    };
    // Animate the gears and yellow boxes
    MachineAnimationComponent.prototype.spin = function () {
        this.milestoneGear(this.degree, 1000);
        this.smallMilestoneGear(this.degree, 1000);
        this.firstYellowbox(this.box_start, 1000);
        this.secondYellowbox(this.box_start_two, 1000);
        //this.milestoneGear(this.degree, 1000);
        // this.smallMilestoneGear(this.degree, 1000);
        this.degree += 45;
        $(".yellowbox").animate({ right: this.box_start + '%' }, {
            duration: 1000,
            easing: 'linear',
            step: function (now, fx) {
                $(this).css({ 'right': +now + '%)' });
            }
        });
        $(".yellowbox2").animate({ right: this.box_start_two + '%' }, {
            duration: 1000,
            easing: 'linear',
            step: function (now, fx) {
                $(this).css({ 'right': +now + '%)' });
            }
        });
        // If the yellowbox image goes offscreen, then move it back to the beginning
        if (this.box_start < -870) {
            this.box_start = 391;
            $(".yellowbox").animate({ right: 391 + '%' }, {
                duration: .0001,
                easing: 'linear',
                step: function (now, fx) {
                    $(this).css({ 'right': +now + '%)' });
                }
            });
        }
        this.box_start -= this.forward;
        if (this.box_start_two < -870) {
            this.box_start_two = 391;
            $(".yellowbox2").animate({ right: 391 + '%' }, {
                duration: .0001,
                easing: 'linear',
                step: function (now, fx) {
                    $(this).css({ 'right': +now + '%)' });
                }
            });
        }
        this.box_start_two -= this.forward;
    };
    // Stop the animation when the mouse enters the big gear at the bottom
    MachineAnimationComponent.prototype.stopSpin = function () {
        var _this = this;
        $('.directions, .instructions').mouseenter(function () {
            _this.spinning = false;
            _this.endAnimations();
            clearInterval(_this.interval);
            _this.endAnimations();
        });
    };
    // Restart the animation after 1.2s when the mouse leaves the big gear
    MachineAnimationComponent.prototype.startSpin = function () {
        var _this = this;
        $('.directions').mouseleave(function () {
            _this.endAnimations();
            setTimeout(function () {
                _this.first_click = true;
                _this.spinning = true;
                clearInterval(_this.interval);
                _this.startInterval();
            }, 1200);
        });
    };
    MachineAnimationComponent.prototype.startInterval = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.spin();
        }, 2050);
    };
    // Get the time and mouse X position when the big gear is clicked
    MachineAnimationComponent.prototype.mouseInfo = function () {
        var _this = this;
        $('.directions, .instructions').mousedown(function (event) {
            _this.endAnimations();
            _this.start_x = event.pageX;
            _this.last_mouse = _this.start_x;
            _this.start_time = _this.now_time;
            _this.now_time = new Date().getTime();
            if (_this.degree === 0 || _this.degree % 45 === 0) {
                _this.dragging = true;
                _this.finished = true;
            }
        });
    };
    // Stop the click and drag interactivity when the mouse is not being pressed
    MachineAnimationComponent.prototype.mouseUpTimeline = function () {
        var _this = this;
        $(document).mouseup(function () {
            _this.dragging = false;
            _this.finished = false;
        });
    };
    MachineAnimationComponent.prototype.resetDegree = function () {
        if (this.degree >= 360) {
            this.degree = 0;
            // milestoneGear(0, .0001);
            // smallGear(0, .0001);
            $('.milestone-gear').css({ "transform": "rotate(" + this.degree + "deg)" });
            $('.milestone-gear').css('-moz-transform', 'rotate(' + this.degree + 'deg)');
            $('.milestone-gear').css('-webkit-transform', 'rotate(' + this.degree + 'deg)');
            $('.milestone-gear').css('-o-transform', 'rotate(' + this.degree + 'deg)');
            $('.milestone-gear').css('-ms-transform', 'rotate(' + this.degree + 'deg)');
            $('.small-gear').css({ "transform": "rotate(" + this.degree + "deg)" });
            $('.small-gear').css('-moz-transform', 'rotate(' + this.degree + 'deg)');
            $('.small-gear').css('-webkit-transform', 'rotate(' + this.degree + 'deg)');
            $('.small-gear').css('-o-transform', 'rotate(' + this.degree + 'deg)');
            $('.small-gear').css('-ms-transform', 'rotate(' + this.degree + 'deg)');
        }
    };
    // Click and drag interactivity
    MachineAnimationComponent.prototype.clickAndDrag = function () {
        var _this = this;
        $('.directions').mousemove(function (e) {
            // Only allow another move after the previous animation has finished and mouse is pressed down
            if (_this.dragging && _this.now_time > _this.start_time + 800) {
                _this.endAnimations();
                _this.mouse_x = e.pageX;
                if (e.pageX > _this.last_mouse + 20 && _this.finished) {
                    //console.log('Begin: 1 - ' + this.box_start + '2 - ' + this.box_start_two);
                    _this.finished = false;
                    if (!_this.first_click) {
                        _this.degree = _this.degree + 45;
                    }
                    _this.milestoneGear((_this.degree), 500);
                    _this.smallMilestoneGear((_this.degree), 500);
                    if (_this.box_start < -1000) {
                        _this.box_start = 391;
                        $('.yellowbox').css({ 'right': '391%' });
                    }
                    if (_this.box_start_two < -1000) {
                        _this.box_start_two = 391;
                        $('.yellowbox2').css({ 'right': '391%' });
                    }
                    if (!_this.first_click) {
                        _this.box_start = _this.box_start - _this.forward;
                        _this.box_start_two = _this.box_start_two - _this.forward;
                    }
                    _this.firstYellowbox((_this.box_start), 500);
                    _this.secondYellowbox((_this.box_start_two), 500);
                    setTimeout(function () {
                        _this.first_click = false;
                        _this.finished = true;
                    }, 600);
                }
                else if (e.pageX < _this.last_mouse - 20 && _this.finished) {
                    _this.finished = false;
                    _this.first_click = false;
                    if (!_this.first_click) {
                        _this.degree = _this.degree - 45;
                    }
                    _this.milestoneGear((_this.degree), 500);
                    _this.smallMilestoneGear((_this.degree), 500);
                    if (_this.box_start > 380) {
                        _this.box_start = -1009;
                        $('.yellowbox').css({ 'right': '-1009%' });
                    }
                    if (_this.box_start_two > 380) {
                        _this.box_start_two = -1009;
                        $('.yellowbox2').css({ 'right': '-1009%' });
                    }
                    if (!_this.first_click) {
                        _this.box_start = _this.box_start + _this.forward;
                        _this.box_start_two = _this.box_start_two + _this.forward;
                    }
                    _this.firstYellowbox((_this.box_start), 500);
                    _this.secondYellowbox((_this.box_start_two), 500);
                    setTimeout(function () {
                        _this.finished = true;
                    }, 600);
                }
                _this.last_mouse = e.pageX;
            }
        });
    };
    // Mobile arrow click
    MachineAnimationComponent.prototype.rightMobile = function () {
        var _this = this;
        $('.right-mobile').mousedown(function () {
            _this.stopSpin();
            _this.endAnimations();
            _this.spinning = false;
            _this.finished = false;
            if (!_this.first_click) {
                _this.degree = _this.degree + 45;
            }
            _this.milestoneGear((_this.degree), 500);
            _this.smallMilestoneGear((_this.degree), 500);
            if (_this.box_start < -1000) {
                _this.box_start = 391;
                _this.firstYellowbox(391, .0001);
            }
            if (_this.box_start_two < -1000) {
                _this.box_start_two = 391;
                _this.secondYellowbox(391, .0001);
            }
            if (!_this.first_click) {
                _this.box_start = _this.box_start - _this.forward;
                _this.box_start_two = _this.box_start_two - _this.forward;
            }
            _this.firstYellowbox((_this.box_start), 500);
            _this.secondYellowbox((_this.box_start_two), 500);
            setTimeout(function () {
                _this.first_click = false;
                _this.finished = true;
            }, 501);
            _this.first_click = false;
        });
    };
    // Mobile arrow click
    MachineAnimationComponent.prototype.leftMobile = function () {
        var _this = this;
        $('.left-mobile').mousedown(function () {
            _this.stopSpin();
            _this.spinning = false;
            _this.endAnimations();
            _this.finished = false;
            _this.first_click = false;
            if (!_this.first_click) {
                _this.degree = _this.degree - 45;
            }
            _this.milestoneGear((_this.degree), 500);
            _this.smallMilestoneGear((_this.degree), 500);
            if (_this.box_start > 380) {
                _this.box_start = -1009;
                _this.firstYellowbox(-1009, .0001);
            }
            if (_this.box_start_two > 380) {
                _this.box_start_two = -1009;
                _this.secondYellowbox(-1009, .0001);
            }
            if (!_this.first_click) {
                _this.box_start = _this.box_start + _this.forward;
                _this.box_start_two = _this.box_start_two + _this.forward;
            }
            _this.firstYellowbox((_this.box_start), 500);
            _this.secondYellowbox((_this.box_start_two), 500);
            setTimeout(function () {
                _this.finished = true;
            }, 500);
            _this.first_click = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('#milestoneGear'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MachineAnimationComponent.prototype, "milestone_gear", void 0);
    MachineAnimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-machine-animation',
            template: __webpack_require__("../../../../../src/app/homepage/shared/machine-animation/machine-animation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/shared/machine-animation/machine-animation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MachineAnimationComponent);
    return MachineAnimationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/shared/small-screen/small-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/shared/small-screen/small-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sc\" #machineScreenTxt>foo</div>"

/***/ }),

/***/ "../../../../../src/app/homepage/shared/small-screen/small-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_util_animation__ = __webpack_require__("../../../../../src/app/shared/util/animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmallScreenComponent = /** @class */ (function () {
    function SmallScreenComponent(animation) {
        this.animation = animation;
        this.pauseTime = 2000;
    }
    SmallScreenComponent.prototype.ngAfterViewInit = function () {
        this.index = this.$this.parent('app-small-screen').data('index');
        this.repeat();
    };
    SmallScreenComponent.prototype.ngOnInit = function () {
        this.$this = $(this.machineTxtEle.nativeElement);
    };
    SmallScreenComponent.prototype.repeat = function () {
        var _this = this;
        this.intervalID = setInterval(function () {
            if (_this.isAnimatingRight) {
                _this.position = +_this.position + 20;
            }
            else {
                _this.position = +_this.position - 20;
            }
            if (!_this.isPaused) {
                _this.animate();
            }
        }, +this.pauseTime);
    };
    SmallScreenComponent.prototype.animate = function () {
        var _this = this;
        this.animation.animateRight(this.machineTxtEle.nativeElement, this.position, this.animationSpeed, function () {
            _this.animationCallback();
        });
    };
    SmallScreenComponent.prototype.animationCallback = function () {
        if (this.isPaused) {
            this.$this.stop(true, true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SmallScreenComponent.prototype, "isPaused", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SmallScreenComponent.prototype, "isAnimatingRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SmallScreenComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SmallScreenComponent.prototype, "animationSpeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SmallScreenComponent.prototype, "pauseTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('machineScreenTxt'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SmallScreenComponent.prototype, "machineTxtEle", void 0);
    SmallScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-small-screen',
            template: __webpack_require__("../../../../../src/app/homepage/shared/small-screen/small-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/shared/small-screen/small-screen.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_util_animation__["a" /* Animation */]])
    ], SmallScreenComponent);
    return SmallScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/shared/timelime/timelime.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Milestone Section */\n\n.full-screen-container {\n    left: -275%;\n    width: 2400px;\n    height: 200px;\n}\n\n.milestone-container {\n  overflow: hidden;\n  -o-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  position: relative;\n  width: 100.5vw;\n/*   max-width: 1500px;\n  max-height: 742.57px; */\n  height: calc(101vw / 2.02);\n  top: 0;\n  right: 1.6vw;\n  margin: auto;\n}\n\n.animation-none {\n  -webkit-animation: none !important;\n          animation: none !important;\n}\n\n.milestone-container div {\n  position: absolute;\n}\n\n.milestone-text {\n  text-align: center;\n  padding: 20px;\n  color: #737373;\n}\n\n.milestone-container img {\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n  user-drag: none;\n  position: absolute;\n}\n\n.timeline-background {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1 !important;\n}\n\n.timeline-button-left {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  top: 0;\n  -webkit-animation: timelineButtonLeft 5s linear infinite;\n          animation: timelineButtonLeft 5s linear infinite;\n}\n\n@-webkit-keyframes timelineButtonLeft {\n  0% {\n    opacity: 1;\n  }\n  10% {\n    opacity: 1;\n  }\n  11% {\n    opacity: 0;\n  }\n  59% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 1;\n  }\n  70% {\n    opacity: 1;\n  }\n  71% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes timelineButtonLeft {\n  0% {\n    opacity: 1;\n  }\n  10% {\n    opacity: 1;\n  }\n  11% {\n    opacity: 0;\n  }\n  59% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 1;\n  }\n  70% {\n    opacity: 1;\n  }\n  71% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.tl-button-left1 {\n  animation-direction: reverse;\n}\n\n.timeline-button-right {\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  top: 0;\n  -webkit-animation: timelineButtonRight 4s linear infinite;\n          animation: timelineButtonRight 4s linear infinite;\n}\n\n@-webkit-keyframes timelineButtonRight {\n  0% {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes timelineButtonRight {\n  0% {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.tl-button-right2 {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.tl-button-right3 {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n.timeline-button-big {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: timelineButtonRight 2.2s linear infinite;\n          animation: timelineButtonRight 2.2s linear infinite;\n}\n\n.timeline-slider {\n  width: 1.5%;\n  top: 14%;\n  z-index: 3;\n}\n\n.timeline-slider1 {\n  right: 66.4%;\n  -webkit-animation: blueSlider 5s ease-in-out infinite;\n          animation: blueSlider 5s ease-in-out infinite;\n}\n\n.timeline-slider2 {\n  right: 64.8%;\n  -webkit-animation: blueSlider 5.2s ease-in-out infinite;\n          animation: blueSlider 5.2s ease-in-out infinite;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.timeline-slider3 {\n  right: 63.25%;\n  -webkit-animation: blueSlider 4.8s ease-in-out infinite;\n          animation: blueSlider 4.8s ease-in-out infinite;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n.timeline-gear-holder {\n  height: 6%;\n  width: 6%;\n  overflow: hidden;\n  top: 3.3%;\n  right: 62%;\n  z-index: 3;\n}\n\n.timeline-gear-holder img {\n  width: 84%;\n  top: 16%;\n  right: 14%;\n  animation: rotate 6s reverse linear infinite;\n}\n\n.timeline-gray-gear-bottom-left {\n  width: 4%;\n  top: 74.2%;\n  right: 62%;\n  z-index: 3;\n  -webkit-animation: rotate 7s linear infinite;\n          animation: rotate 7s linear infinite;\n}\n\n.timeline-gray-gear-bottom-right {\n  width: 4%;\n  top: 87.2%;\n  right: 10.2%;\n  z-index: 3;\n  -webkit-animation: rotate 7s linear infinite;\n          animation: rotate 7s linear infinite;\n}\n\n.timeline-gray-gear-top-left {\n  width: 4%;\n  top: 25%;\n  right: 82%;\n  z-index: 3;\n  -webkit-animation: rotate 7s linear infinite;\n          animation: rotate 7s linear infinite;\n}\n\n.timeline-gray-gear-top-right {\n  width: 4%;\n  top: 27.6%;\n  right: 78.5%;\n  z-index: 3;\n  animation: rotate 7s reverse linear infinite;\n}\n\n.expanding-pipe {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  z-index: 3;\n  -webkit-animation: expandingPipe 3s ease-in-out infinite;\n          animation: expandingPipe 3s ease-in-out infinite;\n}\n\n@-webkit-keyframes expandingPipe {\n  0% {\n    width: 100%;\n  }\n  50% {\n    width: 70%;\n    right: 10.8%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n\n@keyframes expandingPipe {\n  0% {\n    width: 100%;\n  }\n  50% {\n    width: 70%;\n    right: 10.8%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n\n.timeline-lower-left-box {\n  width: 100%;\n  height: 100%;\n  top: 0%;\n  -webkit-animation: timelineBox 5s ease-in-out infinite;\n          animation: timelineBox 5s ease-in-out infinite;\n}\n\n@-webkit-keyframes timelineBox {\n  0% {\n    top: 1%;\n  }\n  20% {\n    top: -1%;\n  }\n  40% {\n    top: 1%;\n  }\n  60% {\n    top: -1%;\n  }\n  100% {\n    top: 1%;\n  }\n}\n\n@keyframes timelineBox {\n  0% {\n    top: 1%;\n  }\n  20% {\n    top: -1%;\n  }\n  40% {\n    top: 1%;\n  }\n  60% {\n    top: -1%;\n  }\n  100% {\n    top: 1%;\n  }\n}\n\n.timeline-silhouette-machine {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n}\n\n.timeline-silhouette-machine2 {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: silhouetteMachine 5s ease-in-out infinite;\n          animation: silhouetteMachine 5s ease-in-out infinite;\n}\n\n@-webkit-keyframes silhouetteMachine {\n  0% {\n    top: 0%;\n  }\n  25% {\n    top: -2%;\n  }\n  50% {\n    top: 0%;\n  }\n  75% {\n    top: -4%;\n  }\n  100% {\n    top: 0%;\n  }\n\n}\n\n@keyframes silhouetteMachine {\n  0% {\n    top: 0%;\n  }\n  25% {\n    top: -2%;\n  }\n  50% {\n    top: 0%;\n  }\n  75% {\n    top: -4%;\n  }\n  100% {\n    top: 0%;\n  }\n\n}\n\n.timeline-silhouette-button {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n  -webkit-animation: silhouetteButton 2.4s ease-in-out infinite;\n          animation: silhouetteButton 2.4s ease-in-out infinite;\n}\n\n@-webkit-keyframes silhouetteButton {\n  0% {\n    top: -1%;\n  }\n  50% {\n    top: 0%;\n  }\n  100% {\n    top: -1%;\n  }\n}\n\n@keyframes silhouetteButton {\n  0% {\n    top: -1%;\n  }\n  50% {\n    top: 0%;\n  }\n  100% {\n    top: -1%;\n  }\n}\n\n.timeline-moving-pipe {\n  width: 108%;\n  height: 110%;\n  top: 0;\n  z-index: 3;\n  right: -0.4%;\n  -webkit-animation: movingPipe 3s ease-in-out infinite;\n          animation: movingPipe 3s ease-in-out infinite;\n}\n\n@-webkit-keyframes movingPipe {\n  0% {\n    top: -2.5%;\n  }\n  20% {\n    top: 0%;\n  }\n  50% {\n    top: 0%;\n  }\n  100% {\n    top: -2.5%;\n  }\n}\n\n@keyframes movingPipe {\n  0% {\n    top: -2.5%;\n  }\n  20% {\n    top: 0%;\n  }\n  50% {\n    top: 0%;\n  }\n  100% {\n    top: -2.5%;\n  }\n}\n\n.timeline-pipefill-top-left {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillTopLeft 3s linear infinite;\n          animation: pipefillTopLeft 3s linear infinite;\n}\n\n@-webkit-keyframes pipefillTopLeft {\n  0% {\n    -webkit-clip-path: inset(0% 90% 100% 8%);\n            clip-path: inset(0% 90% 100% 8%);\n  }\n  25% {\n    -webkit-clip-path: inset(0% 90% 65% 8%);\n            clip-path: inset(0% 90% 65% 8%);\n  }\n  40% {\n    -webkit-clip-path: inset(0% 90% 65% 0%);\n            clip-path: inset(0% 90% 65% 0%);\n  }\n  65% {\n    -webkit-clip-path: inset(25% 90% 65% 0%);\n            clip-path: inset(25% 90% 65% 0%);\n  }\n  80% {\n    -webkit-clip-path: inset(25% 100% 65% 0%);\n            clip-path: inset(25% 100% 65% 0%);\n  }\n  100% {\n    -webkit-clip-path: inset(25% 100% 65% 0%);\n            clip-path: inset(25% 100% 65% 0%);\n  }\n}\n\n@keyframes pipefillTopLeft {\n  0% {\n    -webkit-clip-path: inset(0% 90% 100% 8%);\n            clip-path: inset(0% 90% 100% 8%);\n  }\n  25% {\n    -webkit-clip-path: inset(0% 90% 65% 8%);\n            clip-path: inset(0% 90% 65% 8%);\n  }\n  40% {\n    -webkit-clip-path: inset(0% 90% 65% 0%);\n            clip-path: inset(0% 90% 65% 0%);\n  }\n  65% {\n    -webkit-clip-path: inset(25% 90% 65% 0%);\n            clip-path: inset(25% 90% 65% 0%);\n  }\n  80% {\n    -webkit-clip-path: inset(25% 100% 65% 0%);\n            clip-path: inset(25% 100% 65% 0%);\n  }\n  100% {\n    -webkit-clip-path: inset(25% 100% 65% 0%);\n            clip-path: inset(25% 100% 65% 0%);\n  }\n}\n\n.timeline-pipeoverlay-top-left {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n}\n\n/* .timeline-pipefill-top-right {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  animation: pipefillTopRight 3.2s linear infinite;\n}\n\n@keyframes pipefillTopRight {\n  0% {\n    clip-path: inset(16% 25% 79% 75.2%);\n  }\n  14% {\n    clip-path: inset(16% 19% 79% 75.2%);\n  }\n  35% {\n    clip-path: inset(16% 18% 53.4% 75.2%);\n  }\n  49% {\n    clip-path: inset(18% 18% 53.4% 79.5%);\n  }\n  72% {\n    clip-path: inset(47% 18% 53.4% 79%);\n  }\n  100% {\n    clip-path: inset(47% 18% 53.4% 79%);\n  }\n} */\n\n.timeline-red-pipe-end {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n}\n\n.timeline-pipeoverlay-top-center {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n}\n\n.timeline-pipefill-top-center {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillTopCenter 4s linear infinite;\n          animation: pipefillTopCenter 4s linear infinite;\n}\n\n@-webkit-keyframes pipefillTopCenter {\n  0% {\n    -webkit-clip-path: inset(33% 62% 65% 38%);\n            clip-path: inset(33% 62% 65% 38%);\n  }\n  12% {\n    -webkit-clip-path: inset(33% 62% 65% 32%);\n            clip-path: inset(33% 62% 65% 32%);\n  }\n  30% {\n    -webkit-clip-path: inset(33% 62% 53% 32%);\n            clip-path: inset(33% 62% 53% 32%);\n  }\n  42% {\n    -webkit-clip-path: inset(33% 66% 53% 32%);\n            clip-path: inset(33% 66% 53% 32%);\n  }\n  60% {\n    -webkit-clip-path: inset(48% 65% 53% 32%);\n            clip-path: inset(48% 65% 53% 32%);\n  }\n  100% {\n    -webkit-clip-path: inset(48% 65% 53% 32%);\n            clip-path: inset(48% 65% 53% 32%);\n  }\n}\n\n@keyframes pipefillTopCenter {\n  0% {\n    -webkit-clip-path: inset(33% 62% 65% 38%);\n            clip-path: inset(33% 62% 65% 38%);\n  }\n  12% {\n    -webkit-clip-path: inset(33% 62% 65% 32%);\n            clip-path: inset(33% 62% 65% 32%);\n  }\n  30% {\n    -webkit-clip-path: inset(33% 62% 53% 32%);\n            clip-path: inset(33% 62% 53% 32%);\n  }\n  42% {\n    -webkit-clip-path: inset(33% 66% 53% 32%);\n            clip-path: inset(33% 66% 53% 32%);\n  }\n  60% {\n    -webkit-clip-path: inset(48% 65% 53% 32%);\n            clip-path: inset(48% 65% 53% 32%);\n  }\n  100% {\n    -webkit-clip-path: inset(48% 65% 53% 32%);\n            clip-path: inset(48% 65% 53% 32%);\n  }\n}\n\n.timeline-pipefill-top-left2 {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillTopLeftTwo 4s linear infinite;\n          animation: pipefillTopLeftTwo 4s linear infinite;\n}\n\n@-webkit-keyframes pipefillTopLeftTwo {\n  0% {\n    -webkit-clip-path: circle(1% at 12.2% 58%);\n            clip-path: circle(1% at 12.2% 58%);\n  }\n  18% {\n    -webkit-clip-path: circle(1% at 12.2% 10%);\n            clip-path: circle(1% at 12.2% 10%);\n  }\n  19% {\n    -webkit-clip-path: circle(1% at 13.8% 10%);\n            clip-path: circle(1% at 13.8% 10%);\n  }\n  25% {\n    -webkit-clip-path: circle(1% at 13.8% 22%);\n            clip-path: circle(1% at 13.8% 22%);\n  }\n  26% {\n    -webkit-clip-path: circle(1% at 15.4% 22%);\n            clip-path: circle(1% at 15.4% 22%);\n  }\n  32% {\n    -webkit-clip-path: circle(1% at 15.4% 10%);\n            clip-path: circle(1% at 15.4% 10%);\n  }\n  33% {\n    -webkit-clip-path: circle(1% at 17% 10%);\n            clip-path: circle(1% at 17% 10%);\n  }\n  39% {\n    -webkit-clip-path: circle(1% at 17% 22%);\n            clip-path: circle(1% at 17% 22%);\n  }\n  40% {\n    -webkit-clip-path: circle(1% at 18.6% 22%);\n            clip-path: circle(1% at 18.6% 22%);\n  }\n  46% {\n    -webkit-clip-path: circle(1% at 18.6% 10%);\n            clip-path: circle(1% at 18.6% 10%);\n  }\n  47% {\n    -webkit-clip-path: circle(1% at 20.2% 10%);\n            clip-path: circle(1% at 20.2% 10%);\n  }\n  53% {\n    -webkit-clip-path: circle(1% at 20.2% 22%);\n            clip-path: circle(1% at 20.2% 22%);\n  }\n  54% {\n    -webkit-clip-path: circle(1% at 21.8% 22%);\n            clip-path: circle(1% at 21.8% 22%);\n  }\n  60% {\n    -webkit-clip-path: circle(1% at 21.8% 10%);\n            clip-path: circle(1% at 21.8% 10%);\n  }\n  61% {\n    -webkit-clip-path: circle(1% at 23% 10%);\n            clip-path: circle(1% at 23% 10%);\n  }\n  64% {\n    -webkit-clip-path: circle(1% at 23% 17%);\n            clip-path: circle(1% at 23% 17%);\n  }\n  70% {\n    -webkit-clip-path: circle(1% at 29% 17%);\n            clip-path: circle(1% at 29% 17%);\n  }\n  100% {\n    -webkit-clip-path: circle(1% at 29% 17%);\n            clip-path: circle(1% at 29% 17%);\n  }\n}\n\n@keyframes pipefillTopLeftTwo {\n  0% {\n    -webkit-clip-path: circle(1% at 12.2% 58%);\n            clip-path: circle(1% at 12.2% 58%);\n  }\n  18% {\n    -webkit-clip-path: circle(1% at 12.2% 10%);\n            clip-path: circle(1% at 12.2% 10%);\n  }\n  19% {\n    -webkit-clip-path: circle(1% at 13.8% 10%);\n            clip-path: circle(1% at 13.8% 10%);\n  }\n  25% {\n    -webkit-clip-path: circle(1% at 13.8% 22%);\n            clip-path: circle(1% at 13.8% 22%);\n  }\n  26% {\n    -webkit-clip-path: circle(1% at 15.4% 22%);\n            clip-path: circle(1% at 15.4% 22%);\n  }\n  32% {\n    -webkit-clip-path: circle(1% at 15.4% 10%);\n            clip-path: circle(1% at 15.4% 10%);\n  }\n  33% {\n    -webkit-clip-path: circle(1% at 17% 10%);\n            clip-path: circle(1% at 17% 10%);\n  }\n  39% {\n    -webkit-clip-path: circle(1% at 17% 22%);\n            clip-path: circle(1% at 17% 22%);\n  }\n  40% {\n    -webkit-clip-path: circle(1% at 18.6% 22%);\n            clip-path: circle(1% at 18.6% 22%);\n  }\n  46% {\n    -webkit-clip-path: circle(1% at 18.6% 10%);\n            clip-path: circle(1% at 18.6% 10%);\n  }\n  47% {\n    -webkit-clip-path: circle(1% at 20.2% 10%);\n            clip-path: circle(1% at 20.2% 10%);\n  }\n  53% {\n    -webkit-clip-path: circle(1% at 20.2% 22%);\n            clip-path: circle(1% at 20.2% 22%);\n  }\n  54% {\n    -webkit-clip-path: circle(1% at 21.8% 22%);\n            clip-path: circle(1% at 21.8% 22%);\n  }\n  60% {\n    -webkit-clip-path: circle(1% at 21.8% 10%);\n            clip-path: circle(1% at 21.8% 10%);\n  }\n  61% {\n    -webkit-clip-path: circle(1% at 23% 10%);\n            clip-path: circle(1% at 23% 10%);\n  }\n  64% {\n    -webkit-clip-path: circle(1% at 23% 17%);\n            clip-path: circle(1% at 23% 17%);\n  }\n  70% {\n    -webkit-clip-path: circle(1% at 29% 17%);\n            clip-path: circle(1% at 29% 17%);\n  }\n  100% {\n    -webkit-clip-path: circle(1% at 29% 17%);\n            clip-path: circle(1% at 29% 17%);\n  }\n}\n\n.timeline-pipefill-center-left {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillTopRightTwo 3.1s linear infinite;\n          animation: pipefillTopRightTwo 3.1s linear infinite;\n}\n\n@-webkit-keyframes pipefillTopRightTwo {\n  0% {\n    -webkit-clip-path: circle(3% at 49% 88%);\n            clip-path: circle(3% at 49% 88%);\n  }\n  15% {\n    -webkit-clip-path: circle(3% at 46% 73%);\n            clip-path: circle(3% at 46% 73%);\n  }\n  35% {\n    -webkit-clip-path: circle(3% at 37% 73%);\n            clip-path: circle(3% at 37% 73%);\n  }\n  45% {\n    -webkit-clip-path: circle(3% at 37% 64%);\n            clip-path: circle(3% at 37% 64%);\n  }\n  100% {\n    -webkit-clip-path: circle(3% at 37% 64%);\n            clip-path: circle(3% at 37% 64%);\n  }\n}\n\n@keyframes pipefillTopRightTwo {\n  0% {\n    -webkit-clip-path: circle(3% at 49% 88%);\n            clip-path: circle(3% at 49% 88%);\n  }\n  15% {\n    -webkit-clip-path: circle(3% at 46% 73%);\n            clip-path: circle(3% at 46% 73%);\n  }\n  35% {\n    -webkit-clip-path: circle(3% at 37% 73%);\n            clip-path: circle(3% at 37% 73%);\n  }\n  45% {\n    -webkit-clip-path: circle(3% at 37% 64%);\n            clip-path: circle(3% at 37% 64%);\n  }\n  100% {\n    -webkit-clip-path: circle(3% at 37% 64%);\n            clip-path: circle(3% at 37% 64%);\n  }\n}\n\n.timeline-pipefill-center-right {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillCenterRight 3.2s linear infinite;\n          animation: pipefillCenterRight 3.2s linear infinite;\n  -webkit-animation-delay: 2.6s;\n          animation-delay: 2.6s;\n}\n\n@-webkit-keyframes pipefillCenterRight {\n  0% {\n    -webkit-clip-path: circle(4% at 79% 76%);\n            clip-path: circle(4% at 79% 76%);\n  }\n  30% {\n    -webkit-clip-path: circle(4% at 55% 76%);\n            clip-path: circle(4% at 55% 76%);\n  }\n  50% {\n    -webkit-clip-path: circle(4% at 55% 110%);\n            clip-path: circle(4% at 55% 110%);\n  }\n  100% {\n    -webkit-clip-path: circle(4% at 55% 110%);\n            clip-path: circle(4% at 55% 110%);\n  }\n}\n\n@keyframes pipefillCenterRight {\n  0% {\n    -webkit-clip-path: circle(4% at 79% 76%);\n            clip-path: circle(4% at 79% 76%);\n  }\n  30% {\n    -webkit-clip-path: circle(4% at 55% 76%);\n            clip-path: circle(4% at 55% 76%);\n  }\n  50% {\n    -webkit-clip-path: circle(4% at 55% 110%);\n            clip-path: circle(4% at 55% 110%);\n  }\n  100% {\n    -webkit-clip-path: circle(4% at 55% 110%);\n            clip-path: circle(4% at 55% 110%);\n  }\n}\n\n.timeline-pipefill-center-right2 {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  -webkit-animation: pipefillCenterRightTwo 5.2s linear infinite;\n          animation: pipefillCenterRightTwo 5.2s linear infinite;\n}\n\n@-webkit-keyframes pipefillCenterRightTwo {\n  0% {\n    -webkit-clip-path: circle(4% at 85.5% 63%);\n            clip-path: circle(4% at 85.5% 63%);\n  }\n  10% {\n    -webkit-clip-path: circle(4% at 84% 84%);\n            clip-path: circle(4% at 84% 84%);\n  }\n  30% {\n    -webkit-clip-path: circle(4% at 62% 88%);\n            clip-path: circle(4% at 62% 88%);\n  }\n  40% {\n    -webkit-clip-path: circle(4% at 62% 110%);\n            clip-path: circle(4% at 62% 110%);\n  }\n  100% {\n    -webkit-clip-path: circle(4% at 62% 110%);\n            clip-path: circle(4% at 62% 110%);\n  }\n}\n\n@keyframes pipefillCenterRightTwo {\n  0% {\n    -webkit-clip-path: circle(4% at 85.5% 63%);\n            clip-path: circle(4% at 85.5% 63%);\n  }\n  10% {\n    -webkit-clip-path: circle(4% at 84% 84%);\n            clip-path: circle(4% at 84% 84%);\n  }\n  30% {\n    -webkit-clip-path: circle(4% at 62% 88%);\n            clip-path: circle(4% at 62% 88%);\n  }\n  40% {\n    -webkit-clip-path: circle(4% at 62% 110%);\n            clip-path: circle(4% at 62% 110%);\n  }\n  100% {\n    -webkit-clip-path: circle(4% at 62% 110%);\n            clip-path: circle(4% at 62% 110%);\n  }\n}\n\n.timeline-pipeoverlay-center-right {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 3;\n  -webkit-clip-path: inset(60% 0% 0% 0%);\n          clip-path: inset(60% 0% 0% 0%)\n}\n\n.timeline-pipe-overflow {\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  top: 0;\n  -webkit-animation: timelinePipeOverflow 2.8s linear infinite;\n          animation: timelinePipeOverflow 2.8s linear infinite;\n}\n\n@-webkit-keyframes timelinePipeOverflow {\n  0% {\n    -webkit-clip-path: circle(2% at 26.6% 110%);\n            clip-path: circle(2% at 26.6% 110%);\n  }\n  20% {\n    -webkit-clip-path: circle(2% at 26.6% 82%);\n            clip-path: circle(2% at 26.6% 82%);\n  }\n  24% {\n    -webkit-clip-path: circle(2% at 24% 80%);\n            clip-path: circle(2% at 24% 80%);\n  }\n  42% {\n    -webkit-clip-path: circle(2% at 13% 80%);\n            clip-path: circle(2% at 13% 80%);\n  }\n  44% {\n    -webkit-clip-path: circle(2% at 12.2% 78%);\n            clip-path: circle(2% at 12.2% 78%);\n  }\n  56% {\n    -webkit-clip-path: circle(2% at 12.2% 65%);\n            clip-path: circle(2% at 12.2% 65%);\n  }\n  100% {\n    -webkit-clip-path: circle(2% at 12.2% 65%);\n            clip-path: circle(2% at 12.2% 65%);\n  }\n}\n\n@keyframes timelinePipeOverflow {\n  0% {\n    -webkit-clip-path: circle(2% at 26.6% 110%);\n            clip-path: circle(2% at 26.6% 110%);\n  }\n  20% {\n    -webkit-clip-path: circle(2% at 26.6% 82%);\n            clip-path: circle(2% at 26.6% 82%);\n  }\n  24% {\n    -webkit-clip-path: circle(2% at 24% 80%);\n            clip-path: circle(2% at 24% 80%);\n  }\n  42% {\n    -webkit-clip-path: circle(2% at 13% 80%);\n            clip-path: circle(2% at 13% 80%);\n  }\n  44% {\n    -webkit-clip-path: circle(2% at 12.2% 78%);\n            clip-path: circle(2% at 12.2% 78%);\n  }\n  56% {\n    -webkit-clip-path: circle(2% at 12.2% 65%);\n            clip-path: circle(2% at 12.2% 65%);\n  }\n  100% {\n    -webkit-clip-path: circle(2% at 12.2% 65%);\n            clip-path: circle(2% at 12.2% 65%);\n  }\n}\n\n.timeline-pipe-overflow2 {\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  top: 0;\n  -webkit-animation: timelinePipeOverflowTwo 2.9s linear infinite;\n          animation: timelinePipeOverflowTwo 2.9s linear infinite;\n}\n\n@-webkit-keyframes timelinePipeOverflowTwo {\n  0% {\n   -webkit-clip-path: circle(1.5% at 8% 89.5%);\n           clip-path: circle(1.5% at 8% 89.5%);\n  }\n  80% {\n   -webkit-clip-path: circle(1.5% at 30% 89.5%);\n           clip-path: circle(1.5% at 30% 89.5%);\n  }\n  100% {\n   -webkit-clip-path: circle(1.5% at 30% 89.5%);\n           clip-path: circle(1.5% at 30% 89.5%);\n  }\n}\n\n@keyframes timelinePipeOverflowTwo {\n  0% {\n   -webkit-clip-path: circle(1.5% at 8% 89.5%);\n           clip-path: circle(1.5% at 8% 89.5%);\n  }\n  80% {\n   -webkit-clip-path: circle(1.5% at 30% 89.5%);\n           clip-path: circle(1.5% at 30% 89.5%);\n  }\n  100% {\n   -webkit-clip-path: circle(1.5% at 30% 89.5%);\n           clip-path: circle(1.5% at 30% 89.5%);\n  }\n}\n\n.conveyor {\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 52%;\n  position: absolute;\n  width: 100%;\n  z-index: 4;\n}\n\n.machine {\n  right: -25%;\n  top: -64.8%;\n  position: absolute;\n  width: 142%;\n  z-index: 5;\n}\n\n.machine-box {\n  top: 28%;\n  position: absolute;\n  width: 700%;\n  z-index: 3;\n}\n\n.machine-screen {\n  position: absolute;\n  top: 20%;\n  width: 15%;\n  left: 42.8%;\n  height: 26%;\n  z-index: 6;\n}\n\n.sc {\n  font-size: 2.55vw;\n  line-height: 1.95vw;\n  margin-top: -0.2vw;\n}\n\n.yellow-light {\n  height: 4%;\n  width: 4%;\n  background-color: #fbc943;\n  position: absolute;\n  top: 4%;\n  z-index: 7;\n}\n\n.yellow-light1 {\n  right: 5%;\n  -webkit-animation: blink 1s ease-in-out infinite;\n          animation: blink 1s ease-in-out infinite;\n}\n\n.yellow-light2 {\n  right: 12%;\n  -webkit-animation-delay: .75s;\n          animation-delay: .75s;\n  -webkit-animation: blink 3s ease-in-out infinite;\n          animation: blink 3s ease-in-out infinite;\n}\n\n.yellow-light3 {\n  right: 19%;\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n  -webkit-animation: blink 2s ease-in-out infinite;\n          animation: blink 2s ease-in-out infinite;\n}\n\n.yellow-bar {\n  height: 4%;\n  width: 40%;\n  background-color: #fbc943;\n  position: absolute;\n  left: 0%;\n  z-index: 7;\n}\n\n.yellow-bar1 {\n  top: 5%;\n  -webkit-animation: 3s yellowBar ease infinite;\n          animation: 3s yellowBar ease infinite;\n}\n\n.yellow-bar2 {\n  top: 11%;\n  -webkit-animation: 4s yellowBar ease infinite;\n          animation: 4s yellowBar ease infinite;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.machine-text {\n  top: -7%;\n  position: absolute;\n  width: 700%;\n}\n\n.directions {\n  height: 28%;\n  position: absolute;\n  bottom: 0;\n  z-index: 10;\n  width: 60%;\n  left: 20%;\n}\n\n.directions:hover {\n  cursor: pointer;\n}\n\n.mobile-directions {\n  height: 28%;\n  position: absolute;\n  bottom: 0;\n  z-index: 10;\n  width: 60%;\n  left: 20%;\n  display: none;\n}\n\n.left {\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  z-index: -1;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 6vw;\n  padding-right: -15%;\n  visibility: hidden;\n}\n\n.right {\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  z-index: -1;\n  bottom: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 6vw;\n  padding-left: -15%;\n  visibility: hidden;\n}\n\n.blue-arrow {\n  color: #24537f;\n  -webkit-animation: arrowFade 2s infinite;\n          animation: arrowFade 2s infinite;\n}\n\n.blue-arrow2 {\n  color: #24537f;\n  -webkit-animation: arrowFade 2s infinite;\n          animation: arrowFade 2s infinite;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.instructions {\n  position: absolute;\n  width: 10%;\n  bottom: -0.1%;\n  left: 45%;\n  z-index: 7;\n}\n\n.instructions-icons {\n  bottom: 9%;\n  opacity: 0.5;\n}\n\n.small-gear {\n  left: 0;\n  margin: auto;\n  top: 54.5%;\n  position: absolute;\n  width: 3%;\n  z-index: 4;\n}\n\n.small-gear1 {\n  right: 90%;\n}\n\n.small-gear2 {\n  right: 75%;\n}\n\n.small-gear3 {\n  right: 60%;\n}\n\n.small-gear4 {\n  right: 45%;\n}\n\n.small-gear5 {\n  right: 30%;\n}\n\n.small-gear6 {\n  right: -30%;\n}\n\n.small-gear7 {\n  right: -45%;\n}\n\n.small-gear8 {\n  right: -60%;\n}\n\n.small-gear9 {\n  right: -75%;\n}\n\n.small-gear10 {\n  right: -90%;\n}\n\n.gear-spinning {\n  -webkit-animation: rotate 8s linear infinite;\n          animation: rotate 8s linear infinite;\n  animation-direction: reverse;\n}\n\n.timeline-rotate {\n  -webkit-animation: timelineRotate 0.5s ease-in-out;\n          animation: timelineRotate 0.5s ease-in-out;\n}\n\n.reverse {\n  animation-direction: reverse;\n}\n\n@media only screen and (max-width: 767px){\n  .milestone-container {\n    max-height: calc(280vw / 2.02) !important;\n    max-width: 280vw !important;;\n    width: 280vw !important;\n    height: calc(280vw / 2.02) !important;\n    left: -100%;\n    overflow: hidden;\n  } .right {\n    visibility: visible;\n    z-index: 4;\n  } .left {\n    visibility: visible;\n    z-index: 4;\n  } .instructions {\n    display: none;\n  } .directions {\n    display: none;\n  } .mobile-directions {\n    display: unset;\n  } .sc {\n    font-size: 2.55vw;\n    line-height: 5vw;\n    margin-top: -0.2vw;\n  }\n}\n\n@media (min-width: 1500px) {\n  .milestone-container {\n    right: 1vw;\n  }\n}\n\n@media (min-width: 1900px) {\n  .milestone-container {\n    right: 0.5vw;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/shared/timelime/timelime.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Milestone / Timeline Section -->\n  <div class=\"container-fluid\" style=\"overflow: hidden;\" (isYellowBoxOffScreen)=\"isYellowBoxOffScreen($event)\">\n\n    <div class=\"milestone-container\">\n      <img src=\"../assets/timeline-background.png\" class=\"timeline-background\">\n      <div class=\"directions\" (click)=\"swipe($event)\">\n\n      </div>\n\n      <div class=\"mobile-directions\">\n        <div class=\"right f right-mobile\" (click)=\"animateRight()\">\n          <i class=\"fas fa-arrow-right blue-arrow\"></i>\n        </div>\n        <div class=\"left left-mobile\" (click)=\"animateLeft()\">\n          <i class=\"fas fa-arrow-left blue-arrow2\"></i>\n        </div>\n      </div>\n\n  <div class=\"slider\">\n    <div *ngFor=\"let box of boxes\" class=\"new-yellowbox\"> <div>{{ box.month }}<br>{{ box.year }}</div> </div>\n  </div>\n\n  <img src=\"../assets/big Cog.png\" class=\"milestone-gear\" #mileStoneGear>\n\n\n       <img src=\"../assets/Conveyor Belt.png\" class=\"conveyor\">\n\n      <div class=\"machine-screen\">\n        <div class=\"yellow-light yellow-light1\"></div>\n        <div class=\"yellow-light yellow-light2\"></div>\n        <div class=\"yellow-light yellow-light3\"></div>\n        <div class=\"yellow-bar yellow-bar1\"></div>\n        <div class=\"yellow-bar yellow-bar2\"></div>\n        <img src=\"../assets/Machine_full copy.png\" class=\"machine\">\n\n        <div class=\"sliderWindow\" style=\"left: 0; right: 0; height: 65%; z-index: 1000;\">\n          <div *ngFor=\"let box of boxes\" class=\"sc\"> <div>{{ box.screen }}</div> </div>\n        </div>\n\n        <div class=\"sliderWindowBottom\" style=\" position: absolute;\n    left: 0;\n    right: 0;\n    height: 20%;\n    z-index: 100;\n    top: 72%;\">\n\n      <div *ngFor=\"let box of boxes\" class=\"scBottom\"> <div>{{ box.screenBottom }}</div> </div>\n    </div>\n\n      </div>\n\n      <img class=\"instructions\" src=\"../assets/mouse-instructions.png\">\n      <img class=\"instructions instructions-icons\" src=\"../assets/mouse-instructions-icon.png\">\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/shared/timelime/timelime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_util_animation__ = __webpack_require__("../../../../../src/app/shared/util/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_box__ = __webpack_require__("../../../../../src/app/shared/models/box.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_service__ = __webpack_require__("../../../../../src/app/homepage/shared/timeline.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimelimeComponent = /** @class */ (function () {
    function TimelimeComponent(animation, timelineService) {
        this.animation = animation;
        this.timelineService = timelineService;
        this.boxes = [
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("MAY", "'19", "Decentralized Platform Release", "MAY '19"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("FEB", "'19", "Decentralized Tracking Beta Release", "FEB '19"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("JAN", "'19", "Landing Page Builder Development", "JAN '19"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("DEC", "'18", "Token Listed On Exchanges", "DEC '18"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("SEP", "'18", "Token Sale Goes Live", "SEP '18"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("AUG", "'18", "Beta Software Release", "AUG '18"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("JUL", "'18", "First Prototype Completed", "JUL '18"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("DEC", "'17", "Closed Environment Launch", "DEC '17"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("JUN", "'17", "Development Begins", "JUN '17"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("MAY", "'17", "Development Team Expanded", "MAY '17"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("FEB", "'17", "Software Architecture Design", "FEB '17"),
            new __WEBPACK_IMPORTED_MODULE_2__shared_models_box__["a" /* Box */]("DEC", "'16", "Funding For Development", "DEC '16"),
        ];
        this.movingRight = true;
    }
    TimelimeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var gear = $('.milestone-gear');
        var p = 45;
        this.fslide = $('.slider').bxSlider({
            minSlides: 5,
            maxSlides: 5,
            startSlide: this.boxes.length - 2,
            // slideWidth:300,
            moveSlides: 1,
            slideMargin: 0,
            auto: true,
            wrapperClass: 'bx-wrapper-full',
            pager: false,
            controls: false,
            autoDirection: 'prev',
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                if (!_this.movingRight) {
                    p = -45;
                }
                else {
                    p = 45;
                }
                _this.animation.spin(gear, p, 500);
            }
        });
        this.windowSlide = $('.sliderWindow').bxSlider({
            minSlides: 15,
            maxSlides: 1,
            // slideWidth:200,
            moveSlides: 1,
            slideMargin: 0,
            auto: true,
            wrapperClass: 'bx-wrapper-small',
            pager: false,
            controls: false,
            autoDirection: 'prev',
            touchEnabled: false,
        });
        this.windowSlideBottom = $('.sliderWindowBottom').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            // slideWidth:200,
            moveSlides: 1,
            slideMargin: 0,
            auto: true,
            wrapperClass: 'bx-wrapper-bottom',
            pager: false,
            controls: false,
            autoDirection: 'prev',
            touchEnabled: false,
        });
    };
    TimelimeComponent.prototype.ngOnInit = function () {
    };
    TimelimeComponent.prototype.animateLeft = function () {
        this.movingRight = false;
        this.fslide.stopAuto();
        this.fslide.goToNextSlide();
        this.windowSlide.stopAuto();
        this.windowSlide.goToNextSlide();
        this.windowSlideBottom.stopAuto();
        this.windowSlideBottom.goToNextSlide();
        //console.log( this.fslide.goToNextSlide() )
    };
    TimelimeComponent.prototype.animateRight = function () {
        this.movingRight = true;
        this.fslide.stopAuto();
        this.fslide.goToPrevSlide();
        this.windowSlide.stopAuto();
        this.windowSlide.goToPrevSlide();
        this.windowSlideBottom.stopAuto();
        this.windowSlideBottom.goToPrevSlide();
        //console.log( this.fslide.goToNextSlide() )
    };
    TimelimeComponent.prototype.swipe = function (e) {
        var container = $('.directions');
        var containerWidth = container.width();
        var containerWidthDevide = containerWidth / 2;
        var offsetX = e.offsetX;
        if (offsetX <= containerWidthDevide) {
            this.animateLeft();
        }
        if (offsetX >= containerWidthDevide) {
            this.animateRight();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('machineScreenTxt'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TimelimeComponent.prototype, "machineTxtEle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mileStoneGear'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TimelimeComponent.prototype, "mileStoneGear", void 0);
    TimelimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timelime',
            template: __webpack_require__("../../../../../src/app/homepage/shared/timelime/timelime.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/shared/timelime/timelime.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_util_animation__["a" /* Animation */], __WEBPACK_IMPORTED_MODULE_3__timeline_service__["a" /* TimelineService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_util_animation__["a" /* Animation */], __WEBPACK_IMPORTED_MODULE_3__timeline_service__["a" /* TimelineService */]])
    ], TimelimeComponent);
    return TimelimeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/shared/timelime/yellowbox/yellowbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-yellowbox {\n  background-color: #feca40;\n  border: 3px solid #24537f;\n  border-radius: 6px;\n  height: 16%;\n  width: 14%;\n  bottom: 47%;\n  position: absolute;\n  z-index: 4;\n}\n\n.new-yellowbox h2 {\n  color: #24537f;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/shared/timelime/yellowbox/yellowbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div #yellowBox  class=\"new-yellowbox\" [style.left.%]=\"boxStartingPoint\">\n  <h2>{{ month }}<br>{{ year }}</h2>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/shared/timelime/yellowbox/yellowbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YellowboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_util_animation__ = __webpack_require__("../../../../../src/app/shared/util/animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline_service__ = __webpack_require__("../../../../../src/app/homepage/shared/timeline.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YellowboxComponent = /** @class */ (function () {
    function YellowboxComponent(animation, timelimeService) {
        this.animation = animation;
        this.timelimeService = timelimeService;
        this.screenWidth = $(window).width();
        this.isOffScreen = false;
        // Outputs
        this.animationCallbackEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isBoxOffScreen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    YellowboxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('loaded');
        this.index = this.$this.parent('app-yellowbox').data('index');
        // Subscribe to stop obeserable
        this.subscription = this.timelimeService.getNotifier().subscribe(function (res) {
            _this.actions(res);
        });
        this.repeat();
    };
    YellowboxComponent.prototype.repeat = function () {
        var _this = this;
        this.intervalID = setInterval(function () {
            if (_this.isAnimatingRight) {
                _this.position = +_this.position + 20;
            }
            else {
                _this.position = +_this.position - 20;
            }
            _this.animate();
        }, +this.pauseTime);
    };
    YellowboxComponent.prototype.actions = function (res) {
        switch (res) {
            case "start":
                //this.repeat()
                break;
            case "stop":
                this.stop();
                break;
            case "looping":
                this.stop();
                //this.repeat()
                break;
            default:
                // code...
                break;
        }
    };
    YellowboxComponent.prototype.ngOnInit = function () {
        this.$this = $(this.yellowBox.nativeElement);
    };
    YellowboxComponent.prototype.animationCallback = function () {
        this.animationCallbackEvent.emit(this);
        if (this.isAtEndOfScreen() && !this.isOffScreen) {
            this.isBoxOffScreen.emit(this);
            this.isOffScreen = true;
        }
    };
    YellowboxComponent.prototype.isAtEndOfScreen = function () {
        return this.$this.position().left >= this.screenWidth;
    };
    YellowboxComponent.prototype.removeEle = function () {
        this.$this.remove();
    };
    YellowboxComponent.prototype.animate = function () {
        var _this = this;
        this.animation.animateRight(this.yellowBox.nativeElement, this.position, this.animationSpeed, function () {
            _this.animationCallback();
        });
    };
    YellowboxComponent.prototype.emiteInstance = function () {
        if (this.isAtEndOfScreen() && !this.isOffScreen) {
            this.animationCallbackEvent.emit(this);
            this.isOffScreen = true;
        }
    };
    YellowboxComponent.prototype.stop = function () {
        clearInterval(this.intervalID);
        this.$this.clearQueue();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], YellowboxComponent.prototype, "isPaused", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], YellowboxComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], YellowboxComponent.prototype, "month", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], YellowboxComponent.prototype, "year", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], YellowboxComponent.prototype, "animationSpeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], YellowboxComponent.prototype, "isEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], YellowboxComponent.prototype, "isFirst", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], YellowboxComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], YellowboxComponent.prototype, "isAnimatingRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], YellowboxComponent.prototype, "boxStartingPoint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], YellowboxComponent.prototype, "pauseTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], YellowboxComponent.prototype, "animationCallbackEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], YellowboxComponent.prototype, "isBoxOffScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('yellowBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], YellowboxComponent.prototype, "yellowBox", void 0);
    YellowboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-yellowbox',
            template: __webpack_require__("../../../../../src/app/homepage/shared/timelime/yellowbox/yellowbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/shared/timelime/yellowbox/yellowbox.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_util_animation__["a" /* Animation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_util_animation__["a" /* Animation */], __WEBPACK_IMPORTED_MODULE_2__timeline_service__["a" /* TimelineService */]])
    ], YellowboxComponent);
    return YellowboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/shared/timeline.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineService = /** @class */ (function () {
    /**
    * Observable string streams
    */
    function TimelineService() {
        this.notify = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    TimelineService.prototype.sendAction = function (action) {
        this.notify.next(action);
    };
    TimelineService.prototype.getNotifier = function () {
        return this.notify.asObservable();
    };
    TimelineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TimelineService);
    return TimelineService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid reg-container first-form\" style=\"height: 500px;\">\n\n  <div class=\"reg-image hidden-sm hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n\n  <app-login-form></app-login-form>\n\n  <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n</div>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/password-reset/password-reset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid reg-container first-form\" style=\"height: 500px;\">\n\n  <div class=\"reg-image hidden-sm hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n\n\n<form>\n  <div  class=\"reg-form\">\n    <div class=\"reg-active reg-border\">\n      <h3>Password Reset</h3>\n      <hr>\n      <div class=\"reginr\">\n        <span><i class=\"fa fa-user\"></i></span>\n        <input [(ngModel)]=\"email\" name=\"email\" minlength=\"4\" maxlength=\"100\" type=\"email\" required=\"\" autocomplete=\"off\" placeholder=\"enter email\">\n      </div>\n\n      <button (click)=\"reset()\" type=\"submit\" style=\"margin-top: 25px;\" class=\"btn btn-info reg-button\" id=\"continue\">\n        <p><i class=\"fa fa-arrow-circle-right\"></i>&nbsp;&nbsp;&nbsp;Continue</p>\n      </button>\n    </div>\n  </div>\n</form>\n\n  <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/password-reset/password-reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(memberService, router) {
        this.memberService = memberService;
        this.router = router;
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
    PasswordResetComponent.prototype.reset = function () {
        var _this = this;
        this.memberService.resetPassword(this.email).subscribe(function (res) { return _this.afterResetPassword(res); });
    };
    PasswordResetComponent.prototype.afterResetPassword = function (res) {
        this.router.navigate(['/password/reset/checkemail', { title: 'Please check your email', subTitle: 'Please check your email ' + this.email + ' for a link to reset your password', actionRouter: '/login', buttonLabel: 'Sign In' }]);
    };
    PasswordResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-password-reset',
            template: __webpack_require__("../../../../../src/app/password-reset/password-reset.component.html"),
            styles: [__webpack_require__("../../../../../src/app/password-reset/password-reset.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/password/password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/password/password.component.html":
/***/ (function(module, exports) {

module.exports = " <app-dashboard-header></app-dashboard-header>\n  <div class=\"container-fluid member-container\">\n    <div class=\"password-form\">\n      <h2>Change Your Password</h2>\n      <br>\n      <div class=\"reginr mem-reginr\"> <span><i class=\"fa fa-history\"></i></span>\n        <input [(ngModel)]=\"currentPassword\" type=\"password\" required=\"\" autocomplete=\"off\" placeholder=\"Old Password\">\n      </div>\n      <div class=\"reginr mem-reginr\"> <span><i class=\"fa fa-unlock-alt\"></i></span>\n        <input [(ngModel)]=\"newPassword\" type=\"password\" required=\"\" autocomplete=\"off\" placeholder=\"New Password\">\n      </div>\n      <div class=\"reginr mem-reginr\"> <span><i class=\"fa fa-lock\"></i></span>\n        <input [(ngModel)]=\"confirmNewPassword\" type=\"password\" required=\"\" autocomplete=\"off\" placeholder=\"Confirm Password\">\n      </div>\n      <button (click)=\"afterUpdateAccount(currentPassword, newPassword)\" class=\"mem-button\">\n        <h4>Confirm New Password</h4>\n      </button>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(memberService, app, activatedRoute) {
        this.memberService = memberService;
        this.app = app;
        this.activatedRoute = activatedRoute;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */]();
    }
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to router event 
        this.subscription = this.activatedRoute.params
            .subscribe(function (param) {
            _this.userId = param['id'];
            _this.memberService.findMemberById(_this.app.getUserId()).subscribe(function (res) { return _this.afterGetUser(res); });
        });
    };
    PasswordComponent.prototype.afterUpdateAccount = function (currentPassword, newPassword) {
        var _this = this;
        if (this.confirmNewPassword != newPassword) {
            return alert('Confirm password dont match');
        }
        delete this.user.passwordConfirm;
        //this.memberService.updateAccountBtId(this.userId, this.user).subscribe(res => this.afterUpdatePassword(res));
        this.memberService.changePassword(currentPassword, newPassword).subscribe(function (res) { return _this.afterUpdatePassword(res); });
    };
    PasswordComponent.prototype.afterGetUser = function (res) {
        this.user = res;
    };
    PasswordComponent.prototype.afterUpdatePassword = function (res) {
        alert('Password updated successfully');
    };
    PasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-password',
            template: __webpack_require__("../../../../../src/app/password/password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/password/password.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__["a" /* MemberService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"utf-8\";\n\na {\n  text-decoration: none !important;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  overflow-x: hidden;\n  width: 100vw;\n}\n\nhtml,body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.privacy-container {\n  background-color: #1db8d3;\n/*   margin-top: -139px; */\n  color: white;\n  text-align: center;\n}\n\n.privacy-container h1 {\n  padding: 15px 0;\n  font-weight: 700;\n  font-size: 48px;\n}\n\n.privacy-container span {\n  color: rgba(255, 255, 255, 1);\n  border-bottom: 2px solid white;\n}\n\n.privacy-container img {\n  width: 70vw;\n  margin-top: 30px;\n  max-width: 1000px;\n}\n\n.privacy-container div {\n  margin: 0 auto;\n}\n\n.privacy-icons {\n  margin:  0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  text-align:  center;\n}\n\n.privacy-icons i {\n  font-size: 8vw;\n  opacity:  0.8;\n}\n\n.privacy-info {\n  width: 70vw;\n  max-width: 1000px;\n  margin-top: 20px;\n  padding-bottom: 30px;\n  font-size: 18px;\n  margin: 0 auto;\n}\n\n.privacy-info i {\n  color: #24537f;\n}\n\n.privacy-info p {\n  color: #595959 !important;\n}\n\n.privacy-info h2 {\n  font-size: 32px;\n  font-weight: 600;\n}\n\n.privacy-info h6 {\n  font-size: 20px;\n  margin: 16px;\n}\n\np {\n  padding: 5px 0;\n}\n\n.privacy-info h3 {\n  font-size: 28px;\n  font-weight: 700;\n  color: #15465d;\n  padding: 15px 0;\n}\n\n.privacy-box {\n  width: 800px;\n  -webkit-box-shadow: 0px 0px 18px #CCCCCC;\n          box-shadow: 0px 0px 18px #CCCCCC;\n  margin: 40px auto;\n  padding: 20px;\n  text-align: center;\n  border-radius: 2px;\n}\n\n.privacy-button {\n  background-color: #fd8a66;\n  color: white;\n  width: 220px;\n  padding: 10px;\n  border-radius: 3px;\n  margin: 0 auto;\n  -webkit-box-shadow: 1px 1px 1px #CCCCCC;\n          box-shadow: 1px 1px 1px #CCCCCC;\n}\n\n.privacy-button:hover {\n  cursor: pointer;\n  background-color: #D17356;\n}\n\n.privacy-button:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: #BE684F;\n}\n\n.affiliate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.affiliate a {\n  color: #2C62F1;\n}\n\n.affiliate a:hover {\n  color: #1B46C1;\n  text-decoration: underline !important;\n}\n\n/* Media Queries */\n\n@media only screen and (max-width: 979px) {\n  .privacy-box {\n    width: 80vw;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .privacy-info {\n    width: 90vw;\n  }\n\n  .sign-up p {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .privacy-container {\n    margin-top: -35px !important;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<app-homepage-header></app-homepage-header>\n\n<div class=\"container-fluid privacy-container\">\n  <h1>Privacy Policy</h1>\n</div>\n\n<div class=\"container privacy-info\">\n  <p style=\"padding-top: 30px;\">This page informs you of our policies regarding the collection, use and disclosure of personal information we receive from users of our site (https://www.clicktool.com). We use your personal information to better understand your usage of the site, and to collect traffic statistics.</p>\n  <p>By using the site, you agree to the collection and use of information in accordance with this policy.</p>\n\n  <h3 id=\"logdata\" class=\" anchorAf\"><a href=\"#logdata\"></a>Log Data</h3>\n  <p>Like many site operators, we collect information that your browser sends whenever you visit our site (\"Log Data\"). This Log Data may include information such as your computer's Internet Protocol (\"IP\") address (with replaced last byte), browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>\n\n  <h3 id=\"cookies\" class=\" anchorAf\"><a href=\"#cookies\"></a>Cookies</h3>\n  <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.</p>\n\n  <p>We use cookies for the following purposes:</p>\n  <ul>\n    <li>To keep track of whether you have pressed the \"OK\" button on the cookie disclaimer, so we don't bother you with the notification if you have.</li>\n    <li>Our Analytics software (Google Analytics) uses cookies to measure and better understand user-interactions on our Site. You can read more about how Google Analytics uses cookies <a href=\"https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage\">here</a>.</li>\n  </ul>\n\n  <h3 id=\"analytics\" class=\" anchorAf\"><a href=\"#analytics\"></a>Google Analytics</h3>\n  <p>We use a third-party JavaScript plug-in provided by Google called \"Google Analytics\" to provide us with useful traffic statistics and to better understand how you use our site. We do not have direct access to the information obtained from Google Analytics, but Google provides us with a summary through their dashboard.</p>\n\n  <p>We may share the information obtained from Google Analytics with business partners who are interested in advertising on our website. The information shared with these business partners will not contain any personally identifying information (Google does not provide us with direct access to the data and therefore we cannot see this information).</p>\n\n  <p>You can opt-out of having your information collected by Google Analytics by downloading the Google Analytics opt-out browser add-on provided by Google. This will prevent your information being used by Google Analytics. Doing this will not affect your ability to use our Site in any way. You can download the opt-out browser add-on <a href=\"https://tools.google.com/dlpage/gaoptout\">here</a>. We also honor the Do Not Track header and will not track visitors who have Do Not Track switched on.</p>\n\n  <h3 id=\"changes\" class=\" anchorAf\"><a href=\"#changes\"></a>Changes to this Privacy Policy</h3>\n  <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on the Site. You are advised to review this privacy policy periodically for any changes.</p>\n\n  <p>This Privacy Policy was last updated: 5th July, 2018.</p>\n\n  <h3 id=\"contact\" class=\" anchorAf\"><a href=\"#contact\"></a>Contact Us</h3>\n  <p>If you have any questions about our privacy policy, or how your data is being collected and processed, please e-mail <a href=\"mailto:privacy@cilcktool.com\">privacy@cilcktool.com</a>.</p>\n      \n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__("../../../../../src/app/privacy/privacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/security/security.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/security/security.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\n\n<div class=\"container-fluid white-bg bb\" style=\"margin-top: 60px; box-shadow: 1px 1px 1px rgba(0,0,0,0.1);\">\n\t<div class=\"container mw-900 br bl\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-3 npr npl\">\n\t\t\t\t<app-settings-nav></app-settings-nav>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-9 bl form-toggler-container\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 bb\">\n\t\t\t\t\t\t<h4 class=\"title-bb\">Security</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<app-form-toggler \n\t\t\t\t\tlabel=\"Password\" \n\t\t\t\t\tvalue=\"•••••••••••••\"\n\t\t\t\t\t[verifyValue]=\"true\" \n\t\t\t\t\t[fields]=\"[{name:'chris'}]\"\n\t\t\t\t\t(onSave)=\"saveSettings($event)\">\t\t\n\t\t\t\t</app-form-toggler>\n\n\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/security/security.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecurityComponent = /** @class */ (function () {
    function SecurityComponent() {
    }
    SecurityComponent.prototype.ngOnInit = function () {
    };
    SecurityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-security',
            template: __webpack_require__("../../../../../src/app/settings/security/security.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/security/security.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecurityComponent);
    return SecurityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings-nav/settings-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings-nav/settings-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-unstyled sidenav-2\">\n\t<li> \n\t\t<a routerLink=\"/settings\" href=\"/settings\">\n\t\t\t<i class=\"material-icons\">\n\t\t\tsettings\n\t\t\t</i>\t\t\t\t\t\t\t\n\t\t\tGeneral\n\t\t</a>\n\t</li>\n\t<li> \n\t\t<a routerLink=\"/settings/security\" href=\"/settings/security\">\n\t\t\t<i class=\"material-icons\">\n\t\t\tlock\n\t\t\t</i>\t\t\t\t\t\t\t\n\t\t\tSecurity\n\t\t</a>\n\t</li>\t\n\t<li> \n\t\t<a routerLink=\"/settings/wallet\" href=\"settings/wallet\">\n\t\t\t<i class=\"material-icons\">\n\t\t\taccount_balance_wallet\n\t\t\t</i>\t\t\t\t\t\t\t\n\t\t\tWallet\n\t\t</a>\n\t</li>\t\t\t\t\t\t\t\t\t\n</ul>"

/***/ }),

/***/ "../../../../../src/app/settings/settings-nav/settings-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsNavComponent = /** @class */ (function () {
    function SettingsNavComponent() {
    }
    SettingsNavComponent.prototype.ngOnInit = function () {
    };
    SettingsNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings-nav',
            template: __webpack_require__("../../../../../src/app/settings/settings-nav/settings-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings-nav/settings-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsNavComponent);
    return SettingsNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\n\n<div class=\"container-fluid white-bg bb\" style=\"margin-top: 72px; box-shadow: 1px 1px 1px rgba(0,0,0,0.1);\">\n\t<div class=\"container mw-900 br bl\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-3 npr npl\">\n\t\t\t\t<app-settings-nav></app-settings-nav>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-9 bl form-toggler-container\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 bb\">\n\t\t\t\t\t\t<h4 class=\"title-bb\">General Account Setttings</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<app-form-toggler \n\t\t\t\t\tlabel=\"Full name\" \n\t\t\t\t\tvalue=\"Christopher Kendrick\"\n\t\t\t\t\t[verifyValue]=\"false\" \n\t\t\t\t\t[fields]=\"[{name:'chris'}]\"\n\t\t\t\t\t(onSave)=\"saveSettings($event)\">\t\t\n\t\t\t\t</app-form-toggler>\n\t\t\t\t<app-form-toggler label=\"Email\" value=\"chris.kendricks07@gmai.com\"></app-form-toggler>\t\t\t\t\n\t\t\t\t<app-form-toggler label=\"DOB\" value=\"07/30/1988\"></app-form-toggler>\n\t\t\t\t<app-form-toggler label=\"Country\" value=\"USA\"></app-form-toggler>\n\t\t\t\t<app-form-toggler label=\"Wallet Address\" value=\"0x624D5050b12154Eb29BEc54B8faAeC3A3c01bDD6\"></app-form-toggler>\n\t\t\t\t<app-form-toggler label=\"Company\" value=\"Click Tool\"></app-form-toggler>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.saveSettings = function (fields) {
        console.log(fields);
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/wallet-settings/wallet-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/wallet-settings/wallet-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\n\n<div class=\"container-fluid white-bg bb\" style=\"margin-top: 60px; box-shadow: 1px 1px 1px rgba(0,0,0,0.1);\">\n\t<div class=\"container mw-900 br bl\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-3 npr npl\">\n\t\t\t\t<app-settings-nav></app-settings-nav>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-9 bl form-toggler-container\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 bb\">\n\t\t\t\t\t\t<h4 class=\"title-bb\">Wallets</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<app-button-to-form></app-button-to-form>\n\n\t\t\t\t<app-form-toggler \n\t\t\t\t\tlabel=\"Wallet Name\" \n\t\t\t\t\tvalue=\"0x624D5050b12154Eb29BEc54B8faAeC3A3c01bDD6\"\n\t\t\t\t\t[verifyValue]=\"false\" \n\t\t\t\t\t[fields]=\"[{name:'chris'}]\"\n\t\t\t\t\t(onSave)=\"saveSettings($event)\">\t\t\n\t\t\t\t</app-form-toggler>\n\t\t\t\t<app-form-toggler \n\t\t\t\t\tlabel=\"Wallet Name\" \n\t\t\t\t\tvalue=\"0x624D5050b12154Eb29BEc54B8faAeC3A3c01bDD6\"\n\t\t\t\t\t[verifyValue]=\"false\" \n\t\t\t\t\t[fields]=\"[{name:'chris'}]\"\n\t\t\t\t\t(onSave)=\"saveSettings($event)\">\t\t\n\t\t\t\t</app-form-toggler>\n\t\t\t\t<app-form-toggler \n\t\t\t\t\tlabel=\"Wallet Name\" \n\t\t\t\t\tvalue=\"0x624D5050b12154Eb29BEc54B8faAeC3A3c01bDD6\"\n\t\t\t\t\t[verifyValue]=\"false\" \n\t\t\t\t\t[fields]=\"[{name:'chris'}]\"\n\t\t\t\t\t(onSave)=\"saveSettings($event)\">\t\t\n\t\t\t\t</app-form-toggler>\n\t\t\t\t<app-form-toggler \n\t\t\t\t\tlabel=\"Wallet Name\" \n\t\t\t\t\tvalue=\"0x624D5050b12154Eb29BEc54B8faAeC3A3c01bDD6\"\n\t\t\t\t\t[verifyValue]=\"false\" \n\t\t\t\t\t[fields]=\"[{name:'chris'}]\"\n\t\t\t\t\t(onSave)=\"saveSettings($event)\">\t\t\n\t\t\t\t</app-form-toggler>\n\t\t\t\t<app-form-toggler \n\t\t\t\t\tlabel=\"Wallet Name\" \n\t\t\t\t\tvalue=\"0x624D5050b12154Eb29BEc54B8faAeC3A3c01bDD6\"\n\t\t\t\t\t[verifyValue]=\"false\" \n\t\t\t\t\t[fields]=\"[{name:'chris'}]\"\n\t\t\t\t\t(onSave)=\"saveSettings($event)\">\t\t\n\t\t\t\t</app-form-toggler>\t\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/wallet-settings/wallet-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WalletSettingsComponent = /** @class */ (function () {
    function WalletSettingsComponent() {
    }
    WalletSettingsComponent.prototype.ngOnInit = function () {
    };
    WalletSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wallet-settings',
            template: __webpack_require__("../../../../../src/app/settings/wallet-settings/wallet-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/wallet-settings/wallet-settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WalletSettingsComponent);
    return WalletSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  alert works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/common/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/shared/common/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/button-to-form/button-to-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-to-form-add .col {\n    background: #34a9d4;\n    padding: 15px 30px;\n    color: #FFF;\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/button-to-form/button-to-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12 bb\" style=\"padding:20px;\">\n\t\t<ul class=\"list-inline\">\n\t\t\t<li class=\"list-inline-item\"> <button (click)=\"addAction($event)\" class=\"btn btn-primary\">+ Add Wallet</button> </li>\n\t\t</ul>\n\t</div>\n</div>\n<div class=\"row button-to-form-add\" style=\"display: none;\">\n\t<div class=\"col col-md-12\">\n\t\t\n\t</div>\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/common/button-to-form/button-to-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonToFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonToFormComponent = /** @class */ (function () {
    function ButtonToFormComponent() {
    }
    ButtonToFormComponent.prototype.ngOnInit = function () {
    };
    ButtonToFormComponent.prototype.addAction = function (e) {
        var parent = $(e.target).closest('.row');
        parent.next('.button-to-form-add').show();
        parent.hide();
    };
    ButtonToFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-button-to-form',
            template: __webpack_require__("../../../../../src/app/shared/common/button-to-form/button-to-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/button-to-form/button-to-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonToFormComponent);
    return ButtonToFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/countdown/countdown.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/countdown/countdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-bg break-txt timer-mod white-bg-shadow\" style=\"padding: 30px;\">\n\t<h4 style=\"margin-bottom: 20px;\">Current 25% special ends in</h4>\n\t<div class=\"row\">\n\n\t  <div class=\"col-sm-12 col-md-4 text-center d-flex\" style=\"background: url(../../assets/time-bg.png) no-repeat center center; background-size: contain; height: 100px;\">\n\t      <div style=\"margin-top: 26px;\">\n\t        <h1 class=\"timer-mod-days\">00</h1>\n\t        <span class=\"text-muted\">days</span>\n\t      </div>\n\t    \n\t    <!-- <img class=\"img-responsive\" src=\"../../assets/time-bg.png\"> -->\n\t  </div>\n\t  <div class=\"col-sm-12 col-md-8\">\n\t    <ul class=\"list-inline list-with-border full-width-list\" style=\"margin-top: 35px;\">\n\t      <li class=\"list-inline-item text-center\">\n\t        <h3 class=\"timer-mod-hours\">0</h3>\n\t        <span class=\"text-muted\">hours</span>\n\t      </li>                  \n\t      <li class=\"list-inline-item text-center\">\n\t        <h3 class=\"timer-mod-minutes\">21</h3>\n\t        <span class=\"text-muted\">mins</span>\n\t      </li>\n\t      <li class=\"list-inline-item text-center\">\n\t        <h3 class=\"timer-mod-seconds\">59</h3>\n\t        <span class=\"text-muted\">secs</span>\n\t      </li>\n\t    </ul>\n\t  </div>\n\t</div>\n\t<div class=\"row\">\n\t  <div class=\"col-md-12\">\n\t    <div class=\"text-muted\" style=\"margin-top: 10px; font-size: 11px;\">ICO Enddate:<br>October 30, 2017 00:00 PTS</div> \n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/common/countdown/countdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountdownComponent = /** @class */ (function () {
    function CountdownComponent() {
    }
    CountdownComponent.prototype.ngOnInit = function () {
        var timer = new Timer();
        console.log(timer);
        timer.start({ countdown: true, startValues: { days: 30, hours: 1, minutes: 1, seconds: 1 } });
        timer.addEventListener('secondsUpdated', function (e) {
            $('.timer-mod .timer-mod-days').html(timer.getTimeValues().days);
            $('.timer-mod .timer-mod-hours').html(timer.getTimeValues().hours);
            $('.timer-mod .timer-mod-minutes').html(timer.getTimeValues().minutes);
            $('.timer-mod .timer-mod-seconds').html(timer.getTimeValues().seconds);
            //$('.timer-mod .timer-mod-secondTenths').html(timer.getTimeValues().secondTenths);
            // $('#gettingTotalValuesExample .days').html(timer.getTotalTimeValues().days);
            // $('#gettingTotalValuesExample .hours').html(timer.getTotalTimeValues().hours);
            // $('#gettingTotalValuesExample .minutes').html(timer.getTotalTimeValues().minutes);
            // $('#gettingTotalValuesExample .seconds').html(timer.getTotalTimeValues().seconds);
            // $('#gettingTotalValuesExample .secondTenths').html(timer.getTotalTimeValues().secondTenths);
        });
    };
    CountdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-countdown',
            template: __webpack_require__("../../../../../src/app/shared/common/countdown/countdown.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/countdown/countdown.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CountdownComponent);
    return CountdownComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/dashboard-header/dashboard-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/dashboard-header/dashboard-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"fixed-header\">\n\t<div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-12\">\n\t          <img class=\"dash-logo pull-left\" width=\"30\" src=\"../../assets/logo.png\">\n\t          <img style=\" position: relative;\n    top: 7px; margin-left: 15px;\" class=\"dash-logo pull-left\" width=\"130\" src=\"../../assets/logo-txt.png\">\n\t          <app-dashboard-nav></app-dashboard-nav>\n\t      </div>\n\t    </div>\t\t\n\t</div>\n\n</header>"

/***/ }),

/***/ "../../../../../src/app/shared/common/dashboard-header/dashboard-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardHeaderComponent = /** @class */ (function () {
    function DashboardHeaderComponent() {
    }
    DashboardHeaderComponent.prototype.ngOnInit = function () {
    };
    DashboardHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-header',
            template: __webpack_require__("../../../../../src/app/shared/common/dashboard-header/dashboard-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/dashboard-header/dashboard-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardHeaderComponent);
    return DashboardHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/dashboard-nav/dashboard-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary {\n    position: relative;\n    top: -8px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/dashboard-nav/dashboard-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-inline main-nav\" style=\"float: right; top: 20px; position: relative;\">\n<!-- \t<li style=\"\n    border-right: thin solid #bdbdbd;\n    padding-right: 0px;\n    top: -4px;\n    position: relative;\n    \" class=\"list-inline-item\"> 232 CLC </li> -->\n<!-- \t<li class=\"list-inline-item\" style=\"padding-right: 30px; position: relative;\">\n\t\t<app-search-bar></app-search-bar>\n\t</li> -->\n<!-- \t<li style=\"top: -5px;position: relative;border-right: thin solid #bdbdbd; padding-right: 14px; \" class=\"list-inline-item\">Christopher</li> -->\n\t<!-- <li class=\"list-inline-item\"><a routerLink=\"/\" href=\"/\"><i class=\"material-icons\">home</i></a></li> -->\n<!-- \t<li class=\"list-inline-item\"><a routerLink=\"/dashboard\" href=\"/dashboard\"><i class=\"material-icons\">dashboard</i></a></li>\n\t<li class=\"list-inline-item\"><a routerLink=\"/transactions\" href=\"/transactions\"><i class=\"material-icons\">receipt</i></a></li> -->\n<!-- \t<li class=\"list-inline-item\">\n\t\t<div style=\"position: relative;top: 4px;left: -12px;\" class=\"dropdown\">\n\t\t  <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t<i class=\"material-icons\" style=\"font-size: 30px;\">\n\t\t\t\tarrow_drop_down\n\t\t\t\t</i>\n\t\t  </a>\n\n\t\t  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuLink\">\n\t\t    <a class=\"dropdown-item\" routerLink=\"/settings\" href=\"/settings\">Settings</a>\n\t\t    <a (click)=\"logout($event)\" class=\"dropdown-item\" href=\"#\">Logout</a>\n\t\t  </div>\n\t\t</div>\t\t\n\t</li> -->\n\t<li>\n\t\t<button class=\"btn btn-primary animated pulse infinite slower\">Get Started</button>\n\t</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/shared/common/dashboard-nav/dashboard-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardNavComponent = /** @class */ (function () {
    function DashboardNavComponent(app, memberSerivce) {
        this.app = app;
        this.memberSerivce = memberSerivce;
    }
    DashboardNavComponent.prototype.ngOnInit = function () {
    };
    DashboardNavComponent.prototype.logout = function (e) {
        var _this = this;
        this.memberSerivce.logout(this.app.getAccessToken()).subscribe(function (res) { return _this.memberSerivce.afterLogout(); });
        e.preventDefault();
    };
    DashboardNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-nav',
            template: __webpack_require__("../../../../../src/app/shared/common/dashboard-nav/dashboard-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/dashboard-nav/dashboard-nav.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__["a" /* MemberService */]])
    ], DashboardNavComponent);
    return DashboardNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/exchange-rate/exchange-rate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/exchange-rate/exchange-rate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-bg break-txt white-bg-shadow\" style=\"padding: 30px;\">\n  <h4 style=\"margin-bottom: 20px;\">Exchange Rates</h4>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n     <span class=\"text-muted\">Choose Token Amount</span><br>\n     <div class=\"clearfix\" style=\"margin-bottom: 15px;\">\n       <span class=\"pull-left\"><strong>{{ currentValue }}</strong></span>\n       <span class=\"pull-right\"> <strong>CTC</strong> </span>\n     </div>\n     <input #exchangeRate (input)=\"updateValue()\" type=\"range\" min=\"1\" max=\"25000000\" value=\"0\" class=\"rslider\" id=\"rate-exchange-slider\">\n\n     <div class=\"row\" style=\" margin-top: 20px;\">\n       <div class=\"col-md-12 clearfix\" style=\"margin-bottom: 10px;\">\n         <div class=\"pull-left\">= {{ btcCalculated }}</div>\n         <div class=\"pull-right\"> <strong class=\"badge badge-primary\">BTC</strong> </div>\n       </div>\n       <div class=\"col-md-12 clearfix\" style=\"margin-bottom: 10px;\">\n         <div class=\"pull-left\">= {{ ethCalculated }}</div>\n         <div class=\"pull-right\"> <strong class=\"badge badge-primary\">ETH</strong> </div>\n       </div>\n       <div class=\"col-md-12 clearfix\">\n         <div class=\"pull-left\">= {{ usdCalculated }}</div>\n         <div class=\"pull-right\"> <strong class=\"badge badge-primary\">USD</strong> </div>\n       </div>                                  \n     </div>\n\n    </div>\n  </div>            \n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/common/exchange-rate/exchange-rate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeRateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExchangeRateComponent = /** @class */ (function () {
    function ExchangeRateComponent(api) {
        this.api = api;
        this.btcValue = 0.12;
        this.btcCalculated = 0.12;
        this.ethValue = 0.15;
        this.ethCalculated = 0.15;
        this.usdValue = 0.20;
        this.usdCalculated = 0.20;
        this.currentValue = 0;
    }
    ExchangeRateComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.slider);
        var inputValue = document.getElementById("rate-exchange-slider").value;
        $("#rate-exchange-slider").on("input change", function () {
            _this.currentValue = parseInt(document.getElementById("rate-exchange-slider").value);
            _this.btcCalculated = _this.btcValue * _this.currentValue;
            _this.ethCalculated = _this.ethValue * _this.currentValue;
            _this.usdCalculated = _this.usdValue * _this.currentValue;
        });
    };
    ExchangeRateComponent.prototype.updateValue = function () {
        //console.log('foooo');
    };
    ExchangeRateComponent.prototype.getBtcRate = function () {
    };
    ExchangeRateComponent.prototype.verifyMember = function (userId, accessToken, params, errCallback) {
        this.api.id = null;
        this.api.filter = null;
        this.api.params = params;
        this.api.setInstanceName("Members/" + userId + "/checkBackground?access_token=" + accessToken);
        return this.api.fire(0 /* CREATE */, false, true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("#exchangeRate"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ExchangeRateComponent.prototype, "slider", void 0);
    ExchangeRateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-exchange-rate',
            template: __webpack_require__("../../../../../src/app/shared/common/exchange-rate/exchange-rate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/exchange-rate/exchange-rate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], ExchangeRateComponent);
    return ExchangeRateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/form-input/form-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/form-input/form-input.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"form-group nmb\">\n\t <input formControlName=\"{{ formControlName }}\" name=\"{{ name }}\" required minlength=\"{{ minLength }}\" maxlength=\"{{ maxlength }}\" [(ngModel)]=\"verifyObj.document_id_no\" class=\"form-control style1\" type=\"text\" placeholder=\"{{ documentTypeLabel }} {{ placeholderMessage }}\">\n\n\t  <div\n\t  class=\"text-danger\"\n\t  style=\"margin-bottom: 20px; text-align: left; font-size: 12px; margin-top: 10px;\"\n\t  *ngIf=\"!this.form.get('document_id_no').valid && this.form.get('document_id_no').touched\"\n\t  >\n\t        <div [hidden]=\"!form.get('document_id_no').hasError('required')\">\n\t          <div class=\"\">{{ documentTypeLabel }} {{ requiredMessage }}</div>\n\t        </div>\n\t        <div [hidden]=\"!form.get('document_id_no').hasError('minlength')\">\n\t          <div class=\"\">{{ documentTypeLabel }} {{ minLengthMessage }}</div>\n\t        </div>\n\t        <div [hidden]=\"!form.get('document_id_no').hasError('maxlength')\">\n\t          <div class=\"\">{{ documentTypeLabel }} {{ maxlengthMessage }}</div>\n\t        </div>\n\n\t    </div>\n</div> "

/***/ }),

/***/ "../../../../../src/app/shared/common/form-input/form-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormInputComponent = /** @class */ (function () {
    function FormInputComponent() {
    }
    FormInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormInputComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormInputComponent.prototype, "formControlName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FormInputComponent.prototype, "minLength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FormInputComponent.prototype, "maxlength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], FormInputComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormInputComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormInputComponent.prototype, "requiredMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormInputComponent.prototype, "minLengthMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormInputComponent.prototype, "maxlengthMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormInputComponent.prototype, "placeholderMessage", void 0);
    FormInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-input',
            template: __webpack_require__("../../../../../src/app/shared/common/form-input/form-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/form-input/form-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormInputComponent);
    return FormInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/form-toggler/form-toggler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/form-toggler/form-toggler.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row bb hoverable-row p-rel\" style=\"padding: 15px;\">\n\t<a (click)=\"toggleChild($event)\" class=\"full-link toggle-link\" href=\"#\"></a>\n\t<div class=\"col-md-3\" style=\"font-size: 12px;\">\n\t\t<strong>{{ label }}</strong>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<span class=\"text-muted\">{{ value }}</span>\n\t</div>\n\t<div class=\"col-md-3 text-right brand-color-txt\"> {{ actionLabel }} </div>\n</div>\n\n<div class=\"row form-toggler-content bb\" style=\"display: none;\">\n\t<div class=\"col-md-12\">\n\t\t<div style=\"padding: 20px;\">\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<label>{{ label }}</label>\n\t\t\t\t<input value=\"{{ value }}\" type=\"text\" name=\"name\">\t\t\t\t\n\t\t\t</div>\n\t\t\t<div style=\"margin-top: 10px;\" *ngIf=\"verifyValue\">\n\t\t\t\t<label>Enter {{ label }} again</label>\n\t\t\t\t<input type=\"text\" name=\"name\" placeholder=\"enter {{ label }} again\">\t\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\" style=\"margin-top: 10px;\">\n\t\t\t\t<button class=\"btn btn-secondary pull-left form-toggler-close\" (click)=\"close($event)\" >Cancel</button>\n\t\t\t\t<button class=\"btn btn-primary pull-right\" (click)=\"save()\">Save</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/common/form-toggler/form-toggler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormTogglerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormTogglerComponent = /** @class */ (function () {
    function FormTogglerComponent() {
        this.verifyValue = false;
        this.actionLabel = "edit";
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormTogglerComponent.prototype.ngOnInit = function () {
        console.log(this.fields);
    };
    FormTogglerComponent.prototype.toggleChild = function (e) {
        $('.form-toggler-content.open-input').prev('.hoverable-row').show();
        $('.form-toggler-content.open-input').hide();
        var row = $(e.target).parent('.hoverable-row');
        row.next('.form-toggler-content').show().addClass('open-input');
        row.hide();
        e.preventDefault();
    };
    FormTogglerComponent.prototype.close = function (e) {
        var content = $(e.target).closest('.form-toggler-content');
        content.hide().removeClass('open-input');
        content.prev('.hoverable-row').show();
    };
    FormTogglerComponent.prototype.save = function () {
        this.onSave.emit(this.fields);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FormTogglerComponent.prototype, "verifyValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormTogglerComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormTogglerComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FormTogglerComponent.prototype, "actionLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormTogglerComponent.prototype, "fields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FormTogglerComponent.prototype, "onSave", void 0);
    FormTogglerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-toggler',
            template: __webpack_require__("../../../../../src/app/shared/common/form-toggler/form-toggler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/form-toggler/form-toggler.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormTogglerComponent);
    return FormTogglerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/lg-txt-w-button/lg-txt-w-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/lg-txt-w-button/lg-txt-w-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-bg white-bg-shadow\" style=\"padding: 30px;\">\n\t<h3 style=\"margin-bottom: 40px;\">{{ title }}</h3>\n\n\t<h1 style=\"font-size: 50px;\">{{ bodyText }}</h1>\n\t<span class=\"text-muted\">{{ subText }}</span>\n\n\t<button style=\"margin-top: 40px;\" class=\"btn prim-btn-outline btn-block btn-lg-txt btn-lg-outline\"> Contribute now</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/common/lg-txt-w-button/lg-txt-w-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LgTxtWButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LgTxtWButtonComponent = /** @class */ (function () {
    function LgTxtWButtonComponent() {
    }
    LgTxtWButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LgTxtWButtonComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LgTxtWButtonComponent.prototype, "bodyText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LgTxtWButtonComponent.prototype, "subText", void 0);
    LgTxtWButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lg-txt-w-button',
            template: __webpack_require__("../../../../../src/app/shared/common/lg-txt-w-button/lg-txt-w-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/lg-txt-w-button/lg-txt-w-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LgTxtWButtonComponent);
    return LgTxtWButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/qr-card/qr-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/qr-card/qr-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-bg break-txt white-bg-shadow\" style=\"padding: 30px; font-size: 12px;\">\n\t<h4 style=\"margin-bottom: 20px;\">{{ title }}</h4>\n\t<div class=\"row\">\n\t  <div class=\"col-sm-4 pr-0\">\n\t    <img class=\"img-fluid img-responsive\" src=\"{{ qrImageUrl }}\">\n\t  </div>\n\t  <div class=\"col-sm-8\">\n\t    {{ address }}\n\t    <div style=\"margin-top: 10px;\" class=\"text-muted\">{{ minimum }}</div>\n\t    <br>\n\t    <button class=\"btn prim-btn-outline btn-sm\" style=\"padding: 5px 20px;\">Copy address</button>\n\t  </div>\n\t</div>\n\t<div class=\"row\" style=\"margin-top: 15px;\">\n\t  <div class=\"col-md-12\">\n\t    <span class=\"brand-color-txt\" style=\"font-size: 11px;\">TRANSACTION HISTORY</span><br>\n\t    <div class=\"text-muted\" style=\"margin-top: 3px; font-size: 11px;\">After the payments, token will be available on your account automatically</div> \n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/common/qr-card/qr-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QrCardComponent = /** @class */ (function () {
    function QrCardComponent() {
    }
    QrCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QrCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QrCardComponent.prototype, "address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QrCardComponent.prototype, "minimum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QrCardComponent.prototype, "qrImageUrl", void 0);
    QrCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-qr-card',
            template: __webpack_require__("../../../../../src/app/shared/common/qr-card/qr-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/qr-card/qr-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QrCardComponent);
    return QrCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/search-bar/search-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<input placeholder=\"Search by Address / Txhash / Block / Token / Ens\" type=\"text\" class=\"search-input\" name=\"\">\n\t\t<button class=\"btn \" style=\"    background-color: #f9f9f9;\n    border-color: #98bdde; position: absolute;\n    right: 28px;\n    top: 6px;\n    border-radius: 20px;\n    padding: 1px 12px;\n    \">\n\t\t<i style=\"\n    color: #37a2cd;\n    top: 3px;\n    position: relative;\n    right: -1px;\n\" class=\"material-icons\">\n\t\tsearch\n\t\t</i>\n    </button>"

/***/ }),

/***/ "../../../../../src/app/shared/common/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__("../../../../../src/app/shared/common/search-bar/search-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/sidebar-icon/sidebar-icon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div#sidebar-icon-share{\n\tpadding: 0;\n\tmargin: 0;\n}\n#sidebar-icon-share, #sidebar-icon-soc {\n\ttop: 30% !important;\n\tbottom: auto;\n}\n#sidebar-icon-share{\n\tdisplay: table;\n}\n.slideInDown.addthis-animated, .slideInLeft.addthis-animated, .slideInRight.addthis-animated, .slideInUp.addthis-animated, .slideOutDown.addthis-animated, .slideOutLeft.addthis-animated, .slideOutRight.addthis-animated, .slideOutUp.addthis-animated {\n\t-webkit-animation-duration: .4s;\n\t        animation-duration: .4s;\n}\n.do-animate .slideOutLeft {\n\t-webkit-animation-name: slideOutLeft;\n\tanimation-name: slideOutLeft;\n}\n@-webkit-keyframes slideInUp{0%{-webkit-transform:translateY(1500px);transform:translateY(1500px)}0%,to{opacity:1}to{-webkit-transform:translateY(0);transform:translateY(0)}}\n@keyframes slideInUp{0%{-webkit-transform:translateY(1500px);transform:translateY(1500px)}0%,to{opacity:1}to{-webkit-transform:translateY(0);transform:translateY(0)}}\n.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}\n.slideInUp.addthis-animated{-webkit-animation-duration:.4s;animation-duration:.4s}\n@-webkit-keyframes slideInDown{0%{-webkit-transform:translateY(-850px);transform:translateY(-850px)}0%,to{opacity:1}to{-webkit-transform:translateY(0);transform:translateY(0)}}\n@keyframes slideInDown{0%{-webkit-transform:translateY(-850px);transform:translateY(-850px)}0%,to{opacity:1}to{-webkit-transform:translateY(0);transform:translateY(0)}}\n.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}\n@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateY(0);transform:translateY(0)}0%,to{opacity:1}to{-webkit-transform:translateY(-250px);transform:translateY(-250px)}}\n@keyframes slideOutUp{0%{-webkit-transform:translateY(0);transform:translateY(0)}0%,to{opacity:1}to{-webkit-transform:translateY(-250px);transform:translateY(-250px)}}\n.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}\n@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateY(0);transform:translateY(0)}0%,to{opacity:1}to{-webkit-transform:translateY(350px);transform:translateY(350px)}}\n@keyframes slideOutDown{0%{-webkit-transform:translateY(0);transform:translateY(0)}0%,to{opacity:1}to{-webkit-transform:translateY(350px);transform:translateY(350px)}}\n.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}\n@-webkit-keyframes slideInLeft{0%{opacity:0;-webkit-transform:translateX(-850px);transform:translateX(-850px)}to{-webkit-transform:translateX(0);transform:translateX(0)}}\n@keyframes slideInLeft{0%{opacity:0;-webkit-transform:translateX(-850px);transform:translateX(-850px)}to{-webkit-transform:translateX(0);transform:translateX(0)}}\n.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}\n@-webkit-keyframes slideInRight{0%{opacity:0;-webkit-transform:translateX(1250px);transform:translateX(1250px)}to{-webkit-transform:translateX(0);transform:translateX(0)}}\n@keyframes slideInRight{0%{opacity:0;-webkit-transform:translateX(1250px);transform:translateX(1250px)}to{-webkit-transform:translateX(0);transform:translateX(0)}}\n.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}\n@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-350px);transform:translateX(-350px)}}\n@keyframes slideOutLeft{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(-350px);transform:translateX(-350px)}}\n.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}\n@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(350px);transform:translateX(350px)}}\n@keyframes slideOutRight{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(350px);transform:translateX(350px)}}\n.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}\n.addthis-animated {\n\t-webkit-animation-fill-mode: both;\n\t        animation-fill-mode: both;\n\t-webkit-animation-timing-function: ease-out;\n\t        animation-timing-function: ease-out;\n\t-webkit-animation-duration: .3s;\n\t        animation-duration: .3s;\n}\n.sidebar-icon-left{\n\tleft: 0;\n\tfloat: left;\n\tright: auto;\n}\n.sidebar-icon {\n\tposition: fixed;\n\twidth: 3pc;\n\tz-index: 100;\n\tbackground: none;\n}\n.sidebar-icon .sidebar-icon-btn {\n\tborder: 0;\n\tpadding: 0;\n}\n.sidebar-icon a{\n\tposition: relative;\n\tdisplay: block;\n\tmargin: 0;\n\twidth: 3pc;\n\toutline-offset: -1px;\n\ttext-align: center;\n\tfloat: left;\n\t-webkit-transition: width .15s ease-in-out;\n\ttransition: width .15s ease-in-out;\n\toverflow: hidden;\n\tbackground: #e8e8e8;\n\tz-index: 100;\n\tcursor: pointer;\n}\n.sidebar-icon-visually-hidden {\n\tposition: absolute;\n\tclip: rect(1px,1px,1px,1px);\n\tpadding: 0;\n\tborder: 0;\n\toverflow: hidden;\n}\n.sidebar-icon .sidebar-icon-btn .sidebar-icon-wrapper, .sidebar-icon a .sidebar-icon-wrapper {\n\tdisplay: block;\n\tbackground-color: #ff8962;\n\tpadding: 8px 0;\n\tborder-right: 2px solid #15456d;\n}\n.sidebar-icon a:first-child .sidebar-icon-wrapper {\n\tborder-top: 2px solid #15456d;\n}\n.sidebar-icon a:last-child .sidebar-icon-wrapper {\n\tborder-bottom: 2px solid #15456d;\n}\n.sidebar-icon-wrapper svg {\n\tfill: white;\n}\n.sidebar-icon .sidebar-icon-btn, .sidebar-icon a {\n\ttext-align: center;\n\tcursor: pointer;\n}\n.sidebar-icon-open-control-left {\n\tposition: fixed;\n\ttop: 20%;\n\tz-index: 100020;\n\tleft: 0;\n\twidth: 22px;\n}\n.sidebar-icon .sidebar-icon-btn span .sidebar-icon, .sidebar-icon a span .sidebar-icon {\n\tposition: relative;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: block;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50% 50%;\n\twidth: 2pc;\n\theight: 2pc;\n\tline-height: 2pc;\n\tborder: none;\n\tpadding: 0;\n\tmargin: 0 auto;\n\toverflow: hidden;\n\tcursor: pointer;\n\tcursor: hand;\n}\n.sidebar-icon .sidebar-icon-btn:focus, .sidebar-icon .sidebar-icon-btn:hover, .sidebar-icon a:focus, .sidebar-icon a:hover {\n\twidth: 4pc;\n}\n.sidebar-icon-close-control {\n\tposition: relative;\n\twidth: 3pc;\n\toverflow: auto;\n}\n.sidebar-icon-show{\n\tdisplay:block!important;\n\topacity:1!important;\n}\n.sidebar-icon-show-content{\n\topacity:1!important;\n\tvisibility:visible;\n}\n.sidebar-icon-hide{display:none!important;opacity:0!important}\n.sidebar-icon-hide-content{opacity:0!important;visibility:hidden}\n.sidebar-icon-visible{display:block!important;opacity:0!important}\n.sidebar-icon-hide-content {\n\topacity: 0!important;\n\tvisibility: hidden;\n}\n.sidebar-icon-close-control .sidebar-icon-arrow.sidebar-icon-left {\n\tfloat: right;\n}\n.sidebar-icon-arrow:hover{\n\tcursor: pointer;\n}\ndiv.sidebar-icon-arrow.sidebar-icon-right {\n\tbackground-position: -20px 0;\n}\n.sidebar-icon-telegram-right {\n\tposition: fixed;\n\tbottom: 0;\n\tborder-radius: 0;\n\toverflow: hidden;\n\tmax-width: 292px;\n\tz-index: 99;\n\ttop: 0;\n\tmargin: auto;\n\theight: 68px;\n\tright: -229px;\n\t-webkit-transition: 0.5s;\n\ttransition: 0.5s;\n}\n@media only screen and (min-width: 992px) {\n\t.sidebar-icon-telegram-right:hover {\n\t\tright: 0;\n\t}\n}\nimg {\n\tborder-style: none;\n\tvertical-align: top;\n\tmax-width: 100%;\n\theight: auto;\n}\n.sidebar-icon-telegram-right img {\n\tborder-radius: 10px;\n\tborder: 2px solid #15456d;\n}\n@media only screen and (max-width: 480px) {\n\t.telegram {\n\t\tdisplay: none;\n\t}\n}\n@media only screen and (max-width: 900px) {\n\t#sidebar-icon-share {\n\t\ttop: unset !important;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\twidth: 100%;\n\t\tmax-width: 100%;\n\t\tz-index: 1000200;\n\t\t-webkit-box-shadow: 0 0 1px 1px #e2dfe2;\n\t\t        box-shadow: 0 0 1px 1px #e2dfe2;\n\t}\n\t#sidebar-icon-share a {\n\t\twidth: 14.2857%;\n\t}\n\t.sidebar-icon .sidebar-icon-btn .sidebar-icon-wrapper, .sidebar-icon a .sidebar-icon-wrapper {\n\t\tborder-top: 2px solid #15456d;\n\t\tborder-right: 0 !important;\n\t\tborder-bottom: 0 !important;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/sidebar-icon/sidebar-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-icon-share\" class=\"sidebar-icon-share addthis_32x32_style sidebar-icon sidebar-icon-left addthis-animated slideInLeft\">\n    <a role=\"button\" tabindex=\"1\" href=\"https://www.facebook.com/clicktoolcom/\" target=\"_blank\" class=\"sidebar-icon-btn sidebar-icon-facebook\">\n        <span class=\"sidebar-icon-visually-hidden\">Share to Facebook</span>\n        <span class=\"sidebar-icon-wrapper\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\" role=\"img\"\n                aria-labelledby=\"sidebar-icon-svg-facebook-1\" class=\"sidebar-icon sidebar-icon-facebook\">\n                <title id=\"sidebar-icon-svg-facebook-1\">Facebook</title>\n                <g>\n                    <path d=\"M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z\" fill-rule=\"evenodd\"></path>\n                </g>\n            </svg>\n        </span>\n    </a>\n    <a role=\"button\" tabindex=\"1\" href=\"https://t.me/clicktool\" target=\"_blank\" class=\"sidebar-icon-btn sidebar-icon-sidebar-icon-telegram-right\">\n        <span class=\"sidebar-icon-visually-hidden\">Share to sidebar-icon-telegram-right</span>\n        <span class=\"sidebar-icon-wrapper\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\" role=\"img\"\n                aria-labelledby=\"sidebar-icon-svg-sidebar-icon-telegram-right-2\" class=\"sidebar-icon sidebar-icon-sidebar-icon-telegram-right\">\n                <title id=\"sidebar-icon-svg-sidebar-icon-telegram-right-2\">Telegram</title>\n                <g>\n                    <g fill-rule=\"evenodd\"></g>\n                    <path d=\"M15.02 20.814l9.31-12.48L9.554 17.24l1.92 6.42c.225.63.114.88.767.88l.344-5.22 2.436 1.494z\" opacity=\".6\"></path>\n                    <path d=\"M12.24 24.54c.504 0 .727-.234 1.008-.51l2.687-2.655-3.35-2.054-.344 5.22z\" opacity=\".3\"></path>\n                    <path d=\"M12.583 19.322l8.12 6.095c.926.52 1.595.25 1.826-.874l3.304-15.825c.338-1.378-.517-2.003-1.403-1.594L5.024 14.727c-1.325.54-1.317 1.29-.24 1.625l4.98 1.58 11.53-7.39c.543-.336 1.043-.156.633.214\"></path>\n                </g>\n            </svg>\n        </span>\n    </a>\n    <a role=\"button\" tabindex=\"1\" href=\"https://twitter.com/clickcoins/\" target=\"_blank\" class=\"sidebar-icon-btn sidebar-icon-twitter\">\n        <span class=\"sidebar-icon-visually-hidden\">Share to Twitter</span>\n        <span class=\"sidebar-icon-wrapper\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\" role=\"img\"\n                aria-labelledby=\"sidebar-icon-svg-twitter-3\" class=\"sidebar-icon sidebar-icon-twitter\">\n                <title id=\"sidebar-icon-svg-twitter-3\">Twitter</title>\n                <g>\n                    <path d=\"M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336\" fill-rule=\"evenodd\"></path>\n                </g>\n            </svg>\n        </span>\n    </a>\n    <a role=\"button\" tabindex=\"1\" href=\"https://www.linkedin.com/company/clicktool/\" target=\"_blank\" class=\"sidebar-icon-btn sidebar-icon-linkedin\">\n        <span class=\"sidebar-icon-visually-hidden\">Share to LinkedIn</span>\n        <span class=\"sidebar-icon-wrapper\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\" role=\"img\"\n                aria-labelledby=\"sidebar-icon-svg-linkedin-4\" class=\"sidebar-icon sidebar-icon-linkedin\">\n                <title id=\"sidebar-icon-svg-linkedin-4\">LinkedIn</title>\n                <g>\n                    <path d=\"M26 25.963h-4.185v-6.55c0-1.56-.027-3.57-2.175-3.57-2.18 0-2.51 1.7-2.51 3.46v6.66h-4.182V12.495h4.012v1.84h.058c.558-1.058 1.924-2.174 3.96-2.174 4.24 0 5.022 2.79 5.022 6.417v7.386zM8.23 10.655a2.426 2.426 0 0 1 0-4.855 2.427 2.427 0 0 1 0 4.855zm-2.098 1.84h4.19v13.468h-4.19V12.495z\" fill-rule=\"evenodd\"></path>\n                </g>\n            </svg>\n        </span>\n    </a>\n    <a role=\"button\" tabindex=\"1\" href=\"https://medium.com/@clicktool/\" target=\"_blank\" class=\"sidebar-icon-btn sidebar-icon-medium\">\n        <span class=\"sidebar-icon-visually-hidden\">Share to Medium</span>\n        <span class=\"sidebar-icon-wrapper\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"-4 -4 32 32\" version=\"1.1\" role=\"img\"\n                aria-labelledby=\"sidebar-icon-svg-medium-5\" class=\"sidebar-icon sidebar-icon-medium\">\n                <title id=\"sidebar-icon-svg-medium-5\">Medium</title>\n                <g>\n                    <g fill-rule=\"evenodd\" clip-rule=\"evenodd\"></g>\n                    <path d=\"M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z\"></path>\n                </g>\n            </svg>\n        </span>\n    </a>\n    <a role=\"button\" tabindex=\"1\" href=\"https://www.instagram.com/clicktool/\" target=\"_blank\" class=\"sidebar-icon-btn sidebar-icon-instagram_share\">\n        <span class=\"sidebar-icon-visually-hidden\">Share to Instagram</span>\n        <span class=\"sidebar-icon-wrapper\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"-4 -4 32 32\" version=\"1.1\" role=\"img\"\n                aria-labelledby=\"sidebar-icon-svg-instagram_share-6\" class=\"sidebar-icon sidebar-icon-instagram_share\">\n                <title id=\"sidebar-icon-svg-instagram_share-6\">Instagram</title>\n                <g>\n                    <path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\" fill-rule=\"evenodd\"></path>\n                    \n                </g>\n            </svg>\n        </span>\n    </a>\n    <a role=\"button\" tabindex=\"1\" href=\"https://www.reddit.com/user/ClickTool\" target=\"_blank\" class=\"sidebar-icon-btn sidebar-icon-reddit\">\n        <span class=\"sidebar-icon-visually-hidden\">Share to Reddit</span>\n        <span class=\"sidebar-icon-wrapper\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\" role=\"img\"\n                aria-labelledby=\"sidebar-icon-svg-reddit-7\" class=\"sidebar-icon sidebar-icon-reddit\">\n                <title id=\"sidebar-icon-svg-reddit-7\">Reddit</title>\n                <g>\n                    <path d=\"M27 15.5a2.452 2.452 0 0 1-1.338 2.21c.098.38.147.777.147 1.19 0 1.283-.437 2.47-1.308 3.563-.872 1.092-2.06 1.955-3.567 2.588-1.506.634-3.143.95-4.91.95-1.768 0-3.403-.316-4.905-.95-1.502-.632-2.69-1.495-3.56-2.587-.872-1.092-1.308-2.28-1.308-3.562 0-.388.045-.777.135-1.166a2.47 2.47 0 0 1-1.006-.912c-.253-.4-.38-.842-.38-1.322 0-.678.237-1.26.712-1.744a2.334 2.334 0 0 1 1.73-.726c.697 0 1.29.26 1.78.782 1.785-1.258 3.893-1.928 6.324-2.01l1.424-6.467a.42.42 0 0 1 .184-.26.4.4 0 0 1 .32-.063l4.53 1.006c.147-.306.368-.553.662-.74a1.78 1.78 0 0 1 .97-.278c.508 0 .94.18 1.302.54.36.36.54.796.54 1.31 0 .512-.18.95-.54 1.315-.36.364-.794.546-1.302.546-.507 0-.94-.18-1.295-.54a1.793 1.793 0 0 1-.533-1.308l-4.1-.92-1.277 5.86c2.455.074 4.58.736 6.37 1.985a2.315 2.315 0 0 1 1.757-.757c.68 0 1.256.242 1.73.726.476.484.713 1.066.713 1.744zm-16.868 2.47c0 .513.178.95.534 1.315.356.365.787.547 1.295.547.508 0 .942-.182 1.302-.547.36-.364.54-.802.54-1.315 0-.513-.18-.95-.54-1.31-.36-.36-.794-.54-1.3-.54-.5 0-.93.183-1.29.547a1.79 1.79 0 0 0-.54 1.303zm9.944 4.406c.09-.09.135-.2.135-.323a.444.444 0 0 0-.44-.447c-.124 0-.23.042-.32.124-.336.348-.83.605-1.486.77a7.99 7.99 0 0 1-1.964.248 7.99 7.99 0 0 1-1.964-.248c-.655-.165-1.15-.422-1.486-.77a.456.456 0 0 0-.32-.124.414.414 0 0 0-.306.124.41.41 0 0 0-.135.317.45.45 0 0 0 .134.33c.352.355.837.636 1.455.843.617.207 1.118.33 1.503.366a11.6 11.6 0 0 0 1.117.056c.36 0 .733-.02 1.117-.056.385-.037.886-.16 1.504-.366.62-.207 1.104-.488 1.456-.844zm-.037-2.544c.507 0 .938-.182 1.294-.547.356-.364.534-.802.534-1.315 0-.505-.18-.94-.54-1.303a1.75 1.75 0 0 0-1.29-.546c-.506 0-.94.18-1.3.54-.36.36-.54.797-.54 1.31s.18.95.54 1.315c.36.365.794.547 1.3.547z\" fill-rule=\"evenodd\"></path>\n                </g>\n            </svg>\n        </span>\n    </a>\n\n</div>\n<div class=\"sidebar-icon-telegram-right\">\n    <a href=\"https://t.me/clicktool\" target=\"_blank\">\n        <img src=\"../assets/Telegram.jpg\">\n    </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/common/sidebar-icon/sidebar-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarIconComponent = /** @class */ (function () {
    function SidebarIconComponent() {
    }
    SidebarIconComponent.prototype.ngOnInit = function () {
    };
    SidebarIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-icon',
            template: __webpack_require__("../../../../../src/app/shared/common/sidebar-icon/sidebar-icon.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/sidebar-icon/sidebar-icon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarIconComponent);
    return SidebarIconComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/signup-modal/signup-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-modal.underlay {\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  width: 100%;\n}\n\n.signup-modal.underlay .signup-modal-flex {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\n\n.text-danger p {\n  font-size: 16px;\n  margin-top: 5px;\n}\n\n.signup-modal.underlay .signup-modal-sub {\n  background-color: #feca40;\n  background-repeat: no-repeat;\n  display: block;\n  left: initial;\n  position: relative;\n  opacity: 1;\n  overflow: visible;\n  margin: 0 auto;\n  width: 560px;\n  border: 2px solid #15465d;\n  z-index: 21;\n  border-radius: 4px;\n  max-width: 95%;\n}\n\n.modal-body {\n  position: relative;\n  padding: 0 15px 15px;\n}\n\n.signup-modal .modal-body {\n  font-size: 0.9em;\n  text-align: center;\n}\n\n.signup-modal-img {\n  display: inline-block;\n  background: white;\n  position: relative;\n}\n\n.modal-body img {\n  display: block;\n  width: 60%;\n  margin: 0 auto;\n}\n\n.signup-modal-content {\n  margin-top: 15px;\n}\n\n.signup-modal-content h2 {\n  text-align: center;\n  color: #15456d;\n  font-size: 28px;\n  font-weight: 500;\n  font-family: 'Montserrat';\n  margin-bottom: 10px;\n}\n\n.signup-modal-content p {\n  font-size: 16px;\n  margin: 0 0 15px;\n  font-family: 'Montserrat';\n  font-weight: 400;\n  text-align: center;\n}\n\nform.mc4wp-form {\n  text-align: center;\n}\n\n.signup-modal-form {\n  display: block;\n  width: 100%;\n}\n\n.mc4wp-form label {\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: inherit;\n}\n\n.signup-modal-form .form-control,\n.signup-modal-form label {\n  display: inline-block;\n  margin-bottom: .5em;\n  width: 100%;\n}\n\n.signup-modal-sub .btn {\n  background-color: #fe8962;\n  border: 1px solid #fe8962;\n  -webkit-box-shadow: 1px 1px 2px #CCCCCC;\n          box-shadow: 1px 1px 2px #CCCCCC;\n  border-radius: 4px;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  font-family: 'Montserrat';\n  clear: none;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 600;\n  height: auto;\n  overflow: visible;\n  padding: 10px 18px;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n  width: auto;\n}\n\n.signup-modal-sub .btn:hover {\n  background-color: #DD795B;\n}\n\n.mc4wp-form.signup-modal-form .signup-modal-submit-button {\n  margin: 10px auto;\n  padding: 10px 25px;\n  width: auto;\n}\n\n.signup-modal form input[type=email],\n.signup-modal form input[type=text] {\n  color: black;\n  padding: 12px;\n  font-size: 15px;\n  width: 300px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  -webkit-font-smoothing: antialiased;\n}\n\n@media only screen and (max-width: 359px) {\n .signup-modal form input[type=email],\n  .signup-modal form input[type=text] {\n    width: 240px;\n  } \n}\n\n.close {\n  position: absolute;\n  top: 5px;\n  z-index: 100000;\n  right: 5px;\n  padding: 0 2.5px !important;\n}\n\n.modal-social-btn li {\n  float: left;\n  list-style: none;\n}\n\n.modal-social-btn li .fab {\n  font-size: 28px;\n}\n\n.success-signup {\n  padding-bottom: 30px;\n}\n\n.success-signup h3 {\n  color: #ff8962;\n}\n\n.signup-modal-telegram{\n  position: relative;\n  top: 15px;\n}\n\n.signup-modal-telegram img{\n  \n  border: 2px solid #15465d;\n  border-radius: 15px;\n}\n\n.signup-modal-telegram img:hover{\n  -webkit-box-shadow: 0px 0px 14px 2px white;\n  box-shadow: 0px 0px 14px 2px white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/signup-modal/signup-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"signupModal\" class=\"signup-modal underlay modal fade\" role=\"dialog\">\n  <div id=\"signup-modal-flex\" class=\"signup-modal-flex signup-modal-flex-activated\">\n    <div id=\"signup-modal-sub\" class=\"signup-modal-sub\">\n      <div class=\"modal-body\">\n        <div class=\"signup-modal-img row\">\n          <img src=\"../assets/Animated-Clicktool2 a.gif\" width=\"\" height=\"\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"signup-modal-content\">\n          <h2>Get The Latest Clicktool ICO News</h2>\n          <p>Sign up to our newsletter to receive the latest news. Our email subscribers may receive early discount, special\n            bonuses and a behind the scenes look of our company. Sign up below to stay updated.</p>\n        </div>\n        <div class=\"signup-form\">\n          <section>\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate *ngIf=\"!isSubmitted\">\n              <div class=\"form-group\">\n                <input name=\"name\" formControlName=\"name\" placeholder=\"Name\" class=\"formcontrol\" required type=\"text\" value=\"\">\n                <div *ngIf=\"name.invalid && (name.dirty || isSubmitted)\" class=\"text-danger\">\n                  <div *ngIf=\"name.errors.required\">\n                    <p>Name is required.</p>\n                  </div>\n                  <div *ngIf=\"name.errors.minlength\">\n                    <p>Name must be at least 4 characters long.</p>\n                  </div>\n                  <div *ngIf=\"name.errors.maxlength\">\n                    <p>Name must not exceed 30 characters.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input name=\"email\" placeholder=\"Email\" formControlName=\"email\" class=\"formcontrol\" required type=\"email\" value=\"\">\n                <div *ngIf=\"email.invalid && (email.dirty || isSubmitted)\" class=\"text-danger\">\n                  <p>Email is required.</p>\n                </div>\n              </div>\n\n              <button type=\"submit\" class=\"signup-modal-submit-button btn\" [disabled]=\"!form.valid\">\n                <span>\n                  <i class=\"fa fa-check-circle\"></i>\n                </span>\n                <span>Sign Up</span>\n              </button>\n            </form>\n\n            <div class=\"success-signup row\" *ngIf=\"isSubmitted\">\n              <h3>Thank you! Please check your inbox to confirm your email address.</h3>\n              <div class=\"signup-modal-telegram\">\n                <a href=\"https://t.me/clicktool\" target=\"_blank\">\n                  <img src=\"../assets/Telegram.jpg\">\n                </a>\n              </div>\n              <!-- <div class=\"modal-social-btn\">\n                <ul>\n                  <li>\n                    <a href=\"https://www.facebook.com/click.tool.71\" target=\"_blank\">\n                      <i class=\"fab fa-facebook-square\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"https://twitter.com/clickcoins\" target=\"_blank\">\n                      <i class=\"fab fa-twitter-square\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"https://www.linkedin.com/company/clicktool\" target=\"_blank\">\n                      <i class=\"fab fa-linkedin\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"https://www.instagram.com/clicktool\" target=\"_blank\">\n                      <i class=\"fab fa-instagram\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"https://www.reddit.com/user/Clicktool/\" target=\"_blank\">\n                      <i class=\"fab fa-reddit-square\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"https://t.me/clicktool\" target=\"_blank\">\n                      <i class=\"fab fa-telegram\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"https://medium.com/@clicktool\" target=\"_blank\">\n                      <i class=\"fab fa-medium\"></i>\n                    </a>\n                  </li>\n                </ul>\n              </div> -->\n            </div>\n          </section>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/common/signup-modal/signup-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupModalComponent = /** @class */ (function () {
    function SignupModalComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.isSubmitted = false;
        this.result = null;
    }
    SignupModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(30)]],
            email: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
        });
    };
    Object.defineProperty(SignupModalComponent.prototype, "name", {
        get: function () { return this.form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupModalComponent.prototype, "email", {
        get: function () { return this.form.get('email'); },
        enumerable: true,
        configurable: true
    });
    SignupModalComponent.prototype.onSubmit = function () {
        this.isSubmitted = true;
        if (!this.form.valid)
            return;
        // Code to save the data
        // userService.Save(this.register.value);
        this.result = this.form.value;
        var body = 'meta_web_form_id=1865666917&meta_split_id=&listname=awlist4934147&meta_adtracking=My_Web_Form&meta_message=1&meta_required=name%2Cemail&meta_tooltip=&name=' + this.result.name + '&email=' + this.result.email + '&submit.x=59&submit.y=31';
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'text/html,application/xhtml+xml,application/xml,application/json;q=0.9,image/webp,image/apng,*/*;q=0.8'
            })
        };
        return this.http.post('https://www.aweber.com/scripts/addlead.pl', body, httpOptions).subscribe(function (res) { console.log(res); });
        // location.href = 'https://www.aweber.com/thankyou-coi.htm?m=text&l=awlist4934147'; 
    };
    SignupModalComponent.prototype.reset = function () {
        this.isSubmitted = false;
        this.form.reset();
    };
    SignupModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup-modal',
            template: __webpack_require__("../../../../../src/app/shared/common/signup-modal/signup-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/signup-modal/signup-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], SignupModalComponent);
    return SignupModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/text-action/text-action.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/text-action/text-action.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid reg-container first-form\" style=\"height: 1200px;\">\n  \n  <div class=\"reg-image hidden-sm hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n\n  <div  class=\"reg-form\">\n    <div class=\"reg-active reg-border\">\n      <h3>{{ title }}</h3>\n      <hr>\n      {{ subTitle }}\n      <button routerLink=\"{{ actionRouter }}\" style=\"margin-top: 25px;\" class=\"btn btn-info reg-button\" id=\"continue\">\n        <p><i class=\"fa fa-arrow-circle-right\"></i>&nbsp;&nbsp;&nbsp; {{ buttonLabel }}</p>\n      </button>\n    </div> \n  </div>  \n\n  <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/common/text-action/text-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextActionComponent = /** @class */ (function () {
    function TextActionComponent(activatedRoute, app) {
        this.activatedRoute = activatedRoute;
        this.app = app;
    }
    TextActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to router event 
        this.subscription = this.activatedRoute.params
            .subscribe(function (param) {
            var title = param['title'];
            var actionRouter = param['actionRouter'];
            var buttonLabel = param['buttonLabel'];
            var subTitle = param['subTitle'];
            _this.buttonLabel = buttonLabel;
            _this.title = title;
            _this.actionRouter = actionRouter;
            _this.subTitle = subTitle;
        });
    };
    TextActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-text-action',
            template: __webpack_require__("../../../../../src/app/shared/common/text-action/text-action.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/text-action/text-action.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], TextActionComponent);
    return TextActionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/timeline/timeline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "        <div id=\"timeline-container\" class=\"row timeline-row animated slideInDown\" style=\"margin-top: 50px; position: relative;\">\n          <div class=\"pl-0 pr-0 col-xs-6 col-md-3 text-left timeline-section\">\n            <div class=\"timeline-section-top\"><h4 class=\"p-0\" style=\"font-size: 21px;\">Sale 25%</h4>Price $0.014</div>\n            <div class=\"timeline-section-bottom\">ROUND 1</div>\n          </div>\n           <div class=\"pl-0 pr-0 col-xs-6 col-md-3 text-left timeline-section\">\n            <div class=\"timeline-section-top\"><h4 class=\"p-0\" style=\"font-size: 21px;\">Sale 10%</h4>Price $0.014</div>\n            <div class=\"timeline-section-bottom\">ROUND 2</div>\n          </div>\n          <div class=\"pl-0 pr-0 col-xs-6 col-md-3 text-left timeline-section\">\n            <div class=\"timeline-section-top\"><h4 class=\"p-0\" style=\"font-size: 21px;\">Sale 7%</h4>Price $0.014</div>\n            <div class=\"timeline-section-bottom\">ROUND 3</div>\n          </div>\n          <div class=\"pl-0 pr-0 col-xs-6 col-md-3 text-left timeline-section\">\n            <div class=\"timeline-section-top\"><h4 class=\"p-0\" style=\"font-size: 21px;\">Sale 3%</h4>Price $0.014</div>\n            <div class=\"timeline-section-bottom\">ROUND 4</div>\n          </div>\n          <img class=\"animated\" id=\"timeline-gear\" style=\"position: absolute;\n    left: 0px;\n    top: 51px;\n    z-index: 100;\" width=\"30\" src=\"../../assets/148912.svg\">                          \n        </div>"

/***/ }),

/***/ "../../../../../src/app/shared/common/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            //this.spin();
        });
        this.spinInterval();
    };
    TimelineComponent.prototype.spin = function () {
        $('#timeline-gear').animate({ 'left': 350 }, {
            duration: 1000,
            step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            },
            complete: function () {
                $('#timeline-gear').addClass('pulse');
                $('#timeline-container').removeClass('slideInDown');
                $('#timeline-container').addClass('pulse');
            },
        });
    };
    TimelineComponent.prototype.spinInterval = function () {
        $('#timeline-gear').animate({ 'left': 350 }, {
            duration: 1000,
            step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            }
        });
    };
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__("../../../../../src/app/shared/common/timeline/timeline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/uploader/uploader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uploader {\n\tborder: 1.5px dashed #c1ced4;\n    margin-top: 0 !important;\n    border-radius: 3px;\n    height: 210px;\n}\n.uploader.nv-file-over {\n\tborder-color: #22c322;\n\tcolor: #22c322;\n}\n.uploader.nv-file-over i {\n   color: #22c322 !important;\n}\n.upload-over-label {\n\tcolor: #22c322;\n}\n.uploaded-image-container {\n\twidth: 120px;\n\theight: 120px;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tborder: thin solid #ababab;\n    margin: 0 auto;\n    margin-top: 38px;\n}\n.uploaded-image-container img {\n    width: 200px;\n    position: relative;\n}\n.upload-check {\n\tz-index: 1000;\n    color: #7fd87f;\n    right: 30px;\n    position: absolute;\n    top: 12px;\t\n}\n.close-upload {\n\tposition: absolute;\n    left: 30px;\n    top: 12px;\n    color: #c5d4d8;\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/uploader/uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng2FileDrop\n\t[ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"              \n\t(fileOver)=\"fileOverAnother($event)\"\n\t[uploader]=\"uploader\"\n\t(click)=\"file.click()\" class=\"uploader text-center\">\n\n\t<div [hidden]=\"showAfterDropImage\"><i style=\"font-size: 40px; color: #c4d4d8; margin-top: 60px;\" class=\"material-icons\"> cloud_upload</i></div>\n\t\n\t<div [hidden]=\"!showAfterDropImage\" class=\"row\">\n\t\t<div class=\"col-xs-12 col-md-12\">\n\t\t\t<div class=\"uploaded-image-container \">\n\t\t\t\t<a href=\"#\" (click)=\"removeUpload($event)\">\n\t\t\t\t\t<i class=\"material-icons close-upload\">\n\t\t\t\t\tclose\n\t\t\t\t\t</i>\t\t\t\t\t\n\t\t\t\t</a>\t\t\n\t\t\t\t<img #AddedImage >\n\t\t\t</div>\n\t\t\t<span>{{ name }}</span>\n\t\t</div>\n\t</div>\n\n\t<span style=\"font-size: 16px; font-weight: 500;\" [hidden]=\"showAfterDropImage\">{{ name }}</span>\n\t<div class=\"text-info\" [hidden]=\"showAfterDropImage\">click to browse</div>\n\t\n\n</div>\n<input style=\"display: none;\" accept=\"image/*\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" #file/>\t\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/common/uploader/uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploaderComponent = /** @class */ (function () {
    function UploaderComponent() {
        this.onAddFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showAfterDropImage = false;
    }
    UploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.parentUploader) {
            throw new Error("You must include uploader object");
        }
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"](null);
        this.afterAddFileEventListener();
        this.fr = new FileReader();
        this.fr.onloadend = function (loadEvent) {
            _this.nativeEle.nativeElement.src = loadEvent.target.result;
            _this.showAfterDropImage = true;
        };
    };
    UploaderComponent.prototype.ngAfterViewInit = function () {
        this.nativeEle = this.droppedImage;
    };
    UploaderComponent.prototype.afterAddFileEventListener = function () {
        var _this = this;
        var $this = this;
        this.uploader.onAfterAddingFile = function (f) {
            _this.file = f._file;
            if (_this.file.type == 'image/jpeg' || _this.file.type == 'image/png') {
                _this.fileName = _this.file.name;
                _this.fr.readAsDataURL(_this.file);
                _this.fileItem = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileItem"](_this.parentUploader, _this.file, {});
                _this.onAddFile.emit(_this.fileItem);
            }
            else {
                alert('File must be a jpg or png');
            }
        };
    };
    UploaderComponent.prototype.fileOverAnother = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploaderComponent.prototype.removeUpload = function (e) {
        this.showAfterDropImage = false;
        e.preventDefault();
    };
    UploaderComponent.prototype.onClick = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UploaderComponent.prototype, "uploadDir", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UploaderComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UploaderComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UploaderComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], UploaderComponent.prototype, "onAddFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('AddedImage'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UploaderComponent.prototype, "droppedImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"])
    ], UploaderComponent.prototype, "parentUploader", void 0);
    UploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-uploader',
            template: __webpack_require__("../../../../../src/app/shared/common/uploader/uploader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/uploader/uploader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploaderComponent);
    return UploaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/common/video-card/video-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/common/video-card/video-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-bg break-txt white-bg-shadow\" style=\"padding: 30px;\">\n\t<h4 style=\"margin-bottom: 20px;\">How to contribute</h4>\n\t<div class=\"embed-responsive embed-responsive-16by9\">\n\t  <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jwulcLx5o-E\"></iframe>\n\t</div> \n</div> "

/***/ }),

/***/ "../../../../../src/app/shared/common/video-card/video-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoCardComponent = /** @class */ (function () {
    function VideoCardComponent() {
    }
    VideoCardComponent.prototype.ngOnInit = function () {
    };
    VideoCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video-card',
            template: __webpack_require__("../../../../../src/app/shared/common/video-card/video-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/common/video-card/video-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoCardComponent);
    return VideoCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/ct-preloader/ct-preloader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/ct-preloader/ct-preloader.component.html":
/***/ (function(module, exports) {

module.exports = "<img [hidden]=\"isHidden\" style=\"float: right; margin-top: 5px;\" width=\"30\" src=\"../../assets/preloader.gif\">"

/***/ }),

/***/ "../../../../../src/app/shared/ct-preloader/ct-preloader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CtPreloaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CtPreloaderComponent = /** @class */ (function () {
    function CtPreloaderComponent() {
        this.isHidden = true;
    }
    CtPreloaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CtPreloaderComponent.prototype, "isHidden", void 0);
    CtPreloaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ct-preloader',
            template: __webpack_require__("../../../../../src/app/shared/ct-preloader/ct-preloader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/ct-preloader/ct-preloader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CtPreloaderComponent);
    return CtPreloaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/dob-input.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DobInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DobInputDirective = /** @class */ (function () {
    function DobInputDirective(el, app) {
        this.whiteListed = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        this.$ele = $(el.nativeElement);
        this.ele = el.nativeElement;
    }
    DobInputDirective.prototype.onkeypress = function (e) {
        if (!this.whiteListed.includes(e.key)) {
            return false;
        }
    };
    DobInputDirective.prototype.onkeyup = function (e) {
        if (this.whiteListed.includes(e.key)) {
            if (e.key != "Backspace") {
                this.val = this.$ele.val();
                var l = this.val.length;
                if (l == 2 || l == 7) {
                    this.val = this.val + " - ";
                }
                this.$ele.val(this.val);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DobInputDirective.prototype, "onkeypress", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DobInputDirective.prototype, "onkeyup", null);
    DobInputDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDobInput]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], DobInputDirective);
    return DobInputDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/equal-height-col.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualHeightColDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EqualHeightColDirective = /** @class */ (function () {
    function EqualHeightColDirective(el, app) {
        var _this = this;
        this.colHeight = [];
        this.windowWidth = $(window).width();
        this.el = el;
        $(document).ready(function () {
            _this.resizeColumns();
        });
        $(window).resize(function () {
            _this.resizeColumns();
        });
    }
    EqualHeightColDirective.prototype.resizeColumns = function () {
        var _this = this;
        var cols = $(this.el.nativeElement).children();
        cols.map(function ($i) {
            var col = $(cols[$i]);
            var height = col.outerHeight();
            _this.colHeight.push(height);
        });
        var largestColHeight = Math.max.apply(null, this.colHeight);
        console.log(largestColHeight);
        cols.map(function ($i) {
            var col = $(cols[$i]);
            col.find('.white-bg').css({ 'min-height': largestColHeight });
        });
    };
    EqualHeightColDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appEqualHeightCol]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], EqualHeightColDirective);
    return EqualHeightColDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/form-toggler-close.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormTogglerCloseDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormTogglerCloseDirective = /** @class */ (function () {
    function FormTogglerCloseDirective(el) {
    }
    FormTogglerCloseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appFormTogglerClose]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], FormTogglerCloseDirective);
    return FormTogglerCloseDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/if-admin.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfAdminDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IfAdminDirective = /** @class */ (function () {
    function IfAdminDirective(el, app) {
        console.log(el);
        if (app.isAdmin()) {
            el.nativeElement.style.display = "block";
        }
        else {
            el.nativeElement.style.display = "none";
        }
    }
    IfAdminDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appIfAdmin]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], IfAdminDirective);
    return IfAdminDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/input-animation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputAnimationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputAnimationDirective = /** @class */ (function () {
    function InputAnimationDirective(el, app) {
        var _this = this;
        $(document).ready(function () {
            _this.init(el, app);
        });
    }
    InputAnimationDirective.prototype.init = function (el, app) {
        var _this = this;
        var $ele = $(el.nativeElement);
        var ele = el.nativeElement;
        var insideLabel = $ele.closest('.form-group').find('.top-label');
        var placeholder = $ele.attr('placeholder');
        var $bb = $ele.closest('.form-group').find('.active-border');
        // On Focus
        console.log($ele);
        if ($ele.val().length) {
            insideLabel.animate({
                top: 6,
                fontSize: 15
            }, 200, function () {
                insideLabel.hide();
                ele.setAttribute('placeholder', placeholder);
            });
        }
        $ele.focus(function () {
            ele.setAttribute('placeholder', '');
            insideLabel.show();
            insideLabel.animate({
                top: -11,
                fontSize: 12,
                color: '#1eb8d3',
                fontWeight: 500
            }, 200);
            _this.animateFromCenter($bb);
        });
        // Focus out
        $ele.focusout(function () {
            // If got text
            if (!$ele.val().length) {
                insideLabel.animate({
                    top: 6,
                    fontSize: 15
                }, 200, function () {
                    insideLabel.hide();
                    ele.setAttribute('placeholder', placeholder);
                });
            }
            else {
                insideLabel.css({ 'color': '#908f8f' });
            }
            _this.hideBorderBottom($bb);
        });
    };
    InputAnimationDirective.prototype.animateFromCenter = function ($ele) {
        $ele.toggle({ effect: "scale", direction: "horizontal" }, 200);
        //$ele.addClass('animated');	
        //$ele.addClass('slideInUp');	
    };
    InputAnimationDirective.prototype.hideBorderBottom = function ($ele) {
        $ele.toggle({ effect: "scale", direction: "horizontal" }, 200);
    };
    InputAnimationDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appInputAnimation]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], InputAnimationDirective);
    return InputAnimationDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footerbtm {\n  height: 44px;\n  bottom: 0 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footerbtm\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h6>© 2018 Clicktool All rights reserved</h6>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"termscontd\">\n          <ul>\n            <!-- <li><a routerLink=\"/support\" href=\"/support\">Support</a></li> -->\n            <li><a>Support</a></li>\n            <li><a routerLink=\"/privacy\" href=\"/privacy\">Privacy</a></li>\n            <li><a>Terms and Conditions</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/forms/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/forms/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n  <div  class=\"reg-form\">\n    <div class=\"reg-active reg-border\">\n      <h3>Log In</h3>\n      <hr>\n      <div class=\"reginr\">\n        <span><i class=\"fa fa-user\"></i></span>\n        <input [ngClass]=\"{'has-danger':!this.form.get('email').valid && this.form.get('email').touched}\" formControlName=\"email\"  name=\"email\" minlength=\"4\" maxlength=\"100\" [(ngModel)]=\"user.email\" type=\"email\" required=\"\" autocomplete=\"off\" placeholder=\"enter email\">\n      </div>\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n\n          *ngIf=\"!form.get('email').valid && form.get('email').touched\"\n          >\n                <div [hidden]=\"!form.get('email').hasError('required')\">\n                  <div class=\"\">Email required</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('minlength')\">\n                  <div class=\"\">Email must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('maxlength')\">\n                  <div class=\"\">Email cannot be more than 100 characters long.</div>\n                </div>\n            </div>\n\n      <div class=\"reginr\"> <span><i class=\"fa fa-user\"></i></span>\n        <input [ngClass]=\"{'has-danger':!form.get('password').valid && form.get('password').touched}\" formControlName=\"password\" name=\"password\" minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.password\" type=\"password\" required=\"\" autocomplete=\"off\" placeholder=\"enter password\">\n      </div>\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!form.get('password').valid && form.get('password').touched\"\n          >\n                <div [hidden]=\"!form.get('password').hasError('required')\">\n                  <div class=\"\">Password required</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('minlength')\">\n                  <div class=\"\">Password must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('maxlength')\">\n                  <div class=\"\">Password cannot be more than 100 characters long.</div>\n                </div>\n            </div>\n\n      <button (click)=\"login()\" type=\"submit\" style=\"margin-top: 25px;\" class=\"btn btn-info reg-button\" id=\"continue\">\n        <p><i class=\"fa fa-arrow-circle-right\"></i>&nbsp;&nbsp;&nbsp;Continue</p>\n      </button>\n      <a routerLink=\"/password/reset\" style=\"margin-top: 10px; display: block; width: 100%;\" href=\"#\">Forgot Password?</a>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/shared/forms/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(memberService, formBuilder) {
        this.memberService = memberService;
        this.formBuilder = formBuilder;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]
        });
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.form.updateValueAndValidity();
        if (this.form.valid) {
            this.memberService.login(this.user.email, this.user.password).subscribe(function (res) { return _this.memberService.afterLogin(res); });
        }
        else {
            Object.keys(this.form.controls).filter(function ($0) {
                _this.form.get($0).markAsTouched({ onlySelf: true });
            });
        }
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/shared/forms/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/forms/login-form/login-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_member_service__["a" /* MemberService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(app, memberService) {
        this.app = app;
        this.memberService = memberService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.app.getAccessToken()) {
            return true;
        }
        else {
            this.memberService.afterLogout();
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_2__shared_services_member_service__["a" /* MemberService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/guards/is-id-verified.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsIdVerifiedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IsIdVerifiedGuard = /** @class */ (function () {
    function IsIdVerifiedGuard(app, memberService, router) {
        this.app = app;
        this.memberService = memberService;
        this.router = router;
    }
    IsIdVerifiedGuard.prototype.canActivate = function (next, state) {
        if (this.app.getMember() && !this.app.getMember().isShuftiproVerified) {
            this.router.navigate(['/verify']);
            return false;
        }
        else {
            return true;
        }
    };
    IsIdVerifiedGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__shared_services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], IsIdVerifiedGuard);
    return IsIdVerifiedGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/guards/is-logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IsLoggedInGuard = /** @class */ (function () {
    function IsLoggedInGuard(app, memberService, router) {
        this.app = app;
        this.memberService = memberService;
        this.router = router;
    }
    IsLoggedInGuard.prototype.canActivate = function (next, state) {
        if (this.app.getAccessToken()) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else {
            return true;
        }
    };
    IsLoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__shared_services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], IsLoggedInGuard);
    return IsLoggedInGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerdes {\n  height: 70px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headerdes\">\n  <div class=\"regbre\">\n    <img src=\"../../assets/logo.png\">\n    <!-- <span><a  routerLink=\"/\" class=\"homelinkd\">Home</a><i class=\"fa fa-arrow-left\"></i><a routerLink=\"/signup\" href=\"/signup\">Register</a></span> -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/box.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
var Box = /** @class */ (function () {
    function Box(month, year, screen, screenBottom) {
        if (month === void 0) { month = "foo"; }
        if (year === void 0) { year = ""; }
        if (screen === void 0) { screen = ""; }
        if (screenBottom === void 0) { screenBottom = ""; }
        this.month = month;
        this.year = year;
        this.screen = screen;
        this.screenBottom = screenBottom;
    }
    return Box;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/error-handler-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(injector) {
        this.injector = injector;
    }
    ErrorHandlerService.prototype.handleError = function (err) {
        console.log("Error: ", err);
        var routerInjector = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]);
        // loopback error object
        var errorObj = err["error"] ? err["error"]["error"] : null;
        if (errorObj) {
            var code = errorObj["statusCode"];
            var message = errorObj["message"];
            var details = errorObj["details"];
            // Unauthorized
            if (code == 401 || code == 400 || code == 404) {
                alert(message);
                // Form valiation error code	
            }
            else if (code == 422) {
                var errMessObj_1 = details["messages"];
                var keys = Object.keys(errMessObj_1);
                console.log(errMessObj_1);
                keys.filter(function ($key) {
                    console.log($key);
                    var firstErrorMess = errMessObj_1[$key][0];
                    alert($key + " " + firstErrorMess);
                });
                // Bad request error code	
            }
        }
    };
    ErrorHandlerService.prototype.getErrorMessage = function (err) {
    };
    ErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/http-interceptor-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptorServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpInterceptorServiceService = /** @class */ (function () {
    function HttpInterceptorServiceService() {
    }
    HttpInterceptorServiceService.prototype.intercept = function (request, next) {
        return next.handle(request);
    };
    HttpInterceptorServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HttpInterceptorServiceService);
    return HttpInterceptorServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/member.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Roles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["OWNER"] = 1] = "OWNER";
    Roles[Roles["WORKER"] = 2] = "WORKER";
})(Roles || (Roles = {}));
var MemberService = /** @class */ (function () {
    function MemberService(api, router, cookieService) {
        this.api = api;
        this.router = router;
        this.cookieService = cookieService;
    }
    MemberService.prototype.getAllMembersByRole = function (roles) {
        var filter = {};
        filter["where"] = {};
        switch (roles) {
            case Roles.ADMIN:
                filter["where"]["role"] = "admin";
                break;
            case Roles.WORKER:
                filter["where"]["role"] = "worker";
                break;
            default:
                // code...
                break;
        }
        this.api.filter = "filter=" + JSON.stringify(filter);
        this.api.setInstanceName("Members");
        return this.api.fire(3 /* GET */, true);
    };
    MemberService.prototype.getSessions = function (userId) {
        this.api.filter = null;
        this.api.id = null;
        this.api.setInstanceName("Members/" + userId + "/accessTokens");
        return this.api.fire(3 /* GET */, true, true);
    };
    MemberService.prototype.findMemberById = function (userId) {
        this.api.params = {};
        this.api.setInstanceName("Members");
        this.api.filter = null;
        this.api.id = userId;
        return this.api.fire(3 /* GET */, true, true);
    };
    MemberService.prototype.deleteAccessToken = function (userId, accessTokenId) {
        this.api.filter = null;
        this.api.id = null;
        this.api.setInstanceName("Members/" + userId + "/accessTokens/" + accessTokenId);
        return this.api.fire(2 /* DELETE */, true, true);
    };
    MemberService.prototype.logout = function (accessToken) {
        this.api.id = null;
        this.api.filter = null;
        this.api.accessToken = accessToken;
        this.api.setInstanceName("Members/logout");
        return this.api.fire(0 /* CREATE */, true, true);
    };
    MemberService.prototype.afterLogout = function () {
        this.cookieService.delete("member");
        this.cookieService.delete("session");
        this.router.navigate(["/"]);
    };
    MemberService.prototype.login = function (email, password) {
        this.deleteLocalCookieSession();
        this.api.filter = null;
        this.api.id = null;
        this.api.setInstanceName("Members/login?include=user");
        this.api.params = { "email": email, "password": password };
        return this.api.fire(0 /* CREATE */, false, true);
    };
    MemberService.prototype.afterLogin = function (res) {
        this.deleteLocalCookieSession();
        this.saveAccessToken(res);
        this.setLocalMemberObj(res);
        this.afterLoginRoute(res);
        return res;
    };
    MemberService.prototype.setLocalMemberObj = function (res) {
        if (res["user"]) {
            this.cookieService.set("member", JSON.stringify(res["user"]), null, '/');
        }
        else {
            this.cookieService.set("member", JSON.stringify(res), null, '/');
        }
    };
    MemberService.prototype.saveAccessToken = function (body) {
        this.cookieService.set("session", JSON.stringify(body));
    };
    MemberService.prototype.deleteLocalCookieSession = function () {
        this.cookieService.delete("member");
        this.cookieService.delete("session");
    };
    MemberService.prototype.afterLoginRoute = function (res) {
        console.log('res', res);
        if (!res["user"]["isShuftiproVerified"]) {
            this.router.navigate(['/verify']);
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    MemberService.prototype.createAccount = function (user, errorCallback) {
        this.api.params = user;
        this.api.setInstanceName("Members");
        return this.api.fire(0 /* CREATE */, false, true).map(function () {
        }).catch(function (err) {
            errorCallback();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    MemberService.prototype.afterCreateAccount = function (email, password) {
        return this.login(email, password);
    };
    MemberService.prototype.updateAccountBtId = function (userId, member) {
        this.api.filter = null;
        this.api.id = null;
        this.api.params = member;
        this.api.setInstanceName("Members/" + userId);
        return this.api.fire(1 /* UPDATE */, true, true);
    };
    MemberService.prototype.changePassword = function (oldpassword, newPassword) {
        this.api.id = null;
        this.api.filter = null;
        this.api.params = { oldPassword: oldpassword, newPassword: newPassword };
        this.api.setInstanceName("Members/change-password");
        return this.api.fire(0 /* CREATE */, true, true);
    };
    MemberService.prototype.getAll = function () {
        this.api.id = null;
        this.api.filter = null;
        this.api.params = null;
        this.api.setInstanceName("Members");
        return this.api.fire(3 /* GET */, true, true);
    };
    MemberService.prototype.getMemberDocuments = function (userId) {
        this.api.id = null;
        this.api.filter = null;
        this.api.params = null;
        this.api.setInstanceName("Members/" + userId + "/getUploads");
        return this.api.fire(3 /* GET */, true, true);
    };
    MemberService.prototype.resetPassword = function (email) {
        this.api.id = null;
        this.api.filter = null;
        this.api.params = { email: email };
        this.api.setInstanceName("Members/reset");
        return this.api.fire(0 /* CREATE */, false, true);
    };
    MemberService.prototype.resetLostPassword = function (newPassword, accessToken) {
        this.api.id = null;
        this.api.filter = null;
        this.api.params = { newPassword: newPassword };
        this.api.setInstanceName("Members/reset-password?access_token=" + accessToken);
        return this.api.fire(0 /* CREATE */, false, true);
    };
    MemberService.prototype.verifyMember = function (userId, accessToken, params, errCallback) {
        this.api.id = null;
        this.api.filter = null;
        this.api.params = params;
        this.api.setInstanceName("Members/" + userId + "/checkBackground?access_token=" + accessToken);
        return this.api.fire(0 /* CREATE */, false, true);
    };
    MemberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/util/animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
var Animation = /** @class */ (function () {
    function Animation() {
    }
    Animation.prototype.rotate = function (ele, deg) {
    };
    Animation.prototype.animateRight = function (ele, value, speed, cb) {
        if (speed === void 0) { speed = 1000; }
        if (cb === void 0) { cb = null; }
        return $(ele).animate({
            left: value + '%'
        }, +speed, null, cb);
    };
    Animation.prototype.animateLeft = function (ele, value, speed, cb) {
        if (speed === void 0) { speed = 1000; }
        if (cb === void 0) { cb = null; }
        return $(ele).animate({
            left: value + '%'
        }, +speed, null, cb);
    };
    Animation.prototype.spin = function (ele, value, speed, cb) {
        if (speed === void 0) { speed = 1000; }
        if (cb === void 0) { cb = null; }
        // we use a pseudo object for the animation
        // (starts from `0` to `angle`), you can name it as you want
        return $({ deg: 0 }).animate({ deg: value }, {
            duration: speed,
            step: function (now) {
                // in the step-callback (that is fired each step of the animation),
                // you can use the `now` paramter which contains the current
                // animation-position (`0` up to `angle`)
                $(ele).css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
    };
    return Animation;
}());



/***/ }),

/***/ "../../../../../src/app/shared/util/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.prototype.setLocalObject = function (keyname, object) {
        var objString = JSON.stringify(object);
        localStorage.setItem(keyname, objString);
    };
    Util.prototype.getLocalObject = function (keyname) {
        var obj = localStorage.getItem(keyname);
        return obj ? JSON.parse(obj) : {};
    };
    Util.prototype.deleteLocalObject = function (keyname) {
        localStorage.removeItem(keyname);
    };
    return Util;
}());



/***/ }),

/***/ "../../../../../src/app/signup/account-info/account-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".birthday {\n  margin-bottom: 21px;\n}\n\n.birthday select {\n  background-color: white;\n  color: #2cb8d1;\n  font-weight: bold;\n  -webkit-box-shadow: 0px 0px 3px #D9D9D9;\n          box-shadow: 0px 0px 3px #D9D9D9;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.birthday select:focus {\n  outline: none;\n  border-radius: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/account-info/account-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid gradient-background-blue\" style=\"background-color: #1da1e4;\">\n<!-- <img style=\"position: absolute;\" src=\"../../assets/gray-gear1.png\"> -->\n  <div class=\"container\" style=\"max-width: 800px;\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" style=\"background-color: #FFF; box-shadow: rgba(125, 179, 202, 0.4) 0px 0px 50px; margin-top: 40px; margin-bottom: 300px; padding: 50px;\">\n\n<div class=\"row\">\n\n  <div class=\"col-md-7\">\n    <div [formGroup]=\"form\" class=\"row\">\n      <div class=\"col-md-12\" style=\"margin-bottom: 40px;\">\n        <img style=\"margin-bottom: 20px;\" width=\"100\" src=\"../../assets/font-logo.png\">\n        <h3 style=\"margin-bottom: 20px;\">Create your clicktool account</h3>\n        <p style=\"font-size: 16px;\">Investor of the only decentralized analytics platform.</p>\n      </div>\n      <div class=\"col-sm-6 npr\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group-error':!this.form.get('firstname').valid && this.form.get('firstname').touched}\">\n          <span class=\"active-border\"></span>\n          <span class=\"top-label\">First name</span>\n          <input appInputAnimation [(ngModel)]=\"user.firstname\" formControlName=\"firstname\" name=\"firstname\" required minlength=\"4\" maxlength=\"24\" class=\"form-control style1\" type=\"text\" placeholder=\"First name\">\n          <i class=\"material-icons material-icons-error\">\n          error_outline\n          </i>\n           <div\n          class=\"form-error text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('firstname').valid && this.form.get('firstname').touched\"\n          >\n                <div [hidden]=\"!form.get('firstname').hasError('required')\">\n                  <div class=\"\">Firstname required</div>\n                </div>\n                <div [hidden]=\"!form.get('firstname').hasError('minlength')\">\n                  <div class=\"\">Firstname must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('firstname').hasError('maxlength')\">\n                  <div class=\"\">Firstname cannot be more than 24 characters long.</div>\n                </div>\n\n            </div>\n\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group-error':!this.form.get('lastname').valid && this.form.get('lastname').touched}\">\n          <span class=\"active-border\"></span>\n          <span class=\"top-label\">Last name</span>\n          <input appInputAnimation [(ngModel)]=\"user.lastname\" formControlName=\"lastname\" name=\"lastname\" required minlength=\"4\" maxlength=\"24\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"Last name\">\n          <i class=\"material-icons material-icons-error\">\n          error_outline\n          </i>\n           <div\n          class=\"form-error text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('lastname').valid && this.form.get('lastname').touched\"\n          >\n                <div [hidden]=\"!form.get('lastname').hasError('required')\">\n                  <div class=\"\">Last name required</div>\n                </div>\n                <div [hidden]=\"!form.get('lastname').hasError('minlength')\">\n                  <div class=\"\">Lastname must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('lastname').hasError('maxlength')\">\n                  <div class=\"\">Lastname cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n        </div>\n      </div> \n\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          \n              <div class=\"col-sm-6\">\n                <div class=\"form-group\" [ngClass]=\"{'form-group-error':!this.form.get('dob').valid && this.form.get('dob').touched}\">\n                  <span class=\"active-border\"></span>\n                  <span class=\"top-label\">DOB - MM/DD/YYYY</span>\n                  <input appDobInput appInputAnimation [(ngModel)]=\"user.dob\" formControlName=\"dob\" name=\"first_name\" required minlength=\"4\" maxlength=\"14\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"DOB\">\n                  <i class=\"material-icons material-icons-error\">\n                  error_outline\n                  </i>\n                   \n                   <div\n                  class=\"form-error text-danger\"\n                  style=\"margin-bottom: 20px; text-align: left;\"\n                  *ngIf=\"!this.form.get('dob').valid && this.form.get('dob').touched\"\n                  >\n                        <div [hidden]=\"!form.get('dob').hasError('required')\">\n                          <div class=\"\">DOB required</div>\n                        </div>\n                        <div [hidden]=\"!form.get('dob').hasError('minlength')\">\n                          <div class=\"\">DOB must be at least 4 characters long.</div>\n                        </div>\n                        <div [hidden]=\"!form.get('dob').hasError('maxlength')\">\n                          <div class=\"\">DOB cannot be more than 24 characters long.</div>\n                        </div>\n                    </div>\n\n                </div>\n              </div>            \n          \n        </div>\n      </div>\n\n      <div class=\"col-sm-12\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group-error':!this.form.get('email').valid && this.form.get('email').touched}\">\n          <span class=\"active-border\"></span>\n          <span class=\"top-label\">Email</span>\n          <input appInputAnimation [(ngModel)]=\"user.email\" formControlName=\"email\" name=\"email\" required minlength=\"1\" maxlength=\"100\" class=\"form-control style1\" type=\"email\" placeholder=\"Email\">\n          <i class=\"material-icons material-icons-error\">\n            error_outline\n          </i>\n           <div\n          class=\"form-error text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('email').valid && this.form.get('email').touched\"\n          >\n                <div [hidden]=\"!form.get('email').hasError('required')\">\n                  <div class=\"\">*Email name required</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('minlength')\">\n                  <div class=\"\">*Email must be at least 1 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('maxlength')\">\n                  <div class=\"\">*Email cannot be more than 24 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.hasError('email', 'email') && form.get('email').touched\">\n                  *Please enter the correct email, this email not valid.\n                </div>\n            </div>\n\n        </div>\n      </div>  \n      <div class=\"col-sm-6 npr\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group-error':!this.form.get('phone').valid && this.form.get('phone').touched}\">\n          <span class=\"active-border\"></span>\n          <span class=\"top-label\">Phone</span>\n          <select class=\"form-input-select\">\n            <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option>\n              <option data-countryCode=\"US\" value=\"1\" selected>US (+1)</option>\n              <optgroup label=\"Other countries\">\n                <option data-countryCode=\"DZ\" value=\"213\">Algeria (+213)</option>\n                <option data-countryCode=\"AD\" value=\"376\">Andorra (+376)</option>\n                <option data-countryCode=\"AO\" value=\"244\">Angola (+244)</option>\n                <option data-countryCode=\"AI\" value=\"1264\">Anguilla (+1264)</option>\n                <option data-countryCode=\"AG\" value=\"1268\">Antigua &amp; Barbuda (+1268)</option>\n                <option data-countryCode=\"AR\" value=\"54\">Argentina (+54)</option>\n                <option data-countryCode=\"AM\" value=\"374\">Armenia (+374)</option>\n                <option data-countryCode=\"AW\" value=\"297\">Aruba (+297)</option>\n                <option data-countryCode=\"AU\" value=\"61\">Australia (+61)</option>\n                <option data-countryCode=\"AT\" value=\"43\">Austria (+43)</option>\n                <option data-countryCode=\"AZ\" value=\"994\">Azerbaijan (+994)</option>\n                <option data-countryCode=\"BS\" value=\"1242\">Bahamas (+1242)</option>\n                <option data-countryCode=\"BH\" value=\"973\">Bahrain (+973)</option>\n                <option data-countryCode=\"BD\" value=\"880\">Bangladesh (+880)</option>\n                <option data-countryCode=\"BB\" value=\"1246\">Barbados (+1246)</option>\n                <option data-countryCode=\"BY\" value=\"375\">Belarus (+375)</option>\n                <option data-countryCode=\"BE\" value=\"32\">Belgium (+32)</option>\n                <option data-countryCode=\"BZ\" value=\"501\">Belize (+501)</option>\n                <option data-countryCode=\"BJ\" value=\"229\">Benin (+229)</option>\n                <option data-countryCode=\"BM\" value=\"1441\">Bermuda (+1441)</option>\n                <option data-countryCode=\"BT\" value=\"975\">Bhutan (+975)</option>\n                <option data-countryCode=\"BO\" value=\"591\">Bolivia (+591)</option>\n                <option data-countryCode=\"BA\" value=\"387\">Bosnia Herzegovina (+387)</option>\n                <option data-countryCode=\"BW\" value=\"267\">Botswana (+267)</option>\n                <option data-countryCode=\"BR\" value=\"55\">Brazil (+55)</option>\n                <option data-countryCode=\"BN\" value=\"673\">Brunei (+673)</option>\n                <option data-countryCode=\"BG\" value=\"359\">Bulgaria (+359)</option>\n                <option data-countryCode=\"BF\" value=\"226\">Burkina Faso (+226)</option>\n                <option data-countryCode=\"BI\" value=\"257\">Burundi (+257)</option>\n                <option data-countryCode=\"KH\" value=\"855\">Cambodia (+855)</option>\n                <option data-countryCode=\"CM\" value=\"237\">Cameroon (+237)</option>\n                <option data-countryCode=\"CA\" value=\"1\">Canada (+1)</option>\n                <option data-countryCode=\"CV\" value=\"238\">Cape Verde Islands (+238)</option>\n                <option data-countryCode=\"KY\" value=\"1345\">Cayman Islands (+1345)</option>\n                <option data-countryCode=\"CF\" value=\"236\">Central African Republic (+236)</option>\n                <option data-countryCode=\"CL\" value=\"56\">Chile (+56)</option>\n                <option data-countryCode=\"CN\" value=\"86\">China (+86)</option>\n                <option data-countryCode=\"CO\" value=\"57\">Colombia (+57)</option>\n                <option data-countryCode=\"KM\" value=\"269\">Comoros (+269)</option>\n                <option data-countryCode=\"CG\" value=\"242\">Congo (+242)</option>\n                <option data-countryCode=\"CK\" value=\"682\">Cook Islands (+682)</option>\n                <option data-countryCode=\"CR\" value=\"506\">Costa Rica (+506)</option>\n                <option data-countryCode=\"HR\" value=\"385\">Croatia (+385)</option>\n                <option data-countryCode=\"CU\" value=\"53\">Cuba (+53)</option>\n                <option data-countryCode=\"CY\" value=\"90392\">Cyprus North (+90392)</option>\n                <option data-countryCode=\"CY\" value=\"357\">Cyprus South (+357)</option>\n                <option data-countryCode=\"CZ\" value=\"42\">Czech Republic (+42)</option>\n                <option data-countryCode=\"DK\" value=\"45\">Denmark (+45)</option>\n                <option data-countryCode=\"DJ\" value=\"253\">Djibouti (+253)</option>\n                <option data-countryCode=\"DM\" value=\"1809\">Dominica (+1809)</option>\n                <option data-countryCode=\"DO\" value=\"1809\">Dominican Republic (+1809)</option>\n                <option data-countryCode=\"EC\" value=\"593\">Ecuador (+593)</option>\n                <option data-countryCode=\"EG\" value=\"20\">Egypt (+20)</option>\n                <option data-countryCode=\"SV\" value=\"503\">El Salvador (+503)</option>\n                <option data-countryCode=\"GQ\" value=\"240\">Equatorial Guinea (+240)</option>\n                <option data-countryCode=\"ER\" value=\"291\">Eritrea (+291)</option>\n                <option data-countryCode=\"EE\" value=\"372\">Estonia (+372)</option>\n                <option data-countryCode=\"ET\" value=\"251\">Ethiopia (+251)</option>\n                <option data-countryCode=\"FK\" value=\"500\">Falkland Islands (+500)</option>\n                <option data-countryCode=\"FO\" value=\"298\">Faroe Islands (+298)</option>\n                <option data-countryCode=\"FJ\" value=\"679\">Fiji (+679)</option>\n                <option data-countryCode=\"FI\" value=\"358\">Finland (+358)</option>\n                <option data-countryCode=\"FR\" value=\"33\">France (+33)</option>\n                <option data-countryCode=\"GF\" value=\"594\">French Guiana (+594)</option>\n                <option data-countryCode=\"PF\" value=\"689\">French Polynesia (+689)</option>\n                <option data-countryCode=\"GA\" value=\"241\">Gabon (+241)</option>\n                <option data-countryCode=\"GM\" value=\"220\">Gambia (+220)</option>\n                <option data-countryCode=\"GE\" value=\"7880\">Georgia (+7880)</option>\n                <option data-countryCode=\"DE\" value=\"49\">Germany (+49)</option>\n                <option data-countryCode=\"GH\" value=\"233\">Ghana (+233)</option>\n                <option data-countryCode=\"GI\" value=\"350\">Gibraltar (+350)</option>\n                <option data-countryCode=\"GR\" value=\"30\">Greece (+30)</option>\n                <option data-countryCode=\"GL\" value=\"299\">Greenland (+299)</option>\n                <option data-countryCode=\"GD\" value=\"1473\">Grenada (+1473)</option>\n                <option data-countryCode=\"GP\" value=\"590\">Guadeloupe (+590)</option>\n                <option data-countryCode=\"GU\" value=\"671\">Guam (+671)</option>\n                <option data-countryCode=\"GT\" value=\"502\">Guatemala (+502)</option>\n                <option data-countryCode=\"GN\" value=\"224\">Guinea (+224)</option>\n                <option data-countryCode=\"GW\" value=\"245\">Guinea - Bissau (+245)</option>\n                <option data-countryCode=\"GY\" value=\"592\">Guyana (+592)</option>\n                <option data-countryCode=\"HT\" value=\"509\">Haiti (+509)</option>\n                <option data-countryCode=\"HN\" value=\"504\">Honduras (+504)</option>\n                <option data-countryCode=\"HK\" value=\"852\">Hong Kong (+852)</option>\n                <option data-countryCode=\"HU\" value=\"36\">Hungary (+36)</option>\n                <option data-countryCode=\"IS\" value=\"354\">Iceland (+354)</option>\n                <option data-countryCode=\"IN\" value=\"91\">India (+91)</option>\n                <option data-countryCode=\"ID\" value=\"62\">Indonesia (+62)</option>\n                <option data-countryCode=\"IR\" value=\"98\">Iran (+98)</option>\n                <option data-countryCode=\"IQ\" value=\"964\">Iraq (+964)</option>\n                <option data-countryCode=\"IE\" value=\"353\">Ireland (+353)</option>\n                <option data-countryCode=\"IL\" value=\"972\">Israel (+972)</option>\n                <option data-countryCode=\"IT\" value=\"39\">Italy (+39)</option>\n                <option data-countryCode=\"JM\" value=\"1876\">Jamaica (+1876)</option>\n                <option data-countryCode=\"JP\" value=\"81\">Japan (+81)</option>\n                <option data-countryCode=\"JO\" value=\"962\">Jordan (+962)</option>\n                <option data-countryCode=\"KZ\" value=\"7\">Kazakhstan (+7)</option>\n                <option data-countryCode=\"KE\" value=\"254\">Kenya (+254)</option>\n                <option data-countryCode=\"KI\" value=\"686\">Kiribati (+686)</option>\n                <option data-countryCode=\"KP\" value=\"850\">Korea North (+850)</option>\n                <option data-countryCode=\"KR\" value=\"82\">Korea South (+82)</option>\n                <option data-countryCode=\"KW\" value=\"965\">Kuwait (+965)</option>\n                <option data-countryCode=\"KG\" value=\"996\">Kyrgyzstan (+996)</option>\n                <option data-countryCode=\"LA\" value=\"856\">Laos (+856)</option>\n                <option data-countryCode=\"LV\" value=\"371\">Latvia (+371)</option>\n                <option data-countryCode=\"LB\" value=\"961\">Lebanon (+961)</option>\n                <option data-countryCode=\"LS\" value=\"266\">Lesotho (+266)</option>\n                <option data-countryCode=\"LR\" value=\"231\">Liberia (+231)</option>\n                <option data-countryCode=\"LY\" value=\"218\">Libya (+218)</option>\n                <option data-countryCode=\"LI\" value=\"417\">Liechtenstein (+417)</option>\n                <option data-countryCode=\"LT\" value=\"370\">Lithuania (+370)</option>\n                <option data-countryCode=\"LU\" value=\"352\">Luxembourg (+352)</option>\n                <option data-countryCode=\"MO\" value=\"853\">Macao (+853)</option>\n                <option data-countryCode=\"MK\" value=\"389\">Macedonia (+389)</option>\n                <option data-countryCode=\"MG\" value=\"261\">Madagascar (+261)</option>\n                <option data-countryCode=\"MW\" value=\"265\">Malawi (+265)</option>\n                <option data-countryCode=\"MY\" value=\"60\">Malaysia (+60)</option>\n                <option data-countryCode=\"MV\" value=\"960\">Maldives (+960)</option>\n                <option data-countryCode=\"ML\" value=\"223\">Mali (+223)</option>\n                <option data-countryCode=\"MT\" value=\"356\">Malta (+356)</option>\n                <option data-countryCode=\"MH\" value=\"692\">Marshall Islands (+692)</option>\n                <option data-countryCode=\"MQ\" value=\"596\">Martinique (+596)</option>\n                <option data-countryCode=\"MR\" value=\"222\">Mauritania (+222)</option>\n                <option data-countryCode=\"YT\" value=\"269\">Mayotte (+269)</option>\n                <option data-countryCode=\"MX\" value=\"52\">Mexico (+52)</option>\n                <option data-countryCode=\"FM\" value=\"691\">Micronesia (+691)</option>\n                <option data-countryCode=\"MD\" value=\"373\">Moldova (+373)</option>\n                <option data-countryCode=\"MC\" value=\"377\">Monaco (+377)</option>\n                <option data-countryCode=\"MN\" value=\"976\">Mongolia (+976)</option>\n                <option data-countryCode=\"MS\" value=\"1664\">Montserrat (+1664)</option>\n                <option data-countryCode=\"MA\" value=\"212\">Morocco (+212)</option>\n                <option data-countryCode=\"MZ\" value=\"258\">Mozambique (+258)</option>\n                <option data-countryCode=\"MN\" value=\"95\">Myanmar (+95)</option>\n                <option data-countryCode=\"NA\" value=\"264\">Namibia (+264)</option>\n                <option data-countryCode=\"NR\" value=\"674\">Nauru (+674)</option>\n                <option data-countryCode=\"NP\" value=\"977\">Nepal (+977)</option>\n                <option data-countryCode=\"NL\" value=\"31\">Netherlands (+31)</option>\n                <option data-countryCode=\"NC\" value=\"687\">New Caledonia (+687)</option>\n                <option data-countryCode=\"NZ\" value=\"64\">New Zealand (+64)</option>\n                <option data-countryCode=\"NI\" value=\"505\">Nicaragua (+505)</option>\n                <option data-countryCode=\"NE\" value=\"227\">Niger (+227)</option>\n                <option data-countryCode=\"NG\" value=\"234\">Nigeria (+234)</option>\n                <option data-countryCode=\"NU\" value=\"683\">Niue (+683)</option>\n                <option data-countryCode=\"NF\" value=\"672\">Norfolk Islands (+672)</option>\n                <option data-countryCode=\"NP\" value=\"670\">Northern Marianas (+670)</option>\n                <option data-countryCode=\"NO\" value=\"47\">Norway (+47)</option>\n                <option data-countryCode=\"OM\" value=\"968\">Oman (+968)</option>\n                <option data-countryCode=\"PW\" value=\"680\">Palau (+680)</option>\n                <option data-countryCode=\"PA\" value=\"507\">Panama (+507)</option>\n                <option data-countryCode=\"PG\" value=\"675\">Papua New Guinea (+675)</option>\n                <option data-countryCode=\"PY\" value=\"595\">Paraguay (+595)</option>\n                <option data-countryCode=\"PE\" value=\"51\">Peru (+51)</option>\n                <option data-countryCode=\"PH\" value=\"63\">Philippines (+63)</option>\n                <option data-countryCode=\"PL\" value=\"48\">Poland (+48)</option>\n                <option data-countryCode=\"PT\" value=\"351\">Portugal (+351)</option>\n                <option data-countryCode=\"PR\" value=\"1787\">Puerto Rico (+1787)</option>\n                <option data-countryCode=\"QA\" value=\"974\">Qatar (+974)</option>\n                <option data-countryCode=\"RE\" value=\"262\">Reunion (+262)</option>\n                <option data-countryCode=\"RO\" value=\"40\">Romania (+40)</option>\n                <option data-countryCode=\"RU\" value=\"7\">Russia (+7)</option>\n                <option data-countryCode=\"RW\" value=\"250\">Rwanda (+250)</option>\n                <option data-countryCode=\"SM\" value=\"378\">San Marino (+378)</option>\n                <option data-countryCode=\"ST\" value=\"239\">Sao Tome &amp; Principe (+239)</option>\n                <option data-countryCode=\"SA\" value=\"966\">Saudi Arabia (+966)</option>\n                <option data-countryCode=\"SN\" value=\"221\">Senegal (+221)</option>\n                <option data-countryCode=\"CS\" value=\"381\">Serbia (+381)</option>\n                <option data-countryCode=\"SC\" value=\"248\">Seychelles (+248)</option>\n                <option data-countryCode=\"SL\" value=\"232\">Sierra Leone (+232)</option>\n                <option data-countryCode=\"SG\" value=\"65\">Singapore (+65)</option>\n                <option data-countryCode=\"SK\" value=\"421\">Slovak Republic (+421)</option>\n                <option data-countryCode=\"SI\" value=\"386\">Slovenia (+386)</option>\n                <option data-countryCode=\"SB\" value=\"677\">Solomon Islands (+677)</option>\n                <option data-countryCode=\"SO\" value=\"252\">Somalia (+252)</option>\n                <option data-countryCode=\"ZA\" value=\"27\">South Africa (+27)</option>\n                <option data-countryCode=\"ES\" value=\"34\">Spain (+34)</option>\n                <option data-countryCode=\"LK\" value=\"94\">Sri Lanka (+94)</option>\n                <option data-countryCode=\"SH\" value=\"290\">St. Helena (+290)</option>\n                <option data-countryCode=\"KN\" value=\"1869\">St. Kitts (+1869)</option>\n                <option data-countryCode=\"SC\" value=\"1758\">St. Lucia (+1758)</option>\n                <option data-countryCode=\"SD\" value=\"249\">Sudan (+249)</option>\n                <option data-countryCode=\"SR\" value=\"597\">Suriname (+597)</option>\n                <option data-countryCode=\"SZ\" value=\"268\">Swaziland (+268)</option>\n                <option data-countryCode=\"SE\" value=\"46\">Sweden (+46)</option>\n                <option data-countryCode=\"CH\" value=\"41\">Switzerland (+41)</option>\n                <option data-countryCode=\"SI\" value=\"963\">Syria (+963)</option>\n                <option data-countryCode=\"TW\" value=\"886\">Taiwan (+886)</option>\n                <option data-countryCode=\"TJ\" value=\"7\">Tajikstan (+7)</option>\n                <option data-countryCode=\"TH\" value=\"66\">Thailand (+66)</option>\n                <option data-countryCode=\"TG\" value=\"228\">Togo (+228)</option>\n                <option data-countryCode=\"TO\" value=\"676\">Tonga (+676)</option>\n                <option data-countryCode=\"TT\" value=\"1868\">Trinidad &amp; Tobago (+1868)</option>\n                <option data-countryCode=\"TN\" value=\"216\">Tunisia (+216)</option>\n                <option data-countryCode=\"TR\" value=\"90\">Turkey (+90)</option>\n                <option data-countryCode=\"TM\" value=\"7\">Turkmenistan (+7)</option>\n                <option data-countryCode=\"TM\" value=\"993\">Turkmenistan (+993)</option>\n                <option data-countryCode=\"TC\" value=\"1649\">Turks &amp; Caicos Islands (+1649)</option>\n                <option data-countryCode=\"TV\" value=\"688\">Tuvalu (+688)</option>\n                <option data-countryCode=\"UG\" value=\"256\">Uganda (+256)</option>\n                <!-- <option data-countryCode=\"GB\" value=\"44\">UK (+44)</option> -->\n                <option data-countryCode=\"UA\" value=\"380\">Ukraine (+380)</option>\n                <option data-countryCode=\"AE\" value=\"971\">United Arab Emirates (+971)</option>\n                <option data-countryCode=\"UY\" value=\"598\">Uruguay (+598)</option>\n                <!-- <option data-countryCode=\"US\" value=\"1\">USA (+1)</option> -->\n                <option data-countryCode=\"UZ\" value=\"7\">Uzbekistan (+7)</option>\n                <option data-countryCode=\"VU\" value=\"678\">Vanuatu (+678)</option>\n                <option data-countryCode=\"VA\" value=\"379\">Vatican City (+379)</option>\n                <option data-countryCode=\"VE\" value=\"58\">Venezuela (+58)</option>\n                <option data-countryCode=\"VN\" value=\"84\">Vietnam (+84)</option>\n                <option data-countryCode=\"VG\" value=\"84\">Virgin Islands - British (+1284)</option>\n                <option data-countryCode=\"VI\" value=\"84\">Virgin Islands - US (+1340)</option>\n                <option data-countryCode=\"WF\" value=\"681\">Wallis &amp; Futuna (+681)</option>\n                <option data-countryCode=\"YE\" value=\"969\">Yemen (North)(+969)</option>\n                <option data-countryCode=\"YE\" value=\"967\">Yemen (South)(+967)</option>\n                <option data-countryCode=\"ZM\" value=\"260\">Zambia (+260)</option>\n                <option data-countryCode=\"ZW\" value=\"263\">Zimbabwe (+263)</option>\n              </optgroup>\n          </select>\n          <input [(ngModel)]=\"user.phone\" style=\"padding-left: 83px;\" appInputAnimation formControlName=\"phone\" name=\"phone\" required minlength=\"4\" maxlength=\"24\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"Phone\">\n          <i class=\"material-icons material-icons-error\">\n          error_outline\n          </i>\n           <div\n          class=\"form-error text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('phone').valid && this.form.get('phone').touched\"\n          >\n                <div [hidden]=\"!form.get('phone').hasError('required')\">\n                  <div class=\"\">Phone name required</div>\n                </div>\n                <div [hidden]=\"!form.get('phone').hasError('minlength')\">\n                  <div class=\"\">Phone must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('phone').hasError('maxlength')\">\n                  <div class=\"\">Phone cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group-error':!this.form.get('country').valid && this.form.get('country').touched}\">\n          <span class=\"active-border\"></span>\n          <span class=\"top-label\">Country</span>\n          <input appInputAnimation [(ngModel)]=\"user.country\" formControlName=\"country\" name=\"country\" required minlength=\"2\" maxlength=\"40\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"Country\">\n          <i class=\"material-icons material-icons-error\">\n            error_outline\n          </i>\n           <div\n          class=\"form-error text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('country').valid && this.form.get('country').touched\"\n          >\n                <div [hidden]=\"!form.get('country').hasError('required')\">\n                  <div class=\"\">Country name required</div>\n                </div>\n                <div [hidden]=\"!form.get('country').hasError('minlength')\">\n                  <div class=\"\">Country must be at least 2 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('country').hasError('maxlength')\">\n                  <div class=\"\">Country cannot be more than 40 characters long.</div>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <div class=\"form-group\" [ngClass]=\"{'form-group-error':!this.form.get('company').valid && this.form.get('company').touched}\">\n          <span class=\"active-border\"></span>\n          <span class=\"top-label\">Company</span>\n          <input appInputAnimation [(ngModel)]=\"user.company\" formControlName=\"company\" name=\"company\" required minlength=\"2\" maxlength=\"40\" class=\"password-input form-control style1\" type=\"text\" name=\"\" placeholder=\"Company\">\n          <i class=\"material-icons material-icons-error\">\n            error_outline\n          </i>          \n           <div\n          class=\"form-error text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('company').valid && this.form.get('company').touched\"\n          >\n                <div [hidden]=\"!form.get('company').hasError('required')\">\n                  <div class=\"\">Company name required</div>\n                </div>\n                <div [hidden]=\"!form.get('company').hasError('minlength')\">\n                  <div class=\"\">Company must be at least 2 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('company').hasError('maxlength')\">\n                  <div class=\"\">Company cannot be more than 40 characters long.</div>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 npr\">\n        <div class=\"form-group\" style=\"margin-bottom: 0;\" [ngClass]=\"{'form-group-error':!this.form.get('password').valid && this.form.get('password').touched}\">\n          <span class=\"active-border\"></span>\n          <span class=\"top-label\">Password</span>\n          <input style=\"margin-bottom: 0;\" appInputAnimation [(ngModel)]=\"user.password\" #passwordField formControlName=\"password\" name=\"first_name\" required minlength=\"8\" maxlength=\"24\" class=\"password-input form-control style1\" type=\"password\" name=\"\" placeholder=\"Password\">\n          <i class=\"material-icons material-icons-error\">\n            error_outline\n          </i>          \n           <div\n          class=\"form-error text-danger\"\n          style=\"margin-bottom: 0px; text-align: left;\"\n          *ngIf=\"!this.form.get('password').valid && this.form.get('password').touched\"\n          >\n                <div [hidden]=\"!form.get('password').hasError('required')\">\n                  <div class=\"\">Password name required</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('minlength')\">\n                  <div class=\"\">Password must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('maxlength')\">\n                  <div class=\"\">Password cannot be more than 24 characters long.</div>\n                </div>\n            </div>          \n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group\" style=\"margin-bottom: 0;\" [ngClass]=\"{'form-group-error':!this.form.get('passwordConfirm').valid && this.form.get('passwordConfirm').touched}\">\n          <span class=\"active-border\"></span>\n          <span class=\"top-label\">Password confirm</span>\n          <input appInputAnimation #passwordConfirmField style=\"padding-right: 36px; margin-bottom: 0;\" formControlName=\"passwordConfirm\" name=\"first_name\" required minlength=\"8\" maxlength=\"24\" class=\"form-control style1\" type=\"password\" name=\"\" placeholder=\"Password confirm\">\n          <i (click)=\"changeInputType()\" style=\"float: right;position: absolute;top: 5px;right: 0px; color: #d0d0d0;\" class=\"material-icons remove_red_eye\">remove_red_eye</i>\n          <i class=\"material-icons material-icons-error\">\n            error_outline\n          </i>\n           <div\n          class=\"form-error text-danger\"\n          style=\"margin-bottom: 0px; text-align: left;\"\n          *ngIf=\"!this.form.get('passwordConfirm').valid && this.form.get('passwordConfirm').touched\"\n          >\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('required')\">\n                  <div class=\"\">Password confirm name required</div>\n                </div>\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('minlength')\">\n                  <div class=\"\">Password confirm must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('maxlength')\">\n                  <div class=\"\">Password confirm cannot be more than 24 characters long.</div>\n                </div>\n            </div>    \n\n        </div>\n      </div> \n      <div class=\"col-md-12\">\n        <span style=\"font-size: 12px; margin-top: 20px; display: block !important;\">Use 8 or more characters with a mix of letters, numbers & symbols</span>\n      </div>\n      <div class=\"col-sm-12\" style=\"margin-top: 20px;\">\n        <a style=\"float: left; margin-top: 15px; font-weight: bold;\" href=\"#\">Sign in instead</a>\n\n        <button [disabled]=\"isLoading\" (click)=\"goToNext()\" class=\"btn btn-primary\" style=\"float: right; margin-left: 15px;\">Create account</button>\n        <app-ct-preloader [isHidden]=\"isPreloaderHidden\"></app-ct-preloader>\n         \n      </div> \n      \n    </div>\n\n\n\n  </div>\n  <div class=\"col-md-5 text-center\">\n    <img style=\"max-width: 200px; margin: 0 auto; margin-top: 100px;\" class=\"img-responsive\" src=\"../../assets/Animated-Clicktool-Logo.gif\">\n    <p>Decentralized Marketing Analytics Platform</p>\n  </div>\n\n</div>\n\n      </div>\n    </div>\n  </div>\n\n<!--   <div class=\"reg-image hidden-sm hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n  <div class=\"reg-form\"> -->\n\n    <!-- <form [formGroup]=\"form\">\n      <div class=\"reg-active reg-border\">\n          <h1>Step 2.</h1>\n          <h3>Sign Up</h3>\n          <hr>\n\n\n          <div class=\"reginr\">\n            <span><i class=\"fa fa-user\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('firstname').valid && this.form.get('firstname').touched}\"  formControlName=\"firstname\" name=\"firstname\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.firstname\" type=\"text\" autocomplete=\"off\" placeholder=\"First Name\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('email').valid && this.form.get('email').touched\"\n          >\n                <div [hidden]=\"!form.get('email').hasError('required')\">\n                  <div class=\"\">Firstname required</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('minlength')\">\n                  <div class=\"\">Firstname must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('maxlength')\">\n                  <div class=\"\">Firstname cannot be more than 24 characters long.</div>\n                </div>\n\n            </div>\n\n\n\n          <div class=\"reginr\"> <span><i class=\"fa fa-user\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('lastname').valid && this.form.get('lastname').touched}\"  formControlName=\"lastname\" name=\"lastname\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.lastname\" type=\"text\" autocomplete=\"off\" placeholder=\"Last Name\">\n          </div>\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('lastname').valid && this.form.get('lastname').touched\"\n          >\n                <div [hidden]=\"!form.get('lastname').hasError('required')\">\n                  <div class=\"\">Lastname required</div>\n                </div>\n                <div [hidden]=\"!form.get('lastname').hasError('minlength')\">\n                  <div class=\"\">Lastname must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('lastname').hasError('maxlength')\">\n                  <div class=\"\">Lastname cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n\n          <div class=\"row birthday\">\n            <div class=\"col-md-12 text-left\">\n              <strong>Birthday</strong>\n            </div>\n            <div class=\"col-md-4\">\n              <select formControlName=\"dob_month\" [(ngModel)]=\"dob_month\" aria-label=\"Month a\" name=\"birthday_month\" id=\"month\" title=\"Month\">\n                <option class=\"reginr\" value=\"\">&#9660;&nbsp;&nbsp;&nbsp;Month</option>\n                <option value=\"1\">Jan</option>\n                <option value=\"2\">Feb</option>\n                <option value=\"3\">Mar</option>\n                <option value=\"4\">Apr</option>\n                <option value=\"5\">May</option>\n                <option value=\"6\">Jun</option>\n                <option value=\"7\">Jul</option>\n                <option value=\"8\">Aug</option>\n                <option value=\"9\">Sep</option>\n                <option value=\"10\">Oct</option>\n                <option value=\"11\">Nov</option>\n                <option value=\"12\">Dec</option>\n              </select>\n              <div\n              class=\"text-danger\"\n              style=\"margin-bottom: 20px; text-align: left;\"\n              *ngIf=\"!this.form.get('dob_month').valid && this.form.get('dob_month').touched\"\n              >\n                    <div [hidden]=\"!form.get('dob_month').hasError('required')\">\n                      <div class=\"\">DOB month required</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_month').hasError('minlength')\">\n                      <div class=\"\">DOB month must be at least 4 characters long.</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_month').hasError('maxlength')\">\n                      <div class=\"\">DOB month cannot be more than 24 characters long.</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n              <select formControlName=\"dob_day\" [(ngModel)]=\"dob_day\" aria-label=\"Day\" name=\"birthday_day\" id=\"day\" title=\"Day\">\n                <option value=\"\">&#9660;&nbsp;&nbsp;&nbsp;Day</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6</option>\n                <option value=\"7\">7</option>\n                <option value=\"8\">8</option>\n                <option value=\"9\">9</option>\n                <option value=\"10\">10</option>\n                <option value=\"11\">11</option>\n                <option value=\"12\">12</option>\n                <option value=\"13\">13</option>\n                <option value=\"14\">14</option>\n                <option value=\"15\">15</option>\n                <option value=\"16\">16</option>\n                <option value=\"17\">17</option>\n                <option value=\"18\">18</option>\n                <option value=\"19\">19</option>\n                <option value=\"20\">20</option>\n                <option value=\"21\">21</option>\n                <option value=\"22\">22</option>\n                <option value=\"23\">23</option>\n                <option value=\"24\">24</option>\n                <option value=\"25\">25</option>\n                <option value=\"26\">26</option>\n                <option value=\"27\">27</option>\n                <option value=\"28\">28</option>\n                <option value=\"29\">29</option>\n                <option value=\"30\">30</option>\n                <option value=\"31\">31</option>\n              </select>\n              <div\n              class=\"text-danger\"\n              style=\"margin-bottom: 20px; text-align: left;\"\n              *ngIf=\"!this.form.get('dob_day').valid && this.form.get('dob_day').touched\"\n              >\n                    <div [hidden]=\"!form.get('dob_day').hasError('required')\">\n                      <div class=\"\">DOB day required</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_day').hasError('minlength')\">\n                      <div class=\"\">DOB day must be at least 4 characters long.</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_day').hasError('maxlength')\">\n                      <div class=\"\">DOB day cannot be more than 24 characters long.</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <select formControlName=\"dob_year\" [(ngModel)]=\"dob_year\" aria-label=\"Year\" name=\"birthday_year\" id=\"year\" title=\"Year\">\n                  <option value=\"\">&#9660;&nbsp;&nbsp;&nbsp;Year</option><option value=\"2018\">2018</option><option value=\"2017\">2017</option><option value=\"2016\">2016</option><option value=\"2015\">2015</option><option value=\"2014\">2014</option><option value=\"2013\">2013</option><option value=\"2012\">2012</option><option value=\"2011\">2011</option><option value=\"2010\">2010</option><option value=\"2009\">2009</option><option value=\"2008\">2008</option><option value=\"2007\">2007</option><option value=\"2006\">2006</option><option value=\"2005\">2005</option><option value=\"2004\">2004</option><option value=\"2003\">2003</option><option value=\"2002\">2002</option><option value=\"2001\">2001</option><option value=\"2000\">2000</option><option value=\"1999\">1999</option><option value=\"1998\">1998</option><option value=\"1997\">1997</option><option value=\"1996\">1996</option><option value=\"1995\">1995</option><option value=\"1994\">1994</option><option value=\"1993\" selected=\"1\">1993</option><option value=\"1992\">1992</option><option value=\"1991\">1991</option><option value=\"1990\">1990</option><option value=\"1989\">1989</option><option value=\"1988\">1988</option><option value=\"1987\">1987</option><option value=\"1986\">1986</option><option value=\"1985\">1985</option><option value=\"1984\">1984</option><option value=\"1983\">1983</option><option value=\"1982\">1982</option><option value=\"1981\">1981</option><option value=\"1980\">1980</option><option value=\"1979\">1979</option><option value=\"1978\">1978</option><option value=\"1977\">1977</option><option value=\"1976\">1976</option><option value=\"1975\">1975</option><option value=\"1974\">1974</option><option value=\"1973\">1973</option><option value=\"1972\">1972</option><option value=\"1971\">1971</option><option value=\"1970\">1970</option><option value=\"1969\">1969</option><option value=\"1968\">1968</option><option value=\"1967\">1967</option><option value=\"1966\">1966</option><option value=\"1965\">1965</option><option value=\"1964\">1964</option><option value=\"1963\">1963</option><option value=\"1962\">1962</option><option value=\"1961\">1961</option><option value=\"1960\">1960</option><option value=\"1959\">1959</option><option value=\"1958\">1958</option><option value=\"1957\">1957</option><option value=\"1956\">1956</option><option value=\"1955\">1955</option><option value=\"1954\">1954</option><option value=\"1953\">1953</option><option value=\"1952\">1952</option><option value=\"1951\">1951</option><option value=\"1950\">1950</option><option value=\"1949\">1949</option><option value=\"1948\">1948</option><option value=\"1947\">1947</option><option value=\"1946\">1946</option><option value=\"1945\">1945</option><option value=\"1944\">1944</option><option value=\"1943\">1943</option><option value=\"1942\">1942</option><option value=\"1941\">1941</option><option value=\"1940\">1940</option><option value=\"1939\">1939</option><option value=\"1938\">1938</option><option value=\"1937\">1937</option><option value=\"1936\">1936</option><option value=\"1935\">1935</option><option value=\"1934\">1934</option><option value=\"1933\">1933</option><option value=\"1932\">1932</option><option value=\"1931\">1931</option><option value=\"1930\">1930</option><option value=\"1929\">1929</option><option value=\"1928\">1928</option><option value=\"1927\">1927</option><option value=\"1926\">1926</option><option value=\"1925\">1925</option><option value=\"1924\">1924</option><option value=\"1923\">1923</option><option value=\"1922\">1922</option><option value=\"1921\">1921</option><option value=\"1920\">1920</option><option value=\"1919\">1919</option><option value=\"1918\">1918</option><option value=\"1917\">1917</option><option value=\"1916\">1916</option><option value=\"1915\">1915</option><option value=\"1914\">1914</option><option value=\"1913\">1913</option><option value=\"1912\">1912</option><option value=\"1911\">1911</option><option value=\"1910\">1910</option><option value=\"1909\">1909</option><option value=\"1908\">1908</option><option value=\"1907\">1907</option><option value=\"1906\">1906</option><option value=\"1905\">1905</option>\n                </select>\n              <div\n              class=\"text-danger\"\n              style=\"margin-bottom: 20px; text-align: left;\"\n              *ngIf=\"!this.form.get('dob_year').valid && this.form.get('dob_year').touched\"\n              >\n                    <div [hidden]=\"!form.get('dob_year').hasError('required')\">\n                      <div class=\"\">DOB year required</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_year').hasError('minlength')\">\n                      <div class=\"\">DOB year must be at least 4 characters long.</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_year').hasError('maxlength')\">\n                      <div class=\"\">DOB year cannot be more than 24 characters long.</div>\n                    </div>\n                </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-envelope\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('email').valid && this.form.get('email').touched}\"  formControlName=\"email\" name=\"email\" required minlength=\"4\" maxlength=\"70\" [(ngModel)]=\"user.email\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Email\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('email').valid && this.form.get('email').touched\"\n          >\n                <div [hidden]=\"!form.get('email').hasError('required')\">\n                  <div class=\"\">Email required</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('minlength')\">\n                  <div class=\"\">Email must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('maxlength')\">\n                  <div class=\"\">Email cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-phone\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('phone').valid && this.form.get('phone').touched}\"  formControlName=\"phone\" name=\"phone\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.phone\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Phone Number\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('phone').valid && this.form.get('phone').touched\"\n          >\n                <div [hidden]=\"!form.get('phone').hasError('required')\">\n                  <div class=\"\">Phone required</div>\n                </div>\n                <div [hidden]=\"!form.get('phone').hasError('minlength')\">\n                  <div class=\"\">Phone must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('phone').hasError('maxlength')\">\n                  <div class=\"\">Phone cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-map-marker-alt\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('country').valid && this.form.get('country').touched}\"  formControlName=\"country\" name=\"country\" required minlength=\"3\" maxlength=\"24\" [(ngModel)]=\"user.country\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Country of Residence\">\n          </div>\n\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('country').valid && this.form.get('country').touched\"\n          >\n                <div [hidden]=\"!form.get('country').hasError('required')\">\n                  <div class=\"\">Country required</div>\n                </div>\n                <div [hidden]=\"!form.get('country').hasError('minlength')\">\n                  <div class=\"\">Country must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('country').hasError('maxlength')\">\n                  <div class=\"\">Country cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-suitcase\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('publicWalletAddress').valid && this.form.get('publicWalletAddress').touched}\"  formControlName=\"publicWalletAddress\" name=\"publicWalletAddress\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.publicWalletAddress\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Public Wallet Address\">\n          </div>\n\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('publicWalletAddress').valid && this.form.get('publicWalletAddress').touched\"\n          >\n                <div [hidden]=\"!form.get('publicWalletAddress').hasError('required')\">\n                  <div class=\"\">Public wallet address required</div>\n                </div>\n                <div [hidden]=\"!form.get('publicWalletAddress').hasError('minlength')\">\n                  <div class=\"\">Public wallet address must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('publicWalletAddress').hasError('maxlength')\">\n                  <div class=\"\">Public wallet address cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-building\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('company').valid && this.form.get('company').touched}\"  formControlName=\"company\" name=\"company\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.company\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Company\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('company').valid && this.form.get('company').touched\"\n          >\n                <div [hidden]=\"!form.get('company').hasError('required')\">\n                  <div class=\"\">Company required</div>\n                </div>\n                <div [hidden]=\"!form.get('company').hasError('minlength')\">\n                  <div class=\"\">Company must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('company').hasError('maxlength')\">\n                  <div class=\"\">Company cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <div class=\"reginr\"> <span><i class=\"fa fa-unlock-alt\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('password').valid && this.form.get('password').touched}\"  formControlName=\"password\" name=\"password\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.password\" type=\"password\" required=\"\" autocomplete=\"off\" placeholder=\"Password\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('password').valid && this.form.get('password').touched\"\n          >\n                <div [hidden]=\"!form.get('password').hasError('required')\">\n                  <div class=\"\">Password required</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('minlength')\">\n                  <div class=\"\">Password must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('maxlength')\">\n                  <div class=\"\">Password cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <div class=\"reginr\"> <span><i class=\"fa fa-lock\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('passwordConfirm').valid && this.form.get('passwordConfirm').touched}\"  formControlName=\"passwordConfirm\" name=\"passwordConfirm\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.passwordConfirm\"  type=\"password\" required=\"\" autocomplete=\"off\" placeholder=\"Confirm Password\">\n          </div>\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('passwordConfirm').valid && this.form.get('passwordConfirm').touched\"\n          >\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('required')\">\n                  <div class=\"\">Password cofirm required</div>\n                </div>\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('minlength')\">\n                  <div class=\"\">Password confirm must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('maxlength')\">\n                  <div class=\"\">Password confirm cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <button\n          (click)=\"goToNext()\"\n\n          style=\"margin-top: 6rem; margin-bottom: 50px !important;\" class=\"btn btn-info reg-button\" id=\"continue\">\n            <p><i class=\"fa fa-arrow-circle-right\"></i>&nbsp;&nbsp;&nbsp;Continue</p>\n          </button>\n          <div style=\"margin-bottom: 50px !important;\" routerLink=\"/signup\" class=\"btn btn-info reg-button back\" id=\"back\">\n            <p><i class=\"fa fa-chevron-circle-left\"></i>&nbsp;&nbsp;&nbsp;Back</p>\n          </div>\n          <div style=\"margin-bottom: 50px !important;\" class=\"btn btn-info reg-button sign-in\" id=\"sign-in2\">\n            <p><i class=\"fas fa-sign-in-alt\"></i>&nbsp;&nbsp;&nbsp;Sign In</p>\n          </div>\n        </div>\n    </form> -->\n\n<!--   </div>\n  <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div> -->\n\n\n</div>\n<!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ "../../../../../src/app/signup/account-info/account-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_util_util__ = __webpack_require__("../../../../../src/app/shared/util/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountInfoComponent = /** @class */ (function () {
    function AccountInfoComponent(util, router, formBuilder, memberService) {
        this.util = util;
        this.router = router;
        this.formBuilder = formBuilder;
        this.memberService = memberService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_models_user__["a" /* User */]();
        this.nextStepUrl = "/signup/contribution";
        this.showPassword = false;
        this.doPasswordsMatch = true;
        this.isPreloaderHidden = true;
        this.isLoading = false;
    }
    AccountInfoComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            firstname: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required],
            lastname: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required],
            dob: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required],
            email: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].email],
            phone: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required],
            country: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required],
            // publicWalletAddress:[null, Validators.required],
            company: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required],
            password: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required],
            passwordConfirm: [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* Validators */].required]
        });
        //this.user = this.util.getLocalObject("user") as User
    };
    AccountInfoComponent.prototype.ngAfterViewInit = function () {
    };
    AccountInfoComponent.prototype.ngOnDestroy = function () {
        if (this.router.url == this.nextStepUrl || this.router.url == '/signup') { }
        else {
            this.util.deleteLocalObject("user");
        }
    };
    AccountInfoComponent.prototype.goToNext = function () {
        var _this = this;
        this.form.updateValueAndValidity();
        if (this.form.valid) {
            this.isPreloaderHidden = false;
            this.isLoading = true;
            this.memberService.createAccount(this.user, function (err) {
                _this.isPreloaderHidden = true;
                _this.isLoading = false;
            }).subscribe(function (res) { return _this.afterCreateAccount(res); });
        }
        else {
            Object.keys(this.form.controls).filter(function ($0) {
                _this.form.get($0).markAsTouched({ onlySelf: true });
            });
        }
    };
    AccountInfoComponent.prototype.onError = function (res) {
        console.log(res);
    };
    AccountInfoComponent.prototype.afterCreateAccount = function (res) {
        var _this = this;
        this.memberService.afterCreateAccount(this.user.email, this.user.password)
            .subscribe(function (session) { return _this.afterLogin(session); });
    };
    AccountInfoComponent.prototype.afterLogin = function (session) {
        this.memberService.saveAccessToken(session);
        this.memberService.setLocalMemberObj(session);
        if (!session["user"]["isShuftiproVerified"]) {
            this.router.navigate(['/verify']);
        }
        else {
            this.memberService.afterLoginRoute();
        }
    };
    AccountInfoComponent.prototype.changeInputType = function () {
        if (this.showPassword) {
            this.passwordField.nativeElement.setAttribute('type', 'password');
            this.passwordConfirmField.nativeElement.setAttribute('type', 'password');
            // Hide Password
            this.showPassword = false;
        }
        else {
            this.passwordField.nativeElement.setAttribute('type', 'text');
            this.passwordConfirmField.nativeElement.setAttribute('type', 'text');
            // Show Password
            this.showPassword = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passwordField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AccountInfoComponent.prototype, "passwordField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('passwordConfirmField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AccountInfoComponent.prototype, "passwordConfirmField", void 0);
    AccountInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-info',
            template: __webpack_require__("../../../../../src/app/signup/account-info/account-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/account-info/account-info.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__shared_services_member_service__["a" /* MemberService */]])
    ], AccountInfoComponent);
    return AccountInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/agreements/agreements.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/agreements/agreements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid gradient-background-blue\" style=\"background-color: #1da1e4;\">\n<!-- <img style=\"position: absolute;\" src=\"../../assets/gray-gear1.png\"> -->\n  <div class=\"container\" style=\"max-width: 800px;\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" style=\"background-color: #FFF; box-shadow: rgba(125, 179, 202, 0.4) 0px 0px 50px; margin-top: 40px; margin-bottom: 300px; padding: 50px;\">\n\n<div class=\"row\">\n\n  <div class=\"col-md-7\">\n    <div class=\"row\">\n      \n      <div class=\"col-md-12\" style=\"margin-bottom: 20px;\">\n        <img style=\"margin-bottom: 20px;\" width=\"100\" src=\"../../assets/font-logo.png\">\n        <h3 style=\"margin-bottom: 20px;\">Create your clicktool account</h3>\n        <p style=\"font-size: 16px;\">Please check the boxes below to continue. If you're in the US you have to be a accreddited investor to continue</p>\n      </div>\n\n\n\n      <div class=\"col-sm-12 npr\">\n                <div class=\"chckbx\">\n                  <span>\n                    <p>\n                      <label class=\"checkcontainer\">\n                        <input [(ngModel)]=\"user.isCitizen\" type=\"checkbox\" autocomplete=\"off\">\n                        I am not a citizen or resident of a country where the sale of crpytocurrency is illegal.\n                        <span class=\"checkmark\"></span>\n                      </label>\n                  </p>\n                </span>\n                </div>\n                <div class=\"chckbx\">\n                  <span>\n                    <p>\n                      <label class=\"checkcontainer\">\n                        <input [(ngModel)]=\"user.didAgreeToTerms\" type=\"checkbox\" autocomplete=\"off\">\n                        I agree to Clicktool's terms and conditions.\n                        <span class=\"checkmark\"></span>\n                      </label>\n\n                    </p>\n                </span>\n                </div>\n                <div class=\"chckbx\">\n                  <span>\n                    <p>\n                      <label class=\"checkcontainer\">\n                        <input [(ngModel)]=\"user.didAgreeToPrivacyPolicy\" type=\"checkbox\" autocomplete=\"off\">\n                        I consent to Clicktool's privacy policy.\n                        <span class=\"checkmark\"></span>\n                      </label>\n\n                    </p>\n                </span>\n                </div>\n                <div class=\"chckbx\" style=\"margin-bottom: 0px;\">\n                  <span>\n                    <p>\n                      <label class=\"checkcontainer\">\n                        <input [(ngModel)]=\"user.didReadWhitePaper\" type=\"checkbox\" autocomplete=\"off\">\n                        I have read and understand the whitepaper.\n                        <span class=\"checkmark\"></span>\n                      </label>\n                  </p>\n                </span>\n                </div>\n      </div>\n\n\n      \n    </div>\n\n\n\n  </div>\n\n  <div class=\"col-md-5 text-center\">\n    <img style=\"max-width: 200px; margin: 0 auto; margin-top: 100px;\" class=\"img-responsive\" src=\"../../assets/Animated-Clicktool-Logo.gif\">\n    <p>Decentralized Marketing Analytics Platform</p>\n  </div>\n\n  <div class=\"col-sm-12\" style=\"margin-top: 100px; text-align: center;\">\n\n    <button (click)=\"goToNext()\" [disabled]=\"!user.didAgreeToTerms || !user.didAgreeToPrivacyPolicy || !user.didReadWhitePaper || !user.isCitizen\" class=\"btn btn-primary btn-lg\" >Register</button>\n    <app-ct-preloader [isHidden]=\"true\"></app-ct-preloader>\n     \n  </div> \n\n</div>\n\n      </div>\n    </div>\n  </div>\n\n<!--   <div class=\"reg-image hidden-sm hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n  <div class=\"reg-form\"> -->\n\n    <!-- <form [formGroup]=\"form\">\n      <div class=\"reg-active reg-border\">\n          <h1>Step 2.</h1>\n          <h3>Sign Up</h3>\n          <hr>\n\n\n          <div class=\"reginr\">\n            <span><i class=\"fa fa-user\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('firstname').valid && this.form.get('firstname').touched}\"  formControlName=\"firstname\" name=\"firstname\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.firstname\" type=\"text\" autocomplete=\"off\" placeholder=\"First Name\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('email').valid && this.form.get('email').touched\"\n          >\n                <div [hidden]=\"!form.get('email').hasError('required')\">\n                  <div class=\"\">Firstname required</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('minlength')\">\n                  <div class=\"\">Firstname must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('maxlength')\">\n                  <div class=\"\">Firstname cannot be more than 24 characters long.</div>\n                </div>\n\n            </div>\n\n\n\n          <div class=\"reginr\"> <span><i class=\"fa fa-user\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('lastname').valid && this.form.get('lastname').touched}\"  formControlName=\"lastname\" name=\"lastname\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.lastname\" type=\"text\" autocomplete=\"off\" placeholder=\"Last Name\">\n          </div>\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('lastname').valid && this.form.get('lastname').touched\"\n          >\n                <div [hidden]=\"!form.get('lastname').hasError('required')\">\n                  <div class=\"\">Lastname required</div>\n                </div>\n                <div [hidden]=\"!form.get('lastname').hasError('minlength')\">\n                  <div class=\"\">Lastname must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('lastname').hasError('maxlength')\">\n                  <div class=\"\">Lastname cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n\n          <div class=\"row birthday\">\n            <div class=\"col-md-12 text-left\">\n              <strong>Birthday</strong>\n            </div>\n            <div class=\"col-md-4\">\n              <select formControlName=\"dob_month\" [(ngModel)]=\"dob_month\" aria-label=\"Month a\" name=\"birthday_month\" id=\"month\" title=\"Month\">\n                <option class=\"reginr\" value=\"\">&#9660;&nbsp;&nbsp;&nbsp;Month</option>\n                <option value=\"1\">Jan</option>\n                <option value=\"2\">Feb</option>\n                <option value=\"3\">Mar</option>\n                <option value=\"4\">Apr</option>\n                <option value=\"5\">May</option>\n                <option value=\"6\">Jun</option>\n                <option value=\"7\">Jul</option>\n                <option value=\"8\">Aug</option>\n                <option value=\"9\">Sep</option>\n                <option value=\"10\">Oct</option>\n                <option value=\"11\">Nov</option>\n                <option value=\"12\">Dec</option>\n              </select>\n              <div\n              class=\"text-danger\"\n              style=\"margin-bottom: 20px; text-align: left;\"\n              *ngIf=\"!this.form.get('dob_month').valid && this.form.get('dob_month').touched\"\n              >\n                    <div [hidden]=\"!form.get('dob_month').hasError('required')\">\n                      <div class=\"\">DOB month required</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_month').hasError('minlength')\">\n                      <div class=\"\">DOB month must be at least 4 characters long.</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_month').hasError('maxlength')\">\n                      <div class=\"\">DOB month cannot be more than 24 characters long.</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n              <select formControlName=\"dob_day\" [(ngModel)]=\"dob_day\" aria-label=\"Day\" name=\"birthday_day\" id=\"day\" title=\"Day\">\n                <option value=\"\">&#9660;&nbsp;&nbsp;&nbsp;Day</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6</option>\n                <option value=\"7\">7</option>\n                <option value=\"8\">8</option>\n                <option value=\"9\">9</option>\n                <option value=\"10\">10</option>\n                <option value=\"11\">11</option>\n                <option value=\"12\">12</option>\n                <option value=\"13\">13</option>\n                <option value=\"14\">14</option>\n                <option value=\"15\">15</option>\n                <option value=\"16\">16</option>\n                <option value=\"17\">17</option>\n                <option value=\"18\">18</option>\n                <option value=\"19\">19</option>\n                <option value=\"20\">20</option>\n                <option value=\"21\">21</option>\n                <option value=\"22\">22</option>\n                <option value=\"23\">23</option>\n                <option value=\"24\">24</option>\n                <option value=\"25\">25</option>\n                <option value=\"26\">26</option>\n                <option value=\"27\">27</option>\n                <option value=\"28\">28</option>\n                <option value=\"29\">29</option>\n                <option value=\"30\">30</option>\n                <option value=\"31\">31</option>\n              </select>\n              <div\n              class=\"text-danger\"\n              style=\"margin-bottom: 20px; text-align: left;\"\n              *ngIf=\"!this.form.get('dob_day').valid && this.form.get('dob_day').touched\"\n              >\n                    <div [hidden]=\"!form.get('dob_day').hasError('required')\">\n                      <div class=\"\">DOB day required</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_day').hasError('minlength')\">\n                      <div class=\"\">DOB day must be at least 4 characters long.</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_day').hasError('maxlength')\">\n                      <div class=\"\">DOB day cannot be more than 24 characters long.</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <select formControlName=\"dob_year\" [(ngModel)]=\"dob_year\" aria-label=\"Year\" name=\"birthday_year\" id=\"year\" title=\"Year\">\n                  <option value=\"\">&#9660;&nbsp;&nbsp;&nbsp;Year</option><option value=\"2018\">2018</option><option value=\"2017\">2017</option><option value=\"2016\">2016</option><option value=\"2015\">2015</option><option value=\"2014\">2014</option><option value=\"2013\">2013</option><option value=\"2012\">2012</option><option value=\"2011\">2011</option><option value=\"2010\">2010</option><option value=\"2009\">2009</option><option value=\"2008\">2008</option><option value=\"2007\">2007</option><option value=\"2006\">2006</option><option value=\"2005\">2005</option><option value=\"2004\">2004</option><option value=\"2003\">2003</option><option value=\"2002\">2002</option><option value=\"2001\">2001</option><option value=\"2000\">2000</option><option value=\"1999\">1999</option><option value=\"1998\">1998</option><option value=\"1997\">1997</option><option value=\"1996\">1996</option><option value=\"1995\">1995</option><option value=\"1994\">1994</option><option value=\"1993\" selected=\"1\">1993</option><option value=\"1992\">1992</option><option value=\"1991\">1991</option><option value=\"1990\">1990</option><option value=\"1989\">1989</option><option value=\"1988\">1988</option><option value=\"1987\">1987</option><option value=\"1986\">1986</option><option value=\"1985\">1985</option><option value=\"1984\">1984</option><option value=\"1983\">1983</option><option value=\"1982\">1982</option><option value=\"1981\">1981</option><option value=\"1980\">1980</option><option value=\"1979\">1979</option><option value=\"1978\">1978</option><option value=\"1977\">1977</option><option value=\"1976\">1976</option><option value=\"1975\">1975</option><option value=\"1974\">1974</option><option value=\"1973\">1973</option><option value=\"1972\">1972</option><option value=\"1971\">1971</option><option value=\"1970\">1970</option><option value=\"1969\">1969</option><option value=\"1968\">1968</option><option value=\"1967\">1967</option><option value=\"1966\">1966</option><option value=\"1965\">1965</option><option value=\"1964\">1964</option><option value=\"1963\">1963</option><option value=\"1962\">1962</option><option value=\"1961\">1961</option><option value=\"1960\">1960</option><option value=\"1959\">1959</option><option value=\"1958\">1958</option><option value=\"1957\">1957</option><option value=\"1956\">1956</option><option value=\"1955\">1955</option><option value=\"1954\">1954</option><option value=\"1953\">1953</option><option value=\"1952\">1952</option><option value=\"1951\">1951</option><option value=\"1950\">1950</option><option value=\"1949\">1949</option><option value=\"1948\">1948</option><option value=\"1947\">1947</option><option value=\"1946\">1946</option><option value=\"1945\">1945</option><option value=\"1944\">1944</option><option value=\"1943\">1943</option><option value=\"1942\">1942</option><option value=\"1941\">1941</option><option value=\"1940\">1940</option><option value=\"1939\">1939</option><option value=\"1938\">1938</option><option value=\"1937\">1937</option><option value=\"1936\">1936</option><option value=\"1935\">1935</option><option value=\"1934\">1934</option><option value=\"1933\">1933</option><option value=\"1932\">1932</option><option value=\"1931\">1931</option><option value=\"1930\">1930</option><option value=\"1929\">1929</option><option value=\"1928\">1928</option><option value=\"1927\">1927</option><option value=\"1926\">1926</option><option value=\"1925\">1925</option><option value=\"1924\">1924</option><option value=\"1923\">1923</option><option value=\"1922\">1922</option><option value=\"1921\">1921</option><option value=\"1920\">1920</option><option value=\"1919\">1919</option><option value=\"1918\">1918</option><option value=\"1917\">1917</option><option value=\"1916\">1916</option><option value=\"1915\">1915</option><option value=\"1914\">1914</option><option value=\"1913\">1913</option><option value=\"1912\">1912</option><option value=\"1911\">1911</option><option value=\"1910\">1910</option><option value=\"1909\">1909</option><option value=\"1908\">1908</option><option value=\"1907\">1907</option><option value=\"1906\">1906</option><option value=\"1905\">1905</option>\n                </select>\n              <div\n              class=\"text-danger\"\n              style=\"margin-bottom: 20px; text-align: left;\"\n              *ngIf=\"!this.form.get('dob_year').valid && this.form.get('dob_year').touched\"\n              >\n                    <div [hidden]=\"!form.get('dob_year').hasError('required')\">\n                      <div class=\"\">DOB year required</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_year').hasError('minlength')\">\n                      <div class=\"\">DOB year must be at least 4 characters long.</div>\n                    </div>\n                    <div [hidden]=\"!form.get('dob_year').hasError('maxlength')\">\n                      <div class=\"\">DOB year cannot be more than 24 characters long.</div>\n                    </div>\n                </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-envelope\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('email').valid && this.form.get('email').touched}\"  formControlName=\"email\" name=\"email\" required minlength=\"4\" maxlength=\"70\" [(ngModel)]=\"user.email\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Email\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('email').valid && this.form.get('email').touched\"\n          >\n                <div [hidden]=\"!form.get('email').hasError('required')\">\n                  <div class=\"\">Email required</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('minlength')\">\n                  <div class=\"\">Email must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('email').hasError('maxlength')\">\n                  <div class=\"\">Email cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-phone\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('phone').valid && this.form.get('phone').touched}\"  formControlName=\"phone\" name=\"phone\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.phone\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Phone Number\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('phone').valid && this.form.get('phone').touched\"\n          >\n                <div [hidden]=\"!form.get('phone').hasError('required')\">\n                  <div class=\"\">Phone required</div>\n                </div>\n                <div [hidden]=\"!form.get('phone').hasError('minlength')\">\n                  <div class=\"\">Phone must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('phone').hasError('maxlength')\">\n                  <div class=\"\">Phone cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-map-marker-alt\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('country').valid && this.form.get('country').touched}\"  formControlName=\"country\" name=\"country\" required minlength=\"3\" maxlength=\"24\" [(ngModel)]=\"user.country\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Country of Residence\">\n          </div>\n\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('country').valid && this.form.get('country').touched\"\n          >\n                <div [hidden]=\"!form.get('country').hasError('required')\">\n                  <div class=\"\">Country required</div>\n                </div>\n                <div [hidden]=\"!form.get('country').hasError('minlength')\">\n                  <div class=\"\">Country must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('country').hasError('maxlength')\">\n                  <div class=\"\">Country cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-suitcase\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('publicWalletAddress').valid && this.form.get('publicWalletAddress').touched}\"  formControlName=\"publicWalletAddress\" name=\"publicWalletAddress\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.publicWalletAddress\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Public Wallet Address\">\n          </div>\n\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('publicWalletAddress').valid && this.form.get('publicWalletAddress').touched\"\n          >\n                <div [hidden]=\"!form.get('publicWalletAddress').hasError('required')\">\n                  <div class=\"\">Public wallet address required</div>\n                </div>\n                <div [hidden]=\"!form.get('publicWalletAddress').hasError('minlength')\">\n                  <div class=\"\">Public wallet address must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('publicWalletAddress').hasError('maxlength')\">\n                  <div class=\"\">Public wallet address cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n\n          <div class=\"reginr\"> <span><i class=\"fas fa-building\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('company').valid && this.form.get('company').touched}\"  formControlName=\"company\" name=\"company\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.company\" type=\"text\" required=\"\" autocomplete=\"off\" placeholder=\"Company\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('company').valid && this.form.get('company').touched\"\n          >\n                <div [hidden]=\"!form.get('company').hasError('required')\">\n                  <div class=\"\">Company required</div>\n                </div>\n                <div [hidden]=\"!form.get('company').hasError('minlength')\">\n                  <div class=\"\">Company must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('company').hasError('maxlength')\">\n                  <div class=\"\">Company cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <div class=\"reginr\"> <span><i class=\"fa fa-unlock-alt\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('password').valid && this.form.get('password').touched}\"  formControlName=\"password\" name=\"password\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.password\" type=\"password\" required=\"\" autocomplete=\"off\" placeholder=\"Password\">\n          </div>\n\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('password').valid && this.form.get('password').touched\"\n          >\n                <div [hidden]=\"!form.get('password').hasError('required')\">\n                  <div class=\"\">Password required</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('minlength')\">\n                  <div class=\"\">Password must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('maxlength')\">\n                  <div class=\"\">Password cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <div class=\"reginr\"> <span><i class=\"fa fa-lock\"></i></span>\n            <input [ngClass]=\"{'has-danger':!this.form.get('passwordConfirm').valid && this.form.get('passwordConfirm').touched}\"  formControlName=\"passwordConfirm\" name=\"passwordConfirm\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"user.passwordConfirm\"  type=\"password\" required=\"\" autocomplete=\"off\" placeholder=\"Confirm Password\">\n          </div>\n\n          <div\n          class=\"text-danger\"\n          style=\"margin-bottom: 20px; text-align: left;\"\n          *ngIf=\"!this.form.get('passwordConfirm').valid && this.form.get('passwordConfirm').touched\"\n          >\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('required')\">\n                  <div class=\"\">Password cofirm required</div>\n                </div>\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('minlength')\">\n                  <div class=\"\">Password confirm must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('maxlength')\">\n                  <div class=\"\">Password confirm cannot be more than 24 characters long.</div>\n                </div>\n            </div>\n\n          <button\n          (click)=\"goToNext()\"\n\n          style=\"margin-top: 6rem; margin-bottom: 50px !important;\" class=\"btn btn-info reg-button\" id=\"continue\">\n            <p><i class=\"fa fa-arrow-circle-right\"></i>&nbsp;&nbsp;&nbsp;Continue</p>\n          </button>\n          <div style=\"margin-bottom: 50px !important;\" routerLink=\"/signup\" class=\"btn btn-info reg-button back\" id=\"back\">\n            <p><i class=\"fa fa-chevron-circle-left\"></i>&nbsp;&nbsp;&nbsp;Back</p>\n          </div>\n          <div style=\"margin-bottom: 50px !important;\" class=\"btn btn-info reg-button sign-in\" id=\"sign-in2\">\n            <p><i class=\"fas fa-sign-in-alt\"></i>&nbsp;&nbsp;&nbsp;Sign In</p>\n          </div>\n        </div>\n    </form> -->\n\n<!--   </div>\n  <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div> -->\n\n\n</div>\n<!-- <app-footer></app-footer> -->\n  "

/***/ }),

/***/ "../../../../../src/app/signup/agreements/agreements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgreementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_util_util__ = __webpack_require__("../../../../../src/app/shared/util/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgreementsComponent = /** @class */ (function () {
    function AgreementsComponent(util, router) {
        this.util = util;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_models_user__["a" /* User */]();
        this.nextStepUrl = "/signup/account";
    }
    AgreementsComponent.prototype.ngOnInit = function () {
        this.user = this.util.getLocalObject("user");
    };
    AgreementsComponent.prototype.ngOnDestroy = function () {
        if (this.router.url != this.nextStepUrl) {
            this.util.deleteLocalObject("user");
        }
    };
    AgreementsComponent.prototype.ngDoCheck = function () { };
    AgreementsComponent.prototype.goToNext = function () {
        this.util.setLocalObject("user", this.user);
        this.router.navigate([this.nextStepUrl]);
    };
    AgreementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agreements',
            template: __webpack_require__("../../../../../src/app/signup/agreements/agreements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/agreements/agreements.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AgreementsComponent);
    return AgreementsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/contribution/contribution.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/contribution/contribution.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid reg-container first-form\" style=\"height: 550px;\">\n\n  <div class=\"reg-image hidden-sm hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n  <div class=\"reg-form\">\n\n     <div class=\"reg-active reg-border\">\n      <h1>How much would you like to contribute?</h1>\n      <h3>Choose an option.</h3>\n      <hr>\n      <button style=\"margin-bottom: 50px !important;\" (click)=\"moreThenTwelve()\" class=\"btn btn-info reg-button\" id=\"12ethereum\">\n        <p><i class=\"fab fa-ethereum\"></i>&nbsp;&nbsp;&nbsp;More Than 12 Ethereum</p>\n      </button>\n      <button style=\"margin-bottom: 50px !important;\" (click)=\"lessThenTwelve()\" class=\"btn btn-info reg-button back\">\n        <p><i class=\"fab fa-ethereum\"></i>&nbsp;&nbsp;&nbsp;Less Than 12 Ethereum</p>\n      </button>\n      <button style=\"margin-bottom: 50px !important;\" (click)=\"usdCurrency()\" class=\"btn btn-info reg-button sign-in\">\n        <p><i class=\"fas fa-dollar-sign\"></i>&nbsp;&nbsp;&nbsp;USD/EUR/GBP</p>\n      </button>\n      <div routerLink=\"/signup/account\" class=\"btn btn-info reg-button back3\" id=\"back3\">\n        <p><i class=\"fa fa-chevron-circle-left\"></i>&nbsp;&nbsp;&nbsp;Back</p>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/signup/contribution/contribution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_util_util__ = __webpack_require__("../../../../../src/app/shared/util/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContributionComponent = /** @class */ (function () {
    function ContributionComponent(util, router, memberService) {
        this.util = util;
        this.router = router;
        this.memberService = memberService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_models_user__["a" /* User */]();
        this.nextStepUrl = "/signup/identification";
        this.previousUrl = "/signup/account";
    }
    ContributionComponent.prototype.ngOnInit = function () {
        this.user = this.util.getLocalObject("user");
    };
    ContributionComponent.prototype.ngOnDestroy = function () {
        if (this.router.url == this.nextStepUrl || this.router.url == this.previousUrl) { }
        else {
            this.util.deleteLocalObject("user");
        }
    };
    ContributionComponent.prototype.moreThenTwelve = function () {
        var _this = this;
        this.user.isContributionMoreThenTwelve = true;
        this.user.isContributionUsd = false;
        this.util.setLocalObject("user", this.user);
        this.memberService.createAccount(this.user).subscribe(function (res) { return _this.afterCreateAccount(res); });
        // Identification
        //this.router.navigate(['/signup/identification'])
    };
    ContributionComponent.prototype.lessThenTwelve = function () {
        var _this = this;
        this.user.isContributionMoreThenTwelve = false;
        this.user.isContributionUsd = false;
        this.util.setLocalObject("user", this.user);
        //this.router.navigate(['/signup/identification'])
        // Go straight to dashboard and create account
        this.memberService.createAccount(this.user).subscribe(function (res) { return _this.afterCreateAccount(res); });
    };
    ContributionComponent.prototype.usdCurrency = function () {
        var _this = this;
        this.user.isContributionUsd = true;
        this.user.isContributionMoreThenTwelve = false;
        this.util.setLocalObject("user", this.user);
        this.memberService.createAccount(this.user).subscribe(function (res) { return _this.afterCreateAccount(res); });
    };
    ContributionComponent.prototype.afterCreateAccount = function (res) {
        var _this = this;
        this.memberService.afterCreateAccount(this.user.email, this.user.password)
            .subscribe(function (session) { return _this.afterLogin(session); });
    };
    ContributionComponent.prototype.afterLogin = function (session) {
        this.memberService.saveAccessToken(session);
        this.memberService.setLocalMemberObj(session);
        console.log(session["user"]["isShuftiproVerified"]);
        if (!session["user"]["isShuftiproVerified"]) {
            this.router.navigate(['/verify']);
        }
        else {
            this.memberService.afterLoginRoute();
        }
    };
    ContributionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contribution',
            template: __webpack_require__("../../../../../src/app/signup/contribution/contribution.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/contribution/contribution.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_services_member_service__["a" /* MemberService */]])
    ], ContributionComponent);
    return ContributionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/identification/identification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/identification/identification.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div id=\"identification-form\" class=\"container-fluid reg-container first-form\" style=\"height: 1000px;\">\n\n  <div class=\"reg-image hidden-sm hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n\n  <div class=\"container\" style=\"max-width: 747px;\">\n    <div class=\"row\" style=\"margin-top: 30px;\">\n      <div class=\"col-md-12\">\n        <span> <strong>Wait one sec!</strong> </span><br>\n        <span> chris.kendricks07@gmail.com </span><br>\n        <span class=\"badge badge-danger\" style=\"margin-top: 40px;\">UNVERIFIED</span>\n        <h1 style=\"margin-top: 50px;\">Verify your identity</h1>\n        <br>\n        <p> <strong>To continue</strong> we have to verify your identity to make sure you are who you say you are. Please upload the required documents. We won't ever share you information.</p>\n        <br>    \n      </div>\n    </div>\n    <div class=\"row\" style=\"margin-top: 50px;\">\n      <div *ngFor=\"let uploadPanel of uploadPanels; let i = index\" class=\"col-md-4\">\n        <app-uploader id=\"upload-document-{{ i }}\" name=\"{{ uploadPanel.name }}\" (onAddFile)=\"onDropFile($event, i)\" [parentUploader]=\"uploader\"></app-uploader>        \n      </div>\n    </div> \n    <div class=\"row\" style=\"margin-top: 70px;\">\n      <div class=\"col-md-12\">\n          <button style=\"float: left;width: 20%; background-color: #FFF; color: #000;\" (click)=\"signup()\" class=\"btn btn-info reg-button\" id=\"finish\">\n            <p>Cancel</p>\n          </button>         \n          <button style=\"float: right;width: 78%;\" (click)=\"signup()\" class=\"btn btn-info reg-button\" id=\"finish\">\n            <p><i class=\"fa fa-check-circle\"></i>&nbsp;&nbsp;&nbsp;Upload and verify documents</p>\n          </button>        \n      </div>\n    </div>   \n  </div>\n\n\n  <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/signup/identification/identification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_util_util__ = __webpack_require__("../../../../../src/app/shared/util/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IdentificationComponent = /** @class */ (function () {
    function IdentificationComponent(util, router, memberService, app) {
        this.util = util;
        this.router = router;
        this.memberService = memberService;
        this.app = app;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_models_user__["a" /* User */]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__["FileUploader"]({});
        this.uploadPanels = [
            { name: 'Password/ID', addedUpload: false },
            { name: 'Selfie with ID', addedUpload: false },
            { name: 'Proof of residence', addedUpload: false },
        ];
        this.base64Strings = [];
        this.nextStepUrl = "/dashboard";
        this.previousUrl = "/signup/contribution";
        this.isAllUploaded = false;
    }
    IdentificationComponent.prototype.onDropFile = function ($event, index) {
        var _this = this;
        this.uploader.queue[index] = $event;
        this.uploadPanels[index]["addedUpload"] = true;
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            var imageData = fileReader.result;
            var rawData = imageData.split("base64,");
            if (rawData.length > 1) {
                rawData = rawData[1];
                _this.base64Strings[index] = rawData;
            }
            console.log(_this.base64Strings);
        };
        fileReader.readAsDataURL(this.uploader.queue[index]._file);
    };
    IdentificationComponent.prototype.ngOnInit = function () {
        this.uploader.clearQueue();
        this.user = this.util.getLocalObject("user");
        this.onUploadComplete();
    };
    IdentificationComponent.prototype.ngOnDestroy = function () {
        if (this.router.url == this.nextStepUrl || this.router.url == this.previousUrl) { }
        else {
            this.util.deleteLocalObject("user");
        }
    };
    IdentificationComponent.prototype.signup = function () {
        var _this = this;
        this.memberService.createAccount(this.user).subscribe(function (res) { return _this.afterCreateAccount(res); });
    };
    IdentificationComponent.prototype.onUploadComplete = function () {
        this.uploader.onCompleteAll = function () {
            //this.memberService.afterLoginRoute()
        };
    };
    IdentificationComponent.prototype.afterCreateAccount = function (res) {
        var _this = this;
        this.memberService.afterCreateAccount(this.user.email, this.user.password)
            .subscribe(function (session) { return _this.afterLogin(session); });
    };
    IdentificationComponent.prototype.setUploadContainerName = function (userId) {
        this.uploader.setOptions({
            disableMultipart: false,
            authTokenHeader: this.app.getAccessToken(),
            url: this.app.apiUrl + '/Members/' + this.app.getUserId() + '/uploadFile?access_token=' + this.app.getAccessToken()
        });
    };
    IdentificationComponent.prototype.afterLogin = function (session) {
        this.memberService.saveAccessToken(session);
        this.memberService.setLocalMemberObj(session);
        this.setUploadContainerName(session["userId"]);
    };
    IdentificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-identification',
            template: __webpack_require__("../../../../../src/app/signup/identification/identification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/identification/identification.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_4__shared_services_member_service__["a" /* MemberService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]])
    ], IdentificationComponent);
    return IdentificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/support/support.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"utf-8\";\n\nh1,h2,h3,h4,h5,h6,p {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none !important;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  overflow-x: hidden;\n  width: 100vw;\n}\n\nhtml,body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.support-container {\n  background-color: #f5f6f5;\n/*   margin-top: -139px; */\n  color: white;\n  text-align: center;\n}\n\n.support-container h1 {\n  padding: 15px 0;\n  color: #16465d;\n  font-weight: 700;\n  font-size: 48px;\n}\n\n.support-container p {\n  padding-bottom: 15px;\n  color: black;\n  font-size: 24px;\n}\n\n.support-container .container {\n  padding: 25px 0;\n}\n\n.support-container h3 {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.support-container img {\n  width: 70vw;\n  margin-top: 30px;\n  max-width: 1000px;\n}\n\n.support-container div {\n  margin: 0 auto;\n}\n\n.support-icons {\n  margin:  0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  text-align:  center;\n}\n\n.support-icons i {\n  font-size: 8vw;\n  opacity:  0.8;\n}\n\n.support-info {\n  width: 70vw;\n  height: 100%;\n  max-width: 1000px;\n  margin-top: 20px;\n  font-size: 18px;\n  margin: 0 auto;\n}\n\n.support-info i {\n  color: #24537f;\n}\n\n.support-info p {\n  color: #595959 !important;\n}\n\n.support-info h2 {\n  font-size: 32px;\n  font-weight: 600;\n  color: black;\n}\n\n.support-info h6 {\n  font-size: 20px;\n  margin: 16px;\n  color: black;\n}\n\n.support-info h3 {\n  font-size: 28px;\n  font-weight: 700;\n  color: black;\n}\n\n.support-box {\n  width: 800px;\n  -webkit-box-shadow: 0px 0px 18px #CCCCCC;\n          box-shadow: 0px 0px 18px #CCCCCC;\n  margin: 40px auto;\n  padding: 20px;\n  text-align: center;\n  border-radius: 2px;\n}\n\n.support-button {\n  background-color: #fd8a66;\n  color: white;\n  width: 220px;\n  padding: 10px;\n  border-radius: 3px;\n  margin: 0 auto;\n  -webkit-box-shadow: 1px 1px 1px #CCCCCC;\n          box-shadow: 1px 1px 1px #CCCCCC;\n}\n\n.support-button:hover {\n  cursor: pointer;\n  background-color: #D17356;\n}\n\n.support-button:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: #BE684F;\n}\n\n.affiliate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.affiliate a {\n  color: #2C62F1;\n}\n\n.affiliate a:hover {\n  color: #1B46C1;\n  text-decoration: underline !important;\n}\n\n/* Media Queries */\n\n@media only screen and (max-width: 979px) {\n  .support-box {\n    width: 80vw;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .support-info {\n    width: 90vw;\n  }\n\n  .sign-up p {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .support-container {\n    margin-top: -35px !important;\n  }\n}\n\n.tab-content .active {\n  background: white;\n}\n\n.top-tab .nav {\n  background: #1db8d3;\n  border-bottom: 0;\n}\n\n.top-tab .nav li {\n  width: 50%;\n  text-align: center;\n  margin: 0 !important;\n}\n\n.top-tab .nav a {\n  background: #1db8d3;\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n  border: 0;\n}\n\n.support-content {\n  margin: 0 auto;\n}\n\n.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n  background: #008ca5;\n  color: white;\n  border: 0;\n  margin-right: 0;\n}\n\n.top-tab .nav-tabs>li>a:hover {\n  border: 0;\n}\n\n.top-tab .tab-pane{\n  text-align: center;\n  padding: 15px 0;\n  background: #f5f6f5;\n}\n\n.tab-content .tab-pane .tab-container {\n  min-height: 315px;\n  margin-bottom: 150px;\n  background: #f5f6f5;\n}\n\n.top-tab .tab-pane h2 {\n  color: #15465d;\n}\n\n.top-tab .tab-pane p {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.tab1-elem {\n  width: 20%;\n  float: left;\n  position: relative;\n  top: 70px;\n  text-align: center;\n}\n\n.inner-elem {\n  display: inline-block;\n  position: relative;\n}\n\n.tab1-elem h3 {\n  position: relative;\n  top: 30px;\n  color: #008ca5;\n}\n\n.support {\n  background: #f5f5f5;\n}\n\n.support-form h4 {\n  margin-bottom: 10px;\n}\n\n.support select {\n  background: white;\n  border: 1px solid #a9a9a9 !important;\n  width: 80%;\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.support-form {\n  padding-bottom: 30px;\n}\n\n.support select {\n  font-size: 18px;\n}\n\n.support-content .faq {\n  padding-bottom: 50px;\n}\n\n.support-content .faq h3 {\n  padding-left: 15px;\n  margin-bottom: 15px;\n  color: #15465d;\n}\n\n.mat-expansion-panel-header-title  {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.submit-content{\n  position: relative;\n  top: 15px;\n}\n\n.submit-content form input {\n  width: 80%;\n  padding: 5px 15px;\n  font-size: 18px;\n}\n\n.textarea {\n  width: 80%;\n  -webkit-box-shadow: inherit;\n          box-shadow: inherit;\n  border: 1px solid #a9a9a9;\n}\n\n.button {\n  background-color: #fe8962;\n  border: 1px solid #fe8962;\n  -webkit-box-shadow: 1px 1px 2px #CCCCCC;\n          box-shadow: 1px 1px 2px #CCCCCC;\n  border-radius: 4px;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  font-family: 'Montserrat';\n  clear: none;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 600;\n  height: auto;\n  overflow: visible;\n  padding: 10px 18px;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n  width: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/support/support.component.html":
/***/ (function(module, exports) {

module.exports = "<app-homepage-header></app-homepage-header>\n\n<div class=\"support\">\n  <div class=\"container-fluid support-container\">\n    <div class=\"container\">\n      <h1>Get in touch</h1>\n      <p>Have a question? Send us a note using the form below and someone from the Clicktool team will be in touch soon.</p>\n    </div>\n  </div>\n\n  <div class=\"container support-content\">\n    <div class=\"col-md-6 support-form\">\n      <div class=\"col-md-12 support-type\">\n        <h4>Select Support Type*</h4>\n        <form [formGroup]=\"form\">\n          <select formControlName=\"support_type\" [(ngModel)]='selected_type'>\n            <option value=\"\" disabled>Select Support Type</option>\n            <option *ngFor=\"let support_type of support_types\" [ngValue]=\"support_type\">{{support_type.name}}</option>\n          </select>\n        </form>\n      </div>\n      <div class=\"col-md-12 submit-content\" *ngIf=\"selected_type\">\n        <form [formGroup]=\"submitForm\" (ngSubmit)=\"processForm()\" *ngIf=\"!isSubmitted\" novalidate>\n          <!-- name -->\n          <div class=\"form-group\">\n            <h4>Name*</h4>\n            <input type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n            <div *ngIf=\"name.invalid && (name.dirty || isSubmitted)\" class=\"text-danger\">\n              <div *ngIf=\"name.errors.required\">\n                <p>Name is required.</p>\n              </div>\n              <div *ngIf=\"name.errors.minlength\">\n                <p>Name must be at least 4 characters long.</p>\n              </div>\n              <div *ngIf=\"name.errors.maxlength\">\n                <p>Name must not exceed 30 characters.</p>\n              </div>\n            </div>\n          </div>\n          <!-- email -->\n          <div class=\"form-group\">\n            <h4>Email*</h4>\n            <input type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\n            <div *ngIf=\"email.invalid && (email.dirty || isSubmitted)\" class=\"text-danger\">\n              <p>Email is required.</p>\n            </div>\n          </div>\n          <!-- subject -->\n          <div class=\"form-group\">\n            <h4>Subject*</h4>\n            <input type=\"text\" name=\"subject\" formControlName=\"subject\" placeholder=\"Subject\">\n            <div *ngIf=\"subject.invalid && (subject.dirty || isSubmitted)\" class=\"text-danger\">\n              <p>Subject is required.</p>\n            </div>\n          </div>\n          <!-- message -->\n          <div class=\"form-group\">\n            <h4>Question*</h4>\n            <textarea class=\"textarea\" name=\"message\" formControlName=\"message\" placeholder=\"What's on your question?\"></textarea>\n            <div *ngIf=\"message.invalid && (message.dirty || isSubmitted)\" class=\"text-danger\">\n              <p>Question is required.</p>\n            </div>\n          </div>\n\n          <button type=\"submit\" class=\"button signup-modal-submit-button btn\" [disabled]=\"!submitForm.valid\">\n            <span>\n              <i class=\"fa fa-check-circle\"></i>\n            </span>\n            <span>Sign Up</span>\n          </button>\n        </form>\n      </div>\n    </div>\n    <div class=\"col-md-6 faq\">\n      <h3>Related Questions</h3>\n      <div class=\"col-md-12\">\n        <mat-accordion>\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                1. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                2. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                3. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                4. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                5. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                6. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                7. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                8. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                9. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n          <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                10. Question\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          </mat-expansion-panel>\n        </mat-accordion>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/support/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportComponent = /** @class */ (function () {
    function SupportComponent(formBuilder, http) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.support_types = [
            { id: 1, name: "Clicktool" },
            { id: 2, name: "Wallet" }
        ];
        this.isSubmitted = false;
        this.result = null;
        this.panelOpenState = false;
    }
    SupportComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            support_type: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]]
        });
        this.submitForm = this.formBuilder.group({
            name: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(30)]],
            email: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            subject: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]],
            message: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]]
        });
    };
    Object.defineProperty(SupportComponent.prototype, "name", {
        get: function () { return this.submitForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportComponent.prototype, "email", {
        get: function () { return this.submitForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportComponent.prototype, "subject", {
        get: function () { return this.submitForm.get('subject'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SupportComponent.prototype, "message", {
        get: function () { return this.submitForm.get('message'); },
        enumerable: true,
        configurable: true
    });
    /**
     * Process the form we have. Send to whatever backend
     * Only alerting for now
     */
    SupportComponent.prototype.processForm = function () {
        this.result = this.submitForm.value;
        this.isSubmitted = true;
        if (!this.submitForm.valid)
            return;
        var allInfo = "My name is " + this.name + ". My email is " + this.email + ". My subject is " + this.subject + ". My message is " + this.message;
        console.log(allInfo);
    };
    SupportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-support',
            template: __webpack_require__("../../../../../src/app/support/support.component.html"),
            styles: [__webpack_require__("../../../../../src/app/support/support.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/vor/vor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".foobar {\n  background: red !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/vor/vor.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ vor }}<br>\n  {{ addStringToEnd() }}\n  <button (click)=\"runFunction()\">click me</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/training/vor/vor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VorComponent = /** @class */ (function () {
    function VorComponent() {
        this.vor = "vor works! we knows it works";
    }
    VorComponent.prototype.ngOnInit = function () {
    };
    VorComponent.prototype.addStringToEnd = function () {
        return this.vor + " is leaving work";
    };
    VorComponent.prototype.runFunction = function () {
        this.vor = "we just clicked the button";
    };
    VorComponent.prototype.alertVor = function (changeVorString) {
        this.vor = changeVorString;
    };
    VorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vor',
            template: __webpack_require__("../../../../../src/app/training/vor/vor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/training/vor/vor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VorComponent);
    return VorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/transactions/transaction-table/transaction-row/transaction-row.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/transaction-table/transaction-row/transaction-row.component.html":
/***/ (function(module, exports) {

module.exports = " <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n <td> <a href=\"#\">5945674</a></td>\n <td>2 hrs 32 minutes ago</td>\n <td> \n  <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n  <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n</td>\n <td> \n  <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n</td>     \n<td>0.001</td>  \n<td>0.000621624</td> "

/***/ }),

/***/ "../../../../../src/app/transactions/transaction-table/transaction-row/transaction-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionRowComponent = /** @class */ (function () {
    function TransactionRowComponent() {
    }
    TransactionRowComponent.prototype.ngOnInit = function () {
    };
    TransactionRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction-row',
            template: __webpack_require__("../../../../../src/app/transactions/transaction-table/transaction-row/transaction-row.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/transaction-table/transaction-row/transaction-row.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionRowComponent);
    return TransactionRowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/transactions/transaction-table/transaction-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/transaction-table/transaction-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-bg break-txt\" style=\"padding: 10px;\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th width=\"150\" scope=\"col\">TxHash</th>\n        <th width=\"100\" scope=\"col\">Block</th>\n        <th width=\"150\" scope=\"col\">Age</th>\n        <th width=\"300\" scope=\"col\">From</th>\n        <th scope=\"col\">To</th>\n        <th scope=\"col\">Value</th>\n        <th scope=\"col\"> <span class=\"text-muted\">[TxFee]</span> </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n         <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n         <td> <a href=\"#\">5945674</a></td>\n         <td>2 hrs 32 minutes ago</td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n          <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n        </td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n        </td>     \n        <td>0.001</td>  \n        <td>0.000621624</td>           \n      </tr>\n      <tr>\n         <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n         <td> <a href=\"#\">5945674</a></td>\n         <td>2 hrs 32 minutes ago</td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n          <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n        </td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n        </td>     \n        <td>0.001</td>  \n        <td>0.000621624</td>           \n      </tr>\n      <tr>\n         <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n         <td> <a href=\"#\">5945674</a></td>\n         <td>2 hrs 32 minutes ago</td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n          <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n        </td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n        </td>     \n        <td>0.001</td>  \n        <td>0.000621624</td>           \n      </tr>\n      <tr>\n         <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n         <td> <a href=\"#\">5945674</a></td>\n         <td>2 hrs 32 minutes ago</td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n          <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n        </td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n        </td>     \n        <td>0.001</td>  \n        <td>0.000621624</td>           \n      </tr>\n      <tr>\n         <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n         <td> <a href=\"#\">5945674</a></td>\n         <td>2 hrs 32 minutes ago</td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n          <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n        </td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n        </td>     \n        <td>0.001</td>  \n        <td>0.000621624</td>           \n      </tr>\n      <tr>\n         <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n         <td> <a href=\"#\">5945674</a></td>\n         <td>2 hrs 32 minutes ago</td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n          <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n        </td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n        </td>     \n        <td>0.001</td>  \n        <td>0.000621624</td>           \n      </tr>\n      <tr>\n         <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n         <td> <a href=\"#\">5945674</a></td>\n         <td>2 hrs 32 minutes ago</td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n          <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n        </td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n        </td>     \n        <td>0.001</td>  \n        <td>0.000621624</td>           \n      </tr>\n      <tr>\n         <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n         <td> <a href=\"#\">5945674</a></td>\n         <td>2 hrs 32 minutes ago</td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n          <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n        </td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n        </td>     \n        <td>0.001</td>  \n        <td>0.000621624</td>           \n      </tr>\n      <tr>\n         <td scope=\"row\"> <div class=\"truncate-150\"><a href=\"#\">0xfa0f9337cfc3355c4900b912e7077e74ed9ec3ae6bce6f837db138a07dfc391e</a></div>  </td>\n         <td> <a href=\"#\">5945674</a></td>\n         <td>2 hrs 32 minutes ago</td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x32f36aea8f3328191a1bcb81d13e512c5f249909</a></div>\n          <span class=\"badge badge-success pull-right\" style=\"background: #5CB85C;padding: 5px 10px;border-radius: 5px; margin-right: 15px;\">IN</span>\n        </td>\n         <td> \n          <div class=\"truncate-150 pull-left\"><a href=\"#\">0x4df2367b2872be75370798d04ef76ecf712b3083</a></div>\n        </td>     \n        <td>0.001</td>  \n        <td>0.000621624</td>           \n      </tr>\n      <tr>\n        <td colspan=\"7 text-center\" style=\"text-align: center;\">\n          <strong>1 of 100</strong>\n          - \n          of <strong>100</strong>\n          <a class=\"pull-left\" href=\"#\"> <strong>Previuos</strong></a>\n          <a class=\"pull-right\" href=\"#\"> <strong>Next</strong> </a>\n        </td>\n      </tr>                                                     \n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/transactions/transaction-table/transaction-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionTableComponent = /** @class */ (function () {
    function TransactionTableComponent() {
    }
    TransactionTableComponent.prototype.ngOnInit = function () {
    };
    TransactionTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction-table',
            template: __webpack_require__("../../../../../src/app/transactions/transaction-table/transaction-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/transaction-table/transaction-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionTableComponent);
    return TransactionTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/transactions/transactions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\n\n<div class=\"container-fluid\" style=\"padding: 60px 0 0 0;\">\n  <app-transaction-table></app-transaction-table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent() {
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__("../../../../../src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/update-password/update-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-password/update-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid reg-container first-form\" style=\"height: 1200px;\">\n  \n  <div class=\"reg-image hidden-sm hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n\n\n<form [formGroup]=\"form\"> \n  <div  class=\"reg-form\">\n    <div class=\"reg-active reg-border\">\n      <h3>Password Reset</h3>\n      <hr>\n      <div class=\"reginr\"> \n        <span><i class=\"fa fa-user\"></i></span>\n        <input formControlName=\"password\" [(ngModel)]=\"password\" name=\"email\" minlength=\"4\" maxlength=\"100\" type=\"email\" required=\"\" autocomplete=\"off\" placeholder=\"enter new password\">\n      </div>\n\n          <div \n          class=\"text-danger\" \n          style=\"margin-bottom: 20px; text-align: left;\"  \n          *ngIf=\"!this.form.get('password').valid && this.form.get('password').touched\"\n          >\n                <div [hidden]=\"!form.get('password').hasError('required')\">\n                  <div class=\"\">Password required</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('minlength')\">\n                  <div class=\"\">Password must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('password').hasError('maxlength')\">\n                  <div class=\"\">Password cannot be more than 24 characters long.</div>\n                </div>\n            </div>       \n\n      <div class=\"reginr\"> \n        <span><i class=\"fa fa-user\"></i></span>\n        <input formControlName=\"passwordConfirm\" [(ngModel)]=\"passwordConfirm\" name=\"email\" minlength=\"4\" maxlength=\"100\" type=\"email\" required=\"\" autocomplete=\"off\" placeholder=\"enter pasword again\">\n      </div>\n\n          <div \n          class=\"text-danger\" \n          style=\"margin-bottom: 20px; text-align: left;\"  \n          *ngIf=\"!this.form.get('passwordConfirm').valid && this.form.get('passwordConfirm').touched\"\n          >\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('required')\">\n                  <div class=\"\">Enter password </div>\n                </div>\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('minlength')\">\n                  <div class=\"\">Password must be at least 4 characters long.</div>\n                </div>\n                <div [hidden]=\"!form.get('passwordConfirm').hasError('maxlength')\">\n                  <div class=\"\">Password cannot be more than 24 characters long.</div>\n                </div>\n            </div> \n\n      <button (click)=\"updatePassword(password, passwordConfirm)\" type=\"submit\" style=\"margin-top: 25px;\" class=\"btn btn-info reg-button\" id=\"continue\">\n        <p><i class=\"fa fa-arrow-circle-right\"></i>&nbsp;&nbsp;&nbsp;Continue</p>\n      </button>\n    </div> \n  </div>  \n</form>\n\n  <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/update-password/update-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdatePasswordComponent = /** @class */ (function () {
    function UpdatePasswordComponent(formBuilder, memberService, app, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.memberService = memberService;
        this.app = app;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    UpdatePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to router event 
        this.subscription = this.activatedRoute.params
            .subscribe(function (param) {
            _this.token = param['token'];
        });
        this.form = this.formBuilder.group({
            password: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required],
            passwordConfirm: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required],
        });
    };
    UpdatePasswordComponent.prototype.updatePassword = function (password, passwordConfirn) {
        var _this = this;
        if (password != passwordConfirn) {
            alert('Password dont match');
        }
        this.form.updateValueAndValidity();
        Object.keys(this.form.controls).filter(function ($0) {
            _this.form.get($0).markAsTouched({ onlySelf: true });
        });
        this.memberService.resetLostPassword(password, this.token).subscribe(function (res) { return _this.afterResetPassword(res); });
    };
    UpdatePasswordComponent.prototype.afterResetPassword = function (res) {
        alert('Password reset successfully');
        this.router.navigate(['login']);
    };
    UpdatePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-password',
            template: __webpack_require__("../../../../../src/app/update-password/update-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update-password/update-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UpdatePasswordComponent);
    return UpdatePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard-header></app-dashboard-header>\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<table class=\"table\" style=\"margin-top: 50px;\">\n\t\t\t  <thead>\n\t\t\t    <tr>\n\t\t\t      <th scope=\"col\">#</th>\n\t\t\t      <th scope=\"col\">First</th>\n\t\t\t      <th scope=\"col\">Last</th>\n\t\t\t      <th scope=\"col\">Contribution</th>\n\t\t\t      <th scope=\"col\">Documents</th>\n\t\t\t    </tr>\n\t\t\t  </thead>\n\t\t\t  <tbody>\n\t\t\t    <tr *ngFor=\"let user of users\">\n\t\t\t      <td>{{ user.id }}</td>\n\t\t\t      <td>{{ user.firstname }} <strong style=\"color: red;\" *ngIf=\"user.id == app.getUserId()\">YOU</strong> </td>\n\t\t\t      <td>{{ user.lastname }}</td>\n\t\t\t      <td>\n\t\t\t      \t<span *ngIf=\"!user.isContributionUsd\"> {{ user.isContributionMoreThenTwelve ? 'OVER 12' : 'LESS THEN 12' }} </span>\n\t\t\t      \t<span *ngIf=\"user.isContributionUsd\">USD</span>\n\t\t\t      </td>\n\t\t\t      <td>\n\t\t\t      \t<button class=\"btn btn-secondary btn-sm\" routerLink=\"/user/{{user.id}}/documents\">View Doucments</button>\n\t\t\t      </td>\n\t\t\t    </tr>\n\t\t\t  </tbody>\n\t\t\t</table>\t\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(memberService, app) {
        this.memberService = memberService;
        this.app = app;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getAll().subscribe(function (res) { return _this.afterGetUsers(res); });
    };
    UsersComponent.prototype.afterGetUsers = function (res) {
        this.users = res;
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/verify/verify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verify/verify.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div id=\"identification-form\" class=\"container-fluid first-form npr\" style=\"background-color: #FFF;\">\n\n  <div style=\"position: fixed;\" class=\"reg-image hidden-sm hidden-xs\" style=\"z-index: 1;\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n\n  <form [formGroup]=\"form\">\n      <div class=\"container\" [ngStyle]=\"{'min-height': hideUploadForm === true ? '1200px' : 'auto'}\" style=\"max-width: 1100px;border-left: thin solid  #e4e4e4;\n        border-right: thin solid  #e4e4e4; padding-left: 30px; padding-right: 30px; padding-bottom: 40px; box-shadow: 0px 0px 12px rgba(0,0,0,0.1); background-color: #FFF; float: right; z-index: 10000; position: relative;\">\n        <div class=\"row text-left\" style=\"margin-top: 40px;\">\n          <div class=\"col-sm-12\">\n\n            <div class=\"row\">\n            \t<div class=\"col-md-12\">\n                <span *ngIf=\"app.getMember()\" style=\"display: block; margin-bottom: 4px; font-size: 16px;\">Hello, {{ app.getMember().firstname }} {{ app.getMember().lastname }}  <!-- {{ app.getMember().email }} --></span><br>\n            \t\t<h2 class=\"pull-left\">Verify your identity</h2>\n            \t\t<div class=\"pull-right\">\n            \t\t\t<!-- <span class=\"badge badge-danger\">Unverified</span> -->\n            \t\t</div>\n            \t</div>\n            </div>\n            <br>\n            <p style=\"display: block; max-width: 600px;\"> To continue we have to verify your identity to make sure you are who you say you are. Please upload the required documents. We won't ever share you information.</p>\n\n            <div class=\"animated slideInUp\" [hidden]=\"didBeginVerification\">\n              <button (click)=\"begin()\" style=\"margin-top: 45px; padding-top: 15px !important;\n              padding-bottom: 15px !important;\" class=\"btn btn-primary btn-primary-i\">\n                Begin verification\n                <i class=\"material-icons\">\n                arrow_right_alt\n                </i>\n              </button>              \n            </div>\n\n            <br>    \n          </div>\n        </div>\n        <hr [hidden]=\"!didBeginVerification\">\n\n        <div [hidden]=\"!didBeginVerification\" class=\"row\">\n        \t<div class=\"col-sm-6 text-left\">\n        \t\t<label class=\"float-left\">Select a document to verify:</label>\n        \t</div>\n        \t<div class=\"col-sm-6 text-left\">\n    \t\t\t<div style=\"float:left;\" class=\"btn-group btn-group-small btn-group-block animated slideInRight\" role=\"group\" aria-label=\"Basic example\">\n    \t\t\t  <button [ngClass]=\"{'active': documentType == 'passport' }\" (click)=\"setDocumentType('passport', 'Passport')\"  type=\"button\" class=\"btn btn-primary active btn-small\">Passport</button>\n    \t\t\t  <button [ngClass]=\"{'active': documentType == 'driving_license' }\" (click)=\"setDocumentType('driving_license', 'License')\"  type=\"button\" class=\"btn btn-primary btn-small\">Driver license</button>\n    \t\t\t  <button [ngClass]=\"{'active': documentType == 'id_card' }\" (click)=\"setDocumentType('id_card', 'ID card')\" type=\"button\" class=\"btn btn-primary btn-small\">ID card</button>\n    \t\t\t</div>    \t\t\n        \t</div>\n        </div>\n        <hr [hidden]=\"hideUploadForm\">\n        <div [hidden]=\"hideUploadForm\" class=\"row text-left animated slideInRight\">\n    \t  <div class=\"col-sm-6 text-left\">\n    \t\t<label class=\"float-left\">Upload {{ documentTypeLabel }} documents:</label><br>\n            To the right drag and drop, or click to browse needed files. We'll use these files to verify your identity.\n    \t  </div>\t\n          <div class=\"col-sm-6\">\n    \t      <div class=\"row no-padding-right-odd\">\n    \t\t      <div style=\"margin-bottom: 15px;\" *ngFor=\"let uploadPanel of uploadPanels; let i = index\" class=\"col col-sm-6\">\n    \t\t        \n                    <app-uploader id=\"upload-document-{{ i }}\" name=\"{{ uploadPanel.name }}\" [index]=\"i\" (onAddFile)=\"onDropFile($event, i)\" [parentUploader]=\"uploader\"></app-uploader>  \n\n    \t\t      </div>      \t\n    \t      </div>      \t\n          </div>\t\n    \t\n\n\n        </div> \n\n        <hr [hidden]=\"hideUploadForm\">\n\n        <div [hidden]=\"hideUploadForm\" class=\"row\">\n        \t<div class=\"col-sm-6 text-left\">\n        \t\t<label class=\"float-left\">{{ documentTypeLabel }} information:</label>\n        \t</div>\n        \t<div></div>\n        \t<div class=\"col-sm-6 text-left\">\n        \t\t<div class=\"row\">\n        \t\t\t<div class=\"col-sm-6\">\n\n\n<!--                         <app-form-input\n                        name=\"document_id_no\"\n                        formControlName=\"document_id_no\"\n                        minLength=\"4\"\n                        maxlength=\"30\"\n                        [form]=\"form\"\n                        [model]=\"verifyObj\"\n                        placeholder=\"fooo ascasc\"\n                        requiredMessage=\"required messag here..\"\n                        minLengthMessage=\"min messag here..\"\n                        maxlengthMessage=\"max messag here..\"\n                        placeholderMessage=\"placeholder message here.\"\n                        ></app-form-input> -->\n\n\n\n\n\n      \t\t\t\t\t<div class=\"form-group nmb\">\n                         <span class=\"active-border\"></span>\n                         <span class=\"top-label\">{{ documentTypeLabel }} number</span>\n                         <input appInputAnimation formControlName=\"document_id_no\" name=\"document_id_no\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"verifyObj.document_id_no\" class=\"form-control style1\" type=\"text\" placeholder=\"{{ documentTypeLabel }} number\">\n                         <i class=\"material-icons material-icons-error\">error_outline</i>\n\n                          <div\n                          class=\"text-danger\"\n                          style=\"margin-bottom: 20px; text-align: left;\"\n                          *ngIf=\"!this.form.get('document_id_no').valid && this.form.get('document_id_no').touched\"\n                          >\n                                <div [hidden]=\"!form.get('document_id_no').hasError('required')\">\n                                  <div class=\"\">{{ documentTypeLabel }} number required</div>\n                                </div>\n                                <div [hidden]=\"!form.get('document_id_no').hasError('minlength')\">\n                                  <div class=\"\">{{ documentTypeLabel }} number must be at least 4 characters long.</div>\n                                </div>\n                                <div [hidden]=\"!form.get('document_id_no').hasError('maxlength')\">\n                                  <div class=\"\">{{ documentTypeLabel }} number cannot be more than 24 characters long.</div>\n                                </div>\n\n                            </div>\n    \t\t\t\t\t</div>  \n\n\n\n        \t\t\t</div>\n        \t\t\t<div class=\"col-sm-6\">\n      \t\t\t\t\t<div class=\"form-group nmb\">\n                <span class=\"active-border\"></span>\n                <span class=\"top-label\">{{ documentTypeLabel }} exp (YYYY-MM-DD)</span>\n    \t\t\t\t\t\t<input appInputAnimation formControlName=\"document_expiry_date\" name=\"document_expiry_date\" [(ngModel)]=\"verifyObj.document_expiry_date\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"{{ documentTypeLabel }} exp date\">\n\n                              <div\n                              class=\"text-danger\"\n                              style=\"margin-bottom: 20px; text-align: left;\"\n                              *ngIf=\"!this.form.get('document_expiry_date').valid && this.form.get('document_expiry_date').touched\"\n                              >\n                                    <div [hidden]=\"!form.get('document_expiry_date').hasError('required')\">\n                                      <div class=\"\">{{ documentTypeLabel }} exp date required</div>\n                                    </div>\n                                    <div [hidden]=\"!form.get('document_expiry_date').hasError('minlength')\">\n                                      <div class=\"\">{{ documentTypeLabel }} exp date must be at least 4 characters long.</div>\n                                    </div>\n                                    <div [hidden]=\"!form.get('document_expiry_date').hasError('maxlength')\">\n                                      <div class=\"\">{{ documentTypeLabel }} exp date cannot be more than 24 characters long.</div>\n                                    </div>\n\n                                </div>\n\n    \t\t\t\t\t</div>    \t\t\t\t\n        \t\t\t</div>    \t\t\t   \t\t\t    \t\t\t\t\t\t    \t\t\t\n        \t\t</div>\n       \t\t\n        \t</div>\n        </div>\n\n        <hr [hidden]=\"hideUploadForm\">\n\n        <div [hidden]=\"hideUploadForm\" class=\"row\">\n        \t<div class=\"col-sm-6 text-left\">\n        \t\t<label class=\"float-left\">Enter information on identity document:</label>\n        \t</div>\n        \t<div></div>\n        \t<div class=\"col-sm-6 text-left\">\n        \t\t<div class=\"row\">   \t\t\t\n        \t\t\t<div class=\"col-sm-6\">\n    \t\t\t\t\t<div class=\"form-group\">\n                <span class=\"active-border\"></span>\n                <span class=\"top-label\">First name</span>\n    \t\t\t\t\t\t<input appInputAnimation formControlName=\"first_name\" name=\"first_name\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"verifyObj.first_name\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"First name\">\n\n \n                          <div\n                          class=\"text-danger\"\n                          style=\"margin-bottom: 20px; text-align: left;\"\n                          *ngIf=\"!this.form.get('first_name').valid && this.form.get('first_name').touched\"\n                          >\n                                <div [hidden]=\"!form.get('first_name').hasError('required')\">\n                                  <div class=\"\">First name required</div>\n                                </div>\n                                <div [hidden]=\"!form.get('first_name').hasError('minlength')\">\n                                  <div class=\"\">First name must be at least 4 characters long.</div>\n                                </div>\n                                <div [hidden]=\"!form.get('first_name').hasError('maxlength')\">\n                                  <div class=\"\">First name cannot be more than 24 characters long.</div>\n                                </div>\n\n                            </div>\n\n    \t\t\t\t\t</div>     \t\t\t\t\n        \t\t\t</div>\n        \t\t\t<div class=\"col-sm-6\">\n    \t\t\t\t\t<div class=\"form-group\">\n                <span class=\"active-border\"></span>\n                <span class=\"top-label\">Last name</span>\n    \t\t\t\t\t\t<input appInputAnimation formControlName=\"last_name\" name=\"last_name\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"verifyObj.last_name\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"Last name\">\n\n                          <div\n                          class=\"text-danger\"\n                          style=\"margin-bottom: 20px; text-align: left;\"\n                          *ngIf=\"!this.form.get('last_name').valid && this.form.get('last_name').touched\"\n                          >\n                                <div [hidden]=\"!form.get('last_name').hasError('required')\">\n                                  <div class=\"\">Last name required</div>\n                                </div>\n                                <div [hidden]=\"!form.get('last_name').hasError('minlength')\">\n                                  <div class=\"\">Last name must be at least 4 characters long.</div>\n                                </div>\n                                <div [hidden]=\"!form.get('last_name').hasError('maxlength')\">\n                                  <div class=\"\">Last name cannot be more than 24 characters long.</div>\n                                </div>\n\n                            </div>\n\n    \t\t\t\t\t</div>     \t\t\t\t\n        \t\t\t</div>\n        \t\t\t<div class=\"col-sm-12\">\n    \t\t\t\t\t<div class=\"form-group\">\n                <span class=\"active-border\"></span>\n                <span class=\"top-label\">Address</span>                \n    \t\t\t\t\t\t<input appInputAnimation formControlName=\"address\" name=\"address\" required minlength=\"4\" maxlength=\"150\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" [(ngModel)]=\"verifyObj.address\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"Address\">\n\n                   <div\n                  class=\"text-danger\"\n                  style=\"margin-bottom: 20px; text-align: left;\"\n                  *ngIf=\"!this.form.get('address').valid && this.form.get('address').touched\"\n                  >\n                        <div [hidden]=\"!form.get('address').hasError('required')\">\n                          <div class=\"\">Address required</div>\n                        </div>\n                        <div [hidden]=\"!form.get('address').hasError('minlength')\">\n                          <div class=\"\">Address must be at least 4 characters long.</div>\n                        </div>\n                        <div [hidden]=\"!form.get('address').hasError('maxlength')\">\n                          <div class=\"\">Address cannot be more than 24 characters long.</div>\n                        </div>\n\n                    </div>\n\n    \t\t\t\t\t</div>     \t\t\t\t\n        \t\t\t</div>    \n        \t\t\t<div class=\"col-sm-6\">\n    \t\t\t\t\t<div class=\"form-group\">\n                <span class=\"active-border\"></span>\n                <span class=\"top-label\">Date of birth (YYYY-MM-DD)</span>                \n    \t\t\t\t\t\t<input appInputAnimation formControlName=\"dob\" name=\"dob\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"verifyObj.dob\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"Date of birth\">\n\n                              <div\n                              class=\"text-danger\"\n                              style=\"margin-bottom: 20px; text-align: left;\"\n                              *ngIf=\"!this.form.get('dob').valid && this.form.get('dob').touched\"\n                              >\n                                    <div [hidden]=\"!form.get('dob').hasError('required')\">\n                                      <div class=\"\">DOB required</div>\n                                    </div>\n                                    <div [hidden]=\"!form.get('dob').hasError('minlength')\">\n                                      <div class=\"\">DOB must be at least 4 characters long.</div>\n                                    </div>\n                                    <div [hidden]=\"!form.get('dob').hasError('maxlength')\">\n                                      <div class=\"\">DOB cannot be more than 24 characters long.</div>\n                                    </div>\n\n                                </div>\n\n    \t\t\t\t\t</div>     \t\t\t\t\n        \t\t\t</div>\n        \t\t\t<div class=\"col-sm-12\">\n    \t\t\t\t\t<div class=\"form-group\">\n                <span class=\"active-border\"></span>\n                <span class=\"top-label\">Phone number</span>                \n    \t\t\t\t\t\t<input appInputAnimation formControlName=\"phone_number\" name=\"phone_number\" required minlength=\"4\" maxlength=\"24\" [(ngModel)]=\"verifyObj.phone_number\" class=\"form-control style1\" type=\"text\" name=\"\" placeholder=\"Phone number\">\n\n                              <div\n                              class=\"text-danger\"\n                              style=\"margin-bottom: 20px; text-align: left;\"\n                              *ngIf=\"!this.form.get('phone_number').valid && this.form.get('phone_number').touched\"\n                              >\n                                    <div [hidden]=\"!form.get('phone_number').hasError('required')\">\n                                      <div class=\"\">Phone number required</div>\n                                    </div>\n                                    <div [hidden]=\"!form.get('phone_number').hasError('minlength')\">\n                                      <div class=\"\">Phone number must be at least 4 characters long.</div>\n                                    </div>\n                                    <div [hidden]=\"!form.get('phone_number').hasError('maxlength')\">\n                                      <div class=\"\">Phone number cannot be more than 24 characters long.</div>\n                                    </div>\n\n                                </div>\n\n    \t\t\t\t\t</div>     \t\t\t\t\n        \t\t\t</div>    \t\t\t    \t\t\t\t\t\t    \t\t\t\n        \t\t</div>\n       \t\t\n        \t</div>\n        </div>\n\n        <hr [hidden]=\"hideUploadForm\">\n\n        <div [hidden]=\"hideUploadForm\" class=\"row\">\n        \t<div class=\"col-sm-6 text-left\">\n        \t\t<label class=\"float-left\">TOS & Agreements:</label>\n        \t</div>\n        \t<div></div>\n        \t<div class=\"col-sm-6 text-left\">\n        \t\t<div class=\"row\">   \t\t\t\n        \t\t\t<div class=\"col-sm-12\">\n    \t\t            <label class=\"checkcontainer\" style=\"font-weight: normal; font-size: 14px; padding-top: 3px; margin-bottom: 0;\">\n    \t\t              <input formControlName=\"didAgreeToTerms\" name=\"didAgreeToTerms\" required [(ngModel)]=\"user.didAgreeToTerms\" type=\"checkbox\" autocomplete=\"off\">\n    \t\t              Agree to background check\n    \t\t              <span class=\"checkmark\"></span>\n    \t\t            </label>   \n\n                      <div\n                      class=\"text-danger\"\n                      style=\"margin-bottom: 20px; text-align: left;\"\n                      *ngIf=\"!this.form.get('didAgreeToTerms').valid && this.form.get('didAgreeToTerms').touched\"\n                      >\n                            <div style=\"margin-top: 15px;\" [hidden]=\"!form.get('didAgreeToTerms').hasError('required')\">\n                              <div class=\"\">TOS & Agreements required</div>\n                            </div>\n\n                        </div>\n        \t\t\t</div>\n       \t\t\t    \t\t\t\t\t\t    \t\t\t\n        \t\t</div>\n       \t\t\n        \t</div>\n        </div>\n\n        <hr [hidden]=\"hideUploadForm\">\n\n        <div [hidden]=\"hideUploadForm\" class=\"row\" style=\"margin-top: 10px;\">\n          <div class=\"col-md-12\">  \n          \t    \n              <button [disabled]=\"isLoading\" (click)=\"verify()\" class=\"btn btn-primary pull-right\" style=\"margin-left: 15px;\" id=\"finish\">\n                Upload and verify documents\n              </button>   \n              <app-ct-preloader [isHidden]=\"!isLoading\"></app-ct-preloader>\n              <a style=\"margin-right: 15px; margin-top: 15px\" class=\"pull-left\" (click)=\"logout()\" href=\"#\">Logout and verify later</a>      \n          </div>\n        </div>   \n      </div>\n  </form>\n\n\n<!--   <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div> -->\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/verify/verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Verify */
/* unused harmony export VerifyResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_util_util__ = __webpack_require__("../../../../../src/app/shared/util/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_member_service__ = __webpack_require__("../../../../../src/app/shared/services/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_google_places_autocomplete__ = __webpack_require__("../../../../ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Verify = /** @class */ (function () {
    function Verify() {
    }
    return Verify;
}());

var VerifyResponse = /** @class */ (function () {
    function VerifyResponse() {
    }
    return VerifyResponse;
}());

var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(util, router, memberService, app, formBuilder) {
        this.util = util;
        this.router = router;
        this.memberService = memberService;
        this.app = app;
        this.formBuilder = formBuilder;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_models_user__["a" /* User */]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload_ng2_file_upload__["FileUploader"]({});
        this.uploadPanels = [
            {
                name: 'ID (front)',
                addedUpload: false,
                defaultUploadMessage: ""
            },
            {
                name: 'ID (back)', addedUpload: false
            },
            {
                name: 'Proof of address', addedUpload: false
            },
            {
                name: 'Seflie Photo', addedUpload: false
            },
        ];
        this.base64Strings = [];
        this.isAllUploaded = false;
        this.hideUploadForm = true;
        this.documentType = "";
        this.documentTypeLabel = "";
        this.verifyObj = new Verify();
        this.didBeginVerification = false;
        this.isLoading = false;
        this.defaultUploadMessage = "To the right drag and drop, or click to browse needed files. We'll use these files to verify your identity.";
    }
    VerifyComponent.prototype.handleAddressChange = function (address) { };
    VerifyComponent.prototype.onDropFile = function ($event, index) {
        var _this = this;
        this.uploader.queue[index] = $event;
        this.uploadPanels[index]["addedUpload"] = true;
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            var imageData = fileReader.result;
            var rawData = imageData.split("base64,");
            if (rawData.length > 1) {
                rawData = rawData[1];
                _this.base64Strings[index] = rawData;
            }
        };
        fileReader.readAsDataURL(this.uploader.queue[index]._file);
    };
    VerifyComponent.prototype.ngOnInit = function () {
        console.log(this.user);
        this.uploader.clearQueue();
        this.user = this.util.getLocalObject("user");
        this.form = this.formBuilder.group({
            document_id_no: [null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required],
            document_expiry_date: [null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required],
            first_name: [null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required],
            last_name: [null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required],
            address: [null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required],
            dob: [null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required],
            phone_number: [null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required],
            didAgreeToTerms: [null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required],
        });
        $('html,body').scrollTop(0);
    };
    VerifyComponent.prototype.setUploadContainerName = function (userId) {
        this.uploader.setOptions({
            disableMultipart: false,
            authTokenHeader: this.app.getAccessToken(),
            url: this.app.apiUrl + '/Members/' + this.app.getUserId() + '/uploadFile?access_token=' + this.app.getAccessToken()
        });
    };
    VerifyComponent.prototype.setDocumentType = function (type, labelName) {
        this.documentType = type;
        this.documentTypeLabel = labelName;
        this.uploadPanels[0]["name"] = labelName + ' (front)';
        this.uploadPanels[1]["name"] = labelName + ' (back)';
        this.hideUploadForm = false;
    };
    VerifyComponent.prototype.verify = function () {
        var _this = this;
        this.verifyObj.document_type = this.documentType;
        this.verifyObj.background_checks = "1";
        this.verifyObj.email = this.app.getMember() ? this.app.getMember().email : "";
        this.verifyObj.country = "US";
        this.verifyObj.lang = "en";
        // ID Document front
        this.verifyObj.document_front_image = this.base64Strings[0];
        this.verifyObj.document_back_image = this.base64Strings[1];
        this.verifyObj.document_address_image = this.base64Strings[2];
        this.verifyObj.face_image = this.base64Strings[3];
        this.form.updateValueAndValidity();
        if (this.form.valid) {
            this.isLoading = true;
            this.memberService.verifyMember(this.app.getUserId(), this.app.getAccessToken(), this.verifyObj).subscribe(function (res) { return _this.afterVerify(res); });
        }
        else {
            this.isLoading = false;
            Object.keys(this.form.controls).filter(function ($0) {
                _this.form.get($0).markAsTouched({ onlySelf: true });
            });
            if (!this.verifyObj.document_front_image) {
                return;
            }
        }
    };
    VerifyComponent.prototype.setDefaultUploadMessage = function (label) {
        this.defaultUploadMessage = label;
    };
    VerifyComponent.prototype.begin = function () {
        this.didBeginVerification = true;
    };
    VerifyComponent.prototype.logout = function () {
        var _this = this;
        this.memberService.logout(this.app.getAccessToken()).subscribe(function (res) { return _this.memberService.afterLogout(); });
        return false;
    };
    VerifyComponent.prototype.afterVerify = function (res) {
        console.log(res);
        this.isLoading = false;
        if (res.status_code == "SP1") {
            var m = this.app.getMember();
            m.isShuftiproVerified = true;
            this.memberService.setLocalMemberObj(m);
            alert('You passed verification process');
            this.router.navigate(['/dashboard']);
        }
        else if (res.status_code == "SP0") {
            alert('We\'re unable to verify the account using the information you provided. Please try again.');
        }
        else {
            alert(res.message);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("placesRef"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ngx_google_places_autocomplete__["GooglePlaceDirective"])
    ], VerifyComponent.prototype, "placesRef", void 0);
    VerifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__("../../../../../src/app/verify/verify.component.html"),
            styles: [__webpack_require__("../../../../../src/app/verify/verify.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_util_util__["a" /* Util */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_services_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormBuilder */]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/wire-info/wire-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wire-info/wire-info.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid reg-container first-form\" style=\"height: 500px;\">\n\n  <div class=\"reg-image hidden-sm hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n  <div class=\"reg-form\">\n\n     <div class=\"reg-active reg-border\">\n      <h1>Wire Information</h1>\n      <hr>\n      Bank Of America<br><br>\n      <div style=\"font-size: 22px;\">\n\t      <strong>Account:</strong> 123456789<br>\n\t      <strong>Routing:</strong> 000123456\n      </div>\n          <button routerLink=\"/dashboard\"\n          style=\"margin-top: 6rem;\" class=\"btn btn-info reg-button\" id=\"continue\">\n            <p><i class=\"fa fa-arrow-circle-right\"></i>&nbsp;&nbsp;&nbsp;Continue to account</p>\n          </button>\n    </div>\n\n  </div>\n  <div class=\"reg-image2 hidden-xs\">\n    <img src=\"../../assets/Animated-Clicktool2 a.gif\">\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/wire-info/wire-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WireInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WireInfoComponent = /** @class */ (function () {
    function WireInfoComponent() {
    }
    WireInfoComponent.prototype.ngOnInit = function () {
    };
    WireInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wire-info',
            template: __webpack_require__("../../../../../src/app/wire-info/wire-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wire-info/wire-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WireInfoComponent);
    return WireInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map