/* 
  leetcode 198 打家劫舍
如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组，
计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
*/

function rob(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  if(len===1) return nums[0]
  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0],nums[1])

  for(let i=2;i<len;i++){
    let a = nums[i] + dp[i-2]
    let b = dp[i-1]
    dp[i] = Math.max(a,b)
  }
  return dp[len-1]
}
let nums = [5,2]
console.log(rob(nums))
