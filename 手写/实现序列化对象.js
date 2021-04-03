let a = {
    name: 'zzl',
    age: 21,
    is: true,
    add() {
        console.log(1)
    },
    unde: undefined,
    deds: Symbol()
}
console.log(JSON.stringify(a));
//{"name":"zzl","age":21,"is":true}
// 可以看到，函数不转，undefined不转，Symbol()不转


function jsonStringify(obj) {
    let type = typeof obj;
    if (type !== "object") {
        if (/string|undefined|function/.test(type)) {
            obj = '"' + obj + '"';
        }
        return String(obj);
    } else {
        let json = []
        let arr = Array.isArray(obj)
        for (let k in obj) {
            let v = obj[k];
            let type = typeof v;
            if (/string|undefined|function/.test(type)) {
                v = '"' + v + '"';
            } else if (type === "object") {
                v = jsonStringify(v);
            }
            json.push((arr ? "" : '"' + k + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
}

console.log(jsonStringify({x: 5}));// "{"x":5}"
console.log(jsonStringify([1, "false", false])); // "[1,"false",false]"
console.log(jsonStringify({b: undefined})); // "{"b":"undefined"}"
// 这种拷贝方式竟然能拷贝所有的值！
let b= jsonStringify(a)
console.log(b)
// 当然，反序列化的时候，有一个方法如下
let c = new Function("return" + b)
console.log(c)