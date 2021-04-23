/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDIP"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerPopup */ \"./src/modules/headerPopup.js\");\n/* harmony import */ var _modules_mainScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainScroll */ \"./src/modules/mainScroll.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_caruselSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/caruselSlider */ \"./src/modules/caruselSlider.js\");\n/* harmony import */ var _modules_buttonServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/buttonServices */ \"./src/modules/buttonServices.js\");\n\n\n\n\n\n\n\n(0,_modules_headerPopup__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_mainScroll__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_caruselSlider__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_buttonServices__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n//# sourceURL=webpack://DIP/./src/index.js?");

/***/ }),

/***/ "./src/modules/buttonServices.js":
/*!***************************************!*\
  !*** ./src/modules/buttonServices.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar buttonServices = function buttonServices() {\n  var buttonSev = document.querySelector(\".button-services\");\n  var callBack = document.getElementById(\"callback\");\n  var callbackBtn = document.querySelector(\".callback-btn\");\n  var modalOverlay = document.querySelector(\".modal-overlay\");\n  var modalClose = document.querySelector(\".modal-close\");\n  var header = document.querySelector(\".header\");\n  var buttonServices = document.querySelectorAll(\".services-section\");\n  var sliderContainer = document.querySelector(\".slider-track\");\n  var slid = document.querySelectorAll(\".slid\");\n  buttonSev.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"callback-btn\")) {\n      callBack.style.display = \"block\";\n      modalOverlay.style.display = \"block\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonServices);\n\n//# sourceURL=webpack://DIP/./src/modules/buttonServices.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45e2939ac8283bdd1d3b")
/******/ })();
/******/ 
/******/ }
);