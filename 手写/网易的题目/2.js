function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(3)
let n4 = new TreeNode(4)
let n5 = new TreeNode(5)
let n6 = new TreeNode(6)
let n7 = new TreeNode(7)
let n8 = new TreeNode(8)
let n9 = new TreeNode(9)

n1.left = n2
n1.right = n3
n2.left = n4
n3.left = n5
n3.right = n6
n5.left = n7
n5.right = n8
n6.right = n9
console.log(maxMoney(n1));

function maxMoney(root) {
    // write code here
    let max = 0
    let queue = []
    queue.push(root)
    while (queue.length) {
        let count = queue.length
        for (let i = 0; i < count; i++) {
            let node = queue.shift()
            node
            let leftsig = checkroot(node.left)
            let rightsig = checkroot(node.right)
            if (leftsig && rightsig) {
                max = max + 5
            }
            if (leftsig && !rightsig) {
                max = max + 2
            }
            if (rightsig&&!leftsig) {
                max = max + 2
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return max

    function checkroot(node) {
        if (node === null) {
            return false
        }
        if (node.left === null && node.right === null) {
            return true
        } else {
            return false
        }

    }
}



