### [1105\. Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/)

Difficulty: **Medium**


We have a sequence of `books`: the `i`-th book has thickness `books[i][0]` and height `books[i][1]`.

We want to place these books **in order** onto bookcase shelves that have total width `shelf_width`.

We choose some of the books to place on this shelf (such that the sum of their thickness is `<= shelf_width`), then build another level of shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down.  We repeat this process until there are no more books to place.

Note again that at each step of the above process, <u style="display: inline;">the order of the books we place is the same order as the given sequence of books</u>.  For example, if we have an ordered list of 5 books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.

Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/06/24/shelves.png)

```
Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelf_width = 4
Output: 6
Explanation:
The sum of the heights of the 3 shelves are 1 + 3 + 2 = 6.
Notice that book number 2 does not have to be on the first shelf.
```

**Constraints:**

*   `1 <= books.length <= 1000`
*   `1 <= books[i][0] <= shelf_width <= 1000`
*   `1 <= books[i][1] <= 1000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
    let dp = []
    
    for (let i = 0; i < books.length; i += 1) {
        const group = []
        if (i === 0) {
             group.push([books[i][0], books[i][1], 0])
        } else {
            let minHeight = Infinity
            for (const g of dp) {
                if (shelf_width - g[0] >= books[i][0]) {
                    group.push(
                        [g[0] + books[i][0], Math.max(books[i][1], g[1]), g[2]]
                    )
                }
                minHeight = Math.min(minHeight, g[1] + g[2])
            }
            group.push([books[i][0], books[i][1], minHeight])
        }
        
        dp = group
    }
    
    return dp.reduce((m, v) => Math.min(m, v[1] + v[2]), Infinity)
};
```

```javascript
/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
    const dp = Array(books.length).fill(Infinity)
    
    for (let i = 0; i < books.length; i += 1) {
        let w = 0
        let h = 0
        for (let j = i; j >= 0; j -= 1) {
            w += books[j][0]
            if (w > shelf_width) break
            h = Math.max(h, books[j][1])
            dp[i] = Math.min(dp[i], (j === 0 ? 0 : dp[j - 1]) + h)
        }
    }
    
    return dp[dp.length - 1]
};
```