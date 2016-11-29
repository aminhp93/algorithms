function quick_sort(arr) {
    var left = []
    var right = []
    if (arr.length <= 1) {
        return arr
    }

    var pivot = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quick_sort(left).concat(pivot, quick_sort(right))

}

console.log(quick_sort([2, 8, 5, 1, 3]))
