### [1286\. Iterator for Combination](https://leetcode.com/problems/iterator-for-combination/)

Difficulty: **Medium**


Design an Iterator class, which has:

*   A constructor that takes a string `characters` of **sorted distinct** lowercase English letters and a number `combinationLength` as arguments.
*   A function _next()_ that returns the next combination of length `combinationLength` in **lexicographical order**.
*   A function _hasNext()_ that returns `True` if and only if there exists a next combination.

**Example:**

```
CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.

iterator.next(); // returns "ab"
iterator.hasNext(); // returns true
iterator.next(); // returns "ac"
iterator.hasNext(); // returns true
iterator.next(); // returns "bc"
iterator.hasNext(); // returns false
```

**Constraints:**

*   `1 <= combinationLength <= characters.length <= 15`
*   There will be at most `10^4` function calls per test.
*   It's guaranteed that all calls of the function `next` are valid.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.strings = []
    this.index = 0
    const dfs = (chars, index) => {
        if (chars.length === combinationLength) {
            return this.strings.push(chars.join(''))
        }
        for (let i = index; i < characters.length; i += 1) {
            chars.push(characters[i])
            dfs(chars, i + 1)
            chars.pop()
        }
    }
    dfs([], 0)
};
​
/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    const s = this.strings[this.index]
    this.index += 1
    return s
};
​
/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.index < this.strings.length
};
​
/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```