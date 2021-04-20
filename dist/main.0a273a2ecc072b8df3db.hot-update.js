/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDIP"]("main",{

/***/ "./src/modules/mainScroll.js":
/*!***********************************!*\
  !*** ./src/modules/mainScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mainScroll = function mainScroll() {\n  var topMenu = document.querySelector(\".top-menu\");\n  var topMenuList = topMenu.querySelector(\"ul\");\n  var topMenuListLi = topMenuList.querySelectorAll(\"li\");\n  var position;\n  topMenuListLi[0].addEventListener(\"click\", function () {\n    //alert(\"LOL\")\n    function sayHi() {\n      window.scrollBy(0, 10);\n      setTimeout(sayHi, 10);\n    }\n\n    ;\n    sayHi();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainScroll);\n\n//# sourceURL=webpack://DIP/./src/modules/mainScroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("71250109f7cf50afa384")
/******/ })();
/******/ 
/******/ }
);