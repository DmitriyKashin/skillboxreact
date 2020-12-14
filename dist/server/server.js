/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar compose = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\").compose;\nexports.__esModule = true;\nexports.composeWithDevTools = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?\n    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :\n    function () {\n        if (arguments.length === 0)\n            return undefined;\n        if (typeof arguments[0] === 'object')\n            return compose;\n        return compose.apply(null, arguments);\n    });\nexports.devToolsEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?\n    window.__REDUX_DEVTOOLS_EXTENSION__ :\n    function () { return function (noop) { return noop; }; });\n\n\n//# sourceURL=webpack:///./node_modules/redux-devtools-extension/index.js?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.createStore = exports.compose = exports.combineReducers = exports.bindActionCreators = exports.applyMiddleware = exports.__DO_NOT_USE__ActionTypes = void 0;\nvar symbol_observable_1 = __importDefault(__webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\"));\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar randomString = function randomString() {\n    return Math.random().toString(36).substring(7).split('').join('.');\n};\nvar ActionTypes = {\n    INIT: \"@@redux/INIT\" + randomString(),\n    REPLACE: \"@@redux/REPLACE\" + randomString(),\n    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n        return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\n    }\n};\nexports.__DO_NOT_USE__ActionTypes = ActionTypes;\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n    if (typeof obj !== 'object' || obj === null)\n        return false;\n    var proto = obj;\n    while (Object.getPrototypeOf(proto) !== null) {\n        proto = Object.getPrototypeOf(proto);\n    }\n    return Object.getPrototypeOf(obj) === proto;\n}\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [preloadedState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\n * to enhance the store with third-party capabilities such as middleware,\n * time travel, persistence, etc. The only store enhancer that ships with Redux\n * is `applyMiddleware()`.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\nfunction createStore(reducer, preloadedState, enhancer) {\n    var _ref2;\n    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\n        throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');\n    }\n    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\n        enhancer = preloadedState;\n        preloadedState = undefined;\n    }\n    if (typeof enhancer !== 'undefined') {\n        if (typeof enhancer !== 'function') {\n            throw new Error('Expected the enhancer to be a function.');\n        }\n        return enhancer(createStore)(reducer, preloadedState);\n    }\n    if (typeof reducer !== 'function') {\n        throw new Error('Expected the reducer to be a function.');\n    }\n    var currentReducer = reducer;\n    var currentState = preloadedState;\n    var currentListeners = [];\n    var nextListeners = currentListeners;\n    var isDispatching = false;\n    /**\n     * This makes a shallow copy of currentListeners so we can use\n     * nextListeners as a temporary list while dispatching.\n     *\n     * This prevents any bugs around consumers calling\n     * subscribe/unsubscribe in the middle of a dispatch.\n     */\n    function ensureCanMutateNextListeners() {\n        if (nextListeners === currentListeners) {\n            nextListeners = currentListeners.slice();\n        }\n    }\n    /**\n     * Reads the state tree managed by the store.\n     *\n     * @returns {any} The current state tree of your application.\n     */\n    function getState() {\n        if (isDispatching) {\n            throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\n        }\n        return currentState;\n    }\n    /**\n     * Adds a change listener. It will be called any time an action is dispatched,\n     * and some part of the state tree may potentially have changed. You may then\n     * call `getState()` to read the current state tree inside the callback.\n     *\n     * You may call `dispatch()` from a change listener, with the following\n     * caveats:\n     *\n     * 1. The subscriptions are snapshotted just before every `dispatch()` call.\n     * If you subscribe or unsubscribe while the listeners are being invoked, this\n     * will not have any effect on the `dispatch()` that is currently in progress.\n     * However, the next `dispatch()` call, whether nested or not, will use a more\n     * recent snapshot of the subscription list.\n     *\n     * 2. The listener should not expect to see all state changes, as the state\n     * might have been updated multiple times during a nested `dispatch()` before\n     * the listener is called. It is, however, guaranteed that all subscribers\n     * registered before the `dispatch()` started will be called with the latest\n     * state by the time it exits.\n     *\n     * @param {Function} listener A callback to be invoked on every dispatch.\n     * @returns {Function} A function to remove this change listener.\n     */\n    function subscribe(listener) {\n        if (typeof listener !== 'function') {\n            throw new Error('Expected the listener to be a function.');\n        }\n        if (isDispatching) {\n            throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\n        }\n        var isSubscribed = true;\n        ensureCanMutateNextListeners();\n        nextListeners.push(listener);\n        return function unsubscribe() {\n            if (!isSubscribed) {\n                return;\n            }\n            if (isDispatching) {\n                throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\n            }\n            isSubscribed = false;\n            ensureCanMutateNextListeners();\n            var index = nextListeners.indexOf(listener);\n            nextListeners.splice(index, 1);\n            currentListeners = null;\n        };\n    }\n    /**\n     * Dispatches an action. It is the only way to trigger a state change.\n     *\n     * The `reducer` function, used to create the store, will be called with the\n     * current state tree and the given `action`. Its return value will\n     * be considered the **next** state of the tree, and the change listeners\n     * will be notified.\n     *\n     * The base implementation only supports plain object actions. If you want to\n     * dispatch a Promise, an Observable, a thunk, or something else, you need to\n     * wrap your store creating function into the corresponding middleware. For\n     * example, see the documentation for the `redux-thunk` package. Even the\n     * middleware will eventually dispatch plain object actions using this method.\n     *\n     * @param {Object} action A plain object representing “what changed”. It is\n     * a good idea to keep actions serializable so you can record and replay user\n     * sessions, or use the time travelling `redux-devtools`. An action must have\n     * a `type` property which may not be `undefined`. It is a good idea to use\n     * string constants for action types.\n     *\n     * @returns {Object} For convenience, the same action object you dispatched.\n     *\n     * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n     * return something else (for example, a Promise you can await).\n     */\n    function dispatch(action) {\n        if (!isPlainObject(action)) {\n            throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\n        }\n        if (typeof action.type === 'undefined') {\n            throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\n        }\n        if (isDispatching) {\n            throw new Error('Reducers may not dispatch actions.');\n        }\n        try {\n            isDispatching = true;\n            currentState = currentReducer(currentState, action);\n        }\n        finally {\n            isDispatching = false;\n        }\n        var listeners = currentListeners = nextListeners;\n        for (var i = 0; i < listeners.length; i++) {\n            var listener = listeners[i];\n            listener();\n        }\n        return action;\n    }\n    /**\n     * Replaces the reducer currently used by the store to calculate the state.\n     *\n     * You might need this if your app implements code splitting and you want to\n     * load some of the reducers dynamically. You might also need this if you\n     * implement a hot reloading mechanism for Redux.\n     *\n     * @param {Function} nextReducer The reducer for the store to use instead.\n     * @returns {void}\n     */\n    function replaceReducer(nextReducer) {\n        if (typeof nextReducer !== 'function') {\n            throw new Error('Expected the nextReducer to be a function.');\n        }\n        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.\n        // Any reducers that existed in both the new and old rootReducer\n        // will receive the previous state. This effectively populates\n        // the new state tree with any relevant data from the old one.\n        dispatch({\n            type: ActionTypes.REPLACE\n        });\n    }\n    /**\n     * Interoperability point for observable/reactive libraries.\n     * @returns {observable} A minimal observable of state changes.\n     * For more information, see the observable proposal:\n     * https://github.com/tc39/proposal-observable\n     */\n    function observable() {\n        var _ref;\n        var outerSubscribe = subscribe;\n        return _ref = {\n            /**\n             * The minimal observable subscription method.\n             * @param {Object} observer Any object that can be used as an observer.\n             * The observer object should have a `next` method.\n             * @returns {subscription} An object with an `unsubscribe` method that can\n             * be used to unsubscribe the observable from the store, and prevent further\n             * emission of values from the observable.\n             */\n            subscribe: function subscribe(observer) {\n                if (typeof observer !== 'object' || observer === null) {\n                    throw new TypeError('Expected the observer to be an object.');\n                }\n                function observeState() {\n                    if (observer.next) {\n                        observer.next(getState());\n                    }\n                }\n                observeState();\n                var unsubscribe = outerSubscribe(observeState);\n                return {\n                    unsubscribe: unsubscribe\n                };\n            }\n        }, _ref[symbol_observable_1.default] = function () {\n            return this;\n        }, _ref;\n    } // When a store is created, an \"INIT\" action is dispatched so that every\n    // reducer returns their initial state. This effectively populates\n    // the initial state tree.\n    dispatch({\n        type: ActionTypes.INIT\n    });\n    return _ref2 = {\n        dispatch: dispatch,\n        subscribe: subscribe,\n        getState: getState,\n        replaceReducer: replaceReducer\n    }, _ref2[symbol_observable_1.default] = observable, _ref2;\n}\nexports.createStore = createStore;\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n    /* eslint-disable no-console */\n    if (typeof console !== 'undefined' && typeof console.error === 'function') {\n        console.error(message);\n    }\n    /* eslint-enable no-console */\n    try {\n        // This error was thrown as a convenience so that if you enable\n        // \"break on all exceptions\" in your console,\n        // it would pause the execution at this line.\n        throw new Error(message);\n    }\n    catch (e) { } // eslint-disable-line no-empty\n}\nfunction getUndefinedStateErrorMessage(key, action) {\n    var actionType = action && action.type;\n    var actionDescription = actionType && \"action \\\"\" + String(actionType) + \"\\\"\" || 'an action';\n    return \"Given \" + actionDescription + \", reducer \\\"\" + key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n    var reducerKeys = Object.keys(reducers);\n    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n    if (reducerKeys.length === 0) {\n        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n    }\n    if (!isPlainObject(inputState)) {\n        return \"The \" + argumentName + \" has unexpected type of \\\"\" + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\n    }\n    var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n    });\n    unexpectedKeys.forEach(function (key) {\n        unexpectedKeyCache[key] = true;\n    });\n    if (action && action.type === ActionTypes.REPLACE)\n        return;\n    if (unexpectedKeys.length > 0) {\n        return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\n    }\n}\nfunction assertReducerShape(reducers) {\n    Object.keys(reducers).forEach(function (key) {\n        var reducer = reducers[key];\n        var initialState = reducer(undefined, {\n            type: ActionTypes.INIT\n        });\n        if (typeof initialState === 'undefined') {\n            throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n        }\n        if (typeof reducer(undefined, {\n            type: ActionTypes.PROBE_UNKNOWN_ACTION()\n        }) === 'undefined') {\n            throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle \" + ActionTypes.INIT + \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n        }\n    });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\nfunction combineReducers(reducers) {\n    var reducerKeys = Object.keys(reducers);\n    var finalReducers = {};\n    for (var i = 0; i < reducerKeys.length; i++) {\n        var key = reducerKeys[i];\n        if (true) {\n            if (typeof reducers[key] === 'undefined') {\n                warning(\"No reducer provided for key \\\"\" + key + \"\\\"\");\n            }\n        }\n        if (typeof reducers[key] === 'function') {\n            finalReducers[key] = reducers[key];\n        }\n    }\n    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same\n    // keys multiple times.\n    var unexpectedKeyCache;\n    if (true) {\n        unexpectedKeyCache = {};\n    }\n    var shapeAssertionError;\n    try {\n        assertReducerShape(finalReducers);\n    }\n    catch (e) {\n        shapeAssertionError = e;\n    }\n    return function combination(state, action) {\n        if (state === void 0) {\n            state = {};\n        }\n        if (shapeAssertionError) {\n            throw shapeAssertionError;\n        }\n        if (true) {\n            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\n            if (warningMessage) {\n                warning(warningMessage);\n            }\n        }\n        var hasChanged = false;\n        var nextState = {};\n        for (var _i = 0; _i < finalReducerKeys.length; _i++) {\n            var _key = finalReducerKeys[_i];\n            var reducer = finalReducers[_key];\n            var previousStateForKey = state[_key];\n            var nextStateForKey = reducer(previousStateForKey, action);\n            if (typeof nextStateForKey === 'undefined') {\n                var errorMessage = getUndefinedStateErrorMessage(_key, action);\n                throw new Error(errorMessage);\n            }\n            nextState[_key] = nextStateForKey;\n            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n        }\n        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;\n        return hasChanged ? nextState : state;\n    };\n}\nexports.combineReducers = combineReducers;\nfunction bindActionCreator(actionCreator, dispatch) {\n    return function () {\n        return dispatch(actionCreator.apply(this, arguments));\n    };\n}\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass an action creator as the first argument,\n * and get a dispatch wrapped function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\nfunction bindActionCreators(actionCreators, dispatch) {\n    if (typeof actionCreators === 'function') {\n        return bindActionCreator(actionCreators, dispatch);\n    }\n    if (typeof actionCreators !== 'object' || actionCreators === null) {\n        throw new Error(\"bindActionCreators expected an object or a function, instead received \" + (actionCreators === null ? 'null' : typeof actionCreators) + \". \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\n    }\n    var boundActionCreators = {};\n    for (var key in actionCreators) {\n        var actionCreator = actionCreators[key];\n        if (typeof actionCreator === 'function') {\n            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n        }\n    }\n    return boundActionCreators;\n}\nexports.bindActionCreators = bindActionCreators;\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    }\n    else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        keys.push.apply(keys, Object.getOwnPropertySymbols(object));\n    }\n    if (enumerableOnly)\n        keys = keys.filter(function (sym) {\n            return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n        });\n    return keys;\n}\nfunction _objectSpread2(target) {\n    for (var i = 1; i < arguments.length; i++) {\n        var source = arguments[i] != null ? arguments[i] : {};\n        if (i % 2) {\n            ownKeys(source, true).forEach(function (key) {\n                _defineProperty(target, key, source[key]);\n            });\n        }\n        else if (Object.getOwnPropertyDescriptors) {\n            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n        }\n        else {\n            ownKeys(source).forEach(function (key) {\n                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n            });\n        }\n    }\n    return target;\n}\n/**\n * Composes single-argument functions from right to left. The rightmost\n * function can take multiple arguments as it provides the signature for\n * the resulting composite function.\n *\n * @param {...Function} funcs The functions to compose.\n * @returns {Function} A function obtained by composing the argument functions\n * from right to left. For example, compose(f, g, h) is identical to doing\n * (...args) => f(g(h(...args))).\n */\nfunction compose() {\n    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n        funcs[_key] = arguments[_key];\n    }\n    if (funcs.length === 0) {\n        return function (arg) {\n            return arg;\n        };\n    }\n    if (funcs.length === 1) {\n        return funcs[0];\n    }\n    return funcs.reduce(function (a, b) {\n        return function () {\n            return a(b.apply(void 0, arguments));\n        };\n    });\n}\nexports.compose = compose;\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\nfunction applyMiddleware() {\n    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\n        middlewares[_key] = arguments[_key];\n    }\n    return function (createStore) {\n        return function () {\n            var store = createStore.apply(void 0, arguments);\n            var _dispatch = function dispatch() {\n                throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');\n            };\n            var middlewareAPI = {\n                getState: store.getState,\n                dispatch: function dispatch() {\n                    return _dispatch.apply(void 0, arguments);\n                }\n            };\n            var chain = middlewares.map(function (middleware) {\n                return middleware(middlewareAPI);\n            });\n            _dispatch = compose.apply(void 0, chain)(store.dispatch);\n            return _objectSpread2({}, store, {\n                dispatch: _dispatch\n            });\n        };\n    };\n}\nexports.applyMiddleware = applyMiddleware;\n/*\n * This is a dummy function to check if the function name has been altered by minification.\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\n */\nfunction isCrushed() { }\nif ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\n    warning('You are currently using minified code outside of NODE_ENV === \"production\". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');\n}\n\n\n//# sourceURL=webpack:///./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/* global window */\nvar ponyfill_js_1 = __importDefault(__webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\"));\nvar root;\nif (typeof self !== 'undefined') {\n    root = self;\n}\nelse if (typeof window !== 'undefined') {\n    root = window;\n}\nelse if (typeof global !== 'undefined') {\n    root = global;\n}\nelse if (true) {\n    root = module;\n}\nelse {}\nvar result = ponyfill_js_1.default(root);\nexports.default = result;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction symbolObservablePonyfill(root) {\n    var result;\n    var Symbol = root.Symbol;\n    if (typeof Symbol === 'function') {\n        if (Symbol.observable) {\n            result = Symbol.observable;\n        }\n        else {\n            result = Symbol('observable');\n            Symbol.observable = result;\n        }\n    }\n    else {\n        result = '@@observable';\n    }\n    return result;\n}\nexports.default = symbolObservablePonyfill;\n;\n\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function (module) {\n    if (!module.webpackPolyfill) {\n        module.deprecate = function () { };\n        module.paths = [];\n        // module.parent = undefined by default\n        if (!module.children)\n            module.children = [];\n        Object.defineProperty(module, \"loaded\", {\n            enumerable: true,\n            get: function () {\n                return module.l;\n            }\n        });\n        Object.defineProperty(module, \"id\", {\n            enumerable: true,\n            get: function () {\n                return module.i;\n            }\n        });\n        module.webpackPolyfill = 1;\n    }\n    return module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\n__webpack_require__(/*! ./main.global.less */ \"./src/main.global.less\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\n// import { Dropdown } from './shared/Dropdown';\n// import { GenericList } from './shared/GenericList/GenericList';\n// import { tokenContext } from './context/tokenContext';\n// import { useToken } from './hooks/useToken';\nvar userContext_1 = __webpack_require__(/*! ./context/userContext */ \"./src/context/userContext.tsx\");\nvar postsContext_1 = __webpack_require__(/*! ./context/postsContext */ \"./src/context/postsContext.tsx\");\nvar commentContext_1 = __webpack_require__(/*! ./context/commentContext */ \"./src/context/commentContext.ts\");\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nvar store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools());\nvar AppWrapper = function () {\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\n        react_1.default.createElement(AppComponent, null)));\n};\nfunction AppComponent() {\n    var dispatch = react_redux_1.useDispatch();\n    react_1.useEffect(function () {\n        if (window.__token__) {\n            dispatch(store_1.setToken(window.__token__));\n        }\n    }, []);\n    var _a = react_1.useState(\"\"), commentValue = _a[0], setCommentValue = _a[1];\n    var _b = react_1.useState(-1), commentActive = _b[0], setCommentActive = _b[1];\n    var CommentProvider = commentContext_1.commentContext.Provider;\n    var _c = react_1.useState([\n        {\n            name: \"Artur 1 \",\n            time: \"1 h ago\",\n            text: \"This is a text comment 1, This is a text comment 1, This is a text comment 1, This is a text comment 1, This is a text comment 1\",\n            category: \"League of Politicans\",\n            id: 1,\n            ref: react_1.useRef(null),\n        },\n        {\n            name: \"Artur 2 \",\n            time: \"2 h ago\",\n            text: \"This is a text comment 2 , This is a text comment 2  , This is a text comment 2 , This is a text comment 2 , This is a text comment 2 \",\n            category: \"League of Humorists\",\n            id: 2,\n            ref: react_1.useRef(null),\n            comments: [\n                {\n                    name: \"Artur 3 \",\n                    time: \"3 h ago\",\n                    text: \"This is a text comment 3, This is a text comment 3 , This is a text comment 3, This is a text comment 3\",\n                    category: \"League of Novices\",\n                    id: 3,\n                    ref: react_1.useRef(null),\n                },\n            ]\n        },\n        {\n            name: \"Artur 4\",\n            time: \"4  h ago\",\n            category: \"League of Programmers\",\n            text: \"This is a text comment 4, This is a text comment 3 , This is a text comment 3, This is a text comment 4\",\n            id: 4,\n            ref: react_1.useRef(null),\n        },\n    ]), commentComments = _c[0], setComments = _c[1];\n    return (react_1.default.createElement(CommentProvider, { value: {\n            value: commentValue,\n            onChange: setCommentValue,\n            onChangeActive: setCommentActive,\n            activeComment: commentActive,\n            allComments: commentComments,\n            onChangeComments: setComments,\n        } },\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\n            react_1.default.createElement(Layout_1.Layout, null,\n                react_1.default.createElement(Header_1.Header, null),\n                react_1.default.createElement(Content_1.Content, null,\n                    react_1.default.createElement(postsContext_1.PostsContextProvider, null,\n                        react_1.default.createElement(CardsList_1.CardsList, null)))))));\n}\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppWrapper, null); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/context/commentContext.ts":
/*!***************************************!*\
  !*** ./src/context/commentContext.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.commentContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.commentContext = react_1.default.createContext({\n    value: '',\n    onChange: function () { },\n    onChangeActive: function () { },\n    activeComment: -1,\n    allComments: [],\n    onChangeComments: function () { },\n});\n\n\n//# sourceURL=webpack:///./src/context/commentContext.ts?");

/***/ }),

/***/ "./src/context/postsContext.tsx":
/*!**************************************!*\
  !*** ./src/context/postsContext.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PostsContextProvider = exports.postsContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar usePostsData_1 = __webpack_require__(/*! ../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\nexports.postsContext = react_1.default.createContext([]);\nfunction PostsContextProvider(_a) {\n    var children = _a.children;\n    var posts = usePostsData_1.usePostsData()[0];\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children));\n}\nexports.PostsContextProvider = PostsContextProvider;\n\n\n//# sourceURL=webpack:///./src/context/postsContext.tsx?");

/***/ }),

/***/ "./src/context/userContext.tsx":
/*!*************************************!*\
  !*** ./src/context/userContext.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserContextProvider = exports.userContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar useUserData_1 = __webpack_require__(/*! ../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\nexports.userContext = react_1.default.createContext({});\nfunction UserContextProvider(_a) {\n    var children = _a.children;\n    var data = useUserData_1.useUserData()[0];\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\n}\nexports.UserContextProvider = UserContextProvider;\n\n\n//# sourceURL=webpack:///./src/context/userContext.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostsData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nfunction usePostsData() {\n    var _a = react_1.default.useState([]), posts = _a[0], setPosts = _a[1];\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\n    react_1.default.useEffect(function () {\n        if (token && token != 'undefined' && token != 'false') {\n            axios_1.default.get('https://oauth.reddit.com/best', {\n                headers: {\n                    Authorization: \"bearer \" + token\n                },\n            }).then(function (resp) {\n                var bestPosts = resp.data.data.children;\n                bestPosts.map(function (post) {\n                    post.text = post.data.title;\n                    post.id = post.data.id;\n                });\n                console.log(bestPosts, 'NEW ! posts');\n                setPosts(bestPosts);\n            })\n                .catch(console.log);\n        }\n    }, [token]);\n    return [posts];\n}\nexports.usePostsData = usePostsData;\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nfunction useUserData() {\n    var _a = react_1.default.useState({\n        name: '',\n        iconImg: '',\n    }), data = _a[0], setData = _a[1];\n    // const token = useContext(tokenContext);\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\n    react_1.default.useEffect(function () {\n        if (token && token != 'undefined' && token != 'false') {\n            axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\n                headers: {\n                    Authorization: \"bearer \" + token\n                },\n            }).then(function (resp) {\n                var userData = resp.data;\n                setData({ name: userData.name, iconImg: userData.icon_img });\n            })\n                .catch(console.log);\n        }\n    }, [token]);\n    return [data];\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.less":
/*!******************************!*\
  !*** ./src/main.global.less ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n});\n\n\n//# sourceURL=webpack:///./src/main.global.less?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nexports.indexTemplate = function (content, token) { /*html*/ return \"\\n  <!DOCTYPE html>\\n  <html lang=\\\"en\\\">\\n  <head>\\n    <title>Reddit</title>\\n    <script src=\\\"static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script>\\n      window.__token__ =  '\" + token + \"';\\n    </script>\\n  </head>\\n  <body>\\n    <div id=\\\"react_root\\\">\" + content + \"</div>\\n    <div id=\\\"modal_root\\\"></div>\\n    <div id=\\\"dropdown_root\\\"></div>\\n  </body>\\n  </html>\\n\"; };\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar app = express_1.default();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', function (req, res) {\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\n});\napp.get('/auth', function (req, res) {\n    // req.query.code;\n    console.log(req.query.code);\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\n        auth: { username: 'vneS-7rxQSk-hA', password: 'NUYRbIcVy7K9tG7nYcog6f7UqACPiA' },\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\n    }).then(function (_a) {\n        var data = _a.data;\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));\n    })\n        .catch(console.log);\n});\napp.listen(3000, function () {\n    console.log('Server just have started on http://localhost:3000 ');\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Card = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_less_1 = __importDefault(__webpack_require__(/*! ./card.less */ \"./src/shared/CardsList/Card/card.less\"));\nvar CardControls_1 = __webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/Card/CardControls/index.ts\");\nvar CardMenu_1 = __webpack_require__(/*! ./CardMenu */ \"./src/shared/CardsList/Card/CardMenu/index.ts\");\nvar CardPreview_1 = __webpack_require__(/*! ./CardPreview */ \"./src/shared/CardsList/Card/CardPreview/index.ts\");\nvar CardTextContent_1 = __webpack_require__(/*! ./CardTextContent */ \"./src/shared/CardsList/Card/CardTextContent/index.ts\");\nfunction Card(_a) {\n    var text = _a.text;\n    return (react_1.default.createElement(\"li\", { className: card_less_1.default.card },\n        react_1.default.createElement(CardTextContent_1.CardTextContent, { className: card_less_1.default.textContent, text: text }),\n        react_1.default.createElement(CardPreview_1.CardPreview, { className: card_less_1.default.preview }),\n        react_1.default.createElement(CardMenu_1.CardMenu, { className: card_less_1.default.menu }),\n        react_1.default.createElement(CardControls_1.CardControls, { className: card_less_1.default.controls })));\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CardControls.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CardControls.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardControls = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar cardcontrols_less_1 = __importDefault(__webpack_require__(/*! ./cardcontrols.less */ \"./src/shared/CardsList/Card/CardControls/cardcontrols.less\"));\nfunction CardControls(_a) {\n    var className = _a.className;\n    return (react_1.default.createElement(\"div\", { className: className },\n        react_1.default.createElement(\"div\", { className: cardcontrols_less_1.default.karmaCounter },\n            react_1.default.createElement(\"button\", { className: cardcontrols_less_1.default.up },\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\n            react_1.default.createElement(\"span\", { className: cardcontrols_less_1.default.karmaValue }, \"234\"),\n            react_1.default.createElement(\"button\", { className: cardcontrols_less_1.default.down },\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })))),\n        react_1.default.createElement(\"div\", { className: cardcontrols_less_1.default.commentCount },\n            react_1.default.createElement(\"button\", null,\n                react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                    react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" }))),\n            react_1.default.createElement(\"span\", { className: cardcontrols_less_1.default.commentValue }, \"27\")),\n        react_1.default.createElement(\"div\", { className: cardcontrols_less_1.default.cardActions },\n            react_1.default.createElement(\"div\", { className: cardcontrols_less_1.default.share },\n                react_1.default.createElement(\"button\", null,\n                    react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                        react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" })))),\n            react_1.default.createElement(\"div\", { className: cardcontrols_less_1.default.plus },\n                react_1.default.createElement(\"button\", null,\n                    react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                        react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\n                        react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" })))))));\n}\nexports.CardControls = CardControls;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/CardControls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/cardcontrols.less":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/cardcontrols.less ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"karmaCounter\": \"cardcontrols__karmaCounter--eYGNU\",\n\t\"commentCount\": \"cardcontrols__commentCount--2K_DJ\",\n\t\"cardActions\": \"cardcontrols__cardActions--1ECtD\",\n\t\"textContent\": \"cardcontrols__textContent--2p0V9\",\n\t\"controls\": \"cardcontrols__controls--3p2Ic\",\n\t\"card\": \"cardcontrols__card--1ywB0\",\n\t\"karmaValue\": \"cardcontrols__karmaValue--2Rd3Z\",\n\t\"up\": \"cardcontrols__up--1xCPH\",\n\t\"down\": \"cardcontrols__down--Yc2C8\",\n\t\"commentValue\": \"cardcontrols__commentValue--35ZV9\",\n\t\"plus\": \"cardcontrols__plus--3kQTe\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/cardcontrols.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/Card/CardControls/CardControls.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenu/CardMenu.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/CardMenu.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardMenu = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar merge_1 = __webpack_require__(/*! ../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\nvar GenericList_1 = __webpack_require__(/*! ../../../GenericList/GenericList */ \"./src/shared/GenericList/GenericList.tsx\");\nvar Icon_1 = __webpack_require__(/*! ../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\nvar CardMenuButton_1 = __webpack_require__(/*! ../CardMenuButton */ \"./src/shared/CardsList/Card/CardMenuButton/index.ts\");\nvar cardmenu_less_1 = __importDefault(__webpack_require__(/*! ./cardmenu.less */ \"./src/shared/CardsList/Card/CardMenu/cardmenu.less\"));\nvar GLIST = [\n    { text: 'Comments', As: 'li', 'icon': Icon_1.EIcons.message, className: 'list_underline_grey card_dropdown' },\n    { text: 'Share', As: 'li', 'icon': Icon_1.EIcons.share, className: 'list_underline_grey card_dropdown' },\n    { text: 'Hide', As: 'li', 'icon': Icon_1.EIcons.hide, className: 'list_underline_grey card_dropdown' },\n    { text: 'Save', As: 'li', 'icon': Icon_1.EIcons.save, className: 'list_underline_grey card_dropdown' },\n    { text: 'Complain', As: 'li', 'icon': Icon_1.EIcons.complain, className: 'card_dropdown' },\n].map(generateRandomIndex_1.generateId);\nfunction CardMenu(_a) {\n    var className = _a.className;\n    var handleItemClickG = function (id) {\n        console.log('clicked item');\n    };\n    return (react_1.default.createElement(\"div\", { className: className },\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(CardMenuButton_1.CardMenuButton, null), onOpen: function () { return console.log('open'); }, onClose: function () { return console.log('close'); } },\n            react_1.default.createElement(\"ul\", { className: cardmenu_less_1.default.Dropdown },\n                react_1.default.createElement(GenericList_1.GenericList, { list: GLIST.map(merge_1.merge({ onClick: handleItemClickG })) })))));\n}\nexports.CardMenu = CardMenu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/CardMenu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenu/cardmenu.less":
/*!**********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/cardmenu.less ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"Dropdown\": \"cardmenu__Dropdown--CV3ep\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/cardmenu.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenu/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenu/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardMenu */ \"./src/shared/CardsList/Card/CardMenu/CardMenu.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenuButton/CardMenuButton.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenuButton/CardMenuButton.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardMenuButton = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar Icon_1 = __webpack_require__(/*! ../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\nvar cardmenubutton_less_1 = __importDefault(__webpack_require__(/*! ./cardmenubutton.less */ \"./src/shared/CardsList/Card/CardMenuButton/cardmenubutton.less\"));\nfunction CardMenuButton(_a) {\n    var className = _a.className;\n    return (react_1.default.createElement(\"button\", { className: cardmenubutton_less_1.default.menuButton },\n        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.menu, size: 16 })));\n}\nexports.CardMenuButton = CardMenuButton;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenuButton/CardMenuButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenuButton/cardmenubutton.less":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenuButton/cardmenubutton.less ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"menuButton\": \"cardmenubutton__menuButton--3BhaG\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenuButton/cardmenubutton.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardMenuButton/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardMenuButton/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardMenuButton */ \"./src/shared/CardsList/Card/CardMenuButton/CardMenuButton.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardMenuButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardPreview/CardPreview.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardPreview/CardPreview.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardPreview = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar cardpreview_less_1 = __importDefault(__webpack_require__(/*! ./cardpreview.less */ \"./src/shared/CardsList/Card/CardPreview/cardpreview.less\"));\nfunction CardPreview(_a) {\n    var className = _a.className;\n    return (react_1.default.createElement(\"div\", { className: className },\n        react_1.default.createElement(\"img\", { className: cardpreview_less_1.default.previewImg, src: \"https://i.pinimg.com/originals/e3/76/a7/e376a7f0d7ee2efe7e822e72565e5597.jpg\" })));\n}\nexports.CardPreview = CardPreview;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardPreview/CardPreview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardPreview/cardpreview.less":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardPreview/cardpreview.less ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"preview\": \"cardpreview__preview--1i6aG\",\n\t\"previewImg\": \"cardpreview__previewImg--3Sct2\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardPreview/cardpreview.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardPreview/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardPreview/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardPreview */ \"./src/shared/CardsList/Card/CardPreview/CardPreview.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardPreview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/CardTextContent.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/CardTextContent.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardTextContent = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Post_1 = __webpack_require__(/*! ../../../Post/Post */ \"./src/shared/Post/Post.tsx\");\nvar cardtextcontent_less_1 = __importDefault(__webpack_require__(/*! ./cardtextcontent.less */ \"./src/shared/CardsList/Card/CardTextContent/cardtextcontent.less\"));\nfunction CardTextContent(_a) {\n    var className = _a.className, text = _a.text;\n    var _b = react_1.useState(false), isModalOpened = _b[0], setIsModalOpened = _b[1];\n    return (react_1.default.createElement(\"div\", { className: className },\n        react_1.default.createElement(\"div\", { className: cardtextcontent_less_1.default.metaData },\n            react_1.default.createElement(\"div\", { className: cardtextcontent_less_1.default.userLink },\n                react_1.default.createElement(\"img\", { className: cardtextcontent_less_1.default.avatar, src: \"https://lh3.googleusercontent.com/ogw/ADGmqu_f9NU9ROp-ELQ_ujFvFE0867_OrRBO-_bdKNrn=s64-c-mo\", alt: \"avatar\" }),\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: cardtextcontent_less_1.default.username }, \"John Petrov\")),\n            react_1.default.createElement(\"span\", { className: cardtextcontent_less_1.default.createdAt },\n                react_1.default.createElement(\"span\", { className: cardtextcontent_less_1.default.publishedLabel }, \"published\\u00A0\"),\n                \"4 hours ago\\u00A0\")),\n        react_1.default.createElement(\"h2\", { className: cardtextcontent_less_1.default.title },\n            react_1.default.createElement(\"a\", { href: \"#post-url\", className: cardtextcontent_less_1.default.postLink, onClick: function () { setIsModalOpened(true); } }, text),\n            isModalOpened && (react_1.default.createElement(Post_1.Post, { onClose: function () { return setIsModalOpened(false); } })))));\n}\nexports.CardTextContent = CardTextContent;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardTextContent/CardTextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/cardtextcontent.less":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/cardtextcontent.less ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"metaData\": \"cardtextcontent__metaData--j1F5p\",\n\t\"userLink\": \"cardtextcontent__userLink--UKlYY\",\n\t\"publishedLabel\": \"cardtextcontent__publishedLabel--2jPkB\",\n\t\"title\": \"cardtextcontent__title--1RhrS\",\n\t\"postLink\": \"cardtextcontent__postLink--1D18C\",\n\t\"username\": \"cardtextcontent__username--RCLMx\",\n\t\"createdAt\": \"cardtextcontent__createdAt--aM3xW\",\n\t\"avatar\": \"cardtextcontent__avatar--2OHKK\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardTextContent/cardtextcontent.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardTextContent */ \"./src/shared/CardsList/Card/CardTextContent/CardTextContent.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardTextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/Card/card.less ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"card\": \"card__card--3x2Yf\",\n\t\"textContent\": \"card__textContent--1c236\",\n\t\"controls\": \"card__controls--pAChK\",\n\t\"menu\": \"card__menu--Av5LH\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.less?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar postsContext_1 = __webpack_require__(/*! ../../context/postsContext */ \"./src/context/postsContext.tsx\");\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\nvar cardslist_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\"));\nfunction CardsList() {\n    var posts = react_1.default.useContext(postsContext_1.postsContext);\n    console.log(posts, 'render posts');\n    return (react_1.default.createElement(\"ul\", { className: cardslist_less_1.default.cardsList }, posts.length ?\n        posts.map(function (_a) {\n            var text = _a.text, id = _a.id;\n            return (react_1.default.createElement(Card_1.Card, { text: text, key: id }));\n        })\n        :\n            react_1.default.createElement(Card_1.Card, { text: 'No posts loaded, this is a plug' })));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/cardslist.less ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"cardsList\": \"cardslist__cardsList--2qEZK\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.less?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar commentform_less_1 = __importDefault(__webpack_require__(/*! ./commentform.less */ \"./src/shared/CommentForm/commentform.less\"));\nfunction CommentForm(_a) {\n    var myRef = _a.myRef, _b = _a.uncontrolled, uncontrolled = _b === void 0 ? true : _b, _c = _a.mainComment, mainComment = _c === void 0 ? false : _c, onChange = _a.onChange, onSubmit = _a.onSubmit, value = _a.value;\n    return (react_1.default.createElement(\"form\", { className: mainComment ? commentform_less_1.default.form : commentform_less_1.default.hidden, onSubmit: onSubmit },\n        uncontrolled\n            ? react_1.default.createElement(\"textarea\", { ref: myRef, className: commentform_less_1.default.input })\n            : react_1.default.createElement(\"textarea\", { ref: myRef, value: value, onChange: onChange, className: commentform_less_1.default.input }),\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_less_1.default.button }, \"Comment\")));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.less":
/*!*************************************************!*\
  !*** ./src/shared/CommentForm/commentform.less ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"input\": \"commentform__input--32X9b\",\n\t\"form\": \"commentform__form--3UJN2\",\n\t\"hidden\": \"commentform__hidden--11Z5o\",\n\t\"button\": \"commentform__button--1LY8t\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.less?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentFormContainer = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\");\nfunction CommentFormContainer(_a) {\n    var myRef = _a.myRef, _b = _a.uncontrolled, uncontrolled = _b === void 0 ? true : _b, _c = _a.mainComment, mainComment = _c === void 0 ? false : _c;\n    /*\n    const store = useStore<RootState>();\n    const value = store.getState().commentText;\n    */\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\n    var dispatch = react_redux_1.useDispatch();\n    // const { onChange } = useContext(commentContext);\n    function handleSubmit(event) {\n        event.preventDefault();\n        console.log(value);\n    }\n    function handleChange(event) {\n        // onChange(event.target.value);\n        dispatch(store_1.updateComment(event.target.value));\n    }\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { myRef: myRef, uncontrolled: uncontrolled, mainComment: mainComment, onChange: handleChange, onSubmit: handleSubmit, value: value }));\n}\nexports.CommentFormContainer = CommentFormContainer;\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/Content/Content.less":
/*!*****************************************!*\
  !*** ./src/shared/Content/Content.less ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"content\": \"Content__content--2Esxc\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.less?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Content_less_1 = __importDefault(__webpack_require__(/*! ./Content.less */ \"./src/shared/Content/Content.less\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (React.createElement(\"main\", { className: Content_less_1.default.content }, children));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Dropdown = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar dropdown_less_1 = __importDefault(__webpack_require__(/*! ./dropdown.less */ \"./src/shared/Dropdown/dropdown.less\"));\nvar DropdownPortal_1 = __webpack_require__(/*! ./DropdownPortal */ \"./src/shared/Dropdown/DropdownPortal.tsx\");\nvar NOOP = function () { };\nfunction Dropdown(_a) {\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\n    var _d = react_1.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\n    var _e = react_1.useState({ x: 0, y: 0 }), dropdownCoords = _e[0], setDropdownCoords = _e[1];\n    var ref = react_1.useRef(null);\n    react_1.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\n    react_1.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\n    var handleOpen = function (event) {\n        event.preventDefault();\n        if (isOpen === undefined) {\n            setIsDropdownOpen(!isDropdownOpen);\n        }\n        var boundings = event.currentTarget.getBoundingClientRect();\n        setDropdownCoords({\n            x: boundings.x,\n            y: event.pageY,\n        });\n    };\n    react_1.useEffect(function () {\n        console.log('useffect dropdown');\n        function handleClick(event) {\n            var _a;\n            console.log('here I am');\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                setIsDropdownOpen(false);\n            }\n        }\n        document.addEventListener('click', handleClick);\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    return (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.container, ref: ref },\n        react_1.default.createElement(\"div\", { onClick: handleOpen, className: dropdown_less_1.default.button }, button),\n        isDropdownOpen && (react_1.default.createElement(DropdownPortal_1.DropdownPortal, { coords: dropdownCoords, children: children, onClick: function () { return setIsDropdownOpen(false); } }))));\n}\nexports.Dropdown = Dropdown;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/DropdownPortal.tsx":
/*!************************************************!*\
  !*** ./src/shared/Dropdown/DropdownPortal.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DropdownPortal = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar dropdown_less_1 = __importDefault(__webpack_require__(/*! ./dropdown.less */ \"./src/shared/Dropdown/dropdown.less\"));\nvar NOOP = function () { };\nfunction DropdownPortal(_a) {\n    var children = _a.children, onClick = _a.onClick, coords = _a.coords;\n    var node = document.querySelector('#dropdown_root');\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: dropdown_less_1.default.listContainer, style: { left: coords.x, top: coords.y } },\n        react_1.default.createElement(\"div\", { className: dropdown_less_1.default.list, onClick: onClick }, children))), node);\n}\nexports.DropdownPortal = DropdownPortal;\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/DropdownPortal.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.less":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.less ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"container\": \"dropdown__container--2mwQP\",\n\t\"listContainer\": \"dropdown__listContainer--3l3i1\",\n\t\"list\": \"dropdown__list--2DXPG\",\n\t\"button\": \"dropdown__button--2tc44\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.less?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GenericList = exports.MyList = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar Icon_1 = __webpack_require__(/*! ../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\nvar genericlist_less_1 = __importDefault(__webpack_require__(/*! ./genericlist.less */ \"./src/shared/GenericList/genericlist.less\"));\nfunction MyList(_a) {\n    var list = _a.list;\n    return (React.createElement(\"ul\", null, list.map(function (item) { return (\n    // <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>\n    React.createElement(\"li\", { key: item.id, onClick: function () { return item.onClick(item.id); } }, item.value)); })));\n}\nexports.MyList = MyList;\nfunction GenericList(_a) {\n    var list = _a.list;\n    var NOOP = function () { };\n    return (React.createElement(React.Fragment, null, list.map(function (_a) {\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? NOOP : _c, className = _a.className, id = _a.id, href = _a.href, icon = _a.icon;\n        return (React.createElement(As, { className: className ? className.split(' ').map(function (el) { return (genericlist_less_1.default[el]); }).join(' ') : '', onClick: function () { return onClick(id); }, key: id, href: href },\n            icon && (React.createElement(Icon_1.Icon, { name: icon, size: 14 })),\n            text));\n    })));\n}\nexports.GenericList = GenericList;\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/genericlist.less":
/*!*************************************************!*\
  !*** ./src/shared/GenericList/genericlist.less ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"list_underline_grey\": \"genericlist__list_underline_grey--20eG4\",\n\t\"card_dropdown\": \"genericlist__card_dropdown--3GX2n\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/genericlist.less?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar header_less_1 = __importDefault(__webpack_require__(/*! ./header.less */ \"./src/shared/Header/header.less\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock/UserBlock */ \"./src/shared/Header/UserBlock/UserBlock.tsx\");\nfunction Header() {\n    return (React.createElement(\"header\", { className: header_less_1.default.header },\n        React.createElement(SearchBlock_1.SearchBlock, null),\n        React.createElement(ThreadTitle_1.ThreadTitle, null),\n        React.createElement(SortBlock_1.SortBlock, null),\n        React.createElement(UserBlock_1.UserBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.less":
/*!********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"searchBlock\": \"SearchBlock__searchBlock--a9kwC\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.less?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar SearchBlock_less_1 = __importDefault(__webpack_require__(/*! ./SearchBlock.less */ \"./src/shared/Header/SearchBlock/SearchBlock.less\"));\nfunction SearchBlock() {\n    return (React.createElement(\"div\", { className: SearchBlock_less_1.default.searchBlock }, \"Search Block\"));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.less":
/*!****************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"sortBlock\": \"SortBlock__sortBlock--1sxEs\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.less?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar SortBlock_less_1 = __importDefault(__webpack_require__(/*! ./SortBlock.less */ \"./src/shared/Header/SortBlock/SortBlock.less\"));\nfunction SortBlock() {\n    return (React.createElement(\"div\", { className: SortBlock_less_1.default.sortBlock }, \"Sort Block\"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.less":
/*!********************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"threadTitle\": \"ThreadTitle__threadTitle--Py9MC\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.less?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar ThreadTitle_less_1 = __importDefault(__webpack_require__(/*! ./ThreadTitle.less */ \"./src/shared/Header/ThreadTitle/ThreadTitle.less\"));\nfunction ThreadTitle() {\n    return (React.createElement(\"div\", { className: ThreadTitle_less_1.default.threadTitle }, \"Thread Title\"));\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/UserBlock/UserBlock.less":
/*!****************************************************!*\
  !*** ./src/shared/Header/UserBlock/UserBlock.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"userBox\": \"UserBlock__userBox--3b0WR\",\n\t\"avatarBox\": \"UserBlock__avatarBox--3e_9z\",\n\t\"avatarImage\": \"UserBlock__avatarImage--3RaK9\",\n\t\"username\": \"UserBlock__username--1sa_r\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/UserBlock/UserBlock.less?");

/***/ }),

/***/ "./src/shared/Header/UserBlock/UserBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/UserBlock/UserBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar userContext_1 = __webpack_require__(/*! ../../../context/userContext */ \"./src/context/userContext.tsx\");\nvar Icon_1 = __webpack_require__(/*! ../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\nvar UserBlock_less_1 = __importDefault(__webpack_require__(/*! ./UserBlock.less */ \"./src/shared/Header/UserBlock/UserBlock.less\"));\nfunction UserBlock() {\n    var data = React.useContext(userContext_1.userContext);\n    var _a = React.useState(0), innerWidth = _a[0], setInnerWidth = _a[1];\n    React.useEffect(function () {\n        setInnerWidth(window.innerWidth);\n    }, [innerWidth]);\n    return (React.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=\" + 'vneS-7rxQSk-hA' + \"&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read identity submit\", className: UserBlock_less_1.default.userBox },\n        React.createElement(\"div\", { className: UserBlock_less_1.default.avatarBox }, data.iconImg\n            ? React.createElement(\"img\", { src: data.iconImg, className: UserBlock_less_1.default.avatarImage })\n            : React.createElement(Icon_1.Icon, { name: Icon_1.EIcons.profile, size: innerWidth && innerWidth < 1024 ? 30 : 50 })),\n        React.createElement(\"div\", { className: UserBlock_less_1.default.username },\n            React.createElement(\"span\", null, data.name || 'Anonymous'))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/header.less":
/*!***************************************!*\
  !*** ./src/shared/Header/header.less ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"header\": \"header__header--2XElO\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.less?");

/***/ }),

/***/ "./src/shared/Icons/ComplainIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/ComplainIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ComplainIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ComplainIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\n}\nexports.ComplainIcon = ComplainIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ComplainIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/HideIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/HideIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HideIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction HideIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#CC6633\" })));\n}\nexports.HideIcon = HideIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/HideIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Icon.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Icon.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Icon = exports.EIcons = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar ComplainIcon_1 = __webpack_require__(/*! ./ComplainIcon */ \"./src/shared/Icons/ComplainIcon.tsx\");\nvar HideIcon_1 = __webpack_require__(/*! ./HideIcon */ \"./src/shared/Icons/HideIcon.tsx\");\nvar MenuIcon_1 = __webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\");\nvar MessageIcon_1 = __webpack_require__(/*! ./MessageIcon */ \"./src/shared/Icons/MessageIcon.tsx\");\nvar SaveIcon_1 = __webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\");\nvar ShareIcon_1 = __webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\");\nvar ProfileIcon_1 = __webpack_require__(/*! ./ProfileIcon */ \"./src/shared/Icons/ProfileIcon.tsx\");\nvar Icons = {\n    menu: MenuIcon_1.MenuIcon,\n    complain: ComplainIcon_1.ComplainIcon,\n    save: SaveIcon_1.SaveIcon,\n    message: MessageIcon_1.MessageIcon,\n    share: ShareIcon_1.ShareIcon,\n    hide: HideIcon_1.HideIcon,\n    profile: ProfileIcon_1.ProfileIcon,\n};\nvar EIcons;\n(function (EIcons) {\n    EIcons[\"menu\"] = \"menu\";\n    EIcons[\"complain\"] = \"complain\";\n    EIcons[\"save\"] = \"save\";\n    EIcons[\"message\"] = \"message\";\n    EIcons[\"share\"] = \"share\";\n    EIcons[\"hide\"] = \"hide\";\n    EIcons[\"profile\"] = \"profile\";\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\nfunction Icon(_a) {\n    var size = _a.size, name = _a.name;\n    var IconName = Icons[name];\n    return react_1.default.createElement(IconName, { size: size });\n}\nexports.Icon = Icon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction MenuIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\n}\nexports.MenuIcon = MenuIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MessageIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/MessageIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MessageIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction MessageIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\n}\nexports.MessageIcon = MessageIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MessageIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ProfileIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/ProfileIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ProfileIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ProfileIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\n}\nexports.ProfileIcon = ProfileIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ProfileIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction SaveIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\n}\nexports.SaveIcon = SaveIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ShareIcon(_a) {\n    var size = _a.size;\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\n}\nexports.ShareIcon = ShareIcon;\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar layout_less_1 = __importDefault(__webpack_require__(/*! ./layout.less */ \"./src/shared/Layout/layout.less\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", { className: layout_less_1.default.layout }, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/layout.less":
/*!***************************************!*\
  !*** ./src/shared/Layout/layout.less ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"layout\": \"layout__layout--3d7Ar\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.less?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Post = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer/CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\");\nvar post_less_1 = __importDefault(__webpack_require__(/*! ./post.less */ \"./src/shared/Post/post.less\"));\nvar PostComments_1 = __webpack_require__(/*! ./PostComments/PostComments */ \"./src/shared/Post/PostComments/PostComments.tsx\");\nfunction Post(props) {\n    var ref = react_1.useRef(null);\n    react_1.useEffect(function () {\n        function handleClick(event) {\n            var _a, _b, _c;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                console.log(event.target, 'Clicke outside the modal window!'); // Каждый клик после ререндера внутренних компонентов будет поподать сюда\n                console.log(ref.current, (_b = ref.current) === null || _b === void 0 ? void 0 : _b.contains(event.target));\n                (_c = props.onClose) === null || _c === void 0 ? void 0 : _c.call(props);\n            }\n        }\n        document.addEventListener('click', handleClick);\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    var node = document.querySelector('#modal_root');\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_less_1.default.modal, ref: ref },\n        react_1.default.createElement(\"h2\", null, \"How to migrate a whole React.js web-app to Typescrypt\"),\n        react_1.default.createElement(\"div\", { className: post_less_1.default.content },\n            react_1.default.createElement(\"p\", null, \"I started studying coding for 2 months, so sorry if I still don't understand a lot of things. I created a wen-app in React.js and Node.js. Unfortunately I discovered that some APIs and SDKs that I will have to use only work with typescripts. How can I convert all files to Tsx? I installed everything I need via npm, renamed the files to ts. yet visualcode detects errors everywhere, Also I had read that files could coexist in js. and ts. for a slower migration and instead i get: \\\"You have both a tsconfig.json and a jsconfig.json. If you are using TypeScript please remove your jsconfig.json file\\\" but if i remove jsconfing.json how can js.files properly work? Deleted jsconfig.json, now there's only tsconfing.json and I get: Error from chokidar (C:\\\\): Error: EBUSY: resource busy or locked, lstat 'C:\\\\hiberfil.sys' Module not found can't resolve style.css in src folder, I tried to find some help on stackoverflow and similar but nothing helpful.\")),\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { mainComment: true, uncontrolled: false }),\n        react_1.default.createElement(PostComments_1.PostComments, null))), node);\n}\nexports.Post = Post;\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/PostComments/PostComments.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Post/PostComments/PostComments.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PostComments = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar commentContext_1 = __webpack_require__(/*! ../../../context/commentContext */ \"./src/context/commentContext.ts\");\nvar CommentFormContainer_1 = __webpack_require__(/*! ../../CommentFormContainer/CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\");\nvar Icon_1 = __webpack_require__(/*! ../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\nvar postcomments_less_1 = __importDefault(__webpack_require__(/*! ./postcomments.less */ \"./src/shared/Post/PostComments/postcomments.less\"));\nfunction commentSearch(arr, search) {\n    var result = false;\n    if (!arr)\n        return false;\n    var i;\n    result = false;\n    for (i = 0; i < arr.length; i++) {\n        if (arr[i] && arr[i].comments) {\n            result = commentSearch(arr[i].comments, search);\n        }\n        if (arr[i].id == search) {\n            result = arr[i];\n            break;\n        }\n    }\n    return result;\n}\nfunction PostComments(_a) {\n    var comments = _a.comments;\n    var _b = react_1.useContext(commentContext_1.commentContext), activeComment = _b.activeComment, onChangeActive = _b.onChangeActive, allComments = _b.allComments, onChangeComments = _b.onChangeComments;\n    var commentsReady;\n    if (!allComments)\n        return null;\n    if (comments && typeof comments !== 'undefined') {\n        commentsReady = comments;\n    }\n    else {\n        commentsReady = allComments;\n    }\n    react_1.useEffect(function () {\n        if (activeComment >= 0) {\n            var our_element = commentSearch(allComments, activeComment);\n            // можно сделать через параметр visible у комментария, но получается сильно сложнее\n            our_element.ref.current.parentNode.style.display === 'none' ? our_element.ref.current.parentNode.style.display = \"flex\" : our_element.ref.current.parentNode.style.display = \"none\";\n            our_element.ref.current.placeholder = 'Dear Guest, enter your comment';\n            our_element.ref.current.focus();\n        }\n    }, [activeComment]);\n    return (react_1.default.createElement(\"div\", null, commentsReady.map(function (_a, index) {\n        var name = _a.name, time = _a.time, text = _a.text, comments = _a.comments, category = _a.category, _b = _a.visibleComment, visibleComment = _b === void 0 ? false : _b, ref = _a.ref, id = _a.id;\n        return (react_1.default.createElement(\"div\", { className: postcomments_less_1.default.commentContainer, key: Math.random() },\n            react_1.default.createElement(\"div\", { className: postcomments_less_1.default.leftCommentBlock },\n                react_1.default.createElement(\"div\", { className: postcomments_less_1.default.karmaCounter },\n                    react_1.default.createElement(\"button\", { className: postcomments_less_1.default.up },\n                        react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                            react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\n                    react_1.default.createElement(\"span\", { className: postcomments_less_1.default.karmaValue }),\n                    react_1.default.createElement(\"button\", { className: postcomments_less_1.default.down },\n                        react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                            react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })))),\n                react_1.default.createElement(\"div\", { className: postcomments_less_1.default.greyPillar })),\n            react_1.default.createElement(\"div\", { className: postcomments_less_1.default.rightCommentBlock },\n                react_1.default.createElement(\"div\", { className: postcomments_less_1.default.metaData },\n                    react_1.default.createElement(\"div\", { className: postcomments_less_1.default.userLink },\n                        react_1.default.createElement(\"img\", { className: postcomments_less_1.default.avatar, src: \"https://cf.bstatic.com/xdata/images/hotel/square200/185864689.jpg?k=5eb72cfa721a10530a817680daf950124600cc58cbf9930cfe5f5439254e3ad8&o=\", alt: \"avatar\" }),\n                        react_1.default.createElement(\"a\", { href: \"#user-url\", className: postcomments_less_1.default.username }, name)),\n                    react_1.default.createElement(\"div\", { className: postcomments_less_1.default.createdAt },\n                        react_1.default.createElement(\"span\", { className: postcomments_less_1.default.publishedLabel }, \"published\\u00A0\"),\n                        time),\n                    react_1.default.createElement(\"div\", { className: postcomments_less_1.default.category }, category)),\n                react_1.default.createElement(\"div\", { className: postcomments_less_1.default.commentText },\n                    react_1.default.createElement(\"p\", null, text),\n                    react_1.default.createElement(\"span\", { className: postcomments_less_1.default.commentAction, onClick: function (e) {\n                            // менять видимость в любом случае нужно, даже если активный коммент не изменился\n                            var our_element = commentSearch(allComments, id);\n                            our_element.ref.current.parentNode.style.display === 'none' ? our_element.ref.current.parentNode.style.display = \"flex\" : our_element.ref.current.parentNode.style.display = \"none\";\n                            our_element.ref.current.focus();\n                            onChangeActive(id);\n                            e.stopPropagation(); // Без этой строчки все уходит в верхний обработчик в Post.tsx, который уже не находит .target этого события внутри модального окна\n                        } },\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.message, size: 14 }),\n                        react_1.default.createElement(\"span\", { \"data-test\": \"\" + Math.random() }, \"Reply\")),\n                    react_1.default.createElement(\"span\", { className: postcomments_less_1.default.commentAction },\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share, size: 14 }),\n                        react_1.default.createElement(\"span\", null, \"Share\")),\n                    react_1.default.createElement(\"span\", { className: postcomments_less_1.default.commentAction },\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.complain, size: 14 }),\n                        react_1.default.createElement(\"span\", null, \"Complain\"))),\n                react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { myRef: ref, uncontrolled: true }),\n                comments &&\n                    react_1.default.createElement(\"div\", { className: postcomments_less_1.default.innerComment },\n                        react_1.default.createElement(PostComments, { comments: comments })))));\n    })));\n}\nexports.PostComments = PostComments;\n\n\n//# sourceURL=webpack:///./src/shared/Post/PostComments/PostComments.tsx?");

/***/ }),

/***/ "./src/shared/Post/PostComments/postcomments.less":
/*!********************************************************!*\
  !*** ./src/shared/Post/PostComments/postcomments.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"metaData\": \"postcomments__metaData--DHk2K\",\n\t\"userLink\": \"postcomments__userLink--2z5tQ\",\n\t\"publishedLabel\": \"postcomments__publishedLabel--NFaST\",\n\t\"title\": \"postcomments__title--1YpHt\",\n\t\"postLink\": \"postcomments__postLink--1jUfX\",\n\t\"greyPillar\": \"postcomments__greyPillar--1BOPk\",\n\t\"commentText\": \"postcomments__commentText--SiqZb\",\n\t\"karmaValue\": \"postcomments__karmaValue--2RT6D\",\n\t\"up\": \"postcomments__up--X8zRJ\",\n\t\"down\": \"postcomments__down--1I0-j\",\n\t\"karmaCounter\": \"postcomments__karmaCounter--1k9Uo\",\n\t\"commentContainer\": \"postcomments__commentContainer--12yiu\",\n\t\"leftCommentBlock\": \"postcomments__leftCommentBlock--3mSit\",\n\t\"rightCommentBlock\": \"postcomments__rightCommentBlock--2eruM\",\n\t\"commentAction\": \"postcomments__commentAction--3p7YP\",\n\t\"category\": \"postcomments__category--3Mja3\",\n\t\"username\": \"postcomments__username--3hLhg\",\n\t\"createdAt\": \"postcomments__createdAt--jXbAL\",\n\t\"avatar\": \"postcomments__avatar--2LMH5\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Post/PostComments/postcomments.less?");

/***/ }),

/***/ "./src/shared/Post/post.less":
/*!***********************************!*\
  !*** ./src/shared/Post/post.less ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"modal\": \"post__modal--FF9ss\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.less?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.rootReducer = exports.setToken = exports.updateComment = void 0;\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\nvar SET_TOKEN = 'SET_TOKEN';\nvar initialState = {\n    commentText: 'Hi! Enter your comment',\n    token: '',\n};\nexports.updateComment = function (text) { return ({\n    type: 'UPDATE_COMMENT',\n    text: text,\n}); };\nexports.setToken = function (token) { return ({\n    type: 'SET_TOKEN',\n    token: token,\n}); };\nexports.rootReducer = function (state, action) {\n    if (state === void 0) { state = initialState; }\n    switch (action.type) {\n        case UPDATE_COMMENT:\n            return __assign(__assign({}, state), { commentText: action.text });\n        case SET_TOKEN:\n            return __assign(__assign({}, state), { token: action.token });\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.assoc = void 0;\nfunction assoc(key, value) {\n    return function (obj) {\n        var _a;\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\n    };\n}\nexports.assoc = assoc;\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/merge.ts":
/*!*******************************!*\
  !*** ./src/utils/js/merge.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.merge = void 0;\nfunction merge(obj) {\n    return function (obj2) { return (__assign(__assign({}, obj), obj2)); };\n}\nexports.merge = merge;\n\n\n//# sourceURL=webpack:///./src/utils/js/merge.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.generateIdNotWorkingCorrectly = exports.generateId = exports.assignId = exports.generateRandomIndex = void 0;\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\n// nano id \nexports.generateRandomIndex = function () {\n    return Math.random().toString(36).substring(2, 15);\n};\nexports.assignId = assoc_1.assoc('id', exports.generateRandomIndex());\n// ==  (obj) => ({..obj,id+STRING})\n//\nexports.generateId = function (obj) { return assoc_1.assoc('id', exports.generateRandomIndex())(obj); }; //  IT WORKS\nexports.generateIdNotWorkingCorrectly = function (obj) { return exports.assignId(obj); }; //  NOT WORKING, SAME KEYS FROM generateRandomIndex ( 1 time run again) !\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ })

/******/ });