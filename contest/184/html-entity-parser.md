### [1410\. HTML Entity Parser](https://leetcode.com/problems/html-entity-parser/)

Difficulty: **Medium**


**HTML entity parser** is the parser that takes HTML code as input and replace all the entities of the special characters by the characters itself.

The special characters and their entities for HTML are:

*   **Quotation Mark:** the entity is `&quot;` and symbol character is `"`.
*   **Single Quote Mark:** the entity is `&apos;` and symbol character is `'`.
*   **Ampersand:** the entity is `&amp;` and symbol character is `&`.
*   **Greater Than Sign:** the entity is `&gt;` and symbol character is `>`.
*   **Less Than Sign:** the entity is `&lt;` and symbol character is `<`.
*   **Slash:** the entity is `&frasl;` and symbol character is `/`.

Given the input `text` string to the HTML parser, you have to implement the entity parser.

Return _the text_ after replacing the entities by the special characters.

**Example 1:**

```
Input: text = "& is an HTML entity but &ambassador; is not."
Output: "& is an HTML entity but &ambassador; is not."
Explanation: The parser will replace the & entity by &
```

**Example 2:**

```
Input: text = "and I quote: "...""
Output: "and I quote: \"...\""
```

**Example 3:**

```
Input: text = "Stay home! Practice on Leetcode :)"
Output: "Stay home! Practice on Leetcode :)"
```

**Example 4:**

```
Input: text = "x > y && x < y is always false"
Output: "x > y && x < y is always false"
```

**Example 5:**

```
Input: text = "leetcode.com⁄problemset⁄all"
Output: "leetcode.com/problemset/all"
```

**Constraints:**

*   `1 <= text.length <= 10^5`
*   The string may contain any possible characters out of all the 256 ASCII characters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    const encoded = ['&quot;', '&apos;', '&amp;', '&gt;', '&lt;', '&frasl;']
    const chars = ['"', "'", '&', '>', '<', '/']
    
    const stack = []
    for (let i = 0; i < text.length; i += 1) {
        if (text[i] === '&') {
            let matchIndex = -1
            for (let j = 0; j < encoded.length; j += 1) {
                let match = true
                for (let k = 1; k < encoded[j].length; k += 1) {
                    if (i + k >= text.length || encoded[j][k] !== text[i + k]) {
                        match = false
                        break
                    }
                }
                if (match) {
                    matchIndex = j
                    break
                }
            }
            if (matchIndex >= 0) {
                i += encoded[matchIndex].length - 1
                stack.push(chars[matchIndex])
            } else {
                stack.push(text[i])
            }
        } else {
            stack.push(text[i])
        }
    }
    
    return stack.join('')
};
```