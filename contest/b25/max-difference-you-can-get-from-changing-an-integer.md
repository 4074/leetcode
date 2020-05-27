### [1432\. Max Difference You Can Get From Changing an Integer](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/)

Difficulty: **Medium**


You are given an integer `num`. You will apply the following steps exactly **two** times:

*   Pick a digit `x (0 <= x <= 9)`.
*   Pick another digit `y (0 <= y <= 9)`. The digit `y` can be equal to `x`.
*   Replace all the occurrences of `x` in the decimal representation of `num` by `y`.
*   The new integer **cannot** have any leading zeros, also the new integer **cannot** be 0.

Let `a` and `b` be the results of applying the operations to `num` the first and second times, respectively.

Return _the max difference_ between `a` and `b`.

**Example 1:**

```
Input: num = 555
Output: 888
Explanation: The first time pick x = 5 and y = 9 and store the new integer in a.
The second time pick x = 5 and y = 1 and store the new integer in b.
We have now a = 999 and b = 111 and max difference = 888
```

**Example 2:**

```
Input: num = 9
Output: 8
Explanation: The first time pick x = 9 and y = 9 and store the new integer in a.
The second time pick x = 9 and y = 1 and store the new integer in b.
We have now a = 9 and b = 1 and max difference = 8
```

**Example 3:**

```
Input: num = 123456
Output: 820000
```

**Example 4:**

```
Input: num = 10000
Output: 80000
```

**Example 5:**

```
Input: num = 9288
Output: 8700
```

**Constraints:**

*   `1 <= num <= 10^8`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const arr = (num + '').split('')
    let max = num, min = num
    
    for (let i = 0; i <= 9; i += 1) {
        const istr = `${i}`
        const maxArr = arr.map((v) => v === istr ? '9' : v)
        max = Math.max(max, parseInt(maxArr.join('')))
        
        const minDigit = arr[0] === istr ? '1' : '0'
        const minArr = arr.map((v, j) => {
            return v === istr ? minDigit : v
        })
        min = Math.min(min, parseInt(minArr.join('')))
    }
    
    return max - min
};
```