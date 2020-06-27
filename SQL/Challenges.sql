-- Challenge SELECT:

SELECT first_name, last_name, email FROM customer;

-- Challenge SELECT DISTINCT:

SELECT DISTINCT rating FROM film;

-- Challenge SELECT COUNT DISTINCT:

SELECT COUNT(DISTINCT amount) FROM payment;

-- Examples:

SELECT * FROM film
WHERE rental_rate > 4 AND replacement_cost >= 19.99
AND rating = 'R';

SELECT COUNT(*) FROM film
WHERE rating = 'R' OR rating = 'PG-13';

SELECT COUNT(*) FROM film
WHERE rating != 'R';

-- Challenge SELECT WHERE

SELECT email FROM customer
WHERE first_name = 'Nancy' AND last_name = 'Thomas';

SELECT description FROM film
WHERE title = 'Outlaw Hanky';

SELECT phone FROM address
WHERE address = '259 Ipoh Drive';

-- Examples:

SELECT store_id, first_name, last_name FROM customer
ORDER BY store_id DESC, first_name ASC;

SELECT * FROM payment
WHERE amount != 0.00
ORDER BY payment_date DESC
LIMIT 5;

-- Challenge ORDER BY / LIMIT:

SELECT customer_id FROM payment
ORDER BY payment_date ASC
LIMIT 10;

SELECT title, length FROM film
ORDER BY length ASC
LIMIT 5;

SELECT COUNT(title) FROM film
WHERE length <= 50
ORDER BY length ASC;

SELECT title, length FROM film
WHERE length <= 50
ORDER BY length ASC;

-- Examples:

SELECT * FROM payment
WHERE amount BETWEEN 8 AND 9;

SELECT COUNT(*) FROM payment
WHERE amount BETWEEN 8 AND 9;

SELECT COUNT(*) FROM payment
WHERE amount NOT BETWEEN 8 AND 9;

SELECT * FROM payment
WHERE payment_date BETWEEN '2007-02-01' AND '2007-02-15';