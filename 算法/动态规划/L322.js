/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。
 * 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 */

 /**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var temp,dp=[]
  for(var i=0;i<=amount;i++){
    dp[i]= coins.indexOf(i)==-1?-1:1
  }
  dp[0] = 0
    for(var i=1;i<=amount;i++){
      temp = []
      for(var j=0;j<coins.length;j++){
        if(i-coins[j]>=0&&dp[i-coins[j]]!=-1){
          temp.push(dp[i-coins[j]]+1)
        }
      }
      if(temp.length>0)  dp[i] = Math.min(...temp)          
    }
  return dp[amount]
}