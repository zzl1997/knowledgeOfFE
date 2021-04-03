// function bubble_sort(arr) {
//     for (let i = 1; i <= arr.length - 1; i++) {
//         for (let j = 0; j <= arr.length - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr
// }
function bubble_sort(arr){
    for(let i=1;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr

}

let arr = [5, 7, 8, 9, 3, 4, 5, 6]
arr = bubble_sort(arr)
console.log(arr)
