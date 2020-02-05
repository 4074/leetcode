### [638\. Shopping Offers](https://leetcode.com/problems/shopping-offers/)

Difficulty: **Medium**


In LeetCode Store, there are some kinds of items to sell. Each item has a price.

However, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price.

You are given the each item's price, a set of special offers, and the number we need to buy for each item. The job is to output the lowest price you have to pay for **exactly** certain items as given, where you could make optimal use of the special offers.

Each special offer is represented in the form of an array, the last number represents the price you need to pay for this special offer, other numbers represents how many specific items you could get if you buy this offer.

You could use any of special offers as many times as you want.

**Example 1:**  

```
Input: [2,5], [[3,0,5],[1,2,10]], [3,2]
Output: 14
Explanation: 
There are two kinds of items, A and B. Their prices are $2 and $5 respectively. 
In special offer 1, you can pay $5 for 3A and 0B
In special offer 2, you can pay $10 for 1A and 2B. 
You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.
```

**Example 2:**  

```
Input: [2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1]
Output: 11
Explanation: 
The price of A is $2, and $3 for B, $4 for C. 
You may pay $4 for 1A and 1B, and $9 for 2A ,2B and 1C. 
You need to buy 1A ,2B and 1C, so you may pay $4 for 1A and 1B (special offer #1), and $3 for 1B, $4 for 1C. 
You cannot add more items, though only $9 for 2A ,2B and 1C.
```

**Note:**  

1.  There are at most 6 kinds of items, 100 special offers.
2.  For each item, you need to buy at most 6 of them.
3.  You are **not** allowed to buy more items than you want, even if that would lower the overall price.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    const cache = new Map()
    cache.set(needs.map(() => 0).join(','), 0)
    
    function dp(needs) {
        const key = needs.join(',')
        
        if (!cache.has(key)) {
            const p = []
            for (let i = 0; i < price.length; i += 1) {
                if (needs[i] > 0) {
                    const n = needs.slice(0)
                    n[i] -= 1
                    p.push(price[i] + dp(n))
                }
            }
            
            for (const sp of special) {
                const n = needs.slice(0)
                for (let i = 0; i < n.length; i += 1) {
                    n[i] -= sp[i]
                    if (n[i] < 0) break
                    if (i === n.length - 1) {
                        p.push(sp[sp.length - 1] + dp(n))
                    }
                }
            }
            cache.set(key, Math.min.apply(null, p))
        }
        
        return cache.get(key)
    }
    
    return dp(needs)
};
```

结果与订单的顺序不关，所以可以使用顺序减枝
```javascript
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    const cache = new Map()
    cache.set(needs.map(() => 0).join(','), 0)
    
    function dp(needs, specialIndex) {
        const key = needs.join(',')
        
        if (!cache.has(key)) {
            const p = []
            if (specialIndex >= special.length) {
                let n = 0
                for (let i = 0; i < price.length; i += 1) {
                    if (needs[i] > 0) {
                        n += needs[i] * price[i]
                    }
                }
                p.push(n)
            } else {
                for (let j = specialIndex; j < special.length; j += 1) {
                    const sp = special[j]
                    const n = needs.slice(0)
                    for (let i = 0; i < n.length; i += 1) {
                        n[i] -= sp[i]
                        if (n[i] < 0) break
                        if (i === n.length - 1) {
                            p.push(sp[sp.length - 1] + dp(n, j))
                        }
                    }
                }

                p.push(dp(needs, special.length))
            }
            
            cache.set(key, Math.min.apply(null, p))
        }
        
        return cache.get(key)
    }
    
    return dp(needs, 0)
};
```