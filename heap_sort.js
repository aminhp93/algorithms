function heap_sort(arr) {
    var n = arr.length

    for (var i = n; i > -1; i--) {
        heapify(arr, n, i)
    }
    console.log(arr, "asfd")
    for (var i = n - 1; i > 0; i--) {
        var temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        heapify(arr, i, 0)
    }
    return arr
}


function heapify(arr, n, i) {
    console.log(i)
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2

    if (l < n && arr[i] < arr[l]) {
        largest = l
        console.log(largest, "left")
    }

    if (r < n && arr[largest] < arr[r]) {
        largest = r
        console.log(largest, "right")
    }

    if (largest != i) {
        var temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp


        heapify(arr, n, largest)
    }
    console.log(arr, "minh")
}

console.log(heap_sort([4, 1, 5, 2]))
