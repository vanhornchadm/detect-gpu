// Generated data
import {
  GPU_BENCHMARK_SCORE_DESKTOP,
  GPU_BENCHMARK_SCORE_MOBILE,
} from './__generated__/GPUBenchmark';

// Internal
import { cleanEntryString } from './internal/cleanEntryString';
import { cleanRendererString } from './internal/cleanRendererString';
import { getBenchmarkByPercentage } from './internal/getBenchmarkByPercentage';
import { browser, isDesktop, isMobile, isTablet } from './internal/getBrowserType';
import { getEntryVersionNumber } from './internal/getEntryVersionNumber';
import { getWebGLUnmaskedRenderer } from './internal/getWebGLUnmaskedRenderer';
import { isWebGLSupported } from './internal/isWebGLSupported';

export interface IGetGPUTier {
  glContext?: WebGLRenderingContext | WebGL2RenderingContext;
  mobileBenchmarkPercentages?: number[];
  desktopBenchmarkPercentages?: number[];
  forceRendererString?: string;
  forceMobile?: boolean;
}

export interface GPUInfo {
  tier: number;
  platform: string;
  type: string;
  gpu: string;
  renderer: string;
}

export const getGPUTier = (options: IGetGPUTier = {}): GPUInfo => {
  const mobileBenchmarkPercentages: number[] = options.mobileBenchmarkPercentages || [
    0, // TIER_0
    50, // TIER_1
    30, // TIER_2
    20, // TIER_3
  ];
  const desktopBenchmarkPercentages: number[] = options.desktopBenchmarkPercentages || [
    0, // TIER_0
    50, // TIER_1
    30, // TIER_2
    20, // TIER_3
  ];
  const forceRendererString = options.forceRendererString || '';
  const forceMobile = options.forceMobile || false;

  let tier = 0;
  let platform = 'UNKNOWN';
  let type = 'UNKNOWN';
  let gpu = 'UNKNOWN';
  let renderer = 'UNKNOWN';

  if (isMobile || isTablet || forceMobile) {
    platform = 'MOBILE';
  } else {
    platform = 'DESKTOP';
  }

  if (!forceRendererString) {
    const gl =
      options.glContext ||
      isWebGLSupported({
        browser,
      });

    if (!gl) {
      return {
        tier,
        platform,
        type: 'WEBGL_UNSUPPORTED',
        gpu,
        renderer
      };
    }

    renderer = getWebGLUnmaskedRenderer(gl);
  } else {
    renderer = forceRendererString;
  }

  gpu = cleanRendererString(renderer);
  const rendererVersionNumber = gpu.replace(/[\D]/g, '');

  // GPU BLACKLIST
  // https://wiki.mozilla.org/Blocklisting/Blocked_Graphics_Drivers
  // https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists
  // https://chromium.googlesource.com/chromium/src/+/master/gpu/config/software_rendering_list.json
  // https://chromium.googlesource.com/chromium/src/+/master/gpu/config/gpu_driver_bug_list.json
  const isGPUBlacklisted = /(radeon hd 6970m|radeon hd 6770m|radeon hd 6490m|radeon hd 6630m|radeon hd 6750m|radeon hd 5750|radeon hd 5670|radeon hd 4850|radeon hd 4870|radeon hd 4670|geforce 9400m|geforce 320m|geforce 330m|geforce gt 130|geforce gt 120|geforce gtx 285|geforce 8600|geforce 9600m|geforce 9400m|geforce 8800 gs|geforce 8800 gt|quadro fx 5|quadro fx 4|radeon hd 2600|radeon hd 2400|radeon hd 2600|mali-4|mali-3|mali-2)/.test(
    gpu
  );

  if (isGPUBlacklisted) {
    return {
      tier,
      platform,
      type: 'BLACKLISTED',
      gpu,
      renderer
    };
  }
  if (isMobile || isTablet || forceMobile) {
    const mobileBenchmark = getBenchmarkByPercentage(
      GPU_BENCHMARK_SCORE_MOBILE,
      mobileBenchmarkPercentages
    );

    const isRendererAdreno = gpu.includes('adreno');
    const isRendererApple = gpu.includes('apple');
    const isRendererMali = gpu.includes('mali') && !gpu.includes('mali-t');
    const isRendererMaliT = gpu.includes('mali-t');
    const isRendererNVIDIA = gpu.includes('nvidia');
    const isRendererPowerVR = gpu.includes('powervr');

    mobileBenchmark.forEach((benchmarkTier: string[], index: number): void =>
      benchmarkTier.forEach((benchmarkEntry: string): void => {
        const entry = cleanEntryString(benchmarkEntry);
        const entryVersionNumber = getEntryVersionNumber(entry);

        if (
          (entry.includes('adreno') && isRendererAdreno) ||
          (entry.includes('apple') && isRendererApple) ||
          (entry.includes('mali') && !entry.includes('mali-t') && isRendererMali) ||
          (entry.includes('mali-t') && isRendererMaliT) ||
          (entry.includes('nvidia') && isRendererNVIDIA) ||
          (entry.includes('powervr') && isRendererPowerVR)
        ) {
          if (entryVersionNumber.includes(rendererVersionNumber)) {
            tier = index;
            type = `BENCHMARK`;
          }

          // Handle mobile edge cases
        }
      })
    );

    if (!tier) {
      tier = 1;
      type = 'FALLBACK';
    }

    return {
      tier,
      platform,
      type,
      gpu,
      renderer
    };
  }

  if (isDesktop) {
    const desktopBenchmark = getBenchmarkByPercentage(
      GPU_BENCHMARK_SCORE_DESKTOP,
      desktopBenchmarkPercentages
    );

    const isRendererIntel = gpu.includes('intel');
    const isRendererAMD = gpu.includes('amd');
    const isRendererNVIDIA = gpu.includes('nvidia');

    desktopBenchmark.forEach((benchmarkTier: string[], index: number): void =>
      benchmarkTier.forEach((benchmarkEntry: string): void => {
        const entry = cleanEntryString(benchmarkEntry);
        const entryVersionNumber = getEntryVersionNumber(entry);

        if (
          (entry.includes('intel') && isRendererIntel) ||
          (entry.includes('amd') && isRendererAMD) ||
          (entry.includes('nvidia') && isRendererNVIDIA)
        ) {
          if (entryVersionNumber.includes(rendererVersionNumber)) {
            tier = index;
            type = `BENCHMARK`;
          }

          // Handle desktop edge cases
        }
      })
    );

    if (!tier) {
      tier = 1;
      type = 'FALLBACK';
    }

    return {
      tier,
      platform,
      type,
      gpu,
      renderer
    };
  }

  return {
    tier,
    platform,
    type,
    gpu,
    renderer
  };
};
