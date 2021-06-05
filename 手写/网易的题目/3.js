function maxWater(height) {
    let length = height.length
    if (length <= 2) {
        return 0
    }
    let left = new Array(length)
    left.fill(0)
    let right = new Array(length)
    right.fill(0)
    for (let i = 1; i < length; i++) {
        left[i] = Math.max(left[i - 1], height[i - 1])
    }
    for (let i = length - 2; i > -1; i--) {
        right[i] = Math.max(right[i + 1], height[i + 1])

    }
    let res = 0
    let pool = 0
    for (let i = 1; i < length - 1; i++) {
        let storewater = Math.min(left[i], right[i]) - height[i]
        if (storewater > 0) {
            pool = pool + storewater
            res = Math.max(res, pool)
        } else {
            pool = 0
        }
    }
    return res
    // write code here
}

let arr = [4, 3, 2, 1, 3, 0, 5, 0, 1]
console.log(maxWater(arr));