"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.scss");
var baseClass = 'after-dashboard';
var AfterDashboard = function () {
    return (react_1.default.createElement("div", { className: baseClass },
        react_1.default.createElement("h4", null, "This component was added by the plugin"),
        react_1.default.createElement("h5", null,
            "Find it here: ",
            react_1.default.createElement("code", null, "src/components/afterDashboard"))));
};
exports.default = AfterDashboard;
