class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

n3=new Node(3)
n2=new Node(2)
n0= new Node(0)
n_4=new Node(-4)
n3.next=n2
n2.next=n0
n0.next=n_4
n_4.next=n2




function hasCycle(head){
    while(head){
        if (head.flag === undefined) {
            head.flag = true
            head = head.next
        } else {
            return true
        }
    }
    return false
}

console.log(hasCycle(n3));