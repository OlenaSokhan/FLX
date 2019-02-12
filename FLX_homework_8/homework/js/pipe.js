function addOne(x) {
    return x + 1
}
function pipe(arr) {
    let add = arr;
    for (let i = 1; i < arguments.length; i++) {
        add = arguments[i](add)

    }
    return add
}

pipe(1, addOne);