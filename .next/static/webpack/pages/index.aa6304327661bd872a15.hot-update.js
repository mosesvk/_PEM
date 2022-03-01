"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/VideoBanner/VideoBanner.js":
/*!***********************************************!*\
  !*** ./components/VideoBanner/VideoBanner.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ \"./node_modules/@material-ui/icons/PlayArrow.js\");\n/* harmony import */ var _material_ui_icons_Pause__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Pause */ \"./node_modules/@material-ui/icons/Pause.js\");\n/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Send */ \"./node_modules/@material-ui/icons/Send.js\");\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/index.esm.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Hidden */ \"./node_modules/@material-ui/core/esm/Hidden/index.js\");\n/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/common */ \"./theme/common.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/imgAPI */ \"./public/images/imgAPI.js\");\n/* harmony import */ var _youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../youtube */ \"./youtube.js\");\n/* harmony import */ var _youtube__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_youtube__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-style */ \"./components/VideoBanner/banner-style.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mosesvk/Programming/_PEM/components/VideoBanner/VideoBanner.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction VideoBanner(props) {\n  _s();\n\n  // Theme breakpoints\n  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.useTheme)();\n  var text = (0,_theme_common__WEBPACK_IMPORTED_MODULE_4__.useText)();\n  var isDesktop = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__.default)(theme.breakpoints.up('lg'));\n  var isTablet = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__.default)(theme.breakpoints.up('sm'));\n  var isMobile = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__.default)(theme.breakpoints.down('md')); // Translation function\n\n  var t = props.t; // Youtube player\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      play = _useState[0],\n      setPlayed = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      playCtrl = _useState2[0],\n      setPlayedCtrl = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      player = _useState3[0],\n      setPlayer = _useState3[1];\n\n  var classes = (0,_banner_style__WEBPACK_IMPORTED_MODULE_8__.default)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (isDesktop) {\n      /* Attention\n      ** HandleScroll function to optimize site with video background may give an error log\n      ** Uncaught TypeError: Cannot read property 'src' of null\n      ** It's because HMR in development mode, and react-youtube need to refresh.\n      ** The error log will not happen in production mode or just reload browser (development mode)\n      ** You can uncomment _onPlay() function, if you don't want see error browser log.\n      ** But then every changes you make, the browser will auto reload.\n      */\n      // _onPlay();\n    }\n  }, []);\n\n  var _onEnd = function _onEnd(event) {\n    event.target.playVideo();\n  };\n\n  var _onPlay = function _onPlay() {\n    var curTime = player[0].getCurrentTime();\n\n    if (curTime > 0) {\n      setPlayed(true);\n      setPlayedCtrl(true);\n    }\n  };\n\n  var _onReady = function _onReady(event) {\n    player.push(event.target);\n    setPlayer(player);\n  };\n\n  var _onTogglePause = function _onTogglePause() {\n    setPlayedCtrl(!playCtrl);\n\n    if (playCtrl) {\n      player[0].pauseVideo();\n    } else {\n      player[0].playVideo();\n    }\n  };\n\n  var opts = {\n    height: '720',\n    width: '1080',\n    playerVars: {\n      // https://developers.google.com/youtube/player_parameters\n      autoplay: 1,\n      controls: 0,\n      rel: 0,\n      showinfo: 0,\n      mute: 1,\n      origin: 'http://localhost:3001'\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n    className: classes.heroContent,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__.default, {\n      smUp: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"figure\", {\n        className: classes.mobileCover,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"img\", {\n          src: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_6__.default.agency[0],\n          alt: \"cover\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__.default, {\n      fixed: isDesktop,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__.default, {\n        container: true,\n        spacing: 6,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__.default, {\n          item: true,\n          md: 6,\n          xs: 12,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            className: classes.bannerText,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n              className: classes.title,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__.default, {\n                variant: \"h3\",\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)(classes.textHelper, text.title),\n                children: t('common:agency-landing.banner_title')\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 104,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__.default, {\n              className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)(classes.subtitle, text.subtitle),\n              variant: \"h5\",\n              children: t('common:agency-landing.banner_subtitle')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {\n              variant: \"outlined\",\n              size: \"large\",\n              color: \"secondary\",\n              className: classes.button,\n              children: [t('common:agency-landing.banner_button'), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_17__.default, {\n                className: classes.icon\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 113,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, this), isTablet && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__.default, {\n          item: true,\n          md: 6,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n            className: classes.videoWrap,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n              className: classes.videoFigure,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n                className: classes.innerFigure,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__.default, {\n                  mdDown: true,\n                  children: play && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__.default, {\n                    className: classes.btnPlay,\n                    onClick: _onTogglePause,\n                    children: playCtrl ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_icons_Pause__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 128,\n                      columnNumber: 39\n                    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_20__.default, {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 128,\n                      columnNumber: 55\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 124,\n                    columnNumber: 25\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 122,\n                  columnNumber: 21\n                }, this), !play || isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"img\", {\n                  src: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_6__.default.agency[0],\n                  alt: \"cover\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 132,\n                  columnNumber: 42\n                }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n                  className: classes.overlay\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 133,\n                  columnNumber: 21\n                }, this), (_youtube__WEBPACK_IMPORTED_MODULE_7___default().use) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"div\", {\n                  className: classes.video,\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__.default, {\n                    mdDown: true,\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_3__.default, {\n                      videoId: \"https://www.youtube.com/watch?v=Ys5XzdYpJGs\",\n                      opts: opts,\n                      onReady: _onReady,\n                      onEnd: _onEnd,\n                      onPlay: _onPlay\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 137,\n                      columnNumber: 27\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 136,\n                    columnNumber: 25\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 135,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 5\n  }, this);\n}\n\n_s(VideoBanner, \"QtlZmfEakxP/dERfZ4p0XrHB1Bk=\", false, function () {\n  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.useTheme, _theme_common__WEBPACK_IMPORTED_MODULE_4__.useText, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__.default, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__.default, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__.default, _banner_style__WEBPACK_IMPORTED_MODULE_8__.default];\n});\n\n_c = VideoBanner;\nVideoBanner.propTypes = {\n  t: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_i18n__WEBPACK_IMPORTED_MODULE_5__.withTranslation)(['agency-landing'])(VideoBanner));\n\nvar _c;\n\n$RefreshReg$(_c, \"VideoBanner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvQmFubmVyL1ZpZGVvQmFubmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTc0IsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDMUI7QUFDQSxNQUFNQyxLQUFLLEdBQUdsQixtRUFBUSxFQUF0QjtBQUNBLE1BQU1tQixJQUFJLEdBQUdSLHNEQUFPLEVBQXBCO0FBQ0EsTUFBTVMsU0FBUyxHQUFHdEIseUVBQWEsQ0FBQ29CLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxDQUEvQjtBQUNBLE1BQU1DLFFBQVEsR0FBR3pCLHlFQUFhLENBQUNvQixLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsQ0FBOUI7QUFDQSxNQUFNRSxRQUFRLEdBQUcxQix5RUFBYSxDQUFDb0IsS0FBSyxDQUFDRyxXQUFOLENBQWtCSSxJQUFsQixDQUF1QixJQUF2QixDQUFELENBQTlCLENBTjBCLENBUTFCOztBQUNBLE1BQVFDLENBQVIsR0FBY1QsS0FBZCxDQUFRUyxDQUFSLENBVDBCLENBVzFCOztBQUNBLGtCQUEwQi9CLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9nQyxJQUFQO0FBQUEsTUFBYUMsU0FBYjs7QUFDQSxtQkFBa0NqQywrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPa0MsUUFBUDtBQUFBLE1BQWlCQyxhQUFqQjs7QUFDQSxtQkFBNEJuQywrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFBQSxNQUFPb0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHbEIsc0RBQVMsRUFB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QyxFQUFBQSxDQUFDLEVBQUU3QixtRUFBeUI0RTtBQUROLENBQXhCO0FBSUEsK0RBQWU3RCxzREFBZSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFmLENBQW9DSSxXQUFwQyxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVmlkZW9CYW5uZXIvVmlkZW9CYW5uZXIuanM/M2U2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgUGxheUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlBcnJvdyc7XG5pbXBvcnQgUGF1c2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QYXVzZSc7XG5pbXBvcnQgU2VuZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlbmQnO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gJ34vdGhlbWUvY29tbW9uJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XG5pbXBvcnQgaW1nQXBpIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xuaW1wb3J0IHl0IGZyb20gJ34veW91dHViZSc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vYmFubmVyLXN0eWxlJztcblxuZnVuY3Rpb24gVmlkZW9CYW5uZXIocHJvcHMpIHtcbiAgLy8gVGhlbWUgYnJlYWtwb2ludHNcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpKTtcbiAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpKTtcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJykpO1xuXG4gIC8vIFRyYW5zbGF0aW9uIGZ1bmN0aW9uXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XG5cbiAgLy8gWW91dHViZSBwbGF5ZXJcbiAgY29uc3QgW3BsYXksIHNldFBsYXllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwbGF5Q3RybCwgc2V0UGxheWVkQ3RybF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3BsYXllciwgc2V0UGxheWVyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzRGVza3RvcCkge1xuICAgICAgLyogQXR0ZW50aW9uXG4gICAgICAqKiBIYW5kbGVTY3JvbGwgZnVuY3Rpb24gdG8gb3B0aW1pemUgc2l0ZSB3aXRoIHZpZGVvIGJhY2tncm91bmQgbWF5IGdpdmUgYW4gZXJyb3IgbG9nXG4gICAgICAqKiBVbmNhdWdodCBUeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnR5ICdzcmMnIG9mIG51bGxcbiAgICAgICoqIEl0J3MgYmVjYXVzZSBITVIgaW4gZGV2ZWxvcG1lbnQgbW9kZSwgYW5kIHJlYWN0LXlvdXR1YmUgbmVlZCB0byByZWZyZXNoLlxuICAgICAgKiogVGhlIGVycm9yIGxvZyB3aWxsIG5vdCBoYXBwZW4gaW4gcHJvZHVjdGlvbiBtb2RlIG9yIGp1c3QgcmVsb2FkIGJyb3dzZXIgKGRldmVsb3BtZW50IG1vZGUpXG4gICAgICAqKiBZb3UgY2FuIHVuY29tbWVudCBfb25QbGF5KCkgZnVuY3Rpb24sIGlmIHlvdSBkb24ndCB3YW50IHNlZSBlcnJvciBicm93c2VyIGxvZy5cbiAgICAgICoqIEJ1dCB0aGVuIGV2ZXJ5IGNoYW5nZXMgeW91IG1ha2UsIHRoZSBicm93c2VyIHdpbGwgYXV0byByZWxvYWQuXG4gICAgICAqL1xuICAgICAgLy8gX29uUGxheSgpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IF9vbkVuZCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG4gIH07XG5cbiAgY29uc3QgX29uUGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJUaW1lID0gcGxheWVyWzBdLmdldEN1cnJlbnRUaW1lKCk7XG4gICAgaWYgKGN1clRpbWUgPiAwKSB7XG4gICAgICBzZXRQbGF5ZWQodHJ1ZSk7XG4gICAgICBzZXRQbGF5ZWRDdHJsKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBfb25SZWFkeSA9IGV2ZW50ID0+IHtcbiAgICBwbGF5ZXIucHVzaChldmVudC50YXJnZXQpO1xuICAgIHNldFBsYXllcihwbGF5ZXIpO1xuICB9O1xuXG4gIGNvbnN0IF9vblRvZ2dsZVBhdXNlID0gKCkgPT4ge1xuICAgIHNldFBsYXllZEN0cmwoIXBsYXlDdHJsKTtcbiAgICBpZiAocGxheUN0cmwpIHtcbiAgICAgIHBsYXllclswXS5wYXVzZVZpZGVvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllclswXS5wbGF5VmlkZW8oKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBoZWlnaHQ6ICc3MjAnLFxuICAgIHdpZHRoOiAnMTA4MCcsXG4gICAgcGxheWVyVmFyczogeyAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXG4gICAgICBhdXRvcGxheTogMSxcbiAgICAgIGNvbnRyb2xzOiAwLFxuICAgICAgcmVsOiAwLFxuICAgICAgc2hvd2luZm86IDAsXG4gICAgICBtdXRlOiAxLFxuICAgICAgb3JpZ2luOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxJ1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250ZW50fT5cbiAgICAgIDxIaWRkZW4gc21VcD5cbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e2NsYXNzZXMubW9iaWxlQ292ZXJ9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWdBcGkuYWdlbmN5WzBdfSBhbHQ9XCJjb3ZlclwiIC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgPC9IaWRkZW4+XG4gICAgICA8Q29udGFpbmVyIGZpeGVkPXtpc0Rlc2t0b3B9PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Nn0+XG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhbm5lclRleHR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGV4dEhlbHBlciwgdGV4dC50aXRsZSl9PlxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjphZ2VuY3ktbGFuZGluZy5iYW5uZXJfdGl0bGUnKX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5zdWJ0aXRsZSwgdGV4dC5zdWJ0aXRsZSl9IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgIHt0KCdjb21tb246YWdlbmN5LWxhbmRpbmcuYmFubmVyX3N1YnRpdGxlJyl9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxuICAgICAgICAgICAgICAgIHt0KCdjb21tb246YWdlbmN5LWxhbmRpbmcuYmFubmVyX2J1dHRvbicpfVxuICAgICAgICAgICAgICAgIDxTZW5kSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAge2lzVGFibGV0ICYmIChcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52aWRlb1dyYXB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvRmlndXJlfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyRmlndXJlfT5cbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XG4gICAgICAgICAgICAgICAgICAgICAge3BsYXkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0blBsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e19vblRvZ2dsZVBhdXNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGxheUN0cmwgPyA8UGF1c2VJY29uIC8+IDogPFBsYXlJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgICAgICAgICAgICB7IXBsYXkgfHwgaXNNb2JpbGUgPyA8aW1nIHNyYz17aW1nQXBpLmFnZW5jeVswXX0gYWx0PVwiY292ZXJcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm92ZXJsYXl9IC8+XG4gICAgICAgICAgICAgICAgICAgIHt5dC51c2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZpZGVvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8WW91VHViZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVlzNVh6ZFlwSkdzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzPXtvcHRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVhZHk9e19vblJlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kPXtfb25FbmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QbGF5PXtfb25QbGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblZpZGVvQmFubmVyLnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2FnZW5jeS1sYW5kaW5nJ10pKFZpZGVvQmFubmVyKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvcFR5cGVzIiwidXNlTWVkaWFRdWVyeSIsImNsc3giLCJ1c2VUaGVtZSIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJQbGF5SWNvbiIsIlBhdXNlSWNvbiIsIlNlbmRJY29uIiwiWW91VHViZSIsIlR5cG9ncmFwaHkiLCJHcmlkIiwiSGlkZGVuIiwidXNlVGV4dCIsIndpdGhUcmFuc2xhdGlvbiIsImltZ0FwaSIsInl0IiwidXNlU3R5bGVzIiwiVmlkZW9CYW5uZXIiLCJwcm9wcyIsInRoZW1lIiwidGV4dCIsImlzRGVza3RvcCIsImJyZWFrcG9pbnRzIiwidXAiLCJpc1RhYmxldCIsImlzTW9iaWxlIiwiZG93biIsInQiLCJwbGF5Iiwic2V0UGxheWVkIiwicGxheUN0cmwiLCJzZXRQbGF5ZWRDdHJsIiwicGxheWVyIiwic2V0UGxheWVyIiwiY2xhc3NlcyIsIl9vbkVuZCIsImV2ZW50IiwidGFyZ2V0IiwicGxheVZpZGVvIiwiX29uUGxheSIsImN1clRpbWUiLCJnZXRDdXJyZW50VGltZSIsIl9vblJlYWR5IiwicHVzaCIsIl9vblRvZ2dsZVBhdXNlIiwicGF1c2VWaWRlbyIsIm9wdHMiLCJoZWlnaHQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJhdXRvcGxheSIsImNvbnRyb2xzIiwicmVsIiwic2hvd2luZm8iLCJtdXRlIiwib3JpZ2luIiwiaGVyb0NvbnRlbnQiLCJtb2JpbGVDb3ZlciIsImFnZW5jeSIsImJhbm5lclRleHQiLCJ0aXRsZSIsInRleHRIZWxwZXIiLCJzdWJ0aXRsZSIsImJ1dHRvbiIsImljb24iLCJ2aWRlb1dyYXAiLCJ2aWRlb0ZpZ3VyZSIsImlubmVyRmlndXJlIiwiYnRuUGxheSIsIm92ZXJsYXkiLCJ1c2UiLCJ2aWRlbyIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoBanner/VideoBanner.js\n");

/***/ })

});