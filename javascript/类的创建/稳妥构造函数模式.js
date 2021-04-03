// 稳妥构造函数模式适用于一些安全环境,有一些安全环境不能使用new 也不能使用 this,(其实就是工厂模式)

function Person(name, age, height)
{
	var o = {}

	o.sayname = function()

	{
		console.log(name)
	}
	
	return o
}
var zzl = new Person('zzl', 23, 1.84)
zzl.sayname()