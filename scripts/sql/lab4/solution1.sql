/* Begin Lab 4 */

/* (1) Use SQL statement to modify a structure of a sample database such that after a
modification it is possible to add information about the total number of orders
submitted by each customer. Assume that, a customer can submit no more than 999999
orders. */

ALTER TABLE CUSTOMER
ADD TOTAL_ORDERS  DECIMAL(6);

ALTER TABLE CUSTOMER
ADD CONSTRAINT CK_CUSTOMER_TOTAL_ORDERS CHECK (TOTAL_ORDERS >= 0);

/* (2) Use SQL statement to set the total number of orders submitted by each customer to
zero */

UPDATE CUSTOMER
SET TOTAL_ORDERS = 0;
COMMIT;

/* (3) Use SQL statement to modify a structure of a sample database such that after a
modification it is possible to store in the database information about the customers
living in the cities whose names are up to 100 characters long. */

ALTER TABLE CUSTOMER
MODIFY CITY VARCHAR(100);

/* (4) Use SQL statement to insert information about a new customer living in a city whose
name is longer than 15 characters. */

INSERT INTO CUSTOMER (CUSTOMER_CODE, COMPANY_NAME, CONTACT_NAME, CONTACT_TITLE, ADDRESS, CITY, POSTAL_CODE, COUNTRY, PHONE, FAX)
VALUES ('WILP', 'Wilmare Plastics', 'Alan Turner', 'Marketing Manager', '82, Grainger St', 'Newcastle-Upon-Tyre', 'NE1 5JQ', 'UK', '(191) 230-2345', '(191) 230-2030');
COMMIT;

/* (5) Use SQL statements to modify a structure of a sample database such that after a
modification it is possible to store in the database information about unit prices up to
999,999,999.99 in any currency. You may need more than one statement to perform
the modifications. */

ALTER TABLE PRODUCT
MODIFY UNIT_PRICE DECIMAL(11,2);

ALTER TABLE PRODUCT
ADD CURRENCY VARCHAR(4) NOT NULL DEFAULT AUD;

ALTER TABLE ORDER_DETAIL
MODIFY UNIT_PRICE DECIMAL(11,2);

ALTER TABLE ORDER_DETAIL
ADD CURRENCY VARCHAR(4) NOT NULL DEFAULT AUD;

/* (6) Use SQL statements to add 100,000,000 to a value of unit price of a product
Pavlova. You may need more than one statement to perform all modifications. */

UPDATE PRODUCT
SET UNIT_PRICE = 100000000 + (SELECT UNIT_PRICE WHERE PRODUCT_NAME = 'Pavlova')
WHERE PRODUCT_NAME = 'Pavlova';
COMMIT;

/* (7) Use SQL statement to add to the database an association CUSTOMER Prefers
SUPPLIER to the database. Assume, that a customer can prefer more than one supplier
and a supplier can be preferred by more than one customer.  */

CREATE TABLE PREF_SUPPLIER
(
    CUSTOMER_CODE 	VARCHAR(5)	NOT NULL,    
	SUPPLIER_NAME	VARCHAR(40) NOT NULL,
    CONSTRAINT PK_PREF_SUPPLIER PRIMARY KEY (CUSTOMER_CODE, SUPPLIER_NAME)
	CONSTRAINT FK_PREF_CUSTOMER_CODE FOREIGN KEY (CUSTOMER_CODE) REFERENCES CUSTOMER(CUSTOMER_CODE),  
	CONSTRAINT FK_PREF_SUPPLIER_NAME FOREIGN KEY (SUPPLIER_NAME) REFERENCES SUPPLIER(COMPANY_NAME)
);

/* (8) Use SQL statements to add to the database information that a customer with a code
KOENE prefers the suppliers Exotic Liquids and Karkki Oy */

INSERT INTO PREF_SUPPLIER (CUSTOMER_CODE, SUPPLIER_NAME)
VALUES ('KOENE', 'Exotic Liquids');

INSERT INTO PREF_SUPPLIER (CUSTOMER_CODE, SUPPLIER_NAME)
VALUES ('KOENE', 'Karkki Oy');

/* (9) Use SQL statement to add to the database an association EMPLOYEE Recommends
SHIPPER. Assume that an employee can recommend only one shipper and a shipper
can be recommended by more than one employee. */

ALTER TABLE EMPLOYEE
ADD RECOM_SHIPPER	VARCHAR(40);

ALTER TABLE EMPLOYEE
ADD CONSTRAINT FK_EMPLOYEE_RECOM FOREIGN KEY (RECOM_SHIPPER) REFERENCES SHIPPER(COMPANY_NAME);

/* (10) Use SQL statements to add to the database information about employees number 5
and 6 who recommend a shipper Speedy Express. */

UPDATE EMPLOYEE
SET RECOM_SHIPPER = 'Speedy Express'
WHERE EMPLOYEE_ID IN ('5', '6');
COMMIT;

/* End of Lab 4 */