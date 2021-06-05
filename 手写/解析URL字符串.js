
let url1='https://www.google.com/search?output=search&sclient=psy-ab&q=alibaba&btnG=&oq=&gs_l=&pbx=1'
function  parseUrl(url){
    let  reg=/([\w]*):///
    let protocol=url.match(reg)[1]
    console.log(protocol)
    let reg2=/[/]{2}([\w.]+)[/]/
    let hostname=url.match(reg2)[1]
    console.log(hostname)
    let reg3=/[?]([\w=&-_]+)/
    let param=url.match(reg3)[1]
    console.log(param)
    let param_obj=param.split("=")
    console.log(param_obj)

}

console.log(parseUrl(url1));


function parseParam(url) {

    const querystring = /.+\?(.+)$/.exec(url)
    // 【0】是全局的字符串，【1】是第一个捕获组
    const arr = querystring[1].split('&')
    let paramobj = {}
    arr.forEach((item) => {
        if (/=/.test(item)) {
            let [key, value] = item.split("=")
            value = decodeURIComponent(value)
            value = /^\d+$/.test(value) ? parseFloat(value) : value
            if (paramobj.hasOwnProperty(key)) {
                paramobj[key] = [].concat(paramobj[key], value)
            } else {
                paramobj[key] = value
            }

        } else {
            paramobj[item] = true
        }
    })
    console.log(paramobj)
}
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url)