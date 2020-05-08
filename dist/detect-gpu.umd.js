!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e=e||self).DetectGPU={})}(this,(function(e){"use strict";var o=["790 - AMD Radeon HD 7290","780 - AMD Radeon HD 8180","778 - AMD Radeon HD 7310","776 - AMD Radeon HD 7340","772 - Intel HD Graphics (Bay Trail)","729 - Intel HD Graphics (Ivy Bridge)","725 - AMD Radeon HD 8210","701 - Intel HD Graphics (Cherry Trail)","700 - AMD Radeon HD 8250","699 - AMD Radeon R6 (Mullins)","698 - AMD Radeon HD 8240","690 - AMD Radeon HD 8280","687 - AMD Radeon R2 (Mullins/Beema/Carrizo-L)","665 - Intel HD Graphics (Haswell)","656 - Intel HD Graphics 400 (Braswell)","655 - Intel HD Graphics (Braswell)","654 - Intel HD Graphics 405 (Braswell)","634 - Intel HD Graphics 500","633 - Intel UHD Graphics 600","632 - AMD Radeon HD 8330","631 - AMD Radeon HD 8350G","618 - AMD Radeon HD 8400","614 - AMD Radeon HD 8450G","605 - Intel HD Graphics 4200","604 - Intel HD Graphics (Broadwell)","603 - AMD Radeon R2 (Stoney Ridge)","602 - AMD Radeon R3 (Mullins/Beema)","601 - AMD Radeon R4 (Kaveri)","600 - AMD Radeon R4 (Beema)","599 - AMD Radeon R5 (Beema/Carrizo-L)","597 - AMD Radeon R4 (Stoney Ridge)","593 - Intel HD Graphics 4000","592 - AMD Radeon HD 7480D","584 - Intel HD Graphics 5300","583 - Intel HD Graphics 505","582 - Intel UHD Graphics 605","553 - Intel HD Graphics 510","552 - AMD Radeon HD 8610G","551 - Intel HD Graphics 610","550 - Intel HD Graphics 4400","549 - Intel HD Graphics 515","541 - AMD Radeon HD 8470D","532 - AMD Radeon HD 8550G","516 - Intel HD Graphics 5000","513 - AMD Radeon HD 7660G","512 - NVIDIA GeForce 710M","509 - AMD Radeon R5 (Kaveri)","508 - AMD Radeon R5 (Carrizo)","507 - Intel HD Graphics 615","506 - Intel UHD Graphics 615","505 - Intel UHD Graphics 617","497 - Qualcomm Adreno 630","494 - Intel HD Graphics 5500","492 - Intel HD Graphics 4600","488 - Intel Iris Graphics 5100","486 - NVIDIA Quadro K610M","485 - Intel HD Graphics 6000","479 - AMD Radeon R5 (Stoney Ridge)","478 - AMD Radeon R5 M420","477 - AMD Radeon R5 M315","475 - AMD Radeon R5 M320","472 - NVIDIA GeForce GT 720M","471 - Intel Iris Graphics 6100","470 - Intel HD Graphics 520","469 - NVIDIA GeForce 820M","468 - NVIDIA GeForce 910M","466 - AMD Radeon RX Vega 3","465 - AMD Radeon R5 M255","464 - AMD Radeon R5 M430","463 - AMD Radeon R5 M330","460 - AMD Radeon HD 7560D","454 - AMD Radeon HD 8650G","438 - NVIDIA Quadro K1000M","436 - AMD Radeon HD 7660D","435 - AMD Radeon R6 M255DX","428 - Intel HD Graphics 5600","418 - AMD FirePro W2100","409 - AMD Radeon R6 (Kaveri)","397 - Qualcomm Adreno 680","396 - Qualcomm Adreno 685","395 - AMD Radeon R6 (Carrizo)","394 - Intel HD Graphics 620","393 - Intel UHD Graphics 620","392 - AMD Radeon R5 (Bristol Ridge)","390 - Intel HD Graphics P530","389 - Intel HD Graphics 530","388 - Intel HD Graphics P630","387 - Intel HD Graphics 630","386 - Intel UHD Graphics P630","385 - Intel UHD Graphics 630","384 - Intel UHD Graphics G1 (Ice Lake 32 EU)","383 - AMD Radeon RX Vega 6","381 - AMD Radeon 610","380 - AMD Radeon 520","379 - AMD Radeon R7 M340","372 - AMD Radeon R7 M440","371 - AMD Radeon 620","370 - AMD Radeon R8 M445DX","367 - NVIDIA GeForce 920M","365 - AMD Radeon R7 M360","362 - AMD Radeon R7 M460","360 - AMD Radeon R7 (Kaveri)","359 - AMD Radeon R7 (Carrizo)","358 - NVIDIA GeForce GT 640M","357 - AMD Radeon R7 (Bristol Ridge)","353 - AMD Radeon R7 M265","349 - AMD FirePro M4100","346 - NVIDIA GeForce GT 730M","336 - AMD FirePro M4000","334 - NVIDIA GeForce 825M","332 - NVIDIA GeForce GT 735M","329 - NVIDIA Quadro K2000M","325 - Intel Iris Graphics 540","324 - NVIDIA GeForce 920MX","323 - Intel Iris Plus Graphics 640","322 - NVIDIA GeForce MX110","321 - NVIDIA GeForce 830M","319 - Intel Iris Plus Graphics 645","318 - AMD Radeon 625","317 - AMD Radeon 530","316 - Intel Iris Graphics 550","315 - NVIDIA GeForce 930M","314 - Intel Iris Plus Graphics 650","313 - NVIDIA GeForce GT 740M","312 - AMD Radeon R7 384 Cores (Kaveri Desktop)","311 - Intel Iris Pro Graphics 5200","310 - AMD Radeon R7 512 Cores (Kaveri Desktop)","307 - NVIDIA GeForce GT 745M","305 - NVIDIA GeForce 840M","304 - NVIDIA Quadro M500M","299 - AMD Radeon R7 M445","298 - Intel Iris Plus Graphics 655","297 - AMD Radeon R9 M375","296 - AMD FirePro W4190M","295 - NVIDIA Quadro M600M","293 - NVIDIA GeForce 930MX","292 - Intel Iris Plus Graphics G4 (Ice Lake 48 EU)","291 - NVIDIA GeForce 940M","290 - AMD Radeon RX Vega 8","289 - NVIDIA Quadro K1100M","288 - NVIDIA Quadro M520","287 - NVIDIA GeForce 940MX","286 - NVIDIA GeForce MX130","285 - Intel Iris Pro Graphics 6200","284 - NVIDIA GeForce GT 750M","279 - AMD FirePro W4100","278 - AMD FirePro W4170M","276 - AMD Radeon R7 M465","274 - AMD Radeon R9 M265X","271 - NVIDIA GeForce 845M","269 - NVIDIA GeForce GT 755M","268 - AMD Radeon R7 250","263 - NVIDIA Quadro K2100M","262 - NVIDIA GeForce MX230","261 - AMD FirePro M5100","260 - AMD FirePro M6000","258 - NVIDIA Quadro K3000M","252 - AMD FirePro W5130M","251 - NVIDIA Maxwell GPU Surface Book (940M, GDDR5)","250 - AMD Radeon RX Vega 9","244 - AMD Radeon R9 M370X","243 - AMD FirePro W5170M","242 - NVIDIA Quadro K3100M","231 - AMD Radeon R9 M470","226 - Intel Iris Pro Graphics 580","225 - Intel Iris Pro Graphics P580","224 - AMD Radeon RX Vega 10","223 - Intel Iris Plus Graphics G7 (Ice Lake 64 EU)","222 - NVIDIA Quadro P500","221 - NVIDIA Quadro K4000M","216 - NVIDIA GeForce 945M","210 - AMD Radeon RX Vega 11","209 - NVIDIA Quadro M620","208 - NVIDIA Quadro M1000M","207 - NVIDIA GeForce GTX 850M","206 - NVIDIA Quadro P520","205 - AMD Radeon R9 M385X","204 - AMD Radeon R9 M470X","203 - AMD Radeon Pro 450","202 - NVIDIA GeForce GTX 950M","194 - NVIDIA GeForce GTX 860M","193 - AMD Radeon Pro WX 3100","192 - AMD Radeon RX 540","191 - AMD Radeon Pro WX 2100","190 - AMD Radeon RX 540X","188 - NVIDIA Quadro K4100M","187 - NVIDIA Quadro K5000M","186 - NVIDIA Quadro M2000M","185 - NVIDIA GeForce MX150","184 - NVIDIA GeForce MX250","183 - NVIDIA Quadro P600","182 - NVIDIA GeForce GT 1030 (Desktop)","181 - AMD Radeon 630","180 - AMD Radeon Pro 455","179 - AMD Radeon Pro 555","178 - AMD Radeon Pro 555X","177 - AMD Radeon Pro WX 3200","176 - AMD Radeon RX 640","175 - AMD Radeon RX 550 (Laptop)","174 - AMD Radeon RX 550X (Laptop)","173 - NVIDIA Quadro P620","172 - NVIDIA Quadro M1200","167 - NVIDIA GeForce GTX 960M","166 - AMD Radeon Pro WX 4130","165 - AMD Radeon Pro 460","164 - AMD Radeon Pro 560","163 - AMD Radeon Pro 560X","161 - AMD FirePro M6100","160 - AMD Radeon R9 M390","157 - AMD Radeon RX 460 (Laptop)","150 - NVIDIA GeForce GTX 870M","149 - NVIDIA Quadro M2200","148 - AMD Radeon RX 560 (Laptop)","147 - AMD Radeon RX 560X (Laptop)","146 - NVIDIA GeForce GTX 965M","144 - AMD Radeon Pro WX 4150","143 - AMD Radeon RX 460 (Desktop)","141 - NVIDIA Quadro P1000","140 - NVIDIA Quadro K5100M","136 - AMD Radeon R9 270X","135 - NVIDIA GeForce GTX 950","134 - NVIDIA GeForce GTX 1050 Max-Q","133 - NVIDIA GeForce GTX 880M","131 - AMD Radeon R7 370","130 - AMD Radeon R9 M395","129 - AMD FirePro W7170M","128 - Intel Xe DG1 (iDG1LP) Mobile","127 - NVIDIA GeForce GTX 1050 (Laptop)","126 - NVIDIA GeForce GTX 1050 (Desktop)","125 - NVIDIA Quadro M3000M","122 - AMD Radeon R9 M485X","121 - AMD Radeon Pro Vega 16","120 - AMD Radeon Pro WX Vega M GL","119 - AMD Radeon RX Vega M GL / 870","118 - NVIDIA GeForce GTX 1050 Ti Max-Q","117 - AMD Radeon R9 M395X","112 - NVIDIA GeForce GTX 970M","111 - NVIDIA Quadro M4000M","110 - NVIDIA Quadro P2000 Max-Q","109 - NVIDIA Quadro P2000","108 - NVIDIA GeForce GTX 1050 Ti (Desktop)","107 - NVIDIA GeForce GTX 1050 Ti (Laptop)","106 - NVIDIA GeForce GTX 960","105 - AMD Radeon R9 380","104 - AMD Radeon R9 280X","103 - NVIDIA Quadro M5000M","102 - AMD Radeon Pro Vega 20","101 - AMD Radeon RX Vega M GH","100 - NVIDIA GeForce GTX 980M","93 - AMD Radeon R9 290X","90 - NVIDIA Quadro T1000 Max-Q","89 - NVIDIA Quadro T1000 (Laptop)","88 - NVIDIA GeForce GTX 1650 Max-Q","87 - AMD Radeon RX 470 (Laptop)","86 - AMD Radeon RX 570 (Laptop)","85 - AMD Radeon RX 570X (Laptop)","84 - AMD Radeon RX 470 (Desktop)","83 - AMD Radeon Pro WX 7100","81 - NVIDIA Quadro P3000 Max-Q","80 - NVIDIA GeForce GTX 1060 Max-Q","79 - NVIDIA GeForce GTX 1650 (Desktop)","78 - NVIDIA GeForce GTX 1650 (Laptop)","77 - NVIDIA GeForce GTX 970","76 - NVIDIA Quadro P3000","75 - AMD Radeon RX 5300M","74 - AMD Radeon RX Vega Mobile","72 - AMD Radeon RX 580 (Laptop)","71 - AMD Radeon RX 580X (Laptop)","70 - NVIDIA Quadro P3200","69 - NVIDIA Quadro P4000 Max-Q","68 - NVIDIA GeForce GTX 1060 (Laptop)","67 - AMD Radeon RX 480 (Desktop)","66 - NVIDIA GeForce GTX 1650 Ti (Desktop)","65 - NVIDIA Quadro T2000 Max-Q","64 - NVIDIA Quadro T2000 (Laptop)","63 - NVIDIA Quadro P4000","62 - AMD Radeon RX 570 (Desktop)","61 - NVIDIA GeForce GTX 1060 (Desktop)","59 - AMD Radeon R9 390X","58 - NVIDIA Quadro M5500","57 - NVIDIA GeForce GTX 980 (Laptop)","56 - AMD Radeon RX 580 (Desktop)","55 - AMD Radeon RX 590 (Desktop)","54 - NVIDIA GeForce GTX 980","53 - AMD Radeon R9 Nano","52 - AMD Radeon R9 Fury","50 - NVIDIA Quadro P5000 Max-Q","49 - NVIDIA GeForce GTX 1660 Ti Max-Q","48 - AMD Radeon RX 5500M","47 - NVIDIA GeForce GTX 1070 Max-Q","46 - NVIDIA GeForce GTX 980 Ti","45 - NVIDIA GeForce GTX 1660 Ti (Laptop)","44 - NVIDIA Quadro P5000","43 - NVIDIA Quadro P4200","42 - NVIDIA GeForce GTX 1660 Ti (Desktop)","41 - NVIDIA GeForce GTX 1070 (Laptop)","39 - AMD Radeon Pro Vega 56","38 - NVIDIA GeForce GTX 1080 Max-Q","37 - NVIDIA GeForce GTX 1070 (Desktop)","36 - NVIDIA Quadro P5200","34 - NVIDIA GeForce RTX 2060 (Laptop)","33 - AMD Radeon RX Vega 56","32 - NVIDIA Quadro RTX 3000 Max-Q","31 - NVIDIA Quadro RTX 3000 (Laptop)","30 - NVIDIA GeForce RTX 2070 Max-Q","29 - NVIDIA GeForce GTX 1070 Ti (Desktop)","28 - NVIDIA GeForce RTX 2060 (Desktop)","27 - NVIDIA Quadro RTX 4000 Max-Q","26 - NVIDIA Quadro RTX 4000 (Laptop)","25 - NVIDIA GeForce GTX 1080 (Laptop)","24 - AMD Radeon RX Vega 64","23 - AMD Radeon RX 5700M","22 - AMD Radeon RX 5700 (Desktop)","21 - NVIDIA GeForce RTX 2060 Super","20 - NVIDIA GeForce RTX 2070 (Laptop)","19 - NVIDIA GeForce GTX 1080 (Desktop)","18 - NVIDIA GeForce RTX 2070 (Desktop)","17 - AMD Radeon RX 5700 XT (Desktop)","16 - AMD Radeon VII","15 - NVIDIA GeForce RTX 2070 Super","14 - NVIDIA GeForce RTX 2080 Max-Q","13 - NVIDIA GeForce GTX 1070 SLI (Laptop)","12 - NVIDIA GeForce GTX 1070 SLI (Desktop)","11 - NVIDIA GeForce GTX 1080 SLI (Laptop)","10 - NVIDIA Titan X Pascal","9 - NVIDIA GeForce GTX 1080 Ti (Desktop)","8 - NVIDIA GeForce RTX 2080 (Laptop)","7 - NVIDIA Quadro RTX 5000 Max-Q","6 - NVIDIA Quadro RTX 5000 (Laptop)","5 - NVIDIA GeForce RTX 2080 (Desktop)","4 - NVIDIA GeForce RTX 2080 Super","3 - NVIDIA Quadro RTX 6000 (Laptop)","2 - NVIDIA GeForce RTX 2080 Ti (Desktop)","1 - NVIDIA Titan RTX"],r=["933 - ARM Mali-200","932 - Qualcomm Adreno 200","931 - PowerVR SGX530","930 - PowerVR SGX531","929 - PowerVR SGX535","928 - Vivante GC800","927 - Qualcomm Adreno 203","926 - Qualcomm Adreno 205","924 - PowerVR SGX540","922 - NVIDIA GeForce ULP (Tegra 2)","921 - ARM Mali-400 MP","920 - ARM Mali-400 MP2","919 - Vivante GC1000+ Dual-Core","918 - Qualcomm Adreno 220","917 - Broadcom VideoCore-IV","916 - NVIDIA GeForce ULP (Tegra 3)","915 - ARM Mali-400 MP4","914 - Vivante GC4000","913 - Qualcomm Adreno 225","905 - Qualcomm Adreno 302","904 - Vivante GC7000UL","903 - ARM Mali-T720","902 - Qualcomm Adreno 304","901 - Qualcomm Adreno 305","900 - Qualcomm Adreno 306","899 - Qualcomm Adreno 308","898 - PowerVR SGX544","897 - ARM Mali-T720 MP2","896 - PowerVR SGX544MP2","895 - PowerVR SGX545","892 - PowerVR SGX543MP2","882 - PowerVR SGX543MP3","874 - ARM Mali-T830 MP1","873 - ARM Mali-450 MP4","872 - ARM Mali-T720 MP4","871 - PowerVR GE8100","870 - PowerVR GE8300","869 - PowerVR GE8320","868 - ARM Mali-T760 MP2","867 - Qualcomm Adreno 320","866 - ARM Mali-T624","865 - PowerVR SGX543MP4","838 - ARM Mali-T830 MP2","837 - Qualcomm Adreno 405","836 - PowerVR G6200","835 - NVIDIA GeForce Tegra 4","830 - ARM Mali-T604 MP4","824 - ARM Mali-T830 MP3","823 - ARM Mali-T860 MP2","819 - Qualcomm Adreno 504","818 - Qualcomm Adreno 505","817 - PowerVR GE8322 / IMG8322","816 - Qualcomm Adreno 506","815 - Qualcomm Adreno 508","814 - Qualcomm Adreno 509","813 - ARM Mali-T628 MP4","812 - PowerVR SGX554MP4","774 - ARM Mali-T760 MP4","773 - ARM Mali-T628 MP6","772 - Intel HD Graphics (Bay Trail)","771 - PowerVR G6400","770 - PowerVR GX6250","769 - PowerVR G6430","768 - Qualcomm Adreno 330","767 - Qualcomm Adreno 510","766 - Qualcomm Adreno 512","765 - Qualcomm Adreno 610","764 - Qualcomm Adreno 612","701 - Intel HD Graphics (Cherry Trail)","688 - ARM Mali-G51 MP4","686 - Qualcomm Adreno 616","685 - Qualcomm Adreno 618","684 - Qualcomm Adreno 418","664 - Qualcomm Adreno 420","663 - PowerVR GX6450","653 - ARM Mali-T880 MP2","652 - ARM Mali-T760 MP6","620 - ARM Mali-T880 MP4","619 - ARM Mali-G72 MP3","598 - Qualcomm Adreno 430","595 - ARM Mali-G71 MP2","594 - ARM Mali-T760 MP8","548 - ARM Mali-G76 MP4","547 - ARM Mali-T880 MP12","546 - Apple A9 / PowerVR GT7600","545 - NVIDIA Tegra K1 Kepler GPU","544 - PowerVR GXA6850","543 - Qualcomm Adreno 530","504 - ARM Mali-G71 MP8","503 - ARM Mali-G72 MP12","502 - ARM Mali-G71 MP20","501 - ARM Mali-G72 MP18","500 - Qualcomm Adreno 540","499 - ARM Mali-G76 MP10","498 - ARM Mali-G76 MP12","497 - Qualcomm Adreno 630","496 - Qualcomm Adreno 640","495 - ARM Mali-G76 MP16","480 - Apple A10 Fusion GPU / PowerVR","391 - NVIDIA Tegra X1 Maxwell GPU","364 - Apple A9X / PowerVR Series 7XT","328 - Apple A10X Fusion GPU / PowerVR","327 - Apple A11 Bionic GPU","326 - Apple A12 Bionic GPU","320 - Apple A13 Bionic GPU","294 - Apple A12X Bionic GPU"],a=function(e){return e.toLowerCase().split("- ")[1].split(" /")[0]},n=function(e,o){var r=0;return o.map((function(o){var a=Math.round(e.length/100*o),n=e.slice(r,r+a);return r+=a,n}))},i=new(function(){function e(e){this.userAgent=e||(window&&window.navigator?window.navigator.userAgent:""),this.isAndroidDevice=!/like android/i.test(this.userAgent)&&/android/i.test(this.userAgent),this.iOSDevice=this.match(1,/(iphone|ipod|ipad)/i).toLowerCase(),"MacIntel"===navigator.platform&&navigator.maxTouchPoints>2&&!window.MSStream&&(this.iOSDevice="ipad")}return e.prototype.match=function(e,o){var r=this.userAgent.match(o);return r&&r.length>1&&r[e]||""},Object.defineProperty(e.prototype,"isMobile",{get:function(){return!this.isTablet&&(/[^-]mobi/i.test(this.userAgent)||"iphone"===this.iOSDevice||"ipod"===this.iOSDevice||this.isAndroidDevice||/nexus\s*[0-6]\s*/i.test(this.userAgent))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTablet",{get:function(){return/tablet/i.test(this.userAgent)&&!/tablet pc/i.test(this.userAgent)||"ipad"===this.iOSDevice||this.isAndroidDevice&&!/[^-]mobi/i.test(this.userAgent)||!/nexus\s*[0-6]\s*/i.test(this.userAgent)&&/nexus\s*[0-9]+/i.test(this.userAgent)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDesktop",{get:function(){return!this.isMobile&&!this.isTablet},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isMacOS",{get:function(){return/macintosh/i.test(this.userAgent)&&{version:this.match(1,/mac os x (\d+(\.?_?\d+)+)/i).replace(/[_\s]/g,".").split(".").map((function(e){return e}))[1]}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isWindows",{get:function(){return/windows /i.test(this.userAgent)&&{version:this.match(1,/Windows ((NT|XP)( \d\d?.\d)?)/i)}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isiOS",{get:function(){return!!this.iOSDevice&&{version:this.match(1,/os (\d+([_\s]\d+)*) like mac os x/i).replace(/[_\s]/g,".")||this.match(1,/version\/(\d+(\.\d+)?)/i)}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isAndroid",{get:function(){return this.isAndroidDevice&&{version:this.match(1,/android[ \/-](\d+(\.\d+)*)/i)}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"browser",{get:function(){var e=this.match(1,/version\/(\d+(\.\d+)?)/i);return/opera/i.test(this.userAgent)?{name:"Opera",version:e||this.match(1,/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(this.userAgent)?{name:"Opera",version:this.match(1,/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||e}:/SamsungBrowser/i.test(this.userAgent)?{name:"Samsung Internet for Android",version:e||this.match(1,/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(this.userAgent)?{name:"Yandex Browser",version:e||this.match(1,/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(this.userAgent)?{name:"UC Browser",version:this.match(1,/(?:ucbrowser)[\s\/](\d+(\.\d+)?)/i)}:/msie|trident/i.test(this.userAgent)?{name:"Internet Explorer",version:this.match(1,/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/(edge|edgios|edga|edg)/i.test(this.userAgent)?{name:"Microsoft Edge",version:this.match(2,/(edge|edgios|edga|edg)\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(this.userAgent)?{name:"Firefox",version:this.match(1,/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)}:/chromium/i.test(this.userAgent)?{name:"Chromium",version:this.match(1,/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||e}:/chrome|crios|crmo/i.test(this.userAgent)?{name:"Chrome",version:this.match(1,/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/safari|applewebkit/i.test(this.userAgent)?{name:"Safari",version:e}:{name:this.match(1,/^(.*)\/(.*) /),version:this.match(2,/^(.*)\/(.*) /)}},enumerable:!0,configurable:!0}),e}()),t=i.browser,A=i.isMobile,D=i.isTablet,M=i.isDesktop,d=function(e){return e.replace(/[\D]/g,"")};e.getGPUTier=function(e){void 0===e&&(e={});var i,I,s=e.mobileBenchmarkPercentages||[0,50,30,20],c=e.desktopBenchmarkPercentages||[0,50,30,20],R=e.forceRendererString||"",l=e.forceMobile||!1,G="",p="";if(R)i=R;else{var u=e.glContext||function(e){var o=e.browser,r={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:!0,powerPreference:"high-performance",stencil:!1};"boolean"!=typeof o&&"Safari"===o.name&&o.version.includes("12")&&delete r.powerPreference;var a=document.createElement("canvas"),n=a.getContext("webgl",r)||a.getContext("experimental-webgl",r);if(n&&n instanceof WebGLRenderingContext)return n}({browser:t});if(!u)return A||D||l?{tier:"GPU_MOBILE_TIER_0",type:"WEBGL_UNSUPPORTED"}:{tier:"GPU_DESKTOP_TIER_0",type:"WEBGL_UNSUPPORTED"};i=function(e){var o=e.getExtension("WEBGL_debug_renderer_info");return o&&e.getParameter(o.UNMASKED_RENDERER_WEBGL)}(u)}(I=i.toLowerCase()).includes("angle (")&&I.includes("direct3d")&&(I=I.replace("angle (","").split(" direct3d")[0]),I.includes("nvidia")&&I.includes("gb")&&(I=I.split(/\dgb/)[0]);var V=(i=I).replace(/[\D]/g,"");if(/(radeon hd 6970m|radeon hd 6770m|radeon hd 6490m|radeon hd 6630m|radeon hd 6750m|radeon hd 5750|radeon hd 5670|radeon hd 4850|radeon hd 4870|radeon hd 4670|geforce 9400m|geforce 320m|geforce 330m|geforce gt 130|geforce gt 120|geforce gtx 285|geforce 8600|geforce 9600m|geforce 9400m|geforce 8800 gs|geforce 8800 gt|quadro fx 5|quadro fx 4|radeon hd 2600|radeon hd 2400|radeon hd 2600|mali-4|mali-3|mali-2)/.test(i))return A||D||l?{tier:"GPU_MOBILE_TIER_0",type:"BLACKLISTED"}:{tier:"GPU_DESKTOP_TIER_0",type:"BLACKLISTED"};if(A||D||l){var m=n(r,s),h=i.includes("adreno"),P=i.includes("apple"),X=i.includes("mali")&&!i.includes("mali-t"),N=i.includes("mali-t"),T=i.includes("nvidia"),g=i.includes("powervr");return m.forEach((function(e,o){return e.forEach((function(e){var r=a(e),n=d(r);(r.includes("adreno")&&h||r.includes("apple")&&P||r.includes("mali")&&!r.includes("mali-t")&&X||r.includes("mali-t")&&N||r.includes("nvidia")&&T||r.includes("powervr")&&g)&&n.includes(V)&&(G="GPU_MOBILE_TIER_"+o,p="BENCHMARK - "+r)}))})),G||(G="GPU_MOBILE_TIER_1",p="FALLBACK"),{tier:G,type:p}}if(M){var F=n(o,c),Q=i.includes("intel"),f=i.includes("amd"),v=i.includes("nvidia");return F.forEach((function(e,o){return e.forEach((function(e){var r=a(e),n=d(r);(r.includes("intel")&&Q||r.includes("amd")&&f||r.includes("nvidia")&&v)&&n.includes(V)&&(G="GPU_DESKTOP_TIER_"+o,p="BENCHMARK - "+r)}))})),G||(G="GPU_DESKTOP_TIER_1",p="FALLBACK"),{tier:G,type:p}}return{tier:G,type:p}},Object.defineProperty(e,"__esModule",{value:!0})}));
