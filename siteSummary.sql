-- Write a `SELECT` statement to generate the report by site for Long Rains 2011.

-- key words

--     SELECT -> helps us to choose the field we want to be displayed
--     FROM  -> shows us the table we want to pull the data from.
--     WHERE -> allows us to filter our query to be more specific.
--     ORDER BY -> by default order by will sort in ascending order.
--     JOIN ->is used to combine rows from two or more tables, based on a related column between them.


-- this is for displaying the long rain season
SELECT seasonName FROM seasons WHERE seasonName = 'Long Rain'

JOIN

-- this is for displaying the clients and their counts
SELECT COUNT(firstName, lastName) FROM Clients

JOIN

-- this is for displaying and counting the groups
SELECT COUNT(GroupName) FROM groups

JOIN

-- this is for displaying the districts
SELECT * FROM districts
   
ORDER BY
     sector
;





















SELECT COUNT(column_name)
FROM Clients
WHERE condition;