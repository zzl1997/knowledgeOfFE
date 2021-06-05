let arr = [1, 2, 3, 4, 5]

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let head = new Node()
let cur = head
while (arr.length) {
    cur.next = new Node(arr.shift())
    cur = cur.next
}

// 快慢指针版本


function reverse(head) {
    let pre = null
    let cur = head
    while (cur !== null) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}

let result = reverse(head.next)

// console.log(head)
// 递归版本
function reverse1(head) {
    if (head == null || head.next == null) {
        return head
    }
    let res = reverse(head.next)
    let cur = res
    while (cur.next) {
        cur = cur.next
    }
    cur.next = head
    head.next = null
    return res
}

let some = reverse(head.next)

console.log(1)