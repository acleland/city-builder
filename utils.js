export function createCountString(type, count) {
    return `${type} modified ${count} ${timesOrTime(count)}`;
}

function timesOrTime(count) {
    if (count === 1) {
        return 'time';
    } else {
        return 'times';
    }
}