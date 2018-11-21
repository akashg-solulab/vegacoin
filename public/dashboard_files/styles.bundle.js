webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/orange_kid.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "orange_kid.a64c326c1f8f5a2927b0.ttf";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: ok;\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/orange_kid.ttf")) + ") format(\"opentype\");\n}\n\n\n.cars-bottom {\n    position: absolute;\n    bottom: -11px;\n}\n\n\n.gradient-background-blue {\n/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#32cbf2+0,1da1e4+100 */\nbackground: #32cbf2; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\nbackground: -webkit-gradient(linear, left top, left bottom, from(#32cbf2),to(#1da1e4));\nbackground: linear-gradient(to bottom, #32cbf2 0%,#1da1e4 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#32cbf2', endColorstr='#1da1e4',GradientType=0 ); /* IE6-9 */ \n}\n\n\n.form-group {\n  margin-bottom: 30px;\n}\n\n\n.form-input-select {\n    position: absolute;\n    top: 6px;\n    background: transparent;\n    font-size: 15px;  \n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAAAXNSR0IArs4c6QAAAStJREFUKBWlUqFOxEAUZNuKCkw9P3EIDKKE5H6g/wDqVBNU24S0liDOo9CHwZO2EsMPnDh3KIKr4JK9meaG7MEB6bFJ82beezPdt7umKIqZtTY5+Mcyxjx4YRhOAN739aGWHl6WZUuYXO1rRC09DA0wmsGIT4Bn5ANWXVXVOXZlPYoIgiC4AOwGmHTUUEuNL2Fd129xHH+Aj5X7LcIgL8vyUT39jkR8379Fw4v4T5E97HXr/Rm5CZzVCPwZ5xa4eWGYrIBPcDZbP/wcTY1t275ixEPwU+XcCKMbmNy7OeKt0VSMougagrm4InOsibtxp1Gaph1El2jsb2QjsMyx5hoIfxtNhaZpFhjxCPyYOZjcYaSp6l/jzh2pCTfDF8+Xv9xglYbHPM8Tfn8p13Y+TwoHscCZAAAAAElFTkSuQmCC');\n    background-size: 8px;\n    background-repeat: no-repeat;\n    background-position: 0 8px;\n    padding-left: 12px;\n    font-weight: 300;\n    width: 70px;\n    border-right: thin solid #c5c5c5 !important;\n    border-radius: 0;        \n}\n\n\n.form-error {\n    /*margin-bottom: 50px;*/\n    text-align: left;\n    top: 34px;\n    /*position: absolute;*/\n    width: 100%;\n    font-size: 12px;  \n    line-height: 15px;\n}\n\n\n.btn-group-small button{\n    padding: 10px 20px !important;\n    font-size: 14px !important;  \n}\n\n\nbutton:focus, select:focus {\n  outline:none !important;\n}\n\n\n.form-group input {\n  margin-bottom: 10px;\n}\n\n\n.form-group.form-group-error .remove_red_eye {\n  right: 20px !important;\n}\n\n\n.form-group.form-group-error .form-control.style1 {\n  border-bottom: thin solid red !important;\n}\n\n\n.form-group.form-group-error .top-label {\n  /*color: red !important;*/\n}\n\n\n.form-group.form-group-error .material-icons-error {\n  display: block !important;\n  color: red;\n}\n\n\n.no-padding-right-odd.row .col:nth-child(odd) {\n  padding-right: 0;\n}\n\n\n.form-group .top-label {\n    font-size: 15px;\n    position: absolute;\n    top: 6px; \n    display: none; \n}\n\n\n.form-group i.material-icons-error {\n    position: absolute;\n    z-index: 1000;\n    top: 8px;\n    right: 0;\n    font-size: 16px;\n    display: none;\n}\n\n\n.form-control.style1 {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 0;\n  border-bottom: thin solid #e2e2e2;\n  padding-left: 0;\n  padding-right: 0; \n  font-size: 16px;\n  font-weight: 500;  \n  color: #000; \n}\n\n\n.form-control.style1:disabled {\n  background: transparent;\n}\n\n\n.form-group {\n  position: relative;\n}\n\n\n.form-control.style1:focus {\n  border-bottom-color: #28CAE8;\n}\n\n\n.form-control.style1::-webkit-input-placeholder {\n  color: #666;\n  font-weight: 300;\n}\n\n\n.form-control.style1:-ms-input-placeholder {\n  color: #666;\n  font-weight: 300;\n}\n\n\n.form-control.style1::-ms-input-placeholder {\n  color: #666;\n  font-weight: 300;\n}\n\n\n.form-control.style1::placeholder {\n  color: #666;\n  font-weight: 300;\n}\n\n\n.form-group .active-border {\n    display: block;\n    width: 100%;\n    height: 2px;\n    background: #29a6d3;\n    position: absolute;\n    top: 32px;\n    display: none;\n}\n\n\n.nmb {\n  margin-bottom: 0 !important;\n}\n\n\n.form-toggler-container app-form-toggler:last-child .bb {\n  border-bottom: 0;\n}\n\n\n.form-toggler-content {\n  background-color: #f7f7f7;\n}\n\n\n.form-toggler-content input {\n    width: 100%;\n    padding: 7px 12px;\n    font-size: 16px;\n}\n\n\n.badge-danger {\n  background-color: red;\n  color: #FFF;\n}\n\n\n.p-rel {\n  position: relative;\n}\n\n\n.hoverable-row:hover {\n  background: #f7fafb;\n}\n\n\n.full-link {\n    position: absolute;\n    left: 0;\n    z-index: 9000;\n    right: 0;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n}\n\n\n.title-bb {\n    display: block;\n    padding: 15px;\n    font-weight: bold;\n}\n\n\n.mw-900 {\n  max-width: 900px;\n}\n\n\n.sidenav-2 > li > a {\n  display: block;\n  padding: 5px 12px;\n  color: #000;\n}\n\n\n.sidenav-2 > li > a > i {\n    font-size: 16px;\n    top: 2px;\n    position: relative;\n}\n\n\n.sidenav-2 > li > a.active-link {\n  background: #1fa7d721;\n}\n\n\n.npr {\n  padding-right: 0;\n}\n\n\n.npl {\n  padding-left: 0;\n}\n\n\n.br {\n  border-right: thin solid #dadada;\n}\n\n\n.bb {\n  border-bottom: thin solid #dadada;\n}\n\n\n.bl {\n  border-left: thin solid #dadada;\n}\n\n\n.search-input {\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    border-radius: 0;\n    border: thin solid #cacaca;\n    padding: 7px 15px;\n    border-radius: 20px;\n    margin-top: 11px;\n    position: relative;\n    min-width: 350px;\n    font-size: 12px;\n    outline: none;\n    -webkit-box-shadow: 1px 1px 1px inset rgba(0,0,0,0.1);\n            box-shadow: 1px 1px 1px inset rgba(0,0,0,0.1);\n    position: relative;\n    top: -5px;\n}\n\n\n.search-input:focus {\n  border-color: #29a6d3;\n}\n\n\n.search-input:focus {\n  outline: none;\n}\n\n\n.btn.btn-lg.btn-primary {\n    font-size: 20px !important;\n    padding-left: 40px !important;\n    padding-right: 40px !important;\n    padding-top: 15px;\n    padding-bottom: 15px; \n}\n\n\n.btn-lg-outline {\n    padding: 10px 12px !important;\n    border-radius: 40px !important;\n}\n\n\n.btn.active, .btn:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n\n.dash-logo {\n    margin-top: 19px;\n}\n\n\n.prim-btn-outline {\n    border: thin solid #37a2cd;\n    background: transparent;\n    border-radius: 23px;\n    color: #000;\n}\n\n\n.prim-btn-outline:hover {\n  background: #37a2cd;\n  color: #FFF;\n}\n\n\n.btn-lg-txt {\n  font-size: 22px;\n}\n\n\n.fixed-header {\n    position: fixed;\n    z-index: 1000;\n    background: #FFF;\n    -webkit-box-shadow: 0 2px 15px 0 rgba(0,0,0,0.15);\n            box-shadow: 0 2px 15px 0 rgba(0,0,0,0.15);\n    height: 71px;\n}\n\n\n.fixed-header .btn.btn-primary {\n    padding-left: 30px;\n    padding-right: 30px;\n    font-size: 15px;\n    padding-top: 13px;\n    padding-bottom: 13px;\n}\n\n\n.fixed-header a {\n  color: #000;\n}\n\n\n.fixed-header i {\n  color: #bdbdbd;\n}\n\n\n.main-nav {\n  margin-right: 0px;\n}\n\n\n.main-nav .dropdown-menu {\n  padding: 0;\n}\n\n\n.main-nav .list-inline-item a{\n  display: block;\n\n}\n\n\n.main-nav .list-inline-item > a{\n  padding: 13px 5px;\n}\n\n\n.main-nav .dropdown-menu a {\n  display: block;\n  padding: 10px;\n  border-bottom: thin solid #dedede;\n}\n\n\n.main-nav .dropdown-menu a:last-child {\n  border-bottom: none;\n}\n\n\n.full-width-list {\n  width: 100%;\n  display: table;\n}\n\n\n.full-width-list li {\n  display: table-cell;\n}\n\n\n.list-with-border li {\n  border-right: thin solid #dadada;\n}\n\n\n.list-with-border li:last-child {\n  border-right: none;\n}\n\n\n.text-muted {\n  color: #b5b5b5;\n}\n\n\n.break-txt {\n  word-break: break-all;\n}\n\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n\n* {\n  margin: 0;\n  padding: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n\nh1,h2,h3,h4,h5,h6,p,ul {\n  margin: 0;\n  padding: 0;\n}\n\n\na {\n  text-decoration: none !important;\n}\n\n\ninput[type=\"submit\"] {\n  border: none;\n}\n\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  /* background-color: #F5F5F5; */\n}\n\n\n.btn-group.btn-group-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n\n.btn-group.btn-group-block button{\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n\n.btn.btn-primary {\n  border-radius: 5px;\n  background: #1db1e6;\n  border: none; \n  font-size: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 18px;\n  padding-right: 18px;\n  -webkit-box-shadow: 1px 1px 50px rgba(0,0,0,0.2);\n          box-shadow: 1px 1px 50px rgba(0,0,0,0.2);\n}\n\n\n.btn.btn-primary.btn-primary-i {\n  padding-right: 55px;\n}\n\n\n.btn.btn-primary.btn-primary-i i{\n    position: absolute;\n    font-size: 40px;\n    margin-top: -8px;\n    margin-left: 6px;  \n}\n\n\n.btn-primary.active {\n  background-color: #082036 !important;\n  background-image: none;\n}\n\n\n.active:after {\n  content: \"\" !important;\n}\n\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n\n.text-danger {\n  color: red;\n}\n\n\ninput.has-danger {\n  border: thin solid red !important;\n}\n\n\ninput[type=\"radio\"] {\n  margin: 0 5px 0 0;\n  vertical-align: middle;\n}\n\n\ninput[type=\"checkbox\"] {\n  margin: 0 5px 0 0;\n}\n\n\n.table-responsive {\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n\n\ntable {\n  width: 100%;\n}\n\n\ntable tbody td {\n  text-align: center;\n  white-space: nowrap;\n}\n\n\n.reg-form input[type=\"text\"],.reg-form input[type=\"email\"],.reg-form input[type=\"password\"] {\n  background: transparent none repeat scroll 0 0;\n  border-color: -moz-use-text-color -moz-use-text-color #2cb8d1;\n  border-radius: 5px;\n  border-style: none;\n  -webkit-box-shadow: 0px 0px 3px #D9D9D9;\n          box-shadow: 0px 0px 3px #D9D9D9;\n  color: #2cb8d1;\n  font-family: open sans;\n  font-size: 14px;\n  height: 40px;\n  outline: medium none;\n  padding: 0 11px 0 55px;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n  width: 100%;\n}\n\n\n.reg-form input[type=\"text\"]:active,.reg-form input[type=\"email\"]:active,.reg-form input[type=\"password\"]:active,.reg-form input[type=\"text\"]:focus,.reg-form input[type=\"email\"]:focus,.reg-form input[type=\"password\"]:focus {\n  border-bottom: 4px solid #2cb8d1;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n}\n\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  opacity: 1;\n}\n\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  opacity: 1;\n}\n\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  opacity: 1;\n}\n\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  opacity: 1;\n}\n\n\n/* Navbar and Language Bar */\n\n\n.indextopsection {\n  background: #1db8d3 none repeat scroll 0 0;\n}\n\n\n.language {\n  text-align: right;\n}\n\n\n.language button {\n  font-family: 'Montserrat', sans-serif;\n  background: transparent none repeat scroll 0 0;\n  border: medium none;\n  color: #fff;\n  font-size: 14px;\n  padding: 5px 0;\n}\n\n\nheader {\n  top: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n\nheader .navbar {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border-color: -moz-use-text-color -moz-use-text-color #1db8d3;\n  border-radius: 0;\n  border-style: none none solid;\n  border-width: medium medium 1px;\n  margin: 0;\n  min-height: auto;\n}\n\n\n.navbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n\n#myNavbar {\n  margin-left: 10px;\n}\n\n\n#myNavbar a {\n  color: #1db8d3;\n  font-size: 20px;\n  font-weight: 300;\n  margin: 0px;\n}\n\n\n#myNavbar a:hover {\n  background-color: #1db8d3 !important;\n}\n\n\nheader .navbar-nav > li {\n  padding: 0;\n}\n\n\nheader .navbar-nav > li > a {\n  font-family: \"Montserrat\",sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0 0 0 5px;\n  padding: 26px 12px;\n  text-transform: capitalize;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n}\n\n\nheader .navbar-nav > li > a:hover {\n  color: #fff !important;\n  -webkit-transition: .3s;\n  transition: .3s;\n}\n\n\nheader .navbar-right {\n  margin: 0;\n}\n\n\nheader .navbar-collapse {\n  padding: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n\nheader .navbar-header a {\n  display: inline-block;\n}\n\n\nheader .navbar-header a img {\n  display: inline-block;\n}\n\n\n.nav-logo {\n  height: 60px;\n  width: 60px;\n}\n\n\n.slider {\n  width: 500px;\n  background: rgba(0,0,0,0);\n}\n\n\n.top-section {\n  overflow: hidden;\n  word-wrap: break-word;\n  width: 100vw;\n}\n\n\n/* Non-index page classes and unused classes */\n\n\n/* faq content */\n\n\n.videdes span {\n  bottom: 0;\n  height: 349px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 475px;\n}\n\n\n.videdes span img {\n  padding: 140px 0 0;\n}\n\n\n.videdes {\n  position: absolute;\n}\n\n\n.videdes  img {\n  display: inline-block;\n}\n\n\n.videdes {\n  position: relative;\n  text-align: center;\n  margin-top: 12px;\n  padding: 15px;\n}\n\n\n/* core feature */\n\n\n.title {\n  color: #174a7c;\n  display: inline-block;\n  font-size: 26px;\n  font-weight: bold;\n  text-transform: uppercase;\n  position: relative;\n}\n\n\n.indresgsec .btn-info {\n  margin: 25px 0 0;\n}\n\n\n.navbar-shadow {\n  -webkit-box-shadow: 0px 3px 5px -2px #a9a9a9;\n          box-shadow: 0px 3px 5px -2px #a9a9a9;\n}\n\n\n.navbar-xtra-pad {\n  padding: 0px 15px;\n}\n\n\n.icon-bar {\n  background-color: #fff;\n}\n\n\n.featuresdes {\n  background-color: #2cb8d2;\n  padding: 48px 0;\n  margin-bottom: -3px;\n  z-index: 6;\n  position: relative;\n}\n\n\n.title::after {\n  bottom: 0;\n  content: \"\";\n  height: 27px;\n  margin: auto;\n  position: absolute;\n  right: -41px;\n  top: 10px;\n  width: 33px;\n}\n\n\n.text-right {\n  text-align: right;\n}\n\n\ntable tbody tr td {\n  background: #fff none repeat scroll 0 0;\n  border-bottom: 1px solid #eaeaea;\n  color: #000;\n  font-size: 13px;\n  font-weight: 400;\n  padding: 10px 32px;\n  text-align: left;\n  text-transform: capitalize;\n  white-space: nowrap;\n}\n\n\n.table-responsive {\n  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\n}\n\n\n.slider_bar {\n  display: inline-block;\n  padding: 0 0 39px;\n  width: 59%;\n  position: relative;\n}\n\n\n/* Countdown */\n\n\n.timer_content {\n  width: 100%;\n  display: inline-block;\n}\n\n\n.slider-track-high {\n  background: #ebebeb;\n}\n\n\n.slider_bar .slider-handle {\n  background: #0080ff none repeat scroll 0 0;\n  border: 0 solid transparent;\n  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\n          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\n  -webkit-filter: none;\n          filter: none;\n  height: 24px;\n  position: absolute;\n  top: 0;\n  width: 24px;\n}\n\n\n.slider_bar .slider {\n  margin-bottom: 10px;\n}\n\n\ntd img {\n  display: inline-block !important;\n  margin: 0 5px 0 0;\n}\n\n\n.reginr {\n  margin: 0 0 21px 0;\n  position: relative;\n}\n\n\n.chckbx {\n  display: block;\n  margin: 14px 0;\n}\n\n\n.chckbx p {\n  color: #999999;\n  display: inline-block;\n  font-family: open sans;\n  font-size: 14px;\n  text-transform: capitalize;\n}\n\n\n.chckbx span a {\n  color: #0080ff;\n  float: right;\n  font-family: open sans;\n}\n\n\n.reginr > span {\n  bottom: 0;\n  height: 40px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  top: 0;\n}\n\n\n.reginr > span i {\n  background: #2cb8d1 none repeat scroll 0 0;\n  border-radius: 5px 0 0 5px;\n  color: #fff;\n  display: inline-block;\n  font-size: 19px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  width: 40px;\n}\n\n\n/* Media Queries */\n\n\n@media only screen and (max-width: 1200px) {\n  .navbar-collapse {\n    border-bottom: medium none;\n    border-top: medium none;\n    height: auto !important;\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n\n@media only screen and (max-width: 767px) {\n  .navbar-toggle {\n    background-color: #1db8d3;\n    border-radius: 4px;\n    margin-top: 18px;\n  }\n\n  header .navbar-nav > li > a {\n    padding: 6px 0;\n  }\n\n  header {\n    position: relative;\n    top: 0;\n  }\n\n  .banners {\n    padding: 0 0 35px;\n  }\n\n  .referral-container {\n    margin-top: -35px !important;\n  }\n\n  .mobile-margin {\n    margin-top: 90px !important;\n  }\n}\n\n\n@media only screen and (max-width: 731px) {\n  .reg-border {\n    width: 90vw;\n  }\n}\n\n\n@media only screen and (max-width:600px) {\n  .chckbx span a {\n    float: none;\n    display: block;\n    padding: 10px 0 0 0;\n  }\n\n  .navbar-collapse {\n    text-align: center;\n  }\n}\n\n\n/*Register User CSS*/\n\n\nbody {\n  font-family: 'Montserrat' !important;\n}\n\n\n.reg-container {\n/*   display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; */\n  text-align: center;\n  margin-top: 20px;\n  overflow: hidden;\n  min-height: calc(100vh - 114px);\n  height: 100%;\n  position: relative;\n}\n\n\n.reg-container h1 {\n  color: #24537f;\n}\n\n\n.reg-container h3 {\n  color: #999999;\n}\n\n\n.reg-border {\n  border: 1px solid #E6E6E6;\n  border-radius: 10px;\n  padding: 20px;\n  -webkit-box-shadow: 1px 1px 3px #F3F3F3;\n          box-shadow: 1px 1px 3px #F3F3F3;\n  width: 40vw;\n  position: absolute;\n  right: 30%;\n}\n\n\n#reg-form1 {\n  text-align: left !important;\n}\n\n\n#reg-form1 h1 {\n  text-align: center !important;\n}\n\n\n#reg-form1 h3 {\n  text-align: center !important;\n}\n\n\n.reg-form > div {\n  margin-top: 30px;\n}\n\n\n.reg-form .chckbx {\n  margin: 10px;\n}\n\n\n.reg-button {\n  width: 100%;\n  height: 50px;\n  background-color: #2cb8d1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: -20px;\n  -webkit-box-shadow: 1px 1px 2px #CCCCCC;\n          box-shadow: 1px 1px 2px #CCCCCC;\n  color: white;\n  border: none !important;\n}\n\n\n.reg-button:hover {\n  border: none;\n  cursor: pointer;\n}\n\n\n.sign-in {\n  background-color: #24537f !important;\n  border: none;\n}\n\n\n.sign-in:hover {\n  background-color: #1D4164 !important;\n}\n\n\n.sign-in:active {\n  background-color: #173451 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n\n.back {\n  background-color: #fd8a66 !important;\n  border: none;\n}\n\n\n.back:hover {\n  background-color: #E77E5F !important;\n}\n\n\n.back:active {\n  background-color: #C56C52 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n\n.back3 {\n  background-color: #F2C442 !important;\n  border: none;\n}\n\n\n.back3:hover {\n  background-color: #E1B63E !important;\n}\n\n\n.back3:active {\n  background-color: #B69433 !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n\n.reg-button:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n\n\n.reg-active {\n  opacity: 1;\n  -webkit-animation: activeReg 0.6s;\n          animation: activeReg 0.6s;\n  transform: translateX(0px);\n  -moz-transform: translateX(0px);\n  -webkit-transform: translateX(0px);\n  -o-transform: translateX(0px);\n  -ms-transform: translateX(0px);\n}\n\n\n.reg-image {\n  overflow: hidden;\n  margin-top: 80px;\n  position: absolute;\n  left: 0;\n}\n\n\n.reg-image img {\n  height: 450px;\n  margin-top: -120px;\n  margin-right: -520px;\n}\n\n\n.reg-image2 {\n  overflow: hidden;\n  margin-top: 80px;\n  position: absolute;\n  right: 0;\n}\n\n\n.reg-image2 img {\n  height: 450px;\n  margin-top: -50px;\n  margin-left: -520px;\n}\n\n\n@media only screen and (max-width: 992px) {\n  .reg-border {\n    right: 50%;\n  }\n}\n\n\n@media only screen and (max-width: 767px) {\n  .reg-border {\n    width: 80vw;\n    right: 10%;\n  }\n}\n\n\n#identification-form .reg-form div {\n  margin-top: 0;\n}\n\n\n#sign-up2 {\n  margin-top: 20px;\n}\n\n\n/* Dashboard */\n\n\n.member-container {\n  background-color: #F5F5F5;\n  min-height: 100vh;\n}\n\n\n.mem-box {\n  border: 1px solid #CCCCCC;\n  padding: 20px;\n  margin: 40px;\n  background-color: white;\n}\n\n\n.mem-box h3 {\n  color: #24537f;\n}\n\n\n.mem-box h1 {\n  color: #4C4C4C;\n}\n\n\n.mem-logo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n\n.lower-mem-section {\n  margin: 0 40px;\n}\n\n\n.mem-box-wide {\n  border: 1px solid #CCCCCC;\n  padding: 20px;\n  background-color: white;\n  font-size: 14px;\n}\n\n\n.mem-box-wide2 {\n  padding: 20px;\n  background-color: #fd8a66;\n  color: white;\n  font-weight: 600;\n  font-size: 12px;\n}\n\n\n.mem-form {\n  border: 1px solid #CCCCCC;\n  padding: 20px;\n  background-color: white;\n}\n\n\n.member-container h4 {\n  margin-bottom: 7px;\n}\n\n\n.mem-form div {\n  display: inline-block;\n}\n\n\n.mem-form input {\n  background-color: white;\n}\n\n\n.mem-form h5 {\n  margin-bottom: 5px;\n}\n\n\n.mem-button {\n  height: 60px;\n  width: 250px;\n  border-radius: 30px;\n  background-color: #fd8a66;\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 auto;\n  -webkit-box-shadow: 1px 1px 1px #CCCCCC;\n          box-shadow: 1px 1px 1px #CCCCCC;\n}\n\n\n.mem-reginr {\n  width: 100%;\n}\n\n\n.mem-button:hover {\n  cursor: pointer;\n  background-color: #DB785A;\n}\n\n\n.mem-button:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background-color: #B9664D;\n}\n\n\n.mem-button h3 {\n  color: white;\n}\n\n\n.mem-button h4 {\n  color: white;\n  margin: auto;\n}\n\n\n/* Password */\n\n\n.password-form {\n  width: 60vw;\n  max-width: 1000px;\n  border-radius: 5px;\n  background-color: white;\n  margin: 30px auto;\n  padding: 20px;\n  -webkit-box-shadow: 1px 1px 3px 1px #CCCCCC;\n          box-shadow: 1px 1px 3px 1px #CCCCCC;\n  text-align: center;\n}\n\n\n/* Transactions */\n\n\n.member-container table {\n  width: 80vw;\n  max-width: 1400px;\n  margin: 40px auto;\n}\n\n\n.member-container th {\n  background-color: #24537f;\n  color: white;\n  padding: 5px;\n}\n\n\n.member-container td {\n  padding: 5px;\n}\n\n\n.member-container tr {\n  border: 1px solid #CCCCCC;\n}\n\n\n.status {\n  border-radius: 3px;\n  height: 30px;\n  width: 100px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: white;\n  font-weight: 600;\n}\n\n\n.pending {\n  background-color: #fbc943;\n}\n\n\n.accepted {\n  background-color: #2cb8d1;\n}\n\n\n.rejected {\n  background-color: #fd8a66;\n}\n\n\n/* Style the buttons that are used to open and close the accordion panel */\n\n\n.accordion {\n  background-color: #24537f;\n  color: white;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  text-align: left;\n  border: none;\n  outline: none;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  font-family: 'Montserrat', 'Arial';\n}\n\n\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n\n\n.active,.accordion:hover {\n  background-color: #317AC5;\n}\n\n\n/* Style the accordion panel. Note: hidden by default */\n\n\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.2s ease-out;\n  transition: max-height 0.2s ease-out;\n  font-family: 'Montserrat', 'Arial';\n  display: none;\n}\n\n\n.accordion:after {\n  content: '\\F067';\n  /* Unicode character for \"plus\" sign (+) */\n  font-family: FontAwesome;\n  font-size: 13px;\n  color: white;\n  float: right;\n  margin-left: 5px;\n}\n\n\n.active:after {\n  content: \"\\F068\";\n  /* Unicode character for \"minus\" sign (-) */\n}\n\n\n.panel ul {\n  list-style-type: none;\n}\n\n\n.panel li {\n  border-bottom: 1px solid #CCCCCC;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 5px;\n}\n\n\n.panel li div {\n  margin: 5px;\n}\n\n\n/* Media Queries */\n\n\n@media only screen and (max-width: 767px) {\n  .member-container {\n    margin-top: -33px;\n  }\n\n  .mem-box {\n    margin: 20px auto;\n    width: 90vw;\n  }\n\n  .lower-mem-section {\n    margin: 0 auto;\n    width: 90vw;\n  }\n\n  .password-form {\n    width: 90vw;\n  }\n}\n\n\n.checkmark {\n    position: absolute;\n    top: 2px;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n}\n\n\n.checkcontainer  {\n    width: 100%;\n    position: relative;\n    padding-left: 57px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 14px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    display: block;\n    font-weight: normal;\n    color: #000;\n}\n\n\n.checkcontainer label {\n  font-weight: normal;\n  font-size: 12px;\n}\n\n\n.checkcontainer input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n\n.checkcontainer input:checked ~ .checkmark {\n    background-color: #2abded;\n}\n\n\n.checkcontainer input:checked ~ .checkmark:after {\n    display: block;\n}\n\n\n.checkcontainer .checkmark:after {\n    left: 10px;\n    top: 6px;\n    width: 7px;\n    height: 12px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n\n.bx-wrapper-full {\n  top: 36%;\n  z-index: 5;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  background: transparent;\n  border: none;\n  position: relative;\n  height: 20%;\n}\n\n\n.bx-wrapper-full .bx-viewport {\n  height: 100% !important;\n}\n\n\n.bx-wrapper-full .bx-viewport .slider {\n  height: 100% !important;\n}\n\n\n.new-yellowbox {\n  background-color: #feca40;\n  border: 3px solid #24537f;\n  border-radius: 6px;\n  height: 100%;\n  width: 18vw !important;\n  margin: 0 1vw;\n  z-index: 4;\n  text-align: center;\n}\n\n\n.new-yellowbox > div {\n    font-size: 3.8vw;\n    line-height: 3.8vw;\n    width: 100%;\n    margin-top: 4%;\n    font-weight: bold;\n    color: #24537f;\n}\n\n\n/* @media (max-width: 575.98px) {\n  .new-yellowbox > div {\n    font-size: 50px;\n    line-height: normal;\n  }\n}\n\n\n@media (max-width: 767.98px) {\n  .new-yellowbox > div {\n    font-size: 30px;\n  }\n}\n\n\n@media (max-width: 991.98px) {\n  .new-yellowbox > div {\n    font-size: 30px;\n  }\n}\n\n\n@media (max-width: 1199.98px) {\n  .new-yellowbox > div {\n    font-size: 30px;\n    line-height: normal;\n  }\n} */\n\n\n.bx-wrapper-small {\n    z-index: 10000;\n    position: relative;\n}\n\n\n.new-yellowbox h2 {\n  color: #24537f;\n}\n\n\n.sc {\n  color: #feca40;\n  height: 8vw;\n  width: 5vw;\n  line-height: 2.2vw;\n  z-index: 5;\n  text-align: center;\n  font-size: 2vw;\n  font-family: ok;\n}\n\n\n.sc > div {\n  margin-top: 14%;\n}\n\n\n.scBottom {\n  color: #feca40;\n  width: 5vw;\n  height: 3vw;\n  z-index: 4;\n  text-align: center;\n  font-size: 2vw;\n  font-family: ok;\n  line-height: 2.2vw;\n}\n\n\n.scBottom > div {\n  width: 100%;\n  margin-top: 1%;\n}\n\n\n.sliderWindowBottom {\n  /*top: 43%;*/\n}\n\n\n.bx-wrapper-bottom {\n    position: absolute;\n    z-index: 1000;\n    top: 70%;\n    left: 0;\n    right: 0;\n}\n\n\n.bx-wrapper-bottom .bx-viewport {\n  height: auto !important;\n}\n\n\n.nrp {\n  padding-right: 0;\n}\n\n\n.nlp {\n  padding-left: 0;\n}\n\n\n@media (max-width: 575.98px) {\n  .padding-right-mobile {\n    padding-right: 15px;\n  }\n  .padding-left-mobile {\n    padding-left: 15px;\n  }\n}\n\n\n@media (max-width: 767px) {\n  .scBottom {\n    font-size: 5vw;\n    height: 9vw;\n  } .scBottom > div {\n    margin-top: 6%;\n  } .sc {\n    line-height: 6vw;\n    height: 23vw;\n    font-size: 7vw !important;\n  } .new-yellowbox {\n    width: 54vw !important;\n    height: 100% !important;\n  } .new-yellowbox > div {\n    font-size: 10vw;\n    line-height: 10vw;\n  }\n}\n\n\n.milestone-gear {\n  pointer-events: none;\n  -o-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  left: 0;\n  right: 0;\n  margin: auto;\n  top: 73%;\n  position: absolute;\n  width: 30%;\n  z-index: 6;\n}\n\n\n.brand-color-bg {\n  background-color: #32afe0;\n  color: #FFF;\n}\n\n\n.brand-color-txt {\n  color: #36A2CD;\n}\n\n\n.timeline-row .timeline-section{\n  border-left: thin solid #8BD0EC;\n}\n\n\n.timeline-row .timeline-section:first-child {\n  border-left: none;\n}\n\n\n.timeline-row .timeline-section-top {\n  border-bottom: 7px solid #FFF;\n}\n\n\n.timeline-row .timeline-section-bottom {\n  color: #8BD0EC;\n  font-weight: bold;\n}\n\n\n.timeline-row .timeline-section-top,\n.timeline-row .timeline-section-bottom {\n  padding: 10px 20px;\n}\n\n\n.white-bg {\n  background-color: #FFF;\n}\n\n\n.white-bg.white-bg-shadow {\n  -webkit-box-shadow: 0px 1px 50px rgba(57, 133, 183, 0.15);\n          box-shadow: 0px 1px 50px rgba(57, 133, 183, 0.15);\n}\n\n\n.slidecontainer {\n    width: 100%; /* Width of the outside container */\n}\n\n\n/* The slider itself */\n\n\n.rslider {\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 20px;\n    background: #d3d3d3;\n    outline: none;\n    opacity: 0.7;\n    -webkit-transition: .2s;\n    -webkit-transition: opacity .2s;\n    transition: opacity .2s;\n}\n\n\n/* Mouse-over effects */\n\n\n.rslider:hover {\n    opacity: 1; /* Fully shown on mouse-over */\n}\n\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n\n\n.rslider::-webkit-slider-thumb {\n    -webkit-appearance: none; /* Override default look */\n    appearance: none;\n    width: 25px; /* Set a specific slider handle width */\n    height: 25px; /* Slider handle height */\n    background: #37a2cd; /* Green background */\n    cursor: pointer; /* Cursor on hover */\n    border-radius: 50%;\n}\n\n\n.rslider::-moz-range-thumb {\n    width: 25px; /* Set a specific slider handle width */\n    height: 25px; /* Slider handle height */\n    background: #37a2cd; /* Green background */\n    cursor: pointer; /* Cursor on hover */\n    border-radius: 50%;\n}\n\n\n.table-row {\n  display: table;\n}\n\n\n.table-row .col {\n  display: table-cell;\n  float: none;\n}\n\n\n.truncate-250 {\n  width: 250px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n\n.truncate-150 {\n  width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map