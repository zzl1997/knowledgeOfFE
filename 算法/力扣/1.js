let level=[1,2,3,null,null,7,8]
class  Node{
    constructor(val) {
        this.val=val
        this.left=null
        this.right=null
    }
}
function  transform(level){
    let arr=level.map((item)=>{return new Node(item)})

    for(let i=0;i<arr.length;i++){
        if(2*i+1<arr.length ){
            arr[i].left=arr[2*i+1]
        }
        if(2*i+2 <arr.length){
            arr[i].right=arr[2*i+2]
        }

    }
    return arr[0]
}
let root=