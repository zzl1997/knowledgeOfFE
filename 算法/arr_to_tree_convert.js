let arr= [3,9,20,null,null,15,7]
class  Node{
    constructor(val) {
        this.val=val
        this.left=null
        this.right=null
    }
}

function  trans(arr){
    arr=arr.map((item)=>{return new Node(item)})
    let root
    if(arr.length>=1){
        root=arr[0]
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i].val===null){
            continue
        }
        if(2*i+1<=arr.length-1 && arr[2*i+1].val!==null){
            arr[i].left=arr[2*i+1]
        }

        if(2*i+2<=arr.length-1 && arr[2*i+2].val!==null){
            arr[i].right=arr[2*i+2]
        }
    }
    return root
}

let root=(trans(arr))

var minDepth = function(root) {
    if(!root){
        return root
    }
    let q=[]
    q.push(root)
    let step=0
    while(q.length){
        let size=q.length
        for(let i=0;i<size;i++){
            let peek= q.shift()

            if(peek.left===null && peek.right===null){
                return step
            }
        if(peek.left){
            q.push(peek.left)
        }
        if(peek.right){
            q.push(peek.right)
        }
        }
        step++
    }
};
console.log(minDepth(root))