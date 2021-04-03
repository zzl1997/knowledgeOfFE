// 先给window加一个id，以便于确认之后this的指向
window.id = 0;
// 声明一个函数fn
const fn = {
	id: 1,
	say: function()
	{
		console.log('id:', this.id);
	},
	sayArrow: () =>
	{
		console.log('id:', this.id);
	},
	say1: function()
	{
		setTimeout(function()
		{
			console.log('id:', this.id);
		}, 1000);
	},
	say2: function()
	{
		let that = this;
		setTimeout(function()
		{
			console.log('id:', that.id);
		}, 1000);
	},
	say3: function()
	{
		setTimeout(() =>
		{
			console.log('id:', this.id);
		}, 1000);
	},
	say4: () =>
	{
		setTimeout(() =>
		{
			console.log('id:', this.id);
		}, 1000);
	},
	say5: () =>
	{
		setTimeout(function()
		{
			console.log('id:', this.id);
		}, 1000);
	},
};

fn.say();
fn.sayArrow();
setTimeout(fn.say, 1000);
setTimeout(fn.sayArrow, 1000);

setTimeout(() => fn.say(), 1000);
setTimeout(() => fn.sayArrow(), 1000);
fn.say1();
fn.say2();

fn.say3();
fn.say4();
fn.say5();
fn.say();
/*
  结果: 1
  原因: 通过fn调用的say, say是 函数声明, this指向fn，输出的是fn.id
*/

fn.sayArrow();
/*
  结果: 0
  原因: 通过fn调用的say, say是 箭头函数声明, this指向箭头函数声明时作用域的this，也就是this指向window，输出的是window.id
*/

setTimeout(fn.say, 1000);
/*
  结果: 0
  原因: 通过setTimeout调用, setTimeout改写所传函数的this, 也就是this指向window，输出的是window.id
*/

setTimeout(fn.sayArrow, 1000);
/*
  结果: 0
  原因: 通过setTimeout调用, setTimeout改写所传函数的this, 也就是this指向window，输出的是window.id
*/

setTimeout(() => fn.say(), 1000);
/*
  结果: 1
  原因: 通过setTimeout调用, 但是fn.say()是被箭头函数包裹，所以fn.say()调用不受this改变的影响，原因参考第一句输出
  ps: 等同于 setTimeout(function () { fn.say(); } , 1000);
*/

setTimeout(() => fn.sayArrow(), 1000);
/*
  结果: 0
  原因: 同上雷同，具体原因可参考第二句输出
  ps: 等同于 setTimeout(function () { fn.sayArrow(); } , 1000);
*/

fn.say1();
/*
  结果: 0
  原因: setTimeout改写函数内部的this, 使其指向window, 输出window.id
*/

fn.say2(); // 1
/*
  结果: 1
  原因: setTimeout虽然改写函数内部的this,但是输出的是that.id，这个that在setTimout外面声明，指向的是fn，所以输出fn.id
*/

fn.say3(); // 1
/*
  结果: 1
  原因: fn.say3函数其内部的this指向的fn，而setTimeout内部传了一个箭头函数，箭头函数内部中的this就指向了fn.say3内的this，也就是fn，最后输出fn.id
*/

fn.say4(); // 0
/*
  结果: 0
  原因: fn.say4这个函数本身就是使用箭头函数声明，其内部的this指向的是箭头函数声明时所在的作用域，即window，而且setTimeout也是传了一个箭头函数，这里面的this指向外层箭头函数内部中的this，传引用也指向了window，最后输出window.id
*/

fn.say5(); // 0
/*
  结果: 0
  原因: fn.say5用箭头函数声明，其内部的this指向window，而且setTimeout也会改写内部this指向window，最后输出window.id
*/

// 总结:
// 	setTimeout第一个参数是一个函数, 函数有两种
// 普通函数, 你想想, 过了一秒再执行, 原来的函数早就执行完啦, 现在是在全局作用域里面执行, this的指向为window, 总结就是会把普通函数的this指向window
// 还有, 箭头函数在改变this的时候, 由于没有function关键字的保护, 就像一个低级的变量, 没有this, 于是没有地方插this-- - > object这句话， settimeout不改变,
// 或者说无力改变箭头函数的this， 因为没地方改
