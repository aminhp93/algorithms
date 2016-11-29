function factor(x) {
    if (x == 1) {
        return 1
    }
    return factor(x - 1) * x
}

console.log(factor(4))

function iterative_factor(x) {
    result = 1
    for (var i = 1; i <= x; i++) {
        result *= i
    }
    return result
}
console.log(iterative_factor(4))
