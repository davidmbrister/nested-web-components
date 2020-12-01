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

/***/ "./FaqDropdownGroup.js":
/*!*****************************!*\
  !*** ./FaqDropdownGroup.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ defineFaqDropdownGroup\n/* harmony export */ });\nfunction defineFaqDropdownGroup() {\n\n    const faqGroupTemplate = document.createElement('template');\n\n    faqGroupTemplate.innerHTML = `\n      <div class=\"faq-group\">\n        <slot name=\"single-faq\">\n      </div>\n    `;\n\n    class FaqDropdownGroup extends HTMLElement {\n      constructor() {\n        super();\n\n        this.attachShadow({ mode: 'open' });\n        this.shadowRoot.appendChild(faqGroupTemplate.content.cloneNode(true));\n        \n        \n        this.items = {\n          set currentItems(item) {\n            this.itemList.push(item);\n          },\n            updateItem(detail) {\n            \n            console.log(\"Inside update and showing detail : \" + detail);\n            console.log(this.itemList[detail[1]]);\n            this.itemList[detail[1]].isvisible\n            if (this.itemList[detail[1]].isvisible === 'false'){\n              this.itemList[detail[1]].isvisible = 'true';\n            } else {\n              this.itemList[detail[1]].isvisible === 'false';\n            }\n            console.log(\"Inside update after update: \" + JSON.stringify(this.itemList));\n          },\n          itemList: []\n        };\n        // This Parent requires an account of all the child faqs and their visibility property values. \n        \n      }\n    // Add event listener that will catch an event bubbling up with it's id number, \n    // then make sure all the faqs that don't have that id are turned off\n//\n      connectedCallback() {\n    \n      this.addEventListener(\"onclick\", function (e) {\n        console.log('listend to click event');\n        console.log(\"The event detail index: \" + e.detail[1]);\n        console.log(\"The event detail visibility: \" + e.detail[0]);\n        console.log(this.items.itemList);\n        \n        // 1. Get the item from the list that needs to be changed.\n        this.items.updateItem(e.detail);\n        // 2. Reverse the value\n        // 2. Reversing the value in this state will trigger an observedAttribute change triggering event dispatch\n        // 3. Broadcast the reversed value and the index back to the children\n        // emit an event to the child by index which has come through in the e.detail\n        // \n      });\n      const faqs = Array.from(this.querySelectorAll('faq-dropdown'));\n      console.log(\"The Length\" + faqs.length);\n      console.log(\"Itemlist length: \" +  this.items.itemList.length); \n      for (let i = 0; i < faqs.length; i++) {\n            faqs[i].setAttribute('index', i);\n            console.log(\"The Index for this one: \" + faqs[i].getAttribute('index'));\n\n            this.items.currentItems = { index: faqs[i].getAttribute('index'), isvisible: faqs[i].getAttribute('isvisible') };\n            //console.log(\"The index\" + this.items);\n            console.log(\"This should be the element being iterated\" + faqs[i].getAttribute('isvisible'));\n            console.log(faqs[i].getAttributeNames());\n          }; \n        console.log(\"Current items on the dropdown object: \" +  JSON.stringify(this.items)); \n        console.log(\"Itemlist length: \" +  this.items.itemList.length); \n      }\n\n /*      set items(item) {\n        this._items = [...this.items, item];\n      }\n      get items() {\n        return this._items;\n      } */\n    }\n    window.customElements.define('faq-dropdown-group', FaqDropdownGroup);\n}\n\n\n/* \n\n         const data = { name: \"addTodo\", action: \"create\", todoText: \"\" };\n\n                    let el = document.getElementById(\"addTodo\");\n\n                    el.setAttribute(\"data-request\", JSON.stringify(data)); */\n\n//# sourceURL=webpack://web-components/./FaqDropdownGroup.js?");

/***/ }),

/***/ "./faqDropdown.js":
/*!************************!*\
  !*** ./faqDropdown.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FaqDropdownGroup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaqDropdownGroup.js */ \"./FaqDropdownGroup.js\");\n\n\n(0,_FaqDropdownGroup_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nconst faqTemplate = document.createElement('template');\n\nfaqTemplate.innerHTML = `\n  <style>\n  .faq {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      line-height: 1;\n      background-color: #eee;\n      color: #444;\n      cursor: pointer;\n      padding: 17px;\n      width: 100%;\n      text-align: left;\n      border-top: 1px inset #444;\n      outline: none;\n      transition: 0.4s;\n    }\n\n    /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n    .active, .faq:hover {\n      background-color: #ccc;\n    }\n\n    /* Style the accordion panel. Note: hidden by default */\n    .answer-panel {\n      padding: 0 18px;\n      background-color: white;\n      max-height: 0;\n      overflow: hidden;\n      transition: max-height 0.2s ease-out;\n    }\n\n    .faq:after {\n      content: '+';\n      font-size: 30px;\n      color: #777;\n      float: right;\n      margin-left: 5px;\n    }\n\n    .faq.active:after {\n      font-size: 34px;\n      content: '-';\n    }\n\n    .no-margin {\n      margin: 0;\n      padding: 0;\n    }\n  </style>\n  <button id=\"toggle-answer\" class=\"faq\"><slot name=\"question\" /></button>\n  <div class=\"answer-panel\">\n    <p><slot name=\"answer\"></p>\n  </div>\n`;\n\nclass faqDropdown extends HTMLElement {\n  constructor() {\n    super();\n    \n    this.attachShadow({ mode: 'open' });\n    this.shadowRoot.appendChild(faqTemplate.content.cloneNode(true));\n    this.clickEvent = new CustomEvent(\"onclick\", {\n      bubbles: true,\n      detail: [this.getAttribute('isvisible'), this.getAttribute('index')] ,\n      cancelable: false,\n    });\n    const toggleBtn = this.shadowRoot.querySelector('#toggle-answer');\n   // console.log(this.getAttribute('custom-height'));\n    if(this.getAttribute('custom-height') === \"1\") {\n      toggleBtn.style.maxHeight = '10px';\n    } else if(this.getAttribute('custom-height') === \"2\") {\n      toggleBtn.style.maxHeight = '50px';\n    } else if(this.getAttribute('custom-height') === \"3\") {\n      toggleBtn.style.maxHeight = '60px';\n    } else if(this.getAttribute('custom-height') === \"4\") {\n      toggleBtn.style.maxHeight = '70px';\n    }\n    else {\n    //console.log(\"equal to null or invalid\");\n    }\n  //this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');\n  //console.log(\"HIIIIII\" + this.getAttribute('avatar'));\n  //this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');\n  }\n\n  connectedCallback() {\n      this.shadowRoot.querySelector('#toggle-answer').addEventListener('click', () => this.toggleAnswer());\n      // add the visibility prop if it's not there\n      if (!this.hasAttribute('isvisible')) {\n        //console.log(\"adding isvisible and setting to false\")\n        this.setAttribute('isvisible', 'false');\n      }\n      if (!this.hasAttribute('index')) {\n        //console.log(\"adding index\")\n        this.setAttribute('index', 'null');\n      }\n  }\n  toggleAnswer() {\n    \n    const answerPanel = this.shadowRoot.querySelector('.answer-panel');\n    const toggleBtn = this.shadowRoot.querySelector('#toggle-answer');\n\n \n\n    if(answerPanel.style.maxHeight) {\n    toggleBtn.classList.toggle(\"active\");\n    answerPanel.style.maxHeight = null;\n    } else {\n    toggleBtn.classList.toggle(\"active\");\n    answerPanel.style.maxHeight = answerPanel.scrollHeight + \"px\";\n    }\n\n    if (this.getAttribute('isvisible') === 'true') {\n      this.setAttribute('isvisible', 'false'); \n     // console.log(this.getAttribute('isvisible'));\n    } else {\n      this.setAttribute('isvisible', 'true'); \n      //console.log(this.getAttribute('isvisible'));\n    }\n\n    this.dispatchEvent(this.clickEvent);\n    console.log(this.clickEvent);\n  }\n\n\n  disconnectedCallback() {\n  this.shadowRoot.querySelector('#toggle-answer').removeEventListener();\n  }\n\n  get isvisible() {\n    return this.hasAttribute('isvisible');\n  }\n  \n  set isvisible(val) {\n        if(val) {\n          this.setAttribute('isvisible', val);\n        } else {\n          this.removeAttribute('isvisible');\n        }\n    }\n  get getIndex() {\n    return this.hasAttribute('index');\n  }\n  \n  set setIndex(val) {\n        if(val) {\n          this.setAttribute('index', val);\n        } \n    }\n  static get observedAttributes() {\n    return ['isvisible'];\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    //this.displayVal.innerText = this.value;\n    //console.log(\"hello\");\n    // NOW emit an event to the parent to the parent with the value of the changed attribute\n\n  }\n}\nwindow.customElements.define('faq-dropdown', faqDropdown);\n\n//# sourceURL=webpack://web-components/./faqDropdown.js?");

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
/******/ 	__webpack_require__("./faqDropdown.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;