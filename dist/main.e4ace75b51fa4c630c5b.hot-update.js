/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDIP"]("main",{

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var topSlider = document.querySelector('.top-slider');\n  var slideDiv = topSlider.querySelectorAll(\".head-slider\");\n  slideDiv[0].style.display = \"block\";\n  slideDiv[1].style.display = \"none\";\n  slideDiv[2].style.display = \"none\";\n  var count = 0;\n  setInterval(function () {\n    slideDiv[0].style.display = \"none\";\n    slideDiv[1].style.display = \"none\";\n    slideDiv[2].style.display = \"none\";\n    slideDiv.forEach(function (item, i) {\n      if (i === count) {\n        item.style.display = \"block\";\n      }\n    });\n    count++;\n\n    if (count >= 3) {\n      count = 0;\n    }\n  }, 3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://DIP/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1d22a97fc1b2ec82215b")
/******/ })();
/******/ 
/******/ }
);