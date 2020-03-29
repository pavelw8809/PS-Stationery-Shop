CREATE database "shop";

use shop;
/* tabela z informacją o zalogowanych klientach */
CREATE TABLE "users"
(
"u_id"      numeric PRIMARY KEY, /* klucz główny id użytkownika */
"u_login"   varchar(150) not null, /* login użytkownika */
"u_mail"    varchar(150) not null, /* mail użytkownika */
"u_password" varchar (150) not null, /* hasło użytkownika */
);

use shop;
/* tabela z danymi potrzebnymi do faktury dla klientów indywidualnych */
CREATE TABLE "client_individual"
(
"ci_id"       numeric PRIMARY KEY, /* klucz główny */
"ci_u_id"     numeric not null, /* klucz obcy do tabeli users */
"ci_name"     varchar(150) not null, /* imie klienta */
"ci_surname"  varchar(150) not null, /* nazwisko klienta */
"ci_street"   varchar(150) not null, /* ulica */
"ci_number"   int not null, /* numer domu/mieszkania */
"ci_city"     varchar(150) not null, /* miasto */
"ci_zip"      varchar(150) not null, /* kod pocztowy */
Constraint fk_client_individual FOREIGN KEY (ci_u_id)
references users (u_id)
);

use shop;
/* tabela z danymi potrzebnymi do faktury dla klientów firmowych */
CREATE TABLE "client_company"
(
"cc_id"       numeric PRIMARY KEY, /* klucz główny */
"cc_u_id"     numeric references users (u_id) not null, /* klucz obcy do tabeli users */
"cc_name"     varchar(150) not null, /* nazwa firmy */
"cc_NIP"      int not null, /* NIP firmy */
"cc_REGON"    int not null, /* REGON firmy */
"cc_street"   varchar(150) not null, /* ulica */
"cc_number"   int not null, /* numer domu/mieszkania */
"cc_city"     varchar(150) not null, /* miasto */
"cc_zip"      varchar(150) not null, /* kod pocztowy */
);

use shop;
/* tabela z kategoriami (każdy produkt należy do odpowiedniej kategorii) */
CREATE TABLE "category"
(
"c_id"     numeric PRIMARY KEY, /* klucz główny */
"c_name"   varchar(150) not null, /* nazwa kategorii */
);

use shop;
/* tabela z poszcezgólnymi produktami dostępnymi w sklepie */
CREATE TABLE "products"
(
"p_id"             numeric PRIMARY KEY, /* klucz główny */
"p_c_id"           numeric references category (c_id) not null, /* klucz obcy di tabeli category */
"p_name"           varchar(150) not null, /* nazwa produktu */
"p_code"           varchar(150) not null, /* kod produktu - nazwa zdjęcia produktu */
"p_description"    varchar(350) not null, /* opis produktu */
"p_price"          numeric(6,2) not null, /* cena produktu */
);

use shop;
/* tabela z ilością produktów dostępnych w sklepie wraz z ilością w danym kolorze */
CREATE TABLE "products_quality"
(
"pq_id"        numeric PRIMARY KEY, /* klucz główny */
"pq_p_id"      numeric references products (p_id) not null, /* klucz obcy do tabeli products */
"pq_color"     varchar(150), /* kolor produktu */
"pq_quality"   numeric not null, /* ilosc produktów na stanie sklepu */
);

use shop;
/* tabela z zamówieniem */
CREATE TABLE "orders"
(
"o_id"             numeric PRIMARY KEY, /* klucz główny */
"o_ci_id"          numeric references client_individual (ci_id) not null, /* klucz obcy do tabeli client_individual */
"o_cc_id"          numeric references client_company (cc_id) not null, /* klucz obcy do tabeli client_company */
"o_number"         int not null, /* numer zamówienia */
"o_status"         varchar(150) not null, /* status zamówienia czy "w trakcie" czy "zrealizowane" */
"o_price"          numeric(6,2) not null, /* cena za całe zamówienie - ostateczna cena do zapłaty za wszytskie produkty w koszyku */
);

CREATE TABLE "order_details"
/* tabela ze szczególami zamówienia */
(
"od_id"             numeric PRIMARY KEY, /* klucz główny */
"od_o_id"           numeric references orders (o_id) not null, /* klucz obcy do tabeli orders  */
"od_p_id"           numeric references products (p_id) not null, /* klucz obcy do tabeli products */
"od_quality"        numeric not null, /* ilość danego produktu w zamówieniu np 3 sztuki lub 15 sztuk... */
);
