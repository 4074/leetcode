### [196\. Delete Duplicate Emails](https://leetcode.com/problems/delete-duplicate-emails/)

Difficulty: **Easy**

Write a SQL query to delete all duplicate email entries in a table named `Person`, keeping only unique emails based on its _smallest_ **Id**.

```
+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.
```

For example, after running your query, the above `Person` table should have the following rows:

```
+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
```


#### My MySQL query

```
delete from Person where id not in (select minid from (select min(id) as minid from Person group by Email) a)
```