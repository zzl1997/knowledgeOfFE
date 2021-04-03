function show(...args) {
    console.log(args)
    console.log(this)
}

obj = {
    name: 'zzl'
}
// apply会接受一个参数数组，那么这个传进去的时候就是arguments了，
// 这个数组就是arguments了。
// 虽然在这个地方是一个数组，但是在传参的时候是有三个参数，所以理应
// 在接收参数里面写成...args,从而展开参数
show.apply(obj, [1, 2, 3])

// apply函数的道理跟call函数一样，只不过，吧参数们作为一个数组传进去
Function.prototype.myapply = function (context, args) {
    let fn = Symbol()
    context[fn] = this
    // console.log(arguments[1])
    let res = context[fn](...args)
    delete context[fn]
    return res
}

show.myapply(obj, [1, 2, 3])
