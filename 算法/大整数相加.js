/**
 * 题目描述
 * 有两个用字符串表示的非常大的大整数,算出他们的乘积，也是用字符串表示。不能用系统自带的大整数类型。
 * 
 * 实现思路
 * 直接相乘是不可能的，必须通过字符串的转换来实现
 * 有如下公式：
 * AB*CD = AC (BC+AD) BD
 * 满十进一
 * 两个数相乘的位数肯定小于等于两个数的长度和
 * 接下来要做的就是模拟手算过程
 */
function multiply(num1,num2){
  var array = new Array(num1.length+num2.length)
  //将数组全部填充为0
  for(var i=0;i<array.length;i++){
    array[i] = 0
  }
  var a = num1.split('').reverse()
  var b = num2.split('').reverse()

  //不考虑进位，将每一位相乘的结果放入数组
  for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
      array[i+j]+=a[i]*b[j]
    }
  }
  var add=0;

  var res=[]
  for(var i=0;i<array.length;i++){
    array[i]= add + array[i]
    add = parseInt(array[i]/10)
    array[i] = array[i]%10
    res[i] = array[i]
  }


  var result = res.reverse().join('')
  var index = 0
  while(result[index]==='0'){
    index++
  }

  console.log(result)
  return result.substring(index)

}
console.log(multiply('12332432432','223432423423'))