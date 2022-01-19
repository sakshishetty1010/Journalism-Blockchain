(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethereum_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/article */ "./ethereum/article.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\SAKSHI\\Desktop\\blockchain_project\\soochna\\pages\\index.js";






class ArticleIndex extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps() {
    const count = await _ethereum_article__WEBPACK_IMPORTED_MODULE_2__.default.methods.getPostCount().call();
    let news = [];

    for (let i = 0; i < count; i++) {
      const n = await _ethereum_article__WEBPACK_IMPORTED_MODULE_2__.default.methods.getPosts(i).call();
      news.push({
        id: n[0],
        upVotes: n[1],
        downVotes: n[2],
        title: n[3],
        description: n[4],
        author: n[5]
      });
    }

    return {
      news
    };
  }

  renderArticles() {
    const items = this.props.news.map(n => {
      const id = n.id;
      return {
        header: n.title,
        description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: `/articles/${id}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "View Article"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this),
        fluid: true
      };
    });
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: this.renderArticles()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ArticleIndex);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-847d74","vendors-node_modules_next_link_js","components_Layout_js-ethereum_article_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2tpY2tzdGFydC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8va2lja3N0YXJ0L2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9raWNrc3RhcnQvZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiQXJ0aWNsZUluZGV4IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY291bnQiLCJhcnRpY2xlIiwiY2FsbCIsIm5ld3MiLCJpIiwibiIsInB1c2giLCJpZCIsInVwVm90ZXMiLCJkb3duVm90ZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwicmVuZGVyQXJ0aWNsZXMiLCJpdGVtcyIsInByb3BzIiwibWFwIiwiaGVhZGVyIiwiZmx1aWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFOLFNBQTJCQyw0Q0FBM0IsQ0FBcUM7QUFDbkMsZUFBYUMsZUFBYixHQUErQjtBQUM3QixVQUFNQyxLQUFLLEdBQUcsTUFBTUMsMkVBQUEsR0FBK0JDLElBQS9CLEVBQXBCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixLQUFwQixFQUEyQkksQ0FBQyxFQUE1QixFQUFnQztBQUM5QixZQUFNQyxDQUFDLEdBQUcsTUFBTUosdUVBQUEsQ0FBeUJHLENBQXpCLEVBQTRCRixJQUE1QixFQUFoQjtBQUNBQyxVQUFJLENBQUNHLElBQUwsQ0FBVTtBQUNSQyxVQUFFLEVBQUVGLENBQUMsQ0FBQyxDQUFELENBREc7QUFFUkcsZUFBTyxFQUFFSCxDQUFDLENBQUMsQ0FBRCxDQUZGO0FBR1JJLGlCQUFTLEVBQUVKLENBQUMsQ0FBQyxDQUFELENBSEo7QUFJUkssYUFBSyxFQUFFTCxDQUFDLENBQUMsQ0FBRCxDQUpBO0FBS1JNLG1CQUFXLEVBQUVOLENBQUMsQ0FBQyxDQUFELENBTE47QUFNUk8sY0FBTSxFQUFFUCxDQUFDLENBQUMsQ0FBRDtBQU5ELE9BQVY7QUFRRDs7QUFDRCxXQUFPO0FBQUVGO0FBQUYsS0FBUDtBQUNEOztBQUVEVSxnQkFBYyxHQUFHO0FBQ2YsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV1osSUFBWCxDQUFnQmEsR0FBaEIsQ0FBcUJYLENBQUQsSUFBSztBQUNyQyxZQUFNRSxFQUFFLEdBQUdGLENBQUMsQ0FBQ0UsRUFBYjtBQUNBLGFBQU87QUFDTFUsY0FBTSxFQUFFWixDQUFDLENBQUNLLEtBREw7QUFFTEMsbUJBQVcsZUFDVCw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRyxhQUFZSixFQUFHLEVBQTVCO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhHO0FBT0xXLGFBQUssRUFBRTtBQVBGLE9BQVA7QUFTRCxLQVhhLENBQWQ7QUFZQSx3QkFBTyw4REFBQyx5REFBRDtBQUFZLFdBQUssRUFBRUo7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRURLLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFDRyxLQUFLTixjQUFMO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQU9EOztBQTFDa0M7O0FBNkNyQywrREFBZWhCLFlBQWYsRTs7Ozs7Ozs7Ozs7QUNuREEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcnRpY2xlIGZyb20gXCIuLi9ldGhlcmV1bS9hcnRpY2xlXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY2xhc3MgQXJ0aWNsZUluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBhcnRpY2xlLm1ldGhvZHMuZ2V0UG9zdENvdW50KCkuY2FsbCgpO1xyXG4gICAgbGV0IG5ld3MgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBuID0gYXdhaXQgYXJ0aWNsZS5tZXRob2RzLmdldFBvc3RzKGkpLmNhbGwoKTtcclxuICAgICAgbmV3cy5wdXNoKHtcclxuICAgICAgICBpZDogblswXSxcclxuICAgICAgICB1cFZvdGVzOiBuWzFdLFxyXG4gICAgICAgIGRvd25Wb3RlczogblsyXSxcclxuICAgICAgICB0aXRsZTogblszXSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbls0XSxcclxuICAgICAgICBhdXRob3I6IG5bNV0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbmV3cyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQXJ0aWNsZXMoKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMubmV3cy5tYXAoKG4pPT57XHJcbiAgICAgIGNvbnN0IGlkID0gbi5pZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXI6IG4udGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZXMvJHtpZH1gfT5cclxuICAgICAgICAgICAgPGE+VmlldyBBcnRpY2xlPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyQXJ0aWNsZXMoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9