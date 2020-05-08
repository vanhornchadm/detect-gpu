"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated data
var GPUBenchmark_1 = require("./__generated__/GPUBenchmark");
// Internal
var cleanEntryString_1 = require("./internal/cleanEntryString");
var cleanRendererString_1 = require("./internal/cleanRendererString");
var getBenchmarkByPercentage_1 = require("./internal/getBenchmarkByPercentage");
var getBrowserType_1 = require("./internal/getBrowserType");
var getEntryVersionNumber_1 = require("./internal/getEntryVersionNumber");
var getWebGLUnmaskedRenderer_1 = require("./internal/getWebGLUnmaskedRenderer");
var isWebGLSupported_1 = require("./internal/isWebGLSupported");
exports.getGPUTier = function (options) {
    if (options === void 0) { options = {}; }
    var mobileBenchmarkPercentages = options.mobileBenchmarkPercentages || [
        0,
        50,
        30,
        20,
    ];
    var desktopBenchmarkPercentages = options.desktopBenchmarkPercentages || [
        0,
        50,
        30,
        20,
    ];
    var forceRendererString = options.forceRendererString || '';
    var forceMobile = options.forceMobile || false;
    var tier = 0;
    var platform = 'UNKNOWN';
    var type = 'UNKNOWN';
    var gpu = 'UNKNOWN';
    var renderer = 'UNKNOWN';
    if (getBrowserType_1.isMobile || getBrowserType_1.isTablet || forceMobile) {
        platform = 'MOBILE';
    }
    else {
        platform = 'DESKTOP';
    }
    if (!forceRendererString) {
        var gl = options.glContext ||
            isWebGLSupported_1.isWebGLSupported({
                browser: getBrowserType_1.browser,
            });
        if (!gl) {
            return {
                tier: tier,
                platform: platform,
                type: 'WEBGL_UNSUPPORTED',
                gpu: gpu,
                renderer: renderer
            };
        }
        renderer = getWebGLUnmaskedRenderer_1.getWebGLUnmaskedRenderer(gl);
    }
    else {
        renderer = forceRendererString;
    }
    gpu = cleanRendererString_1.cleanRendererString(renderer);
    var rendererVersionNumber = gpu.replace(/[\D]/g, '');
    // GPU BLACKLIST
    // https://wiki.mozilla.org/Blocklisting/Blocked_Graphics_Drivers
    // https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists
    // https://chromium.googlesource.com/chromium/src/+/master/gpu/config/software_rendering_list.json
    // https://chromium.googlesource.com/chromium/src/+/master/gpu/config/gpu_driver_bug_list.json
    var isGPUBlacklisted = /(radeon hd 6970m|radeon hd 6770m|radeon hd 6490m|radeon hd 6630m|radeon hd 6750m|radeon hd 5750|radeon hd 5670|radeon hd 4850|radeon hd 4870|radeon hd 4670|geforce 9400m|geforce 320m|geforce 330m|geforce gt 130|geforce gt 120|geforce gtx 285|geforce 8600|geforce 9600m|geforce 9400m|geforce 8800 gs|geforce 8800 gt|quadro fx 5|quadro fx 4|radeon hd 2600|radeon hd 2400|radeon hd 2600|mali-4|mali-3|mali-2)/.test(gpu);
    if (isGPUBlacklisted) {
        return {
            tier: tier,
            platform: platform,
            type: 'BLACKLISTED',
            gpu: gpu,
            renderer: renderer
        };
    }
    if (getBrowserType_1.isMobile || getBrowserType_1.isTablet || forceMobile) {
        var mobileBenchmark = getBenchmarkByPercentage_1.getBenchmarkByPercentage(GPUBenchmark_1.GPU_BENCHMARK_SCORE_MOBILE, mobileBenchmarkPercentages);
        var isRendererAdreno_1 = gpu.includes('adreno');
        var isRendererApple_1 = gpu.includes('apple');
        var isRendererMali_1 = gpu.includes('mali') && !gpu.includes('mali-t');
        var isRendererMaliT_1 = gpu.includes('mali-t');
        var isRendererNVIDIA_1 = gpu.includes('nvidia');
        var isRendererPowerVR_1 = gpu.includes('powervr');
        mobileBenchmark.forEach(function (benchmarkTier, index) {
            return benchmarkTier.forEach(function (benchmarkEntry) {
                var entry = cleanEntryString_1.cleanEntryString(benchmarkEntry);
                var entryVersionNumber = getEntryVersionNumber_1.getEntryVersionNumber(entry);
                if ((entry.includes('adreno') && isRendererAdreno_1) ||
                    (entry.includes('apple') && isRendererApple_1) ||
                    (entry.includes('mali') && !entry.includes('mali-t') && isRendererMali_1) ||
                    (entry.includes('mali-t') && isRendererMaliT_1) ||
                    (entry.includes('nvidia') && isRendererNVIDIA_1) ||
                    (entry.includes('powervr') && isRendererPowerVR_1)) {
                    if (entryVersionNumber.includes(rendererVersionNumber)) {
                        tier = index;
                        type = "BENCHMARK";
                    }
                    // Handle mobile edge cases
                }
            });
        });
        if (!tier) {
            tier = 1;
            type = 'FALLBACK';
        }
        return {
            tier: tier,
            platform: platform,
            type: type,
            gpu: gpu,
            renderer: renderer
        };
    }
    if (getBrowserType_1.isDesktop) {
        var desktopBenchmark = getBenchmarkByPercentage_1.getBenchmarkByPercentage(GPUBenchmark_1.GPU_BENCHMARK_SCORE_DESKTOP, desktopBenchmarkPercentages);
        var isRendererIntel_1 = gpu.includes('intel');
        var isRendererAMD_1 = gpu.includes('amd');
        var isRendererNVIDIA_2 = gpu.includes('nvidia');
        desktopBenchmark.forEach(function (benchmarkTier, index) {
            return benchmarkTier.forEach(function (benchmarkEntry) {
                var entry = cleanEntryString_1.cleanEntryString(benchmarkEntry);
                var entryVersionNumber = getEntryVersionNumber_1.getEntryVersionNumber(entry);
                if ((entry.includes('intel') && isRendererIntel_1) ||
                    (entry.includes('amd') && isRendererAMD_1) ||
                    (entry.includes('nvidia') && isRendererNVIDIA_2)) {
                    if (entryVersionNumber.includes(rendererVersionNumber)) {
                        tier = index;
                        type = "BENCHMARK";
                    }
                    // Handle desktop edge cases
                }
            });
        });
        if (!tier) {
            tier = 1;
            type = 'FALLBACK';
        }
        return {
            tier: tier,
            platform: platform,
            type: type,
            gpu: gpu,
            renderer: renderer
        };
    }
    return {
        tier: tier,
        platform: platform,
        type: type,
        gpu: gpu,
        renderer: renderer
    };
};
//# sourceMappingURL=index.js.map