/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\n  const content = document.getElementById(\"content\");\n\n  const section = document.createElement(\"div\");\n  section.classList.add(\"section\");\n\n  const title = document.createElement(\"h2\");\n  title.innerText = \"Contact\";\n\n  section.appendChild(title);\n\n  content.appendChild(section);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n//# sourceURL=webpack://top-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction gallery() {\n  const content = document.getElementById(\"content\");\n\n  const section = document.createElement(\"div\");\n  section.classList.add(\"section\");\n\n  const title = document.createElement(\"h2\");\n  title.innerText = \"Gallery\";\n\n  section.appendChild(title);\n\n  content.appendChild(section);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);\n\n\n//# sourceURL=webpack://top-restaurant/./src/gallery.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction home() {\n  const content = document.getElementById(\"content\");\n\n  const section = document.createElement(\"div\");\n  section.classList.add(\"section\");\n\n  const title = document.createElement(\"h2\");\n  title.innerText = \"About Us\";\n\n  const p = document.createElement(\"p\");\n  p.innerText =\n    \"We are a resaurant specialising in seafood. We love fish. Come to our resaurant, it's very cool.\";\n\n  section.appendChild(title);\n  section.appendChild(p);\n\n  content.appendChild(section);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://top-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery */ \"./src/gallery.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//navbar activation\n(function () {\n  const content = document.querySelector(\"#content\");\n\n  const homebtn = document.getElementById(\"home\");\n  const menubtn = document.getElementById(\"menu\");\n  const gallerybtn = document.getElementById(\"gallery\");\n  const contactbtn = document.getElementById(\"contact\");\n\n  let btns = [homebtn, menubtn, gallerybtn, contactbtn];\n\n  btns.forEach((btn) => {\n    let name = btn.id;\n    btn.addEventListener(\"click\", () => {\n      if (document.querySelector(\".section\") != null) {\n        const section = document.querySelector(\".section\");\n        content.removeChild(section);\n      }\n\n      switch (name) {\n        case \"home\":\n          (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n          break;\n        case \"menu\":\n          (0,_menu__WEBPACK_IMPORTED_MODULE_3__.default)();\n          break;\n        case \"gallery\":\n          (0,_gallery__WEBPACK_IMPORTED_MODULE_2__.default)();\n          break;\n        case \"contact\":\n          (0,_contact__WEBPACK_IMPORTED_MODULE_4__.default)();\n          break;\n        default:\n          console.log(\"not work\");\n      }\n    });\n  });\n})();\n\n\n//# sourceURL=webpack://top-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu() {\n  const content = document.getElementById(\"content\");\n\n  const section = document.createElement(\"div\");\n  section.classList.add(\"section\");\n  content.appendChild(section);\n\n  const title = document.createElement(\"h2\");\n  title.innerText = \"Menu\";\n  section.appendChild(title);\n\n  let mains = {\n    \"Salmon and Risotto\": \"£15.00\",\n    \"Fish Tacos\": \"£7.00\",\n    \"Skewered Shrimp\": \"£10.00\",\n    \"Calamari Plate\": \"£8.00\",\n  };\n\n  let salads = {\n    \"Crab Salad\": \"£9.00\",\n    \"Green Salad\": \"£3.00\",\n  };\n\n  let drinks = {\n    \"Soft Drink\": \"£2.00\",\n    \"Bottled Water\": \"£1.00\",\n  };\n\n  let desserts = {\n    \"Mini Carrot Cake\": \"£4.50\",\n    \"Mini Chocolate Cake\": \"£4.50\",\n    \"Mini Lemon Cake\": \"£4.50\",\n  };\n\n  let menuSectionsTitles = {\n    Mains: mains,\n    Salads: salads,\n    Drinks: drinks,\n    Desserts: desserts,\n  };\n\n  const keys = Object.keys(menuSectionsTitles);\n\n  keys.forEach((key) => {\n    const menuSection = document.createElement(\"div\");\n    menuSection.classList.add(\"menu-section\");\n\n    const menuSectionTitle = document.createElement(\"h3\");\n    menuSectionTitle.innerText = key;\n\n    const menuSectionContent = document.createElement(\"div\");\n    menuSectionContent.classList.add(\"menu-section-content\");\n\n    const ul = document.createElement(\"ul\");\n    menuSectionContent.appendChild(ul);\n\n    const menuItems = Object.keys(menuSectionsTitles[key]);\n    menuItems.forEach((item) => {\n      const li = document.createElement(\"li\");\n      li.innerText = `${item}  |  ${menuSectionsTitles[key][item]}`;\n      ul.appendChild(li);\n    });\n\n    menuSection.appendChild(menuSectionTitle);\n    menuSection.appendChild(menuSectionContent);\n\n    section.appendChild(menuSection);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://top-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pageLoad() {\n  const content = document.getElementById(\"content\");\n\n  const headline = document.createElement(\"h1\");\n  headline.innerText = \"My Awesome Restaurant\";\n\n  const copy = document.createElement(\"p\");\n  copy.innerText = \"Fresh, Delicious, Awesome Food\";\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n  container.appendChild(headline);\n  container.appendChild(copy);\n\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"navbar\");\n\n  const ul = document.createElement(\"ul\");\n  nav.appendChild(ul);\n\n  let navbtns = [\"Home\", \"Menu\", \"Gallery\", \"Contact\"];\n\n  navbtns.forEach((btn) => {\n    const li = document.createElement(\"li\");\n    li.innerText = btn;\n    li.id = btn.toLowerCase();\n    ul.appendChild(li);\n  });\n\n  content.appendChild(container);\n  content.appendChild(nav);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://top-restaurant/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;