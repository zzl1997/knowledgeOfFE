function isValid(s) {
    const left_tpo_right = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    let stack = []
    if (!s) {
        return true
    }
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        if (ch === '(' || ch === '{' || ch === "[") {
            stack.push(ch)
        } else {
            let peek = stack.pop()
            if (left_tpo_right[ch] !== peek) {
                return false
            }
        }
    }

    if (!stack.length) {
        return true
    } else {
        return false
    }
}

console.log(isValid('()'));