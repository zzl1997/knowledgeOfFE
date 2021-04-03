let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url)

function parseParam(url) {

    const querystring = /.+\?(.+)$/.exec(url)
    // 【0】是全局的字符串，【1】是第一个捕获组
    const arr = querystring.split('&')
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