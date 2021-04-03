// 组合寄生式继承，接近完美的继承
function Parent(name) {
    this.parent = name
}

Parent.prototype.say = function () {
    console.log(this.parent)
}

function Child(name) {
    this.child = name
    Parent.call(this)
}

// Child.prototype的__proto__指向Paren.prototype
// 如此一来，child实例就会先找Child.prototype,找不到再去Parent.prototype
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child