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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector(\".accordeon\");\n  var element = document.querySelectorAll(\".element\");\n  var elementContent = accordeon.querySelectorAll(\".element-content\");\n  accordeon.addEventListener(\"click\", function (event) {\n    console.log(event.target.closest(\".active\"));\n\n    if (event.target.parentElement.closest(\".active\")) {\n      console.log(\"lol\");\n      event.target.parentElement.childNodes[3].style.display = \"none\";\n      event.target.parentElement.classList.remove(\"active\");\n    }\n\n    ;\n\n    if (event.target.parentElement.closest(\".active\") === null) {\n      console.log(\"lAl\");\n      element.forEach(function (item) {\n        item.classList.remove(\"active\");\n      });\n      elementContent.forEach(function (item) {\n        item.style.display = \"none\";\n      });\n      event.target.parentElement.classList.add(\"active\");\n      event.target.parentElement.childNodes[3].style.display = \"block\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://DIP/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8eed9c47c909606b8ec2")
/******/ })();
/******/ 
/******/ }
);