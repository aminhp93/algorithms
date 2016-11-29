function selection_sort(arr) {

    for (var i = 0; i < arr.length - 1; i++) {
        var temp = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[temp]) {
                temp = j
            }
        }
        var temp_2 = arr[i]
        arr[i] = arr[temp]
        arr[temp] = temp_2

    }
    return arr
}

console.log(selection_sort([3, 5, 6, 2, 1]))
