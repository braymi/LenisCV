"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use";
exports.ids = ["vendor-chunks/react-use"];
exports.modules = {

/***/ "./node_modules/react-use/esm/misc/util.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/misc/util.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isBrowser: () => (/* binding */ isBrowser),\n/* harmony export */   isNavigator: () => (/* binding */ isNavigator),\n/* harmony export */   noop: () => (/* binding */ noop),\n/* harmony export */   off: () => (/* binding */ off),\n/* harmony export */   on: () => (/* binding */ on)\n/* harmony export */ });\nvar noop = function () { };\nfunction on(obj) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.addEventListener) {\n        obj.addEventListener.apply(obj, args);\n    }\n}\nfunction off(obj) {\n    var args = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.removeEventListener) {\n        obj.removeEventListener.apply(obj, args);\n    }\n}\nvar isBrowser = typeof window !== 'undefined';\nvar isNavigator = typeof navigator !== 'undefined';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9taXNjL3V0aWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTztBQUNBO0FBQ1A7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5pcy13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vbWlzYy91dGlsLmpzPzZiMmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuZXhwb3J0IGZ1bmN0aW9uIG9uKG9iaikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKG9iaiAmJiBvYmouYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lci5hcHBseShvYmosIGFyZ3MpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBvZmYob2JqKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAob2JqICYmIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydCB2YXIgaXNOYXZpZ2F0b3IgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-use/esm/misc/util.js\n");

/***/ }),

/***/ "./node_modules/react-use/esm/useEffectOnce.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useEffectOnce.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar useEffectOnce = function (effect) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, []);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEffectOnce);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VFZmZlY3RPbmNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUNsQztBQUNBLElBQUksZ0RBQVM7QUFDYjtBQUNBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlbmlzLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VFZmZlY3RPbmNlLmpzPzFjMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZUVmZmVjdE9uY2UgPSBmdW5jdGlvbiAoZWZmZWN0KSB7XG4gICAgdXNlRWZmZWN0KGVmZmVjdCwgW10pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUVmZmVjdE9uY2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-use/esm/useEffectOnce.js\n");

/***/ }),

/***/ "./node_modules/react-use/esm/useIntersection.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useIntersection.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar useIntersection = function (ref, options) {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        if (ref.current && typeof IntersectionObserver === 'function') {\n            var handler = function (entries) {\n                setIntersectionObserverEntry(entries[0]);\n            };\n            var observer_1 = new IntersectionObserver(handler, options);\n            observer_1.observe(ref.current);\n            return function () {\n                setIntersectionObserverEntry(null);\n                observer_1.disconnect();\n            };\n        }\n        return function () { };\n    }, [ref.current, options.threshold, options.root, options.rootMargin]);\n    return intersectionObserverEntry;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIntersection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VJbnRlcnNlY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQzVDO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQixJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5pcy13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlSW50ZXJzZWN0aW9uLmpzPzNiM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbnZhciB1c2VJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAocmVmLCBvcHRpb25zKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUobnVsbCksIGludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgPSBfYVswXSwgc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCAmJiB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KGVudHJpZXNbMF0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcl8xID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJfMS5vYnNlcnZlKHJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeShudWxsKTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlcl8xLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgfTtcbiAgICB9LCBbcmVmLmN1cnJlbnQsIG9wdGlvbnMudGhyZXNob2xkLCBvcHRpb25zLnJvb3QsIG9wdGlvbnMucm9vdE1hcmdpbl0pO1xuICAgIHJldHVybiBpbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZUludGVyc2VjdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-use/esm/useIntersection.js\n");

/***/ }),

/***/ "./node_modules/react-use/esm/useRafState.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useRafState.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUnmount */ \"./node_modules/react-use/esm/useUnmount.js\");\n\n\nvar useRafState = function (initialState) {\n    var frame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), state = _a[0], setState = _a[1];\n    var setRafState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {\n        cancelAnimationFrame(frame.current);\n        frame.current = requestAnimationFrame(function () {\n            setState(value);\n        });\n    }, []);\n    (0,_useUnmount__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () {\n        cancelAnimationFrame(frame.current);\n    });\n    return [state, setRafState];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VSYWZTdGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNEO0FBQ2hCO0FBQ3RDO0FBQ0EsZ0JBQWdCLDZDQUFNO0FBQ3RCLGFBQWEsK0NBQVE7QUFDckIsc0JBQXNCLGtEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsSUFBSSx1REFBVTtBQUNkO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5pcy13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlUmFmU3RhdGUuanM/MTMzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVbm1vdW50IGZyb20gJy4vdXNlVW5tb3VudCc7XG52YXIgdXNlUmFmU3RhdGUgPSBmdW5jdGlvbiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgdmFyIGZyYW1lID0gdXNlUmVmKDApO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdmFyIHNldFJhZlN0YXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lLmN1cnJlbnQpO1xuICAgICAgICBmcmFtZS5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldFN0YXRlKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHVzZVVubW91bnQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZS5jdXJyZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRSYWZTdGF0ZV07XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlUmFmU3RhdGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-use/esm/useRafState.js\n");

/***/ }),

/***/ "./node_modules/react-use/esm/useUnmount.js":
/*!**************************************************!*\
  !*** ./node_modules/react-use/esm/useUnmount.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEffectOnce */ \"./node_modules/react-use/esm/useEffectOnce.js\");\n\n\nvar useUnmount = function (fn) {\n    var fnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);\n    // update the ref each render so if it change the newest callback will be invoked\n    fnRef.current = fn;\n    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function () { return function () { return fnRef.current(); }; });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUnmount);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VVbm1vdW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0I7QUFDYTtBQUM1QztBQUNBLGdCQUFnQiw2Q0FBTTtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwwREFBYSxlQUFlLHFCQUFxQiw0QkFBNEI7QUFDakY7QUFDQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5pcy13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlVW5tb3VudC5qcz81Njc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFZmZlY3RPbmNlIGZyb20gJy4vdXNlRWZmZWN0T25jZSc7XG52YXIgdXNlVW5tb3VudCA9IGZ1bmN0aW9uIChmbikge1xuICAgIHZhciBmblJlZiA9IHVzZVJlZihmbik7XG4gICAgLy8gdXBkYXRlIHRoZSByZWYgZWFjaCByZW5kZXIgc28gaWYgaXQgY2hhbmdlIHRoZSBuZXdlc3QgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkXG4gICAgZm5SZWYuY3VycmVudCA9IGZuO1xuICAgIHVzZUVmZmVjdE9uY2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gZm5SZWYuY3VycmVudCgpOyB9OyB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VVbm1vdW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-use/esm/useUnmount.js\n");

/***/ }),

/***/ "./node_modules/react-use/esm/useWindowSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-use/esm/useWindowSize.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRafState */ \"./node_modules/react-use/esm/useRafState.js\");\n/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./misc/util */ \"./node_modules/react-use/esm/misc/util.js\");\n\n\n\nvar useWindowSize = function (initialWidth, initialHeight) {\n    if (initialWidth === void 0) { initialWidth = Infinity; }\n    if (initialHeight === void 0) { initialHeight = Infinity; }\n    var _a = (0,_useRafState__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        width: _misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser ? window.innerWidth : initialWidth,\n        height: _misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser ? window.innerHeight : initialHeight,\n    }), state = _a[0], setState = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        if (_misc_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser) {\n            var handler_1 = function () {\n                setState({\n                    width: window.innerWidth,\n                    height: window.innerHeight,\n                });\n            };\n            (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.on)(window, 'resize', handler_1);\n            return function () {\n                (0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.off)(window, 'resize', handler_1);\n            };\n        }\n    }, []);\n    return state;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowSize);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VXaW5kb3dTaXplLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtDO0FBQ007QUFDUztBQUNqRDtBQUNBLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMsYUFBYSx3REFBVztBQUN4QixlQUFlLGlEQUFTO0FBQ3hCLGdCQUFnQixpREFBUztBQUN6QixLQUFLO0FBQ0wsSUFBSSxnREFBUztBQUNiLFlBQVksaURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxZQUFZLDhDQUFFO0FBQ2Q7QUFDQSxnQkFBZ0IsK0NBQUc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVuaXMtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVdpbmRvd1NpemUuanM/YTg4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlUmFmU3RhdGUgZnJvbSAnLi91c2VSYWZTdGF0ZSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIsIG9mZiwgb24gfSBmcm9tICcuL21pc2MvdXRpbCc7XG52YXIgdXNlV2luZG93U2l6ZSA9IGZ1bmN0aW9uIChpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQpIHtcbiAgICBpZiAoaW5pdGlhbFdpZHRoID09PSB2b2lkIDApIHsgaW5pdGlhbFdpZHRoID0gSW5maW5pdHk7IH1cbiAgICBpZiAoaW5pdGlhbEhlaWdodCA9PT0gdm9pZCAwKSB7IGluaXRpYWxIZWlnaHQgPSBJbmZpbml0eTsgfVxuICAgIHZhciBfYSA9IHVzZVJhZlN0YXRlKHtcbiAgICAgICAgd2lkdGg6IGlzQnJvd3NlciA/IHdpbmRvdy5pbm5lcldpZHRoIDogaW5pdGlhbFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGlzQnJvd3NlciA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGluaXRpYWxIZWlnaHQsXG4gICAgfSksIHN0YXRlID0gX2FbMF0sIHNldFN0YXRlID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXJfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb24od2luZG93LCAncmVzaXplJywgaGFuZGxlcl8xKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb2ZmKHdpbmRvdywgJ3Jlc2l6ZScsIGhhbmRsZXJfMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-use/esm/useWindowSize.js\n");

/***/ })

};
;