DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    deparment_name VARCHAR(20) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(5) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, deparment_name, price, stock_quantity)
VALUES ('ASICS Venture 6 Running Shoes', 'Clothing', 29.99, 300),
       ('Mens Classic Pre-Tied Satin Formal Tuxedo Bowtie', 'Clothing', 8.99, 800),
       ('Cashmere Winter Scarf', 'Clothing', 8.99, 600),
       ('Soylent', 'Supplements', 34.99, 450),
       ('Quest Nutrition Protein Bar', 'Supplements', 22.99, 700),
       ('Vitafusion Mens Gummy Vitamins', 'Supplements', 9.99, 900),
       ('Monopoly', 'Board Games', 19.99, 400),
       ('CODENAMES', 'Board Games',14.99, 300),
       ('UNO', 'Board Games', 13.99, 300),
       ('iPhone Xs', 'Electronics', 499.99, 100),
       ('Sony WH1000XM3 Wireless Headphones', 'Electronics', 349.99, 50),
       ('Portable Charger Anker PowerCore 20100mAh', 'Electronics', 49.99, 200);

