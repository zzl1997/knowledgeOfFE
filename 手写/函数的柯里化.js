// 首先实现一个简单的柯里化函数
function add(x, y, z) {
    return x + y + z
}

console.log(add(1, 2, 3))

add = function (x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}
const addOne = add(1);
const addOneAndTwo = addOne(2);
const addOneAndTwoAndThree = addOneAndTwo(3);
console.log(addOneAndTwoAndThree);

// 待柯里化处理的函数
function curry(fn, args) {
    // 传入一个函数和数组
    let length = fn.length
    args = args || []
    return function () {
        let newArgs = args.concat(Array.prototype.slice.call(arguments))
        if (newArgs.length >= length) {
            return fn.apply(this, newArgs)
        } else {
            return curry.call(this, fn, newArgs)
            // 所以这里也要传入一个函数和数组
        }
    }
}

function sum(a, b, c, d) {
    return a + b + c + d
}

var sumPlus = curry(sum)
console.log(sumPlus(1)(2)(3)(4));
console.log(sumPlus(1, 2)(3)(4));
console.log(sumPlus(1, 2, 3)(4));