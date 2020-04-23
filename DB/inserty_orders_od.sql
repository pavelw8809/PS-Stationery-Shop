use shop;
INSERT INTO orders (o_ci_id, o_cc_id, o_number, o_status, o_price)
VALUES
(null, 1, 2000, 'ZREALIZOWANE', 303.9),
(null, 2, 2001, 'NOWE', 713.9),
(null, 3, 2002, 'W TRAKCIE', 178.0),
(null, 1, 2003, 'ZREALIZOWANE', 456.0),
(null, 1, 2004, 'ZREALIZOWANE', 1262.0),
(null, 1, 2005, 'ZREALIZOWANE', 29.5),
(1, null, 2006, 'NOWE', 248.0),
(1, null, 2007, 'ZREALIZOWANE', 162.0),
(2, null, 2008, 'NOWE', 99.0),
(3, null, 2009, 'ZREALIZOWANE', 38.4),
(5, null, 2010, 'W TRAKCIE', 93.8),
(4, null, 2011, 'W TRAKCIE', 118.0),
(6, null, 2012, 'ZREALIZOWANE', 9.6),
(7, null, 2013, 'NOWE', 312.0),
(8, null, 2014, 'ZREALIZOWANE', 25.2),
(9, null, 2015, 'ZREALIZOWANE', 29.5),
(9, null, 2016, 'NOWE', 65.5);


use shop;
INSERT INTO order_details (od_o_id, od_p_id, od_quality)
VALUES
(1, 56, 10),
(1, 70, 5),
(1, 114, 18),
(1, 140, 28),
(1, 142, 55),
(2, 131, 105),
(2, 118, 10),
(2, 115, 20),
(2, 59, 8),
(2, 37, 8),
(2, 28, 5),
(2, 12, 2),
(3, 27, 20),
(3, 31, 10),
(3, 39, 2),
(4, 131, 105),
(4, 118, 10),
(5, 14, 150),
(5, 37, 1),
(6, 28, 5),
(7, 115, 20),
(7, 59, 8),
(7, 37, 8),
(8, 31, 10),
(8, 27, 20),
(9, 118, 10),
(10, 32, 16),
(11, 16, 5),
(11, 37, 8),
(11, 12, 2),
(11, 39, 2),
(12, 27, 20),
(13, 59, 8),
(14, 31, 10),
(14, 39, 2),
(14, 14, 30),
(15, 140, 28),
(16, 70, 5),
(17, 142, 55),
(17, 70, 5);







