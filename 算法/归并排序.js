function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor((0 + arr.length-1) / 2)
    let arr_left = mergeSort(arr.slice(0, mid))
    let arr_right = mergeSort(arr.slice(mid))

    return merge(arr_left, arr_right)
}

function merge(arr_left, arr_right) {
    let i = arr_left.length - 1
    let j = arr_right.length - 1
    let k = i + j + 1
    while (i >= 0 && j >= 0) {
        if (arr_left[i] >= arr_right[j]) {
            arr_left[k--] = arr_left[i--]
        } else {
            arr_left[k--] = arr_right[j--]
        }
    }
    while (i >= 0) {
        arr_left[k--] = arr_left[i--]
    }
    while (j >= 0) {
        arr_left[k--] = arr_left[j--]
    }
    return arr_left
}

console.log(mergeSort([1, 24, 5, 53, 63, 46, 46, 264, 26]));