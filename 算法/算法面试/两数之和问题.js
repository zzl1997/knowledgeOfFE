let arr = [2, 7, 9, 11]
let input = 2

function twosum(arr){
    // n^^2的时间复杂度
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j]
            if (num1 + num2 === 9) {
                return [i, j]
            }
        }
    }
}
console.log(twosum(arr));

function twosumm1(arr) {
    // n的时间复杂度
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])){
            return [i,map.get(arr[i])]
        }else{
            map.set(9-arr[i],i)
        }
    }

}
console.log(twosumm1(arr));


//return [0,1]


