let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let input = 10

console.log(binary_search(arr, 7));


function binary_search(arr, input) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor(left + right)
        if (arr[mid] === input) {
            return mid
        } else if (arr[mid] > input) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return 'not find'
}
