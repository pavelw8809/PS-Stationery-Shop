CREATE database "shop";

use shop;
CREATE TABLE "users"
(
"u_id"     numeric PRIMARY KEY,
"u_login"  varchar(150) not null,
"u_mail"   varchar(150) not null,
);

use shop;
CREATE TABLE "client_individual"
(
"ci_id"       numeric PRIMARY KEY,
"ci_u_id"     numeric not null,
"ci_name"     varchar(150) not null,
"ci_surname"  varchar(150) not null,
"ci_street"   varchar(150) not null,
"ci_number"   varchar(150) not null,
"ci_city"     varchar(150) not null,
"ci_zip"      varchar(150) not null,
Constraint fk_client_individual FOREIGN KEY (ci_u_id)
references users (u_id)
);

use shop;
CREATE TABLE "client_company"
(
"cc_id"       numeric PRIMARY KEY,
"cc_u_id"     numeric references users (u_id) not null,
"cc_name"     varchar(150) not null,
"cc_NIP"      int not null,
"cc_REGON"    int not null,
"cc_street"   varchar(150) not null,
"cc_number"   int not null,
"cc_city"     varchar(150) not null,
"cc_zip"      varchar(150) not null,
);

use shop;
CREATE TABLE "category"
(
"c_id"     numeric PRIMARY KEY,
"c_name"   varchar(150) not null,
);

use shop;
CREATE TABLE "products"
(
"p_id"             numeric PRIMARY KEY,
"p_c_id"           numeric references category (c_id) not null,
"p_name"           varchar(150) not null,
"p_code"           varchar(150) not null,
"p_description"    varchar(350) not null,
"p_price"          varchar(150) not null,
);

use shop;
CREATE TABLE "products_quality"
(
"pq_id"        numeric PRIMARY KEY,
"pq_p_id"      numeric references products (p_id) not null,
"pq_quality"   int not null,
);

use shop;
CREATE TABLE "orders"
(
"o_id"             numeric PRIMARY KEY,
"o_ci_id"          numeric references client_individual (ci_id) not null,
"o_cc_id"          numeric references client_company (cc_id) not null,
"o_number"         int not null,
"o_status"         varchar(150) not null,
"o_price"          varchar(150) not null,
);

CREATE TABLE "order_details"
(
"od_id"             numeric PRIMARY KEY,
"od_o_id"           numeric references orders (o_id) not null,
"od_p_id"           numeric references products (p_id) not null,
"od_quality"        int not null,
);

