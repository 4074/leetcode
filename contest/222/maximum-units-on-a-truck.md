### [1710\. Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/)

Difficulty: **Easy**  

Related Topics: [Greedy](https://leetcode.com/tag/greedy/), [Sort](https://leetcode.com/tag/sort/)


You are assigned to put some amount of boxes onto **one truck**. You are given a 2D array `boxTypes`, where `boxTypes[i] = [numberOfBoxes<sub style="display: inline;">i</sub>, numberOfUnitsPerBox<sub style="display: inline;">i</sub>]`:

*   `numberOfBoxes<sub style="display: inline;">i</sub>` is the number of boxes of type `i`.
*   `numberOfUnitsPerBox<sub style="display: inline;">i</sub>`is the number of units in each box of the type `i`.

You are also given an integer `truckSize`, which is the **maximum** number of **boxes** that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed `truckSize`.

Return _the **maximum** total number of **units** that can be put on the truck._

**Example 1:**

```
Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:
- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
You can take all the boxes of the first and second types, and one box of the third type.
The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.
```

**Example 2:**

```
Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
Output: 91
```

**Constraints:**

*   `1 <= boxTypes.length <= 1000`
*   `1 <= numberOfBoxes<sub style="display: inline;">i</sub>, numberOfUnitsPerBox<sub style="display: inline;">i</sub> <= 1000`
*   `1 <= truckSize <= 10<sup>6</sup>`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => a[1] - b[1])
    
    let ans = 0
    while (boxTypes.length && truckSize > 0) {
        const [num, size] = boxTypes.pop()
        ans += Math.min(truckSize, num) * size
        truckSize -= num
    }
    
    return ans
};
```