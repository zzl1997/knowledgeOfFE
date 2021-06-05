let str = 'abba'

function isHuiwen(str) {
    let i = 0
    let j = str.length - 1
    while (i < j) {
        if (str[i] === str[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
}

console.log(isHuiwen(str));

// 删去一个字符变成回文子串
str = 'abcbka'


console.log(validHuiwen(str));

function validHuiwen(str) {
    let i = 0
    let j = str.length - 1
    while (i < j) {
        if (str[i] === str[j]) {
            i++
            j--
        } else {
            break
        }
    }
    if (isHuiwen(i + 1, j)) {
        return true
    }

    if (isHuiwen(i, j - 1)) {
        return true
    }
    return false

    function isHuiwen(left, right) {
        while (left < right) {
            if (str[left] !== str[right]) {

                return false
            } else {
                left++
                right--
            }
        }
        return true
    }

}