// function binary_search(arr, number, min, max) {
//     if (!min) {
//         min = 0
//     }

//     if (!max) {
//         max = arr.length - 1
//     }

//     if (max < min) {
//         return -1
//     }

//     midpoint = Math.floor((min + max) / 2)
//     if (arr[midpoint] < number) {
//         console.log(midpoint)
//         binary_search(arr, number, midpoint + 1, max)
//     } else if (arr[midpoint] > number) {
//         console.log(midpoint)
//         binary_search(arr, number, min, midpoint - 1)
//     } else {
//         return midpoint
//     }


// }
function binarySearch(array, target, max, min) {

    //Find the Midpoint between forced max and minimum domain of the array
    var mid = ((max - min) >> 1) + min;
    //alert("Midpoint Number" + mid);
    console.log(mid);
    console.log(array[mid], "target: " + target);

    if (array[mid] === target) {
        //Target Value found
        console.log('match', array[mid], target);
        //alert('match', array[mid], target);
        return mid;
    } else if (mid === 0) {
        //All Value have been checked, and none are the target value, return sentinel value
        return -1;
    } else if (array[mid] > target) {
        //Value at Midpoint is greater than target Value, set new maximum to current midpoint
        max = mid;
        console.log('mid lower', array[mid], target);
        //alert('mid lower', array[mid], target);
        //Call binarySearch with new search domain
        return binarySearch(array, target, max, min);
    } else if (array[mid] < target) {
        // Value at Midpoint is less than the target Value, set new minimum to current midpoint
        min = mid;
        console.log('mid higher', array[mid], target);
        //alert('mid higher', array[mid], target);

        //Call binarySearch with new search domain
        return binarySearch(array, target, max, min);
    }
}
console.log(binarySearch([1, 2, 3, 4, 5], 2))

// function binary_search_iterative(arr, number) {
//     var min = 0
//     var max = arr.length - 1
//     var currentIndex

//     while (min <= max) {
//         currentIndex = Math.floor((min + max) / 2)
//         if (arr[currentIndex] < number) {
//             min = currentIndex + 1
//         } else if (arr[currentIndex] > number) {
//             max = currentIndex - 1

//         } else {
//             return currentIndex
//         }
//     }
//     return -1
// }

// console.log(binary_search_iterative([1, 2, 3, 4, 5], 5))
