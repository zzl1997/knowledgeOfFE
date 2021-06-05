// let n=4
// let f= new Array(n+1).fill(Infinity)
// f[0]=0
// f[1]=1
// f[2]=2
// for(let i=3;i<=n;i++){
//     f[i]=f[i-1]+f[i-2]+f[i-3]
// }
// console.log(f[n])

function solution( n ) {

    // write code here
    let f= new Array(n+1).fill(Infinity)

    f[0]=0
    f[1]=1
    f[2]=2
    for(let i=3;i<=n;i++){
        f[i]=f[i-1]+f[i-2]+f[i-3]
    }
    return (f[n])
}