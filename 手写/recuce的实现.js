let arr = [1, 2, 3]
let res = arr.reduce((accum, cur) => {
    return accum + cur
}, 0)
console.log(res)

Array.prototype.Myreduce = function (fn, initialValue) {
    let arr = Array.prototype.slice.call(this)
    let res, startindex
    res = initialValue ? initialValue : arr[0]
    startindex = initialValue ? 0 : 1
    for (let i = startindex; i < arr.length; i++) {
        res = fn.call(null, res, arr[i], i, this)
    }
    return res
}

res = arr.Myreduce((accum, cur) => {
    return accum + cur
}, 0)
console.log(res)
