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
export declare const getGPUTier: (options?: IGetGPUTier) => GPUInfo;
