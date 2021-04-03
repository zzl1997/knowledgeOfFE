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
console.log(head)


function delete_n(head, n) {
    let prev = head
    let cur = head
    while (n) {
        cur = cur.next
        n--
    }
    while (cur.next) {
        cur = cur.next
        prev = prev.next
    }
    prev.next = prev.next.next
    return head.next
}

let res = (delete_n(head, 2))
