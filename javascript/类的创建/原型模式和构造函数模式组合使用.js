function Person(name, age, height)
{
	this.name = name
	this.age = age
	this.height = height
}

Person.prototype.leg = 2
Person.prototype.eye = 2

var zzl = new Person('zzl', 23, 1.84)
console.log(zzl)

console.log("eye" in zzl)  //true
console.log(zzl.hasOwnProperty('eye')) //false
