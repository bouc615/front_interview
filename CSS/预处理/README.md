### 介绍

CSS预处理器是新的CSS语言，需要通过Babel转换成CSS。预处理器主要有两种：

- less
- sass

**区别**

1. 编译环境不同
2. 变量符不同，Less是@,sass是$
3. 变量作用域不同
4. sass支持条件语句，if else for循环等

**特性：**

- 嵌套

- 变量与计算

- Extend和Mixin代码片段，例如垂直居中

- 循环，在复杂场景下有用，例如生成表格每一列的宽度

- import模块化

  在项目中如果拆成多个css文件，例如heade、body、footer.css，会影响性能

  