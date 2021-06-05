function bubble_sort1(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arr.length - 2; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}


function bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arr.length - i - 2; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

function bubble_sort3(arr){
    for(let i=0;i<arr.length;i++){
        let flag=false
        for(let j=0;j<=arr.length-i-2;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                flag=true
            }
        }
        if(flag===false){return arr}
    }
}

console.log(bubble_sort3([1, 2, 3, 4, 5, 6, 7]));
let arr = [5, 7, 8, 9, 3, 4, 5, 6]
console.log(bubble_sort(arr));
console.log(bubble_sort1(arr));

