"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Vendor
var detect_ua_1 = require("detect-ua");
var device = new detect_ua_1.DetectUA();
exports.browser = device.browser, exports.isMobile = device.isMobile, exports.isTablet = device.isTablet, exports.isDesktop = device.isDesktop;
//# sourceMappingURL=getBrowserType.js.map