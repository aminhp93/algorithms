function merge_sort(arr) {
    if (arr.length < 2) {
        return arr
    }

    var middle = Math.floor(arr.length / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle),
        params = merging_sorted_arrays(merge_sort(left), merge_sort(right));

    // console.log(params)
    // params.unshift(0, arr.length)
    // console.log(params, "1")
    // console.log(arr)
    // arr.splice.apply(arr, params)
    // console.log(arr, "2")


    return params

}


console.log(merge_sort([3, 4, 7, 1, 2]))

function merging_sorted_arrays(left, right) {
    var result = []
    var il = 0
    var ir = 0

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il])
            il += 1
        } else {
            result.push(right[ir])
            ir += 1
        }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
}
console.log(merging_sorted_arrays([1, 2, 13], [4, 5, 6, 7]))
