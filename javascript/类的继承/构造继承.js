function Parent(age)
{
	this.name = ['mike', 'jack', 'smith'];
	this.age = age;
}

function Child(age)
{
	Parent.call(this, age);
}

// Child的实例是无法访问parent的父类的
var test = new Child(21);
alert(test.age); //21
alert(test.name); //mike,jack,smith
test.name.push('bill');
alert(test.name); //mike,jack,smith,bill
// 构造函数继承把所有的属性和方法都为每个实例单独拷贝了一份，
// 虽然实现了实例之间的数据隔离，但是对于那些本来就应该是公共的属性
// 和方法来说，重复而无意义的复制也无疑是增加了额外的内存开销。
// 而构造函数继承的另一个称呼借用构造函数表明了此种继承方式的真
// 相——子类借用了超类（父类）的构造函数。

//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
//声明父类
function SuperClass(id)
{
	//引用类型共有属性
	this.books = ['js', 'html', 'css'];
	this.id = id;
}

//增加父类公共方法
//为父类原型对象上添加一个获取值的方法
SuperClass.prototype.showBooks = function()
{
	console.log(this.books)
}
//声明子类
function SubClass(id)
{
	//继承父类--在子类构造函数的内部调用超类构造函数
	SuperClass.call(this, id);
}

//实例化，看这里可以传参
var instance1 = new SubClass(1);

console.log(instance1)

var instance2 = new SubClass();

console.log(instance1 instanceof SuperClass) //false 因未没有从原型上继承

//所以
console.log(instance1.books) //['js','html','css']

instance1.books.push("设计");

console.log(instance1.books) //['js','html','css','设计']

console.log(instance2.books) //['js','html','css']


// 重要的资料:
// https://zhuanlan.zhihu.com/p/66029474