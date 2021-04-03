// 思路,在函数内部创建对象,然后返回这个对象
function Create(name, age, height)
{
	var o = {}
	o.name = name
	o.age = age
	o.height = height
	return  o
}
var  zzl= Create('zzl',22,1.88)
console.log(zzl)


// 这种方式的缺点是,如上,工厂模式创建的对象都是object的