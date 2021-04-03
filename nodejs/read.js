var  fs=require('fs')
var data= fs.readFile('demo.txt',function (err,data){
    if(err){ return console.log(err)}
    else {console.log(data.toString())}
})
console.log(1)
