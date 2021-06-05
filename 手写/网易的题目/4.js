function maxSubStrLength(charList, s) {
    // write code here
    let frequency = {}
    for (let n of charList) {
        frequency[n] = 0
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (frequency[char] !== undefined) {
            frequency[char] += 1
        }
    }
    let i = 0
    let j = s.length - 1
    if(check(frequency)){return s.slice(i,j+1)}
    while (i <= j) {
        let char=s[j]
        j--
        if(frequency[char]!==undefined){
            frequency[char]-=1
            if(check(frequency)){return s.slice(i,j+1)}
        }
        char=s[i]
        i++
        if(frequency[char]!==undefined){
            frequency[char]-=1
            if(check(frequency)){return s.slice(i,j+1)}
        }
    }
    return  ''

    function check(frequency) {
        for (n of charList) {
            if (frequency[n] % 2 == 1) {
                return false
            }
        }
        return true
    }
}

let charList = ['a', 'b', 'C']
let s = 'axaabCaybbb'
console.log(maxSubStrLength(charList, s));

