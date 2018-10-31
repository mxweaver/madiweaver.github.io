/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/main.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/app.js":
/*!*******************************!*\
  !*** ./app/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./app/components/sidebar.js\");\n/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro */ \"./app/components/intro.js\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.scss */ \"./app/components/app.scss\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.app\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/\",\n      component: _intro__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    })));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcHAuanM/NjYxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInXG5pbXBvcnQgSW50cm8gZnJvbSAnLi9pbnRybydcbmltcG9ydCBjIGZyb20gJy4vYXBwLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2MuYXBwfT5cblx0XHRcdFx0PFNpZGViYXIvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Yy5jb250ZW50fT5cblx0XHRcdFx0XHQ8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0ludHJvfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQVhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/app.js\n");

/***/ }),

/***/ "./app/components/app.scss":
/*!*********************************!*\
  !*** ./app/components/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"app\":\"app-components-app__app--1A-33\",\"content\":\"app-components-app__content--1JbGc\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9hcHAuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2FwcC5zY3NzPzRkM2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImFwcFwiOlwiYXBwLWNvbXBvbmVudHMtYXBwX19hcHAtLTFBLTMzXCIsXCJjb250ZW50XCI6XCJhcHAtY29tcG9uZW50cy1hcHBfX2NvbnRlbnQtLTFKYkdjXCJ9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/app.scss\n");

/***/ }),

/***/ "./app/components/intro.js":
/*!*********************************!*\
  !*** ./app/components/intro.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(THREE) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Intro; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/js/controls/OrbitControls */ \"./node_modules/three/examples/js/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three_examples_js_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _intro_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.scss */ \"./app/components/intro.scss\");\n/* harmony import */ var _intro_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_intro_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nconst OrbitControls = THREE.OrbitControls;\n\nclass Intro extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...params) {\n    super(...params);\n    this.display = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n  }\n\n  componentDidMount() {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__[\"Scene\"]();\n    const material = new three__WEBPACK_IMPORTED_MODULE_1__[\"MeshPhongMaterial\"]({\n      color: 0xffffff,\n      emissive: 0x444444\n    });\n    const cube = new three__WEBPACK_IMPORTED_MODULE_1__[\"Mesh\"](new three__WEBPACK_IMPORTED_MODULE_1__[\"BoxGeometry\"](1, 1, 1), material);\n    scene.add(cube);\n    scene.add(new three__WEBPACK_IMPORTED_MODULE_1__[\"DirectionalLight\"](0xffffff, 0.5));\n    const display = this.display.current;\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__[\"PerspectiveCamera\"](75, display.clientWidth / display.clientHeight, 0.1, 1000);\n    camera.position.z = 5;\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__[\"WebGLRenderer\"]();\n    renderer.setPixelRatio(window.devicePixelRatio);\n    renderer.setSize(display.clientWidth, display.clientHeight);\n    display.appendChild(renderer.domElement);\n    new OrbitControls(camera, renderer.domElement);\n\n    this.onWindowResize = () => {\n      renderer.setSize(display.clientWidth, display.clientHeight);\n      camera.aspect = display.clientWidth / display.clientHeight;\n      camera.updateProjectionMatrix();\n    };\n\n    window.addEventListener('resize', this.onWindowResize);\n\n    function animate() {\n      requestAnimationFrame(animate);\n      cube.rotation.y += 0.01;\n      cube.rotation.x += 0.005;\n      renderer.render(scene, camera);\n    }\n\n    animate();\n  }\n\n  componentWillUnmount() {\n    window.removeEventListener('resize', this.onWindowResize);\n    this.onWindowResize = undefined;\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      ref: this.display,\n      className: _intro_scss__WEBPACK_IMPORTED_MODULE_3___default.a.intro\n    });\n  }\n\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9pbnRyby5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2ludHJvLmpzPzU5ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG4gIFNjZW5lLFxuICBXZWJHTFJlbmRlcmVyLFxuICBNZXNoLFxuICBCb3hHZW9tZXRyeSxcbiAgTWVzaFBob25nTWF0ZXJpYWwsXG4gIERpcmVjdGlvbmFsTGlnaHRcbn0gZnJvbSAndGhyZWUnXG5pbXBvcnQgJ3RocmVlL2V4YW1wbGVzL2pzL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5jb25zdCBPcmJpdENvbnRyb2xzID0gVEhSRUUuT3JiaXRDb250cm9sc1xuaW1wb3J0IGMgZnJvbSAnLi9pbnRyby5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRybyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLnBhcmFtcykge1xuICAgIHN1cGVyKC4uLnBhcmFtcylcbiAgICB0aGlzLmRpc3BsYXkgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoKVxuXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaFBob25nTWF0ZXJpYWwoIHsgY29sb3I6IDB4ZmZmZmZmLCBlbWlzc2l2ZTogMHg0NDQ0NDQgfSApXG5cbiAgICBjb25zdCBjdWJlID0gbmV3IE1lc2gobmV3IEJveEdlb21ldHJ5KDEsIDEsIDEpLCBtYXRlcmlhbClcbiAgICBzY2VuZS5hZGQoY3ViZSk7XG5cbiAgICBzY2VuZS5hZGQobmV3IERpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDAuNSkpXG5cbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5kaXNwbGF5LmN1cnJlbnRcblxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSg3NSwgZGlzcGxheS5jbGllbnRXaWR0aCAvIGRpc3BsYXkuY2xpZW50SGVpZ2h0LCAwLjEsIDEwMDApXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcigpXG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcbiAgICByZW5kZXJlci5zZXRTaXplKGRpc3BsYXkuY2xpZW50V2lkdGgsIGRpc3BsYXkuY2xpZW50SGVpZ2h0KVxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcblxuICAgIG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcblxuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgICByZW5kZXJlci5zZXRTaXplKGRpc3BsYXkuY2xpZW50V2lkdGgsIGRpc3BsYXkuY2xpZW50SGVpZ2h0KVxuXG4gICAgICBjYW1lcmEuYXNwZWN0ID0gZGlzcGxheS5jbGllbnRXaWR0aCAvIGRpc3BsYXkuY2xpZW50SGVpZ2h0XG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpXG5cbiAgICBmdW5jdGlvbiBhbmltYXRlICgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuXG4gICAgICBjdWJlLnJvdGF0aW9uLnkgKz0gMC4wMVxuICAgICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMDA1XG5cbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxuICAgIH1cbiAgICBhbmltYXRlKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKVxuICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSB1bmRlZmluZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiByZWY9e3RoaXMuZGlzcGxheX0gY2xhc3NOYW1lPXtjLmludHJvfS8+XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUF4REE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/intro.js\n");

/***/ }),

/***/ "./app/components/intro.scss":
/*!***********************************!*\
  !*** ./app/components/intro.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"intro\":\"app-components-intro__intro--1QMLO\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9pbnRyby5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvaW50cm8uc2Nzcz84MjVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpbnRyb1wiOlwiYXBwLWNvbXBvbmVudHMtaW50cm9fX2ludHJvLS0xUU1MT1wifTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/intro.scss\n");

/***/ }),

/***/ "./app/components/link.js":
/*!********************************!*\
  !*** ./app/components/link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urijs */ \"./node_modules/urijs/src/URI.js\");\n/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _link_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link.scss */ \"./app/components/link.scss\");\n/* harmony import */ var _link_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_link_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass Link extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const props = _objectSpread({}, this.props, {\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(this.props.className, _link_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link)\n    });\n\n    const uri = urijs__WEBPACK_IMPORTED_MODULE_3___default()(this.props.to);\n\n    if (uri.protocol() === '' && uri.domain() === '') {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], props);\n    } else if (['', 'http', 'https'].includes(uri.protocol())) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: props.to,\n        className: props.className,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\"\n      }, props.children);\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: props.to,\n        className: props.className\n      }, props.children);\n    }\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9saW5rLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbGluay5qcz82Mzk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgYXMgRE9NTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFVSSSBmcm9tICd1cmlqcydcbmltcG9ydCBjIGZyb20gJy4vbGluay5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHByb3BzID0ge1xuXHRcdFx0Li4udGhpcy5wcm9wcyxcblx0XHRcdGNsYXNzTmFtZTogY2xhc3NuYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgYy5saW5rKVxuXHRcdH1cblxuXHRcdGNvbnN0IHVyaSA9IFVSSSh0aGlzLnByb3BzLnRvKVxuXG5cdFx0aWYgKHVyaS5wcm90b2NvbCgpID09PSAnJyAmJiB1cmkuZG9tYWluKCkgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gPERPTUxpbmsgey4uLnByb3BzfS8+XG5cdFx0fSBlbHNlIGlmIChbJycsICdodHRwJywgJ2h0dHBzJ10uaW5jbHVkZXModXJpLnByb3RvY29sKCkpKSB7XG5cdFx0XHRyZXR1cm4gPGFcblx0XHRcdFx0aHJlZj17cHJvcHMudG99XG5cdFx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxuXHRcdFx0XHR0YXJnZXQ9J19ibGFuaydcblx0XHRcdFx0cmVsPSdub29wZW5lciBub3JlZmVycmVyJz5cblx0XHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L2E+XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiA8YSBocmVmPXtwcm9wcy50b30gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9Pntwcm9wcy5jaGlsZHJlbn08L2E+XG5cdFx0fVxuXHR9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/link.js\n");

/***/ }),

/***/ "./app/components/link.scss":
/*!**********************************!*\
  !*** ./app/components/link.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"link\":\"app-components-link__link--2GcpV\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9saW5rLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9saW5rLnNjc3M/YzAyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlua1wiOlwiYXBwLWNvbXBvbmVudHMtbGlua19fbGluay0tMkdjcFZcIn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/link.scss\n");

/***/ }),

/***/ "./app/components/sidebar.js":
/*!***********************************!*\
  !*** ./app/components/sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sidebar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link.js */ \"./app/components/link.js\");\n/* harmony import */ var _sidebar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.scss */ \"./app/components/sidebar.scss\");\n/* harmony import */ var _sidebar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sidebar_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nfunction NavGroup(_ref) {\n  let {\n    name,\n    links\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"name\", \"links\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _sidebar_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navlinkGroup\n  }, links.map(({\n    title,\n    url\n  }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_link_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    key: title,\n    to: url\n  }, title))));\n}\n\nfunction Nav() {\n  const links = {\n    blog: [],\n    games: [{\n      title: 'snake',\n      url: '/snake'\n    }, {\n      title: 'life',\n      url: '/life'\n    }],\n    links: [{\n      title: 'github',\n      url: 'https://github.com/mayavera'\n    }, {\n      title: 'linkedin',\n      url: 'https://linkedin.com/in/mayavera'\n    }, {\n      title: 'codewars',\n      url: 'https://www.codewars.com/users/mayavera'\n    }, {\n      title: 'stackoverflow',\n      url: 'https://stackexchange.com/users/13452692/maya-vera'\n    }]\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, Object.entries(links).map(([name, links], i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavGroup, {\n    key: i,\n    name: name,\n    links: links\n  })));\n}\n\nclass Sidebar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: _sidebar_scss__WEBPACK_IMPORTED_MODULE_2___default.a.sidebar\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"maya vera\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_link_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      to: \"mailto:maya@mayavera.me\"\n    }, '<maya@mayavera.me>')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, null));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zaWRlYmFyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci5qcz8xMmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluay5qcydcbmltcG9ydCBjIGZyb20gJy4vc2lkZWJhci5zY3NzJ1xuXG5mdW5jdGlvbiBOYXZHcm91cCAoe25hbWUsIGxpbmtzLCAuLi5wcm9wc30pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHsuLi5wcm9wc30+XG5cdFx0XHQ8ZGl2PntuYW1lfTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2MubmF2bGlua0dyb3VwfT5cblx0XHRcdFx0e2xpbmtzLm1hcCgoe3RpdGxlLCB1cmx9KSA9PiAoXG5cdFx0XHRcdFx0PExpbmsga2V5PXt0aXRsZX0gdG89e3VybH0+e3RpdGxlfTwvTGluaz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5mdW5jdGlvbiBOYXYoKSB7XG5cdGNvbnN0IGxpbmtzID0ge1xuXHRcdGJsb2c6IFtdLFxuXHRcdGdhbWVzOiBbXG5cdFx0XHR7IHRpdGxlOiAnc25ha2UnLCB1cmw6ICcvc25ha2UnIH0sXG5cdFx0XHR7IHRpdGxlOiAnbGlmZScsIHVybDogJy9saWZlJyB9LFxuXHRcdF0sXG5cdFx0bGlua3M6IFtcblx0XHRcdHsgdGl0bGU6ICdnaXRodWInLCB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vbWF5YXZlcmEnIH0sXG5cdFx0XHR7IHRpdGxlOiAnbGlua2VkaW4nLCB1cmw6ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9tYXlhdmVyYScgfSxcblx0XHRcdHsgdGl0bGU6ICdjb2Rld2FycycsIHVybDogJ2h0dHBzOi8vd3d3LmNvZGV3YXJzLmNvbS91c2Vycy9tYXlhdmVyYScgfSxcblx0XHRcdHsgdGl0bGU6ICdzdGFja292ZXJmbG93JywgdXJsOiAnaHR0cHM6Ly9zdGFja2V4Y2hhbmdlLmNvbS91c2Vycy8xMzQ1MjY5Mi9tYXlhLXZlcmEnIH0sXG5cdFx0XSxcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PG5hdj5cblx0XHR7T2JqZWN0LmVudHJpZXMobGlua3MpLm1hcCgoW25hbWUsIGxpbmtzXSwgaSkgPT4gKFxuXHRcdFx0PE5hdkdyb3VwIGtleT17aX0gbmFtZT17bmFtZX0gbGlua3M9e2xpbmtzfS8+XG5cdFx0KSl9XG5cdFx0PC9uYXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Muc2lkZWJhcn0+XG5cdFx0XHRcdDxoMT5tYXlhIHZlcmE8L2gxPlxuXHRcdFx0XHQ8aDI+XG5cdFx0XHRcdFx0PExpbmsgdG89XCJtYWlsdG86bWF5YUBtYXlhdmVyYS5tZVwiPlxuXHRcdFx0XHRcdHsnPG1heWFAbWF5YXZlcmEubWU+J31cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHQ8TmF2Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVZBO0FBY0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQU9BO0FBQ0E7QUFkQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/sidebar.js\n");

/***/ }),

/***/ "./app/components/sidebar.scss":
/*!*************************************!*\
  !*** ./app/components/sidebar.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"sidebar\":\"app-components-sidebar__sidebar--1Ciio\",\"navlinkGroup\":\"app-components-sidebar__navlinkGroup--29iCg\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zaWRlYmFyLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zaWRlYmFyLnNjc3M/ODQwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic2lkZWJhclwiOlwiYXBwLWNvbXBvbmVudHMtc2lkZWJhcl9fc2lkZWJhci0tMUNpaW9cIixcIm5hdmxpbmtHcm91cFwiOlwiYXBwLWNvbXBvbmVudHMtc2lkZWJhcl9fbmF2bGlua0dyb3VwLS0yOWlDZ1wifTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/sidebar.scss\n");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./app/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ \"./node_modules/history/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ \"./node_modules/connected-react-router/lib/index.js\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app */ \"./app/components/app.js\");\n\n\n\n\n\n\n // import { Route, Switch } from 'react-router' // react-router v4\n\n\n\nconst history = Object(history__WEBPACK_IMPORTED_MODULE_2__[\"createBrowserHistory\"])();\nconst reducers = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"combineReducers\"])({\n  foo: (state = {}) => state\n});\n\nconst _compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_3__[\"compose\"];\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_4__[\"connectRouter\"])(history)(reducers), {}, _compose(Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"applyMiddleware\"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_4__[\"routerMiddleware\"])(history))));\nreact_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_4__[\"ConnectedRouter\"], {\n  history: history\n}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_app__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9tYWluLmpzP2YxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL21haW4uc2NzcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSdcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbi8vIGltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXInIC8vIHJlYWN0LXJvdXRlciB2NFxuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcidcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCdcblxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KClcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHRmb286IChzdGF0ZSA9IHt9KSA9PiBzdGF0ZSxcbn0pXG5cbmNvbnN0IF9jb21wb3NlID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG5cdGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSkocmVkdWNlcnMpLFxuXHR7fSxcblx0X2NvbXBvc2UoXG5cdFx0YXBwbHlNaWRkbGV3YXJlKFxuXHRcdFx0cm91dGVyTWlkZGxld2FyZShoaXN0b3J5KVxuXHRcdClcblx0KVxuKVxuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdDxDb25uZWN0ZWRSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG5cdFx0XHQ8QXBwLz5cblx0XHQ8L0Nvbm5lY3RlZFJvdXRlcj5cblx0PC9Qcm92aWRlcj4sXHRcdFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbilcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/main.js\n");

/***/ }),

/***/ "./app/main.scss":
/*!***********************!*\
  !*** ./app/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uc2Nzcz9mY2EwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/main.scss\n");

/***/ })

/******/ });