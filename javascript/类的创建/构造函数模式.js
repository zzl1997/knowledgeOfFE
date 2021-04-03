// 使用构造函数模式,则可以让每一个实例都可以自定义不同的类
function Create(name, age, height)
{
	this.name = name
	this.age = age
	this.height = height
	this.sayname = function()
	{
		console.log(this.name)
	}
}

var zzl = new Create('zzl', 23, 1.84)
// 一旦出现new关键字,则创建一个新的对象
// 然后this指向这个对象
// 然后执行代码,
// 最后返回这个新的对象
console.log(zzl)

// 但是缺点就是:每一个实例,都会储存一段重复的sayname代码
