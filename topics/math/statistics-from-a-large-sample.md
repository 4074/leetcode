### [1093\. Statistics from a Large Sample](https://leetcode.com/problems/statistics-from-a-large-sample/)

Difficulty: **Medium**


We sampled integers between `0` and `255`, and stored the results in an array `count`:  `count[k]` is the number of integers we sampled equal to `k`.

Return the minimum, maximum, mean, median, and mode of the sample respectively, as an array of **floating point numbers**.  The mode is guaranteed to be unique.

_(Recall that the median of a sample is:_

*   _The middle element, if the elements of the sample were sorted and the number of elements is odd;_
*   _The average of the middle two elements, if the elements of the sample were sorted and the number of elements is even.)_

**Example 1:**

```
Input: count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [1.00000,3.00000,2.37500,2.50000,3.00000]
```

**Example 2:**

```
Input: count = [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: [1.00000,4.00000,2.18182,2.00000,1.00000]
```

**Constraints:**

1.  `count.length == 256`
2.  `1 <= sum(count) <= 10^9`
3.  The mode of the sample that count represents is unique.
4.  Answers within `10^-5` of the true value will be accepted as correct.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
    let min
    let max = 0
    let sum = 0
    let mode = 0
    let countMax = 0
    let nums = 0
    let numsArr = []
    for (let i = 0; i < count.length; i += 1){
        if (count[i] > 0) {
            if (min === undefined) min = i
            max = i
            sum += i * count[i]
            if (count[i] > countMax) {
                mode = i
                countMax = count[i]
            }
            nums += count[i]
            if (count[i]) {
                numsArr.push([nums, i])
            }
        }
    }
    
    let median
    const m = nums / 2
    for (let i = 0; i < numsArr.length; i += 1) {
        if (numsArr[i][0] > m) {
            if (numsArr[i - 1][0] < m) {
                median = numsArr[i][1]
            } else {
                median = (numsArr[i][1] + numsArr[i - 1][1]) / 2
            }
            break
        }
    }
    
    return [min, max, sum/nums, median, mode]
};
```