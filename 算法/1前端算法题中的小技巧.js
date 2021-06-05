// 创建一个指定长度、同时每一个元素的值也都确定的一维数组数组
let arr = new Array(7).fill(Infinity)


//初始化二维数组的方法
arr = new Array(7)
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(7).fill(1)
}


let arr1 = [1, 2]
arr1.splice(1,0,3)
console.log(arr1)



// 删除掉任意索引的方法
let arr2=[1,2,3]
arr2.splice(1, 1)
console.log(arr2)

arr = ['haha', 1, {a: 1}]
// 当arr里面的元素类型不同的时候，它对应的就是一段非连续的内存。
// 此时，JS 数组不再具有数组的特征，其底层使用哈希映射分配内存空间，是由对象链表来实现的。


console.log(arr)
console.log()