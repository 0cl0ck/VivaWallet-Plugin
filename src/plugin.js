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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.samplePlugin = void 0;
var onInitExtension_1 = require("./onInitExtension");
var webpack_1 = require("./webpack");
var AfterDashboard_1 = __importDefault(require("./components/AfterDashboard"));
var newCollection_1 = __importDefault(require("./newCollection"));
var samplePlugin = function (pluginOptions) {
    return function (incomingConfig) {
        var _a, _b, _c;
        var config = __assign({}, incomingConfig);
        // If you need to add a webpack alias, use this function to extend the webpack config
        var webpack = (0, webpack_1.extendWebpackConfig)(incomingConfig);
        config.admin = __assign(__assign({}, (config.admin || {})), { 
            // If you extended the webpack config, add it back in here
            // If you did not extend the webpack config, you can remove this line
            webpack: webpack, 
            // Add additional admin config here
            components: __assign(__assign({}, (((_a = config.admin) === null || _a === void 0 ? void 0 : _a.components) || {})), { 
                // Add additional admin components here
                afterDashboard: __spreadArray(__spreadArray([], (((_c = (_b = config.admin) === null || _b === void 0 ? void 0 : _b.components) === null || _c === void 0 ? void 0 : _c.afterDashboard) || []), true), [
                    AfterDashboard_1.default,
                ], false) }) });
        // If the plugin is disabled, return the config without modifying it
        // The order of this check is important, we still want any webpack extensions to be applied even if the plugin is disabled
        if (pluginOptions.enabled === false) {
            return config;
        }
        config.collections = __spreadArray(__spreadArray([], (config.collections || []), true), [
            // Add additional collections here
            newCollection_1.default, // delete this line to remove the example collection
        ], false);
        config.endpoints = __spreadArray(__spreadArray([], (config.endpoints || []), true), [
            {
                path: '/custom-endpoint',
                method: 'get',
                root: true,
                handler: function (req, res) {
                    res.json({ message: 'Here is a custom endpoint' });
                },
            },
        ], false);
        config.globals = __spreadArray([], (config.globals || []), true);
        config.hooks = __assign({}, (config.hooks || {}));
        config.onInit = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!incomingConfig.onInit) return [3 /*break*/, 2];
                        return [4 /*yield*/, incomingConfig.onInit(payload)
                            // Add additional onInit code by using the onInitExtension function
                        ];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Add additional onInit code by using the onInitExtension function
                        (0, onInitExtension_1.onInitExtension)(pluginOptions, payload);
                        return [2 /*return*/];
                }
            });
        }); };
        return config;
    };
};
exports.samplePlugin = samplePlugin;
