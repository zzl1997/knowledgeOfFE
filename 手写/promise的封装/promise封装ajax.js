function the_ajax() {
    return  new Promise(
       (resolve, reject) => {
           let xhr = new XMLHttpRequest()
           xhr.open('url', 'get', true)
           xhr.send()
           xhr.onreadystatechange = function () {
               if (xhr.readyState==4&&xhr.status===200){
                   resolve(JSON.parse(xml.responseText))
               }else{
                   reject(xhr.error)
               }
           }
       }
    )

}