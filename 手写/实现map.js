// [1,2,3].map(()=>{},)
let arr = [1, 2, 3]

arr = arr.map((item) => {
    return item + 1
})
console.log(arr)


Array.prototype.Map = function (fn, context) {
    let arr = [].slice.call(this)
    // 复制了一个参数
    let mappedArr = []
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(fn.call(context, arr[i], i, this))
    }
    return mappedArr
}

arr = arr.Map((item) => {
    return item + 1
})
console.log(arr)
