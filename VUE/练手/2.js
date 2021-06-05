// while(line=read_line()){
//     let count=0
//     for(let i=0;i<line.length;i++){
//         if(line[i]==='a'){
//             count=count+(line.length-1-i)
//         }
//     }
//     console.log(count)}

let line = 'aab'

let arr = line.split('')
let count = 0
while (true) {
    let index = check(arr)
    if(index==-1){
        break
    }else {
        arr.splice(index, 2, 'b', 'b', 'a')
        count++
    }
}
console.log(count);

function check(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === 'a' && arr[i + 1] === 'b') {
            return i
        }
    }
    return -1
}