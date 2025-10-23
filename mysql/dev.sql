SHOW databases;
USE dev;


-- UPDATE customers
-- SET name = '?',
--     email = '?',
--     phone = '?',
--     address = '?'
-- WHERE id = '?'; 

UPDATE customers
SET ?
WHERE id = ?; 

INSERT INTO customers
SET name='test01', email='test@email.com', phone='010-5132-1245';

SELECT * 
FROM customers;

ALTER TABLE customers
ADD COLUMN password_has VARCHAR(255) NOT NULL DEFAULT '1';
ALTER TABLE customers
ADD COLUMN password_salt VARCHAR(255) NOT NULL DEFAULT '1';


