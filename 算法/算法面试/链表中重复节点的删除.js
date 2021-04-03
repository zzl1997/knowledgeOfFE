class listNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let value = [1, 1, 2, 2, 3, 3, 4, 5]
let head = new listNode()
let cur = head
while (value.length) {
    let node = new listNode(value.shift())
    cur.next = node
    cur = cur.next
}

function remove_dupllicate(head) {
    let cur = head.next
    while (cur.next !== null && cur != null) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}

console.log(remove_dupllicate(head));
console.log()
value = [1, 1, 2, 2, 3, 3, 4, 5]
head = new listNode()
cur=head
while (value.length) {
    let node = new listNode(value.shift())
    cur.next = node
    cur = cur.next
}

// 上述的节点会留一个，下面的算法则是一个都不留
function remove_duplicate_all(head) {
    let cur = head
    while (cur.next.next && cur.next) {
        if (cur.next.val === cur.next.next.val) {
            let val = cur.next.val
            while (cur.next && cur.next.val === val) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return head.next
}

console.log(remove_duplicate_all(head));