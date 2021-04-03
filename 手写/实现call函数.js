// ...args 表示很多参数1,2,3,4,5,6,7 args表示一个数组
function show(...args) {
    console.log(args)
    console.log(this)
}

let obj = {name: 'zzl'}
show.call(obj, 1, 2, 3, 4)


// call函数是一种改变this指向的函数，后面可以传递很多参数
// 实现mycall，传入的参数首先是一个对象，也就是上下文环境，然后传递了
// 很多很多参数。。。args
Function.prototype.mycall = function (context, ...args) {
    context.fn = this
    let res = context.fn(...args)
    delete context.fn
    return res
}
show.mycall(obj, 1, 2, 3, 4)