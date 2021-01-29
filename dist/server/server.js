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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.EIcons = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var ComplainIcon_1 = __webpack_require__(30);
var HideIcon_1 = __webpack_require__(31);
var MenuIcon_1 = __webpack_require__(32);
var MessageIcon_1 = __webpack_require__(33);
var SaveIcon_1 = __webpack_require__(34);
var ShareIcon_1 = __webpack_require__(35);
var ProfileIcon_1 = __webpack_require__(36);
var Icons = {
    menu: MenuIcon_1.MenuIcon,
    complain: ComplainIcon_1.ComplainIcon,
    save: SaveIcon_1.SaveIcon,
    message: MessageIcon_1.MessageIcon,
    share: ShareIcon_1.ShareIcon,
    hide: HideIcon_1.HideIcon,
    profile: ProfileIcon_1.ProfileIcon,
};
var EIcons;
(function (EIcons) {
    EIcons["menu"] = "menu";
    EIcons["complain"] = "complain";
    EIcons["save"] = "save";
    EIcons["message"] = "message";
    EIcons["share"] = "share";
    EIcons["hide"] = "hide";
    EIcons["profile"] = "profile";
})(EIcons = exports.EIcons || (exports.EIcons = {}));
function Icon(_a) {
    var size = _a.size, name = _a.name;
    var IconName = Icons[name];
    return react_1.default.createElement(IconName, { size: size });
}
exports.Icon = Icon;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCES = exports.meRequest = exports.ME_REQUEST = void 0;
var axios_1 = __importDefault(__webpack_require__(3));
exports.ME_REQUEST = 'ME_REQUEST';
exports.meRequest = function () { return ({
    type: exports.ME_REQUEST
}); };
exports.ME_REQUEST_SUCCES = 'ME_REQUEST_SUCCES';
exports.meRequestSuccess = function (data) { return ({
    type: exports.ME_REQUEST_SUCCES,
    data: data,
}); };
exports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
exports.meRequestError = function (error) { return ({
    type: exports.ME_REQUEST_ERROR,
    error: error,
}); };
exports.meRequestAsync = function () { return function (dispatch, getState) {
    dispatch(exports.meRequest());
    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {
        headers: {
            Authorization: "bearer " + getState().token
        },
    }).then(function (resp) {
        var userData = resp.data;
        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));
    })
        .catch(function (e) {
        console.log(e);
        dispatch(exports.meRequestError(String(e)));
    });
}; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsContextProvider = exports.postsContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var usePostsData_1 = __webpack_require__(42);
exports.postsContext = react_1.default.createContext([]);
function PostsContextProvider(_a) {
    var children = _a.children;
    var posts = usePostsData_1.usePostsData()[0];
    return (react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children));
}
exports.PostsContextProvider = PostsContextProvider;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"container": "dropdown__container--2mwQP",
	"listContainer": "dropdown__listContainer--3l3i1",
	"list": "dropdown__list--2DXPG",
	"button": "dropdown__button--2tc44"
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentContext = void 0;
var react_1 = __importDefault(__webpack_require__(0));
exports.commentContext = react_1.default.createContext({
    value: '',
    onChange: function () { },
    onChangeActive: function () { },
    activeComment: -1,
    allComments: [],
    onChangeComments: function () { },
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.setToken = exports.updateComment = void 0;
var actions_1 = __webpack_require__(4);
var reducer_1 = __webpack_require__(70);
var UPDATE_COMMENT = 'UPDATE_COMMENT';
var SET_TOKEN = 'SET_TOKEN';
var initialState = {
    commentText: 'Hi! Enter your comment',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    },
};
exports.updateComment = function (text) { return ({
    type: 'UPDATE_COMMENT',
    text: text,
}); };
exports.setToken = function (token) { return ({
    type: 'SET_TOKEN',
    token: token,
}); };
exports.rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UPDATE_COMMENT:
            return __assign(__assign({}, state), { commentText: action.text });
        case SET_TOKEN:
            return __assign(__assign({}, state), { token: action.token });
        case actions_1.ME_REQUEST:
        case actions_1.ME_REQUEST_ERROR:
        case actions_1.ME_REQUEST_SUCCES:
            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });
        default:
            return state;
    }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormContainer = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var reducer_1 = __webpack_require__(10);
var CommentForm_1 = __webpack_require__(74);
function CommentFormContainer(_a) {
    var myRef = _a.myRef, _b = _a.uncontrolled, uncontrolled = _b === void 0 ? true : _b, _c = _a.mainComment, mainComment = _c === void 0 ? false : _c;
    /*
    const store = useStore<RootState>();
    const value = store.getState().commentText;
    */
    var value = react_redux_1.useSelector(function (state) { return state.commentText; });
    var dispatch = react_redux_1.useDispatch();
    // const { onChange } = useContext(commentContext);
    function handleSubmit(data) {
        console.log(data);
    }
    function handleChange(event) {
        // onChange(event.target.value);
        dispatch(reducer_1.updateComment(event.target.value));
    }
    return (react_1.default.createElement(CommentForm_1.CommentForm, { myRef: myRef, uncontrolled: uncontrolled, mainComment: mainComment, onChange: handleChange, onSubmit: handleSubmit, value: value }));
}
exports.CommentFormContainer = CommentFormContainer;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(13));
var server_1 = __importDefault(__webpack_require__(14));
var App_1 = __webpack_require__(15);
var indexTemplate_1 = __webpack_require__(80);
var axios_1 = __importDefault(__webpack_require__(3));
var PORT = process.env.PORT || 3000;
var app = express_1.default();
app.use('/static', express_1.default.static('./dist/client'));
app.get('/auth', function (req, res) {
    // req.query.code;
    console.log(req.query.code);
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=http://localhost:3000/auth", {
        auth: { username: 'vneS-7rxQSk-hA', password: 'NUYRbIcVy7K9tG7nYcog6f7UqACPiA' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }).then(function (_a) {
        var data = _a.data;
        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));
    })
        .catch(console.log);
});
// all routes except the above
app.get('*', function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(PORT, function () {
    console.log("Server just have started on http://localhost:" + PORT);
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(__webpack_require__(0));
var root_1 = __webpack_require__(16);
var Layout_1 = __webpack_require__(17);
__webpack_require__(19);
var Header_1 = __webpack_require__(20);
var Content_1 = __webpack_require__(38);
var CardsList_1 = __webpack_require__(40);
// import { Dropdown } from './shared/Dropdown';
// import { GenericList } from './shared/GenericList/GenericList';
// import { tokenContext } from './context/tokenContext';
// import { useToken } from './hooks/useToken';
var postsContext_1 = __webpack_require__(6);
var commentContext_1 = __webpack_require__(9);
var react_redux_1 = __webpack_require__(1);
var redux_devtools_extension_1 = __webpack_require__(69);
var reducer_1 = __webpack_require__(10);
var redux_1 = __webpack_require__(71);
var redux_thunk_1 = __importDefault(__webpack_require__(72));
var react_router_dom_1 = __webpack_require__(5);
var Post_1 = __webpack_require__(73);
/*
const ping: Middleware = (store) => (next) => (action) => {
  console.log('ping:');
  next(action);
}

const pong: Middleware = (store) => (next) => (action) => {
  console.log('pong:');
  next(action);
}

const  timeout = (ms:number): ThunkAction<void, RootState, unknown, Action<string>>  => (dispatch, getState) => {
  dispatch({type: 'START'});
  setTimeout(() => {
    dispatch({type: 'FINISh'});
  }, ms)
}

*/
var saveToken = function () { return function (dispatch, getState) {
    if (window.__token__) {
        dispatch(reducer_1.setToken(window.__token__));
    }
}; };
var store = redux_1.createStore(reducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
var AppWrapper = function () {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(AppComponent, null)));
};
function AppComponent() {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    react_1.useEffect(function () {
        dispatch(saveToken());
        setMounted(true);
    }, []);
    var _b = react_1.useState(""), commentValue = _b[0], setCommentValue = _b[1];
    var _c = react_1.useState(-1), commentActive = _c[0], setCommentActive = _c[1];
    var CommentProvider = commentContext_1.commentContext.Provider;
    var _d = react_1.useState([
        {
            name: "Artur 1 ",
            time: "1 h ago",
            text: "This is a text comment 1, This is a text comment 1, This is a text comment 1, This is a text comment 1, This is a text comment 1",
            category: "League of Politicans",
            id: 1,
            ref: react_1.useRef(null),
        },
        {
            name: "Artur 2 ",
            time: "2 h ago",
            text: "This is a text comment 2 , This is a text comment 2  , This is a text comment 2 , This is a text comment 2 , This is a text comment 2 ",
            category: "League of Humorists",
            id: 2,
            ref: react_1.useRef(null),
            comments: [
                {
                    name: "Artur 3 ",
                    time: "3 h ago",
                    text: "This is a text comment 3, This is a text comment 3 , This is a text comment 3, This is a text comment 3",
                    category: "League of Novices",
                    id: 3,
                    ref: react_1.useRef(null),
                },
            ]
        },
        {
            name: "Artur 4",
            time: "4  h ago",
            category: "League of Programmers",
            text: "This is a text comment 4, This is a text comment 3 , This is a text comment 3, This is a text comment 4",
            id: 4,
            ref: react_1.useRef(null),
        },
    ]), commentComments = _d[0], setComments = _d[1];
    return (react_1.default.createElement(CommentProvider, { value: {
            value: commentValue,
            onChange: setCommentValue,
            onChangeActive: setCommentActive,
            activeComment: commentActive,
            allComments: commentComments,
            onChangeComments: setComments,
        } }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Content_1.Content, null,
                react_1.default.createElement(postsContext_1.PostsContextProvider, null,
                    react_1.default.createElement(CardsList_1.CardsList, null),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/posts/:id" },
                        react_1.default.createElement(Post_1.Post, null)))))))));
}
exports.App = root_1.hot(function () { return react_1.default.createElement(AppWrapper, null); });


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_less_1 = __importDefault(__webpack_require__(18));
function Layout(_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { className: layout_less_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"layout": "layout__layout--3d7Ar"
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({

});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var React = __importStar(__webpack_require__(0));
var header_less_1 = __importDefault(__webpack_require__(21));
var SearchBlock_1 = __webpack_require__(22);
var ThreadTitle_1 = __webpack_require__(24);
var SortBlock_1 = __webpack_require__(26);
var UserBlock_1 = __webpack_require__(28);
function Header() {
    return (React.createElement("header", { className: header_less_1.default.header },
        React.createElement(SearchBlock_1.SearchBlock, null),
        React.createElement(ThreadTitle_1.ThreadTitle, null),
        React.createElement(SortBlock_1.SortBlock, null),
        React.createElement(UserBlock_1.UserBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"header": "header__header--2XElO"
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var React = __importStar(__webpack_require__(0));
var SearchBlock_less_1 = __importDefault(__webpack_require__(23));
function SearchBlock() {
    return (React.createElement("div", { className: SearchBlock_less_1.default.searchBlock }, "Search Block"));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"searchBlock": "SearchBlock__searchBlock--a9kwC"
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var React = __importStar(__webpack_require__(0));
var ThreadTitle_less_1 = __importDefault(__webpack_require__(25));
function ThreadTitle() {
    return (React.createElement("div", { className: ThreadTitle_less_1.default.threadTitle }, "Thread Title"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"threadTitle": "ThreadTitle__threadTitle--Py9MC"
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var React = __importStar(__webpack_require__(0));
var SortBlock_less_1 = __importDefault(__webpack_require__(27));
function SortBlock() {
    return (React.createElement("div", { className: SortBlock_less_1.default.sortBlock }, "Sort Block"));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"sortBlock": "SortBlock__sortBlock--1sxEs"
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var React = __importStar(__webpack_require__(0));
var useUserData_1 = __webpack_require__(29);
var Icon_1 = __webpack_require__(2);
var UserBlock_less_1 = __importDefault(__webpack_require__(37));
function UserBlock() {
    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;
    var _b = React.useState(0), innerWidth = _b[0], setInnerWidth = _b[1];
    React.useEffect(function () {
        setInnerWidth(window.innerWidth);
    }, [innerWidth]);
    return (React.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=" + 'vneS-7rxQSk-hA' + "&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read identity submit", className: UserBlock_less_1.default.userBox },
        React.createElement("div", { className: UserBlock_less_1.default.avatarBox }, data.iconImg
            ? React.createElement("img", { src: data.iconImg, className: UserBlock_less_1.default.avatarImage })
            : React.createElement(Icon_1.Icon, { name: Icon_1.EIcons.profile, size: innerWidth && innerWidth < 1024 ? 30 : 50 })),
        React.createElement("div", { className: UserBlock_less_1.default.username },
            React.createElement("span", null, loading
                ? React.createElement("span", null, "Loading")
                : data.name || 'Anonymous'))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var actions_1 = __webpack_require__(4);
function useUserData() {
    var data = react_redux_1.useSelector(function (state) { return state.me.data; });
    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });
    var token = react_redux_1.useSelector(function (state) { return state.token; });
    var dispatch = react_redux_1.useDispatch();
    react_1.default.useEffect(function () {
        if (token && token != 'undefined' && token != 'false') {
            dispatch(actions_1.meRequestAsync());
        }
    }, [token]);
    return {
        data: data,
        loading: loading
    };
}
exports.useUserData = useUserData;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplainIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ComplainIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z", fill: "#999999" })));
}
exports.ComplainIcon = ComplainIcon;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function HideIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z", fill: "#CC6633" })));
}
exports.HideIcon = HideIcon;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MenuIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5", fill: "#D9D9D9" }),
        react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function MessageIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" })));
}
exports.MessageIcon = MessageIcon;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function SaveIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" })));
}
exports.SaveIcon = SaveIcon;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ShareIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" })));
}
exports.ShareIcon = ShareIcon;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileIcon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function ProfileIcon(_a) {
    var size = _a.size;
    return (react_1.default.createElement("svg", { width: size, height: size, viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.ProfileIcon = ProfileIcon;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"userBox": "UserBlock__userBox--3b0WR",
	"avatarBox": "UserBlock__avatarBox--3e_9z",
	"avatarImage": "UserBlock__avatarImage--3RaK9",
	"username": "UserBlock__username--1sa_r"
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var React = __importStar(__webpack_require__(0));
var Content_less_1 = __importDefault(__webpack_require__(39));
function Content(_a) {
    var children = _a.children;
    return (React.createElement("main", { className: Content_less_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"content": "Content__content--2Esxc"
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var axios_1 = __importDefault(__webpack_require__(3));
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
var postsContext_1 = __webpack_require__(6);
var Card_1 = __webpack_require__(43);
var cardslist_less_1 = __importDefault(__webpack_require__(68));
function CardsList() {
    var token = react_redux_1.useSelector(function (state) { return state.token; });
    var _a = react_1.useState([]), risingPosts = _a[0], setRisingPosts = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(''), nextAfter = _c[0], setNextAfter = _c[1];
    var _d = react_1.useState(''), errorLoading = _d[0], setErrorLoading = _d[1];
    var _e = react_1.useState(0), loadedCount = _e[0], setLoadedCount = _e[1];
    var bottomDiv = react_1.useRef(null);
    function load() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, after, children_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setLoading(true);
                        setErrorLoading('');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/hot/', {
                                headers: {
                                    Authorization: "bearer " + token
                                },
                                params: {
                                    limit: 10,
                                    after: nextAfter,
                                }
                            })];
                    case 2:
                        _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;
                        setRisingPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });
                        setLoadedCount(function (loadedCount) {
                            if (loadedCount == 2)
                                return 1;
                            return loadedCount + 1;
                        });
                        setNextAfter(after);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        setErrorLoading(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        if (!token || token == 'undefined' || token == 'false')
            return;
        console.log(token, 'token is here');
        console.log('here!');
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting && loadedCount < 2) {
                console.log('intersect is true');
                load();
            }
        }, {
            rootMargin: '10px'
        });
        if (bottomDiv.current) {
            observer.observe(bottomDiv.current);
        }
        return function () {
            if (bottomDiv.current) {
                observer.unobserve(bottomDiv.current);
            }
        };
    }, [bottomDiv.current, token, nextAfter]);
    var posts = react_1.default.useContext(postsContext_1.postsContext);
    console.log(posts, 'render posts');
    return (react_1.default.createElement("ul", { className: cardslist_less_1.default.cardsList },
        risingPosts.length === 0 && !loading && !errorLoading && (react_1.default.createElement("div", null, "There are no posts. Login to see it ;)")),
        risingPosts.map(function (_a) {
            var _b = _a.data, text = _b.text, id = _b.id, title = _b.title;
            return (react_1.default.createElement(Card_1.Card, { text: title, key: id, title: title }));
        }),
        react_1.default.createElement("div", { ref: bottomDiv },
            loading && 'Загрузка..',
            loadedCount >= 2 && (react_1.default.createElement("button", { onClick: load, className: cardslist_less_1.default.loadMore }, "LOAD MORE!")),
            errorLoading && (react_1.default.createElement("div", { role: "alert", style: { textAlign: 'center' } }, errorLoading)))));
}
exports.CardsList = CardsList;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsData = void 0;
var axios_1 = __importDefault(__webpack_require__(3));
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(1);
function usePostsData() {
    var _a = react_1.default.useState([]), posts = _a[0], setPosts = _a[1];
    var token = react_redux_1.useSelector(function (state) { return state.token; });
    react_1.default.useEffect(function () {
        if (token && token != 'undefined' && token != 'false') {
            axios_1.default.get('https://oauth.reddit.com/best', {
                headers: {
                    Authorization: "bearer " + token
                },
            }).then(function (resp) {
                var bestPosts = resp.data.data.children;
                bestPosts.map(function (post) {
                    post.text = post.data.title;
                    post.id = post.data.id;
                });
                console.log(bestPosts, 'NEW ! posts');
                setPosts(bestPosts);
            })
                .catch(console.log);
        }
    }, [token]);
    return [posts];
}
exports.usePostsData = usePostsData;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_less_1 = __importDefault(__webpack_require__(44));
var CardControls_1 = __webpack_require__(45);
var CardMenu_1 = __webpack_require__(48);
var CardPreview_1 = __webpack_require__(62);
var CardTextContent_1 = __webpack_require__(65);
function Card(_a) {
    var text = _a.text, title = _a.title;
    return (react_1.default.createElement("li", { className: card_less_1.default.card },
        react_1.default.createElement(CardTextContent_1.CardTextContent, { className: card_less_1.default.textContent, text: text, title: title }),
        react_1.default.createElement(CardPreview_1.CardPreview, { className: card_less_1.default.preview }),
        react_1.default.createElement(CardMenu_1.CardMenu, { className: card_less_1.default.menu }),
        react_1.default.createElement(CardControls_1.CardControls, { className: card_less_1.default.controls })));
}
exports.Card = Card;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"card": "card__card--3x2Yf",
	"textContent": "card__textContent--1c236",
	"controls": "card__controls--pAChK",
	"menu": "card__menu--Av5LH"
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardControls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var cardcontrols_less_1 = __importDefault(__webpack_require__(47));
function CardControls(_a) {
    var className = _a.className;
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", { className: cardcontrols_less_1.default.karmaCounter },
            react_1.default.createElement("button", { className: cardcontrols_less_1.default.up },
                react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
            react_1.default.createElement("span", { className: cardcontrols_less_1.default.karmaValue }, "234"),
            react_1.default.createElement("button", { className: cardcontrols_less_1.default.down },
                react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#C4C4C4" })))),
        react_1.default.createElement("div", { className: cardcontrols_less_1.default.commentCount },
            react_1.default.createElement("button", null,
                react_1.default.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" }))),
            react_1.default.createElement("span", { className: cardcontrols_less_1.default.commentValue }, "27")),
        react_1.default.createElement("div", { className: cardcontrols_less_1.default.cardActions },
            react_1.default.createElement("div", { className: cardcontrols_less_1.default.share },
                react_1.default.createElement("button", null,
                    react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                        react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" })))),
            react_1.default.createElement("div", { className: cardcontrols_less_1.default.plus },
                react_1.default.createElement("button", null,
                    react_1.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                        react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" })))))));
}
exports.CardControls = CardControls;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"karmaCounter": "cardcontrols__karmaCounter--eYGNU",
	"commentCount": "cardcontrols__commentCount--2K_DJ",
	"cardActions": "cardcontrols__cardActions--1ECtD",
	"textContent": "cardcontrols__textContent--2p0V9",
	"controls": "cardcontrols__controls--3p2Ic",
	"card": "cardcontrols__card--1ywB0",
	"karmaValue": "cardcontrols__karmaValue--2Rd3Z",
	"up": "cardcontrols__up--1xCPH",
	"down": "cardcontrols__down--Yc2C8",
	"commentValue": "cardcontrols__commentValue--35ZV9",
	"plus": "cardcontrols__plus--3kQTe"
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardMenu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var merge_1 = __webpack_require__(50);
var generateRandomIndex_1 = __webpack_require__(51);
var Dropdown_1 = __webpack_require__(53);
var GenericList_1 = __webpack_require__(56);
var Icon_1 = __webpack_require__(2);
var CardMenuButton_1 = __webpack_require__(58);
var cardmenu_less_1 = __importDefault(__webpack_require__(61));
var GLIST = [
    { text: 'Comments', As: 'li', 'icon': Icon_1.EIcons.message, className: 'list_underline_grey card_dropdown' },
    { text: 'Share', As: 'li', 'icon': Icon_1.EIcons.share, className: 'list_underline_grey card_dropdown' },
    { text: 'Hide', As: 'li', 'icon': Icon_1.EIcons.hide, className: 'list_underline_grey card_dropdown' },
    { text: 'Save', As: 'li', 'icon': Icon_1.EIcons.save, className: 'list_underline_grey card_dropdown' },
    { text: 'Complain', As: 'li', 'icon': Icon_1.EIcons.complain, className: 'card_dropdown' },
].map(generateRandomIndex_1.generateId);
function CardMenu(_a) {
    var className = _a.className;
    var handleItemClickG = function (id) {
        console.log('clicked item');
    };
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(CardMenuButton_1.CardMenuButton, null), onOpen: function () { return console.log('open'); }, onClose: function () { return console.log('close'); } },
            react_1.default.createElement("ul", { className: cardmenu_less_1.default.Dropdown },
                react_1.default.createElement(GenericList_1.GenericList, { list: GLIST.map(merge_1.merge({ onClick: handleItemClickG })) })))));
}
exports.CardMenu = CardMenu;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(obj) {
    return function (obj2) { return (__assign(__assign({}, obj), obj2)); };
}
exports.merge = merge;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIdNotWorkingCorrectly = exports.generateId = exports.assignId = exports.generateRandomIndex = void 0;
var assoc_1 = __webpack_require__(52);
// nano id 
exports.generateRandomIndex = function () {
    return Math.random().toString(36).substring(2, 15);
};
exports.assignId = assoc_1.assoc('id', exports.generateRandomIndex());
// ==  (obj) => ({..obj,id+STRING})
//
exports.generateId = function (obj) { return assoc_1.assoc('id', exports.generateRandomIndex())(obj); }; //  IT WORKS
exports.generateIdNotWorkingCorrectly = function (obj) { return exports.assignId(obj); }; //  NOT WORKING, SAME KEYS FROM generateRandomIndex ( 1 time run again) !


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return function (obj) {
        var _a;
        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));
    };
}
exports.assoc = assoc;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importStar(__webpack_require__(0));
var dropdown_less_1 = __importDefault(__webpack_require__(7));
var DropdownPortal_1 = __webpack_require__(55);
var NOOP = function () { };
function Dropdown(_a) {
    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;
    var _d = react_1.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];
    var _e = react_1.useState({ x: 0, y: 0 }), dropdownCoords = _e[0], setDropdownCoords = _e[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);
    react_1.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    var handleOpen = function (event) {
        event.preventDefault();
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
        var boundings = event.currentTarget.getBoundingClientRect();
        setDropdownCoords({
            x: boundings.x,
            y: event.pageY,
        });
    };
    react_1.useEffect(function () {
        console.log('useffect dropdown');
        function handleClick(event) {
            var _a;
            console.log('here I am');
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return (react_1.default.createElement("div", { className: dropdown_less_1.default.container, ref: ref },
        react_1.default.createElement("div", { onClick: handleOpen, className: dropdown_less_1.default.button }, button),
        isDropdownOpen && (react_1.default.createElement(DropdownPortal_1.DropdownPortal, { coords: dropdownCoords, children: children, onClick: function () { return setIsDropdownOpen(false); } }))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownPortal = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(8));
var dropdown_less_1 = __importDefault(__webpack_require__(7));
var NOOP = function () { };
function DropdownPortal(_a) {
    var children = _a.children, onClick = _a.onClick, coords = _a.coords;
    var node = document.querySelector('#dropdown_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: dropdown_less_1.default.listContainer, style: { left: coords.x, top: coords.y } },
        react_1.default.createElement("div", { className: dropdown_less_1.default.list, onClick: onClick }, children))), node);
}
exports.DropdownPortal = DropdownPortal;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = exports.MyList = void 0;
var React = __importStar(__webpack_require__(0));
var Icon_1 = __webpack_require__(2);
var genericlist_less_1 = __importDefault(__webpack_require__(57));
function MyList(_a) {
    var list = _a.list;
    return (React.createElement("ul", null, list.map(function (item) { return (
    // <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
    React.createElement("li", { key: item.id, onClick: function () { return item.onClick(item.id); } }, item.value)); })));
}
exports.MyList = MyList;
function GenericList(_a) {
    var list = _a.list;
    var NOOP = function () { };
    return (React.createElement(React.Fragment, null, list.map(function (_a) {
        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? NOOP : _c, className = _a.className, id = _a.id, href = _a.href, icon = _a.icon;
        return (React.createElement(As, { className: className ? className.split(' ').map(function (el) { return (genericlist_less_1.default[el]); }).join(' ') : '', onClick: function () { return onClick(id); }, key: id, href: href },
            icon && (React.createElement(Icon_1.Icon, { name: icon, size: 14 })),
            text));
    })));
}
exports.GenericList = GenericList;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"list_underline_grey": "genericlist__list_underline_grey--20eG4",
	"card_dropdown": "genericlist__card_dropdown--3GX2n"
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardMenuButton = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Icon_1 = __webpack_require__(2);
var cardmenubutton_less_1 = __importDefault(__webpack_require__(60));
function CardMenuButton(_a) {
    var className = _a.className;
    return (react_1.default.createElement("button", { className: cardmenubutton_less_1.default.menuButton },
        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.menu, size: 16 })));
}
exports.CardMenuButton = CardMenuButton;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"menuButton": "cardmenubutton__menuButton--3BhaG"
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"Dropdown": "cardmenu__Dropdown--CV3ep"
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPreview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var cardpreview_less_1 = __importDefault(__webpack_require__(64));
function CardPreview(_a) {
    var className = _a.className;
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("img", { className: cardpreview_less_1.default.previewImg, src: "https://i.pinimg.com/originals/e3/76/a7/e376a7f0d7ee2efe7e822e72565e5597.jpg" })));
}
exports.CardPreview = CardPreview;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"preview": "cardpreview__preview--1i6aG",
	"previewImg": "cardpreview__previewImg--3Sct2"
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardTextContent = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_router_dom_1 = __webpack_require__(5);
var cardtextcontent_less_1 = __importDefault(__webpack_require__(67));
function CardTextContent(_a) {
    var className = _a.className, text = _a.text, title = _a.title;
    var _b = react_1.useState(false), isModalOpened = _b[0], setIsModalOpened = _b[1];
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", { className: cardtextcontent_less_1.default.metaData },
            react_1.default.createElement("div", { className: cardtextcontent_less_1.default.userLink },
                react_1.default.createElement("img", { className: cardtextcontent_less_1.default.avatar, src: "https://lh3.googleusercontent.com/ogw/ADGmqu_f9NU9ROp-ELQ_ujFvFE0867_OrRBO-_bdKNrn=s64-c-mo", alt: "avatar" }),
                react_1.default.createElement("a", { href: "#user-url", className: cardtextcontent_less_1.default.username }, "John Petrov")),
            react_1.default.createElement("span", { className: cardtextcontent_less_1.default.createdAt },
                react_1.default.createElement("span", { className: cardtextcontent_less_1.default.publishedLabel }, "published\u00A0"),
                "4 hours ago\u00A0")),
        react_1.default.createElement("h2", { className: cardtextcontent_less_1.default.title },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/posts/1", className: cardtextcontent_less_1.default.postLink }, text ? text : title ? title : ''))));
}
exports.CardTextContent = CardTextContent;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"metaData": "cardtextcontent__metaData--j1F5p",
	"userLink": "cardtextcontent__userLink--UKlYY",
	"publishedLabel": "cardtextcontent__publishedLabel--2jPkB",
	"title": "cardtextcontent__title--1RhrS",
	"postLink": "cardtextcontent__postLink--1D18C",
	"username": "cardtextcontent__username--RCLMx",
	"createdAt": "cardtextcontent__createdAt--aM3xW",
	"avatar": "cardtextcontent__avatar--2OHKK"
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"cardsList": "cardslist__cardsList--2qEZK",
	"loadMore": "cardslist__loadMore--2KPfI"
});


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
var actions_1 = __webpack_require__(4);
exports.meReducer = function (state, action) {
    switch (action.type) {
        case actions_1.ME_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case actions_1.ME_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        case actions_1.ME_REQUEST_SUCCES:
            return __assign(__assign({}, state), { data: action.data, loading: false });
        default:
            return state;
    }
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(8));
var react_router_dom_1 = __webpack_require__(5);
var CommentFormContainer_1 = __webpack_require__(11);
var post_less_1 = __importDefault(__webpack_require__(77));
var PostComments_1 = __webpack_require__(78);
function Post(props) {
    var ref = react_1.useRef(null);
    var history = react_router_dom_1.useHistory();
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a, _b, _c;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                console.log(event.target, 'Clicke outside the modal window!'); // Каждый клик после ререндера внутренних компонентов будет поподать сюда
                console.log(ref.current, (_b = ref.current) === null || _b === void 0 ? void 0 : _b.contains(event.target));
                (_c = props.onClose) === null || _c === void 0 ? void 0 : _c.call(props);
                history.push('/');
            }
        }
        document.addEventListener('click', handleClick);
        return function () {
            document.removeEventListener('click', handleClick);
        };
    }, []);
    var node = document.querySelector('#modal_root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: post_less_1.default.modal, ref: ref },
        react_1.default.createElement("h2", null, "How to migrate a whole React.js web-app to Typescrypt"),
        react_1.default.createElement("div", { className: post_less_1.default.content },
            react_1.default.createElement("p", null, "I started studying coding for 2 months, so sorry if I still don't understand a lot of things. I created a wen-app in React.js and Node.js. Unfortunately I discovered that some APIs and SDKs that I will have to use only work with typescripts. How can I convert all files to Tsx? I installed everything I need via npm, renamed the files to ts. yet visualcode detects errors everywhere, Also I had read that files could coexist in js. and ts. for a slower migration and instead i get: \"You have both a tsconfig.json and a jsconfig.json. If you are using TypeScript please remove your jsconfig.json file\" but if i remove jsconfing.json how can js.files properly work? Deleted jsconfig.json, now there's only tsconfing.json and I get: Error from chokidar (C:\\): Error: EBUSY: resource busy or locked, lstat 'C:\\hiberfil.sys' Module not found can't resolve style.css in src folder, I tried to find some help on stackoverflow and similar but nothing helpful.")),
        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { mainComment: true, uncontrolled: false }),
        react_1.default.createElement(PostComments_1.PostComments, null))), node);
}
exports.Post = Post;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var react_1 = __importDefault(__webpack_require__(0));
// import { useForm } from "react-hook-form";
var formik_1 = __webpack_require__(75);
var commentform_less_1 = __importDefault(__webpack_require__(76));
function CommentForm(_a) {
    var myRef = _a.myRef, _b = _a.uncontrolled, uncontrolled = _b === void 0 ? true : _b, _c = _a.mainComment, mainComment = _c === void 0 ? false : _c, onChange = _a.onChange, onSubmit = _a.onSubmit, value = _a.value, error = _a.error;
    // const {handleSubmit, errors} = useForm();
    return (react_1.default.createElement(formik_1.Formik, { initialValues: { commentText: value }, validate: function (values) {
            var errors = {};
            if (!values.commentText) {
                errors.commentText = 'Required';
            }
            else if (values.commentText.length < 10) {
                errors.commentText = 'Min length is 10';
            }
            return errors;
        }, onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
            onSubmit(values);
            setSubmitting(false);
        } }, function (_a) {
        var isSubmitting = _a.isSubmitting, values = _a.values, errors = _a.errors, handleChange = _a.handleChange, handleSubmit = _a.handleSubmit;
        return (react_1.default.createElement("form", { className: mainComment ? commentform_less_1.default.form : commentform_less_1.default.hidden, onSubmit: handleSubmit },
            react_1.default.createElement("textarea", { ref: myRef, name: "commentText", value: values.commentText, onChange: handleChange, className: commentform_less_1.default.input, "aria-invalid": errors.commentText ? 'true' : 'false' }),
            errors.commentText &&
                (react_1.default.createElement("div", null, errors.commentText)),
            react_1.default.createElement("button", { type: "submit", className: commentform_less_1.default.button, disabled: isSubmitting }, "Comment")));
    })
    //   <form className={mainComment?styles.form:styles.hidden} onSubmit={handleSubmit(onSubmit)}>
    //   {uncontrolled
    //     ?<textarea ref={myRef} className={styles.input} />
    //     :<textarea ref={myRef} 
    //     //:<textarea ref={register} 
    //       name="commentField"
    //       value={value} 
    //       onChange={onChange} 
    //       className={styles.input} 
    //       aria-invalid={error ? 'true' : 'false'}
    //       />
    //   }
    //   {error&& 
    //     (<div>
    //       {error}
    //     </div>
    //     )}
    //   <button type="submit" className={styles.button}>Comment</button>
    // </form>
    );
}
exports.CommentForm = CommentForm;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"input": "commentform__input--32X9b",
	"form": "commentform__form--3UJN2",
	"hidden": "commentform__hidden--11Z5o",
	"button": "commentform__button--1LY8t"
});


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"modal": "post__modal--FF9ss"
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostComments = void 0;
var react_1 = __importStar(__webpack_require__(0));
var commentContext_1 = __webpack_require__(9);
var CommentFormContainer_1 = __webpack_require__(11);
var Icon_1 = __webpack_require__(2);
var postcomments_less_1 = __importDefault(__webpack_require__(79));
function commentSearch(arr, search) {
    var result = false;
    if (!arr)
        return false;
    var i;
    result = false;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] && arr[i].comments) {
            result = commentSearch(arr[i].comments, search);
        }
        if (arr[i].id == search) {
            result = arr[i];
            break;
        }
    }
    return result;
}
function PostComments(_a) {
    var comments = _a.comments;
    var _b = react_1.useContext(commentContext_1.commentContext), activeComment = _b.activeComment, onChangeActive = _b.onChangeActive, allComments = _b.allComments, onChangeComments = _b.onChangeComments;
    var commentsReady;
    if (!allComments)
        return null;
    if (comments && typeof comments !== 'undefined') {
        commentsReady = comments;
    }
    else {
        commentsReady = allComments;
    }
    react_1.useEffect(function () {
        if (activeComment >= 0) {
            var our_element = commentSearch(allComments, activeComment);
            // можно сделать через параметр visible у комментария, но получается сильно сложнее
            our_element.ref.current.parentNode.style.display === 'none' ? our_element.ref.current.parentNode.style.display = "flex" : our_element.ref.current.parentNode.style.display = "none";
            our_element.ref.current.placeholder = 'Dear Guest, enter your comment';
            our_element.ref.current.focus();
        }
    }, [activeComment]);
    return (react_1.default.createElement("div", null, commentsReady.map(function (_a, index) {
        var name = _a.name, time = _a.time, text = _a.text, comments = _a.comments, category = _a.category, _b = _a.visibleComment, visibleComment = _b === void 0 ? false : _b, ref = _a.ref, id = _a.id;
        return (react_1.default.createElement("div", { className: postcomments_less_1.default.commentContainer, key: Math.random() },
            react_1.default.createElement("div", { className: postcomments_less_1.default.leftCommentBlock },
                react_1.default.createElement("div", { className: postcomments_less_1.default.karmaCounter },
                    react_1.default.createElement("button", { className: postcomments_less_1.default.up },
                        react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
                    react_1.default.createElement("span", { className: postcomments_less_1.default.karmaValue }),
                    react_1.default.createElement("button", { className: postcomments_less_1.default.down },
                        react_1.default.createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            react_1.default.createElement("path", { d: "M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z", fill: "#C4C4C4" })))),
                react_1.default.createElement("div", { className: postcomments_less_1.default.greyPillar })),
            react_1.default.createElement("div", { className: postcomments_less_1.default.rightCommentBlock },
                react_1.default.createElement("div", { className: postcomments_less_1.default.metaData },
                    react_1.default.createElement("div", { className: postcomments_less_1.default.userLink },
                        react_1.default.createElement("img", { className: postcomments_less_1.default.avatar, src: "https://cf.bstatic.com/xdata/images/hotel/square200/185864689.jpg?k=5eb72cfa721a10530a817680daf950124600cc58cbf9930cfe5f5439254e3ad8&o=", alt: "avatar" }),
                        react_1.default.createElement("a", { href: "#user-url", className: postcomments_less_1.default.username }, name)),
                    react_1.default.createElement("div", { className: postcomments_less_1.default.createdAt },
                        react_1.default.createElement("span", { className: postcomments_less_1.default.publishedLabel }, "published\u00A0"),
                        time),
                    react_1.default.createElement("div", { className: postcomments_less_1.default.category }, category)),
                react_1.default.createElement("div", { className: postcomments_less_1.default.commentText },
                    react_1.default.createElement("p", null, text),
                    react_1.default.createElement("span", { className: postcomments_less_1.default.commentAction, onClick: function (e) {
                            // менять видимость в любом случае нужно, даже если активный коммент не изменился
                            var our_element = commentSearch(allComments, id);
                            our_element.ref.current.parentNode.style.display === 'none' ? our_element.ref.current.parentNode.style.display = "flex" : our_element.ref.current.parentNode.style.display = "none";
                            our_element.ref.current.focus();
                            onChangeActive(id);
                            e.stopPropagation(); // Без этой строчки все уходит в верхний обработчик в Post.tsx, который уже не находит .target этого события внутри модального окна
                        } },
                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.message, size: 14 }),
                        react_1.default.createElement("span", { "data-test": "" + Math.random() }, "Reply")),
                    react_1.default.createElement("span", { className: postcomments_less_1.default.commentAction },
                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share, size: 14 }),
                        react_1.default.createElement("span", null, "Share")),
                    react_1.default.createElement("span", { className: postcomments_less_1.default.commentAction },
                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.complain, size: 14 }),
                        react_1.default.createElement("span", null, "Complain"))),
                react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, { myRef: ref, uncontrolled: true }),
                comments &&
                    react_1.default.createElement("div", { className: postcomments_less_1.default.innerComment },
                        react_1.default.createElement(PostComments, { comments: comments })))));
    })));
}
exports.PostComments = PostComments;


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"metaData": "postcomments__metaData--DHk2K",
	"userLink": "postcomments__userLink--2z5tQ",
	"publishedLabel": "postcomments__publishedLabel--NFaST",
	"title": "postcomments__title--1YpHt",
	"postLink": "postcomments__postLink--1jUfX",
	"greyPillar": "postcomments__greyPillar--1BOPk",
	"commentText": "postcomments__commentText--SiqZb",
	"karmaValue": "postcomments__karmaValue--2RT6D",
	"up": "postcomments__up--X8zRJ",
	"down": "postcomments__down--1I0-j",
	"karmaCounter": "postcomments__karmaCounter--1k9Uo",
	"commentContainer": "postcomments__commentContainer--12yiu",
	"leftCommentBlock": "postcomments__leftCommentBlock--3mSit",
	"rightCommentBlock": "postcomments__rightCommentBlock--2eruM",
	"commentAction": "postcomments__commentAction--3p7YP",
	"category": "postcomments__category--3Mja3",
	"username": "postcomments__username--3hLhg",
	"createdAt": "postcomments__createdAt--jXbAL",
	"avatar": "postcomments__avatar--2LMH5"
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
exports.indexTemplate = function (content, token) { /*html*/ return "\n  <!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <title>Reddit</title>\n    <script src=\"static/client.js\" type=\"application/javascript\"></script>\n    <script>\n      window.__token__ =  '" + token + "';\n    </script>\n  </head>\n  <body>\n    <div id=\"react_root\">" + content + "</div>\n    <div id=\"modal_root\"></div>\n    <div id=\"dropdown_root\"></div>\n  </body>\n  </html>\n"; };


/***/ })
/******/ ]);