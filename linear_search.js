function linear_search(arr, number) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            return i
        }
    }
    return false
}
console.log(linear_search([1, 2, 3, 4, 5], 5))
