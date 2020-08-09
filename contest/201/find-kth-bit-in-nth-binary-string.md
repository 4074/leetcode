### [1545\. Find Kth Bit in Nth Binary String](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/)

Difficulty: **Medium**  

Related Topics: [String](https://leetcode.com/tag/string/)


Given two positive integers `n` and `k`, the binary string  `S<sub style="display: inline;">n</sub>` is formed as follows:

*   `S<sub style="display: inline;">1</sub> = "0"`
*   `S<sub style="display: inline;"><span style="font-size: 10.8333px; display: inline;">i</span></sub> = S<sub style="display: inline;"><span style="font-size: 10.8333px; display: inline;">i-1</span></sub> + "1" + reverse(invert(S<sub style="display: inline;"><span style="font-size: 10.8333px; display: inline;">i-1</span></sub>))` for `i > 1`

Where `+` denotes the concatenation operation, `reverse(x)` returns the reversed string <font face="monospace" style="display: inline;">x,</font> and `invert(x)` inverts all the bits in <font face="monospace" style="display: inline;">x</font> (0 changes to 1 and 1 changes to 0).

For example, the first 4 strings in the above sequence are:

*   `S<sub style="display: inline;">1 </sub>= "0"`
*   `S<sub style="display: inline;">2 </sub>= "0**1**1"`
*   `S<sub style="display: inline;">3 </sub>= "011**1**001"`
*   `S<sub style="display: inline;">4</sub> = "0111001**1**0110001"`

Return _the_ `k<sup>th</sup>` _bit_ _in_ `S<sub style="display: inline;">n</sub>`. It is guaranteed that `k` is valid for the given `n`.

**Example 1:**

```
Input: n = 3, k = 1
Output: "0"
Explanation: S3 is "0111001". The first bit is "0".
```

**Example 2:**

```
Input: n = 4, k = 11
Output: "1"
Explanation: S4 is "011100110110001". The 11th bit is "1".
```

**Example 3:**

```
Input: n = 1, k = 1
Output: "0"
```

**Example 4:**

```
Input: n = 2, k = 3
Output: "1"
```

**Constraints:**

*   `1 <= n <= 20`
*   `1 <= k <= 2<sup>n</sup> - 1`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    const s = ['0']
    for (let i = 1; i <= n; i += 1) {
        s.push('1')
        for (let j = s.length - 2; j >= 0; j -= 1) {
            s.push(s[j] === '0' ? '1' : '0')
        }
    }
    return s[k - 1]
};
```