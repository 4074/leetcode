### [1866\. Number of Ways to Rearrange Sticks With K Sticks Visible](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/)

Difficulty: **Hard**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


There are `n` uniquely-sized sticks whose lengths are integers from `1` to `n`. You want to arrange the sticks such that **exactly** `k` sticks are **visible** from the left. A stick is **visible** from the left if there are no **longer** sticks to the **left** of it.

*   For example, if the sticks are arranged `[<u style="display: inline;">1</u>,<u style="display: inline;">3</u>,2,<u style="display: inline;">5</u>,4]`, then the sticks with lengths `1`, `3`, and `5` are visible from the left.

Given `n` and `k`, return _the **number** of such arrangements_. Since the answer may be large, return it **modulo** `10<sup>9</sup> + 7`.

**Example 1:**

```
Input: n = 3, k = 2
Output: 3
Explanation: [1,3,2], [2,3,1], and [2,1,3] are the only arrangements such that exactly 2 sticks are visible.
The visible sticks are underlined.
```

**Example 2:**

```
Input: n = 5, k = 5
Output: 1
Explanation: [1,2,3,4,5] is the only arrangement such that all 5 sticks are visible.
The visible sticks are underlined.
```

**Example 3:**

```
Input: n = 20, k = 11
Output: 647427950
Explanation: There are 647427950 (mod 109 + 7) ways to rearrange the sticks such that exactly 11 sticks are visible.
```

**Constraints:**

*   `1 <= n <= 1000`
*   `1 <= k <= n`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var rearrangeSticks = function(n, k) {
  const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(0))
  const mod = 10 ** 9 + 7
  dp[0][0] = 1
  for (let i = 1; i <= n; i += 1) {
    const min = Math.min(i, k)
    for (let j = 1; j <= min; j += 1) {
      dp[i][j] = (dp[i - 1][j - 1] + (i - 1) * dp[i - 1][j]) % mod
    }
  }
  return dp[n][k]
};
```

```txt
解题思路
记 n 个位置， k可见的种类为
{ r{(n,k)}}r(n,k)

从最后位置插入木板后
有两种情况
1.插入最长的木板
此时该木板必可见
剩下的木板可见种类数为
{ r{(n-1,k-1)}}r(n−1,k−1)

2.插入其他木板
此时该木板比不可见
木板选择种类 n - 1

剩下的木板排列问题均等价于

{ r{(n-1,k)}}r(n−1,k)

综上
{ r{(n,k)} = r{(n-1,k-1)} + r{(n-1,k)}*(n-1)}r(n,k)=r(n−1,k−1)+r(n−1,k)∗(n−1)

又有 当 k <= 0 时 { r{(n,k)} = 0}r(n,k)=0
当 k > n 时 { r{(n,k)} = 0}r(n,k)=0
当 k = n 时 { r{(n,n)} = 1}r(n,n)=1
可作为边界条件

作者：ayaphis
链接：https://leetcode-cn.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solution/cong-zui-hou-cha-ru-mu-ban-by-ayaphis-5yxc/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```