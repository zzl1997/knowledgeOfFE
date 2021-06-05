
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function insert_node(val, root) {
    if (root === null) {
        return new Node(val)
    }
    if (val <= root.val) {
        root.left = insert_node(val, root.left)
    } else {
        root.right = insert_node(val, root.right)
    }
    return root
}

let root = insert_node(6, null)
root = insert_node(3, root)

root = insert_node(8, root)
root = insert_node(1, root)
root = insert_node(4, root)
root = insert_node(7, root)
root = insert_node(9, root)


function getmin(root) {
    let cur = root
    while (cur.left !== null) {
        cur = cur.left
    }
    return cur
}

console.log(getmin(root));

function getMax(root) {
    let cur = root
    while (cur.right !== null) {
        cur = cur.right
    }
    return cur
}

console.log(getMax(root));

function searchNode(node, val) {
    if (node === null) {
        return
    }
    if (node.val === val) {
        // console.log(node);
        return node
    } else if (node.val < val) {
        return searchNode(node.right, val)
    } else {
        return searchNode(node.left, val)
    }
}

console.log(searchNode(root, 7));

function insert_into_BST(root, node) {
    if (root === null) {
        return node
    }
    if (root.val <= node.val) {
        root.left = insert_into_BST(root.right, node)
    } else {
        root.right = insert_into_BST(root.left, node)
    }
    return root
}

function delete_node(root, val) {
    if (root === null) {
        return null
    }
    if (root.val === val) {
        if (root.left == null && root.right == null) {
            root = null
        } else if (root.left) {
            const maxLeft = findMax(root.left)
            root.val = maxLeft.val
            root.left = delete_node(root.left, maxLeft.val)
        } else {
            const minright = findMin(root.right)
            root.val = minright.val
            root.right = delete_node(root.right, minright.val)
        }
    } else if (root.val < val) {
        root.right = delete_node(root.right, val)
    } else {
        root.left = delete_node(root.left, val)
    }
    return root

    function findMin(root) {
        let cur = root
        while (cur.left !== null) {
            cur = cur.left
        }
        return cur
    }

    function findMax(root) {
        let cur = root
        while (cur.right !== null) {
            cur = cur.right
        }
        return cur
    }
}

let a = delete_node(root, 7)


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function transfer(arr) {
    let root = toavl(0, arr.length - 1)
    return root
    function toavl(left, right) {
        if (left > right) {
            return null
        }
        let mid=Math.floor((left+right)/2)
        let root= new Node(arr[mid])
        root.left =toavl(left,mid-1)
        root.right=toavl(mid+1,right)
        return root
    }
}
let avl_tree= transfer(arr)

function  the_height(root){
    if(root===null){
        return 0
    }
    let left=the_height(root.left)
    let right= the_height(root.right)
    return Math.max(left,right)+1
}

function  check_the_avl(root){
    let flag=true
    function  dfs(root){
        if(root==null){
            return 0
        }
        let  left=dfs(root.left)
        let right= dfs(root.right)
        if(Math.abs(left-right)>1){
            flag=false
        }
        return  Math.max(left,right)+1
    }
    dfs(root)
    return flag
}

console.log(check_the_avl(avl_tree));



