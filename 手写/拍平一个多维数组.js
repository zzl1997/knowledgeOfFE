let multi_arr = [1, [2, [3, [4, 5]]], 6];
// to  [ 1, 2, 3, 4, 5, 6 ]
let str = JSON.stringify(multi_arr)
//' [1,[2,[3,[4,5]]],6]'
arr_flat = multi_arr.flat(Infinity);

arr_flat = str.replace(/[\[\]]/g, '').split(",").map((item) => {
    return parseInt(item)
})

// console.log(JSON.stringify([1, 2, 3, 4, 5, 6])); // '[1,2,3,4,5,6]'
arr_flat = JSON.parse('[' + str.replace(/[\[\]]/g, '') + ']')

console.log(arr_flat)