"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebGLUnmaskedRenderer = function (gl) {
    var glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');
    var renderer = glExtensionDebugRendererInfo &&
        gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);
    return renderer;
};
//# sourceMappingURL=getWebGLUnmaskedRenderer.js.map