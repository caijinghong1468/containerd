"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-alphabetical";
exports.ids = ["vendor-chunks/is-alphabetical"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-alphabetical/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAlphabetical: () => (/* binding */ isAlphabetical)\n/* harmony export */ });\n/**\n * Check if the given character code, or the character code at the first\n * character, is alphabetical.\n *\n * @param {string|number} character\n * @returns {boolean} Whether `character` is alphabetical.\n */ function isAlphabetical(character) {\n    const code = typeof character === \"string\" ? character.charCodeAt(0) : character;\n    return code >= 97 && code <= 122 || code >= 65 && code <= 90;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtYWxwaGFiZXRpY2FsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0NBTUMsR0FDTSxTQUFTQSxlQUFlQyxTQUFTO0lBQ3RDLE1BQU1DLE9BQ0osT0FBT0QsY0FBYyxXQUFXQSxVQUFVRSxVQUFVLENBQUMsS0FBS0Y7SUFFNUQsT0FDRSxRQUFTLE1BQU1DLFFBQVEsT0FDdEJBLFFBQVEsTUFBTUEsUUFBUTtBQUUzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhaW5lcmRfbXVsdGlub3Rlcy8uL25vZGVfbW9kdWxlcy9pcy1hbHBoYWJldGljYWwvaW5kZXguanM/NTFhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuICogY2hhcmFjdGVyLCBpcyBhbHBoYWJldGljYWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBjaGFyYWN0ZXJcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIGBjaGFyYWN0ZXJgIGlzIGFscGhhYmV0aWNhbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQWxwaGFiZXRpY2FsKGNoYXJhY3Rlcikge1xuICBjb25zdCBjb2RlID1cbiAgICB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIChcbiAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgLyogYS16ICovIHx8XG4gICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgLyogQS1aICovXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpc0FscGhhYmV0aWNhbCIsImNoYXJhY3RlciIsImNvZGUiLCJjaGFyQ29kZUF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-alphabetical/index.js\n");

/***/ })

};
;