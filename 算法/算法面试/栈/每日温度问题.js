let temprature = [73, 74, 75, 71, 69, 72, 76, 73]

function daily_temptature(temrature) {
    let stack = []
    let res = new Array(temrature.length).fill(0)
    for (let i = 0; i < temrature.length; i++) {
        let before=temrature[i]
        let after = temrature[stack[stack.length - 1]]
        while (stack.length !== 0 && temrature[i] > temrature[stack[stack.length - 1]]) {
            const top = stack.pop()
            res[top] = i - top
        }
        stack.push(i)
    }
    return res

}

console.log(daily_temptature(temprature));