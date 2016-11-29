function fibo(x) {
    if (x == 0) {
        return 0
    }
    if (x == 1) {
        return 1
    }

    return fibo(x - 1) + fibo(x - 2)
}

console.log(fibo(6))

function iterative_fibo(num) {
    var x = 0
    var y = 1
    for (var i = 2; i <= num; i++) {
        var z = y + x
        x = y
        y = z

    }
    return y
}
console.log(iterative_fibo(6))
