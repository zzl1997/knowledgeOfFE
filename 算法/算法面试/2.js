let arr = ['abcd?', '?bcd?', 'bbcd?', 'b????']
let reg = arr[0].replace('?', 'a').split('')
console.log(reg)
for (let i = 1; i < arr.length; i++) {
    let str = arr[i]
    for (let j = 0; j < str.length; j++) {
        if(str[j]!==reg[j]){
            if(str[j]==='?'){
                continue
            }else {
                reg[j]='?'
            }
        }

    }
}
console.log(reg.join(''))