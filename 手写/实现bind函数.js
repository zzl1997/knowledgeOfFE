// 手写bind,这个函数的单纯作用就是“复制”了一个函数，但是“复制”过后的函数的唯一的不一样的地方就是，this改变了我指定的this

let demo = {
    name: 'zzl',
    show(data) {
        console.log(data)
        console.log(this.name)
    }
}
let func1 = demo.show
func1(1) //undefined
let fun2 = demo.show.bind(demo)
fun2(1)//zzl

console.log('es6的简单写法----------------------')
// es6的简单写法

Function.prototype.mybind = function (contex, ...args) {
    let fn = this
    if (typeof fn !== "function") {
        throw  'the calller is not a function ！'
    }
    return function (...args2) {
        let allagrs = args.concat(args2)
        return fn.apply(contex, allagrs)
    }
}

let fun3 = demo.show.mybind(demo, 1)
fun3()

console.log('es5的写法---------------------------')
// es5,没有args的时候的写法，需要用到slice方法来截取参数
Function.prototype.mybind1 = function (context) {
    var fn = this
    if (typeof fn !== 'function') {
        throw  'the caller is not a function'
    }
    var args1 = [].slice.call(arguments)
    // to change the argument into an array
    args1 = args1.slice(1)
    // to get the arguments the user inserted
    return function () {
        var args2 = [].slice.call(arguments)
        var allargs = args1.concat(args2)
        return fn.apply(context, allargs)
    }
}

var fun4 = demo.show.mybind1(demo, 1)
fun4()

// 开始考虑函数的一种使用场景：作为构造函数的时候，会有一个new的关键字
console.log('考虑构造函数也是一种函数的情形-------')
// new的工作原理
// function Fn(args){
//
// }
// var _c=new Fn()
// // 其实发生的变化是：
// _c={}
// _c.__proto__=Fn.prototype
// Fn.call(_c,...args)
// return _c

Function.prototype.mybind2 = function (context) {
    var fn = this
    if (typeof fn !== 'function') {
        throw  'the caller is not a function'
    }
    var args1 = [].slice.call(arguments)
    // to change the argument into an array
    args1 = args1.slice(1)
    // to get the arguments the user inserted
    return function F() {
        var args2 = [].slice.call(arguments)
        var allargs = args1.concat(args2)
        // 判定是不是new
        if(this instanceof  F){
            return  new fn(allargs)
        }else{
            return  fn.apply(context,allargs)
        }
        var _this = resultFn.prototype.isPrototypeOf(this) ? this : context
        return fn.apply(_this, allargs)
        // new 的情况下 this 改绑成 new 出来的对象实例, allargs)
    }
}

function Person(name) {
    this.name = name
}

// new (funcA.bind(thisArg, args))
var _Person = Person.mybind2(demo)
var instace = new _Person('zzl')
console.log(instace)
