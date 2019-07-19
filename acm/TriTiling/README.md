# [Tri Tiling](http://acm.hdu.edu.cn/showproblem.php?pid=1143)

**Problem Description**

In how many ways can you tile a 3xn rectangle with 2x1 dominoes? Here is a sample tiling of a 3x12 rectangle.

![img](http://acm.hdu.edu.cn/data/images/1143-1.jpg)

**Input**

Input consists of several test cases followed by a line containing -1. Each test case is a line containing an integer 0 ≤ n ≤ 30.

**Output**

For each test case, output one integer number giving the number of possible tilings. 

**Sample Input**

2<br>
8<br>
12<br>
-1<br>

**Sample Output**

3<br>
153<br>
2131

**Resolution**

f[i][0] = f[i-2][0] + f[i-1][1] + f[i-2][2]<br>
f[i][1] = f[i-1][2]<br>
f[i][2] = f[i][0] + f[i-1][1]<br>
f[0][0] = f[1][1] = f[0][2] = 1

```js
function get(n) {
    if (n % 2 !== 0) return 0;
    const result = {}

    function find(i, j) {
        const key = i + '-' + j
        if (result[key]) return result[key];
        return find(i - 2, 0) + find(i - 1, 1) + find(i-2, 2)
    }

    result['0-0'] = result['1-1'] = result['0-2'] = 1
}
```