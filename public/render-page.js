(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("http"), require("https"), require("/Users/francescosansalvadore/Dropbox/code/fsansalvadore/wau-gatsby-wp/node_modules/lodash/merge.js"), require("react"), require("react-dom/server"), require("zlib"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["http", "https", "/Users/francescosansalvadore/Dropbox/code/fsansalvadore/wau-gatsby-wp/node_modules/lodash/merge.js", "react", "react-dom/server", "zlib"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("http"), require("https"), require("/Users/francescosansalvadore/Dropbox/code/fsansalvadore/wau-gatsby-wp/node_modules/lodash/merge.js"), require("react"), require("react-dom/server"), require("zlib"));
	else
		root["lib"] = factory(root["http"], root["https"], root["/Users/francescosansalvadore/Dropbox/code/fsansalvadore/wau-gatsby-wp/node_modules/lodash/merge.js"], root["react"], root["react-dom/server"], root["zlib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_http__, __WEBPACK_EXTERNAL_MODULE_https__, __WEBPACK_EXTERNAL_MODULE_lodash_merge__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_zlib__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/develop-static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-styled-components/gatsby-ssr */ "./node_modules/gatsby-plugin-styled-components/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "displayName": true,
    "fileName": true,
    "minify": true,
    "transpileTemplateLiterals": true,
    "pure": false
  }
}, {
  plugin: __webpack_require__(/*! ./gatsby-ssr */ "./gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // Import React so that you can use JSX in HeadComponents
 * const React = require("react")
 *
 * const HtmlAttributes = {
 *   lang: "en"
 * }
 *
 * const HeadComponents = [
 *   <script key="my-script" src="https://gatsby.dev/my-script" />
 * ]
 *
 * const BodyAttributes = {
 *   "data-theme": "dark"
 * }
 *
 * exports.onRenderBody = ({
 *   setHeadComponents,
 *   setHtmlAttributes,
 *   setBodyAttributes
 * }, pluginOptions) => {
 *   setHtmlAttributes(HtmlAttributes)
 *   setHeadComponents(HeadComponents)
 *   setBodyAttributes(BodyAttributes)
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/develop-static-entry.js":
/*!****************************************!*\
  !*** ./.cache/develop-static-entry.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "lodash/merge");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_runner_ssr__WEBPACK_IMPORTED_MODULE_3__);



 // import testRequireError from "./test-require-error"
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    console.log("There was an error requiring \"src/html.js\"\n\n", err, "\n\n");
    process.exit();
  }
}

Html = Html && Html.__esModule ? Html.default : Html;
/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var headComponents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    key: "environment",
    name: "note",
    content: "environment=development"
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};
  var htmlStr;

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(components);
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = components;
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = components;
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = components;
  };

  _api_runner_ssr__WEBPACK_IMPORTED_MODULE_3___default()("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath
  });
  _api_runner_ssr__WEBPACK_IMPORTED_MODULE_3___default()("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath
  });
  var htmlElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Html, Object.assign({}, bodyProps, {
    body: "",
    headComponents: headComponents.concat([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      key: "io",
      src: "/socket.io/socket.io.js"
    })]),
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents.concat([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      key: "polyfill",
      src: "/polyfill.js",
      noModule: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      key: "commons",
      src: "/commons.js"
    })])
  }));
  htmlStr = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToStaticMarkup"])(htmlElement);
  htmlStr = "<!DOCTYPE html>" + htmlStr;
  callback(null, htmlStr);
});

/***/ }),

/***/ "./gatsby-ssr.js":
/*!***********************!*\
  !*** ./gatsby-ssr.js ***!
  \***********************/
/*! exports provided: wrapRootElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapRootElement", function() { return wrapRootElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _src_context_ApolloContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/context/ApolloContext */ "./src/context/ApolloContext.js");



var wrapRootElement = function wrapRootElement(_ref) {
  var element = _ref.element;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: _src_context_ApolloContext__WEBPACK_IMPORTED_MODULE_2__["client"]
  }, element);
};

/***/ }),

/***/ "./node_modules/@apollo/react-common/lib/react-common.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/react-common/lib/react-common.esm.js ***!
  \*******************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, DocumentType, getApolloContext, operationName, parser, resetApolloContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return ApolloConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return ApolloProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return getApolloContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return operationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return resetApolloContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/@apollo/react-common/node_modules/ts-invariant/lib/invariant.esm.js");



var apolloContext;
function getApolloContext() {
    if (!apolloContext) {
        apolloContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
    }
    return apolloContext;
}
function resetApolloContext() {
    apolloContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
}

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.');
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Provider, { value: context }, children));
    });
};

var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Consumer, null, function (context) {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.');
        return props.children(context.client);
    });
};

var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case DocumentType.Query:
            name = 'Query';
            break;
        case DocumentType.Mutation:
            name = 'Mutation';
            break;
        case DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document");
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
        ("subscriptions and " + mutations.length + " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component");
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " +
        (definitions.length + " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component");
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}


//# sourceMappingURL=react-common.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-common/node_modules/ts-invariant/lib/invariant.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@apollo/react-common/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-components/lib/react-components.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@apollo/react-components/lib/react-components.esm.js ***!
  \***************************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, Mutation, Query, Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return Mutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





function Query(props) {
    var children = props.children, query = props.query, options = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(props, ["children", "query"]);
    var result = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(query, options);
    return children && result ? children(result) : null;
}
(function (Query) {
    Query.propTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
        fetchPolicy: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        notifyOnNetworkStatusChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        onCompleted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        onError: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        pollInterval: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
        query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        ssr: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        partialRefetch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        returnPartialData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
    };
})(Query || (Query = {}));

function Mutation(props) {
    var _a = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(props.mutation, props), runMutation = _a[0], result = _a[1];
    return props.children ? props.children(runMutation, result) : null;
}
(function (Mutation) {
    Mutation.propTypes = {
        mutation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        optimisticResponse: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),
        refetchQueries: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object])),
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
        ]),
        awaitRefetchQueries: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        update: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
        onCompleted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        onError: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        fetchPolicy: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
    };
})(Mutation || (Mutation = {}));

function Subscription(props) {
    var result = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useSubscription"])(props.subscription, props);
    return props.children && result ? props.children(result) : null;
}
(function (Subscription) {
    Subscription.propTypes = {
        subscription: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        onSubscriptionData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        onSubscriptionComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
        shouldResubscribe: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool]),
    };
})(Subscription || (Subscription = {}));


//# sourceMappingURL=react-components.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js ***!
  \*************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, graphql, withApollo, withMutation, withQuery, withSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMutation", function() { return withMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withQuery", function() { return withQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSubscription", function() { return withSubscription; });
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-components */ "./node_modules/@apollo/react-components/lib/react-components.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-invariant */ "./node_modules/@apollo/react-hoc/node_modules/ts-invariant/lib/invariant.esm.js");








var defaultMapPropsToOptions = function () { return ({}); };
var defaultMapPropsToSkip = function () { return false; };
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function calculateVariablesFromProps(operation, props) {
    var variables = {};
    for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
        var _b = _a[_i], variable = _b.variable, type = _b.type;
        if (!variable.name || !variable.name.value)
            continue;
        var variableName = variable.name.value;
        var variableProp = props[variableName];
        if (typeof variableProp !== 'undefined') {
            variables[variableName] = variableProp;
            continue;
        }
        if (type.kind !== 'NonNullType') {
            variables[variableName] = undefined;
        }
    }
    return variables;
}
var GraphQLBase = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GraphQLBase, _super);
    function GraphQLBase(props) {
        var _this = _super.call(this, props) || this;
        _this.withRef = false;
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
        return _this;
    }
    GraphQLBase.prototype.getWrappedInstance = function () {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(this.withRef, "To access the wrapped instance, you need to specify " +
            "{ withRef: true } in the options");
        return this.wrappedInstance;
    };
    GraphQLBase.prototype.setWrappedInstance = function (ref) {
        this.wrappedInstance = ref;
    };
    return GraphQLBase;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component));

function withQuery(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function') {
        mapPropsToOptions = function () { return options; };
    }
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function') {
        mapPropsToSkip = function () { return skip; };
    }
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip
                    ? Object.create(null)
                    : Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, mapPropsToOptions(props));
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_components__WEBPACK_IMPORTED_MODULE_4__["Query"], Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, query: document }), function (_a) {
                    var _b, _c;
                    var _ = _a.client, data = _a.data, r = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(_a, ["client", "data"]);
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance
                        });
                    }
                    if (shouldSkip) {
                        return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, {})));
                    }
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, childProps)));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(GraphQL, WrappedComponent, {});
    };
}

function withMutation(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.alias, alias = _b === void 0 ? 'Apollo' : _b;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var props = this.props;
                var opts = mapPropsToOptions(props);
                if (operationOptions.withRef) {
                    this.withRef = true;
                    props = Object.assign({}, props, {
                        ref: this.setWrappedInstance
                    });
                }
                if (!opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_components__WEBPACK_IMPORTED_MODULE_4__["Mutation"], Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ ignoreResults: true }, opts, { mutation: document }), function (mutate, _a) {
                    var _b, _c;
                    var data = _a.data, r = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(_a, ["data"]);
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'mutate';
                    var resultName = operationOptions.name
                        ? name + "Result"
                        : 'result';
                    var childProps = (_b = {},
                        _b[name] = mutate,
                        _b[resultName] = result,
                        _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = mutate,
                            _c[resultName] = result,
                            _c.ownProps = props,
                            _c);
                        childProps = operationOptions.props(newResult);
                    }
                    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, childProps));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(GraphQL, WrappedComponent, {});
    };
}

function withSubscription(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c, shouldResubscribe = operationOptions.shouldResubscribe;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function')
        mapPropsToSkip = function () { return skip; };
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GraphQL, _super);
            function GraphQL(props) {
                var _this = _super.call(this, props) || this;
                _this.state = { resubscribe: false };
                return _this;
            }
            GraphQL.prototype.componentDidUpate = function (prevProps) {
                if (shouldResubscribe) {
                    this.setState({
                        resubscribe: shouldResubscribe(prevProps, this.props)
                    });
                }
            };
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip
                    ? Object.create(null)
                    : mapPropsToOptions(props);
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_components__WEBPACK_IMPORTED_MODULE_4__["Subscription"], Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, subscription: document, shouldResubscribe: this.state.resubscribe }), function (_a) {
                    var _b, _c;
                    var data = _a.data, r = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__rest"])(_a, ["data"]);
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance
                        });
                    }
                    if (shouldSkip) {
                        return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, {})));
                    }
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props, childProps)));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(GraphQL, WrappedComponent, {});
    };
}

function graphql(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    switch (Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document).type) {
        case _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation:
            return withMutation(document, operationOptions);
        case _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Subscription:
            return withSubscription(document, operationOptions);
        case _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Query:
        default:
            return withQuery(document, operationOptions);
    }
}

function getDisplayName$1(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function withApollo(WrappedComponent, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var withDisplayName = "withApollo(" + getDisplayName$1(WrappedComponent) + ")";
    var WithApollo = (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WithApollo, _super);
        function WithApollo(props) {
            var _this = _super.call(this, props) || this;
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            return _this;
        }
        WithApollo.prototype.getWrappedInstance = function () {
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(operationOptions.withRef, "To access the wrapped instance, you need to specify " +
                "{ withRef: true } in the options");
            return this.wrappedInstance;
        };
        WithApollo.prototype.setWrappedInstance = function (ref) {
            this.wrappedInstance = ref;
        };
        WithApollo.prototype.render = function () {
            var _this = this;
            return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"], null, function (client) {
                var props = Object.assign({}, _this.props, {
                    client: client,
                    ref: operationOptions.withRef
                        ? _this.setWrappedInstance
                        : undefined
                });
                return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, props));
            }));
        };
        WithApollo.displayName = withDisplayName;
        WithApollo.WrappedComponent = WrappedComponent;
        return WithApollo;
    }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component));
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(WithApollo, WrappedComponent, {});
}


//# sourceMappingURL=react-hoc.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-hoc/node_modules/ts-invariant/lib/invariant.esm.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@apollo/react-hoc/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \***************************************************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js ***!
  \*****************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, RenderPromises, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return useLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@apollo/react-hooks/node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-invariant */ "./node_modules/@apollo/react-hooks/node_modules/ts-invariant/lib/invariant.esm.js");








var OperationData = (function () {
    function OperationData(options, context) {
        this.isMounted = false;
        this.previousOptions = {};
        this.context = {};
        this.options = {};
        this.options = options || {};
        this.context = context || {};
    }
    OperationData.prototype.getOptions = function () {
        return this.options;
    };
    OperationData.prototype.setOptions = function (newOptions, storePrevious) {
        if (storePrevious === void 0) { storePrevious = false; }
        if (storePrevious && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.options, newOptions)) {
            this.previousOptions = this.options;
        }
        this.options = newOptions;
    };
    OperationData.prototype.unmount = function () {
        this.isMounted = false;
    };
    OperationData.prototype.refreshClient = function () {
        var client = (this.options && this.options.client) ||
            (this.context && this.context.client);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!!client, 'Could not find "client" in the context or passed in as an option. ' +
            'Wrap the root component in an <ApolloProvider>, or pass an ' +
            'ApolloClient instance in via options.');
        var isNew = false;
        if (client !== this.client) {
            isNew = true;
            this.client = client;
            this.cleanup();
        }
        return {
            client: this.client,
            isNew: isNew
        };
    };
    OperationData.prototype.verifyDocumentType = function (document, type) {
        var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
        var requiredOperationName = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["operationName"])(type);
        var usedOperationName = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["operationName"])(operation.type);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(operation.type === type, "Running a " + requiredOperationName + " requires a graphql " +
            (requiredOperationName + ", but a " + usedOperationName + " was used instead."));
    };
    return OperationData;
}());

var QueryData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(QueryData, _super);
    function QueryData(_a) {
        var options = _a.options, context = _a.context, onNewData = _a.onNewData;
        var _this = _super.call(this, options, context) || this;
        _this.previousData = {};
        _this.currentObservable = {};
        _this.runLazy = false;
        _this.runLazyQuery = function (options) {
            _this.cleanup();
            _this.runLazy = true;
            _this.lazyOptions = options;
            _this.onNewData();
        };
        _this.getExecuteResult = function () {
            var result = _this.getQueryResult();
            _this.startQuerySubscription();
            return result;
        };
        _this.obsRefetch = function (variables) {
            return _this.currentObservable.query.refetch(variables);
        };
        _this.obsFetchMore = function (fetchMoreOptions) { return _this.currentObservable.query.fetchMore(fetchMoreOptions); };
        _this.obsUpdateQuery = function (mapFn) { return _this.currentObservable.query.updateQuery(mapFn); };
        _this.obsStartPolling = function (pollInterval) {
            _this.currentObservable &&
                _this.currentObservable.query &&
                _this.currentObservable.query.startPolling(pollInterval);
        };
        _this.obsStopPolling = function () {
            _this.currentObservable &&
                _this.currentObservable.query &&
                _this.currentObservable.query.stopPolling();
        };
        _this.obsSubscribeToMore = function (options) { return _this.currentObservable.query.subscribeToMore(options); };
        _this.onNewData = onNewData;
        return _this;
    }
    QueryData.prototype.execute = function () {
        this.refreshClient();
        var _a = this.getOptions(), skip = _a.skip, query = _a.query;
        if (skip || query !== this.previousData.query) {
            this.removeQuerySubscription();
            this.previousData.query = query;
        }
        this.updateObservableQuery();
        if (this.isMounted)
            this.startQuerySubscription();
        return this.getExecuteSsrResult() || this.getExecuteResult();
    };
    QueryData.prototype.executeLazy = function () {
        return !this.runLazy
            ? [
                this.runLazyQuery,
                {
                    loading: false,
                    networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready,
                    called: false,
                    data: undefined,
                },
            ]
            : [this.runLazyQuery, this.execute()];
    };
    QueryData.prototype.fetchData = function () {
        var options = this.getOptions();
        if (options.skip || options.ssr === false)
            return false;
        var obs = this.currentObservable.query;
        var currentResult = obs.getCurrentResult();
        return currentResult.loading ? obs.result() : false;
    };
    QueryData.prototype.afterExecute = function (_a) {
        var _b = (_a === void 0 ? {} : _a).lazy, lazy = _b === void 0 ? false : _b;
        this.isMounted = true;
        if (!lazy || this.runLazy) {
            this.handleErrorOrCompleted();
        }
        this.previousOptions = this.getOptions();
        return this.unmount.bind(this);
    };
    QueryData.prototype.cleanup = function () {
        this.removeQuerySubscription();
        delete this.currentObservable.query;
        delete this.previousData.result;
    };
    QueryData.prototype.getOptions = function () {
        var options = _super.prototype.getOptions.call(this);
        if (this.lazyOptions) {
            options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options.variables), this.lazyOptions.variables);
            options.context = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options.context), this.lazyOptions.context);
        }
        if (this.runLazy) {
            delete options.skip;
        }
        return options;
    };
    QueryData.prototype.ssrInitiated = function () {
        return this.context && this.context.renderPromises;
    };
    QueryData.prototype.getExecuteSsrResult = function () {
        var ssrDisabled = this.getOptions().ssr === false;
        var fetchDisabled = this.refreshClient().client.disableNetworkFetches;
        var ssrLoading = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ loading: true, networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading, called: true, data: undefined, stale: false, client: this.client }, this.observableQueryFields());
        if (ssrDisabled && (this.ssrInitiated() || fetchDisabled)) {
            this.previousData.result = ssrLoading;
            return ssrLoading;
        }
        var result;
        if (this.ssrInitiated()) {
            result =
                this.context.renderPromises.addQueryPromise(this, this.getExecuteResult) || ssrLoading;
        }
        return result;
    };
    QueryData.prototype.prepareObservableQueryOptions = function () {
        var options = this.getOptions();
        this.verifyDocumentType(options.query, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Query);
        var displayName = options.displayName || 'Query';
        if (this.ssrInitiated() &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options.fetchPolicy = 'cache-first';
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { displayName: displayName, context: options.context, metadata: { reactComponent: { displayName: displayName } } });
    };
    QueryData.prototype.initializeObservableQuery = function () {
        var _a, _b;
        if (this.ssrInitiated()) {
            this.currentObservable.query = this.context.renderPromises.getSSRObservable(this.getOptions());
        }
        if (!this.currentObservable.query) {
            var observableQueryOptions = this.prepareObservableQueryOptions();
            this.previousData.observableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, observableQueryOptions), { children: null });
            this.currentObservable.query = this.refreshClient().client.watchQuery(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, observableQueryOptions));
            if (this.ssrInitiated()) {
                (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.renderPromises) === null || _b === void 0 ? void 0 : _b.registerSSRObservable(this.currentObservable.query, observableQueryOptions);
            }
        }
    };
    QueryData.prototype.updateObservableQuery = function () {
        if (!this.currentObservable.query) {
            this.initializeObservableQuery();
            return;
        }
        var newObservableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.prepareObservableQueryOptions()), { children: null });
        if (!Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(newObservableQueryOptions, this.previousData.observableQueryOptions)) {
            this.previousData.observableQueryOptions = newObservableQueryOptions;
            this.currentObservable
                .query.setOptions(newObservableQueryOptions)
                .catch(function () { });
        }
    };
    QueryData.prototype.startQuerySubscription = function () {
        var _this = this;
        if (this.currentObservable.subscription || this.getOptions().skip)
            return;
        var obsQuery = this.currentObservable.query;
        this.currentObservable.subscription = obsQuery.subscribe({
            next: function (_a) {
                var loading = _a.loading, networkStatus = _a.networkStatus, data = _a.data;
                var previousResult = _this.previousData.result;
                if (previousResult &&
                    previousResult.loading === loading &&
                    previousResult.networkStatus === networkStatus &&
                    Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(previousResult.data, data)) {
                    return;
                }
                _this.onNewData();
            },
            error: function (error) {
                _this.resubscribeToQuery();
                if (!error.hasOwnProperty('graphQLErrors'))
                    throw error;
                var previousResult = _this.previousData.result;
                if ((previousResult && previousResult.loading) ||
                    !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(error, _this.previousData.error)) {
                    _this.previousData.error = error;
                    _this.onNewData();
                }
            },
        });
    };
    QueryData.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var lastError = this.currentObservable.query.getLastError();
        var lastResult = this.currentObservable.query.getLastResult();
        this.currentObservable.query.resetLastResults();
        this.startQuerySubscription();
        Object.assign(this.currentObservable.query, {
            lastError: lastError,
            lastResult: lastResult,
        });
    };
    QueryData.prototype.getQueryResult = function () {
        var result = this.observableQueryFields();
        var options = this.getOptions();
        if (options.skip) {
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, result), { data: undefined, error: undefined, loading: false, called: true });
        }
        else {
            var currentResult = this.currentObservable.query.getCurrentResult();
            var loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
            var error = currentResult.error, data = currentResult.data;
            if (errors && errors.length > 0) {
                error = new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({ graphQLErrors: errors });
            }
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, result), { loading: loading,
                networkStatus: networkStatus,
                error: error, called: true });
            if (loading) {
                var previousData = this.previousData.result && this.previousData.result.data;
                result.data =
                    previousData && data
                        ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, previousData), data) : previousData || data;
            }
            else if (error) {
                Object.assign(result, {
                    data: (this.currentObservable.query.getLastResult() || {})
                        .data,
                });
            }
            else {
                var fetchPolicy = this.currentObservable.query.options.fetchPolicy;
                var partialRefetch = options.partialRefetch;
                if (partialRefetch &&
                    !data &&
                    partial &&
                    fetchPolicy !== 'cache-only') {
                    Object.assign(result, {
                        loading: true,
                        networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading,
                    });
                    result.refetch();
                    return result;
                }
                result.data = data;
            }
        }
        result.client = this.client;
        this.previousData.loading =
            (this.previousData.result && this.previousData.result.loading) || false;
        this.previousData.result = result;
        this.currentObservable.query &&
            this.currentObservable.query.resetQueryStoreErrors();
        return result;
    };
    QueryData.prototype.handleErrorOrCompleted = function () {
        var obsQuery = this.currentObservable.query;
        if (!obsQuery || !this.previousData.result)
            return;
        var _a = this.previousData.result, data = _a.data, loading = _a.loading, error = _a.error;
        if (!loading) {
            var _b = this.getOptions(), query = _b.query, variables = _b.variables, onCompleted = _b.onCompleted, onError = _b.onError;
            if (this.previousOptions &&
                !this.previousData.loading &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.query, query) &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.variables, variables)) {
                return;
            }
            if (onCompleted && !error) {
                onCompleted(data);
            }
            else if (onError && error) {
                onError(error);
            }
        }
    };
    QueryData.prototype.removeQuerySubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    QueryData.prototype.observableQueryFields = function () {
        var observable = this.currentObservable.query;
        return {
            variables: observable.variables,
            refetch: this.obsRefetch,
            fetchMore: this.obsFetchMore,
            updateQuery: this.obsUpdateQuery,
            startPolling: this.obsStartPolling,
            stopPolling: this.obsStopPolling,
            subscribeToMore: this.obsSubscribeToMore,
        };
    };
    return QueryData;
}(OperationData));

function useDeepMemo(memoFn, key) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    if (!ref.current || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(key, ref.current.key)) {
        ref.current = { key: key, value: memoFn() };
    }
    return ref.current.value;
}

function useBaseQuery(query, options, lazy) {
    if (lazy === void 0) { lazy = false; }
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (x) { return x + 1; }, 0), tick = _a[0], forceUpdate = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { query: query }) : { query: query };
    var queryDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    var queryData = queryDataRef.current ||
        new QueryData({
            options: updatedOptions,
            context: context,
            onNewData: function () {
                if (!queryData.ssrInitiated()) {
                    Promise.resolve().then(forceUpdate);
                }
                else {
                    forceUpdate();
                }
            },
        });
    queryData.setOptions(updatedOptions);
    queryData.context = context;
    if (queryData.ssrInitiated() && !queryDataRef.current) {
        queryDataRef.current = queryData;
    }
    var memo = {
        options: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, updatedOptions), { onError: undefined, onCompleted: undefined }),
        context: context,
        tick: tick,
    };
    var result = useDeepMemo(function () { return (lazy ? queryData.executeLazy() : queryData.execute()); }, memo);
    var queryResult = lazy
        ? result[1]
        : result;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        if (!queryDataRef.current) {
            queryDataRef.current = queryData;
        }
        return function () { return queryData.cleanup(); };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return queryData.afterExecute({ lazy: lazy }); }, [
        queryResult.loading,
        queryResult.networkStatus,
        queryResult.error,
        queryResult.data,
    ]);
    return result;
}

function useQuery(query, options) {
    return useBaseQuery(query, options, false);
}

function useLazyQuery(query, options) {
    return useBaseQuery(query, options, true);
}

var MutationData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MutationData, _super);
    function MutationData(_a) {
        var options = _a.options, context = _a.context, result = _a.result, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.runMutation = function (mutationFunctionOptions) {
            if (mutationFunctionOptions === void 0) { mutationFunctionOptions = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(mutationFunctionOptions)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (error) {
                _this.onMutationError(error, mutationId);
                if (!_this.getOptions().onError)
                    throw error;
            });
        };
        _this.verifyDocumentType(options.mutation, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation);
        _this.result = result;
        _this.setResult = setResult;
        _this.mostRecentMutationId = 0;
        return _this;
    }
    MutationData.prototype.execute = function (result) {
        this.isMounted = true;
        this.verifyDocumentType(this.getOptions().mutation, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation);
        result.client = this.refreshClient().client;
        return [this.runMutation, result];
    };
    MutationData.prototype.afterExecute = function () {
        this.isMounted = true;
        return this.unmount.bind(this);
    };
    MutationData.prototype.cleanup = function () {
    };
    MutationData.prototype.mutate = function (mutationFunctionOptions) {
        var _a = this.getOptions(), mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, mutationContext = _b === void 0 ? {} : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, fetchPolicy = _a.fetchPolicy;
        var mutateOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, mutationFunctionOptions);
        var mutateVariables = Object.assign({}, variables, mutateOptions.variables);
        delete mutateOptions.variables;
        return this.refreshClient().client.mutate(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ mutation: mutation,
            optimisticResponse: optimisticResponse, refetchQueries: mutateOptions.refetchQueries || this.getOptions().refetchQueries, awaitRefetchQueries: awaitRefetchQueries,
            update: update, context: mutationContext, fetchPolicy: fetchPolicy, variables: mutateVariables }, mutateOptions));
    };
    MutationData.prototype.onMutationStart = function () {
        if (!this.result.loading && !this.getOptions().ignoreResults) {
            this.updateResult({
                loading: true,
                error: undefined,
                data: undefined,
                called: true
            });
        }
    };
    MutationData.prototype.onMutationCompleted = function (response, mutationId) {
        var _a = this.getOptions(), onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
        var data = response.data, errors = response.errors;
        var error = errors && errors.length > 0
            ? new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({ graphQLErrors: errors })
            : undefined;
        var callOncomplete = function () {
            return onCompleted ? onCompleted(data) : null;
        };
        if (this.isMostRecentMutation(mutationId) && !ignoreResults) {
            this.updateResult({
                called: true,
                loading: false,
                data: data,
                error: error
            });
        }
        callOncomplete();
    };
    MutationData.prototype.onMutationError = function (error, mutationId) {
        var onError = this.getOptions().onError;
        if (this.isMostRecentMutation(mutationId)) {
            this.updateResult({
                loading: false,
                error: error,
                data: undefined,
                called: true
            });
        }
        if (onError) {
            onError(error);
        }
    };
    MutationData.prototype.generateNewMutationId = function () {
        return ++this.mostRecentMutationId;
    };
    MutationData.prototype.isMostRecentMutation = function (mutationId) {
        return this.mostRecentMutationId === mutationId;
    };
    MutationData.prototype.updateResult = function (result) {
        if (this.isMounted &&
            (!this.previousResult || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousResult, result))) {
            this.setResult(result);
            this.previousResult = result;
        }
    };
    return MutationData;
}(OperationData));

function useMutation(mutation, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({ called: false, loading: false }), result = _a[0], setResult = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { mutation: mutation }) : { mutation: mutation };
    var mutationDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    function getMutationDataRef() {
        if (!mutationDataRef.current) {
            mutationDataRef.current = new MutationData({
                options: updatedOptions,
                context: context,
                result: result,
                setResult: setResult
            });
        }
        return mutationDataRef.current;
    }
    var mutationData = getMutationDataRef();
    mutationData.setOptions(updatedOptions);
    mutationData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return mutationData.afterExecute(); });
    return mutationData.execute(result);
}

var SubscriptionData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(SubscriptionData, _super);
    function SubscriptionData(_a) {
        var options = _a.options, context = _a.context, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.currentObservable = {};
        _this.setResult = setResult;
        _this.initialize(options);
        return _this;
    }
    SubscriptionData.prototype.execute = function (result) {
        if (this.getOptions().skip === true) {
            this.cleanup();
            return {
                loading: false,
                error: undefined,
                data: undefined,
                variables: this.getOptions().variables
            };
        }
        var currentResult = result;
        if (this.refreshClient().isNew) {
            currentResult = this.getLoadingResult();
        }
        var shouldResubscribe = this.getOptions().shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.getOptions());
        }
        if (shouldResubscribe !== false &&
            this.previousOptions &&
            Object.keys(this.previousOptions).length > 0 &&
            (this.previousOptions.subscription !== this.getOptions().subscription ||
                !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.variables, this.getOptions().variables) ||
                this.previousOptions.skip !== this.getOptions().skip)) {
            this.cleanup();
            currentResult = this.getLoadingResult();
        }
        this.initialize(this.getOptions());
        this.startSubscription();
        this.previousOptions = this.getOptions();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, currentResult), { variables: this.getOptions().variables });
    };
    SubscriptionData.prototype.afterExecute = function () {
        this.isMounted = true;
    };
    SubscriptionData.prototype.cleanup = function () {
        this.endSubscription();
        delete this.currentObservable.query;
    };
    SubscriptionData.prototype.initialize = function (options) {
        if (this.currentObservable.query || this.getOptions().skip === true)
            return;
        this.currentObservable.query = this.refreshClient().client.subscribe({
            query: options.subscription,
            variables: options.variables,
            fetchPolicy: options.fetchPolicy
        });
    };
    SubscriptionData.prototype.startSubscription = function () {
        if (this.currentObservable.subscription)
            return;
        this.currentObservable.subscription = this.currentObservable.query.subscribe({
            next: this.updateCurrentData.bind(this),
            error: this.updateError.bind(this),
            complete: this.completeSubscription.bind(this)
        });
    };
    SubscriptionData.prototype.getLoadingResult = function () {
        return {
            loading: true,
            error: undefined,
            data: undefined
        };
    };
    SubscriptionData.prototype.updateResult = function (result) {
        if (this.isMounted) {
            this.setResult(result);
        }
    };
    SubscriptionData.prototype.updateCurrentData = function (result) {
        var onSubscriptionData = this.getOptions().onSubscriptionData;
        this.updateResult({
            data: result.data,
            loading: false,
            error: undefined
        });
        if (onSubscriptionData) {
            onSubscriptionData({
                client: this.refreshClient().client,
                subscriptionData: result
            });
        }
    };
    SubscriptionData.prototype.updateError = function (error) {
        this.updateResult({
            error: error,
            loading: false
        });
    };
    SubscriptionData.prototype.completeSubscription = function () {
        var onSubscriptionComplete = this.getOptions().onSubscriptionComplete;
        if (onSubscriptionComplete)
            onSubscriptionComplete();
        this.endSubscription();
    };
    SubscriptionData.prototype.endSubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    return SubscriptionData;
}(OperationData));

function useSubscription(subscription, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var updatedOptions = options
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { subscription: subscription }) : { subscription: subscription };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
        loading: !updatedOptions.skip,
        error: undefined,
        data: undefined
    }), result = _a[0], setResult = _a[1];
    var subscriptionDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    function getSubscriptionDataRef() {
        if (!subscriptionDataRef.current) {
            subscriptionDataRef.current = new SubscriptionData({
                options: updatedOptions,
                context: context,
                setResult: setResult
            });
        }
        return subscriptionDataRef.current;
    }
    var subscriptionData = getSubscriptionDataRef();
    subscriptionData.setOptions(updatedOptions, true);
    subscriptionData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return subscriptionData.afterExecute(); });
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return subscriptionData.cleanup.bind(subscriptionData); }, []);
    return subscriptionData.execute(result);
}

function useApolloClient() {
    var client = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])()).client;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.');
    return client;
}

function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (observable, props) {
        this.lookupQueryInfo(props).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (props) {
        return this.lookupQueryInfo(props).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance.getOptions());
        if (!info.seen) {
            this.queryPromises.set(queryInstance.getOptions(), new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (props) {
        var queryInfoTrie = this.queryInfoTrie;
        var query = props.query, variables = props.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());


//# sourceMappingURL=react-hooks.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-hooks/node_modules/@wry/equality/lib/equality.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@apollo/react-hooks/node_modules/@wry/equality/lib/equality.esm.js ***!
  \*****************************************************************************************/
/*! exports provided: default, equal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return equal; });
var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */
function equal(a, b) {
    try {
        return check(a, b);
    }
    finally {
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length)
                return false;
        // Fall through to object case...
        case '[object Object]': {
            if (previouslyCompared(a, b))
                return true;
            var aKeys = Object.keys(a);
            var bKeys = Object.keys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length)
                return false;
            // Now make sure they have the same keys.
            for (var k = 0; k < keyCount; ++k) {
                if (!hasOwnProperty.call(b, aKeys[k])) {
                    return false;
                }
            }
            // Finally, check deep equality of all child properties.
            for (var k = 0; k < keyCount; ++k) {
                var key = aKeys[k];
                if (!check(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a)
                return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "" + b;
        case '[object Map]':
        case '[object Set]': {
            if (a.size !== b.size)
                return false;
            if (previouslyCompared(a, b))
                return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while (true) {
                var info = aIterator.next();
                if (info.done)
                    break;
                // If a instanceof Set, aValue === aKey.
                var _a = info.value, aKey = _a[0], aValue = _a[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) {
                    return false;
                }
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) {
                    return false;
                }
            }
            return true;
        }
    }
    // Otherwise the values are not equal.
    return false;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b))
            return true;
    }
    else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}

/* harmony default export */ __webpack_exports__["default"] = (equal);

//# sourceMappingURL=equality.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-hooks/node_modules/ts-invariant/lib/invariant.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@apollo/react-hooks/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \*****************************************************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js ***!
  \*************************************************************/
/*! exports provided: getDataFromTree, getMarkupFromTree, renderToStringWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return getDataFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return getMarkupFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return renderToStringWithData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");





function getDataFromTree(tree, context) {
    if (context === void 0) { context = {}; }
    return getMarkupFromTree({
        tree: tree,
        context: context,
        renderFunction: __webpack_require__(/*! react-dom/server */ "react-dom/server").renderToStaticMarkup
    });
}
function getMarkupFromTree(_a) {
    var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? __webpack_require__(/*! react-dom/server */ "react-dom/server").renderToStaticMarkup : _c;
    var renderPromises = new _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["RenderPromises"]();
    function process() {
        var ApolloContext = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
        var html = renderFunction(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ApolloContext.Provider, { value: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { renderPromises: renderPromises }) }, tree));
        return renderPromises.hasPromises()
            ? renderPromises.consumeAndAwaitPromises().then(process)
            : html;
    }
    return Promise.resolve().then(process);
}

function renderToStringWithData(component) {
    return getMarkupFromTree({
        tree: component,
        renderFunction: __webpack_require__(/*! react-dom/server */ "react-dom/server").renderToString
    });
}


//# sourceMappingURL=react-ssr.esm.js.map


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/apollo-boost/lib/bundle.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/apollo-boost/lib/bundle.esm.js ***!
  \*****************************************************/
/*! exports provided: ApolloClient, ApolloError, FetchType, NetworkStatus, ObservableQuery, isApolloError, Observable, getOperationName, ApolloLink, concat, createOperation, empty, execute, from, fromError, fromPromise, makePromise, split, toPromise, HeuristicFragmentMatcher, InMemoryCache, IntrospectionFragmentMatcher, ObjectCache, StoreReader, StoreWriter, WriteError, assertIdValue, defaultDataIdFromObject, defaultNormalizedCacheFactory, enhanceErrorWithDocument, HttpLink, gql, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchType", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["FetchType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["NetworkStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["ObservableQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["isApolloError"]; });

/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["getOperationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["createOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["from"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["fromError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["fromPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["makePromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["toPromise"]; });

/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeuristicFragmentMatcher", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["HeuristicFragmentMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntrospectionFragmentMatcher", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["IntrospectionFragmentMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectCache", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["ObjectCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreReader", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["StoreReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreWriter", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["StoreWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WriteError", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["WriteError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertIdValue", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["assertIdValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["defaultDataIdFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultNormalizedCacheFactory", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["defaultNormalizedCacheFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enhanceErrorWithDocument", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["enhanceErrorWithDocument"]; });

/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]; });

/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-boost/node_modules/ts-invariant/lib/invariant.esm.js");













var PRESET_CONFIG_KEYS = [
    'request',
    'uri',
    'credentials',
    'headers',
    'fetch',
    'fetchOptions',
    'clientState',
    'onError',
    'cacheRedirects',
    'cache',
    'name',
    'version',
    'resolvers',
    'typeDefs',
    'fragmentMatcher',
];
var DefaultClient = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultClient, _super);
    function DefaultClient(config) {
        if (config === void 0) { config = {}; }
        var _this = this;
        if (config) {
            var diff = Object.keys(config).filter(function (key) { return PRESET_CONFIG_KEYS.indexOf(key) === -1; });
            if (diff.length > 0) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_7__["invariant"].warn('ApolloBoost was initialized with unsupported options: ' +
                    ("" + diff.join(' ')));
            }
        }
        var request = config.request, uri = config.uri, credentials = config.credentials, headers = config.headers, fetch = config.fetch, fetchOptions = config.fetchOptions, clientState = config.clientState, cacheRedirects = config.cacheRedirects, errorCallback = config.onError, name = config.name, version = config.version, resolvers = config.resolvers, typeDefs = config.typeDefs, fragmentMatcher = config.fragmentMatcher;
        var cache = config.cache;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_7__["invariant"])(!cache || !cacheRedirects, 'Incompatible cache configuration. When not providing `cache`, ' +
            'configure the provided instance with `cacheRedirects` instead.');
        if (!cache) {
            cache = cacheRedirects
                ? new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]({ cacheRedirects: cacheRedirects })
                : new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]();
        }
        var errorLink = errorCallback
            ? Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_5__["onError"])(errorCallback)
            : Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_5__["onError"])(function (_a) {
                var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
                if (graphQLErrors) {
                    graphQLErrors.forEach(function (_a) {
                        var message = _a.message, locations = _a.locations, path = _a.path;
                        return  false || ts_invariant__WEBPACK_IMPORTED_MODULE_7__["invariant"].warn("[GraphQL error]: Message: " + message + ", Location: " +
                            (locations + ", Path: " + path));
                    });
                }
                if (networkError) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_7__["invariant"].warn("[Network error]: " + networkError);
                }
            });
        var requestHandler = request
            ? new apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"](function (operation, forward) {
                return new apollo_link__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    var handle;
                    Promise.resolve(operation)
                        .then(function (oper) { return request(oper); })
                        .then(function () {
                        handle = forward(operation).subscribe({
                            next: observer.next.bind(observer),
                            error: observer.error.bind(observer),
                            complete: observer.complete.bind(observer),
                        });
                    })
                        .catch(observer.error.bind(observer));
                    return function () {
                        if (handle) {
                            handle.unsubscribe();
                        }
                    };
                });
            })
            : false;
        var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]({
            uri: uri || '/graphql',
            fetch: fetch,
            fetchOptions: fetchOptions || {},
            credentials: credentials || 'same-origin',
            headers: headers || {},
        });
        var link = apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].from([errorLink, requestHandler, httpLink].filter(function (x) { return !!x; }));
        var activeResolvers = resolvers;
        var activeTypeDefs = typeDefs;
        var activeFragmentMatcher = fragmentMatcher;
        if (clientState) {
            if (clientState.defaults) {
                cache.writeData({
                    data: clientState.defaults,
                });
            }
            activeResolvers = clientState.resolvers;
            activeTypeDefs = clientState.typeDefs;
            activeFragmentMatcher = clientState.fragmentMatcher;
        }
        _this = _super.call(this, {
            cache: cache,
            link: link,
            name: name,
            version: version,
            resolvers: activeResolvers,
            typeDefs: activeTypeDefs,
            fragmentMatcher: activeFragmentMatcher,
        }) || this;
        return _this;
    }
    return DefaultClient;
}(apollo_client__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (DefaultClient);
//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-boost/node_modules/ts-invariant/lib/invariant.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/apollo-boost/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \**********************************************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/apollo-cache-inmemory/lib/bundle.esm.js ***!
  \**************************************************************/
/*! exports provided: HeuristicFragmentMatcher, InMemoryCache, IntrospectionFragmentMatcher, ObjectCache, StoreReader, StoreWriter, WriteError, assertIdValue, defaultDataIdFromObject, defaultNormalizedCacheFactory, enhanceErrorWithDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeuristicFragmentMatcher", function() { return HeuristicFragmentMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return InMemoryCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntrospectionFragmentMatcher", function() { return IntrospectionFragmentMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectCache", function() { return ObjectCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreReader", function() { return StoreReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreWriter", function() { return StoreWriter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteError", function() { return WriteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIdValue", function() { return assertIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return defaultDataIdFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNormalizedCacheFactory", function() { return defaultNormalizedCacheFactory$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enhanceErrorWithDocument", function() { return enhanceErrorWithDocument; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache */ "./node_modules/apollo-cache/lib/bundle.esm.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! optimism */ "./node_modules/apollo-cache-inmemory/node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-cache-inmemory/node_modules/ts-invariant/lib/invariant.esm.js");






var haveWarned = false;
function shouldWarn() {
    var answer = !haveWarned;
    if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isTest"])()) {
        haveWarned = true;
    }
    return answer;
}
var HeuristicFragmentMatcher = (function () {
    function HeuristicFragmentMatcher() {
    }
    HeuristicFragmentMatcher.prototype.ensureReady = function () {
        return Promise.resolve();
    };
    HeuristicFragmentMatcher.prototype.canBypassInit = function () {
        return true;
    };
    HeuristicFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        var obj = context.store.get(idValue.id);
        var isRootQuery = idValue.id === 'ROOT_QUERY';
        if (!obj) {
            return isRootQuery;
        }
        var _a = obj.__typename, __typename = _a === void 0 ? isRootQuery && 'Query' : _a;
        if (!__typename) {
            if (shouldWarn()) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('Could not find __typename on Fragment ', typeCondition, obj);
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior " +
                    "and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
            }
            return 'heuristic';
        }
        if (__typename === typeCondition) {
            return true;
        }
        if (shouldWarn()) {
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error('You are using the simple (heuristic) fragment matcher, but your ' +
                'queries contain union or interface types. Apollo Client will not be ' +
                'able to accurately map fragments. To make this error go away, use ' +
                'the `IntrospectionFragmentMatcher` as described in the docs: ' +
                'https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher');
        }
        return 'heuristic';
    };
    return HeuristicFragmentMatcher;
}());
var IntrospectionFragmentMatcher = (function () {
    function IntrospectionFragmentMatcher(options) {
        if (options && options.introspectionQueryResultData) {
            this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
            this.isReady = true;
        }
        else {
            this.isReady = false;
        }
        this.match = this.match.bind(this);
    }
    IntrospectionFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(this.isReady, 'FragmentMatcher.match() was called before FragmentMatcher.init()');
        var obj = context.store.get(idValue.id);
        var isRootQuery = idValue.id === 'ROOT_QUERY';
        if (!obj) {
            return isRootQuery;
        }
        var _a = obj.__typename, __typename = _a === void 0 ? isRootQuery && 'Query' : _a;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(__typename, "Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));
        if (__typename === typeCondition) {
            return true;
        }
        var implementingTypes = this.possibleTypesMap[typeCondition];
        if (__typename &&
            implementingTypes &&
            implementingTypes.indexOf(__typename) > -1) {
            return true;
        }
        return false;
    };
    IntrospectionFragmentMatcher.prototype.parseIntrospectionResult = function (introspectionResultData) {
        var typeMap = {};
        introspectionResultData.__schema.types.forEach(function (type) {
            if (type.kind === 'UNION' || type.kind === 'INTERFACE') {
                typeMap[type.name] = type.possibleTypes.map(function (implementingType) { return implementingType.name; });
            }
        });
        return typeMap;
    };
    return IntrospectionFragmentMatcher;
}());

var hasOwn = Object.prototype.hasOwnProperty;
var DepTrackingCache = (function () {
    function DepTrackingCache(data) {
        var _this = this;
        if (data === void 0) { data = Object.create(null); }
        this.data = data;
        this.depend = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (dataId) { return _this.data[dataId]; }, {
            disposable: true,
            makeCacheKey: function (dataId) {
                return dataId;
            },
        });
    }
    DepTrackingCache.prototype.toObject = function () {
        return this.data;
    };
    DepTrackingCache.prototype.get = function (dataId) {
        this.depend(dataId);
        return this.data[dataId];
    };
    DepTrackingCache.prototype.set = function (dataId, value) {
        var oldValue = this.data[dataId];
        if (value !== oldValue) {
            this.data[dataId] = value;
            this.depend.dirty(dataId);
        }
    };
    DepTrackingCache.prototype.delete = function (dataId) {
        if (hasOwn.call(this.data, dataId)) {
            delete this.data[dataId];
            this.depend.dirty(dataId);
        }
    };
    DepTrackingCache.prototype.clear = function () {
        this.replace(null);
    };
    DepTrackingCache.prototype.replace = function (newData) {
        var _this = this;
        if (newData) {
            Object.keys(newData).forEach(function (dataId) {
                _this.set(dataId, newData[dataId]);
            });
            Object.keys(this.data).forEach(function (dataId) {
                if (!hasOwn.call(newData, dataId)) {
                    _this.delete(dataId);
                }
            });
        }
        else {
            Object.keys(this.data).forEach(function (dataId) {
                _this.delete(dataId);
            });
        }
    };
    return DepTrackingCache;
}());
function defaultNormalizedCacheFactory(seed) {
    return new DepTrackingCache(seed);
}

var StoreReader = (function () {
    function StoreReader(_a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.cacheKeyRoot, cacheKeyRoot = _c === void 0 ? new optimism__WEBPACK_IMPORTED_MODULE_3__["KeyTrie"](apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["canUseWeakMap"]) : _c, _d = _b.freezeResults, freezeResults = _d === void 0 ? false : _d;
        var _e = this, executeStoreQuery = _e.executeStoreQuery, executeSelectionSet = _e.executeSelectionSet, executeSubSelectedArray = _e.executeSubSelectedArray;
        this.freezeResults = freezeResults;
        this.executeStoreQuery = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (options) {
            return executeStoreQuery.call(_this, options);
        }, {
            makeCacheKey: function (_a) {
                var query = _a.query, rootValue = _a.rootValue, contextValue = _a.contextValue, variableValues = _a.variableValues, fragmentMatcher = _a.fragmentMatcher;
                if (contextValue.store instanceof DepTrackingCache) {
                    return cacheKeyRoot.lookup(contextValue.store, query, fragmentMatcher, JSON.stringify(variableValues), rootValue.id);
                }
            }
        });
        this.executeSelectionSet = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (options) {
            return executeSelectionSet.call(_this, options);
        }, {
            makeCacheKey: function (_a) {
                var selectionSet = _a.selectionSet, rootValue = _a.rootValue, execContext = _a.execContext;
                if (execContext.contextValue.store instanceof DepTrackingCache) {
                    return cacheKeyRoot.lookup(execContext.contextValue.store, selectionSet, execContext.fragmentMatcher, JSON.stringify(execContext.variableValues), rootValue.id);
                }
            }
        });
        this.executeSubSelectedArray = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (options) {
            return executeSubSelectedArray.call(_this, options);
        }, {
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, execContext = _a.execContext;
                if (execContext.contextValue.store instanceof DepTrackingCache) {
                    return cacheKeyRoot.lookup(execContext.contextValue.store, field, array, JSON.stringify(execContext.variableValues));
                }
            }
        });
    }
    StoreReader.prototype.readQueryFromStore = function (options) {
        return this.diffQueryAgainstStore(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { returnPartialData: false })).result;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, variables = _a.variables, previousResult = _a.previousResult, _b = _a.returnPartialData, returnPartialData = _b === void 0 ? true : _b, _c = _a.rootId, rootId = _c === void 0 ? 'ROOT_QUERY' : _c, fragmentMatcherFunction = _a.fragmentMatcherFunction, config = _a.config;
        var queryDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getQueryDefinition"])(query);
        variables = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])({}, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getDefaultValues"])(queryDefinition), variables);
        var context = {
            store: store,
            dataIdFromObject: config && config.dataIdFromObject,
            cacheRedirects: (config && config.cacheRedirects) || {},
        };
        var execResult = this.executeStoreQuery({
            query: query,
            rootValue: {
                type: 'id',
                id: rootId,
                generated: true,
                typename: 'Query',
            },
            contextValue: context,
            variableValues: variables,
            fragmentMatcher: fragmentMatcherFunction,
        });
        var hasMissingFields = execResult.missing && execResult.missing.length > 0;
        if (hasMissingFields && !returnPartialData) {
            execResult.missing.forEach(function (info) {
                if (info.tolerable)
                    return;
                throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("Can't find field " + info.fieldName + " on object " + JSON.stringify(info.object, null, 2) + ".");
            });
        }
        if (previousResult) {
            if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(previousResult, execResult.result)) {
                execResult.result = previousResult;
            }
        }
        return {
            result: execResult.result,
            complete: !hasMissingFields,
        };
    };
    StoreReader.prototype.executeStoreQuery = function (_a) {
        var query = _a.query, rootValue = _a.rootValue, contextValue = _a.contextValue, variableValues = _a.variableValues, _b = _a.fragmentMatcher, fragmentMatcher = _b === void 0 ? defaultFragmentMatcher : _b;
        var mainDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getMainDefinition"])(query);
        var fragments = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinitions"])(query);
        var fragmentMap = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"])(fragments);
        var execContext = {
            query: query,
            fragmentMap: fragmentMap,
            contextValue: contextValue,
            variableValues: variableValues,
            fragmentMatcher: fragmentMatcher,
        };
        return this.executeSelectionSet({
            selectionSet: mainDefinition.selectionSet,
            rootValue: rootValue,
            execContext: execContext,
        });
    };
    StoreReader.prototype.executeSelectionSet = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, rootValue = _a.rootValue, execContext = _a.execContext;
        var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
        var finalResult = { result: null };
        var objectsToMerge = [];
        var object = contextValue.store.get(rootValue.id);
        var typename = (object && object.__typename) ||
            (rootValue.id === 'ROOT_QUERY' && 'Query') ||
            void 0;
        function handleMissing(result) {
            var _a;
            if (result.missing) {
                finalResult.missing = finalResult.missing || [];
                (_a = finalResult.missing).push.apply(_a, result.missing);
            }
            return result.result;
        }
        selectionSet.selections.forEach(function (selection) {
            var _a;
            if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["shouldInclude"])(selection, variables)) {
                return;
            }
            if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isField"])(selection)) {
                var fieldResult = handleMissing(_this.executeField(object, typename, selection, execContext));
                if (typeof fieldResult !== 'undefined') {
                    objectsToMerge.push((_a = {},
                        _a[Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["resultKeyNameFromField"])(selection)] = fieldResult,
                        _a));
                }
            }
            else {
                var fragment = void 0;
                if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isInlineFragment"])(selection)) {
                    fragment = selection;
                }
                else {
                    fragment = fragmentMap[selection.name.value];
                    if (!fragment) {
                        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("No fragment named " + selection.name.value);
                    }
                }
                var typeCondition = fragment.typeCondition && fragment.typeCondition.name.value;
                var match = !typeCondition ||
                    execContext.fragmentMatcher(rootValue, typeCondition, contextValue);
                if (match) {
                    var fragmentExecResult = _this.executeSelectionSet({
                        selectionSet: fragment.selectionSet,
                        rootValue: rootValue,
                        execContext: execContext,
                    });
                    if (match === 'heuristic' && fragmentExecResult.missing) {
                        fragmentExecResult = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fragmentExecResult), { missing: fragmentExecResult.missing.map(function (info) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, info), { tolerable: true });
                            }) });
                    }
                    objectsToMerge.push(handleMissing(fragmentExecResult));
                }
            }
        });
        finalResult.result = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["mergeDeepArray"])(objectsToMerge);
        if (this.freezeResults && "development" !== 'production') {
            Object.freeze(finalResult.result);
        }
        return finalResult;
    };
    StoreReader.prototype.executeField = function (object, typename, field, execContext) {
        var variables = execContext.variableValues, contextValue = execContext.contextValue;
        var fieldName = field.name.value;
        var args = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["argumentsObjectFromField"])(field, variables);
        var info = {
            resultKey: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["resultKeyNameFromField"])(field),
            directives: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getDirectiveInfoFromField"])(field, variables),
        };
        var readStoreResult = readStoreResolver(object, typename, fieldName, args, contextValue, info);
        if (Array.isArray(readStoreResult.result)) {
            return this.combineExecResults(readStoreResult, this.executeSubSelectedArray({
                field: field,
                array: readStoreResult.result,
                execContext: execContext,
            }));
        }
        if (!field.selectionSet) {
            assertSelectionSetForIdValue(field, readStoreResult.result);
            if (this.freezeResults && "development" !== 'production') {
                Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["maybeDeepFreeze"])(readStoreResult);
            }
            return readStoreResult;
        }
        if (readStoreResult.result == null) {
            return readStoreResult;
        }
        return this.combineExecResults(readStoreResult, this.executeSelectionSet({
            selectionSet: field.selectionSet,
            rootValue: readStoreResult.result,
            execContext: execContext,
        }));
    };
    StoreReader.prototype.combineExecResults = function () {
        var execResults = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            execResults[_i] = arguments[_i];
        }
        var missing;
        execResults.forEach(function (execResult) {
            if (execResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, execResult.missing);
            }
        });
        return {
            result: execResults.pop().result,
            missing: missing,
        };
    };
    StoreReader.prototype.executeSubSelectedArray = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, execContext = _a.execContext;
        var missing;
        function handleMissing(childResult) {
            if (childResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, childResult.missing);
            }
            return childResult.result;
        }
        array = array.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    execContext: execContext,
                }));
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    rootValue: item,
                    execContext: execContext,
                }));
            }
            assertSelectionSetForIdValue(field, item);
            return item;
        });
        if (this.freezeResults && "development" !== 'production') {
            Object.freeze(array);
        }
        return { result: array, missing: missing };
    };
    return StoreReader;
}());
function assertSelectionSetForIdValue(field, value) {
    if (!field.selectionSet && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(value)) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("Missing selection set for object of type " + value.typename + " returned for query field " + field.name.value);
    }
}
function defaultFragmentMatcher() {
    return true;
}
function assertIdValue(idValue) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(idValue), "Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
}
function readStoreResolver(object, typename, fieldName, args, context, _a) {
    var resultKey = _a.resultKey, directives = _a.directives;
    var storeKeyName = fieldName;
    if (args || directives) {
        storeKeyName = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getStoreKeyName"])(storeKeyName, args, directives);
    }
    var fieldValue = void 0;
    if (object) {
        fieldValue = object[storeKeyName];
        if (typeof fieldValue === 'undefined' &&
            context.cacheRedirects &&
            typeof typename === 'string') {
            var type = context.cacheRedirects[typename];
            if (type) {
                var resolver = type[fieldName];
                if (resolver) {
                    fieldValue = resolver(object, args, {
                        getCacheKey: function (storeObj) {
                            var id = context.dataIdFromObject(storeObj);
                            return id && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["toIdValue"])({
                                id: id,
                                typename: storeObj.__typename,
                            });
                        },
                    });
                }
            }
        }
    }
    if (typeof fieldValue === 'undefined') {
        return {
            result: fieldValue,
            missing: [{
                    object: object,
                    fieldName: storeKeyName,
                    tolerable: false,
                }],
        };
    }
    if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsonValue"])(fieldValue)) {
        fieldValue = fieldValue.json;
    }
    return {
        result: fieldValue,
    };
}

var ObjectCache = (function () {
    function ObjectCache(data) {
        if (data === void 0) { data = Object.create(null); }
        this.data = data;
    }
    ObjectCache.prototype.toObject = function () {
        return this.data;
    };
    ObjectCache.prototype.get = function (dataId) {
        return this.data[dataId];
    };
    ObjectCache.prototype.set = function (dataId, value) {
        this.data[dataId] = value;
    };
    ObjectCache.prototype.delete = function (dataId) {
        this.data[dataId] = void 0;
    };
    ObjectCache.prototype.clear = function () {
        this.data = Object.create(null);
    };
    ObjectCache.prototype.replace = function (newData) {
        this.data = newData || Object.create(null);
    };
    return ObjectCache;
}());
function defaultNormalizedCacheFactory$1(seed) {
    return new ObjectCache(seed);
}

var WriteError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WriteError, _super);
    function WriteError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'WriteError';
        return _this;
    }
    return WriteError;
}(Error));
function enhanceErrorWithDocument(error, document) {
    var enhancedError = new WriteError("Error writing result to store for query:\n " + JSON.stringify(document));
    enhancedError.message += '\n' + error.message;
    enhancedError.stack = error.stack;
    return enhancedError;
}
var StoreWriter = (function () {
    function StoreWriter() {
    }
    StoreWriter.prototype.writeQueryToStore = function (_a) {
        var query = _a.query, result = _a.result, _b = _a.store, store = _b === void 0 ? defaultNormalizedCacheFactory() : _b, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
        return this.writeResultToStore({
            dataId: 'ROOT_QUERY',
            result: result,
            document: query,
            store: store,
            variables: variables,
            dataIdFromObject: dataIdFromObject,
            fragmentMatcherFunction: fragmentMatcherFunction,
        });
    };
    StoreWriter.prototype.writeResultToStore = function (_a) {
        var dataId = _a.dataId, result = _a.result, document = _a.document, _b = _a.store, store = _b === void 0 ? defaultNormalizedCacheFactory() : _b, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
        var operationDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getOperationDefinition"])(document);
        try {
            return this.writeSelectionSetToStore({
                result: result,
                dataId: dataId,
                selectionSet: operationDefinition.selectionSet,
                context: {
                    store: store,
                    processedData: {},
                    variables: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])({}, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getDefaultValues"])(operationDefinition), variables),
                    dataIdFromObject: dataIdFromObject,
                    fragmentMap: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinitions"])(document)),
                    fragmentMatcherFunction: fragmentMatcherFunction,
                },
            });
        }
        catch (e) {
            throw enhanceErrorWithDocument(e, document);
        }
    };
    StoreWriter.prototype.writeSelectionSetToStore = function (_a) {
        var _this = this;
        var result = _a.result, dataId = _a.dataId, selectionSet = _a.selectionSet, context = _a.context;
        var variables = context.variables, store = context.store, fragmentMap = context.fragmentMap;
        selectionSet.selections.forEach(function (selection) {
            var _a;
            if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["shouldInclude"])(selection, variables)) {
                return;
            }
            if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isField"])(selection)) {
                var resultFieldKey = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["resultKeyNameFromField"])(selection);
                var value = result[resultFieldKey];
                if (typeof value !== 'undefined') {
                    _this.writeFieldToStore({
                        dataId: dataId,
                        value: value,
                        field: selection,
                        context: context,
                    });
                }
                else {
                    var isDefered = false;
                    var isClient = false;
                    if (selection.directives && selection.directives.length) {
                        isDefered = selection.directives.some(function (directive) { return directive.name && directive.name.value === 'defer'; });
                        isClient = selection.directives.some(function (directive) { return directive.name && directive.name.value === 'client'; });
                    }
                    if (!isDefered && !isClient && context.fragmentMatcherFunction) {
                         false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
                    }
                }
            }
            else {
                var fragment = void 0;
                if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isInlineFragment"])(selection)) {
                    fragment = selection;
                }
                else {
                    fragment = (fragmentMap || {})[selection.name.value];
                     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fragment, "No fragment named " + selection.name.value + ".");
                }
                var matches = true;
                if (context.fragmentMatcherFunction && fragment.typeCondition) {
                    var id = dataId || 'self';
                    var idValue = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["toIdValue"])({ id: id, typename: undefined });
                    var fakeContext = {
                        store: new ObjectCache((_a = {}, _a[id] = result, _a)),
                        cacheRedirects: {},
                    };
                    var match = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);
                    if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isProduction"])() && match === 'heuristic') {
                         false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error('WARNING: heuristic fragment matching going on!');
                    }
                    matches = !!match;
                }
                if (matches) {
                    _this.writeSelectionSetToStore({
                        result: result,
                        selectionSet: fragment.selectionSet,
                        dataId: dataId,
                        context: context,
                    });
                }
            }
        });
        return store;
    };
    StoreWriter.prototype.writeFieldToStore = function (_a) {
        var _b;
        var field = _a.field, value = _a.value, dataId = _a.dataId, context = _a.context;
        var variables = context.variables, dataIdFromObject = context.dataIdFromObject, store = context.store;
        var storeValue;
        var storeObject;
        var storeFieldName = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["storeKeyNameFromField"])(field, variables);
        if (!field.selectionSet || value === null) {
            storeValue =
                value != null && typeof value === 'object'
                    ?
                        { type: 'json', json: value }
                    :
                        value;
        }
        else if (Array.isArray(value)) {
            var generatedId = dataId + "." + storeFieldName;
            storeValue = this.processArrayValue(value, generatedId, field.selectionSet, context);
        }
        else {
            var valueDataId = dataId + "." + storeFieldName;
            var generated = true;
            if (!isGeneratedId(valueDataId)) {
                valueDataId = '$' + valueDataId;
            }
            if (dataIdFromObject) {
                var semanticId = dataIdFromObject(value);
                 false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!semanticId || !isGeneratedId(semanticId), 'IDs returned by dataIdFromObject cannot begin with the "$" character.');
                if (semanticId ||
                    (typeof semanticId === 'number' && semanticId === 0)) {
                    valueDataId = semanticId;
                    generated = false;
                }
            }
            if (!isDataProcessed(valueDataId, field, context.processedData)) {
                this.writeSelectionSetToStore({
                    dataId: valueDataId,
                    result: value,
                    selectionSet: field.selectionSet,
                    context: context,
                });
            }
            var typename = value.__typename;
            storeValue = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["toIdValue"])({ id: valueDataId, typename: typename }, generated);
            storeObject = store.get(dataId);
            var escapedId = storeObject && storeObject[storeFieldName];
            if (escapedId !== storeValue && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(escapedId)) {
                var hadTypename = escapedId.typename !== undefined;
                var hasTypename = typename !== undefined;
                var typenameChanged = hadTypename && hasTypename && escapedId.typename !== typename;
                 false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!generated || escapedId.generated || typenameChanged, "Store error: the application attempted to write an object with no provided id but the store already contains an id of " + escapedId.id + " for this object. The selectionSet that was trying to be written is:\n" + JSON.stringify(field));
                 false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!hadTypename || hasTypename, "Store error: the application attempted to write an object with no provided typename but the store already contains an object with typename of " + escapedId.typename + " for the object of id " + escapedId.id + ". The selectionSet that was trying to be written is:\n" + JSON.stringify(field));
                if (escapedId.generated) {
                    if (typenameChanged) {
                        if (!generated) {
                            store.delete(escapedId.id);
                        }
                    }
                    else {
                        mergeWithGenerated(escapedId.id, storeValue.id, store);
                    }
                }
            }
        }
        storeObject = store.get(dataId);
        if (!storeObject || !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(storeValue, storeObject[storeFieldName])) {
            store.set(dataId, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, storeObject), (_b = {}, _b[storeFieldName] = storeValue, _b)));
        }
    };
    StoreWriter.prototype.processArrayValue = function (value, generatedId, selectionSet, context) {
        var _this = this;
        return value.map(function (item, index) {
            if (item === null) {
                return null;
            }
            var itemDataId = generatedId + "." + index;
            if (Array.isArray(item)) {
                return _this.processArrayValue(item, itemDataId, selectionSet, context);
            }
            var generated = true;
            if (context.dataIdFromObject) {
                var semanticId = context.dataIdFromObject(item);
                if (semanticId) {
                    itemDataId = semanticId;
                    generated = false;
                }
            }
            if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
                _this.writeSelectionSetToStore({
                    dataId: itemDataId,
                    result: item,
                    selectionSet: selectionSet,
                    context: context,
                });
            }
            return Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["toIdValue"])({ id: itemDataId, typename: item.__typename }, generated);
        });
    };
    return StoreWriter;
}());
function isGeneratedId(id) {
    return id[0] === '$';
}
function mergeWithGenerated(generatedKey, realKey, cache) {
    if (generatedKey === realKey) {
        return false;
    }
    var generated = cache.get(generatedKey);
    var real = cache.get(realKey);
    var madeChanges = false;
    Object.keys(generated).forEach(function (key) {
        var value = generated[key];
        var realValue = real[key];
        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(value) &&
            isGeneratedId(value.id) &&
            Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(realValue) &&
            !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(value, realValue) &&
            mergeWithGenerated(value.id, realValue.id, cache)) {
            madeChanges = true;
        }
    });
    cache.delete(generatedKey);
    var newRealValue = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, generated), real);
    if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(newRealValue, real)) {
        return madeChanges;
    }
    cache.set(realKey, newRealValue);
    return true;
}
function isDataProcessed(dataId, field, processedData) {
    if (!processedData) {
        return false;
    }
    if (processedData[dataId]) {
        if (processedData[dataId].indexOf(field) >= 0) {
            return true;
        }
        else {
            processedData[dataId].push(field);
        }
    }
    else {
        processedData[dataId] = [field];
    }
    return false;
}

var defaultConfig = {
    fragmentMatcher: new HeuristicFragmentMatcher(),
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    freezeResults: false,
};
function defaultDataIdFromObject(result) {
    if (result.__typename) {
        if (result.id !== undefined) {
            return result.__typename + ":" + result.id;
        }
        if (result._id !== undefined) {
            return result.__typename + ":" + result._id;
        }
    }
    return null;
}
var hasOwn$1 = Object.prototype.hasOwnProperty;
var OptimisticCacheLayer = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OptimisticCacheLayer, _super);
    function OptimisticCacheLayer(optimisticId, parent, transaction) {
        var _this = _super.call(this, Object.create(null)) || this;
        _this.optimisticId = optimisticId;
        _this.parent = parent;
        _this.transaction = transaction;
        return _this;
    }
    OptimisticCacheLayer.prototype.toObject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.parent.toObject()), this.data);
    };
    OptimisticCacheLayer.prototype.get = function (dataId) {
        return hasOwn$1.call(this.data, dataId)
            ? this.data[dataId]
            : this.parent.get(dataId);
    };
    return OptimisticCacheLayer;
}(ObjectCache));
var InMemoryCache = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.cacheKeyRoot = new optimism__WEBPACK_IMPORTED_MODULE_3__["KeyTrie"](apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["canUseWeakMap"]);
        _this.silenceBroadcast = false;
        _this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultConfig), config);
        if (_this.config.customResolvers) {
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.');
            _this.config.cacheRedirects = _this.config.customResolvers;
        }
        if (_this.config.cacheResolvers) {
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.');
            _this.config.cacheRedirects = _this.config.cacheResolvers;
        }
        _this.addTypename = !!_this.config.addTypename;
        _this.data = _this.config.resultCaching
            ? new DepTrackingCache()
            : new ObjectCache();
        _this.optimisticData = _this.data;
        _this.storeWriter = new StoreWriter();
        _this.storeReader = new StoreReader({
            cacheKeyRoot: _this.cacheKeyRoot,
            freezeResults: config.freezeResults,
        });
        var cache = _this;
        var maybeBroadcastWatch = cache.maybeBroadcastWatch;
        _this.maybeBroadcastWatch = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (c) {
            return maybeBroadcastWatch.call(_this, c);
        }, {
            makeCacheKey: function (c) {
                if (c.optimistic) {
                    return;
                }
                if (c.previousResult) {
                    return;
                }
                if (cache.data instanceof DepTrackingCache) {
                    return cache.cacheKeyRoot.lookup(c.query, JSON.stringify(c.variables));
                }
            }
        });
        return _this;
    }
    InMemoryCache.prototype.restore = function (data) {
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).toObject();
    };
    InMemoryCache.prototype.read = function (options) {
        if (typeof options.rootId === 'string' &&
            typeof this.data.get(options.rootId) === 'undefined') {
            return null;
        }
        var fragmentMatcher = this.config.fragmentMatcher;
        var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
        return this.storeReader.readQueryFromStore({
            store: options.optimistic ? this.optimisticData : this.data,
            query: this.transformDocument(options.query),
            variables: options.variables,
            rootId: options.rootId,
            fragmentMatcherFunction: fragmentMatcherFunction,
            previousResult: options.previousResult,
            config: this.config,
        }) || null;
    };
    InMemoryCache.prototype.write = function (write) {
        var fragmentMatcher = this.config.fragmentMatcher;
        var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
        this.storeWriter.writeResultToStore({
            dataId: write.dataId,
            result: write.result,
            variables: write.variables,
            document: this.transformDocument(write.query),
            store: this.data,
            dataIdFromObject: this.config.dataIdFromObject,
            fragmentMatcherFunction: fragmentMatcherFunction,
        });
        this.broadcastWatches();
    };
    InMemoryCache.prototype.diff = function (query) {
        var fragmentMatcher = this.config.fragmentMatcher;
        var fragmentMatcherFunction = fragmentMatcher && fragmentMatcher.match;
        return this.storeReader.diffQueryAgainstStore({
            store: query.optimistic ? this.optimisticData : this.data,
            query: this.transformDocument(query.query),
            variables: query.variables,
            returnPartialData: query.returnPartialData,
            previousResult: query.previousResult,
            fragmentMatcherFunction: fragmentMatcherFunction,
            config: this.config,
        });
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        this.watches.add(watch);
        return function () {
            _this.watches.delete(watch);
        };
    };
    InMemoryCache.prototype.evict = function (query) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("eviction is not implemented on InMemory Cache");
    };
    InMemoryCache.prototype.reset = function () {
        this.data.clear();
        this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var toReapply = [];
        var removedCount = 0;
        var layer = this.optimisticData;
        while (layer instanceof OptimisticCacheLayer) {
            if (layer.optimisticId === idToRemove) {
                ++removedCount;
            }
            else {
                toReapply.push(layer);
            }
            layer = layer.parent;
        }
        if (removedCount > 0) {
            this.optimisticData = layer;
            while (toReapply.length > 0) {
                var layer_1 = toReapply.pop();
                this.performTransaction(layer_1.transaction, layer_1.optimisticId);
            }
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.performTransaction = function (transaction, optimisticId) {
        var _a = this, data = _a.data, silenceBroadcast = _a.silenceBroadcast;
        this.silenceBroadcast = true;
        if (typeof optimisticId === 'string') {
            this.data = this.optimisticData = new OptimisticCacheLayer(optimisticId, this.optimisticData, transaction);
        }
        try {
            transaction(this);
        }
        finally {
            this.silenceBroadcast = silenceBroadcast;
            this.data = data;
        }
        this.broadcastWatches();
    };
    InMemoryCache.prototype.recordOptimisticTransaction = function (transaction, id) {
        return this.performTransaction(transaction, id);
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["addTypenameToDocument"])(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.broadcastWatches = function () {
        var _this = this;
        if (!this.silenceBroadcast) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c); });
        }
    };
    InMemoryCache.prototype.maybeBroadcastWatch = function (c) {
        c.callback(this.diff({
            query: c.query,
            variables: c.variables,
            previousResult: c.previousResult && c.previousResult(),
            optimistic: c.optimistic,
        }));
    };
    return InMemoryCache;
}(apollo_cache__WEBPACK_IMPORTED_MODULE_1__["ApolloCache"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-cache-inmemory/node_modules/@wry/context/lib/context.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/apollo-cache-inmemory/node_modules/@wry/context/lib/context.esm.js ***!
  \*****************************************************************************************/
/*! exports provided: Slot, asyncFromGen, bind, noContext, setTimeout, wrapYieldingFiberMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slot", function() { return Slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncFromGen", function() { return asyncFromGen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noContext", function() { return noContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTimeout", function() { return setTimeoutWithContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapYieldingFiberMethods", function() { return wrapYieldingFiberMethods; });
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
var MISSING_VALUE = {};
var idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
var makeSlotClass = function () { return /** @class */ (function () {
    function Slot() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = [
            "slot",
            idCounter++,
            Date.now(),
            Math.random().toString(36).slice(2),
        ].join(":");
    }
    Slot.prototype.hasValue = function () {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
            // We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE)
                    break;
                if (context_1 !== currentContext) {
                    // Cache the value in currentContext.slots so the next lookup will
                    // be faster. This caching is safe because the tree of contexts and
                    // the values of the slots are logically immutable.
                    currentContext.slots[this.id] = value;
                }
                return true;
            }
        }
        if (currentContext) {
            // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
    };
    Slot.prototype.getValue = function () {
        if (this.hasValue()) {
            return currentContext.slots[this.id];
        }
    };
    Slot.prototype.withValue = function (value, callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        var _a;
        var slots = (_a = {
                __proto__: null
            },
            _a[this.id] = value,
            _a);
        var parent = currentContext;
        currentContext = { parent: parent, slots: slots };
        try {
            // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.
            return callback.apply(thisArg, args);
        }
        finally {
            currentContext = parent;
        }
    };
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    Slot.bind = function (callback) {
        var context = currentContext;
        return function () {
            var saved = currentContext;
            try {
                currentContext = context;
                return callback.apply(this, arguments);
            }
            finally {
                currentContext = saved;
            }
        };
    };
    // Immediately run a callback function without any captured context.
    Slot.noContext = function (callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        if (currentContext) {
            var saved = currentContext;
            try {
                currentContext = null;
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            }
            finally {
                currentContext = saved;
            }
        }
        else {
            return callback.apply(thisArg, args);
        }
    };
    return Slot;
}()); };
// We store a single global implementation of the Slot class as a permanent
// non-enumerable symbol property of the Array constructor. This obfuscation
// does nothing to prevent access to the Slot class, but at least it ensures
// the implementation (i.e. currentContext) cannot be tampered with, and all
// copies of the @wry/context package (hopefully just one) will share the
// same Slot implementation. Since the first copy of the @wry/context package
// to be imported wins, this technique imposes a very high cost for any
// future breaking changes to the Slot class.
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function () {
    var Slot = makeSlotClass();
    try {
        Object.defineProperty(host, globalKey, {
            value: host[globalKey] = Slot,
            enumerable: false,
            writable: false,
            configurable: false,
        });
    }
    finally {
        return Slot;
    }
}();

var bind = Slot.bind, noContext = Slot.noContext;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function () {
        var gen = genFn.apply(this, arguments);
        var boundNext = bind(gen.next);
        var boundThrow = bind(gen.throw);
        return new Promise(function (resolve, reject) {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                }
                catch (error) {
                    return reject(error);
                }
                var next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) {
                    result.value.then(next, result.done ? reject : invokeThrow);
                }
                else {
                    next(result.value);
                }
            }
            var invokeNext = function (value) { return invoke(boundNext, value); };
            var invokeThrow = function (error) { return invoke(boundThrow, error); };
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
var wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        var wrap = function (obj, method) {
            var fn = obj[method];
            obj[method] = function () {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}


//# sourceMappingURL=context.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-cache-inmemory/node_modules/optimism/lib/bundle.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/apollo-cache-inmemory/node_modules/optimism/lib/bundle.esm.js ***!
  \************************************************************************************/
/*! exports provided: asyncFromGen, bindContext, noContext, setTimeout, KeyTrie, defaultMakeCacheKey, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyTrie", function() { return KeyTrie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMakeCacheKey", function() { return defaultMakeCacheKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/context */ "./node_modules/apollo-cache-inmemory/node_modules/@wry/context/lib/context.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncFromGen", function() { return _wry_context__WEBPACK_IMPORTED_MODULE_0__["asyncFromGen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindContext", function() { return _wry_context__WEBPACK_IMPORTED_MODULE_0__["bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noContext", function() { return _wry_context__WEBPACK_IMPORTED_MODULE_0__["noContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTimeout", function() { return _wry_context__WEBPACK_IMPORTED_MODULE_0__["setTimeout"]; });




function defaultDispose() { }
var Cache = /** @class */ (function () {
    function Cache(max, dispose) {
        if (max === void 0) { max = Infinity; }
        if (dispose === void 0) { dispose = defaultDispose; }
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache.prototype.has = function (key) {
        return this.map.has(key);
    };
    Cache.prototype.get = function (key) {
        var entry = this.getEntry(key);
        return entry && entry.value;
    };
    Cache.prototype.getEntry = function (key) {
        var entry = this.map.get(key);
        if (entry && entry !== this.newest) {
            var older = entry.older, newer = entry.newer;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            entry.older = this.newest;
            entry.older.newer = entry;
            entry.newer = null;
            this.newest = entry;
            if (entry === this.oldest) {
                this.oldest = newer;
            }
        }
        return entry;
    };
    Cache.prototype.set = function (key, value) {
        var entry = this.getEntry(key);
        if (entry) {
            return entry.value = value;
        }
        entry = {
            key: key,
            value: value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = entry;
        }
        this.newest = entry;
        this.oldest = this.oldest || entry;
        this.map.set(key, entry);
        return entry.value;
    };
    Cache.prototype.clean = function () {
        while (this.oldest && this.map.size > this.max) {
            this.delete(this.oldest.key);
        }
    };
    Cache.prototype.delete = function (key) {
        var entry = this.map.get(key);
        if (entry) {
            if (entry === this.newest) {
                this.newest = entry.older;
            }
            if (entry === this.oldest) {
                this.oldest = entry.newer;
            }
            if (entry.newer) {
                entry.newer.older = entry.older;
            }
            if (entry.older) {
                entry.older.newer = entry.newer;
            }
            this.map.delete(key);
            this.dispose(entry.value, key);
            return true;
        }
        return false;
    };
    return Cache;
}());

var parentEntrySlot = new _wry_context__WEBPACK_IMPORTED_MODULE_0__["Slot"]();

var reusableEmptyArray = [];
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
    }
}
function valueIs(a, b) {
    var len = a.length;
    return (
    // Unknown values are not equal to each other.
    len > 0 &&
        // Both values must be ordinary (or both exceptional) to be equal.
        len === b.length &&
        // The underlying value or exception must be the same.
        a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch (value.length) {
        case 0: throw new Error("unknown value");
        case 1: return value[0];
        case 2: throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = /** @class */ (function () {
    function Entry(fn, args) {
        this.fn = fn;
        this.args = args;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        ++Entry.count;
    }
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    Entry.prototype.recompute = function () {
        assert(!this.recomputing, "already recomputing");
        if (!rememberParent(this) && maybeReportOrphan(this)) {
            // The recipient of the entry.reportOrphan callback decided to dispose
            // of this orphan entry by calling entry.dispose(), so we don't need to
            // (and should not) proceed with the recomputation.
            return void 0;
        }
        return mightBeDirty(this)
            ? reallyRecompute(this)
            : valueGet(this.value);
    };
    Entry.prototype.setDirty = function () {
        if (this.dirty)
            return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    };
    Entry.prototype.dispose = function () {
        var _this = this;
        forgetChildren(this).forEach(maybeReportOrphan);
        maybeUnsubscribe(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        this.parents.forEach(function (parent) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry.count = 0;
    return Entry;
}());
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
            parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
            reportDirtyChild(parent, child);
        }
        else {
            reportCleanChild(parent, child);
        }
        return parent;
    }
}
function reallyRecompute(entry) {
    // Since this recomputation is likely to re-remember some of this
    // entry's children, we forget our children here but do not call
    // maybeReportOrphan until after the recomputation finishes.
    var originalChildren = forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [entry]);
    if (maybeSubscribe(entry)) {
        // If we successfully recomputed entry.value and did not fail to
        // (re)subscribe, then this Entry is no longer explicitly dirty.
        setClean(entry);
    }
    // Now that we've had a chance to re-remember any children that were
    // involved in the recomputation, we can safely report any orphan
    // children that remain.
    originalChildren.forEach(maybeReportOrphan);
    return valueGet(entry.value);
}
function recomputeNewValue(entry) {
    entry.recomputing = true;
    // Set entry.value as unknown.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, entry.args);
    }
    catch (e) {
        // If entry.fn throws, entry.value will become exceptional.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
        // This Entry may still have dirty children, in which case we can't
        // let our parents know we're clean just yet.
        return;
    }
    reportClean(entry);
}
function reportDirty(child) {
    child.parents.forEach(function (parent) { return reportDirtyChild(parent, child); });
}
function reportClean(child) {
    child.parents.forEach(function (parent) { return reportCleanChild(parent, child); });
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || new Set;
    }
    else if (parent.dirtyChildren.has(child)) {
        // If we already know this child is dirty, then we must have already
        // informed our own parents that we are dirty, so we can terminate
        // the recursion early.
        return;
    }
    parent.dirtyChildren.add(child);
    reportDirty(parent);
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
    }
    else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
        return;
    }
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) {
                emptySetPool.push(dc);
            }
            parent.dirtyChildren = null;
        }
    }
}
// If the given entry has a reportOrphan method, and no remaining parents,
// call entry.reportOrphan and return true iff it returns true. The
// reportOrphan function should return true to indicate entry.dispose()
// has been called, and the entry has been removed from any other caches
// (see index.js for the only current example).
function maybeReportOrphan(entry) {
    return entry.parents.size === 0 &&
        typeof entry.reportOrphan === "function" &&
        entry.reportOrphan() === true;
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    var children = reusableEmptyArray;
    if (parent.childValues.size > 0) {
        children = [];
        parent.childValues.forEach(function (_value, child) {
            forgetChild(parent, child);
            children.push(child);
        });
    }
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
    return children;
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry) {
    if (typeof entry.subscribe === "function") {
        try {
            maybeUnsubscribe(entry); // Prevent double subscriptions.
            entry.unsubscribe = entry.subscribe.apply(null, entry.args);
        }
        catch (e) {
            // If this Entry has a subscribe function and it threw an exception
            // (or an unsubscribe function it previously returned now throws),
            // return false to indicate that we were not able to subscribe (or
            // unsubscribe), and this Entry should remain dirty.
            entry.setDirty();
            return false;
        }
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}
function maybeUnsubscribe(entry) {
    var unsubscribe = entry.unsubscribe;
    if (typeof unsubscribe === "function") {
        entry.unsubscribe = void 0;
        unsubscribe();
    }
}

// A trie data structure that holds object keys weakly, yet can also hold
// non-object keys, unlike the native `WeakMap`.
var KeyTrie = /** @class */ (function () {
    function KeyTrie(weakness) {
        this.weakness = weakness;
    }
    KeyTrie.prototype.lookup = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return this.lookupArray(array);
    };
    KeyTrie.prototype.lookupArray = function (array) {
        var node = this;
        array.forEach(function (key) { return node = node.getChildTrie(key); });
        return node.data || (node.data = Object.create(null));
    };
    KeyTrie.prototype.getChildTrie = function (key) {
        var map = this.weakness && isObjRef(key)
            ? this.weak || (this.weak = new WeakMap())
            : this.strong || (this.strong = new Map());
        var child = map.get(key);
        if (!child)
            map.set(key, child = new KeyTrie(this.weakness));
        return child;
    };
    return KeyTrie;
}());
function isObjRef(value) {
    switch (typeof value) {
        case "object":
            if (value === null)
                break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}

// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
var keyTrie = new KeyTrie(typeof WeakMap === "function");
function defaultMakeCacheKey() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return keyTrie.lookupArray(args);
}
var caches = new Set();
function wrap(originalFunction, options) {
    if (options === void 0) { options = Object.create(null); }
    var cache = new Cache(options.max || Math.pow(2, 16), function (entry) { return entry.dispose(); });
    var disposable = !!options.disposable;
    var makeCacheKey = options.makeCacheKey || defaultMakeCacheKey;
    function optimistic() {
        if (disposable && !parentEntrySlot.hasValue()) {
            // If there's no current parent computation, and this wrapped
            // function is disposable (meaning we don't care about entry.value,
            // just dependency tracking), then we can short-cut everything else
            // in this function, because entry.recompute() is going to recycle
            // the entry object without recomputing anything, anyway.
            return void 0;
        }
        var key = makeCacheKey.apply(null, arguments);
        if (key === void 0) {
            return originalFunction.apply(null, arguments);
        }
        var args = Array.prototype.slice.call(arguments);
        var entry = cache.get(key);
        if (entry) {
            entry.args = args;
        }
        else {
            entry = new Entry(originalFunction, args);
            cache.set(key, entry);
            entry.subscribe = options.subscribe;
            if (disposable) {
                entry.reportOrphan = function () { return cache.delete(key); };
            }
        }
        var value = entry.recompute();
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache.set(key, entry);
        caches.add(cache);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function (cache) { return cache.clean(); });
            caches.clear();
        }
        // If options.disposable is truthy, the caller of wrap is telling us
        // they don't care about the result of entry.recompute(), so we should
        // avoid returning the value, so it won't be accidentally used.
        return disposable ? void 0 : value;
    }
    optimistic.dirty = function () {
        var key = makeCacheKey.apply(null, arguments);
        var child = key !== void 0 && cache.get(key);
        if (child) {
            child.setDirty();
        }
    };
    return optimistic;
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-cache-inmemory/node_modules/ts-invariant/lib/invariant.esm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/apollo-cache-inmemory/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \*******************************************************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-cache/lib/bundle.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/apollo-cache/lib/bundle.esm.js ***!
  \*****************************************************/
/*! exports provided: ApolloCache, Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return ApolloCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");


function queryFromPojo(obj) {
    var op = {
        kind: 'OperationDefinition',
        operation: 'query',
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [op],
    };
    return out;
}
function fragmentFromPojo(obj, typename) {
    var frag = {
        kind: 'FragmentDefinition',
        typeCondition: {
            kind: 'NamedType',
            name: {
                kind: 'Name',
                value: typename || '__FakeType',
            },
        },
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [frag],
    };
    return out;
}
function selectionSetFromObj(obj) {
    if (typeof obj === 'number' ||
        typeof obj === 'boolean' ||
        typeof obj === 'string' ||
        typeof obj === 'undefined' ||
        obj === null) {
        return null;
    }
    if (Array.isArray(obj)) {
        return selectionSetFromObj(obj[0]);
    }
    var selections = [];
    Object.keys(obj).forEach(function (key) {
        var nestedSelSet = selectionSetFromObj(obj[key]);
        var field = {
            kind: 'Field',
            name: {
                kind: 'Name',
                value: key,
            },
            selectionSet: nestedSelSet || undefined,
        };
        selections.push(field);
    });
    var selectionSet = {
        kind: 'SelectionSet',
        selections: selections,
    };
    return selectionSet;
}
var justTypenameQuery = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: null,
            variableDefinitions: null,
            directives: [],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        alias: null,
                        name: {
                            kind: 'Name',
                            value: '__typename',
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null,
                    },
                ],
            },
        },
    ],
};

var ApolloCache = (function () {
    function ApolloCache() {
    }
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["getFragmentQueryDocument"])(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.writeQuery = function (options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: options.query,
            variables: options.variables,
        });
    };
    ApolloCache.prototype.writeFragment = function (options) {
        this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["getFragmentQueryDocument"])(options.fragment, options.fragmentName),
        });
    };
    ApolloCache.prototype.writeData = function (_a) {
        var id = _a.id, data = _a.data;
        if (typeof id !== 'undefined') {
            var typenameResult = null;
            try {
                typenameResult = this.read({
                    rootId: id,
                    optimistic: false,
                    query: justTypenameQuery,
                });
            }
            catch (e) {
            }
            var __typename = (typenameResult && typenameResult.__typename) || '__ClientData';
            var dataToWrite = Object.assign({ __typename: __typename }, data);
            this.writeFragment({
                id: id,
                fragment: fragmentFromPojo(dataToWrite, __typename),
                data: dataToWrite,
            });
        }
        else {
            this.writeQuery({ query: queryFromPojo(data), data: data });
        }
    };
    return ApolloCache;
}());

var Cache;
(function (Cache) {
})(Cache || (Cache = {}));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-client/bundle.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/apollo-client/bundle.esm.js ***!
  \**************************************************/
/*! exports provided: default, ApolloClient, ApolloError, FetchType, NetworkStatus, ObservableQuery, isApolloError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return ApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return ApolloError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchType", function() { return FetchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return NetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return ObservableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return isApolloError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");







var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus < 7;
}

var Observable = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Observable, _super);
    function Observable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Observable.prototype[symbol_observable__WEBPACK_IMPORTED_MODULE_3__["default"]] = function () {
        return this;
    };
    Observable.prototype['@@observable'] = function () {
        return this;
    };
    return Observable;
}(apollo_link__WEBPACK_IMPORTED_MODULE_2__["Observable"]));

function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (isNonEmptyArray(err.graphQLErrors)) {
        err.graphQLErrors.forEach(function (graphQLError) {
            var errorMessage = graphQLError
                ? graphQLError.message
                : 'Error message not found.';
            message += "GraphQL error: " + errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += 'Network error: ' + err.networkError.message + '\n';
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.networkError = networkError || null;
        if (!errorMessage) {
            _this.message = generateErrorMessage(_this);
        }
        else {
            _this.message = errorMessage;
        }
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

var FetchType;
(function (FetchType) {
    FetchType[FetchType["normal"] = 1] = "normal";
    FetchType[FetchType["refetch"] = 2] = "refetch";
    FetchType[FetchType["poll"] = 3] = "poll";
})(FetchType || (FetchType = {}));

var hasError = function (storeValue, policy) {
    if (policy === void 0) { policy = 'none'; }
    return storeValue && (storeValue.networkError ||
        (policy === 'none' && isNonEmptyArray(storeValue.graphQLErrors)));
};
var ObservableQuery = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, options = _a.options, _b = _a.shouldSubscribe, shouldSubscribe = _b === void 0 ? true : _b;
        var _this = _super.call(this, function (observer) {
            return _this.onSubscribe(observer);
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.isTornDown = false;
        _this.options = options;
        _this.variables = options.variables || {};
        _this.queryId = queryManager.generateQueryId();
        _this.shouldSubscribe = shouldSubscribe;
        var opDef = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationDefinition"])(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.queryManager = queryManager;
        return _this;
    }
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.currentResult = function () {
        var result = this.getCurrentResult();
        if (result.data === undefined) {
            result.data = {};
        }
        return result;
    };
    ObservableQuery.prototype.getCurrentResult = function () {
        if (this.isTornDown) {
            var lastResult = this.lastResult;
            return {
                data: !this.lastError && lastResult && lastResult.data || void 0,
                error: this.lastError,
                loading: false,
                networkStatus: NetworkStatus.error,
            };
        }
        var _a = this.queryManager.getCurrentQueryResult(this), data = _a.data, partial = _a.partial;
        var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
        var result;
        var fetchPolicy = this.options.fetchPolicy;
        var isNetworkFetchPolicy = fetchPolicy === 'network-only' ||
            fetchPolicy === 'no-cache';
        if (queryStoreValue) {
            var networkStatus = queryStoreValue.networkStatus;
            if (hasError(queryStoreValue, this.options.errorPolicy)) {
                return {
                    data: void 0,
                    loading: false,
                    networkStatus: networkStatus,
                    error: new ApolloError({
                        graphQLErrors: queryStoreValue.graphQLErrors,
                        networkError: queryStoreValue.networkError,
                    }),
                };
            }
            if (queryStoreValue.variables) {
                this.options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), queryStoreValue.variables);
                this.variables = this.options.variables;
            }
            result = {
                data: data,
                loading: isNetworkRequestInFlight(networkStatus),
                networkStatus: networkStatus,
            };
            if (queryStoreValue.graphQLErrors && this.options.errorPolicy === 'all') {
                result.errors = queryStoreValue.graphQLErrors;
            }
        }
        else {
            var loading = isNetworkFetchPolicy ||
                (partial && fetchPolicy !== 'cache-only');
            result = {
                data: data,
                loading: loading,
                networkStatus: loading ? NetworkStatus.loading : NetworkStatus.ready,
            };
        }
        if (!partial) {
            this.updateLastResult(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { stale: false }));
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), { partial: partial });
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        var snapshot = this.lastResultSnapshot;
        return !(snapshot &&
            newResult &&
            snapshot.networkStatus === newResult.networkStatus &&
            snapshot.stale === newResult.stale &&
            Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(snapshot.data, newResult.data));
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.getLastError = function () {
        return this.lastError;
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.lastResult;
        delete this.lastResultSnapshot;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        var queryStore = this.queryManager.queryStore.get(this.queryId);
        if (queryStore) {
            queryStore.networkError = null;
            queryStore.graphQLErrors = [];
        }
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-only') {
            return Promise.reject( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]('cache-only fetchPolicy option should not be used together with query refetch.'));
        }
        if (fetchPolicy !== 'no-cache' &&
            fetchPolicy !== 'cache-and-network') {
            fetchPolicy = 'network-only';
        }
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.variables, variables)) {
            this.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.variables), variables);
        }
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.options.variables, this.variables)) {
            this.options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), this.variables);
        }
        return this.queryManager.fetchQuery(this.queryId, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), { fetchPolicy: fetchPolicy }), FetchType.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fetchMoreOptions.updateQuery, 'updateQuery option is required. This function defines how to update the query data with the new results.');
        var combinedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (fetchMoreOptions.query ? fetchMoreOptions : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), fetchMoreOptions), { variables: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.variables), fetchMoreOptions.variables) }))), { fetchPolicy: 'network-only' });
        var qid = this.queryManager.generateQueryId();
        return this.queryManager
            .fetchQuery(qid, combinedOptions, FetchType.normal, this.queryId)
            .then(function (fetchMoreResult) {
            _this.updateQuery(function (previousResult) {
                return fetchMoreOptions.updateQuery(previousResult, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables,
                });
            });
            _this.queryManager.stopQuery(qid);
            return fetchMoreResult;
        }, function (error) {
            _this.queryManager.stopQuery(qid);
            throw error;
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (opts) {
        var oldFetchPolicy = this.options.fetchPolicy;
        this.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), opts);
        if (opts.pollInterval) {
            this.startPolling(opts.pollInterval);
        }
        else if (opts.pollInterval === 0) {
            this.stopPolling();
        }
        var fetchPolicy = opts.fetchPolicy;
        return this.setVariables(this.options.variables, oldFetchPolicy !== fetchPolicy && (oldFetchPolicy === 'cache-only' ||
            oldFetchPolicy === 'standby' ||
            fetchPolicy === 'network-only'), opts.fetchResults);
    };
    ObservableQuery.prototype.setVariables = function (variables, tryFetch, fetchResults) {
        if (tryFetch === void 0) { tryFetch = false; }
        if (fetchResults === void 0) { fetchResults = true; }
        this.isTornDown = false;
        variables = variables || this.variables;
        if (!tryFetch && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(variables, this.variables)) {
            return this.observers.size && fetchResults
                ? this.result()
                : Promise.resolve();
        }
        this.variables = this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.queryManager.fetchQuery(this.queryId, this.options);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var _a = queryManager.getQueryWithPreviousResult(this.queryId), previousResult = _a.previousResult, variables = _a.variables, document = _a.document;
        var newResult = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["tryFunctionOrLogError"])(function () {
            return mapFn(previousResult, { variables: variables });
        });
        if (newResult) {
            queryManager.dataStore.markUpdateQueryResult(document, variables, newResult);
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.queryManager.stopPollingQuery(this.queryId);
        this.options.pollInterval = undefined;
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        assertNotCacheFirstOrOnly(this);
        this.options.pollInterval = pollInterval;
        this.queryManager.startPollingQuery(this.options, this.queryId);
    };
    ObservableQuery.prototype.updateLastResult = function (newResult) {
        var previousResult = this.lastResult;
        this.lastResult = newResult;
        this.lastResultSnapshot = this.queryManager.assumeImmutableResults
            ? newResult
            : Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(newResult);
        return previousResult;
    };
    ObservableQuery.prototype.onSubscribe = function (observer) {
        var _this = this;
        try {
            var subObserver = observer._subscription._observer;
            if (subObserver && !subObserver.error) {
                subObserver.error = defaultSubscriptionObserverErrorCallback;
            }
        }
        catch (_a) { }
        var first = !this.observers.size;
        this.observers.add(observer);
        if (observer.next && this.lastResult)
            observer.next(this.lastResult);
        if (observer.error && this.lastError)
            observer.error(this.lastError);
        if (first) {
            this.setUpQuery();
        }
        return function () {
            if (_this.observers.delete(observer) && !_this.observers.size) {
                _this.tearDownQuery();
            }
        };
    };
    ObservableQuery.prototype.setUpQuery = function () {
        var _this = this;
        var _a = this, queryManager = _a.queryManager, queryId = _a.queryId;
        if (this.shouldSubscribe) {
            queryManager.addObservableQuery(queryId, this);
        }
        if (this.options.pollInterval) {
            assertNotCacheFirstOrOnly(this);
            queryManager.startPollingQuery(this.options, queryId);
        }
        var onError = function (error) {
            _this.updateLastResult(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.lastResult), { errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false }));
            iterateObserversSafely(_this.observers, 'error', _this.lastError = error);
        };
        queryManager.observeQuery(queryId, this.options, {
            next: function (result) {
                if (_this.lastError || _this.isDifferentFromLastResult(result)) {
                    var previousResult_1 = _this.updateLastResult(result);
                    var _a = _this.options, query_1 = _a.query, variables = _a.variables, fetchPolicy_1 = _a.fetchPolicy;
                    if (queryManager.transform(query_1).hasClientExports) {
                        queryManager.getLocalState().addExportedVariables(query_1, variables).then(function (variables) {
                            var previousVariables = _this.variables;
                            _this.variables = _this.options.variables = variables;
                            if (!result.loading &&
                                previousResult_1 &&
                                fetchPolicy_1 !== 'cache-only' &&
                                queryManager.transform(query_1).serverQuery &&
                                !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(previousVariables, variables)) {
                                _this.refetch();
                            }
                            else {
                                iterateObserversSafely(_this.observers, 'next', result);
                            }
                        });
                    }
                    else {
                        iterateObserversSafely(_this.observers, 'next', result);
                    }
                }
            },
            error: onError,
        }).catch(onError);
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        var queryManager = this.queryManager;
        this.isTornDown = true;
        queryManager.stopPollingQuery(this.queryId);
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        queryManager.removeObservableQuery(this.queryId);
        queryManager.stopQuery(this.queryId);
        this.observers.clear();
    };
    return ObservableQuery;
}(Observable));
function defaultSubscriptionObserverErrorCallback(error) {
     false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error('Unhandled error', error.message, error.stack);
}
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}
function assertNotCacheFirstOrOnly(obsQuery) {
    var fetchPolicy = obsQuery.options.fetchPolicy;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fetchPolicy !== 'cache-first' && fetchPolicy !== 'cache-only', 'Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
}

var MutationStore = (function () {
    function MutationStore() {
        this.store = {};
    }
    MutationStore.prototype.getStore = function () {
        return this.store;
    };
    MutationStore.prototype.get = function (mutationId) {
        return this.store[mutationId];
    };
    MutationStore.prototype.initMutation = function (mutationId, mutation, variables) {
        this.store[mutationId] = {
            mutation: mutation,
            variables: variables || {},
            loading: true,
            error: null,
        };
    };
    MutationStore.prototype.markMutationError = function (mutationId, error) {
        var mutation = this.store[mutationId];
        if (mutation) {
            mutation.loading = false;
            mutation.error = error;
        }
    };
    MutationStore.prototype.markMutationResult = function (mutationId) {
        var mutation = this.store[mutationId];
        if (mutation) {
            mutation.loading = false;
            mutation.error = null;
        }
    };
    MutationStore.prototype.reset = function () {
        this.store = {};
    };
    return MutationStore;
}());

var QueryStore = (function () {
    function QueryStore() {
        this.store = {};
    }
    QueryStore.prototype.getStore = function () {
        return this.store;
    };
    QueryStore.prototype.get = function (queryId) {
        return this.store[queryId];
    };
    QueryStore.prototype.initQuery = function (query) {
        var previousQuery = this.store[query.queryId];
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!previousQuery ||
            previousQuery.document === query.document ||
            Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(previousQuery.document, query.document), 'Internal Error: may not update existing query string in store');
        var isSetVariables = false;
        var previousVariables = null;
        if (query.storePreviousVariables &&
            previousQuery &&
            previousQuery.networkStatus !== NetworkStatus.loading) {
            if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(previousQuery.variables, query.variables)) {
                isSetVariables = true;
                previousVariables = previousQuery.variables;
            }
        }
        var networkStatus;
        if (isSetVariables) {
            networkStatus = NetworkStatus.setVariables;
        }
        else if (query.isPoll) {
            networkStatus = NetworkStatus.poll;
        }
        else if (query.isRefetch) {
            networkStatus = NetworkStatus.refetch;
        }
        else {
            networkStatus = NetworkStatus.loading;
        }
        var graphQLErrors = [];
        if (previousQuery && previousQuery.graphQLErrors) {
            graphQLErrors = previousQuery.graphQLErrors;
        }
        this.store[query.queryId] = {
            document: query.document,
            variables: query.variables,
            previousVariables: previousVariables,
            networkError: null,
            graphQLErrors: graphQLErrors,
            networkStatus: networkStatus,
            metadata: query.metadata,
        };
        if (typeof query.fetchMoreForQueryId === 'string' &&
            this.store[query.fetchMoreForQueryId]) {
            this.store[query.fetchMoreForQueryId].networkStatus =
                NetworkStatus.fetchMore;
        }
    };
    QueryStore.prototype.markQueryResult = function (queryId, result, fetchMoreForQueryId) {
        if (!this.store || !this.store[queryId])
            return;
        this.store[queryId].networkError = null;
        this.store[queryId].graphQLErrors = isNonEmptyArray(result.errors) ? result.errors : [];
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = NetworkStatus.ready;
        if (typeof fetchMoreForQueryId === 'string' &&
            this.store[fetchMoreForQueryId]) {
            this.store[fetchMoreForQueryId].networkStatus = NetworkStatus.ready;
        }
    };
    QueryStore.prototype.markQueryError = function (queryId, error, fetchMoreForQueryId) {
        if (!this.store || !this.store[queryId])
            return;
        this.store[queryId].networkError = error;
        this.store[queryId].networkStatus = NetworkStatus.error;
        if (typeof fetchMoreForQueryId === 'string') {
            this.markQueryResultClient(fetchMoreForQueryId, true);
        }
    };
    QueryStore.prototype.markQueryResultClient = function (queryId, complete) {
        var storeValue = this.store && this.store[queryId];
        if (storeValue) {
            storeValue.networkError = null;
            storeValue.previousVariables = null;
            if (complete) {
                storeValue.networkStatus = NetworkStatus.ready;
            }
        }
    };
    QueryStore.prototype.stopQuery = function (queryId) {
        delete this.store[queryId];
    };
    QueryStore.prototype.reset = function (observableQueryIds) {
        var _this = this;
        Object.keys(this.store).forEach(function (queryId) {
            if (observableQueryIds.indexOf(queryId) < 0) {
                _this.stopQuery(queryId);
            }
            else {
                _this.store[queryId].networkStatus = NetworkStatus.loading;
            }
        });
    };
    return QueryStore;
}());

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('Found @client directives in a query but no ApolloClient resolvers ' +
                'were specified. This means ApolloClient local resolver handling ' +
                'has been disabled, and @client directives will be passed through ' +
                'to your link chain.');
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return this.resolvers ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["removeClientSetsFromDocument"])(document) : document;
    };
    LocalState.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var cache = this.cache;
        var newContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { cache: cache, getCacheKey: function (obj) {
                if (cache.config) {
                    return cache.config.dataIdFromObject(obj);
                }
                else {
                     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(false, 'To use context.getCacheKey, you need to use a cache that has ' +
                        'a configurable dataIdFromObject, like apollo-cache-inmemory.');
                }
            } });
        return newContext;
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables), data.exportedVariables)); })];
                }
                return [2, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["visit"])(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql_language_visitor__WEBPACK_IMPORTED_MODULE_5__["BREAK"];
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["buildQueryFromSelectionSet"])(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                mainDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getMainDefinition"])(document);
                fragments = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getFragmentDefinitions"])(document);
                fragmentMap = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["createFragmentMap"])(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? capitalizeFirstLetter(definitionOperation)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { cache: cache,
                        client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["shouldInclude"])(selection, variables)) {
                            return [2];
                        }
                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isField"])(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["resultKeyNameFromField"])(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isInlineFragment"])(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fragment, "No fragment named " + selection.name.value);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeDeepArray"])(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["resultKeyNameFromField"])(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(resolve(rootValue, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["argumentsObjectFromField"])(field, variables), execContext.context, { field: field, fragmentMap: execContext.fragmentMap }));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());

function multiplex(inner) {
    var observers = new Set();
    var sub = null;
    return new Observable(function (observer) {
        observers.add(observer);
        sub = sub || inner.subscribe({
            next: function (value) {
                observers.forEach(function (obs) { return obs.next && obs.next(value); });
            },
            error: function (error) {
                observers.forEach(function (obs) { return obs.error && obs.error(error); });
            },
            complete: function () {
                observers.forEach(function (obs) { return obs.complete && obs.complete(); });
            },
        });
        return function () {
            if (observers.delete(observer) && !observers.size && sub) {
                sub.unsubscribe();
                sub = null;
            }
        };
    });
}
function asyncMap(observable, mapFn) {
    return new Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeNextCount = 0;
        var completed = false;
        var handler = {
            next: function (value) {
                ++activeNextCount;
                new Promise(function (resolve) {
                    resolve(mapFn(value));
                }).then(function (result) {
                    --activeNextCount;
                    next && next.call(observer, result);
                    completed && handler.complete();
                }, function (e) {
                    --activeNextCount;
                    error && error.call(observer, e);
                });
            },
            error: function (e) {
                error && error.call(observer, e);
            },
            complete: function () {
                completed = true;
                if (!activeNextCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, store = _a.store, _c = _a.onBroadcast, onBroadcast = _c === void 0 ? function () { return undefined; } : _c, _d = _a.ssrMode, ssrMode = _d === void 0 ? false : _d, _e = _a.clientAwareness, clientAwareness = _e === void 0 ? {} : _e, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.mutationStore = new MutationStore();
        this.queryStore = new QueryStore();
        this.clientAwareness = {};
        this.idCounter = 1;
        this.queries = new Map();
        this.fetchQueryRejectFns = new Map();
        this.transformCache = new (apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["canUseWeakMap"] ? WeakMap : Map)();
        this.inFlightLinkObservables = new Map();
        this.pollingInfoByQueryId = new Map();
        this.link = link;
        this.queryDeduplication = queryDeduplication;
        this.dataStore = store;
        this.onBroadcast = onBroadcast;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({ cache: store.getCache() });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.fetchQueryRejectFns.forEach(function (reject) {
            reject( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]('QueryManager stopped while query was in flight'));
        });
    };
    QueryManager.prototype.mutate = function (_a) {
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueriesByName = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a.fetchPolicy, _e = _a.context, context = _e === void 0 ? {} : _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mutationId, generateUpdateQueriesInfo, self;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
                switch (_f.label) {
                    case 0:
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.');
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!fetchPolicy || fetchPolicy === 'no-cache', "Mutations only support a 'no-cache' fetchPolicy. If you don't want to disable the cache, remove your fetchPolicy setting to proceed with the default mutation behavior.");
                        mutationId = this.generateQueryId();
                        mutation = this.transform(mutation).document;
                        this.setQuery(mutationId, function () { return ({ document: mutation }); });
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = _f.sent();
                        _f.label = 2;
                    case 2:
                        generateUpdateQueriesInfo = function () {
                            var ret = {};
                            if (updateQueriesByName) {
                                _this.queries.forEach(function (_a, queryId) {
                                    var observableQuery = _a.observableQuery;
                                    if (observableQuery) {
                                        var queryName = observableQuery.queryName;
                                        if (queryName &&
                                            hasOwnProperty.call(updateQueriesByName, queryName)) {
                                            ret[queryId] = {
                                                updater: updateQueriesByName[queryName],
                                                query: _this.queryStore.get(queryId),
                                            };
                                        }
                                    }
                                });
                            }
                            return ret;
                        };
                        this.mutationStore.initMutation(mutationId, mutation, variables);
                        this.dataStore.markMutationInit({
                            mutationId: mutationId,
                            document: mutation,
                            variables: variables,
                            updateQueries: generateUpdateQueriesInfo(),
                            update: updateWithProxyFn,
                            optimisticResponse: optimisticResponse,
                        });
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                var storeResult;
                                var error;
                                self.getObservableFromLink(mutation, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { optimisticResponse: optimisticResponse }), variables, false).subscribe({
                                    next: function (result) {
                                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result) && errorPolicy === 'none') {
                                            error = new ApolloError({
                                                graphQLErrors: result.errors,
                                            });
                                            return;
                                        }
                                        self.mutationStore.markMutationResult(mutationId);
                                        if (fetchPolicy !== 'no-cache') {
                                            self.dataStore.markMutationResult({
                                                mutationId: mutationId,
                                                result: result,
                                                document: mutation,
                                                variables: variables,
                                                updateQueries: generateUpdateQueriesInfo(),
                                                update: updateWithProxyFn,
                                            });
                                        }
                                        storeResult = result;
                                    },
                                    error: function (err) {
                                        self.mutationStore.markMutationError(mutationId, err);
                                        self.dataStore.markMutationComplete({
                                            mutationId: mutationId,
                                            optimisticResponse: optimisticResponse,
                                        });
                                        self.broadcastQueries();
                                        self.setQuery(mutationId, function () { return ({ document: null }); });
                                        reject(new ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                    complete: function () {
                                        if (error) {
                                            self.mutationStore.markMutationError(mutationId, error);
                                        }
                                        self.dataStore.markMutationComplete({
                                            mutationId: mutationId,
                                            optimisticResponse: optimisticResponse,
                                        });
                                        self.broadcastQueries();
                                        if (error) {
                                            reject(error);
                                            return;
                                        }
                                        if (typeof refetchQueries === 'function') {
                                            refetchQueries = refetchQueries(storeResult);
                                        }
                                        var refetchQueryPromises = [];
                                        if (isNonEmptyArray(refetchQueries)) {
                                            refetchQueries.forEach(function (refetchQuery) {
                                                if (typeof refetchQuery === 'string') {
                                                    self.queries.forEach(function (_a) {
                                                        var observableQuery = _a.observableQuery;
                                                        if (observableQuery &&
                                                            observableQuery.queryName === refetchQuery) {
                                                            refetchQueryPromises.push(observableQuery.refetch());
                                                        }
                                                    });
                                                }
                                                else {
                                                    var queryOptions = {
                                                        query: refetchQuery.query,
                                                        variables: refetchQuery.variables,
                                                        fetchPolicy: 'network-only',
                                                    };
                                                    if (refetchQuery.context) {
                                                        queryOptions.context = refetchQuery.context;
                                                    }
                                                    refetchQueryPromises.push(self.query(queryOptions));
                                                }
                                            });
                                        }
                                        Promise.all(awaitRefetchQueries ? refetchQueryPromises : []).then(function () {
                                            self.setQuery(mutationId, function () { return ({ document: null }); });
                                            if (errorPolicy === 'ignore' &&
                                                storeResult &&
                                                Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(storeResult)) {
                                                delete storeResult.errors;
                                            }
                                            resolve(storeResult);
                                        });
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, fetchType, fetchMoreForQueryId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, metadata, _b, fetchPolicy, _c, context, query, variables, storeResult, isNetworkOnly, needToFetch, _d, complete, result, shouldFetch, requestId, cancel, networkResult;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = options.metadata, metadata = _a === void 0 ? null : _a, _b = options.fetchPolicy, fetchPolicy = _b === void 0 ? 'cache-first' : _b, _c = options.context, context = _c === void 0 ? {} : _c;
                        query = this.transform(options.query).document;
                        variables = this.getVariables(query, options.variables);
                        if (!this.transform(query).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(query, variables, context)];
                    case 1:
                        variables = _e.sent();
                        _e.label = 2;
                    case 2:
                        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { variables: variables });
                        isNetworkOnly = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
                        needToFetch = isNetworkOnly;
                        if (!isNetworkOnly) {
                            _d = this.dataStore.getCache().diff({
                                query: query,
                                variables: variables,
                                returnPartialData: true,
                                optimistic: false,
                            }), complete = _d.complete, result = _d.result;
                            needToFetch = !complete || fetchPolicy === 'cache-and-network';
                            storeResult = result;
                        }
                        shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['live'], query))
                            shouldFetch = true;
                        requestId = this.idCounter++;
                        cancel = fetchPolicy !== 'no-cache'
                            ? this.updateQueryWatch(queryId, query, options)
                            : undefined;
                        this.setQuery(queryId, function () { return ({
                            document: query,
                            lastRequestId: requestId,
                            invalidated: true,
                            cancel: cancel,
                        }); });
                        this.invalidate(fetchMoreForQueryId);
                        this.queryStore.initQuery({
                            queryId: queryId,
                            document: query,
                            storePreviousVariables: shouldFetch,
                            variables: variables,
                            isPoll: fetchType === FetchType.poll,
                            isRefetch: fetchType === FetchType.refetch,
                            metadata: metadata,
                            fetchMoreForQueryId: fetchMoreForQueryId,
                        });
                        this.broadcastQueries();
                        if (shouldFetch) {
                            networkResult = this.fetchRequest({
                                requestId: requestId,
                                queryId: queryId,
                                document: query,
                                options: options,
                                fetchMoreForQueryId: fetchMoreForQueryId,
                            }).catch(function (error) {
                                if (isApolloError(error)) {
                                    throw error;
                                }
                                else {
                                    if (requestId >= _this.getQuery(queryId).lastRequestId) {
                                        _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);
                                        _this.invalidate(queryId);
                                        _this.invalidate(fetchMoreForQueryId);
                                        _this.broadcastQueries();
                                    }
                                    throw new ApolloError({ networkError: error });
                                }
                            });
                            if (fetchPolicy !== 'cache-and-network') {
                                return [2, networkResult];
                            }
                            networkResult.catch(function () { });
                        }
                        this.queryStore.markQueryResultClient(queryId, !shouldFetch);
                        this.invalidate(queryId);
                        this.invalidate(fetchMoreForQueryId);
                        if (this.transform(query).hasForcedResolvers) {
                            return [2, this.localState.runResolvers({
                                    document: query,
                                    remoteResult: { data: storeResult },
                                    context: context,
                                    variables: variables,
                                    onlyRunForcedResolvers: true,
                                }).then(function (result) {
                                    _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);
                                    _this.broadcastQueries();
                                    return result;
                                })];
                        }
                        this.broadcastQueries();
                        return [2, { data: storeResult }];
                }
            });
        });
    };
    QueryManager.prototype.markQueryResult = function (queryId, result, _a, fetchMoreForQueryId) {
        var fetchPolicy = _a.fetchPolicy, variables = _a.variables, errorPolicy = _a.errorPolicy;
        if (fetchPolicy === 'no-cache') {
            this.setQuery(queryId, function () { return ({
                newData: { result: result.data, complete: true },
            }); });
        }
        else {
            this.dataStore.markQueryResult(result, this.getQuery(queryId).document, variables, fetchMoreForQueryId, errorPolicy === 'ignore' || errorPolicy === 'all');
        }
    };
    QueryManager.prototype.queryListenerForObserver = function (queryId, options, observer) {
        var _this = this;
        function invoke(method, argument) {
            if (observer[method]) {
                try {
                    observer[method](argument);
                }
                catch (e) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error(e);
                }
            }
            else if (method === 'error') {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error(argument);
            }
        }
        return function (queryStoreValue, newData) {
            _this.invalidate(queryId, false);
            if (!queryStoreValue)
                return;
            var _a = _this.getQuery(queryId), observableQuery = _a.observableQuery, document = _a.document;
            var fetchPolicy = observableQuery
                ? observableQuery.options.fetchPolicy
                : options.fetchPolicy;
            if (fetchPolicy === 'standby')
                return;
            var loading = isNetworkRequestInFlight(queryStoreValue.networkStatus);
            var lastResult = observableQuery && observableQuery.getLastResult();
            var networkStatusChanged = !!(lastResult &&
                lastResult.networkStatus !== queryStoreValue.networkStatus);
            var shouldNotifyIfLoading = options.returnPartialData ||
                (!newData && queryStoreValue.previousVariables) ||
                (networkStatusChanged && options.notifyOnNetworkStatusChange) ||
                fetchPolicy === 'cache-only' ||
                fetchPolicy === 'cache-and-network';
            if (loading && !shouldNotifyIfLoading) {
                return;
            }
            var hasGraphQLErrors = isNonEmptyArray(queryStoreValue.graphQLErrors);
            var errorPolicy = observableQuery
                && observableQuery.options.errorPolicy
                || options.errorPolicy
                || 'none';
            if (errorPolicy === 'none' && hasGraphQLErrors || queryStoreValue.networkError) {
                return invoke('error', new ApolloError({
                    graphQLErrors: queryStoreValue.graphQLErrors,
                    networkError: queryStoreValue.networkError,
                }));
            }
            try {
                var data = void 0;
                var isMissing = void 0;
                if (newData) {
                    if (fetchPolicy !== 'no-cache' && fetchPolicy !== 'network-only') {
                        _this.setQuery(queryId, function () { return ({ newData: null }); });
                    }
                    data = newData.result;
                    isMissing = !newData.complete;
                }
                else {
                    var lastError = observableQuery && observableQuery.getLastError();
                    var errorStatusChanged = errorPolicy !== 'none' &&
                        (lastError && lastError.graphQLErrors) !==
                            queryStoreValue.graphQLErrors;
                    if (lastResult && lastResult.data && !errorStatusChanged) {
                        data = lastResult.data;
                        isMissing = false;
                    }
                    else {
                        var diffResult = _this.dataStore.getCache().diff({
                            query: document,
                            variables: queryStoreValue.previousVariables ||
                                queryStoreValue.variables,
                            returnPartialData: true,
                            optimistic: true,
                        });
                        data = diffResult.result;
                        isMissing = !diffResult.complete;
                    }
                }
                var stale = isMissing && !(options.returnPartialData ||
                    fetchPolicy === 'cache-only');
                var resultFromStore = {
                    data: stale ? lastResult && lastResult.data : data,
                    loading: loading,
                    networkStatus: queryStoreValue.networkStatus,
                    stale: stale,
                };
                if (errorPolicy === 'all' && hasGraphQLErrors) {
                    resultFromStore.errors = queryStoreValue.graphQLErrors;
                }
                invoke('next', resultFromStore);
            }
            catch (networkError) {
                invoke('error', new ApolloError({ networkError: networkError }));
            }
        };
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var cache = this.dataStore.getCache();
            var transformed = cache.transformDocument(document);
            var forLink = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["removeConnectionDirectiveFromDocument"])(cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasClientExports"])(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getDefaultValues"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationDefinition"])(transformed)),
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options, shouldSubscribe) {
        if (shouldSubscribe === void 0) { shouldSubscribe = true; }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.fetchPolicy !== 'standby', 'client.watchQuery cannot be called with fetchPolicy set to "standby"');
        options.variables = this.getVariables(options.query, options.variables);
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var transformedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options);
        return new ObservableQuery({
            queryManager: this,
            options: transformedOptions,
            shouldSubscribe: shouldSubscribe,
        });
    };
    QueryManager.prototype.query = function (options) {
        var _this = this;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!options.pollInterval, 'pollInterval option only supported on watchQuery.');
        return new Promise(function (resolve, reject) {
            var watchedQuery = _this.watchQuery(options, false);
            _this.fetchQueryRejectFns.set("query:" + watchedQuery.queryId, reject);
            watchedQuery
                .result()
                .then(resolve, reject)
                .then(function () {
                return _this.fetchQueryRejectFns.delete("query:" + watchedQuery.queryId);
            });
        });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.idCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        this.stopPollingQuery(queryId);
        this.queryStore.stopQuery(queryId);
        this.invalidate(queryId);
    };
    QueryManager.prototype.addQueryListener = function (queryId, listener) {
        this.setQuery(queryId, function (_a) {
            var listeners = _a.listeners;
            listeners.add(listener);
            return { invalidated: false };
        });
    };
    QueryManager.prototype.updateQueryWatch = function (queryId, document, options) {
        var _this = this;
        var cancel = this.getQuery(queryId).cancel;
        if (cancel)
            cancel();
        var previousResult = function () {
            var previousResult = null;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            if (observableQuery) {
                var lastResult = observableQuery.getLastResult();
                if (lastResult) {
                    previousResult = lastResult.data;
                }
            }
            return previousResult;
        };
        return this.dataStore.getCache().watch({
            query: document,
            variables: options.variables,
            optimistic: true,
            previousResult: previousResult,
            callback: function (newData) {
                _this.setQuery(queryId, function () { return ({ invalidated: true, newData: newData }); });
            },
        });
    };
    QueryManager.prototype.addObservableQuery = function (queryId, observableQuery) {
        this.setQuery(queryId, function () { return ({ observableQuery: observableQuery }); });
    };
    QueryManager.prototype.removeObservableQuery = function (queryId) {
        var cancel = this.getQuery(queryId).cancel;
        this.setQuery(queryId, function () { return ({ observableQuery: null }); });
        if (cancel)
            cancel();
    };
    QueryManager.prototype.clearStore = function () {
        this.fetchQueryRejectFns.forEach(function (reject) {
            reject( false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]('Store reset while query was in flight (not completed in link chain)'));
        });
        var resetIds = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery)
                resetIds.push(queryId);
        });
        this.queryStore.reset(resetIds);
        this.mutationStore.reset();
        return this.dataStore.reset();
    };
    QueryManager.prototype.resetStore = function () {
        var _this = this;
        return this.clearStore().then(function () {
            return _this.reFetchObservableQueries();
        });
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery) {
                var fetchPolicy = observableQuery.options.fetchPolicy;
                observableQuery.resetLastResults();
                if (fetchPolicy !== 'cache-only' &&
                    (includeStandby || fetchPolicy !== 'standby')) {
                    observableQueryPromises.push(observableQuery.refetch());
                }
                _this.setQuery(queryId, function () { return ({ newData: null }); });
                _this.invalidate(queryId);
            }
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.observeQuery = function (queryId, options, observer) {
        this.addQueryListener(queryId, this.queryListenerForObserver(queryId, options, observer));
        return this.fetchQuery(queryId, options);
    };
    QueryManager.prototype.startQuery = function (queryId, options, listener) {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn("The QueryManager.startQuery method has been deprecated");
        this.addQueryListener(queryId, listener);
        this.fetchQuery(queryId, options)
            .catch(function () { return undefined; });
        return queryId;
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, variables = _a.variables;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, {}, variables, false).map(function (result) {
                if (!fetchPolicy || fetchPolicy !== 'no-cache') {
                    _this.dataStore.markSubscriptionResult(result, query, variables);
                    _this.broadcastQueries();
                }
                if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result)) {
                    throw new ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables).then(makeObservable);
            return new Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchQueryRejectFns.delete("query:" + queryId);
        this.fetchQueryRejectFns.delete("fetchRequest:" + queryId);
        this.getQuery(queryId).subscriptions.forEach(function (x) { return x.unsubscribe(); });
        this.queries.delete(queryId);
    };
    QueryManager.prototype.getCurrentQueryResult = function (observableQuery, optimistic) {
        if (optimistic === void 0) { optimistic = true; }
        var _a = observableQuery.options, variables = _a.variables, query = _a.query, fetchPolicy = _a.fetchPolicy, returnPartialData = _a.returnPartialData;
        var lastResult = observableQuery.getLastResult();
        var newData = this.getQuery(observableQuery.queryId).newData;
        if (newData && newData.complete) {
            return { data: newData.result, partial: false };
        }
        if (fetchPolicy === 'no-cache' || fetchPolicy === 'network-only') {
            return { data: undefined, partial: false };
        }
        var _b = this.dataStore.getCache().diff({
            query: query,
            variables: variables,
            previousResult: lastResult ? lastResult.data : undefined,
            returnPartialData: true,
            optimistic: optimistic,
        }), result = _b.result, complete = _b.complete;
        return {
            data: (complete || returnPartialData) ? result : void 0,
            partial: !complete,
        };
    };
    QueryManager.prototype.getQueryWithPreviousResult = function (queryIdOrObservable) {
        var observableQuery;
        if (typeof queryIdOrObservable === 'string') {
            var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(foundObserveableQuery, "ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
            observableQuery = foundObserveableQuery;
        }
        else {
            observableQuery = queryIdOrObservable;
        }
        var _a = observableQuery.options, variables = _a.variables, query = _a.query;
        return {
            previousResult: this.getCurrentQueryResult(observableQuery, false).data,
            variables: variables,
            document: query,
        };
    };
    QueryManager.prototype.broadcastQueries = function () {
        var _this = this;
        this.onBroadcast();
        this.queries.forEach(function (info, id) {
            if (info.invalidated) {
                info.listeners.forEach(function (listener) {
                    if (listener) {
                        listener(_this.queryStore.get(id), info.newData);
                    }
                });
            }
        });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        if (deduplication === void 0) { deduplication = this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _a = this, inFlightLinkObservables_1 = _a.inFlightLinkObservables, link = _a.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationName"])(serverQuery) || void 0,
                context: this.prepareContext(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = JSON.stringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    byVariables_1.set(varJson_1, observable = multiplex(Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(link, operation)));
                    var cleanup = function () {
                        byVariables_1.delete(varJson_1);
                        if (!byVariables_1.size)
                            inFlightLinkObservables_1.delete(serverQuery);
                        cleanupSub_1.unsubscribe();
                    };
                    var cleanupSub_1 = observable.subscribe({
                        next: cleanup,
                        error: cleanup,
                        complete: cleanup,
                    });
                }
            }
            else {
                observable = multiplex(Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(link, operation));
            }
        }
        else {
            observable = Observable.of({ data: {} });
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = asyncMap(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.fetchRequest = function (_a) {
        var _this = this;
        var requestId = _a.requestId, queryId = _a.queryId, document = _a.document, options = _a.options, fetchMoreForQueryId = _a.fetchMoreForQueryId;
        var variables = options.variables, _b = options.errorPolicy, errorPolicy = _b === void 0 ? 'none' : _b, fetchPolicy = options.fetchPolicy;
        var resultFromStore;
        var errorsFromStore;
        return new Promise(function (resolve, reject) {
            var observable = _this.getObservableFromLink(document, options.context, variables);
            var fqrfId = "fetchRequest:" + queryId;
            _this.fetchQueryRejectFns.set(fqrfId, reject);
            var cleanup = function () {
                _this.fetchQueryRejectFns.delete(fqrfId);
                _this.setQuery(queryId, function (_a) {
                    var subscriptions = _a.subscriptions;
                    subscriptions.delete(subscription);
                });
            };
            var subscription = observable.map(function (result) {
                if (requestId >= _this.getQuery(queryId).lastRequestId) {
                    _this.markQueryResult(queryId, result, options, fetchMoreForQueryId);
                    _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);
                    _this.invalidate(queryId);
                    _this.invalidate(fetchMoreForQueryId);
                    _this.broadcastQueries();
                }
                if (errorPolicy === 'none' && isNonEmptyArray(result.errors)) {
                    return reject(new ApolloError({
                        graphQLErrors: result.errors,
                    }));
                }
                if (errorPolicy === 'all') {
                    errorsFromStore = result.errors;
                }
                if (fetchMoreForQueryId || fetchPolicy === 'no-cache') {
                    resultFromStore = result.data;
                }
                else {
                    var _a = _this.dataStore.getCache().diff({
                        variables: variables,
                        query: document,
                        optimistic: false,
                        returnPartialData: true,
                    }), result_1 = _a.result, complete = _a.complete;
                    if (complete || options.returnPartialData) {
                        resultFromStore = result_1;
                    }
                }
            }).subscribe({
                error: function (error) {
                    cleanup();
                    reject(error);
                },
                complete: function () {
                    cleanup();
                    resolve({
                        data: resultFromStore,
                        errors: errorsFromStore,
                        loading: false,
                        networkStatus: NetworkStatus.ready,
                        stale: false,
                    });
                },
            });
            _this.setQuery(queryId, function (_a) {
                var subscriptions = _a.subscriptions;
                subscriptions.add(subscription);
            });
        });
    };
    QueryManager.prototype.getQuery = function (queryId) {
        return (this.queries.get(queryId) || {
            listeners: new Set(),
            invalidated: false,
            document: null,
            newData: null,
            lastRequestId: 1,
            observableQuery: null,
            subscriptions: new Set(),
        });
    };
    QueryManager.prototype.setQuery = function (queryId, updater) {
        var prev = this.getQuery(queryId);
        var newInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prev), updater(prev));
        this.queries.set(queryId, newInfo);
    };
    QueryManager.prototype.invalidate = function (queryId, invalidated) {
        if (invalidated === void 0) { invalidated = true; }
        if (queryId) {
            this.setQuery(queryId, function () { return ({ invalidated: invalidated }); });
        }
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newContext), { clientAwareness: this.clientAwareness });
    };
    QueryManager.prototype.checkInFlight = function (queryId) {
        var query = this.queryStore.get(queryId);
        return (query &&
            query.networkStatus !== NetworkStatus.ready &&
            query.networkStatus !== NetworkStatus.error);
    };
    QueryManager.prototype.startPollingQuery = function (options, queryId, listener) {
        var _this = this;
        var pollInterval = options.pollInterval;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(pollInterval, 'Attempted to start a polling query without a polling interval.');
        if (!this.ssrMode) {
            var info = this.pollingInfoByQueryId.get(queryId);
            if (!info) {
                this.pollingInfoByQueryId.set(queryId, (info = {}));
            }
            info.interval = pollInterval;
            info.options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'network-only' });
            var maybeFetch_1 = function () {
                var info = _this.pollingInfoByQueryId.get(queryId);
                if (info) {
                    if (_this.checkInFlight(queryId)) {
                        poll_1();
                    }
                    else {
                        _this.fetchQuery(queryId, info.options, FetchType.poll).then(poll_1, poll_1);
                    }
                }
            };
            var poll_1 = function () {
                var info = _this.pollingInfoByQueryId.get(queryId);
                if (info) {
                    clearTimeout(info.timeout);
                    info.timeout = setTimeout(maybeFetch_1, info.interval);
                }
            };
            if (listener) {
                this.addQueryListener(queryId, listener);
            }
            poll_1();
        }
        return queryId;
    };
    QueryManager.prototype.stopPollingQuery = function (queryId) {
        this.pollingInfoByQueryId.delete(queryId);
    };
    return QueryManager;
}());

var DataStore = (function () {
    function DataStore(initialCache) {
        this.cache = initialCache;
    }
    DataStore.prototype.getCache = function () {
        return this.cache;
    };
    DataStore.prototype.markQueryResult = function (result, document, variables, fetchMoreForQueryId, ignoreErrors) {
        if (ignoreErrors === void 0) { ignoreErrors = false; }
        var writeWithErrors = !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result);
        if (ignoreErrors && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result) && result.data) {
            writeWithErrors = true;
        }
        if (!fetchMoreForQueryId && writeWithErrors) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_QUERY',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markSubscriptionResult = function (result, document, variables) {
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result)) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_SUBSCRIPTION',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markMutationInit = function (mutation) {
        var _this = this;
        if (mutation.optimisticResponse) {
            var optimistic_1;
            if (typeof mutation.optimisticResponse === 'function') {
                optimistic_1 = mutation.optimisticResponse(mutation.variables);
            }
            else {
                optimistic_1 = mutation.optimisticResponse;
            }
            this.cache.recordOptimisticTransaction(function (c) {
                var orig = _this.cache;
                _this.cache = c;
                try {
                    _this.markMutationResult({
                        mutationId: mutation.mutationId,
                        result: { data: optimistic_1 },
                        document: mutation.document,
                        variables: mutation.variables,
                        updateQueries: mutation.updateQueries,
                        update: mutation.update,
                    });
                }
                finally {
                    _this.cache = orig;
                }
            }, mutation.mutationId);
        }
    };
    DataStore.prototype.markMutationResult = function (mutation) {
        var _this = this;
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(mutation.result)) {
            var cacheWrites_1 = [{
                    result: mutation.result.data,
                    dataId: 'ROOT_MUTATION',
                    query: mutation.document,
                    variables: mutation.variables,
                }];
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                Object.keys(updateQueries_1).forEach(function (id) {
                    var _a = updateQueries_1[id], query = _a.query, updater = _a.updater;
                    var _b = _this.cache.diff({
                        query: query.document,
                        variables: query.variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _b.result, complete = _b.complete;
                    if (complete) {
                        var nextQueryResult = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["tryFunctionOrLogError"])(function () {
                            return updater(currentQueryResult, {
                                mutationResult: mutation.result,
                                queryName: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationName"])(query.document) || undefined,
                                queryVariables: query.variables,
                            });
                        });
                        if (nextQueryResult) {
                            cacheWrites_1.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: query.document,
                                variables: query.variables,
                            });
                        }
                    }
                });
            }
            this.cache.performTransaction(function (c) {
                cacheWrites_1.forEach(function (write) { return c.write(write); });
                var update = mutation.update;
                if (update) {
                    Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["tryFunctionOrLogError"])(function () { return update(c, mutation.result); });
                }
            });
        }
    };
    DataStore.prototype.markMutationComplete = function (_a) {
        var mutationId = _a.mutationId, optimisticResponse = _a.optimisticResponse;
        if (optimisticResponse) {
            this.cache.removeOptimistic(mutationId);
        }
    };
    DataStore.prototype.markUpdateQueryResult = function (document, variables, newResult) {
        this.cache.write({
            result: newResult,
            dataId: 'ROOT_QUERY',
            variables: variables,
            query: document,
        });
    };
    DataStore.prototype.reset = function () {
        return this.cache.reset();
    };
    return DataStore;
}());

var version = "2.6.10";

var hasSuggestedDevtools = false;
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, connectToDevTools = options.connectToDevTools, _c = options.queryDeduplication, queryDeduplication = _c === void 0 ? true : _c, defaultOptions = options.defaultOptions, _d = options.assumeImmutableResults, assumeImmutableResults = _d === void 0 ? false : _d, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link && resolvers) {
            link = apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].empty();
        }
        if (!link || !cache) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("In order to initialize Apollo Client, you must specify 'link' and 'cache' properties in the options object.\n" +
                "These options are part of the upgrade requirements when migrating from Apollo Client 1.x to Apollo Client 2.x.\n" +
                "For more information, please visit: https://www.apollographql.com/docs/tutorial/client.html#apollo-client-setup");
        }
        this.link = link;
        this.cache = cache;
        this.store = new DataStore(cache);
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        var defaultConnectToDevTools =  true &&
            typeof window !== 'undefined' &&
            !window.__APOLLO_CLIENT__;
        if (typeof connectToDevTools === 'undefined'
            ? defaultConnectToDevTools
            : connectToDevTools && typeof window !== 'undefined') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && "development" !== 'production') {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self) {
                if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                    if (window.navigator &&
                        window.navigator.userAgent &&
                        window.navigator.userAgent.indexOf('Chrome') > -1) {
                        console.debug('Download the Apollo DevTools ' +
                            'for a better development experience: ' +
                            'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
                    }
                }
            }
        }
        this.version = version;
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new QueryManager({
            link: this.link,
            store: this.store,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.queryStore.getStore(),
                            mutations: _this.queryManager.mutationStore.getStore(),
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            },
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.watchQuery), options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.query), options);
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.');
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.mutate), options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        var result = this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeFragment = function (options) {
        var result = this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeData = function (options) {
        var result = this.cache.writeData(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(this.link, payload);
    };
    ApolloClient.prototype.initQueryManager = function () {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('Calling the initQueryManager method is no longer necessary, ' +
            'and it will be removed from ApolloClient in version 3.0.');
        return this.queryManager;
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    return ApolloClient;
}());

/* harmony default export */ __webpack_exports__["default"] = (ApolloClient);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-client/node_modules/ts-invariant/lib/invariant.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/apollo-client/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \***********************************************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-error/lib/bundle.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/apollo-link-error/lib/bundle.esm.js ***!
  \**********************************************************/
/*! exports provided: ErrorLink, onError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLink", function() { return ErrorLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");



function onError(errorHandler) {
    return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"](function (operation, forward) {
        return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var sub;
            var retriedSub;
            var retriedResult;
            try {
                sub = forward(operation).subscribe({
                    next: function (result) {
                        if (result.errors) {
                            retriedResult = errorHandler({
                                graphQLErrors: result.errors,
                                response: result,
                                operation: operation,
                                forward: forward,
                            });
                            if (retriedResult) {
                                retriedSub = retriedResult.subscribe({
                                    next: observer.next.bind(observer),
                                    error: observer.error.bind(observer),
                                    complete: observer.complete.bind(observer),
                                });
                                return;
                            }
                        }
                        observer.next(result);
                    },
                    error: function (networkError) {
                        retriedResult = errorHandler({
                            operation: operation,
                            networkError: networkError,
                            graphQLErrors: networkError &&
                                networkError.result &&
                                networkError.result.errors,
                            forward: forward,
                        });
                        if (retriedResult) {
                            retriedSub = retriedResult.subscribe({
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer),
                            });
                            return;
                        }
                        observer.error(networkError);
                    },
                    complete: function () {
                        if (!retriedResult) {
                            observer.complete.bind(observer)();
                        }
                    },
                });
            }
            catch (e) {
                errorHandler({ networkError: e, operation: operation, forward: forward });
                observer.error(e);
            }
            return function () {
                if (sub)
                    sub.unsubscribe();
                if (retriedSub)
                    sub.unsubscribe();
            };
        });
    });
}
var ErrorLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorLink, _super);
    function ErrorLink(errorHandler) {
        var _this = _super.call(this) || this;
        _this.link = onError(errorHandler);
        return _this;
    }
    ErrorLink.prototype.request = function (operation, forward) {
        return this.link.request(operation, forward);
    };
    return ErrorLink;
}(apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-http-common/lib/bundle.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/apollo-link-http-common/lib/bundle.esm.js ***!
  \****************************************************************/
/*! exports provided: checkFetcher, createSignalIfSupported, fallbackHttpConfig, parseAndCheckHttpResponse, selectHttpOptionsAndBody, selectURI, serializeFetchParameter, throwServerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return checkFetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return createSignalIfSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return fallbackHttpConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return parseAndCheckHttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return selectHttpOptionsAndBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return selectURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return serializeFetchParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return throwServerError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-link-http-common/node_modules/ts-invariant/lib/invariant.esm.js");




var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
var parseAndCheckHttpResponse = function (operations) { return function (response) {
    return (response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.name = 'ServerParseError';
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            return Promise.reject(parseError);
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            throwServerError(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!Array.isArray(result) &&
            !result.hasOwnProperty('data') &&
            !result.hasOwnProperty('errors')) {
            throwServerError(response, result, "Server response was missing for query '" + (Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName) + "'.");
        }
        return result;
    }));
}; };
var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        var library = 'unfetch';
        if (typeof window === 'undefined')
            library = 'node-fetch';
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_2__["InvariantError"]("\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/" + library + ".\n\nFor example:\nimport fetch from '" + library + "';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });");
    }
};
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fallbackConfig.options, { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http;
    configs.forEach(function (config) {
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options, config.options, { headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.headers, config.headers) });
        if (config.credentials)
            options.credentials = config.credentials;
        http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, http, config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(query);
    return {
        options: options,
        body: body,
    };
};
var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError =  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_2__["InvariantError"]("Network request failed. " + label + " is not serializable: " + e.message);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-http-common/node_modules/ts-invariant/lib/invariant.esm.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/apollo-link-http-common/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \*********************************************************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-http/lib/bundle.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-link-http/lib/bundle.esm.js ***!
  \*********************************************************/
/*! exports provided: HttpLink, createHttpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return HttpLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return createHttpLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http-common */ "./node_modules/apollo-link-http-common/lib/bundle.esm.js");




var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, requestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries"]);
    Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["checkFetcher"])(fetcher);
    if (!fetcher) {
        fetcher = fetch;
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"](function (operation) {
        var chosenURI = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["selectURI"])(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, clientAwarenessHeaders, context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["selectHttpOptionsAndBody"])(operation, apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["fallbackHttpConfig"], linkConfig, contextConfig), options = _b.options, body = _b.body;
        var controller;
        if (!options.signal) {
            var _c = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["createSignalIfSupported"])(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return Object(apollo_link__WEBPACK_IMPORTED_MODULE_1__["fromError"])(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["serializeFetchParameter"])(body, 'Payload');
            }
            catch (parseError) {
                return Object(apollo_link__WEBPACK_IMPORTED_MODULE_1__["fromError"])(parseError);
            }
        }
        return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            fetcher(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["parseAndCheckHttpResponse"])(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};
function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["serializeFetchParameter"])(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["serializeFetchParameter"])(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}
var HttpLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpLink, _super);
    function HttpLink(opts) {
        return _super.call(this, createHttpLink(opts).request) || this;
    }
    return HttpLink;
}(apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link/lib/bundle.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/apollo-link/lib/bundle.esm.js ***!
  \****************************************************/
/*! exports provided: Observable, getOperationName, ApolloLink, concat, createOperation, empty, execute, from, fromError, fromPromise, makePromise, split, toPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return makePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-link/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getOperationName"]; });








function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("illegal argument: " + key);
        }
    }
    return operation;
}
var LinkError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
var makePromise = toPromise;
function fromPromise(promise) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
function fromError(errorValue) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        observer.error(errorValue);
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getOperationName"])(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next(context));
        }
        else {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next);
        }
    };
    var getContext = function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
function getKey(operation) {
    var query = operation.query, variables = operation.variables, operationName = operation.operationName;
    return JSON.stringify([operationName, query, variables]);
}

function passthrough(op, forward) {
    return forward ? forward(op) : zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function empty() {
    return new ApolloLink(function () { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); });
}
function from(links) {
    if (links.length === 0)
        return empty();
    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
}
function split(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
        return new ApolloLink(function (operation) {
            return test(operation)
                ? leftLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return test(operation)
                ? leftLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
}
var concat = function (first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
        return new ApolloLink(function (operation) {
            return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return (firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
            }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
        });
    }
};
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented');
    };
    ApolloLink.empty = empty;
    ApolloLink.from = from;
    ApolloLink.split = split;
    ApolloLink.execute = execute;
    return ApolloLink;
}());
function execute(link, operation) {
    return (link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link/node_modules/ts-invariant/lib/invariant.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/apollo-link/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \*********************************************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-utilities/lib/bundle.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/bundle.esm.js ***!
  \*********************************************************/
/*! exports provided: isEqual, addTypenameToDocument, argumentsObjectFromField, assign, buildQueryFromSelectionSet, canUseWeakMap, checkDocument, cloneDeep, createFragmentMap, getDefaultValues, getDirectiveInfoFromField, getDirectiveNames, getDirectivesFromDocument, getEnv, getFragmentDefinition, getFragmentDefinitions, getFragmentQueryDocument, getInclusionDirectives, getMainDefinition, getMutationDefinition, getOperationDefinition, getOperationDefinitionOrDie, getOperationName, getQueryDefinition, getStoreKeyName, graphQLResultHasError, hasClientExports, hasDirectives, isDevelopment, isEnv, isField, isIdValue, isInlineFragment, isJsonValue, isNumberValue, isProduction, isScalarValue, isTest, maybeDeepFreeze, mergeDeep, mergeDeepArray, removeArgumentsFromDocument, removeClientSetsFromDocument, removeConnectionDirectiveFromDocument, removeDirectivesFromDocument, removeFragmentSpreadFromDocument, resultKeyNameFromField, shouldInclude, storeKeyNameFromField, stripSymbols, toIdValue, tryFunctionOrLogError, valueFromNode, valueToObjectRepresentation, variablesInOperation, warnOnceInDevelopment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return addTypenameToDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return argumentsObjectFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryFromSelectionSet", function() { return buildQueryFromSelectionSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseWeakMap", function() { return canUseWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return createFragmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveInfoFromField", function() { return getDirectiveInfoFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return getDirectiveNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectivesFromDocument", function() { return getDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return getFragmentDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return getFragmentDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return getFragmentQueryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInclusionDirectives", function() { return getInclusionDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return getMainDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMutationDefinition", function() { return getMutationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return getOperationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinitionOrDie", function() { return getOperationDefinitionOrDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return getOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return getQueryDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return getStoreKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return graphQLResultHasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClientExports", function() { return hasClientExports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return hasDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return isEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return isField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdValue", function() { return isIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return isInlineFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonValue", function() { return isJsonValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberValue", function() { return isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarValue", function() { return isScalarValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return isTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return maybeDeepFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepArray", function() { return mergeDeepArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return removeArgumentsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return removeClientSetsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return removeConnectionDirectiveFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return removeDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return removeFragmentSpreadFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return resultKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return shouldInclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return storeKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSymbols", function() { return stripSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIdValue", function() { return toIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFunctionOrLogError", function() { return tryFunctionOrLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromNode", function() { return valueFromNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return valueToObjectRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variablesInOperation", function() { return variablesInOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnceInDevelopment", function() { return warnOnceInDevelopment; });
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-utilities/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-json-stable-stringify */ "./node_modules/fast-json-stable-stringify/index.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wry/equality */ "./node_modules/apollo-utilities/node_modules/@wry/equality/lib/equality.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"]; });







function isScalarValue(value) {
    return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
}
function isNumberValue(value) {
    return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.');
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
function getStoreKeyName(fieldName, args, directives) {
    if (directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default()(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
function isIdValue(idObject) {
    return idObject &&
        idObject.type === 'id' &&
        typeof idObject.generated === 'boolean';
}
function toIdValue(idConfig, generated) {
    if (generated === void 0) { generated = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ type: 'id', generated: generated }, (typeof idConfig === 'string'
        ? { id: idConfig, typename: undefined }
        : idConfig));
}
function isJsonValue(jsonObject) {
    return (jsonObject != null &&
        typeof jsonObject === 'object' &&
        jsonObject.type === 'json');
}
function defaultValueFromVariable(node) {
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Variable nodes are not supported by valueFromNode");
}
function valueFromNode(node, onVariable) {
    if (onVariable === void 0) { onVariable = defaultValueFromVariable; }
    switch (node.kind) {
        case 'Variable':
            return onVariable(node);
        case 'NullValue':
            return null;
        case 'IntValue':
            return parseInt(node.value, 10);
        case 'FloatValue':
            return parseFloat(node.value);
        case 'ListValue':
            return node.values.map(function (v) { return valueFromNode(v, onVariable); });
        case 'ObjectValue': {
            var value = {};
            for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
                var field = _a[_i];
                value[field.name.value] = valueFromNode(field.value, onVariable);
            }
            return value;
        }
        default:
            return node.value;
    }
}

function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {};
        field.directives.forEach(function (directive) {
            directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
function shouldInclude(selection, variables) {
    if (variables === void 0) { variables = {}; }
    return getInclusionDirectives(selection.directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables[ifArgument.value.name.value];
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.");
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(doc) {
    var names = [];
    Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, doc) {
    return getDirectiveNames(doc).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    return directives ? directives.filter(isInclusionDirective).map(function (directive) {
        var directiveArguments = directive.arguments;
        var directiveName = directive.name.value;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.");
        var ifArgument = directiveArguments[0];
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.");
        var ifValue = ifArgument.value;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifValue &&
            (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
        return { directive: directive, ifArgument: ifArgument };
    }) : [];
}

function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        actualFragmentName = fragments[0].name.value;
    }
    var query = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, document), { definitions: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions) });
    return query;
}

function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (typeof source === 'undefined' || source === null) {
            return;
        }
        Object.keys(source).forEach(function (key) {
            target[key] = source[key];
        });
    });
    return target;
}

function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation';
    })[0];
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(mutationDef, 'Must contain a mutation definition.');
    return mutationDef;
}
function checkDocument(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
        return definition;
    });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations");
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationDefinitionOrDie(document) {
    var def = getOperationDefinition(document);
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(def, "GraphQL document is missing an operation");
    return def;
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(queryDef && queryDef.operation === 'query', 'Must contain a query definition.');
    return queryDef;
}
function getFragmentDefinition(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc.definitions.length <= 1, 'Fragment must have exactly one definition.');
    var fragmentDef = doc.definitions[0];
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.');
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getDefaultValues(definition) {
    if (definition &&
        definition.variableDefinitions &&
        definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions
            .filter(function (_a) {
            var defaultValue = _a.defaultValue;
            return defaultValue;
        })
            .map(function (_a) {
            var variable = _a.variable, defaultValue = _a.defaultValue;
            var defaultValueObj = {};
            valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return assign.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([{}], defaultValues));
    }
    return {};
}
function variablesInOperation(operation) {
    var names = new Set();
    if (operation.variableDefinitions) {
        for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            names.add(definition.variable.name.value);
        }
    }
    return names;
}

function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}

var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        filterInPlace(variablesToRemove, function (v) { return !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        filterInPlace(fragmentSpreadsToRemove, function (fs) { return !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
function addTypenameToDocument(doc) {
    return Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(checkDocument(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (isField(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if (isField(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { selections: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(selections, [TYPENAME_FIELD]) });
            },
        },
    });
}
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    return (selectionSet &&
        selectionSet.selections &&
        selectionSet.selections.some(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        }));
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (!isField(selection)) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    return (selection.directives.some(getDirectiveMatcher(directives)) ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getDirectivesFromDocument(directives, doc) {
    checkDocument(doc);
    var parentPath;
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        SelectionSet: {
            enter: function (node, _key, _parent, path) {
                var currentPath = path.join('-');
                if (!parentPath ||
                    currentPath === parentPath ||
                    !currentPath.startsWith(parentPath)) {
                    if (node.selections) {
                        var selectionsWithDirectives = node.selections.filter(function (selection) { return hasDirectivesInSelection(directives, selection); });
                        if (hasDirectivesInSelectionSet(directives, node, false)) {
                            parentPath = currentPath;
                        }
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { selections: selectionsWithDirectives });
                    }
                    else {
                        return null;
                    }
                }
            },
        },
    }));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { variableDefinitions: node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    node.arguments.forEach(function (arg) {
                        if (argMatcher(arg)) {
                            argMatchCount_1 += 1;
                        }
                    });
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((isField(selection) || isInlineFragment(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(document, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return isField(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}

var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' &&
    navigator.product === 'ReactNative');

var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value, new Map());
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}

function getEnv() {
    if (typeof process !== 'undefined' && "development") {
        return "development";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv('production') === true;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}

function tryFunctionOrLogError(f) {
    try {
        return f();
    }
    catch (e) {
        if (console.error) {
            console.error(e);
        }
    }
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}

function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}
function maybeDeepFreeze(obj) {
    if (isDevelopment() || isTest()) {
        var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';
        if (!symbolIsPolyfilled) {
            return deepFreeze(obj);
        }
    }
    return obj;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var pastCopies = [];
        target = shallowCopyForMerge(target, pastCopies);
        for (var i = 1; i < count; ++i) {
            target = mergeHelper(target, sources[i], pastCopies);
        }
    }
    return target;
}
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
function mergeHelper(target, source, pastCopies) {
    if (isObject(source) && isObject(target)) {
        if (Object.isExtensible && !Object.isExtensible(target)) {
            target = shallowCopyForMerge(target, pastCopies);
        }
        Object.keys(source).forEach(function (sourceKey) {
            var sourceValue = source[sourceKey];
            if (hasOwnProperty.call(target, sourceKey)) {
                var targetValue = target[sourceKey];
                if (sourceValue !== targetValue) {
                    target[sourceKey] = mergeHelper(shallowCopyForMerge(targetValue, pastCopies), sourceValue, pastCopies);
                }
            }
            else {
                target[sourceKey] = sourceValue;
            }
        });
        return target;
    }
    return source;
}
function shallowCopyForMerge(value, pastCopies) {
    if (value !== null &&
        typeof value === 'object' &&
        pastCopies.indexOf(value) < 0) {
        if (Array.isArray(value)) {
            value = value.slice(0);
        }
        else {
            value = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ __proto__: Object.getPrototypeOf(value) }, value);
        }
        pastCopies.push(value);
    }
    return value;
}

var haveWarned = Object.create({});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) { type = 'warn'; }
    if (!isProduction() && !haveWarned[msg]) {
        if (!isTest()) {
            haveWarned[msg] = true;
        }
        if (type === 'error') {
            console.error(msg);
        }
        else {
            console.warn(msg);
        }
    }
}

function stripSymbols(data) {
    return JSON.parse(JSON.stringify(data));
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-utilities/node_modules/@wry/equality/lib/equality.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/apollo-utilities/node_modules/@wry/equality/lib/equality.esm.js ***!
  \**************************************************************************************/
/*! exports provided: default, equal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return equal; });
var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */
function equal(a, b) {
    try {
        return check(a, b);
    }
    finally {
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length)
                return false;
        // Fall through to object case...
        case '[object Object]': {
            if (previouslyCompared(a, b))
                return true;
            var aKeys = Object.keys(a);
            var bKeys = Object.keys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length)
                return false;
            // Now make sure they have the same keys.
            for (var k = 0; k < keyCount; ++k) {
                if (!hasOwnProperty.call(b, aKeys[k])) {
                    return false;
                }
            }
            // Finally, check deep equality of all child properties.
            for (var k = 0; k < keyCount; ++k) {
                var key = aKeys[k];
                if (!check(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a)
                return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "" + b;
        case '[object Map]':
        case '[object Set]': {
            if (a.size !== b.size)
                return false;
            if (previouslyCompared(a, b))
                return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while (true) {
                var info = aIterator.next();
                if (info.done)
                    break;
                // If a instanceof Set, aValue === aKey.
                var _a = info.value, aKey = _a[0], aValue = _a[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) {
                    return false;
                }
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) {
                    return false;
                }
            }
            return true;
        }
    }
    // Otherwise the values are not equal.
    return false;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b))
            return true;
    }
    else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}

/* harmony default export */ __webpack_exports__["default"] = (equal);

//# sourceMappingURL=equality.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-utilities/node_modules/ts-invariant/lib/invariant.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/apollo-utilities/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \**************************************************************************************/
/*! exports provided: default, InvariantError, invariant, process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return processStub; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
function wrapConsoleMethod(method) {
    return function () {
        return console[method].apply(console, arguments);
    };
}
(function (invariant) {
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
// Code that uses ts-invariant with rollup-plugin-invariant may want to
// import this process stub to avoid errors evaluating process.env.NODE_ENV.
// However, because most ESM-to-CJS compilers will rewrite the process import
// as tsInvariant.process, which prevents proper replacement by minifiers, we
// also attempt to define the stub globally when it is not already defined.
var processStub = { env: {} };
if (typeof process === "object") {
    processStub = process;
}
else
    try {
        // Using Function to evaluate this assignment in global scope also escapes
        // the strict mode of the current module, thereby allowing the assignment.
        // Inspired by https://github.com/facebook/regenerator/pull/369.
        Function("stub", "process = stub")(processStub);
    }
    catch (atLeastWeTried) {
        // The assignment can fail if a Content Security Policy heavy-handedly
        // forbids Function usage. In those environments, developers should take
        // extra care to replace process.env.NODE_ENV in their production builds,
        // or define an appropriate global.process polyfill.
    }
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);

//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/fast-json-stable-stringify/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/fast-json-stable-stringify/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-styled-components/gatsby-ssr.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-styled-components/gatsby-ssr.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

var sheetByPathname = new Map(); // eslint-disable-next-line react/prop-types,react/display-name

exports.wrapRootElement = function (_ref) {
  var element = _ref.element,
      pathname = _ref.pathname;
  var sheet = new _styledComponents.ServerStyleSheet();
  sheetByPathname.set(pathname, sheet);
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyleSheetManager, {
    sheet: sheet.instance
  }, element);
};

exports.onRenderBody = function (_ref2) {
  var setHeadComponents = _ref2.setHeadComponents,
      pathname = _ref2.pathname;
  var sheet = sheetByPathname.get(pathname);

  if (sheet) {
    setHeadComponents([sheet.getStyleElement()]);
    sheetByPathname.delete(pathname);
  }
};

/***/ }),

/***/ "./node_modules/graphql-tag/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/src/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(/*! graphql/language/parser */ "./node_modules/graphql/language/parser.mjs");

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;


/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/*! exports provided: GraphQLError, printError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return GraphQLError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return printError; });
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/location */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/printLocation */ "./node_modules/graphql/language/printLocation.mjs");



/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions;

  if (_extensions == null && originalError != null) {
    var originalExtensions = originalError.extensions;

    if (Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_0__["default"])(originalExtensions)) {
      _extensions = originalExtensions;
    }
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}
GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return printError(this);
    }
  }
});
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + Object(_language_printLocation__WEBPACK_IMPORTED_MODULE_2__["printLocation"])(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + Object(_language_printLocation__WEBPACK_IMPORTED_MODULE_2__["printSourceLocation"])(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/*! exports provided: syntaxError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return syntaxError; });
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineToJSON.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineToJSON.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineToJSON; });
/* harmony import */ var _nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");

/**
 * The `defineToJSON()` function defines toJSON() and inspect() prototype
 * methods, if no function provided they become aliases for toString().
 */

function defineToJSON(classObject) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
  classObject.prototype.toJSON = fn;
  classObject.prototype.inspect = fn;

  if (_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    classObject.prototype[_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"]] = fn;
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/defineToStringTag.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineToStringTag.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineToStringTag; });
/**
 * The `defineToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method defineToStringTag
 *
 * @param {Class<any>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */
function defineToStringTag(classObject) {
  if (typeof Symbol === 'function' && Symbol.toStringTag) {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return devAssert; });
function devAssert(condition, message) {
  var booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inspect; });
/* harmony import */ var _nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    // $FlowFixMe(>=0.90.0)
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"])];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isObjectLike.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isObjectLike.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObjectLike; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);


/***/ }),

/***/ "./node_modules/graphql/language/blockString.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.mjs ***!
  \*******************************************************/
/*! exports provided: dedentBlockStringValue, getBlockStringIndentation, printBlockString */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedentBlockStringValue", function() { return dedentBlockStringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockStringIndentation", function() { return getBlockStringIndentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printBlockString", function() { return printBlockString; });
/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(lines);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
} // @internal

function getBlockStringIndentation(lines) {
  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    if (commonIndent === null || indent < commonIndent) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  return commonIndent === null ? 0 : commonIndent;
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */


function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/*! exports provided: DirectiveLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return DirectiveLocation; });
/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/*! exports provided: Kind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */


/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/*! exports provided: createLexer, isPunctuatorToken */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLexer", function() { return createLexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPunctuatorToken", function() { return isPunctuatorToken; });
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "./node_modules/graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _error_syntaxError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/syntaxError */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _blockString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockString */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _tokenKind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenKind */ "./node_modules/graphql/language/tokenKind.mjs");




/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

function createLexer(source, options) {
  var startOfFileToken = new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;

  if (token.kind !== _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COMMENT);
  }

  return token;
}
/**
 * The return type of createLexer.
 */


// @internal
function isPunctuatorToken(token) {
  var kind = token.kind;
  return kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BANG || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE || kind === _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R;
}
/**
 * Helper function for constructing the Token object.
 */

function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
} // Print a simplified form when appearing in JSON/util.inspect.


Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_0__["default"])(Tok, function () {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
});

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = body.charCodeAt(pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
        return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev, lexer);
      }

      return readString(source, pos, line, col, prev);
  }

  throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * character, then returns the position of that character for lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = body.charCodeAt(position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or e


  if (code === 46 || code === 69 || code === 101) {
    throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new Tok(isFloat ? _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].FLOAT : _tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].BLOCK_STRING, start, position + 3, line, col, prev, Object(_blockString__WEBPACK_IMPORTED_MODULE_2__["dedentBlockStringValue"])(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Tok(_tokenKind__WEBPACK_IMPORTED_MODULE_3__["TokenKind"].NAME, start, position, line, col, prev, body.slice(start, position));
}


/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/*! exports provided: getLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}


/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/*! exports provided: parse, parseValue, parseType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return parseType; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/devAssert */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "./node_modules/graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _error_syntaxError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/syntaxError */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lexer */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _directiveLocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directiveLocation */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _tokenKind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokenKind */ "./node_modules/graphql/language/tokenKind.mjs");










/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EOF);
  return type;
}

var Parser =
/*#__PURE__*/
function () {
  function Parser(source, options) {
    var sourceObj = typeof source === 'string' ? new _source__WEBPACK_IMPORTED_MODULE_5__["Source"](source) : source;
    sourceObj instanceof _source__WEBPACK_IMPORTED_MODULE_5__["Source"] || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_1__["default"])(0, "Must provide Source. Received: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceObj)));
    this._lexer = Object(_lexer__WEBPACK_IMPORTED_MODULE_6__["createLexer"])(sourceObj);
    this._options = options || {};
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].DOCUMENT,
      definitions: this.many(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SOF, this.parseDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L)) {
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME)) {
      name = this.parseName();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_L, this.parseVariableDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].DOLLAR);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SELECTION_SET,
      selections: this.many(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseSelection, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_L, item, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME)) {
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (this._options.experimentalFragmentVariables) {
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_L:
        return this.parseList(isConst);

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L:
        return this.parseObject(isConst);

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].INT:
        this._lexer.advance();

        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].FLOAT:
        this._lexer.advance();

        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].STRING:
      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BLOCK_STRING:
        return this.parseStringLiteral();

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME:
        if (token.value === 'true' || token.value === 'false') {
          this._lexer.advance();

          return {
            kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].BOOLEAN,
            value: token.value === 'true',
            loc: this.loc(token)
          };
        } else if (token.value === 'null') {
          this._lexer.advance();

          return {
            kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NULL,
            loc: this.loc(token)
          };
        }

        this._lexer.advance();

        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM,
          value: token.value,
          loc: this.loc(token)
        };

      case _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING,
      value: token.value,
      block: token.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST,
      values: this.any(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_L, item, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT,
      fields: this.any(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, item, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AT);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACKET_R);
      type = {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BANG)) {
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].STRING) || this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCHEMA_DEFINITION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    var type = this.parseNamedType();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var types = [];

    if (this.expectOptionalKeyword('implements')) {
      // Optional leading ampersand
      this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AMP) || // Legacy support for the SDL?
      this._options.allowLegacySDLImplementsInterfaces && this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME));
    }

    return types;
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    // Legacy support for the SDL?
    if (this._options.allowLegacySDLEmptyFields && this.peek(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L) && this._lexer.lookahead().kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseFieldDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_L, this.parseInputValueDef, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    var types = [];

    if (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].EQUALS)) {
      // Optional leading pipe
      this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PIPE);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PIPE));
    }

    return types;
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseEnumValueDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseInputValueDef, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_L, this.parseOperationTypeDefinition, _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *   - extend interface Name Directives[Const]? FieldsDefinition
   *   - extend interface Name Directives[Const]
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INTERFACE_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_4__["Kind"].DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    // Optional leading pipe
    this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PIPE);
    var locations = [];

    do {
      locations.push(this.parseDirectiveLocation());
    } while (this.expectOptionalToken(_tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].PIPE));

    return locations;
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (_directiveLocation__WEBPACK_IMPORTED_MODULE_7__["DirectiveLocation"][name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in
   * the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    if (!this._options.noLocation) {
      return new Loc(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_3__["syntaxError"])(this._lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(getTokenDesc(token)));
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_3__["syntaxError"])(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token)));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing
   * the lexer. Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === _tokenKind__WEBPACK_IMPORTED_MODULE_8__["TokenKind"].NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token
   * is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken || this._lexer.token;
    return Object(_error_syntaxError__WEBPACK_IMPORTED_MODULE_3__["syntaxError"])(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token)));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always
   * return non-empty list that begins with a lex token of openKind and ends
   * with a lex token of closeKind. Advances the parser to the next lex token
   * after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  };

  return Parser;
}();

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
} // Print a simplified form when appearing in JSON/util.inspect.


Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_2__["default"])(Loc, function () {
  return {
    start: this.start,
    end: this.end
  };
});
/**
 * A helper function to describe a token as a string for debugging
 */

function getTokenDesc(token) {
  var value = token.value;
  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
}


/***/ }),

/***/ "./node_modules/graphql/language/printLocation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/language/printLocation.mjs ***!
  \*********************************************************/
/*! exports provided: printLocation, printSourceLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return printLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return printSourceLocation; });
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location */ "./node_modules/graphql/language/location.mjs");

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, Object(_language_location__WEBPACK_IMPORTED_MODULE_0__["getLocation"])(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var sublineIndex = Math.floor(columnNum / 80);
    var sublineColumnNum = columnNum % 80;
    var sublines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      sublines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), sublines[0]]].concat(sublines.slice(1, sublineIndex + 1).map(function (subline) {
      return ['', subline];
    }), [[' ', whitespace(sublineColumnNum - 1) + '^'], ['', sublines[sublineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}


/***/ }),

/***/ "./node_modules/graphql/language/printer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/printer.mjs ***!
  \***************************************************/
/*! exports provided: print */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _blockString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockString */ "./node_modules/graphql/language/blockString.mjs");


/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return Object(_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(ast, {
    leave: printDocASTReducer
  });
} // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? Object(_blockString__WEBPACK_IMPORTED_MODULE_1__["printBlockString"])(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */


function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}

function isMultiline(string) {
  return string.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray && maybeArray.some(isMultiline);
}


/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/*! exports provided: Source */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "./node_modules/graphql/jsutils/defineToStringTag.mjs");



/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = function Source(body, name, locationOffset) {
  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || {
    line: 1,
    column: 1
  };
  this.locationOffset.line > 0 || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'line in locationOffset is 1-indexed and must be positive');
  this.locationOffset.column > 0 || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'column in locationOffset is 1-indexed and must be positive');
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_1__["default"])(Source);


/***/ }),

/***/ "./node_modules/graphql/language/tokenKind.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/language/tokenKind.mjs ***!
  \*****************************************************/
/*! exports provided: TokenKind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return TokenKind; });
/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */


/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/*! exports provided: QueryDocumentKeys, BREAK, visit, visitInParallel, visitWithTypeInfo, getVisitFn */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDocumentKeys", function() { return QueryDocumentKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return BREAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return visitInParallel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return visitWithTypeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return getVisitFn; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */


function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */

function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      false);

      if (fn) {
        var result = fn.apply(visitor, arguments);

        if (result !== undefined) {
          typeInfo.leave(node);

          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      true);
      var result;

      if (fn) {
        result = fn.apply(visitor, arguments);
      }

      typeInfo.leave(node);
      return result;
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-node.js":
/*!*********************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-node.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var realFetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/lib/index.mjs");
module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = realFetch.Response;
	global.Headers = realFetch.Headers;
	global.Request = realFetch.Request;
}


/***/ }),

/***/ "./node_modules/node-fetch/lib/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/node-fetch/lib/index.mjs ***!
  \***********************************************/
/*! exports provided: default, Headers, Request, Response, FetchError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchError", function() { return FetchError; });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https */ "https");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zlib */ "zlib");






// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = stream__WEBPACK_IMPORTED_MODULE_0__.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof stream__WEBPACK_IMPORTED_MODULE_0__)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__ && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof stream__WEBPACK_IMPORTED_MODULE_0__) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__WEBPACK_IMPORTED_MODULE_1__.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = url__WEBPACK_IMPORTED_MODULE_2__.parse;
const format_url = url__WEBPACK_IMPORTED_MODULE_2__.format;

const streamDestructionSupported = 'destroy' in stream__WEBPACK_IMPORTED_MODULE_0__.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = stream__WEBPACK_IMPORTED_MODULE_0__.PassThrough;
const resolve_url = url__WEBPACK_IMPORTED_MODULE_2__.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__WEBPACK_IMPORTED_MODULE_3__ : http__WEBPACK_IMPORTED_MODULE_1__).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof stream__WEBPACK_IMPORTED_MODULE_0__.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH,
				finishFlush: zlib__WEBPACK_IMPORTED_MODULE_4__.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflate());
					} else {
						body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress === 'function') {
				body = body.pipe(zlib__WEBPACK_IMPORTED_MODULE_4__.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* harmony default export */ __webpack_exports__["default"] = (fetch);



/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-apollo/lib/react-apollo.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-apollo/lib/react-apollo.esm.js ***!
  \***********************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, Mutation, Query, Subscription, graphql, withApollo, withMutation, withQuery, withSubscription, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription, getDataFromTree, getMarkupFromTree, renderToStringWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "./node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-components */ "./node_modules/@apollo/react-components/lib/react-components.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return _apollo_react_components__WEBPACK_IMPORTED_MODULE_1__["Mutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _apollo_react_components__WEBPACK_IMPORTED_MODULE_1__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _apollo_react_components__WEBPACK_IMPORTED_MODULE_1__["Subscription"]; });

/* harmony import */ var _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hoc */ "./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["graphql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["withApollo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMutation", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["withMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withQuery", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["withQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSubscription", function() { return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_2__["withSubscription"]; });

/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useSubscription"]; });

/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-ssr */ "./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_4__["getDataFromTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_4__["getMarkupFromTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_4__["renderToStringWithData"]; });






//# sourceMappingURL=react-apollo.esm.js.map


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.esm.js ***!
  \**********************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return me; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return Be; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return He; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Je; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return"function"==typeof e}function b(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var _="undefined"!=typeof process&&(({}).REACT_APP_SC_ATTR||({}).SC_ATTR)||"data-styled",C="5.2.1",A="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==({}).REACT_APP_SC_DISABLE_SPEEDY&&""!==({}).REACT_APP_SC_DISABLE_SPEEDY?"false"!==({}).REACT_APP_SC_DISABLE_SPEEDY&&({}).REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==({}).SC_DISABLE_SPEEDY&&""!==({}).SC_DISABLE_SPEEDY?"false"!==({}).SC_DISABLE_SPEEDY&&({}).SC_DISABLE_SPEEDY:"production"!=="development"),P={},O= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:undefined;function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?undefined:new Error(R.apply(void 0,[O[e]].concat(n)).trim())}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return true&&((0|t)<0||t>1<<30)&&D(16,""+t),T.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},B=function(e,t){T.set(e,t),x.set(t,e)},z="style["+_+'][data-styled-version="5.2.1"]',L=new RegExp("^"+_+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),G=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},F=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),G(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},Y=function(){return true?__webpack_require__.nc:undefined},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(_))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(_,"active"),r.setAttribute("data-styled-version","5.2.1");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=A,J={isServer:!A,useCSSOMInjection:!I},Z=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=v({},J,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&A&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(z),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(_)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(void 0!==i&&0!==a.length){var c=_+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),X=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return(K(t%52)+n).replace(X,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!N(n))return!1}return!0}var re=te("5.2.1"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&false,this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s.length)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=ee(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var v=n(l,"."+m,void 0,r);t.insertRules(r,m,v)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&ie.includes(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),ue=ce.Consumer,le=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),de=(le.Consumer,new Z),he=ae();function pe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ce)||de}function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(le)||he}function me(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],s=t[1],c=pe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ae({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ce.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(le.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(e.children):undefined))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ye=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return"-"+e.toLowerCase()};function Ee(e){return ye.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return"";if(N(e))return"."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(u)&&console.warn(b(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(g(t[i])?s.push.apply(s,e(t[i],i)):E(t[i])?s.push(Ee(i)+":",t[i],";"):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(y(S,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(y(e,n))}var Ce=/invalid hook call/i,Ae=new Set,Ie=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(),Ae.has(n)||(console.warn(n),Ae.add(n))}catch(e){Ce.test(e.message)&&Ae.delete(n)}}},Pe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Oe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Re=/(^-|-$)/g;function De(e){return e.replace(Oe,"-").replace(Re,"")}var je=function(e){return Q(te(e)>>>0)};function Te(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},ke=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ve(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(xe(i))for(var a in i)ke(a)&&Ve(e,i[a],a)}return e}var Be=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),ze=Be.Consumer;function Le(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Be),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return D(14);if(E(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:D(7)}return Array.isArray(e)||"object"!=typeof e?D(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Be.Provider,{value:n},e.children):null}var Ge={};function Fe(e,t,n){var o=N(e),i=!Te(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":De(e);Ge[n]=(Ge[n]||0)+1;var r=n+"-"+je("5.2.1"+n+Ge[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,y=void 0===p?function(e){return Te(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?De(t.displayName)+"-"+t.componentId:t.componentId||h,_=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,C=t.shouldForwardProp;o&&e.shouldForwardProp&&(C=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var A,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(h);var m=function(e,t,n){void 0===e&&(e=w);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Pe(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Be),a)||w,t,o),y=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:undefined),b=n,N=g.$as||t.$as||g.as||t.as||p,_=Te(N),C=g!==t?v({},t,{},g):t,A={};for(var I in C)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?A.as=C[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"]):!_||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(A[I]=C[I]));return t.style&&g.style!==t.style&&(A.style=v({},t.style,{},g.style)),A.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),A.ref=b,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(N,A)}(A,e,t,P)};return O.displayName=y,(A=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(O)).attrs=_,A.componentStyle=I,A.displayName=y,A.shouldForwardProp=C,A.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,A.styledComponentId=g,A.target=o?e.target:e,A.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(Te(e)?e:De(b(e)));return Fe(e,v({},o,{attrs:_,componentId:s}),n)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Ie(y,g),A.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(y,g)),A.toString=function(){return"."+A.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var Ye=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return D(1,String(r));var s=function(){return t(r,o,_e.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Fe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Ye[e]=Ye(e)}));var qe=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ne(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function He(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=_e.apply(void 0,[e].concat(n)),a="sc-global-"+je(JSON.stringify(i)),u=new qe(i,a);function l(e){var t=pe(),n=fe(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Be),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),d(u,e,t,o,n),null}function d(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,P,n,o);else{var s=v({},t,{theme:Pe(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Ie(a),react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(l)}function $e(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=_e.apply(void 0,[e].concat(n)).join(""),s=je(o);return new ve(s,o)}var We=/^\s*<\/[a-z]/i,Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=Y();return"<style "+[n&&'nonce="'+n+'"',_+'="true"','data-styled-version="5.2.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?D(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return D(2);var n=((t={})[_]="",t["data-styled-version"]="5.2.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=Y();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?D(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(me,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){if(A)return D(3);if(this.sealed)return D(2);this.seal();var t=__webpack_require__(/*! stream */ "stream"),n=(t.Readable,t.Transform),r=e,o=this.instance,s=this._emitSheetCSS,i=new n({transform:function(e,t,n){var r=e.toString(),i=s();if(o.clearTag(),We.test(r)){var a=r.indexOf(">")+1,c=r.slice(0,a),u=r.slice(a);this.push(c+i+u)}else this.push(i+r);n()}});return r.on("error",(function(e){i.emit("error",e)})),r.pipe(i)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Be),i=e.defaultProps,a=Pe(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+b(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+b(e)+")",t},Ze=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Be)},Xe={StyleSheet:Z,masterSheet:de}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"development";/* harmony default export */ __webpack_exports__["default"] = (Ye);
//# sourceMappingURL=styled-components.esm.js.map


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/zen-observable-ts/lib/bundle.esm.js ***!
  \**********************************************************/
/*! exports provided: default, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);


var Observable = zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a;

/* harmony default export */ __webpack_exports__["default"] = (Observable);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/zen-observable/index.js":
/*!**********************************************!*\
  !*** ./node_modules/zen-observable/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/Observable.js */ "./node_modules/zen-observable/lib/Observable.js").Observable;


/***/ }),

/***/ "./node_modules/zen-observable/lib/Observable.js":
/*!*******************************************************!*\
  !*** ./node_modules/zen-observable/lib/Observable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// === Symbol Support ===
var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(observer, subscriber) {
    _classCallCheck(this, Subscription);

    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  _createClass(Subscription, [{
    key: "unsubscribe",
    value: function unsubscribe() {
      if (this._state !== 'closed') {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    }
  }, {
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver =
/*#__PURE__*/
function () {
  function SubscriptionObserver(subscription) {
    _classCallCheck(this, SubscriptionObserver);

    this._subscription = subscription;
  }

  _createClass(SubscriptionObserver, [{
    key: "next",
    value: function next(value) {
      onNotify(this._subscription, 'next', value);
    }
  }, {
    key: "error",
    value: function error(value) {
      onNotify(this._subscription, 'error', value);
    }
  }, {
    key: "complete",
    value: function complete() {
      onNotify(this._subscription, 'complete');
    }
  }, {
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable =
/*#__PURE__*/
function () {
  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(observer) {
      if (typeof observer !== 'object' || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }

      return new Subscription(observer, this._subscriber);
    }
  }, {
    key: "forEach",
    value: function forEach(fn) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (typeof fn !== 'function') {
          reject(new TypeError(fn + ' is not a function'));
          return;
        }

        function done() {
          subscription.unsubscribe();
          resolve();
        }

        var subscription = _this.subscribe({
          next: function (value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  }, {
    key: "map",
    value: function map(fn) {
      var _this2 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        return _this2.subscribe({
          next: function (value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }

            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "filter",
    value: function filter(fn) {
      var _this3 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        return _this3.subscribe({
          next: function (value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }

            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "reduce",
    value: function reduce(fn) {
      var _this4 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;
      return new C(function (observer) {
        return _this4.subscribe({
          next: function (value) {
            var first = !hasValue;
            hasValue = true;

            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
            observer.next(acc);
            observer.complete();
          }
        });
      });
    }
  }, {
    key: "concat",
    value: function concat() {
      var _this5 = this;

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      var C = getSpecies(this);
      return new C(function (observer) {
        var subscription;
        var index = 0;

        function startNext(next) {
          subscription = next.subscribe({
            next: function (v) {
              observer.next(v);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (index === sources.length) {
                subscription = undefined;
                observer.complete();
              } else {
                startNext(C.from(sources[index++]));
              }
            }
          });
        }

        startNext(_this5);
        return function () {
          if (subscription) {
            subscription.unsubscribe();
            subscription = undefined;
          }
        };
      });
    }
  }, {
    key: "flatMap",
    value: function flatMap(fn) {
      var _this6 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
      var C = getSpecies(this);
      return new C(function (observer) {
        var subscriptions = [];

        var outer = _this6.subscribe({
          next: function (value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }

            var inner = C.from(value).subscribe({
              next: function (value) {
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });
            subscriptions.push(inner);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            completeIfDone();
          }
        });

        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }

        return function () {
          subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    }
  }, {
    key: SymbolObservable,
    value: function () {
      return this;
    }
  }], [{
    key: "from",
    value: function from(x) {
      var C = typeof this === 'function' ? this : Observable;
      if (x == null) throw new TypeError(x + ' is not an object');
      var method = getMethod(x, SymbolObservable);

      if (method) {
        var observable = method.call(x);
        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
        if (isObservable(observable) && observable.constructor === C) return observable;
        return new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      if (hasSymbol('iterator')) {
        method = getMethod(x, SymbolIterator);

        if (method) {
          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _item = _step.value;
                  observer.next(_item);
                  if (observer.closed) return;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              observer.complete();
            });
          });
        }
      }

      if (Array.isArray(x)) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }

      throw new TypeError(x + ' is not observable');
    }
  }, {
    key: "of",
    value: function of() {
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      var C = typeof this === 'function' ? this : Observable;
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }
  }, {
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

exports.Observable = Observable;

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}

/***/ }),

/***/ "./src/context/ApolloContext.js":
/*!**************************************!*\
  !*** ./src/context/ApolloContext.js ***!
  \**************************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-node.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);


var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["default"]({
  uri: 'https://www.fsansalvadore.com/dev/saglietti/graphql',
  fetch: isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default.a
});

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_http__;

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_https__;

/***/ }),

/***/ "lodash/merge":
/*!*********************************************************************************************************************!*\
  !*** external "/Users/francescosansalvadore/Dropbox/code/fsansalvadore/wau-gatsby-wp/node_modules/lodash/merge.js" ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_merge__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_zlib__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map