

var nums = [2, 7, 11, 15]
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        var left = target - nums[i]
        if (map.has(left)) {
            return [map.get(left), i]
        } else {
            map.set(nums[i], i)
        }

    }

}
twoSum(nums,9)