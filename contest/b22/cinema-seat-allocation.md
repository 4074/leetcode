### [1386\. Cinema Seat Allocation](https://leetcode.com/problems/cinema-seat-allocation/)

Difficulty: **Medium**


![](https://assets.leetcode.com/uploads/2020/02/14/cinema_seats_1.png)

A cinema has `n` rows of seats, numbered from 1 to `n` and there are ten seats in each row, labelled from 1 to 10 as shown in the figure above.

Given the array `reservedSeats` containing the numbers of seats already reserved, for example, `reservedSeats[i]=[3,8]` means the seat located in row **3** and labelled with **8** is already reserved. 

_Return the maximum number of four-person families you can allocate on the cinema seats._ A four-person family occupies fours seats **in one row**, that are **next to each other**. Seats across an aisle (such as [3,3] and [3,4]) are not considered to be next to each other, however, It is permissible for the four-person family to be separated by an aisle, but in that case, **exactly two people** have to sit on each side of the aisle.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/02/14/cinema_seats_3.png)

```
Input: n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
Output: 4
Explanation: The figure above shows the optimal allocation for four families, where seats mark with blue are already reserved and contiguous seats mark with orange are for one family. 
```

**Example 2:**

```
Input: n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
Output: 2
```

**Example 3:**

```
Input: n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
Output: 4
```

**Constraints:**

*   `1 <= n <= 10^9`
*   `1 <= reservedSeats.length <= min(10*n, 10^4)`
*   `reservedSeats[i].length == 2`
*   `1 <= reservedSeats[i][0] <= n`
*   `1 <= reservedSeats[i][1] <= 10`
*   All `reservedSeats[i]` are distinct.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const left = parseInt('0111100000', 2)
    const middle = parseInt('0001111000', 2)
    const right = parseInt('0000011110', 2)
    
    const countArr = []
    for (let i = 0; i < (1 << 10); i += 1) {
        let c = 0
        if ((i | left) === i + left) c += 1
        if ((i | right) === i + right) c += 1
        if (c === 0 && (i | middle) === i + middle) c += 1
        countArr.push(c)
    }
    
    const reserved = new Map()
    for (const item of reservedSeats) {
        const [row, label] = item
        if (reserved.has(row)) {
            reserved.set(row, reserved.get(row) | (1 << (10 - label)))
        } else {
            reserved.set(row, 1 << (10 - label))
        }
    }
    
    let count = (n - reserved.size) * 2
    for (const key of reserved.keys()) {
        count += countArr[reserved.get(key)]
    }
    
    return count
};
```