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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/icons/done.png */ \"./src/icons/done.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n  background: #f4f4f4;\\n  font-family: 'Open Sans', 'Lucida Grande', sans-serif;\\n}\\n\\n.parent {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: row;\\n  height: 100vh;\\n  justify-content: space-around;\\n}\\n\\nh1 {\\n  text-align: center;\\n}\\n\\n.container {\\n  width: 30rem;\\n  background-color: white;\\n  box-shadow: 0 4px 8px 0 #c9c9c930, 0 6px 20px 0 #c9c9c930;\\n}\\n\\n.task-container {\\n  list-style: none;\\n  margin-block: 0;\\n  padding-inline: 0;\\n  font-size: 1rem;\\n}\\n\\nli {\\n  border-bottom: 1px solid #dedede;\\n  padding: 1rem;\\n}\\n\\nimg {\\n  float: right;\\n  height: 1rem;\\n}\\n\\n.italics {\\n  font-style: italic;\\n}\\n\\n.add-task {\\n  border: none;\\n  font-size: 1rem;\\n  width: 80%;\\n  letter-spacing: 1px;\\n}\\n\\n.add-task:focus {\\n  outline: none;\\n}\\n\\n.checkbox {\\n  height: 18px;\\n  width: 18px;\\n  border: 2px solid #ccc;\\n  border-radius: 3px;\\n  background-color: white;\\n  padding: 3px;\\n}\\n\\n.task-name {\\n  padding: 0 1rem;\\n}\\n\\n.task-item {\\n  color: black;\\n}\\n\\n.clear {\\n  background-color: #e9e9e996;\\n  text-align: center;\\n  color: gray;\\n  border-bottom: none;\\n}\\n\\n.clear:hover {\\n  cursor: pointer;\\n}\\n\\n.instruction-container {\\n  font-size: small;\\n}\\n\\n.instruction-container h3 {\\n  text-align: center;\\n}\\n\\n.instruction {\\n  width: 650px;\\n  text-align: justify;\\n}\\n\\n.instruction ul {\\n  list-style-type: none;\\n}\\n\\n/* ---------- Draggable Line Items Begins --------- */\\nul .draggable::after {\\n  content: 'draggable';\\n  position: absolute;\\n  cursor: move;\\n  opacity: 0;\\n}\\n\\n.over {\\n  background-color: #f0f0f0;\\n}\\n\\n/* ---------- Draggable Line Items Ends --------- */\\n\\n/* ---------- Toggle Classes Begins -------- */\\n.line-through {\\n  text-decoration: line-through;\\n  color: #0000006b;\\n}\\n\\n.active {\\n  background-color: #fffeca;\\n}\\n\\n.completed {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  border: none;\\n  background-size: 20px 20px;\\n  filter: opacity(0.5);\\n}\\n\\n.empty-input::-webkit-input-placeholder {\\n  color: #f44336ab;\\n}\\n\\n/* ---------- Toggle Classes Ends -------- */\\n\\n/* --------------- Icons Begins ---------------- */\\n.return:hover {\\n  cursor: pointer;\\n}\\n\\n.refresh:hover {\\n  animation-name: rotation;\\n  animation-duration: 1s;\\n  animation-timing-function: linear;\\n  animation-fill-mode: both;\\n  cursor: pointer;\\n}\\n\\n@keyframes rotation {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n\\n  50% {\\n    transform: rotate(180deg);\\n  }\\n\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n/* --------------- Icons Ends ---------------- */\\n\\n/* --------------- Media Query Begins ---------------- */\\n@media (max-width: 928px) {\\n  * {\\n    font-size: small;\\n  }\\n\\n  .parent {\\n    flex-direction: column;\\n    width: 100%;\\n    justify-content: unset;\\n    gap: 10%;\\n    margin-top: 10%;\\n  }\\n\\n  h1 {\\n    font-size: 15px;\\n  }\\n\\n  .container {\\n    width: 80%;\\n    margin: 0 auto;\\n    font-size: small;\\n  }\\n\\n  .parent-container {\\n    width: 100%;\\n  }\\n\\n  .instruction {\\n    width: 90%;\\n  }\\n\\n  .instruction ul li {\\n    font-size: 9px;\\n  }\\n\\n  .add-task {\\n    width: 75%;\\n  }\\n}\\n\\n/* --------------- Media Query Ends ---------------- */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _model_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/task.js */ \"./src/model/task.js\");\n/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/crud.js */ \"./src/modules/crud.js\");\n\n\n\n\nconst clear = document.querySelector('.clear');\nconst addTask = document.getElementById('add-task');\nconst titleText = document.getElementById('title-text');\nconst refreshIcon = document.getElementById('refresh');\nconst returnIcon = document.getElementById('return');\nconst task = new _model_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\ntask.taskList = _model_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch('task');\nif (task.taskList) {\n  task.taskList.forEach((task, id) => {\n    (0,_modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.createTaskRow)(task.index, task.description);\n    // Add line-through for completed task when page is reload\n    if (task.completed) {\n      (0,_modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.removeTaskUI)(id + 1);\n    }\n  });\n}\n\n// localstorage for todo title\ntitleText.value = localStorage.getItem('title') ? _model_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch('title') : 'To-Do List';\nconst titleSetStorage = (event) => {\n  if (event.key === 'Enter') {\n    _model_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateStorage('title', titleText.value);\n  }\n};\n\naddTask.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter') (0,_modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.addTaskHelperMethod)();\n});\nreturnIcon.addEventListener('click', _modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.addTaskHelperMethod);\nclear.addEventListener('click', _modules_crud_js__WEBPACK_IMPORTED_MODULE_2__.clearTask);\ntitleText.addEventListener('keypress', titleSetStorage);\nrefreshIcon.addEventListener('click', _model_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateStorage('title', titleText.value));\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/model/task.js":
/*!***************************!*\
  !*** ./src/model/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TASK {\n  constructor() {\n    this.taskList = [];\n  }\n\n  static fetch(key) {\n    return JSON.parse(localStorage.getItem(key)) || [];\n  }\n\n  static updateStorage(key, updatedTask) {\n    localStorage.setItem(key, JSON.stringify(updatedTask));\n  }\n\n  add(task) {\n    this.taskList = TASK.fetch('task');\n    this.taskList.push(task);\n    TASK.updateStorage('task', this.taskList);\n  }\n\n  updateIndex() {\n    this.taskList.forEach((item, id) => {\n      item.index = id + 1;\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TASK);\n\n\n//# sourceURL=webpack://to-do-list/./src/model/task.js?");

/***/ }),

/***/ "./src/modules/crud.js":
/*!*****************************!*\
  !*** ./src/modules/crud.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskHelperMethod\": () => (/* binding */ addTaskHelperMethod),\n/* harmony export */   \"addToStorage\": () => (/* binding */ addToStorage),\n/* harmony export */   \"changeTask\": () => (/* binding */ changeTask),\n/* harmony export */   \"clearTask\": () => (/* binding */ clearTask),\n/* harmony export */   \"createTaskRow\": () => (/* binding */ createTaskRow),\n/* harmony export */   \"removeTaskUI\": () => (/* binding */ removeTaskUI)\n/* harmony export */ });\n/* harmony import */ var _model_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/task.js */ \"./src/model/task.js\");\n/* harmony import */ var _icons_menu_vertical_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/menu-vertical.png */ \"./src/icons/menu-vertical.png\");\n/* harmony import */ var _statusUpdate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusUpdate.js */ \"./src/modules/statusUpdate.js\");\n/* harmony import */ var _draggableEvents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggableEvents.js */ \"./src/modules/draggableEvents.js\");\n\n\n\n\n\nconst clear = document.querySelector('.clear');\nconst addTask = document.getElementById('add-task');\nconst task = new _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet id = 0;\ntask.taskList = _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch('task');\n\nconst removeTaskUI = (id) => {\n  const taskItem = document.getElementById(`${id}`);\n  const checkbox = document.getElementById(`checkbox-${id}`);\n  taskItem.classList.toggle('line-through');\n  checkbox.classList.toggle('completed');\n};\n\nconst inputValidation = () => {\n  addTask.placeholder = 'Empty Fields not allowed';\n  addTask.classList.add('empty-input');\n};\n\nconst clearTask = () => {\n  task.taskList = _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch('task');\n  task.taskList = task.taskList.filter((item) => !item.completed);\n  task.updateIndex();\n  _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateStorage('task', task.taskList);\n  window.location.reload();\n};\n\nconst removeTask = (event) => {\n  const id = event.target.id.split('-')[1];\n  removeTaskUI(id);\n};\n\nconst changeTask = (event) => {\n  task.taskList = _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch('task');\n  task.taskList.forEach((item) => {\n    if (item.index === +event.target.id) {\n      item.description = event.target.value;\n    }\n    task.updateIndex();\n    _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateStorage('task', task.taskList);\n  });\n};\n\nconst activeTask = (taskInput) => {\n  taskInput.addEventListener('click', () => {\n    const current = document.getElementsByClassName('active');\n    if (current.length > 0) {\n      current[0].className = current[0].className.replace('active', '');\n      current[0].className = current[0].className.replace('active', '');\n    }\n    taskInput.classList.add('active');\n    const listNode = taskInput.parentNode.parentNode;\n    listNode.classList.add('active');\n  });\n};\n\nconst createTaskRow = (id, desc) => {\n  const TASK_LIST = `<li class=\"task-list draggable\" id=\"task-list-${id}\"  draggable=\"true\">\n            <span><button class=\"checkbox\" alt=\"checkbox\" name=\"checkbox\" id=\"checkbox-${id}\"></button></span>\n            <span class=\"task-name\"><input type=\"text\" class=\"add-task task-item\" id=\"${id}\" value=\"${desc}\"></span>\n            <span><img src=\"${_icons_menu_vertical_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Vertical Menu Icon\" class=\"menu-dots\" width=\"18\"\n                        height=\"18\"/></span>\n         </li>`;\n  clear.insertAdjacentHTML('beforebegin', TASK_LIST);\n\n  document.querySelectorAll('.checkbox').forEach((elem) => {\n    elem.addEventListener('click', removeTask);\n    elem.addEventListener('click', _statusUpdate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  });\n\n  const taskInput = document.getElementById(`${id}`);\n  taskInput.addEventListener('change', changeTask);\n  activeTask(taskInput);\n  (0,_draggableEvents_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n};\n\nconst addToStorage = (addTask) => {\n  task.taskList = _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch('task');\n  addTask.placeholder = 'Press/click enter to add task';\n  addTask.classList.remove('empty-input');\n  id = task.taskList.length > 0 ? task.taskList[task.taskList.length - 1].index : 0;\n  id += 1;\n  const taskItem = { index: id, description: `${addTask.value}`, completed: false };\n  task.add(taskItem);\n  task.updateIndex();\n};\n\nconst addTaskHelperMethod = () => {\n  const addBtnVal = addTask.value;\n  if (addBtnVal !== '') {\n    addToStorage(addTask);\n    createTaskRow(id, addBtnVal);\n    addTask.value = '';\n    addTask.focus();\n  } else {\n    inputValidation();\n  }\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/crud.js?");

/***/ }),

/***/ "./src/modules/draggableEvents.js":
/*!****************************************!*\
  !*** ./src/modules/draggableEvents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dragEventListeners)\n/* harmony export */ });\n/* harmony import */ var _model_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/task.js */ \"./src/model/task.js\");\n\n\nlet dragStartIndex;\nconst task = new _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nfunction swapItems(fromIndex, toIndex) {\n  const itemOne = document.getElementById(`${fromIndex}`);\n  const itemTwo = document.getElementById(`${toIndex}`);\n\n  const temp = itemOne.value;\n  itemOne.value = itemTwo.value;\n  itemTwo.value = temp;\n\n  task.taskList = _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch('task');\n\n  task.taskList.forEach((task) => {\n    if (task.index === fromIndex) {\n      task.description = itemOne.value;\n    } else if (task.index === toIndex) {\n      task.description = itemTwo.value;\n    }\n  });\n  _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateStorage('task', task.taskList);\n}\n\nfunction dragStart() {\n  dragStartIndex = +this.getAttribute('id').split('-')[2];\n}\n\nfunction dragEnter() {\n  this.classList.add('over');\n  this.querySelector('.task-item').classList.add('over');\n}\n\nfunction dragOver(event) {\n  event.preventDefault();\n}\n\nfunction dragLeave() {\n  this.classList.remove('over');\n  this.querySelector('.task-item').classList.remove('over');\n}\n\nfunction dragDrop() {\n  const dragEndIndex = +this.getAttribute('id').split('-')[2];\n  swapItems(dragStartIndex, dragEndIndex);\n  this.classList.remove('over');\n  this.querySelector('.task-item').classList.remove('over');\n}\n\nfunction dragEventListeners() {\n  const draggables = document.querySelectorAll('.draggable');\n  const draggableItems = document.querySelectorAll('.draggable-list  .task-list');\n\n  draggables.forEach((draggable) => {\n    draggable.addEventListener('dragstart', dragStart);\n  });\n\n  draggableItems.forEach((draggableItem) => {\n    draggableItem.addEventListener('dragover', dragOver);\n    draggableItem.addEventListener('drop', dragDrop);\n    draggableItem.addEventListener('dragenter', dragEnter);\n    draggableItem.addEventListener('dragleave', dragLeave);\n  });\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/draggableEvents.js?");

/***/ }),

/***/ "./src/modules/statusUpdate.js":
/*!*************************************!*\
  !*** ./src/modules/statusUpdate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/task.js */ \"./src/model/task.js\");\n\n\nconst statusUpdate = (e) => {\n  const id = +e.target.id.split('-')[1];\n  _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList = _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch('task');\n  _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList[id - 1].completed = !_model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList[id - 1].completed;\n  _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateStorage('task', _model_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statusUpdate);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/statusUpdate.js?");

/***/ }),

/***/ "./src/icons/done.png":
/*!****************************!*\
  !*** ./src/icons/done.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e879f49d25ea0620cb71.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/done.png?");

/***/ }),

/***/ "./src/icons/menu-vertical.png":
/*!*************************************!*\
  !*** ./src/icons/menu-vertical.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e4f976fb7dcf929ddc0.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/menu-vertical.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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