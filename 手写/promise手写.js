new Promise(
    (resolve, reject) => {
        resolve('追追好帅-官方版本')
    }
).then(
    (res) => {
        console.log(res)
    },
    (err) => {
        console.log(res)
    }
)

class MyPromise {
    status = 'PENDING'
    result = undefined
    reason = undefined

    constructor(execution) {
        const resolve = (result) => {
            if (this.status === 'PENDING') {
                this.result = result
                this.status = 'RESOLVE'
            }
        }
        const reject = (reason) => {
            if (this.status === 'PENDING') {
                this.reason = reason
                this.status = 'REJECT'
            }
        }
        execution(resolve, reject)
    }

    then(onsuccess, onerror) {
        if (this.status == 'RESOLVE') {
            onsuccess(this.result)
        }
        if (this.status == 'REJECT') {
            onerror(this.reason)
        }
    }
}

const my = new MyPromise((resolve, reject) => {
    resolve('赵梓伦好帅--同步版本')
})
my.then((result) => {
        console.log(result)
    },
    (reason) => {
        console.log(reason)
    }
)
console.log('赵梓伦好帅--同步版本--其实这句话应该是先出来一些')
// 这个版本的不支持异步，
// 接下来实现一个异步的方法, 使用setTimeout(() => { 你想执行的函数 }, 0)

class MyPromise1 {
    status = 'PENDING'
    result = undefined
    reason = undefined

    constructor(execution) {
        const resolve = (result) => {
            // console.log(this.status)
            if (this.status === 'PENDING') {
                this.result = result
                this.status = 'RESOLVE'
            }
        }
        const reject = (reason) => {
            if (this.status === 'PENDING') {
                this.reason = reason
                this.status = 'REJECT'
            }
        }
        execution(resolve, reject)
    }

    then(onsuccess, onerror) {
        if (this.status == 'RESOLVE') {
            setTimeout(() => {
                onsuccess(this.result)
            }, 0)

        }
        if (this.status == 'REJECT') {
            setTimeout(() => {
                onerror(this.reason)
            }, 0)

        }
    }
}

var my1 = new MyPromise1((resolve, reject) => {
    resolve('伦哥最帅异步版本')
}).then((res) => {
        console.log(res)
    },
    (error) => {
        console.log(error)
    })
console.log(1) //可以看到，'伦哥最帅异步版本'打印出现字啊  1之后

// 问题，当promise构造函数里面的执行的函数是异步时，会出错
var my1 = new MyPromise1((resovle, reject) => {
    setTimeout(() => {
        resolve('一秒后执行这句话，伦哥最帅异步版本')
    }, 1000)
}).then((res) => {
        console.log(res)
    },
    (error) => {
        console.log(error)
    })
// 报错:Uncaught ReferenceError: resolve is not defined
// 分析:由于resolve('一秒后执行这句话，伦哥最帅异步版本') 这句话在一秒钟后执行,但是此时then方法已经执行完毕,status仍然为pending,then方法的两个函数没有执行
// 解决方法:设计订阅发布模式,在then函数执行为pending的时候,说明promise里边的执行函数是异步的,这个时候我们用数组将待执行的函数发布,然后等到执行函数执行的时候,再从
// 数组里面订阅,然后一个一个执行

class MyPromise2 {
    status = 'PENDING'
    result = undefined
    reason = undefined
    onsuccessArr = []
    onerrorArr = []

    constructor(execution) {
        const resolve = (result) => {
// console.log(this.status)
            if (this.status === 'PENDING') {
                this.result = result
                this.status = 'RESOLVE'
                this.onsuccessArr.map((fn) => {
                    fn()
                })
            }
        }
        const reject = (reason) => {
            if (this.status === 'PENDING') {
                this.reason = reason
                this.status = 'REJECT'
                this.onerrorArr.map((fn) => {
                    fn()
                })
            }
        }
        execution(resolve, reject)
    }

    then(onsuccess, onerror) {
        if (this.status == 'RESOLVE') {
            setTimeout(() => {
                onsuccess(this.result)
            }, 0)

        }
        if (this.status == 'REJECT') {
            setTimeout(() => {
                onerror(this.reason)
            }, 0)

        }
        if (this.status == 'PENDING') {
            this.onsuccessArr.push(() => {
                onsuccess(this.result)
            })
            this.onerrorArr.push(() => {
                onerror(this.reason)
            })
        }
    }
}

var my2 = new MyPromise2((resolve, reject) => {
    setTimeout(() => {
        resolve('过一秒你会看到的东西')
    }, 1000)
})
    .then((res) => {
        console.log(res)
    }, (error) => {
        console.log(error)
    })

// 模仿promise支持链式调用