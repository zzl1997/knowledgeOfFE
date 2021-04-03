// function quick_sort(arr, left, right) {
//     if (left >= right) {
//         return
//     }
//     let pivot = arr[left]
//     let i = left
//     let j = right
//     while (i < j) {
//         while (i < j && arr[j] >= pivot) {
//             j--
//         }
//         while (i < j && pivot > arr[i]) {
//             i++
//         }
//         if (i < j) {
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
//     arr[left] = arr[i]
//     arr[i] = pivot
//     quick_sort(arr, left, i - 1)
//     quick_sort(arr, i + 1, right)
//     return arr
// }

function  quick_sort(arr,left,right){
    if(left>=right){
        return
    }
    let pivot=arr[left]
    let i=left
    let j=right
    while(i<j){
        while(i<j&&arr[j]>=pivot){
            j--
        }
        while(i<j&&arr[i]<pivot){
            i++
        }
        if(i<j){
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }

    arr[left]=arr[i]
    arr[j]=pivot
    quick_sort(arr,left,i-1)
    quick_sort(arr,i+1,right)
}

const arr = [5, 7, 8, 9, 3, 4, 5, 6]
quick_sort(arr, 0, arr.length - 1)
console.log(arr)

