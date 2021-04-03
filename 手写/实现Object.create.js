let a = {name: 'zzl'}
let b = new Object(a)
// 根据传入的参数来构造一个对象
console.log(b)


b = Object.create(a)
// 输入一个父类对象，b的__proto__指向a
// a.name = 'change'
console.log(b)

function create(proto) {
	function F() {}

	F.prototype = proto
	return new F()
}

console.log('test---------')
let b1 = create(a)
console.log(b1)

