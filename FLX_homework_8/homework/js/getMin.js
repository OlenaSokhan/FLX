
function getMin(arr) {
    return arr.reduce(function (a, b) {
        return ( a < b ? a : b );
    });
}

getMin([3, 0, -3]);

