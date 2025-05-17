"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-stringify";
exports.ids = ["vendor-chunks/rehype-stringify"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-stringify/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/rehype-stringify/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeStringify)\n/* harmony export */ });\n/* harmony import */ var hast_util_to_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-to-html */ \"(ssr)/./node_modules/hast-util-to-html/lib/index.js\");\n/**\n * @import {Root} from 'hast'\n * @import {Options} from 'hast-util-to-html'\n * @import {Compiler, Processor} from 'unified'\n */ \n/**\n * Plugin to add support for serializing as HTML.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {undefined}\n *   Nothing.\n */ function rehypeStringify(options) {\n    /** @type {Processor<undefined, undefined, undefined, Root, string>} */ // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.\n    const self = this;\n    const settings = {\n        ...self.data(\"settings\"),\n        ...options\n    };\n    self.compiler = compiler;\n    /**\n   * @type {Compiler<Root, string>}\n   */ function compiler(tree) {\n        return (0,hast_util_to_html__WEBPACK_IMPORTED_MODULE_0__.toHtml)(tree, settings);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXN0cmluZ2lmeS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztDQUlDLEdBRXVDO0FBRXhDOzs7Ozs7O0NBT0MsR0FDYyxTQUFTQyxnQkFBZ0JDLE9BQU87SUFDN0MscUVBQXFFLEdBQ3JFLG9GQUFvRjtJQUNwRixNQUFNQyxPQUFPLElBQUk7SUFDakIsTUFBTUMsV0FBVztRQUFDLEdBQUdELEtBQUtFLElBQUksQ0FBQyxXQUFXO1FBQUUsR0FBR0gsT0FBTztJQUFBO0lBRXREQyxLQUFLRyxRQUFRLEdBQUdBO0lBRWhCOztHQUVDLEdBQ0QsU0FBU0EsU0FBU0MsSUFBSTtRQUNwQixPQUFPUCx5REFBTUEsQ0FBQ08sTUFBTUg7SUFDdEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhaW5lcmRfbXVsdGlub3Rlcy8uL25vZGVfbW9kdWxlcy9yZWh5cGUtc3RyaW5naWZ5L2xpYi9pbmRleC5qcz8xMzUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGltcG9ydCB7Um9vdH0gZnJvbSAnaGFzdCdcbiAqIEBpbXBvcnQge09wdGlvbnN9IGZyb20gJ2hhc3QtdXRpbC10by1odG1sJ1xuICogQGltcG9ydCB7Q29tcGlsZXIsIFByb2Nlc3Nvcn0gZnJvbSAndW5pZmllZCdcbiAqL1xuXG5pbXBvcnQge3RvSHRtbH0gZnJvbSAnaGFzdC11dGlsLXRvLWh0bWwnXG5cbi8qKlxuICogUGx1Z2luIHRvIGFkZCBzdXBwb3J0IGZvciBzZXJpYWxpemluZyBhcyBIVE1MLlxuICpcbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICogICBOb3RoaW5nLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGVTdHJpbmdpZnkob3B0aW9ucykge1xuICAvKiogQHR5cGUge1Byb2Nlc3Nvcjx1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBSb290LCBzdHJpbmc+fSAqL1xuICAvLyBAdHMtZXhwZWN0LWVycm9yOiBUUyBpbiBKU0RvYyBnZW5lcmF0ZXMgd3JvbmcgdHlwZXMgaWYgYHRoaXNgIGlzIHR5cGVkIHJlZ3VsYXJseS5cbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgY29uc3Qgc2V0dGluZ3MgPSB7Li4uc2VsZi5kYXRhKCdzZXR0aW5ncycpLCAuLi5vcHRpb25zfVxuXG4gIHNlbGYuY29tcGlsZXIgPSBjb21waWxlclxuXG4gIC8qKlxuICAgKiBAdHlwZSB7Q29tcGlsZXI8Um9vdCwgc3RyaW5nPn1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBpbGVyKHRyZWUpIHtcbiAgICByZXR1cm4gdG9IdG1sKHRyZWUsIHNldHRpbmdzKVxuICB9XG59XG4iXSwibmFtZXMiOlsidG9IdG1sIiwicmVoeXBlU3RyaW5naWZ5Iiwib3B0aW9ucyIsInNlbGYiLCJzZXR0aW5ncyIsImRhdGEiLCJjb21waWxlciIsInRyZWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-stringify/lib/index.js\n");

/***/ })

};
;