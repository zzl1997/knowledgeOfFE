let nums = [-4, -1, -1, 0, 1, 2]

// console.log(nums.sort())
console.log(find_three_sum(nums, 0));

function find_three_sum(arr, target) {
    let res = []
    nums.sort((b, a) => {
        return b - a
    })
    console.log(nums)
    for (let k = 0; k <= arr.length - 3; k++) {

        if (arr[k] === arr[k - 1]) {
            continue
        }
        let i = k + 1
        let j = arr.length - 1

        while (i < j) {
            if (arr[k] + arr[i] + arr[j] === target) {
                res.push([arr[k], arr[i], arr[j]])
                i++
                j--
                while (i < j && arr[i] == arr[i -1]) {
                    i++
                }
                while (i < j && arr[j] === arr[j +1]) {
                    j--
                }
            } else if (arr[k] + arr[i] + arr[j] > target) {
                j--
                while (i < j && arr[j] === arr[j + 1]) {
                    j--
                }

            } else {
                i++
                while (i < j && arr[i] === arr[i - 1]) {
                    i++
                }
            }


        }
    }
    return res
}
