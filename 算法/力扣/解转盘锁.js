var openLock = function (deadends, target) {
    let queue = []
    queue.push('0000')
    let visited = []
    let step = 0
    while (queue.length) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let peek = queue.shift()
            visited.push(peek)
            let chararr = peek.split("")
            for (let j = 0; j < 4; j++) {
                let [down, up] = twopossible(chararr, j)
                if ((!deadends.includes(down.join(""))) && (!visited.includes(down.join("")))) {
                    if (down.join("") === target) {
                        return step
                    } else {
                        queue.push(down.join(""))
                        visited.push(down.join(""))
                    }
                }
                if ((!deadends.includes(up.join(""))) && (!visited.includes(up.join("")))) {
                    if (up.join("") === target) {
                        return step
                    } else {
                        queue.push(up.join(""))
                        visited.push(up.join(""))
                    }
                }
            }
        }
        step++
    }

    function twopossible(chararr, j) {
        let down = chararr.slice()
        let up = chararr.slice()
        if (down[j] == '0') {
            down[j] = '9'
        } else {
            down[j] = (parseInt(down[j]) - 1) + ""
        }

        if (up[j] == '9') {
            up[j] = '0'
        } else {
            up[j] = parseInt(up[j] + 1) + ""
        }
        return [down, up]

    }
}
deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202"
openLock(deadends, target)