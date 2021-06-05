class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
// n1.right = n2
// n2.left = n3
n1.left = n2
n1.right = n3

function preorder(root) {
    if (root == null) {
        return
    }
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}

preorder(n1)

function preorder_with_stack(root) {
    if (!root) {
        return
    }
    let stack = []
    let res = []
    stack.push(root)
    while (stack.length !== 0) {
        let peek = stack.pop()
        res.push(peek.val)
        if (peek.right) {
            stack.push(peek.right)
        }
        if (peek.left) {
            stack.push(peek.left)
        }
    }
    console.log(res)
}

preorder_with_stack(n1)

function postorder(root) {
    if (!root) {
        return
    }
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}

postorder(n1)

function post_order_with_stack(root) {
    let stack = []
    let res = []
    if (!root) {
        return
    }
    stack.push(root)
    while (stack.length !== 0) {
        let peek = stack.pop()
        res.unshift(peek.val)
        if (peek.left) {
            stack.push(peek.left)
        }
        if (peek.right) {
            stack.push(peek.right)
        }
    }
    console.log(res)
}

post_order_with_stack(n1)

function inter_order(root) {
    if (!root) {
        return
    }
    inter_order(root.left)
    console.log(root.val)
    inter_order(root.right)
}

inter_order(n1)


const inter_order_with_stack = function (root) {
    let stack = []
    let res = []
    let cur = root
    while (cur || stack.length !== 0) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    console.log(res)
}
inter_order_with_stack(n1)

function  cengcibianli(root){
    let res=[]
    let stack=[]
    if(!root){return null}
    stack.push(root)
    while (stack.length){
        let level=[]
        let len=stack.length
        for(let i=0;i<len;i++){
            let peek=stack.shift()
            level.push(peek.val)
            if(peek.left){
                stack.push(peek.left)
            }
            if(peek.right){
                stack.push(peek.right)
            }
        }
        res.push(level)
    }
    return res
}

console.log(cengcibianli(n1));

