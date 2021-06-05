let arr=[1213,312,1321,37,76357,624,435]
function  insertsort(arr){
    for(let i=1;i<arr.length;i++){
        let j=i
        let temp=arr[i]
        while (j>0 && arr[j-1]>temp){
            arr[j]=arr[j-1]
            j--
        }
        arr[j]=temp
    }
    return arr
}

console.log(insertsort(arr));
