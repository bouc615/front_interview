/**
 * 给定一个整数数组 nums
 * 找到一个具有最大和的连续子数组（子数组最少包含一个元素）
 * 返回其最大和
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
  输出: 6
  解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length==0) return null
    if(nums.length==1) return nums[0]
    var dp =[]
    dp[0] = nums[0]
    for(var i=1;i<nums.length;i++){   
      dp[i] = (dp[i-1]>0)?dp[i-1]+nums[i]:nums[i]
    }
    return Math.max(...dp)
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));