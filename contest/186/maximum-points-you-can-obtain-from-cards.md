### [1423\. Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)

Difficulty: **Medium**


There are several cards **arranged in a row**, and each card has an associated number of points The points are given in the integer array `cardPoints`.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly `k` cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array `cardPoints` and the integer `k`, return the _maximum score_ you can obtain.

**Example 1:**

```
Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1\. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
```

**Example 2:**

```
Input: cardPoints = [2,2,2], k = 2
Output: 4
Explanation: Regardless of which two cards you take, your score will always be 4.
```

**Example 3:**

```
Input: cardPoints = [9,7,7,9,7,7,9], k = 7
Output: 55
Explanation: You have to take all the cards. Your score is the sum of points of all cards.
```

**Example 4:**

```
Input: cardPoints = [1,1000,1], k = 1
Output: 1
Explanation: You cannot take the card in the middle. Your best score is 1\. 
```

**Example 5:**

```
Input: cardPoints = [1,79,80,1,1,1,200,1], k = 3
Output: 202
```

**Constraints:**

*   `1 <= cardPoints.length <= 10^5`
*   `1 <= cardPoints[i] <= 10^4`
*   `1 <= k <= cardPoints.length`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length
    const prefixSum = Array(n + 1).fill(0)
    const suffixSum = Array(n + 1).fill(0)
    
    for (let i = 1; i <= k; i += 1) {
        prefixSum[i] = prefixSum[i - 1] + cardPoints[i - 1]
        suffixSum[n - i] = suffixSum[n - i + 1] + cardPoints[n - i]
    }
    
    let ans = 0
    for (let i = -1; i < k; i += 1) {
        ans = Math.max(ans, prefixSum[i + 1] + suffixSum[n - (k - i - 1)])
    }
    
    return ans
};
```

Sliding Window
```javascript
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const n = cardPoints.length
    let sum = 0
    
    for (let i = 0; i < k; i += 1) {
        sum += cardPoints[i]
    }
    
    let ans = sum
    for (let i = k - 1; i >= 0; i -= 1) {
        sum = sum - cardPoints[i] + cardPoints[n - (k - i)]
        ans = Math.max(ans, sum)
    }
    
    return ans
};
```