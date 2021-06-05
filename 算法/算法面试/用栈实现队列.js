// 要求实现一个队列，队列支持以下的操作
// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。
class myqueue{
    constructor() {
        this.stack1=[]
        this.stack2=[]
    }
    push(elem){
        this.stack1.push(elem)
    }
    pop(){
        while (this.stack1.length){
            this.stack2.push(this.stack1.pop())

        }
        return this.stack2.pop()
    }
    peek(){
        while (this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2[this.stack2.length-1]
    }
    isEmpty(){
        return (!this.stack2.length && this.stack1.length)
    }
}
let c=new myqueue()

c.push(1)
c.push(2)
c.push(3)
c.push(4)
let a=c.pop()
a=c.pop()
console.log(a)