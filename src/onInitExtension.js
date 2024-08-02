"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onInitExtension = void 0;
var onInitExtension = function (pluginOptions, payload) {
    var app = payload.express;
    if (!app)
        return;
    try {
        // You can use the existing express app here to add middleware, routes, etc.
        // app.use(...)
    }
    catch (err) {
        payload.logger.error({ msg: 'Error in onInitExtension', err: err });
    }
};
exports.onInitExtension = onInitExtension;
