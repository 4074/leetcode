### [180\. Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/description/)

Difficulty: **Medium**

Write a SQL query to find all numbers that appear at least three times consecutively.

```
+----+-----+
| Id | Num |
+----+-----+
| 1  |  1  |
| 2  |  1  |
| 3  |  1  |
| 4  |  2  |
| 5  |  1  |
| 6  |  2  |
| 7  |  2  |
+----+-----+
```

For example, given the above `Logs` table, `1` is the only number that appears consecutively for at least three times.

```
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
```

#### My Solution
```
# Write your MySQL query statement below
select distinct l1.Num ConsecutiveNums from Logs l1
join Logs l2 on l2.Id = l1.Id - 1
join Logs l3 on l3.Id = l2.Id - 1
where l1.Num = l2.Num and l1.Num = l3.Num
```