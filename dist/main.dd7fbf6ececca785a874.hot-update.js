/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDIP"]("main",{

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector(\".accordeon\");\n  var callBack = document.getElementById(\"callback\");\n  var modalOverlay = document.querySelector(\".modal-overlay\");\n  var element = document.querySelectorAll(\".element\");\n  accordeon.addEventListener(\"click\", function (event) {\n    for (var i = 0; i < element.length; i++) {\n      if (event.target) {\n        event.target.parentElement.style = \"none\";\n      } else {\n        event.target.parentElement.style = \"block\";\n      }\n    }\n\n    if (event.target.matches('.title')) {\n      event.target.parentElement.classList.add(\"active\");\n      event.target.parentElement.childNodes[3].style.display = \"block\";\n    }\n\n    ;\n    console.log(event.target.parentElement.childNodes[3]);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://DIP/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2b187e3cde8ac2fd8071")
/******/ })();
/******/ 
/******/ }
);