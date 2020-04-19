### [1418\. Display Table of Food Orders in a Restaurant](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/)

Difficulty: **Medium**


Given the array `orders`, which represents the orders that customers have done in a restaurant. More specifically `orders[i]=[customerName<sub style="display: inline;">i</sub>,tableNumber<sub style="display: inline;">i</sub>,foodItem<sub style="display: inline;">i</sub>]` where `customerName<sub style="display: inline;">i</sub>` is the name of the customer, `tableNumber<sub style="display: inline;">i</sub>` is the table customer sit at, and `foodItem<sub style="display: inline;">i</sub>` is the item customer orders.

_Return the restaurant's “**display table**”_. The “**display table**” is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is “Table”, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.

**Example 1:**

```
Input: orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
Output: [["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]] 
Explanation:
The displaying table looks like:
Table,Beef Burrito,Ceviche,Fried Chicken,Water
3    ,0           ,2      ,1            ,0
5    ,0           ,1      ,0            ,1
10   ,1           ,0      ,0            ,0
For the table 3: David orders "Ceviche" and "Fried Chicken", and Rous orders "Ceviche".
For the table 5: Carla orders "Water" and "Ceviche".
For the table 10: Corina orders "Beef Burrito". 
```

**Example 2:**

```
Input: orders = [["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]
Output: [["Table","Canadian Waffles","Fried Chicken"],["1","2","0"],["12","0","3"]] 
Explanation: 
For the table 1: Adam and Brianna order "Canadian Waffles".
For the table 12: James, Ratesh and Amadeus order "Fried Chicken".
```

**Example 3:**

```
Input: orders = [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]
Output: [["Table","Bean Burrito","Beef Burrito","Soda"],["2","1","1","1"]]
```

**Constraints:**

*   `1 <= orders.length <= 5 * 10^4`
*   `orders[i].length == 3`
*   `1 <= customerName<sub style="display: inline;">i</sub>.length, foodItem<sub style="display: inline;">i</sub>.length <= 20`
*   `customerName<sub style="display: inline;">i</sub>` and `foodItem<sub style="display: inline;">i</sub>` consist of lowercase and uppercase English letters and the space character.
*   `tableNumber<sub style="display: inline;">i</sub> `is a valid integer between `1` and `500`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    const map = new Map()
    const foods = new Set()
    for (const order of orders) {
        const [_, num, food] = order
        foods.add(food)
        if (!map.has(num)) {
            map.set(num, new Map())
        }
        map.get(num).set(food, (map.get(num).get(food) || 0) + 1)
    }
    const foodsArr = [...foods].sort((a, b) => a < b ? -1 : 1)
    
    const header = ['Table', ...foodsArr]
    const content = []
    
    for (const num of map.keys()) {
        const row = [num]
        for (const food of foodsArr) {
            row.push((map.get(num).get(food) || 0) + '')
        }
        content.push(row)
    }
    
    content.sort((a, b) => parseInt(a[0]) < parseInt(b[0]) ? -1 : 1)
    content.unshift(header)
    
    return content
};
```