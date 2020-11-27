/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_coral_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/coral.scss */ \"./sass/coral.scss\");\n  \n\ncustomElements.define('summary-display',\nclass extends HTMLElement {\n    constructor() {\n      super();\n\n      // create the raw css from the scss import\n      const styleCoralCSS = document.createElement('style');\n      styleCoralCSS.appendChild(document.createTextNode(_sass_coral_scss__WEBPACK_IMPORTED_MODULE_0__.default));\n\n      const template = document.getElementById('summary-display-template');\n      const templateContent = template.content;\n\n      const shadowRoot = this.attachShadow({mode: 'open'});\n      shadowRoot.appendChild(styleCoralCSS);\n      shadowRoot.appendChild(templateContent.cloneNode(true));\n\n      const items = Array.from(this.querySelectorAll('li'));\n      const descriptions = Array.from(this.querySelectorAll('p'));\n\n      items.forEach(item => {\n        handleClick(item);\n      });\n\n      function handleClick(item) {\n        item.addEventListener('click', function() {\n          items.forEach(item => {\n            item.style.backgroundColor = 'white';\n          });\n\n          descriptions.forEach(description => {\n            updateDisplay(description, item);\n          });\n        });\n      }\n\n      function updateDisplay(description, item) {\n        description.removeAttribute('slot');\n\n        if(description.getAttribute('data-name') === item.textContent) {\n          description.setAttribute('slot', 'choice');\n          item.style.backgroundColor = '#bad0e4';\n        }\n      }\n\n      const slots = this.shadowRoot.querySelectorAll('slot');\n      slots[1].addEventListener('slotchange', function(e) {\n        const nodes = slots[1].assignedNodes();\n        console.log(`Element in Slot \"${slots[1].name}\" changed to \"${nodes[0].outerHTML}\".`);\n      });\n    }\n  }\n);\n\n//# sourceURL=webpack://web-components/./components/main.js?");

/***/ }),

/***/ "./sass/coral.scss":
/*!*************************!*\
  !*** ./sass/coral.scss ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"article {\\n  color: coral; }\\n\");\n\n//# sourceURL=webpack://web-components/./sass/coral.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./components/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;