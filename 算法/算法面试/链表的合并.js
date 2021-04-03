class listNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let l1 = new listNode(1)
l1.next = new listNode(2)
l1.next.next = new listNode(4)
let l2 = new listNode(1)
l2.next = new listNode(3)
l2.next.next = new listNode(4)


function Merge(l1, l2) {
    let head = new listNode()
    let cur = head
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1
            cur = cur.next
            l1 = l1.next
        } else {
            cur.next = l2
            cur = cur.next
            l2 = l2.next
        }
    }
    cur.next=l1!==null?l1:l2
    return head.next

}

console.log((Merge(l1, l2)));;