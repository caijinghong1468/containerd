"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-decimal";
exports.ids = ["vendor-chunks/is-decimal"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isDecimal: () => (/* binding */ isDecimal)\n/* harmony export */ });\n/**\n * Check if the given character code, or the character code at the first\n * character, is decimal.\n *\n * @param {string|number} character\n * @returns {boolean} Whether `character` is a decimal\n */ function isDecimal(character) {\n    const code = typeof character === \"string\" ? character.charCodeAt(0) : character;\n    return code >= 48 && code <= 57 /* 0-9 */ ;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtZGVjaW1hbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztDQU1DLEdBQ00sU0FBU0EsVUFBVUMsU0FBUztJQUNqQyxNQUFNQyxPQUNKLE9BQU9ELGNBQWMsV0FBV0EsVUFBVUUsVUFBVSxDQUFDLEtBQUtGO0lBRTVELE9BQU9DLFFBQVEsTUFBTUEsUUFBUSxHQUFHLE9BQU87QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWluZXJkX211bHRpbm90ZXMvLi9ub2RlX21vZHVsZXMvaXMtZGVjaW1hbC9pbmRleC5qcz85NmE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGNoYXJhY3RlciBjb2RlLCBvciB0aGUgY2hhcmFjdGVyIGNvZGUgYXQgdGhlIGZpcnN0XG4gKiBjaGFyYWN0ZXIsIGlzIGRlY2ltYWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjaGFyYWN0ZXJcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIGBjaGFyYWN0ZXJgIGlzIGEgZGVjaW1hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZWNpbWFsKGNoYXJhY3Rlcikge1xuICBjb25zdCBjb2RlID1cbiAgICB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NyAvKiAwLTkgKi9cbn1cbiJdLCJuYW1lcyI6WyJpc0RlY2ltYWwiLCJjaGFyYWN0ZXIiLCJjb2RlIiwiY2hhckNvZGVBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-decimal/index.js\n");

/***/ })

};
;