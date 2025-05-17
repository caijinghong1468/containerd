"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/direction";
exports.ids = ["vendor-chunks/direction"];
exports.modules = {

/***/ "(ssr)/./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   direction: () => (/* binding */ direction)\n/* harmony export */ });\nconst rtlRange = \"֑-߿יִ-﷽ﹰ-ﻼ\";\nconst ltrRange = \"A-Za-z\\xc0-\\xd6\\xd8-\\xf6\" + \"\\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜\" + \"︀-﹯﻽-￿\";\n/* eslint-disable no-misleading-character-class */ const rtl = new RegExp(\"^[^\" + ltrRange + \"]*[\" + rtlRange + \"]\");\nconst ltr = new RegExp(\"^[^\" + rtlRange + \"]*[\" + ltrRange + \"]\");\n/* eslint-enable no-misleading-character-class */ /**\n * Detect the direction of text: left-to-right, right-to-left, or neutral\n *\n * @param {string} value\n * @returns {'rtl'|'ltr'|'neutral'}\n */ function direction(value) {\n    const source = String(value || \"\");\n    return rtl.test(source) ? \"rtl\" : ltr.test(source) ? \"ltr\" : \"neutral\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXO0FBQ2pCLE1BQU1DLFdBQ0osNkJBQ0EscUJBQ0E7QUFFRixnREFBZ0QsR0FDaEQsTUFBTUMsTUFBTSxJQUFJQyxPQUFPLFFBQVFGLFdBQVcsUUFBUUQsV0FBVztBQUM3RCxNQUFNSSxNQUFNLElBQUlELE9BQU8sUUFBUUgsV0FBVyxRQUFRQyxXQUFXO0FBQzdELCtDQUErQyxHQUUvQzs7Ozs7Q0FLQyxHQUNNLFNBQVNJLFVBQVVDLEtBQUs7SUFDN0IsTUFBTUMsU0FBU0MsT0FBT0YsU0FBUztJQUMvQixPQUFPSixJQUFJTyxJQUFJLENBQUNGLFVBQVUsUUFBUUgsSUFBSUssSUFBSSxDQUFDRixVQUFVLFFBQVE7QUFDL0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWluZXJkX211bHRpbm90ZXMvLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzP2Y1MmYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcnRsUmFuZ2UgPSAnXFx1MDU5MS1cXHUwN0ZGXFx1RkIxRC1cXHVGREZEXFx1RkU3MC1cXHVGRUZDJ1xuY29uc3QgbHRyUmFuZ2UgPVxuICAnQS1aYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2JyArXG4gICdcXHUwMEY4LVxcdTAyQjhcXHUwMzAwLVxcdTA1OTBcXHUwODAwLVxcdTFGRkZcXHUyMDBFXFx1MkMwMC1cXHVGQjFDJyArXG4gICdcXHVGRTAwLVxcdUZFNkZcXHVGRUZELVxcdUZGRkYnXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1pc2xlYWRpbmctY2hhcmFjdGVyLWNsYXNzICovXG5jb25zdCBydGwgPSBuZXcgUmVnRXhwKCdeW14nICsgbHRyUmFuZ2UgKyAnXSpbJyArIHJ0bFJhbmdlICsgJ10nKVxuY29uc3QgbHRyID0gbmV3IFJlZ0V4cCgnXlteJyArIHJ0bFJhbmdlICsgJ10qWycgKyBsdHJSYW5nZSArICddJylcbi8qIGVzbGludC1lbmFibGUgbm8tbWlzbGVhZGluZy1jaGFyYWN0ZXItY2xhc3MgKi9cblxuLyoqXG4gKiBEZXRlY3QgdGhlIGRpcmVjdGlvbiBvZiB0ZXh0OiBsZWZ0LXRvLXJpZ2h0LCByaWdodC10by1sZWZ0LCBvciBuZXV0cmFsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7J3J0bCd8J2x0cid8J25ldXRyYWwnfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aW9uKHZhbHVlKSB7XG4gIGNvbnN0IHNvdXJjZSA9IFN0cmluZyh2YWx1ZSB8fCAnJylcbiAgcmV0dXJuIHJ0bC50ZXN0KHNvdXJjZSkgPyAncnRsJyA6IGx0ci50ZXN0KHNvdXJjZSkgPyAnbHRyJyA6ICduZXV0cmFsJ1xufVxuIl0sIm5hbWVzIjpbInJ0bFJhbmdlIiwibHRyUmFuZ2UiLCJydGwiLCJSZWdFeHAiLCJsdHIiLCJkaXJlY3Rpb24iLCJ2YWx1ZSIsInNvdXJjZSIsIlN0cmluZyIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/direction/index.js\n");

/***/ })

};
;