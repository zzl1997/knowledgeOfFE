function  select_sort(arr){
    for(let i=0;i<=arr.length-2;i++){
        let minindex=i
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[minindex]){
                minindex=j
            }
        }
        if(minindex!==i){[arr[i],arr[minindex]]=[arr[minindex],arr[i]]}

    }
    return arr
}

console.log(select_sort([43, 53, 75, 45, 734, 37, 37, 37]));