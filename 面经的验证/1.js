let m = 2
let n = 3
let nums= [[1, 2, 3], [3, 2, 1]]

let dp=new Array(m).fill(0).map((item)=>{return new Array(n).fill(0)})


for(let k=0;k<m;k++){
    let line_arr=readline().split(" ").map((item)=>{return parseInt(item)})
    nums.push(line_arr)
}

for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(i==0 &&j==0){
            dp[i][j]=nums[0][0]
        }
        else if(i==0 ){
            dp[i][j]=dp[i][j-1]+nums[i][j]
        }else if(j==0){
            dp[i][j]=dp[i-1][j]+nums[i][j]
        }
        else {
            dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])
        }
    }
}
console.log(dp[m-1][n-1])
