let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
    name: '姓名',
    age: 18
}
console.log(render(template, data));; // 我是姓名，年龄18，性别undefined

function render(template, data) {

    const reg = /{{(\w+)}}/; // 模板字符串正则
    if (reg.test(template)) { // 判断模板里是否有模板字符串
        const name = reg.exec(template)[1]; //
        template = template.replace(reg, data[name]); //
        return render(template, data); // 递归的渲染并返回渲染后的结构
    }
    return template; // 如果模板没有模板字符串直接返回
}