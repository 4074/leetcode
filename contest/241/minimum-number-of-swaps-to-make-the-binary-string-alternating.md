### [1864\. Minimum Number of Swaps to Make the Binary String Alternating](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/)

Difficulty: **Medium**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/)


Given a binary string `s`, return _the **minimum** number of character swaps to make it **alternating**, or_ `-1` _if it is impossible._

The string is called **alternating** if no two adjacent characters are equal. For example, the strings `"010"` and `"1010"` are alternating, while the string `"0100"` is not.

Any two characters may be swapped, even if they are **not adjacent**.

**Example 1:**

```
Input: s = "111000"
Output: 1
Explanation: Swap positions 1 and 4: "111000" -> "101010"
The string is now alternating.
```

**Example 2:**

```
Input: s = "010"
Output: 0
Explanation: The string is already alternating, no swaps are needed.
```

**Example 3:**

```
Input: s = "1110"
Output: -1
```

**Constraints:**

*   `1 <= s.length <= 1000`
*   `s[i]` is either `'0'` or `'1'`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  const count = [0, 0]
  
  for (let i = 0; i < s.length; i += 1) {
    count[s[i]] += 1
  }
  
  if (Math.abs(count[0] - count[1]) > 1) return -1
  
  function compute(even, odd) {
    let swap = 0
    for (let i = 0; i < s.length; i += 1) {
      if (i & 1) {
        if (s[i] !== odd) swap += 1
      } else {
        if (s[i] !== even) swap += 1
      }
    }
    return swap / 2
  }
  
  if (count[0] === count[1]) return Math.min(compute('0', '1'), compute('1', '0'))
  return count[0] > count[1] ? compute('0', '1') : compute('1', '0')
};
```