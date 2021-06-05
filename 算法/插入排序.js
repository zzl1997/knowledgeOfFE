function  insertion(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i
        while (j>0&& arr[j-1]>temp){
            arr[j]=arr[j-1]
            j--
        }
        arr[j]=temp
    }
    return arr
}

console.log(insertion([5, 3, 2, 4, 1]));