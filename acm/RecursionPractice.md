# [一只小蜜蜂](http://acm.hdu.edu.cn/showproblem.php?pid=2044)

**Problem Description**

有一只经过训练的蜜蜂只能爬向右侧相邻的蜂房，不能反向爬行。请编程计算蜜蜂从蜂房a爬到蜂房b的可能路线数。
其中，蜂房的结构如下所示。

![img](http://acm.hdu.edu.cn/data/images/C40-1001-1.jpg)

**Input**

输入数据的第一行是一个整数N,表示测试实例的个数，然后是N 行数据，每行包含两个整数a和b(0<a<b<50)。

**Output**

对于每个测试实例，请输出蜜蜂从蜂房a爬到蜂房b的可能路线数，每个实例的输出占一行。

**Sample Input**

2<br>
1 2<br>
3 6<br>

**Sample Output**

1<br>
3

**Resolution**
```js
function howManyStepsForBee(a, b) {
    const steps = {}
    steps[1] = 1
    steps[2] = 2
    for (let i=3; i<=b-a; i++) {
        steps[i] = steps[i-1] + steps[i-2]
    }

    return steps[b-a]
}
```