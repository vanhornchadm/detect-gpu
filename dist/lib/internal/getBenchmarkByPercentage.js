"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get benchmark entry's by percentage of the total benchmark entries
exports.getBenchmarkByPercentage = function (benchmark, percentages) {
    var chunkOffset = 0;
    var benchmarkTiers = percentages.map(function (percentage) {
        var chunkSize = Math.round((benchmark.length / 100) * percentage);
        var chunk = benchmark.slice(chunkOffset, chunkOffset + chunkSize);
        chunkOffset += chunkSize;
        return chunk;
    });
    return benchmarkTiers;
};
//# sourceMappingURL=getBenchmarkByPercentage.js.map