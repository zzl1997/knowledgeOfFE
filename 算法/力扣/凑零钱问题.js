var coinChange = function(coins, amount) {
    let dp= new Array(amount+1).fill(Infinity)
    dp[0]=0

    for(let i=1;i<dp.length;i++){
        let res=Infinity
        for (coin of coins){
            if(i-coin>=0){
                res=Math.min(res,dp[i-coin]+1)
            }
        }
        dp[i]=res
    }
    return dp[dp.length-1]===Infinity?-1:dp[dp.length-1]
}
coins=[2]
amout=3
console.log(coinChange(coins, amout));