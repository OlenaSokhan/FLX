function formatTime(min) {
    let m = min;
    let d = 24 * 60;
    let h = 60;

    let day = Math.floor(m / d);
    let hour = Math.floor((m - (day * d)) / h);
    let minute = m - (day * d) - (hour * h);

    return day + 'day(s),' + hour + 'hour(s),' + minute + 'minute(s).'
}

console.log(formatTime(120))

