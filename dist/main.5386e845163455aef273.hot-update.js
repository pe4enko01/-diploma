/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDIP"]("main",{

/***/ "./src/modules/caruselSlider.js":
/*!**************************************!*\
  !*** ./src/modules/caruselSlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar caruselSlider = function caruselSlider() {\n  var sliderTrack = document.querySelector(\".slider-track\");\n  var sliderItem = document.querySelectorAll(\".slid\");\n  var prevButton = document.querySelector(\".arrow-left\");\n  var nextButton = document.querySelector(\".arrow-right\");\n  var counter = 1;\n  var size = sliderItem[0].clientWidth;\n  sliderTrack.style.transform = 'translateX(' + (-size * counter - 10) + 'px)';\n  nextButton.addEventListener(\"click\", function () {\n    sliderTrack.style.transition = \"transfotm 0.9s ease-in-out\";\n    counter++;\n    sliderTrack.style.transform = 'translateX(' + (-size * counter - 30) + 'px)';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (caruselSlider);\n\n//# sourceURL=webpack://DIP/./src/modules/caruselSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d908c6b6a364f47469f")
/******/ })();
/******/ 
/******/ }
);