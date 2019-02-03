var a = prompt('Input a');
var b = prompt('Input b');
var c = prompt('Input c');
var math_sqrt;
var value1;
var value2;
var value3;
if (isNaN(a) || isNaN(b) || isNaN(c) || (a === 0)) {
    alert('Invalid input data')
}

var d = b * b - 4 * a * c;
if (d === 0) {
    value3 = (-b) / (2 * a);
    alert('x:' + value3)
} else if (d > 0) {
    math_sqrt = Math.sqrt(d);
    value1 = (-b + math_sqrt) / (2 * a);
    value2 = (-b - math_sqrt) / (2 * a);
    alert('x1:' + value1);
    alert('x2:' + value2)
} else if (d < 0) {
    alert('no solution')
}
