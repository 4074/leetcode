### [1383\. Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/)

Difficulty: **Hard**


There are `n` engineers numbered from 1 to `n` and two arrays: `speed` and `efficiency`, where `speed[i]` and `efficiency[i]` represent the speed and efficiency for the i-th engineer respectively. _Return the maximum **performance** of a team composed of at most `k` engineers, since the answer can be a huge number, return this modulo 10^9 + 7._

The **performance** of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers. 

**Example 1:**

```
Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
Output: 60
Explanation: 
We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.
```

**Example 2:**

```
Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
Output: 68
Explanation:
This is the same example as the first but k = 3\. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.
```

**Example 3:**

```
Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
Output: 72
```

**Constraints:**

*   `1 <= n <= 10^5`
*   `speed.length == n`
*   `efficiency.length == n`
*   `1 <= speed[i] <= 10^5`
*   `1 <= efficiency[i] <= 10^8`
*   `1 <= k <= n`


#### Solution

Language: **JavaScript**

```javascript
 /**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    const mod = 10 ** 9 + 7
    const indexes = Array(n).fill().map((_, i) => i)
    indexes.sort((a, b) => efficiency[b] - efficiency[a])
    
    const queue = new PriorityQueue()
    let speedSum = 0
    let ans = 0
    for (const index of indexes) {
        speedSum += speed[index]
        queue.push(speed[index])
        if (queue.length > k) {
            speedSum -= queue.pop()
        }
        let sum = BigInt(speedSum) * BigInt(efficiency[index])
        if (sum > ans) ans = sum
    }
    
    return parseInt(ans % BigInt(mod))
};

class PriorityQueue {
    constructor() {
        this.length = 0
        this.arr = []
    }

    push(val) {
        const index = this.findInsertIndex(val)
        this.arr.splice(index, 0, val)
        this.length += 1
        return this
    }

    pop() {
        if (this.length) this.length -= 1
        return this.arr.pop()
    }

    findInsertIndex(val) {
        let left = 0, right = this.arr.length
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (val >= this.arr[mid]) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    }
}
```