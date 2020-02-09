### [1345\. Jump Game IV](https://leetcode.com/problems/jump-game-iv/)

Difficulty: **Hard**


Given an array of integers `arr`, you are initially positioned at the first index of the array.

In one step you can jump from index `i` to index:

*   `i + 1` where: `i + 1 < arr.length`.
*   `i - 1` where: `i - 1 >= 0`.
*   `j` where: `arr[i] == arr[j]` and `i != j`.

Return _the minimum number of steps_ to reach the **last index** of the array.

Notice that you can not jump outside of the array at any time.

**Example 1:**

```
Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9\. Note that index 9 is the last index of the array.
```

**Example 2:**

```
Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You don't need to jump.
```

**Example 3:**

```
Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
```

**Example 4:**

```
Input: arr = [6,1,9]
Output: 2
```

**Example 5:**

```
Input: arr = [11,22,7,7,7,7,7,7,7,22,13]
Output: 3
```

**Constraints:**

*   `1 <= arr.length <= 5 * 10^4`
*   `-10^8 <= arr[i] <= 10^8`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const visited = Array(arr.length).fill(0)
    let queue = [0]
    let count = 0
    
    const indexes = {}
    for (let i = 0; i < arr.length; i += 1) {
        if (!indexes[arr[i]]) indexes[arr[i]] = []
        indexes[arr[i]].push(i)
    }
    
    visited[0] = 1
    while(queue.length) {
        let n = queue.length
        while (n > 0) {
            const i = queue.pop()
            if (i === arr.length - 1) return count
            
            if (i - 1 >= 0 && !visited[i - 1]) {
                visited[i - 1] = 1
                queue.unshift(i - 1)
            }
            if (i + 1 < arr.length && !visited[i + 1]) {↔}
            
            if (indexes[arr[i]]) {
                for (const j of indexes[arr[i]]) {
                    if (j !== i && !visited[j]) {
                        visited[j] = 1
                        queue.unshift(j)
                    }
                }
                indexes[arr[i]] = null
            }
            
            n -= 1
        }
        count += 1
    }
};
```