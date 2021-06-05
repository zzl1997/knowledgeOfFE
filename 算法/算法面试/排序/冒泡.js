let arr = [1, 2, 3, 4, 25365, 246, 35, 54, 734, 374]

function bubble1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubble1(arr))

function bubble(arr) {
    for (let i = 0; i < arr.length-1; i++) {

        for (let j = 0; j <= arr.length-2-i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubble(arr));