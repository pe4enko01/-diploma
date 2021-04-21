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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mainScroll = function mainScroll() {\n  var topMenu = document.querySelector(\".top-menu\");\n  var topMenuList = topMenu.querySelector(\"ul\");\n  var topMenuListLi = topMenuList.querySelectorAll(\"li\");\n  topMenuListLi[0].addEventListener(\"click\", function () {\n    //alert(\"LOL\")\n    function scroll() {\n      var timiout;\n\n      if (Math.floor(window.pageYOffset) < 630) {\n        window.scrollBy(0, 10);\n        timiout = setTimeout(scroll, 1);\n        console.log(\"🚀 ~ file: mainScroll.js ~ line 13 ~ scroll ~ timiout\", window.pageYOffset);\n      } else if (Math.floor(window.pageYOffset) > 630) {\n        window.scrollBy(0, -10);\n        timiout = setTimeout(scroll, 1);\n      } else if (Math.floor(window.pageYOffset) === 630) {\n        clearTimeout(timiout);\n      }\n    }\n\n    ;\n    scroll();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainScroll);\n\n//# sourceURL=webpack://DIP/./src/modules/mainScroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("943f00cab35b0d6c50a4")
/******/ })();
/******/ 
/******/ }
);