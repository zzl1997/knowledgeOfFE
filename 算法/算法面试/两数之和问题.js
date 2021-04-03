let arr = [2, 7, 9, 11]
let input = 2

function twosum(arr){
    for(let i=0;i<arr.length;i++){
        let num1=arr[i]
        for(let j=i+1;j<arr.length;j++){
            let num2=arr[j]
            if(num1+num2===9){
                return [i,j]
            }
        }
    }
}

console.log(twosum(arr));
//return [0,1]

