### [3\. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

Difficulty: **Medium**



Given a string, find the length of the **longest substring** without repeating characters.

**Examples:**

Given `"abcabcbb"`, the answer is `"abc"`, which the length is 3.

Given `"bbbbb"`, the answer is `"b"`, with the length of 1.

Given `"pwwkew"`, the answer is `"wke"`, with the length of 3\. Note that the answer must be a **substring**, `"pwke"` is a _subsequence_ and not a substring.



#### Solution
[https://leetcode.com/submissions/detail/142130474/](https://leetcode.com/submissions/detail/142130474/)
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length
    let start = 0, ans = 0, map = {}

    for (let i=0; i<n; i++) {
        if (map[s[i]] !== undefined && map[s[i]] >= start) {
            ans = Math.max(i - start, ans)
            start = map[s[i]] + 1
        }
        map[s[i]] = i
    }
    ans = Math.max(n - start, ans)

    return ans
};
```