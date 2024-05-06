/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hamburger-dropdown.js":
/*!***********************************!*\
  !*** ./src/hamburger-dropdown.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HamburgerMenu)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/**
 * A simple hamburger button that has a dropdown menu that appears when you click it. This module is meant to be re-usable.
 */
var HamburgerMenu = /*#__PURE__*/function () {
  function HamburgerMenu(elementId) {
    _classCallCheck(this, HamburgerMenu);
    this.elementId = elementId;
    this.createMenu();
  }
  return _createClass(HamburgerMenu, [{
    key: "createMenu",
    value: function createMenu() {
      var element = document.getElementById(this.elementId);
      var dropdownMenu = document.createElement("div");
      dropdownMenu.classList.add("dropdown-menu");
      dropdownMenu.innerHTML = "\n        <div class=\"hamburger\" id=\"hamburger\">\n          <span class=\"material-symbols-outlined\"> menu </span>\n        </div>\n        <div class=\"menu-container\">\n          <div class=\"menu-pointer\"><div class=\"triangle\"></div></div>\n          <div class=\"menu-container-2\">\n            <div class=\"menu-item\"><a href=\"#\">Home</a></div>\n            <div class=\"menu-item\"><a href=\"#\">About</a></div>\n            <div class=\"menu-item\"><a href=\"#\">Contact</a></div>\n            <div class=\"menu-item\"><a href=\"#\">Careers</a></div>\n            <div class=\"menu-item\"><a href=\"#\">FAQ</a></div>\n          </div>\n        </div>\n    ";
      element.appendChild(dropdownMenu);
      this.handle();
    }
  }, {
    key: "handle",
    value: function handle() {
      var hamburger = document.querySelector("#hamburger");
      var menu = document.querySelector(".menu-container");
      var toggleMenu = false;
      hamburger.addEventListener("click", function () {
        if (!toggleMenu) {
          menu.style.display = "block";
          toggleMenu = true;
        } else {
          menu.style.display = "none";
          toggleMenu = false;
        }
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/picture-carousel.js":
/*!*********************************!*\
  !*** ./src/picture-carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PictureCarousel)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Import images
var images = [];
for (var i = 1; i <= 8; i++) {
  images.push(__webpack_require__("./src/assets sync recursive ^\\.\\/.*\\.jpg$")("./".concat(i, ".jpg")));
}
/**
 * A simple picture carousel, must use an element ID so that the program knows what to append the carousel to.
 */
var PictureCarousel = /*#__PURE__*/function () {
  function PictureCarousel(elementId) {
    _classCallCheck(this, PictureCarousel);
    this.container = document.getElementById(elementId);
    this.images = images;
    this.currentImageIndex = 0;
  }
  return _createClass(PictureCarousel, [{
    key: "create",
    value: function create() {}
  }, {
    key: "handle",
    value: function handle() {}
  }]);
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Jersey+10&family=Jersey+15&family=Reddit+Mono:wght@200..900&family=Space+Grotesk:wght@300..700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Reddit Mono", monospace;
  box-sizing: border-box;
}

:root {
  --menu-background-color: #164e63;
  --highlight-color: #083344;
}

.dropdown-menu * {
  user-select: none;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
}

.hamburger {
  background-color: var(--menu-background-color);
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 8px;
  cursor: pointer;
}

.menu-pointer {
  padding-top: 5px;
}

.triangle {
  width: 0px;
  height: 0px;
  border-bottom: 18px solid var(--menu-background-color);
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  position: relative;
  bottom: 0px;
  left: 10px;
}

.menu-container {
  display: none;
  z-index: 1;
}

.menu-container-2 {
  background-color: var(--menu-background-color);
  width: 150px;
}

.menu-item {
  padding: 12px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
}

.menu-item a {
  color: white;
  text-decoration: none;
}

.menu-item:hover {
  background-color: var(--highlight-color);
}

/* Carousel Stuff */
#container {
  margin: 50px auto;
  border: solid black 3px;
  width: 700px;
  height: 500px;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.picture-frame {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  transition: left 0.5s ease; /* Add transition to the left property */
}

.slide {
  flex: none;
  height: 100%;
  width: 700px;
  display: inline-block;
}

.slide img {
  width: 100%;
  height: 100%;
  display: block;
}

.carousel-arrows {
  position: absolute;
  top: 40%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
}

.carousel-button {
  font-size: 4rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  padding-bottom: 0.4rem;
}

.carousel-button:hover,
.carousel-button:focus {
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(0, 0, 0, 0.3);
}

.carousel-button:focus {
  outline: 1px solid black;
}

.carousel-nav-dots {
  position: absolute;
  padding: 1rem;
  width: 80%;
  bottom: 24px;
  left: 64px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
}

.carousel-nav-dot {
  border: solid rgba(255, 255, 255, 0.5) 1.5px;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  cursor: pointer;
}

.carousel-nav-dot.active {
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0.8;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,qCAAA;EACA,sBAAA;AAAF;;AAGA;EACE,gCAAA;EACA,0BAAA;AAAF;;AAGA;EACE,iBAAA;AAAF;;AAEA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;AACF;;AAEA;EACE,8CAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,UAAA;EACA,WAAA;EACA,sDAAA;EACA,mCAAA;EACA,oCAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;AACF;;AAEA;EACE,aAAA;EACA,UAAA;AACF;;AAEA;EACE,8CAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;AACF;;AACA;EACE,YAAA;EACA,qBAAA;AAEF;;AACA;EACE,wCAAA;AAEF;;AACA,mBAAA;AACA;EACE,iBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;AAEF;;AAAA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAGF;;AAAA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,0BAAA,EAAA,wCAAA;AAGF;;AAAA;EACE,UAAA;EACA,YAAA;EACA,YAAA;EACA,qBAAA;AAGF;;AAAA;EACE,WAAA;EACA,YAAA;EACA,cAAA;AAGF;;AAAA;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,UAAA;AAGF;;AAAA;EACE,eAAA;EACA,gBAAA;EACA,YAAA;EACA,+BAAA;EACA,eAAA;EACA,oCAAA;EACA,sBAAA;EACA,iBAAA;EACA,sBAAA;AAGF;;AAAA;;EAEE,+BAAA;EACA,oCAAA;AAGF;;AAAA;EACE,wBAAA;AAGF;;AAAA;EACE,kBAAA;EACA,aAAA;EACA,UAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,oCAAA;EACA,qBAAA;AAGF;;AAAA;EACE,4CAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;AAGF;;AAAA;EACE,0CAAA;EACA,YAAA;AAGF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Jersey+10&family=Jersey+15&family=Reddit+Mono:wght@200..900&family=Space+Grotesk:wght@300..700&display=swap\");\n\n* {\n  font-family: \"Reddit Mono\", monospace;\n  box-sizing: border-box;\n}\n\n:root {\n  --menu-background-color: #164e63;\n  --highlight-color: #083344;\n}\n\n.dropdown-menu * {\n  user-select: none;\n}\nnav {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.hamburger {\n  background-color: var(--menu-background-color);\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.menu-pointer {\n  padding-top: 5px;\n}\n\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-bottom: 18px solid var(--menu-background-color);\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  position: relative;\n  bottom: 0px;\n  left: 10px;\n}\n\n.menu-container {\n  display: none;\n  z-index: 1;\n}\n\n.menu-container-2 {\n  background-color: var(--menu-background-color);\n  width: 150px;\n}\n\n.menu-item {\n  padding: 12px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  cursor: pointer;\n}\n.menu-item a {\n  color: white;\n  text-decoration: none;\n}\n\n.menu-item:hover {\n  background-color: var(--highlight-color);\n}\n\n/* Carousel Stuff */\n#container {\n  margin: 50px auto;\n  border: solid black 3px;\n  width: 700px;\n  height: 500px;\n}\n.carousel-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.picture-frame {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 100%;\n  display: flex;\n  transition: left 0.5s ease; /* Add transition to the left property */\n}\n\n.slide {\n  flex: none;\n  height: 100%;\n  width: 700px;\n  display: inline-block;\n}\n\n.slide img {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.carousel-arrows {\n  position: absolute;\n  top: 40%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 1;\n}\n\n.carousel-button {\n  font-size: 4rem;\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  padding: 0 0.5rem;\n  padding-bottom: 0.4rem;\n}\n\n.carousel-button:hover,\n.carousel-button:focus {\n  color: rgba(255, 255, 255, 0.9);\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.carousel-button:focus {\n  outline: 1px solid black;\n}\n\n.carousel-nav-dots {\n  position: absolute;\n  padding: 1rem;\n  width: 80%;\n  bottom: 24px;\n  left: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 0.5rem;\n}\n\n.carousel-nav-dot {\n  border: solid rgba(255, 255, 255, 0.5) 1.5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.carousel-nav-dot.active {\n  background-color: rgba(255, 255, 255, 0.9);\n  opacity: 0.8;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets sync recursive ^\\.\\/.*\\.jpg$":
/*!****************************************!*\
  !*** ./src/assets/ sync ^\.\/.*\.jpg$ ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.jpg": "./src/assets/1.jpg",
	"./2.jpg": "./src/assets/2.jpg",
	"./3.jpg": "./src/assets/3.jpg",
	"./4.jpg": "./src/assets/4.jpg",
	"./5.jpg": "./src/assets/5.jpg",
	"./6.jpg": "./src/assets/6.jpg",
	"./7.jpg": "./src/assets/7.jpg",
	"./8.jpg": "./src/assets/8.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive ^\\.\\/.*\\.jpg$";

/***/ }),

/***/ "./src/assets/1.jpg":
/*!**************************!*\
  !*** ./src/assets/1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1.jpg";

/***/ }),

/***/ "./src/assets/2.jpg":
/*!**************************!*\
  !*** ./src/assets/2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2.jpg";

/***/ }),

/***/ "./src/assets/3.jpg":
/*!**************************!*\
  !*** ./src/assets/3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3.jpg";

/***/ }),

/***/ "./src/assets/4.jpg":
/*!**************************!*\
  !*** ./src/assets/4.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4.jpg";

/***/ }),

/***/ "./src/assets/5.jpg":
/*!**************************!*\
  !*** ./src/assets/5.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5.jpg";

/***/ }),

/***/ "./src/assets/6.jpg":
/*!**************************!*\
  !*** ./src/assets/6.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6.jpg";

/***/ }),

/***/ "./src/assets/7.jpg":
/*!**************************!*\
  !*** ./src/assets/7.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7.jpg";

/***/ }),

/***/ "./src/assets/8.jpg":
/*!**************************!*\
  !*** ./src/assets/8.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HamburgerMenu: () => (/* reexport safe */ _hamburger_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   PictureCarousel: () => (/* reexport safe */ _picture_carousel__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _hamburger_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger-dropdown */ "./src/hamburger-dropdown.js");
/* harmony import */ var _picture_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picture-carousel */ "./src/picture-carousel.js");



new _hamburger_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]("nav");
var buttons = document.querySelectorAll("[data-carousel-button]"); // using a data attribute instead of a class or idea.

var navDots = document.querySelectorAll(".carousel-nav-dot"); // select nav dots

// get an array of the values to inject as image url.

var positionIndex = 0;
var positions = [0, -700, -1400, -2100, -2800, -3500, -4200, -4900]; // pixel positions of picture frame.

// select carousel
var carousel = document.querySelector(".carousel-container");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var offset;
    if (button.getAttribute("data-carousel-button") === "next") {
      offset = 1;
    }
    if (button.getAttribute("data-carousel-button") === "prev") {
      offset = -1;
    }
    positionIndex += offset;
    if (positionIndex < 0) positionIndex = 7;
    if (positionIndex > 7) positionIndex = 0;
    changeImage(positionIndex);
  });
});

// now handle the nav dot when one is clicked.
navDots.forEach(function (navDot) {
  navDot.addEventListener("click", function () {
    positionIndex = Number(navDot.getAttribute("data-id"));
    changeImage(positionIndex);
  });
});

// Call this function to change the image
/**
 * To change the position, the picture-frame div simply moves -700 px to the left. It keeps track of the number of images within the picture-frame, and can't reset once it gets to the end.
 *
 */
function changeImage(positionIndex) {
  if (positionIndex >= 0 && positionIndex < 8) {
    var pictureFrame = document.querySelector(".picture-frame");
    pictureFrame.style.left = "".concat(positions[positionIndex], "px");
    updateNavDot(positionIndex);
  } else {
    console.error("Problem with index position:", positionIndex);
  }
  function updateNavDot(positionIndex) {
    // remove all active
    navDots.forEach(function (navDot) {
      navDot.classList.remove("active"); // removes all active.
      if (Number(navDot.getAttribute("data-id")) === positionIndex) {
        setTimeout(function () {
          // delays the time a bit so the transition and nav dot sync up betteer.
          navDot.classList.add("active");
        }, 500);
      }
    });
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map