function Animal(name)
{
	this.name = name
	this.sleep = function()
	{
		console.log(this.name + '正在睡觉！');
	}
}

function Cat()
{
	Cat.prototype = new Animal()
	// 通过这一句话,使Cat的爸爸指向Animal
}
