/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/main.js":
/*!***************************!*\
  !*** ./static/js/main.js ***!
  \***************************/
/***/ (() => {

eval("$(document).ready(function () {\n  $(\"#submit\").click(function () {\n    const inputValue = $(\"#textinput\").val();\n    if (inputValue !== \"\") {\n      $(\"#msg\").text(\"please wait...\");\n      $.ajax({\n        url: \"/api/image\",\n        type: \"POST\",\n        contentType: \"application/json\",\n        dataType: \"json\",\n        data: JSON.stringify({ prompt: inputValue }),\n        success: function (response) {\n          // alert(JSON.stringify(response));\n          $(\"#msg\").hide();\n          $(\"#images\").empty();\n          if (!response.data || !response.data.length > 0) {\n            return alert(response.message);\n          }\n          $.each(response.data, function (index, image) {\n            $(\"#images\").append(`\n              <div>\n                <img\n                  class=\"h-auto max-w-full rounded-lg\"\n                  src=\"${image.url}\"\n                  alt=\"not found\"\n                />\n              </div>\n            `);\n          });\n        },\n        error: function (xhr, status, error) {\n          alert(\"Error: \" + error);\n        },\n      });\n    } else {\n      $(\"#msg\").text(\"Please enter the text\").addClass(\"text-red-700\");\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./static/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/main.js"]();
/******/ 	
/******/ })()
;