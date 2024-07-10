-- vs code orqali kirish:
mysql -u root -p --Enter
root --ni yozasiz Enter password:  chiqqanidan so`ng

-- Databazaga kirish
SHOW DATABASES;

-- Databazada jadval yaratish
CREATE database airplane;

-- jadvalga ulanish
USE airplane;

-- jadvallarni ko`rish
SHOW tables;

-- Jadvalga ma`lumotar qanday tipda kirishi
CREATE TABLE airplane (
    id INTEGER AUTO_INCREMENT,
    type VARCHAR(17),
    trip INTEGER,
    town_from VARCHAR(30),
    town_to VARCHAR(30),
    time VARCHAR(8)
);

-- Jadvalga ma`lumot kiritish
INSERT INTO airplane (id, type, trip, town_from, town_to, time) VALUES
(1, '200 kishilik', 1, 'Toshkent', 'London', '08:30:00'),
(2, '500 kishilik', 1, 'Makkah', 'Namangan', '2:18:30'),
(3, '400 kishilik', 1, 'London', 'New-Yourk', '3:42:20'),
(4, '200 kishilik', 2, 'Toshkent', 'Barcelona', '3:30:26'),
(5, '500 kishilik', 1, 'Mockva', 'Makkah', '02:00:00'),
(6, '500 kishilik', 2, 'Makkah', 'London', '4:13:30'),
(7, '200 kishilik', 2, 'London', 'Samarqand', '04:30:48'),
(8, '400 kishilik', 3, 'Toshkent', 'Mockva', '01:53:10'),
(9, '200 kishilik', 2, 'Mockva', 'London', '01:45:40'),
(10, '500 kishilik', 3, 'Makkah', 'Samarqand', '01:46:20');


SELECT * FROM airplane WHERE trip like '01:45:40'

SELECT * FROM airplane WHERE town_from like 3;