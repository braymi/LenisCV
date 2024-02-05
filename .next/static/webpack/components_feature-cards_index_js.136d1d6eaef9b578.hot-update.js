"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_feature-cards_index_js",{

/***/ "./components/feature-cards/index.js":
/*!*******************************************!*\
  !*** ./components/feature-cards/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FeatureCards: function() { return /* binding */ FeatureCards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _studio_freight_hamo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @studio-freight/hamo */ \"./node_modules/@studio-freight/hamo/dist/hamo.modern.mjs\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/card */ \"./components/card/index.js\");\n/* harmony import */ var hooks_use_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/use-scroll */ \"./hooks/use-scroll.js\");\n/* harmony import */ var lib_maths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/maths */ \"./lib/maths.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _barrel_optimize_names_useWindowSize_react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=useWindowSize!=!react-use */ \"__barrel_optimize__?names=useWindowSize!=!./node_modules/react-use/esm/index.js\");\n/* harmony import */ var _feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feature-cards.module.scss */ \"./components/feature-cards/feature-cards.module.scss\");\n/* harmony import */ var _feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AppearTitle = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/*! import() */ \"components_appear-title_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! components/appear-title */ \"./components/appear-title/index.js\")).then((mod)=>mod.AppearTitle), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\feature-cards\\\\index.js -> \" + \"components/appear-title\"\n        ]\n    },\n    ssr: false\n});\n_c = AppearTitle;\n\nconst cards = [\n    {\n        text: \"Past experience as a delivery driver taught me to focus in stress\"\n    },\n    {\n        text: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Lightweight \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, undefined),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"contrast semi-bold\",\n                    children: \"(under 3kb)\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true)\n    },\n    {\n        text: \"Made for 2022+\"\n    },\n    {\n        text: \"Bring your own animation library\"\n    },\n    {\n        text: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"CONTROL THE SCROLL EASING DURATION\"\n        }, void 0, false)\n    },\n    {\n        text: \"Use any element as scroller\"\n    },\n    {\n        text: \"Enjoy horizontal + vertical support\"\n    },\n    {\n        text: \"Feel free to use “position: sticky” again\"\n    },\n    {\n        text: \"touch support\"\n    }\n];\nconst FeatureCards = ()=>{\n    _s();\n    const element = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();\n    const [setRef, rect] = (0,_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_7__.useRect)();\n    const { height: windowHeight } = (0,_barrel_optimize_names_useWindowSize_react_use__WEBPACK_IMPORTED_MODULE_8__.useWindowSize)();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    (0,hooks_use_scroll__WEBPACK_IMPORTED_MODULE_3__.useScroll)((param)=>{\n        let { scroll } = param;\n        const start = rect.top - windowHeight * 2;\n        const end = rect.top + rect.height - windowHeight;\n        const progress = (0,lib_maths__WEBPACK_IMPORTED_MODULE_4__.clamp)(0, (0,lib_maths__WEBPACK_IMPORTED_MODULE_4__.mapRange)(start, end, scroll, 0, 1), 1);\n        element.current.style.setProperty(\"--progress\", (0,lib_maths__WEBPACK_IMPORTED_MODULE_4__.clamp)(0, (0,lib_maths__WEBPACK_IMPORTED_MODULE_4__.mapRange)(rect.top, end, scroll, 0, 1), 1));\n        const step = Math.floor(progress * 10);\n        setCurrent(step);\n    }, [\n        rect\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: (node)=>{\n            setRef(node);\n        },\n        className: (_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_9___default().features),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"layout-block-inner\", (_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sticky)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                    className: (_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"h3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppearTitle, {\n                            children: [\n                                \"Ray tries \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, undefined),\n                                \"its best\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"grey\",\n                                    children: \"always\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: element,\n                    children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SingleCard, {\n                            index: index,\n                            text: card.text,\n                            number: index + 1,\n                            current: index <= current - 1\n                        }, index, false, {\n                            fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FeatureCards, \"TNoYtFbMu1VA/4pTP4d4nKdo+Gs=\", false, function() {\n    return [\n        _studio_freight_hamo__WEBPACK_IMPORTED_MODULE_7__.useRect,\n        _barrel_optimize_names_useWindowSize_react_use__WEBPACK_IMPORTED_MODULE_8__.useWindowSize,\n        hooks_use_scroll__WEBPACK_IMPORTED_MODULE_3__.useScroll\n    ];\n});\n_c1 = FeatureCards;\nconst SingleCard = (param)=>{\n    let { text, number, index, current } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card), current && (_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_9___default().current)),\n        style: {\n            \"--i\": index\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            background: \"rgba(239, 239, 239, 0.8)\",\n            number: number,\n            text: text\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\Lenis\\\\components\\\\feature-cards\\\\index.js\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = SingleCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"AppearTitle\");\n$RefreshReg$(_c1, \"FeatureCards\");\n$RefreshReg$(_c2, \"SingleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVdsQixnREFBRUEsQ0FBQ2Esd0VBQU0sRUFBRVksV0FBV1osMkVBQVM7UUFBR21CLE9BQU87WUFBRSxPQUFPZTtRQUFNO2tCQUN0RSw0RUFBQzlDLGlEQUFJQTtZQUFDaUQsWUFBVztZQUEyQkQsUUFBUUE7WUFBUWxDLE1BQU1BOzs7Ozs7Ozs7OztBQUd4RTtNQU5NaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlLWNhcmRzL2luZGV4LmpzP2E0ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVjdCB9IGZyb20gJ0BzdHVkaW8tZnJlaWdodC9oYW1vJ1xuaW1wb3J0IGNuIGZyb20gJ2Nsc3gnXG5cbmltcG9ydCB7IENhcmQgfSBmcm9tICdjb21wb25lbnRzL2NhcmQnXG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tICdob29rcy91c2Utc2Nyb2xsJ1xuaW1wb3J0IHsgY2xhbXAsIG1hcFJhbmdlIH0gZnJvbSAnbGliL21hdGhzJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gJ3JlYWN0LXVzZSdcblxuY29uc3QgQXBwZWFyVGl0bGUgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoJ2NvbXBvbmVudHMvYXBwZWFyLXRpdGxlJykudGhlbigobW9kKSA9PiBtb2QuQXBwZWFyVGl0bGUpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5pbXBvcnQgcyBmcm9tICcuL2ZlYXR1cmUtY2FyZHMubW9kdWxlLnNjc3MnXG5cbmNvbnN0IGNhcmRzID0gW1xuICB7IHRleHQ6ICdQYXN0IGV4cGVyaWVuY2UgYXMgYSBkZWxpdmVyeSBkcml2ZXIgdGF1Z2h0IG1lIHRvIGZvY3VzIGluIHN0cmVzcycgfSxcblxuICB7XG4gICAgdGV4dDogKFxuICAgICAgPD5cbiAgICAgICAgTGlnaHR3ZWlnaHQgPGJyIC8+eycgJ31cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udHJhc3Qgc2VtaS1ib2xkXCI+KHVuZGVyIDNrYik8L3NwYW4+XG4gICAgICA8Lz5cbiAgICApLFxuICB9LFxuICB7IHRleHQ6ICdNYWRlIGZvciAyMDIyKycgfSxcbiAgeyB0ZXh0OiAnQnJpbmcgeW91ciBvd24gYW5pbWF0aW9uIGxpYnJhcnknIH0sXG4gIHtcbiAgICB0ZXh0OiA8PkNPTlRST0wgVEhFIFNDUk9MTCBFQVNJTkcgRFVSQVRJT048Lz4sXG4gIH0sXG4gIHsgdGV4dDogJ1VzZSBhbnkgZWxlbWVudCBhcyBzY3JvbGxlcicgfSxcbiAgeyB0ZXh0OiAnRW5qb3kgaG9yaXpvbnRhbCArIHZlcnRpY2FsIHN1cHBvcnQnIH0sXG4gIHsgdGV4dDogJ0ZlZWwgZnJlZSB0byB1c2Ug4oCccG9zaXRpb246IHN0aWNreeKAnSBhZ2FpbicgfSxcbiAge1xuICAgIHRleHQ6ICd0b3VjaCBzdXBwb3J0JyxcbiAgfSxcbl1cblxuZXhwb3J0IGNvbnN0IEZlYXR1cmVDYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IHVzZVJlZigpXG4gIGNvbnN0IFtzZXRSZWYsIHJlY3RdID0gdXNlUmVjdCgpXG4gIGNvbnN0IHsgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgfSA9IHVzZVdpbmRvd1NpemUoKVxuXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKClcblxuICB1c2VTY3JvbGwoXG4gICAgKHsgc2Nyb2xsIH0pID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gcmVjdC50b3AgLSB3aW5kb3dIZWlnaHQgKiAyXG4gICAgICBjb25zdCBlbmQgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC0gd2luZG93SGVpZ2h0XG5cbiAgICAgIGNvbnN0IHByb2dyZXNzID0gY2xhbXAoMCwgbWFwUmFuZ2Uoc3RhcnQsIGVuZCwgc2Nyb2xsLCAwLCAxKSwgMSlcblxuICAgICAgZWxlbWVudC5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1wcm9ncmVzcycsXG4gICAgICAgIGNsYW1wKDAsIG1hcFJhbmdlKHJlY3QudG9wLCBlbmQsIHNjcm9sbCwgMCwgMSksIDEpXG4gICAgICApXG4gICAgICBjb25zdCBzdGVwID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIDEwKVxuICAgICAgc2V0Q3VycmVudChzdGVwKVxuICAgIH0sXG4gICAgW3JlY3RdXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgc2V0UmVmKG5vZGUpXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPXtzLmZlYXR1cmVzfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbignbGF5b3V0LWJsb2NrLWlubmVyJywgcy5zdGlja3kpfT5cbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT17cy50aXRsZX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaDNcIj5cbiAgICAgICAgICAgIDxBcHBlYXJUaXRsZT5cbiAgICAgICAgICAgICAgUmF5IHRyaWVzIDxiciAvPlxuICAgICAgICAgICAgICBpdHMgYmVzdFxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleVwiPmFsd2F5czwvc3Bhbj5cbiAgICAgICAgICAgIDwvQXBwZWFyVGl0bGU+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8ZGl2IHJlZj17ZWxlbWVudH0+XG4gICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTaW5nbGVDYXJkXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgdGV4dD17Y2FyZC50ZXh0fVxuICAgICAgICAgICAgICBudW1iZXI9e2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgY3VycmVudD17aW5kZXggPD0gY3VycmVudCAtIDF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFNpbmdsZUNhcmQgPSAoeyB0ZXh0LCBudW1iZXIsIGluZGV4LCBjdXJyZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24ocy5jYXJkLCBjdXJyZW50ICYmIHMuY3VycmVudCl9IHN0eWxlPXt7ICctLWknOiBpbmRleCB9fT5cbiAgICAgIDxDYXJkIGJhY2tncm91bmQ9XCJyZ2JhKDIzOSwgMjM5LCAyMzksIDAuOClcIiBudW1iZXI9e251bWJlcn0gdGV4dD17dGV4dH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJlY3QiLCJjbiIsIkNhcmQiLCJ1c2VTY3JvbGwiLCJjbGFtcCIsIm1hcFJhbmdlIiwiZHluYW1pYyIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlV2luZG93U2l6ZSIsIkFwcGVhclRpdGxlIiwidGhlbiIsIm1vZCIsInNzciIsInMiLCJjYXJkcyIsInRleHQiLCJiciIsInNwYW4iLCJjbGFzc05hbWUiLCJGZWF0dXJlQ2FyZHMiLCJlbGVtZW50Iiwic2V0UmVmIiwicmVjdCIsImhlaWdodCIsIndpbmRvd0hlaWdodCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2Nyb2xsIiwic3RhcnQiLCJ0b3AiLCJlbmQiLCJwcm9ncmVzcyIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJzdGVwIiwiTWF0aCIsImZsb29yIiwiZGl2IiwicmVmIiwibm9kZSIsImZlYXR1cmVzIiwic3RpY2t5IiwiYXNpZGUiLCJ0aXRsZSIsInAiLCJtYXAiLCJjYXJkIiwiaW5kZXgiLCJTaW5nbGVDYXJkIiwibnVtYmVyIiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/feature-cards/index.js\n"));

/***/ })

});