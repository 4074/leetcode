### [1773\. Count Items Matching a Rule](https://leetcode.com/problems/count-items-matching-a-rule/)

Difficulty: **Easy**  

Related Topics: [Array](https://leetcode.com/tag/array/), [String](https://leetcode.com/tag/string/)


You are given an array `items`, where each `items[i] = [type<sub style="display: inline;">i</sub>, color<sub style="display: inline;">i</sub>, name<sub style="display: inline;">i</sub>]` describes the type, color, and name of the `i<sup>th</sup>` item. You are also given a rule represented by two strings, `ruleKey` and `ruleValue`.

The `i<sup>th</sup>` item is said to match the rule if **one** of the following is true:

*   `ruleKey == "type"` and `ruleValue == type<sub style="display: inline;">i</sub>`.
*   `ruleKey == "color"` and `ruleValue == color<sub style="display: inline;">i</sub>`.
*   `ruleKey == "name"` and `ruleValue == name<sub style="display: inline;">i</sub>`.

Return _the number of items that match the given rule_.

**Example 1:**

```
Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
```

**Example 2:**

```
Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
```

**Constraints:**

*   `1 <= items.length <= 10<sup>4</sup>`
*   `1 <= type<sub style="display: inline;">i</sub>.length, color<sub style="display: inline;">i</sub>.length, name<sub style="display: inline;">i</sub>.length, ruleValue.length <= 10`
*   `ruleKey` is equal to either `"type"`, `"color"`, or `"name"`.
*   All strings consist only of lowercase letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const index = ['type', 'color', 'name'].indexOf(ruleKey)
    if (index < 0) return 0
    return items.filter((item) => ruleValue === item[index]).length
};
```