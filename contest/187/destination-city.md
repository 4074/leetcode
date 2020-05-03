### [1436\. Destination City](https://leetcode.com/problems/destination-city/)

Difficulty: **Easy**


You are given the array `paths`, where `paths[i] = [cityA<sub style="display: inline;">i</sub>, cityB<sub style="display: inline;">i</sub>]` means there exists a direct path going from `cityA<sub style="display: inline;">i</sub>` to `cityB<sub style="display: inline;">i</sub>`. _Return the destination city, that is, the city without any path outgoing to another city._

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

**Example 1:**

```
Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
```

**Example 2:**

```
Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".
```

**Example 3:**

```
Input: paths = [["A","Z"]]
Output: "Z"
```

**Constraints:**

*   `1 <= paths.length <= 100`
*   `paths[i].length == 2`
*   `1 <= cityA<sub style="display: inline;">i</sub>.length, cityB<sub style="display: inline;">i</sub>.length <= 10`
*   `cityA<sub style="display: inline;">i </sub><font face="monospace" style="display: inline;">!= </font>cityB<sub style="display: inline;">i</sub>`
*   All strings consist of lowercase and uppercase English letters and the space character.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const froms = new Set()
    const tos = new Set()
    
    for (const [f, t] of paths) {
        froms.add(f)
        tos.add(t)
    }
    
    for (const t of tos.values()) {
        if (!froms.has(t)) return t
    }
};
```