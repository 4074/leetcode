### [184\. Department Highest Salary](https://leetcode.com/problems/department-highest-salary/description/)

Difficulty: **Medium**



The `Employee` table holds all employees. Every employee has an Id, a salary, and there is also a column for the department Id.

```
+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
```

The `Department` table holds all departments of the company.

```
+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
```

Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, Max has the highest salary in the IT department and Henry has the highest salary in the Sales department.

```
+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |
+------------+----------+--------+
```



#### Solution
```
# Write your MySQL query statement below
SELECT
    d.Name Department,
    e.Name Employee,
    e.Salary
FROM
    employee e
INNER JOIN (
    SELECT
        DepartmentId,
        max(Salary) Salary
    FROM
        Employee
    GROUP BY
        DepartmentId
) g ON e.DepartmentId = g.DepartmentId
INNER JOIN department d on e.DepartmentId = d.Id
Where e.Salary = g.Salary
ORDER BY d.Id, e.Salary
```