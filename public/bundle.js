/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst formEl = document.querySelector('form');\r\nconst selectEl = document.querySelector('#type');\r\nconst toFromEl = document.querySelector('#tofrom');\r\nconst detailsEl = document.querySelector('#details');\r\nconst amountEl = document.querySelector('#amount');\r\nconst logsEl = document.querySelector('ul');\r\nformEl.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const userData = organizeUserInputs(selectEl.value, toFromEl.value, detailsEl.value, amountEl.value);\r\n    displayRecord(userData);\r\n});\r\nfunction organizeUserInputs(type, counterAgent, details, amount) {\r\n    return {\r\n        type: type,\r\n        counterAgent: counterAgent,\r\n        details: details,\r\n        amount: amount\r\n    };\r\n}\r\nfunction displayRecord(obj) {\r\n    const liEl = document.createElement('li');\r\n    let content;\r\n    if (obj.type === 'invoice') {\r\n        content = displayInvoice(obj);\r\n    }\r\n    else {\r\n        content = displayPayment(obj);\r\n    }\r\n    liEl.innerHTML = content;\r\n    logsEl.prepend(liEl);\r\n}\r\nfunction displayInvoice(obj) {\r\n    return `\r\n     <h4>${obj.type}</h4>\r\n     <p>${obj.counterAgent} is owed ${obj.amount} for ${obj.details}</p>\r\n   `;\r\n}\r\nfunction displayPayment(obj) {\r\n    return `\r\n     <h4>${obj.type}</h4>\r\n     <p>${obj.counterAgent} owes ${obj.amount} for ${obj.details}</p>\r\n   `;\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IjtBQUVBLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFO0FBQzlDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUF1QjtBQUN0RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBc0I7QUFDdkUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQXNCO0FBQ3pFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFzQjtBQUN2RSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBc0I7QUFFaEUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3JDLENBQUMsQ0FBQyxjQUFjLEVBQUU7SUFDbEIsTUFBTSxRQUFRLEdBQWEsa0JBQWtCLENBQ3pDLFFBQVEsQ0FBQyxLQUFLLEVBQ2QsUUFBUSxDQUFDLEtBQUssRUFDZCxTQUFTLENBQUMsS0FBSyxFQUNmLFFBQVEsQ0FBQyxLQUFLLENBQ2pCO0lBQ0QsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUMxQixDQUFDLENBQUM7QUFFRixTQUFTLGtCQUFrQixDQUN2QixJQUFZLEVBQ1osWUFBb0IsRUFDcEIsT0FBZSxFQUNmLE1BQWM7SUFFZixPQUFPO1FBQ0osSUFBSSxFQUFFLElBQUk7UUFDVixZQUFZLEVBQUUsWUFBWTtRQUMxQixPQUFPLEVBQUUsT0FBTztRQUNoQixNQUFNLEVBQUUsTUFBTTtLQUNoQjtBQUNKLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxHQUFhO0lBQ2pDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3pDLElBQUksT0FBZTtJQUVuQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3pCLE9BQU8sR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0tBQy9CO1NBQU07UUFDSixPQUFPLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztLQUMvQjtJQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTztJQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN2QixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsR0FBYTtJQUNsQyxPQUFPO1dBQ0MsR0FBRyxDQUFDLElBQUk7VUFDVCxHQUFHLENBQUMsWUFBWSxZQUFZLEdBQUcsQ0FBQyxNQUFNLFFBQVEsR0FBRyxDQUFDLE9BQU87SUFDL0Q7QUFDSixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsR0FBUTtJQUM3QixPQUFPO1dBQ0MsR0FBRyxDQUFDLElBQUk7VUFDVCxHQUFHLENBQUMsWUFBWSxTQUFTLEdBQUcsQ0FBQyxNQUFNLFFBQVEsR0FBRyxDQUFDLE9BQU87SUFDNUQ7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LWZpbi1sb2dnZXIvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIlxyXG5cclxuY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpIVxyXG5jb25zdCBzZWxlY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlJykhIGFzIEhUTUxTZWxlY3RFbGVtZW50XHJcbmNvbnN0IHRvRnJvbUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZnJvbScpISBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbmNvbnN0IGRldGFpbHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJykhIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuY29uc3QgYW1vdW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW1vdW50JykhIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuY29uc3QgbG9nc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSEgYXMgSFRNTFVMaXN0RWxlbWVudFxyXG5cclxuZm9ybUVsLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICBjb25zdCB1c2VyRGF0YTogVXNlckRhdGEgPSBvcmdhbml6ZVVzZXJJbnB1dHMoXHJcbiAgICAgICBzZWxlY3RFbC52YWx1ZSxcclxuICAgICAgIHRvRnJvbUVsLnZhbHVlLFxyXG4gICAgICAgZGV0YWlsc0VsLnZhbHVlLFxyXG4gICAgICAgYW1vdW50RWwudmFsdWVcclxuICAgKVxyXG4gICBkaXNwbGF5UmVjb3JkKHVzZXJEYXRhKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gb3JnYW5pemVVc2VySW5wdXRzKFxyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgY291bnRlckFnZW50OiBzdHJpbmcsXHJcbiAgICBkZXRhaWxzOiBzdHJpbmcsXHJcbiAgICBhbW91bnQ6IHN0cmluZ1xyXG4pOiBVc2VyRGF0YSB7XHJcbiAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgIGNvdW50ZXJBZ2VudDogY291bnRlckFnZW50LFxyXG4gICAgICBkZXRhaWxzOiBkZXRhaWxzLFxyXG4gICAgICBhbW91bnQ6IGFtb3VudFxyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlSZWNvcmQob2JqOiBVc2VyRGF0YSkge1xyXG4gICBjb25zdCBsaUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICBsZXQgY29udGVudDogc3RyaW5nXHJcblxyXG4gICBpZiAob2JqLnR5cGUgPT09ICdpbnZvaWNlJykge1xyXG4gICAgICBjb250ZW50ID0gZGlzcGxheUludm9pY2Uob2JqKVxyXG4gICB9IGVsc2Uge1xyXG4gICAgICBjb250ZW50ID0gZGlzcGxheVBheW1lbnQob2JqKVxyXG4gICB9XHJcblxyXG4gICBsaUVsLmlubmVySFRNTCA9IGNvbnRlbnRcclxuICAgbG9nc0VsLnByZXBlbmQobGlFbClcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUludm9pY2Uob2JqOiBVc2VyRGF0YSkge1xyXG4gICByZXR1cm4gYFxyXG4gICAgIDxoND4ke29iai50eXBlfTwvaDQ+XHJcbiAgICAgPHA+JHtvYmouY291bnRlckFnZW50fSBpcyBvd2VkICR7b2JqLmFtb3VudH0gZm9yICR7b2JqLmRldGFpbHN9PC9wPlxyXG4gICBgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQYXltZW50KG9iajogYW55KSB7XHJcbiAgIHJldHVybiBgXHJcbiAgICAgPGg0PiR7b2JqLnR5cGV9PC9oND5cclxuICAgICA8cD4ke29iai5jb3VudGVyQWdlbnR9IG93ZXMgJHtvYmouYW1vdW50fSBmb3IgJHtvYmouZGV0YWlsc308L3A+XHJcbiAgIGBcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;