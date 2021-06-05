let arr = [1, 2, 3, 4, 5324, 3246, 623, 34, 264, 64]

function selectSort(arr) {
    for (let i = 0; i <= arr.length - 2; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]]
        }
    }
    return arr
}

console.log(selectSort(arr));
