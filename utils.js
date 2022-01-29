export function makeStatsString(climateCount, landscapeCount, architectureCount) {
    return `You changed the climate ${climateCount} ${timesOrTime(climateCount)}, the landscape ${landscapeCount} ${timesOrTime(landscapeCount)}, and the architecture ${architectureCount} ${timesOrTime(architectureCount)}`;
}

function timesOrTime(count) {
    if (count === 1) {
        return 'time';
    } else {
        return 'times';
    }
}