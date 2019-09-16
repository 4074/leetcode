### [1189\. Maximum Number of Balloons](https://leetcode.com/problems/maximum-number-of-balloons/)

Difficulty: **Easy**


Given a string `text`, you want to use the characters of `text` to form as many instances of the word **"balloon"** as possible.

You can use each character in `text` **at most once**. Return the maximum number of instances that can be formed.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2019/09/05/1536_ex1_upd.JPG)**

```
Input: text = "nlaebolko"
Output: 1
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2019/09/05/1536_ex2_upd.JPG)**

```
Input: text = "loonbalxballpoon"
Output: 2
```

**Example 3:**

```
Input: text = "leetcode"
Output: 0
```

**Constraints:**

*   `1 <= text.length <= 10^4`
*   `text` consists of lower case English letters only.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    var number = text.length, numbers = {b: 0, a: 0, l: 0, o: 0, n: 0}
    for (var i=0; i<text.length; i++) {
        if (numbers[text[i]] !== undefined) {
            numbers[text[i]] += 1
        }
    }
    
    for (var key in numbers) {
        var m = key === 'l' || key === 'o' ? 2 : 1
        number = Math.min(number, numbers[key]/m)
    }
    
    return Math.floor(number)
};
```