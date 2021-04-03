new Promise(
	(resolve, reject) => { resolve('追追好帅-官方版本') }
).then(
	(res) => { console.log(res) },
	(err) => { console.log(res) }
)

class MyPromise
{
	status = 'PENDING'
	result = undefined
	reason = undefined

	constructor(execution)
	{
		const resolve = (result) =>
		{
			// console.log(this.status)
			if (this.status === 'PENDING')
			{
				this.result = result
				this.status = 'RESOLVE'
			}
		}
		const reject = (reason) =>
		{
			if (this.status === 'PENDING')
			{
				this.reason = reason
				this.status = 'REJECT'
			}
		}
		execution(resolve, reject)
	}
	then(onsuccess, onerror)
	{
		if (this.status = 'RESOLVE')
		{
			onsuccess(this.result)
		}
		if (this.status = 'REJECT')
		{
			onerror(this.reason)
		}

	}

}

const my = new MyPromise((resolve, reject) =>
{
	resolve('赵梓伦好帅')
})
my.then((result) => { console.log(result) },
	(reason) => { console.log(reason) }
)
