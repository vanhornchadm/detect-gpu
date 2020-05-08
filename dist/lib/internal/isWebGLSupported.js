"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebGLSupported = function (_a) {
    var browser = _a.browser;
    var attributes = {
        alpha: false,
        antialias: false,
        depth: false,
        failIfMajorPerformanceCaveat: true,
        powerPreference: 'high-performance',
        stencil: false,
    };
    // Workaround for Safari 12
    // SEE: https://github.com/TimvanScherpenzeel/detect-gpu/issues/5
    if (typeof browser !== 'boolean' && browser.name === 'Safari' && browser.version.includes('12')) {
        delete attributes.powerPreference;
    }
    // Keep reference to the canvas and context in order to clean up
    // after the necessary information has been extracted
    var canvas = document.createElement('canvas');
    var gl = canvas.getContext('webgl', attributes) || canvas.getContext('experimental-webgl', attributes);
    if (!gl || !(gl instanceof WebGLRenderingContext)) {
        return;
    }
    return gl;
};
//# sourceMappingURL=isWebGLSupported.js.map