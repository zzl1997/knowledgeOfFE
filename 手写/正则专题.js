text = 'cat mat sat fat'
////////////////////////////////////////////////////
// exec()  without g
pattern = /.at/
res = (pattern.exec(text))
console.log(res)
// [ 'cat', index: 0, input: 'cat mat sat fat', groups: undefined ]

res = (pattern.exec(text))
console.log(res)
// [ 'cat', index: 0, input: 'cat mat sat fat', groups: undefined ]
// 每次的结果都不变
/////////////////////////
// exec() g
pattern = /.at/g
res = (pattern.exec(text))
console.log(res)
// [ 'cat', index: 0, input: 'cat mat sat fat', groups: undefined ]

res = (pattern.exec(text))
console.log(res)
// [ 'mat', index: 4, input: 'cat mat sat fat', groups: undefined ]


// exec with ()
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
const querystring = /.+\?(.+)$/.exec(url)
console.log(querystring)
// querystring这个时候就是数组，捕获组就藏在1-n索引里面
console.log(querystring[1])
// 这就是第一个捕获组的内容
// user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled

//////////////////////////////////////////////////////////////////////////////

// 转换为驼峰命名
var s1 = "get-element-by-id"

s1 = s1.replace(/-\w/g, function (match, position, original) {
    // 在只有一个匹配项的时候，是这样的参数的设定
    // console.log(match)// match 是匹配到的字符串
    // console.log(position)// the index
    return match.slice(1).toUpperCase()
    // console.log(original)
})
console.log(s1)

///////////////////////////////
// 统计出现频次最多的字符
let str = "abcabcabcbbccccc";
let num = 0
let char = ''
str = str.split("").sort().join("")
str.replace(/(\w)\1+/g, function (啊, 吧, 存) {
    if (啊.length > num) {
        num = 啊.length
        char = 吧
    }
    // console.log(啊)// 第一个参数为匹配到的项目
    // console.log(吧)//第二个参数为第一个匹配的捕获组
    // console.log(存)//匹配到的项目的索引
})
console.log(`字符最多的是${char}，出现了${num}次`);

