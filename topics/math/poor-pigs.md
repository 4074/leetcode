### [458\. Poor Pigs](https://leetcode.com/problems/poor-pigs/)

Difficulty: **Hard**  

Related Topics: [Math](https://leetcode.com/tag/math/)


There are 1000 buckets, one and only one of them is poisonous, while the rest are filled with water. They all look identical. If a pig drinks the poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket is poisonous within one hour?

Answer this question, and write an algorithm for the general case.

**General case:**

If there are `n` buckets and a pig drinking poison will die within `m` minutes, how many pigs (`x`) you need to figure out the **poisonous** bucket within `p` minutes? There is exactly one bucket with poison.

**Note:**

1.  A pig can be allowed to drink simultaneously on as many buckets as one would like, and the feeding takes no time.
2.  After a pig has instantly finished drinking buckets, there has to be a **cool down time** of _m _minutes. During this time, only observation is allowed and no feedings at all.
3.  Any given bucket can be sampled an infinite number of times (by an unlimited number of pigs).


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    const times = Math.floor(minutesToTest / minutesToDie) + 1
    let count = 0
    let total = 1
    while (total < buckets) {
        total *= times
        count += 1
    }
    return count
};
```