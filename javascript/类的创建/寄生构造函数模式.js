// 计生构造函数模式,比如我们想创建一个类,这个类是一个特殊的数组,数组元素只有正数
// 我们不能直接去改造array,所以我们只能"寄生"在array类上面,构造一个特殊数组
function SpeicalArray(nums)
{
	var values = new Array()
	for (n of nums)
	{
		if (n > 0)
		{
			values.push(n)
		}
	}

	values.tostring = function()
	{
		return this.join(",")
	}
	return values
	
	
	// 本来最后一步是return this 但是,因为有了 
	// return values
	// 所以不能return this了
}
var arr = new SpeicalArray([1, 2, -1, 3])
console.log(arr.toLocaleString())
