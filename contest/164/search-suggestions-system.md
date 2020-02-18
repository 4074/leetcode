### [1268\. Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/)

Difficulty: **Medium**


Given an array of strings `products` and a string `searchWord`. We want to design a system that suggests at most three product names from `products` after each character of `searchWord` is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return _list of lists_ of the suggested `products` after each character of `searchWord` is typed. 

**Example 1:**

```
Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
```

**Example 2:**

```
Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
```

**Example 3:**

```
Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
```

**Example 4:**

```
Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]
```

**Constraints:**

*   `1 <= products.length <= 1000`
*   There are no repeated elements in `products`.
*   `1 <= Σ products[i].length <= 2 * 10^4`
*   All characters of `products[i]` are lower-case English letters.
*   `1 <= searchWord.length <= 1000`
*   All characters of `searchWord` are lower-case English letters.


#### Solution

Language: **JavaScript**

```javascript
    
    const charCodeStart = 'a'.charCodeAt(0)
    function dfs(node, chars, index, result) {
        if (!node || result.length === 3) return
        if (chars.length < len) {
            const c = searchWord[chars.length]
            chars.push(c)
            dfs(node.children[c], chars, len, result)
        } else {
            if (node.isEnd) {
                result.push(chars.join(''))
            }
            for (let i = 0; i < 26; i += 1) {
                const c = String.fromCharCode(charCodeStart + i)
                chars.push(c)
                dfs(node.children[c], chars, len, result)
                chars.pop()
            }
        }
        
        return result
    }
    
    const root = new Node('')
    for (const product of products) {
        root.insert(product)
    }
    const result = []
    for (let i = 0; i < searchWord.length; i += 1) {
        result.push(dfs(root, [], i + 1, []))
    }
    
    return result
};
```

```javascript
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort()
    const result = []
    for (let i = 0; i < searchWord.length; i += 1) {
        products = products.filter(p => p[i] === searchWord[i])
        result.push(products.slice(0, 3))
    }
    return result
};
```