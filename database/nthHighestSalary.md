### [177\. Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/description/)

Difficulty: **Medium**

Write a SQL query to get the _n_<sup>th</sup> highest salary from the `Employee` table.

```
+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
```

For example, given the above Employee table, the _n_<sup>th</sup> highest salary where _n_ = 2 is `200`. If there is no _n_<sup>th</sup> highest salary, then the query should return `null`.

```
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
```

#### My Solution
```
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN ( 
      select distinct e1.salary from Employee e1 where N-1 = (select count(distinct e2.Salary) from Employee e2 where e1.Salary < e2.Salary)
  );
END
```