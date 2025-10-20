SHOW databases;
USE dev;

SELECT * 
FROM customers;

-- UPDATE customers
-- SET name = '?',
--     email = '?',
--     phone = '?',
--     address = '?'
-- WHERE id = '?'; 

UPDATE customers
SET ?
WHERE id = ?; 