/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style/index.sass */ \"./src/style/index.sass\");\n\n__webpack_require__(/*! ./scripts/slider */ \"./src/scripts/slider.js\");\n__webpack_require__(/*! ./scripts/mobileMenu */ \"./src/scripts/mobileMenu.js\");\n__webpack_require__(/*! ./scripts/accordeon */ \"./src/scripts/accordeon.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/accordeon.js":
/*!**********************************!*\
  !*** ./src/scripts/accordeon.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction toggleAccordeon(accordeonTitleElement) {\n  var accordeonTextElement = accordeonTitleElement.nextElementSibling;\n  accordeonTitleElement.classList.toggle(\"information__accordeon-title-up\");\n  accordeonTextElement.classList.toggle(\"information__accordeon-text-open\");\n}\n\nfunction closeAccordeon() {\n  var accordeonTitle = document.querySelector(\".information__accordeon-title-up\");\n  accordeonTitle.classList.remove(\"information__accordeon-title-up\");\n  accordeonTitle.nextElementSibling.classList.remove(\"information__accordeon-text-open\");\n}\n\ndocument.querySelector(\".information__accordeon\").onclick = function (e) {\n  if (e.target.classList.contains(\"information__accordeon\")) return;\n  var accordeonTitleElement = e.target.closest(\".information__accordeon-title\") || e.target.previousElementSibling,\n      accordeonTextElement = accordeonTitleElement.nextElementSibling;\n\n  if (!accordeonTextElement.classList.contains(\"information__accordeon-text-open\") && document.querySelectorAll(\".information__accordeon-text-open\").length === 1) closeAccordeon();\n  toggleAccordeon(accordeonTitleElement);\n};\n\n//# sourceURL=webpack:///./src/scripts/accordeon.js?");

/***/ }),

/***/ "./src/scripts/mobileMenu.js":
/*!***********************************!*\
  !*** ./src/scripts/mobileMenu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction toggleMenu() {\n  var button = document.querySelector(\".header__wrapper-nav-button\"),\n      navigation = document.querySelector(\".header__wrapper-nav\");\n  button.classList.toggle(\"header__wrapper-nav-button-open\");\n  button.classList.toggle(\"header__wrapper-nav-button-close\");\n  button.innerHTML = \"2\";\n  if (button.classList.contains(\"header__wrapper-nav-button-close\")) {\n    button.innerHTML = \"&#128938;\";\n    navigation.style.display = \"grid\";\n  } else {\n    button.innerHTML = \"&#8801;\";\n    navigation.style.display = \"none\";\n  }\n}\n\ndocument.querySelector(\".header__wrapper-nav-button\").onclick = toggleMenu;\n\n//# sourceURL=webpack:///./src/scripts/mobileMenu.js?");

/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nslider(\".section-4 .slider\");\nslider(\".section-6 .slider\");\n\nvar htmlDataToDataset = function htmlDataToDataset(str) {\n  return str.replace(/([-_][a-z])/gi, function ($1) {\n    return $1.toUpperCase().replace(\"-\", \"\");\n  });\n};\n\nfunction slider(sliderSelector) {\n  var slider = document.querySelector(sliderSelector);\n  slider.querySelector(\".slider__wrapper-button-right\").addEventListener(\"click\", function () {\n    return nextSlide(\"data-is-open\", slider);\n  });\n  slider.querySelector(\".slider__wrapper-button-left\").addEventListener(\"click\", function () {\n    return prevSlide(\"data-is-open\", slider);\n  });\n}\nvar nextSlide = function nextSlide(data, slider) {\n  var openedSlide = slider.querySelector(\"[\" + data + \"='true']\");\n  openedSlide.dataset.isOpen = false;\n  var nextSlide = openedSlide.nextElementSibling;\n\n  if (nextSlide.tagName === \"IMG\") {\n    nextSlide = slider.querySelector(\"[\" + data + \"='false']\");\n  }\n\n  nextSlide.dataset.slide = \"next\";\n  nextSlide.dataset.isOpen = true;\n};\n\nvar prevSlide = function prevSlide(data, slider) {\n  var openedSlide = slider.querySelector(\"[\" + data + \"='true']\");\n  openedSlide.dataset.isOpen = false;\n  var nextSlide = openedSlide.previousElementSibling;\n\n  if (nextSlide.tagName === \"IMG\") {\n    nextSlide = slider.querySelector(\"[\" + data + \"='false']:last-of-type\");\n  }\n\n  nextSlide.dataset.slide = \"prev\";\n  nextSlide.dataset.isOpen = true;\n};\n\n//# sourceURL=webpack:///./src/scripts/slider.js?");

/***/ }),

/***/ "./src/style/index.sass":
/*!******************************!*\
  !*** ./src/style/index.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/index.sass?");

/***/ })

/******/ });