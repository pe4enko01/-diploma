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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerPopup */ \"./src/modules/headerPopup.js\");\n/* harmony import */ var _modules_mainScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainScroll */ \"./src/modules/mainScroll.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_caruselSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/caruselSlider */ \"./src/modules/caruselSlider.js\");\n/* harmony import */ var _modules_buttonServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/buttonServices */ \"./src/modules/buttonServices.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n\n\n\n\n\n\n\n\n(0,_modules_headerPopup__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_mainScroll__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_caruselSlider__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_buttonServices__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n//# sourceURL=webpack://DIP/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector(\".accordeon\");\n  var callBack = document.getElementById(\"callback\");\n  var modalOverlay = document.querySelector(\".modal-overlay\");\n  accordeon.addEventListener(\"click\", function (event) {\n    if (event.target.classList.contains('element')) {\n      event.target.classList.add(\"active\");\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://DIP/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/buttonServices.js":
/*!***************************************!*\
  !*** ./src/modules/buttonServices.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar buttonServices = function buttonServices() {\n  var buttonSev = document.querySelector(\".button-services\");\n  var callBack = document.getElementById(\"callback\");\n  var modalOverlay = document.querySelector(\".modal-overlay\");\n  buttonSev.addEventListener(\"click\", function (e) {\n    callBack.style.display = \"block\";\n    modalOverlay.style.display = \"block\";\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonServices);\n\n//# sourceURL=webpack://DIP/./src/modules/buttonServices.js?");

/***/ }),

/***/ "./src/modules/caruselSlider.js":
/*!**************************************!*\
  !*** ./src/modules/caruselSlider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar caruselSlider = function caruselSlider() {\n  var sliderTrack = document.querySelector(\".slider-track\");\n  var sliderItem = document.querySelectorAll(\".slid\");\n  var prevButton = document.querySelector(\".arrow-left\");\n  var nextButton = document.querySelector(\".arrow-right\");\n  var counter = 2;\n  var size = sliderItem[0].clientWidth + 10;\n  sliderTrack.style.transform = 'translateX(' + -size * counter + 'px)';\n  window.addEventListener('resize', function () {\n    size = sliderItem[0].clientWidth + 10;\n    sliderTrack.style.transform = 'translateX(' + -size * counter + 'px)';\n  }, false);\n  nextButton.addEventListener(\"click\", function () {\n    if (counter >= sliderItem.length - 3) return;\n    sliderTrack.style.transition = 'transfotm 0.5s , ease-in-out 0.5s';\n    counter++;\n    sliderTrack.style.transform = 'translateX(' + -size * counter + 'px)';\n  });\n  prevButton.addEventListener(\"click\", function () {\n    if (counter <= 1) return;\n    sliderTrack.style.transition = \"transfotm 0.5s , ease-in-out 0.5s\";\n    counter--;\n    sliderTrack.style.transform = 'translateX(' + -size * counter + 'px)';\n  });\n  sliderTrack.addEventListener(\"transitionend\", function () {\n    if (sliderItem[counter].id === \"firstClone\") {\n      sliderTrack.style.transition = \"none\";\n      counter = 2;\n      sliderTrack.style.transform = 'translateX(' + -size * counter + 'px)';\n    }\n\n    ;\n\n    if (sliderItem[counter].id === \"lastClone\") {\n      sliderTrack.style.transition = \"none\";\n      counter = 7;\n      sliderTrack.style.transform = 'translateX(' + -size * counter + 'px)';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (caruselSlider);\n\n//# sourceURL=webpack://DIP/./src/modules/caruselSlider.js?");

/***/ }),

/***/ "./src/modules/headerPopup.js":
/*!************************************!*\
  !*** ./src/modules/headerPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar headerPopup = function headerPopup() {\n  var callBack = document.getElementById(\"callback\");\n  var callbackBtn = document.querySelector(\".callback-btn\");\n  var modalOverlay = document.querySelector(\".modal-overlay\");\n  var modalClose = document.querySelector(\".modal-close\");\n  var header = document.querySelector(\".header\");\n  var buttonServices = document.querySelectorAll(\".services-section\");\n  var sliderContainer = document.querySelector(\".slider-track\");\n  var slid = document.querySelectorAll(\".slid\");\n  header.addEventListener(\"click\", function (e) {\n    if (e.target.classList.contains(\"callback-btn\")) {\n      callBack.style.display = \"block\";\n      modalOverlay.style.display = \"block\";\n    }\n  });\n  modalClose.addEventListener(\"click\", function () {\n    callBack.style.display = \"none\";\n    modalOverlay.style.display = \"none\";\n  });\n  modalOverlay.addEventListener(\"click\", function () {\n    callBack.style.display = \"none\";\n    modalOverlay.style.display = \"none\";\n  });\n  slid.forEach(function (item) {\n    item.addEventListener('click', function () {\n      callBack.style.display = \"block\";\n      modalOverlay.style.display = \"block\";\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerPopup);\n\n//# sourceURL=webpack://DIP/./src/modules/headerPopup.js?");

/***/ }),

/***/ "./src/modules/mainScroll.js":
/*!***********************************!*\
  !*** ./src/modules/mainScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar mainScroll = function mainScroll() {\n  var topMenu = document.querySelector(\".top-menu\");\n  var topMenuList = topMenu.querySelector(\"ul\");\n  var topMenuListLi = topMenuList.querySelectorAll(\"li\");\n  var up = document.querySelector(\".up\");\n  topMenuListLi[0].addEventListener(\"click\", function () {\n    var scroll = function scroll() {\n      var timiout;\n\n      if (Math.floor(window.pageYOffset) <= 625) {\n        window.scrollBy(0, 11);\n        timiout = setTimeout(scroll, 1);\n      } else if (Math.floor(window.pageYOffset) >= 645) {\n        window.scrollBy(0, -11);\n        timiout = setTimeout(scroll, 1);\n      } else if (Math.floor(window.pageYOffset) > 625 && Math.floor(window.pageYOffset) < 645) {\n        clearTimeout(timiout);\n      }\n    };\n\n    scroll();\n  });\n  topMenuListLi[1].addEventListener(\"click\", function () {\n    var scroll = function scroll() {\n      var timiout;\n      var offset = 3600;\n\n      if (Math.floor(window.pageYOffset) <= offset - 10) {\n        window.scrollBy(0, 11);\n        timiout = setTimeout(scroll, 1);\n      } else if (Math.floor(window.pageYOffset) >= offset + 10) {\n        window.scrollBy(0, -11);\n        timiout = setTimeout(scroll, 1);\n      } else if (Math.floor(window.pageYOffset) > offset - 10 && Math.floor(window.pageYOffset) < offset + 10) {\n        clearTimeout(timiout);\n      }\n    };\n\n    scroll();\n  });\n  topMenuListLi[2].addEventListener(\"click\", function () {\n    var scroll = function scroll() {\n      var timiout;\n      var offset = 3870;\n\n      if (Math.floor(window.pageYOffset) <= offset - 10) {\n        window.scrollBy(0, 11);\n        timiout = setTimeout(scroll, 1);\n      } else if (Math.floor(window.pageYOffset) >= offset + 10) {\n        window.scrollBy(0, -11);\n        timiout = setTimeout(scroll, 1);\n      } else if (Math.floor(window.pageYOffset) > offset - 10 && Math.floor(window.pageYOffset) < offset + 10) {\n        clearTimeout(timiout);\n      }\n    };\n\n    scroll();\n  });\n  up.addEventListener(\"click\", function () {\n    var scroll = function scroll() {\n      var timiout;\n      var offset = 0;\n\n      if (Math.floor(window.pageYOffset) <= offset - 5) {\n        window.scrollBy(0, 15);\n        timiout = setTimeout(scroll, 1);\n      } else if (Math.floor(window.pageYOffset) >= offset + 5) {\n        window.scrollBy(0, -30);\n        timiout = setTimeout(scroll, 1);\n      } else if (Math.floor(window.pageYOffset) < offset) {\n        clearTimeout(timiout);\n      }\n    };\n\n    scroll();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainScroll);\n\n//# sourceURL=webpack://DIP/./src/modules/mainScroll.js?");

/***/ }),

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var topSlider = document.querySelector('.top-slider');\n  var slideDiv = topSlider.querySelectorAll(\".head-slider\");\n  slideDiv[0].style.display = \"block\";\n  slideDiv[1].style.display = \"none\";\n  slideDiv[2].style.display = \"none\";\n  var count = 1;\n  setInterval(function () {\n    slideDiv[0].style.display = \"none\";\n    slideDiv[1].style.display = \"none\";\n    slideDiv[2].style.display = \"none\";\n    slideDiv.forEach(function (item, i) {\n      if (i === count) {\n        item.style.display = \"block\";\n      }\n    });\n    count++;\n\n    if (count >= 3) {\n      count = 0;\n    }\n  }, 3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://DIP/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d7bf60dec7cb725f1c6a")
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ }
);