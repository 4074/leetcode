### [1801\. Number of Orders in the Backlog](https://leetcode.com/problems/number-of-orders-in-the-backlog/)

Difficulty: **Medium**  

Related Topics: [Heap](https://leetcode.com/tag/heap/), [Greedy](https://leetcode.com/tag/greedy/)


You are given a 2D integer array `orders`, where each `orders[i] = [price<sub style="display: inline;">i</sub>, amount<sub style="display: inline;">i</sub>, orderType<sub style="display: inline;">i</sub>]` denotes that `amount<sub style="display: inline;">i</sub>`orders have been placed of type `orderType<sub style="display: inline;">i</sub>` at the price `price<sub style="display: inline;">i</sub>`. The `orderType<sub style="display: inline;">i</sub>` is:

*   `0` if it is a batch of `buy` orders, or
*   `1` if it is a batch of `sell` orders.

Note that `orders[i]` represents a batch of `amount<sub style="display: inline;">i</sub>` independent orders with the same price and order type. All orders represented by `orders[i]` will be placed before all orders represented by `orders[i+1]` for all valid `i`.

There is a **backlog** that consists of orders that have not been executed. The backlog is initially empty. When an order is placed, the following happens:

*   If the order is a `buy` order, you look at the `sell` order with the **smallest** price in the backlog. If that `sell` order's price is **smaller than or equal to** the current `buy` order's price, they will match and be executed, and that `sell` order will be removed from the backlog. Else, the `buy` order is added to the backlog.
*   Vice versa, if the order is a `sell` order, you look at the `buy` order with the **largest** price in the backlog. If that `buy` order's price is **larger than or equal to** the current `sell` order's price, they will match and be executed, and that `buy` order will be removed from the backlog. Else, the `sell` order is added to the backlog.

Return _the total **amount** of orders in the backlog after placing all the orders from the input_. Since this number can be large, return it **modulo** `10<sup>9</sup> + 7`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/11/ex1.png)

```
Input: orders = [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]
Output: 6
Explanation: Here is what happens with the orders:
- 5 orders of type buy with price 10 are placed. There are no sell orders, so the 5 orders are added to the backlog.
- 2 orders of type sell with price 15 are placed. There are no buy orders with prices larger than or equal to 15, so the 2 orders are added to the backlog.
- 1 order of type sell with price 25 is placed. There are no buy orders with prices larger than or equal to 25 in the backlog, so this order is added to the backlog.
- 4 orders of type buy with price 30 are placed. The first 2 orders are matched with the 2 sell orders of the least price, which is 15 and these 2 sell orders are removed from the backlog. The 3rd order is matched with the sell order of the least price, which is 25 and this sell order is removed from the backlog. Then, there are no more sell orders in the backlog, so the 4th order is added to the backlog.
Finally, the backlog has 5 buy orders with price 10, and 1 buy order with price 30\. So the total number of orders in the backlog is 6.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/03/11/ex2.png)

```
Input: orders = [[7,1000000000,1],[15,3,0],[5,999999995,0],[5,1,1]]
Output: 999999984
Explanation: Here is what happens with the orders:
- 109 orders of type sell with price 7 are placed. There are no buy orders, so the 109 orders are added to the backlog.
- 3 orders of type buy with price 15 are placed. They are matched with the 3 sell orders with the least price which is 7, and those 3 sell orders are removed from the backlog.
- 999999995 orders of type buy with price 5 are placed. The least price of a sell order is 7, so the 999999995 orders are added to the backlog.
- 1 order of type sell with price 5 is placed. It is matched with the buy order of the highest price, which is 5, and that buy order is removed from the backlog.
Finally, the backlog has (1000000000-3) sell orders with price 7, and (999999995-1) buy orders with price 5\. So the total number of orders = 1999999991, which is equal to 999999984 % (109 + 7).
```

**Constraints:**

*   `1 <= orders.length <= 10<sup>5</sup>`
*   `orders[i].length == 3`
*   `1 <= price<sub style="display: inline;">i</sub>, amount<sub style="display: inline;">i</sub> <= 10<sup>9</sup>`
*   `orderType<sub style="display: inline;">i</sub>` is either `0` or `1`.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
  const mod = 10 ** 9 + 7
  const buyHeap = new Heap([], (a, b) => a[0] < b[0] ? 1 : -1)
  const sellHeap = new Heap([], (a, b) => a[0] < b[0] ? -1 : 1)
  
  for (let i = 0; i < orders.length; i += 1) {
    let [price, amount, type] = orders[i]
    if (type === 0) {
      while (amount && sellHeap.size && sellHeap.peek()[0] <= price) {
        const item = sellHeap.arr[0]
        const diff = Math.min(amount, orders[item[1]][1])
        amount -= diff
        orders[item[1]][1] -= diff
        if (!orders[item[1]][1]) {
          sellHeap.pop()
        }
      }
      orders[i][1] = amount
      if (amount) {
        buyHeap.push([price, i])
      }
    } else {
      while (amount && buyHeap.size && buyHeap.peek()[0] >= price) {
        const item = buyHeap.arr[0]
        const diff = Math.min(amount, orders[item[1]][1])
        amount -= diff
        orders[item[1]][1] -= diff
        if (!orders[item[1]][1]) {
          buyHeap.pop()
        }
      }
      orders[i][1] = amount
      if (amount) {
        sellHeap.push([price, i])
      }
    }
  }
  
  let sum = 0
  for (const order of orders) {
    sum = (sum + order[1]) % mod
  }
  
  return sum
};

class Heap {
  arr = []
  size = 0

  left = index => index * 2 + 1
  right = index => index * 2 + 2
  parent = index => Math.floor((index - 1) / 2)
  swap = (i, j) => {
    const tmp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = tmp
  }

  constructor(arr, comparator) {
    this.arr = arr || []
    this.comparator = comparator || ((parent, child) => parent < child ? -1 : 1)
    this.size = this.arr.length

    for (let i = Math.floor((this.size - 1) / 2); i >= 0; i -= 1) {
      this.heapify(i)
    }
  }

  heapify(index) {
    let largest = index
    const l = this.left(index)
    const r = this.right(index)

    if (l < this.size && this.comparator(this.arr[largest], this.arr[l]) > 0)
      largest = l
    if (r < this.size && this.comparator(this.arr[largest], this.arr[r]) > 0)
      largest = r

    if (index !== largest) {
      this.swap(index, largest)
      this.heapify(largest)
    }
  }

  push(item) {
    this.arr.push(item)
    this.size += 1

    let c = this.size - 1
    let p = this.parent(c)
    while (p >= 0 && this.comparator(this.arr[p], this.arr[c]) > 0) {
      this.swap(c, p)
      c = p
      p = this.parent(p)
    }

    return this
  }

  pop() {
    if (this.size === 0) return
    this.swap(0, this.size - 1)
    this.size -= 1
    this.heapify(0)
    return this.arr.pop()
  }

  peek() {
    return this.arr[0]
  }

  sort() {
    while (this.size > 1) {
      this.swap(0, this.size - 1)
      this.size -= 1
      this.heapify(0)
    }
    this.size = this.arr.length
    return [...this.arr]
  }
}
```