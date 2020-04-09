CREATE DATABASE shop;

use shop;
/* tabela z informacją o zalogowanych klientach */
CREATE TABLE users
(
u_id      INT NOT NULL AUTO_INCREMENT, /* klucz główny id użytkownika */
u_login   varchar(150) not null, /* login użytkownika */
u_mail    varchar(150) not null, /* mail użytkownika */
u_password varchar (150) not null, /* hasło użytkownika */
PRIMARY KEY (u_id)
);

use shop;
/* tabela z danymi potrzebnymi do faktury dla klientów indywidualnych */
CREATE TABLE client_individual
(
ci_id       INT NOT NULL AUTO_INCREMENT, /* klucz główny */
ci_u_id     INT NOT NULL, /* klucz obcy do tabeli users */
ci_name     varchar(150) not null, /* imie klienta */
ci_surname  varchar(150) not null, /* nazwisko klienta */
ci_street   varchar(150) not null, /* ulica */
ci_number   int not null, /* numer domu/mieszkania */
ci_city     varchar(150) not null, /* miasto */
ci_zip      varchar(150) not null, /* kod pocztowy */
Constraint fk_client_individual FOREIGN KEY (ci_u_id)
references users (u_id),
PRIMARY KEY (ci_id)
);

use shop;
/* tabela z danymi potrzebnymi do faktury dla klientów firmowych */
CREATE TABLE client_company
(
cc_id       INT NOT NULL AUTO_INCREMENT, /* klucz główny */
cc_u_id     INT NOT NULL, /* klucz obcy do tabeli users */
cc_name     varchar(150) not null, /* nazwa firmy */
cc_NIP      int not null, /* NIP firmy */
cc_REGON    int not null, /* REGON firmy */
cc_street   varchar(150) not null, /* ulica */
cc_number   int not null, /* numer domu/mieszkania */
cc_city     varchar(150) not null, /* miasto */
cc_zip      varchar(150) not null, /* kod pocztowy */
Constraint fk_client_company FOREIGN KEY (cc_u_id)
references users (u_id),
PRIMARY KEY (cc_id)
);

use shop;
/* tabela z kategoriami (każdy produkt należy do odpowiedniej kategorii) */
CREATE TABLE category
(
c_id     INT NOT NULL AUTO_INCREMENT, /* klucz główny */
c_name   varchar(150) not null, /* nazwa kategorii */
PRIMARY KEY (c_id)
);

use shop;
/* tabela z poszcezgólnymi produktami dostępnymi w sklepie */
CREATE TABLE products
(
p_id             INT NOT NULL AUTO_INCREMENT, /* klucz główny */
p_c_id           INT NOT NULL, /* klucz obcy di tabeli category */
p_name           varchar(150) not null, /* nazwa produktu */
p_code           varchar(150) not null, /* kod produktu - nazwa zdjęcia produktu */
p_description    varchar(350) not null, /* opis produktu */
p_price          numeric(6,2) not null, /* cena produktu */
Constraint fk_products FOREIGN KEY (p_c_id)
references category (c_id),
PRIMARY KEY (p_id)
);

use shop;
/* tabela z ilością produktów dostępnych w sklepie wraz z ilością w danym kolorze */
CREATE TABLE products_quality
(
pq_id        INT NOT NULL AUTO_INCREMENT, /* klucz główny */
pq_p_id      INT NOT NULL, /* klucz obcy do tabeli products */
pq_color     varchar(150), /* kolor produktu */
pq_quality   numeric not null, /* ilosc produktów na stanie sklepu */
Constraint fk_products_quality FOREIGN KEY (pq_p_id)
references products (p_id),
PRIMARY KEY (pq_id)
);

use shop;
/* tabela z zamówieniem */
CREATE TABLE orders
(
o_id             INT NOT NULL AUTO_INCREMENT, /* klucz główny */
o_ci_id          INT NOT NULL, /* klucz obcy do tabeli client_individual */
o_cc_id          INT NOT NULL, /* klucz obcy do tabeli client_company */
o_number         int not null, /* numer zamówienia */
o_status         varchar(150) not null, /* status zamówienia czy w trakcie czy zrealizowane */
o_price          numeric(6,2) not null, /* cena za całe zamówienie - ostateczna cena do zapłaty za wszytskie produkty w koszyku */
Constraint fk_orders FOREIGN KEY (o_ci_id)
references client_individual (ci_id),
Constraint fk2_orders FOREIGN KEY (o_cc_id)
references client_company (cc_id),
PRIMARY KEY (o_id)
);

use shop;
CREATE TABLE order_details
/* tabela ze szczególami zamówienia */
(
od_id             INT NOT NULL AUTO_INCREMENT, /* klucz główny */
od_o_id           INT NOT NULL, /* klucz obcy do tabeli orders  */
od_p_id           INT NOT NULL, /* klucz obcy do tabeli products */
od_quality        numeric not null, /* ilość danego produktu w zamówieniu np 3 sztuki lub 15 sztuk... */
Constraint fk_order_details FOREIGN KEY (od_o_id)
references orders (o_id),
Constraint fk2_order_details FOREIGN KEY (od_p_id)
references products (p_id),
PRIMARY KEY (od_id)
);