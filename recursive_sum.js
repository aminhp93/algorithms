function sum(x) {
    if (x == 1) {
        return 1
    }
    return sum(x - 1) + x
}

console.log(sum(3))

function iterative_sum(x) {
    result = 0
    for (var i = 1; i <= x; i++) {
        result += i
    }
    return result
}
console.log(iterative_sum(3))
