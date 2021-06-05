

function  quick_sort(arr,left,right){
    if (left < right) {
        let pivot = arr[left]
        let i = left
        let j = right
        while (i < j) {
            while (i < j && arr[j] > pivot) {
                j--
            }
            if(i<j){
                arr[i]=arr[j]
                i++
            }
            while (i < j && arr[i] <= pivot) {
                i++
            }
            if(i<j){
                arr[j]=arr[i]
                j--
            }
        }
        arr[i]=pivot
        quick_sort(arr, left, i - 1)
        quick_sort(arr, i + 1, right)
        return arr
    }

}

function swap(a, b) {
    return [b, a]
}


const arr = [5, 7, 8, 9, 3, 4, 5, 6]
console.log(arr.sort())
const arr1 = [5, 7, 8, 9, 3, 4, 5, 6]
quick_sort(arr1, 0, arr.length - 1)
console.log(arr1)


