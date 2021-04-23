/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateDIP"]("main",{

/***/ "./src/modules/headerPopup.js":
/*!************************************!*\
  !*** ./src/modules/headerPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar headerPopup = function headerPopup() {\n  var callBack = document.getElementById(\"callback\");\n  var callbackBtn = document.querySelector(\".callback-btn\");\n  var modalOverlay = document.querySelector(\".modal-overlay\");\n  var modalClose = document.querySelector(\".modal-close\");\n  var header = document.querySelector(\".header\");\n  var buttonServices = document.querySelectorAll(\".services-section\");\n  var sliderContainer = document.querySelector(\".slider-track\");\n  var slid = document.querySelectorAll(\".img-wrapper\");\n  header.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"callback-btn\")) {\n      callBack.style.display = \"block\";\n      modalOverlay.style.display = \"block\";\n    }\n  });\n  modalClose.addEventListener(\"click\", function () {\n    callBack.style.display = \"none\";\n    modalOverlay.style.display = \"none\";\n  });\n  modalOverlay.addEventListener(\"click\", function () {\n    callBack.style.display = \"none\";\n    modalOverlay.style.display = \"none\";\n  });\n  slid.forEach(function (item) {\n    item.addEventListener('click', function () {\n      callBack.style.display = \"block\";\n      modalOverlay.style.display = \"block\";\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerPopup);\n\n//# sourceURL=webpack://DIP/./src/modules/headerPopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("024caf913008900ce896")
/******/ })();
/******/ 
/******/ }
);