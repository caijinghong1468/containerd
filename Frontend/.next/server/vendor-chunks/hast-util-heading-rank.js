"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-heading-rank";
exports.ids = ["vendor-chunks/hast-util-heading-rank"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-heading-rank/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/hast-util-heading-rank/lib/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headingRank: () => (/* binding */ headingRank)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Nodes} Nodes\n */ /**\n * Get the rank (`1` to `6`) of headings (`h1` to `h6`).\n *\n * @param {Nodes} node\n *   Node to check.\n * @returns {number | undefined}\n *   Rank of the heading or `undefined` if not a heading.\n */ function headingRank(node) {\n    const name = node.type === \"element\" ? node.tagName.toLowerCase() : \"\";\n    const code = name.length === 2 && name.charCodeAt(0) === 104 /* `h` */  ? name.charCodeAt(1) : 0;\n    return code > 48 /* `0` */  && code < 55 /* `7` */  ? code - 48 /* `0` */  : undefined;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWhlYWRpbmctcmFuay9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztDQUVDLEdBRUQ7Ozs7Ozs7Q0FPQyxHQUNNLFNBQVNBLFlBQVlDLElBQUk7SUFDOUIsTUFBTUMsT0FBT0QsS0FBS0UsSUFBSSxLQUFLLFlBQVlGLEtBQUtHLE9BQU8sQ0FBQ0MsV0FBVyxLQUFLO0lBQ3BFLE1BQU1DLE9BQ0pKLEtBQUtLLE1BQU0sS0FBSyxLQUFLTCxLQUFLTSxVQUFVLENBQUMsT0FBTyxJQUFJLE9BQU8sTUFDbkROLEtBQUtNLFVBQVUsQ0FBQyxLQUNoQjtJQUNOLE9BQU9GLE9BQU8sR0FBRyxPQUFPLE9BQU1BLE9BQU8sR0FBRyxPQUFPLE1BQzNDQSxPQUFPLEdBQUcsT0FBTyxNQUNqQkc7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhaW5lcmRfbXVsdGlub3Rlcy8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtaGVhZGluZy1yYW5rL2xpYi9pbmRleC5qcz84YjAwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLk5vZGVzfSBOb2Rlc1xuICovXG5cbi8qKlxuICogR2V0IHRoZSByYW5rIChgMWAgdG8gYDZgKSBvZiBoZWFkaW5ncyAoYGgxYCB0byBgaDZgKS5cbiAqXG4gKiBAcGFyYW0ge05vZGVzfSBub2RlXG4gKiAgIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICogICBSYW5rIG9mIHRoZSBoZWFkaW5nIG9yIGB1bmRlZmluZWRgIGlmIG5vdCBhIGhlYWRpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZWFkaW5nUmFuayhub2RlKSB7XG4gIGNvbnN0IG5hbWUgPSBub2RlLnR5cGUgPT09ICdlbGVtZW50JyA/IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpIDogJydcbiAgY29uc3QgY29kZSA9XG4gICAgbmFtZS5sZW5ndGggPT09IDIgJiYgbmFtZS5jaGFyQ29kZUF0KDApID09PSAxMDQgLyogYGhgICovXG4gICAgICA/IG5hbWUuY2hhckNvZGVBdCgxKVxuICAgICAgOiAwXG4gIHJldHVybiBjb2RlID4gNDggLyogYDBgICovICYmIGNvZGUgPCA1NSAvKiBgN2AgKi9cbiAgICA/IGNvZGUgLSA0OCAvKiBgMGAgKi9cbiAgICA6IHVuZGVmaW5lZFxufVxuIl0sIm5hbWVzIjpbImhlYWRpbmdSYW5rIiwibm9kZSIsIm5hbWUiLCJ0eXBlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiY29kZSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-heading-rank/lib/index.js\n");

/***/ })

};
;