function Person(name, age, height)
{
	this.name = name
	this.age = age
	this.height = height

	if (typeof this.sayname != 'function')
	{
		Person.prototype.sayname = function()
		{
			console.log(this.name)
		}
	}
}

var  zhaozilun=new Person('zzl',23,1.84)
// 第一次调用的时候,往Person的原型对象里面填入了sayname函数
// 第二次调用的时候就不用在开辟空间保存新的sayname函数了
var  tanwei=new Person('tanwei',23,1.82)
