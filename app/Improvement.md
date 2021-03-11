## Q3. With the expansion of business, the number of website users is increasing. The original data table has grown to the point where it is very slow to read and write data. Please describe how you will handle this from the two aspects of reading and writing.

## Ans:
1. As of reading data:
* Implement redis server for client-side caching.
* Use temporary tables to improve data performance by taking data needed out of the large tables.
* Use data pre-staging to have data faster. Join tables beforehand to avoid joining tables together at once.
* Avoid negative searches with better indexes.
* Avoid using SQL server cursor if possible.
* When using SQL queries with SELECT, make sure to have the correct number of columns to avoid pulling off more data than needed.
* Avoid using the keyword DISTINCT in SQL queries if possible. DISTINCT can cause extra operation which leads to the result of slowing all the queries down.

2. As of writing data: 
* Use CASE instead of UPDATE in SQL query since UPDATE writes longer than CASE due to its logging.
* Use small batch data deletion and updates to avoid data loss or killing in case there is a rollback.
