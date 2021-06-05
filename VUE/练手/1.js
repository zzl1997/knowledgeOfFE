let line='12321'
let i=0
let j=line.length-1
while(i<j){
    if(line[i]===line[j]){
        i++
        j--
    }else{
        console.log(2)
    }
}
console.log(1)
