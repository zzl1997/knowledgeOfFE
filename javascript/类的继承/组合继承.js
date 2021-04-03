function Animal(name)
{
	this.name = name
	this.sleep = function()
	{
		console.log(this.name + '正在睡觉！');
	}
}

function Cat(name)
{
	Animal.call(this);
	// 这里复制anlimal的属性
	this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
// 这里做一下原型链的构造
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true

//、、、、、、、、、、、、、、、、、、、、、、、、、
/**
           组合式继承
        */

//声明父类
function SuperClass(name)
{
	//值类型共有属性
	this.name = name;
	//引用类型共有属性
	this.books = ['js', 'html', 'css'];

}

//增加父类公共方法
//为父类原型对象上添加一个获取值的方法
SuperClass.prototype.getName = function()
{
	console.log(this.name)
}
//声明子类
function SubClass(name, time)
{
	/*继承父类  */

	//构造函数式继承父类实例属性--并传参name
	SuperClass.call(this, name); //-----------------缺点是构造函数调用了两次（第二次）

	//子类中新增共有属性
	this.time = time;

}
//类式继承-子类原型继承父类
SubClass.prototype = new SuperClass(); //-----------------缺点是构造函数调用了两次（第一次）

SubClass.prototype.constructor = SubClass; //将构造函数属性指回自己

//添加子类原型方法
SubClass.prototype.getTime = function()
{
	console.log(this.time)
}
//实例化
var instance1 = new SubClass('666');
console.log(instance1.__proto__)
var instance2 = new SubClass('deqiu');

console.log(instance1 instanceof SuperClass) //true 原型上继承了

//所以
console.log(instance1.books) //['js','html','css']

instance1.books.push("设计");

console.log(instance1.books) //['js','html','css','设计']

console.log(instance2.books) //['js','html','css'] //
