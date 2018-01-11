### [185\. Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/description/)

Difficulty: **Hard**

The `Employee` table holds all employees. Every employee has an Id, and there is also a column for the department Id.

```
+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
| 5  | Janet | 69000  | 1            |
| 6  | Randy | 85000  | 1            |
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

Write a SQL query to find employees who earn the top three salaries in each of the department. For the above tables, your SQL query should return the following rows.

```
+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Randy    | 85000  |
| IT         | Joe      | 70000  |
| Sales      | Henry    | 80000  |
| Sales      | Sam      | 60000  |
+------------+----------+--------+
```

#### My Solution
```
# Write your MySQL query statement below
SELECT
    d.`Name` Department,
    e1.`Name` Employee,
    e1.Salary
FROM
    employee e1
JOIN department d ON d.Id = e1.DepartmentId
WHERE
    (
        SELECT
            count(DISTINCT e2.Salary)
        FROM
            employee e2
        WHERE
            e2.Salary > e1.Salary
        AND e2.DepartmentId = e1.DepartmentId
    ) <= 2
ORDER BY
    d.Id ASC,
    Salary DESC
```