use shop;
INSERT INTO category (c_name)
VALUES
('Artkuły biurowe'),
('Artykuły piśmiennicze'),
('Artykuły papierowe'),
('Koperty');

use shop;
INSERT INTO products (p_c_id, p_name, p_code, p_description, p_price, p_shortdescription)
VALUES
(1, 'Akta osobowe - skoroszyt', 'AO1', 'Skoroszyt z napisem akta osobowe, dopasowany do potrzeb odbiorcy', 1.40, 'uniwersalny'),
(1, 'Akta osobowe - teczka', 'AO2', 'Teczka do akt osobowych', 0.90, 'uniwersalny'),
(1, 'Blok biurowy A4/100 kart.', 'BB1', 'Blok biurowy A4 liczący 100 kartek ', 2.60, 'biały'),
(1, 'Blok biurowy A5/100 kart.', 'BB2', 'Blok biurowy A4 liczący 100 kartek', 2.10, 'biały'),
(1, 'Blok do flipchartu gładki/20 arkuszy', 'BF1', 'Blok do flipchartu gładki liczący 20 arkuszy', 9.00, 'biały'),
(1, 'Clipy (klipsy archiw.) - 19mm', 'CK1', 'Clipy biurowe o wymiarach 19mm', 0.20, 'czarne'),
(1, 'Clipy (klipsy archiw.) - 25mm', 'CK1', 'Clipy biurowe o wymiarach 25mm', 0.25, 'czarne'),
(1, 'Clipy (klipsy archiw.) - 32mm', 'CK1', 'Clipy biurowe o wymiarach 32mm', 0.30, 'czarne'),
(1, 'Clipy (klipsy archiw.) - 41mm', 'CK1', 'Clipy biurowe o wymiarach 41mm', 0.35, 'czarne'),
(1, 'Clipy (klipsy archiw.) - 51mm', 'CK1', 'Clipy biurowe o wymiarach 51mm', 0.40, 'czarne'),
(1, 'Clipboard A4 z klapką', 'CK2', 'Clipboard A4 z klapką', 6.40, 'czerwony'),
(1, 'Clipboard A4 bez klapki', 'CK3', 'Clipboard A4 bez klapki', 7.40, 'niebieski'),
(1, 'Datownik', 'DK1', 'Długopis automatyczny w kolorze czarnym', 4.40, 'czarny'),
(1, 'Dziennik korespondencyjny A4 - 96 kart.', 'DK2', 'Dziennik korespondencyjny A4 składający się z 96 kartek', 8.40, 'niebieski'),
(1, 'Dziennik korespondencyjny A4 - 200 kart.', 'DK2', 'Dziennik korespondencyjny A4 składający się z 200 kartek', 10.20, 'niebieski'),
(1, 'Dziurkacz', 'DK3', 'Dziurkacz tradycyjny w kolorze czarnym', 9.40, 'uniwersalny'),
(1, 'Etykiety do segregatora wsuwana - 33x152 / 25szt.', 'DK4', 'Etykiety do segregatora wsuwana o wymiarach 33x152 w lości 25 sztuk', 1.20, 'uniwersalna'),
(1, 'Etykiety do segregatora wsuwana - 48x152 / 25szt.', 'DK4', 'Etykiety do segregatora wsuwana o wymiarach 48x152 w lości 25 sztuk', 1.20, 'uniwersalna'),
(1, 'Gumka do mazania', 'GG1', 'Gumka do mazania w kolorze białym, tradycyjna', 2.20, 'biała'),
(1, 'Gumki recepturki ', 'GG2', 'Paczka gumek recepturek licząca 50 sztuk', 9.30, 'uniwersalne'),
(1, 'Identyfikator', 'DK5', 'Identyfikator tradycyjny w kształcie prostokąta', 1.10, 'biały'),
(1, 'Identyfikator z taśmą', 'DK6', 'Identyfikator tradycyjny w kształcie prostokąta z taśmą', 2.10, 'uniwersalny'),
(1, 'Kalkulator VECTOR', 'DK7', 'Kalkulator VECTOR', 5.50, 'czarny'),
(1, 'Kalkulator CITIZEN', 'DK8', 'Kalkulator CITIZEN', 5.50, 'czarny'),
(1, 'Kieszeń samoprzylepna na CD', 'DK9', 'Kieszeń samoprzylepna na CD - opakowanie zawiera 5 sztuk', 3.50, 'uniwersalna'),
(1, 'Klej MAGIC', 'KK1', 'Klej MAGIC ze specjalną plastikową wkładką do użycia', 5.50, 'uniwersalny'),
(1, 'Klej w sztyfcie', 'KK2', 'Klej w sztyfcie 20g w okrągłym sztywcie', 5.90, 'uniwersalny'),
(1, 'Klej w sztyfcie mocny', 'KK3', 'Klej w sztyfcie mocny 25g', 5.90, 'uniwersalny'),
(1, 'Klej w płynie', 'KK4', 'Klej w płynie w plastikowej tubce', 3.90, 'uniwersalny'),
(1, 'Korektor w butelce ', 'KK5', 'Korektor w butelce z pędzelkiem', 3.80, 'biały'),
(1, 'Korektor Pentel ', 'KK6', 'Korektor Pentel w długopisie o pojemności 12 ml', 4.40, 'biały'),
(1, 'Korektor w myszce ', 'KK7', 'Korektor w myszce - TIPP-EX duży', 2.40, 'biały'),
(1, 'Korektor TOMA', 'KK8', 'Korektor TOMA', 2.20, 'biały'),
(1, 'Koszulki A4 - groszkowe ', 'DK10', 'Koszulki A4 groszkowe zawierający 100 sztuk', 6.10, 'uniwersalne'),
(1, 'Koszulki A4 - krystaliczne', 'DK11', 'Koszulki A4 krystaliczne zawierający 100 sztuk', 5.50, 'uniwersalne'),
(1, 'Koszulki A4', 'DK12', 'Koszulki A4 z kolorową krawędzią', 4.40, 'uniwersalne'),
(1, 'Linijka plastikowa', 'LL1', 'Linijka plastikowa o wymiarach 40 cm', 2.00, 'uniwersalna'),
(1, 'Linijka aluminiowa', 'LL2', 'Linijka aluminiowa o wymiarach 40 cm', 2.90, 'uniwersalna'),
(1, 'Magnesy kolorowe', 'MG1', 'Magnesy kolorowe w kolorach niebieskim, czerwonym, żółtym, zielonym i czarnym', 8.00, 'kolorowe'),
(1, 'Nożyczki', 'NN1', 'Nożyczki o wymiarach 21 cm w kolorze niebieskim', 4.90, 'niebieskie'),
(1, 'Nożyk biurowy', 'NN2', 'Nożyk biurowy w kolorze żółtym', 5.90, 'uniwersalny'),
(1, 'Nożyk do kopert', 'NN3', 'Nożyk do kopert z czarną obsadką', 8.60, 'uniwersalny'),
(2, 'Cienkopis', 'CC1', 'Cienkopis standardowy w owalnym kształcie w kolorze czarnym', 2.40, 'czarny'),
(2, 'Cienkopis', 'CC2', 'Cienkopis standardowy w owalnym kształcie w kolorze niebieskim', 2.40, 'niebieski'),
(2, 'Cienkopis', 'CC3', 'Cienkopis standardowy w owalnym kształcie w kolorze czerwonym', 2.40, 'czerwony'),
(2, 'Cienkopis', 'CC4', 'Cienkopis standardowy w owalnym kształcie w kolorze zielonym', 2.40,'zielony'),
(2, 'Cienkopis pilot V5', 'CC5', 'Cienkopis z dodatkowy tuszem w owalnym kształcie w kolorze czarnym', 2.00, 'czarny'),
(2, 'Cienkopis pilot V5', 'CC5', 'Cienkopis z dodatkowy tuszem w owalnym kształcie w kolorze niebieskim', 2.00, 'niebieski'),
(2, 'Cienkopis pilot V5', 'CC5', 'Cienkopis z dodatkowy tuszem w owalnym kształcie w kolorze czerwonym', 2.00, 'czerwony'),
(2, 'Cienkopis pilot V5', 'CC5', 'Cienkopis z dodatkowy tuszem w owalnym kształcie w kolorze zielonym', 2.00,'zielony'),
(2, 'Długopis', 'DD1', 'Długopis standardowy z tradycyjną końcówką w kolorze czarnym', 1.50, 'czarny'),
(2, 'Długopis', 'DD2', 'Długopis standardowy z tradycyjną końcówką w kolorze niebieskim', 1.50, 'niebieski'),
(2, 'Długopis Toma', 'DD3', 'Długopis w owalnym kształcie w kolorze czarnym', 3.40, 'czarny'),
(2, 'Długopis Toma', 'DD3', 'Długopis w owalnym kształcie w kolorze niebieskim', 3.40, 'niebieski'),
(2, 'Długopis automatyczny', 'DD4', 'Długopis automatyczny w kolorze czarnym', 4.40, 'czarny'),
(2, 'Długopis automatyczny', 'DD4', 'Długopis automatyczny w kolorze niebieskim', 4.40, 'niebieski'),
(2, 'Długopis automatyczny', 'DD4', 'Długopis automatyczny w kolorze czerwonym', 4.40, 'czerwony'),
(2, 'Długopis automatyczny', 'DD4', 'Długopis automatyczny w kolorze zielonym', 4.40, 'zielony'),
(2, 'Długopis BIC', 'DD5', 'Długopis BIC dostosowany do kształtu dłoni w kolorze czarnym', 1.20, 'czarny'),
(2, 'Długopis BIC', 'DD6', 'Długopis BIC dostosowany do kształtu dłoni w kolorze niebieskim', 1.20, 'niebieski'),
(2, 'Długopis BIC', 'DD7', 'Długopis BIC dostosowany do kształtu dłoni w kolorze czerwonym', 1.20, 'czerwony'),
(2, 'Długopis BIC', 'DD8', 'Długopis BIC dostosowany do kształtu dłoni w kolorze zielonym', 1.20, 'zielony'),
(2, 'Długopis zwykły', 'DD9', 'Długopis zwykły w kolorze niebieskim', 1.40, 'niebieski'),
(2, 'Długopis na sprężynce', 'DD10', 'Długopis na sprężynce z podstawką w kolorze niebieskim', 2.40, 'niebieski'),
(2, 'Długopis PILOT G-1', 'DD11', 'Długopis z zatyczką w kolorze czarnym', 5.50, 'czarny'),
(2, 'Długopis PILOT G-1', 'DD12', 'Długopis z zatyczką w kolorze niebieskim', 5.50, 'niebieski'),
(2, 'Długopis PILOT G-1', 'DD13', 'Długopis z zatyczką w kolorze czerwonym', 5.50, 'czerwony'),
(2, 'Długopis PILOT G-1', 'DD14', 'Długopis z zatyczką w kolorze zielonym', 5.50, 'zielony'),
(2, 'Długopis PILOT G-2', 'DD15', 'Długopis klikający w kolorze czarnym', 5.90, 'czarny'),
(2, 'Długopis PILOT G-2', 'DD16', 'Długopis klikający w kolorze niebieskim', 5.90, 'niebieski'),
(2, 'Długopis PILOT G-2', 'DD17', 'Długopis klikający w kolorze czerwonym', 5.90, 'czerwony'),
(2, 'Długopis PILOT G-2', 'DD18', 'Długopis klikający w kolorze zielonym', 5.90, 'zielony'),
(2, 'Długopis żelowy G-O31', 'DD19', 'Długopis żelowy z zatyczką w kolorze czarnym', 4.40, 'czarny'),
(2, 'Długopis żelowy G-O31', 'DD20', 'Długopis żelowy z zatyczką w kolorze niebieskim', 4.40, 'niebieski'),
(2, 'Długopis żelowy G-O31', 'DD21', 'Długopis żelowy z zatyczką w kolorze czerwonym', 4.40, 'czerwony'),
(2, 'Długopis żelowy G-O31', 'DD22', 'Długopis żelowy z zatyczką w kolorze zielonym', 4.40, 'zielony'),
(2, 'Długopis żelowy G-O32', 'DD23', 'Długopis żelowy klikający w kolorze czarnym', 4.40, 'czarny'),
(2, 'Długopis żelowy G-O32', 'DD24', 'Długopis żelowy klikający w kolorze niebieskim', 4.40, 'niebieski'),
(2, 'Długopis żelowy G-O32', 'DD25', 'Długopis żelowy klikający w kolorze czerwonym', 4.40, 'czerwony'),
(2, 'Długopis żelowy G-O32', 'DD26', 'Długopis żelowy klikający w kolorze zielonym', 4.40, 'zielony'),
(2, 'Flamaster', 'FF1', 'Flamaster z zatyczką w kolorze czarnym', 6.00, 'czarny'),
(2, 'Flamaster Stabilo Pen 68', 'FF2', 'Flamaster z końcówką w owalnym kształcie z zatyczką w kolorze czarnym', 5.90, 'czarny'),
(2, 'Flamaster Stabilo Pen 68', 'FF2', 'Flamaster z końcówką w owalnym kształcie z zatyczką w kolorze niebieskim', 5.90, 'niebieski'),
(2, 'Marker do CD', 'MM1', 'Marker do płyt CD w kolorze czarnym', 5.90, 'czarny'),
(2, 'Marker do CD dwustronny', 'MM2', 'Dwustronny marker do płyt CD w kolorze czarnym', 5.90, 'czarny'),
(2, 'Marker Edding 750', 'MM3', 'Marker do podpisywania płyt CD w kolorze czarnym', 6.40, 'czarny'),
(2, 'Marker olejowy', 'MM4', 'Marker olejowy w kolorze czarnym/białym z możliością ścieralności markera', 6.40, 'czarny/biały'),
(2, 'Marker olejowy PX20-UNI', 'MM5', 'Marker olejowy w kolorze niebieskim z możliością ścieralności', 5.50, 'niebieski'),
(2, 'Marker permanentny', 'MM6', 'Marker permanentny ze specjalna okrągłą ścietą końcówką w kolorze czarnym', 7.40, 'czarny'),
(2, 'Marker permanentny', 'MM7', 'Marker permanentny ze specjalna okrągłą ścietą końcówką w kolorze niebieskim', 7.40, 'niebieski'),
(2, 'Marker permanentny', 'MM8', 'Marker permanentny ze specjalna okrągłą ścietą końcówką w kolorze czerwonym', 7.40, 'czerwony'),
(2, 'Marker permanentny', 'MM9', 'Marker permanentny ze specjalna okrągłą ścietą końcówką w kolorze zielonym', 7.40, 'zielony'),
(2, 'Marker sucho ścieralny', 'MM10', 'Marker sucho ścieralny w kolorze czarnym', 7.40, 'czarny'),
(2, 'Marker sucho ścieralny', 'MM10', 'Marker sucho ścieralny w kolorze niebieskim', 7.40, 'niebieski'),
(2, 'Marker sucho ścieralny', 'MM10', 'Marker sucho ścieralny w kolorze czerwonym', 7.40, 'czerwony'),
(2, 'Marker sucho ścieralny', 'MM10', 'Marker sucho ścieralny w kolorze zielonym', 7.40, 'zielony'),
(2, 'Ołówek zwykły', 'OO1', 'Ołówek zwykły H-B o tradycyjnym kształcie', 0.40, 'uniwersalny'),
(2, 'Ołówek zwykły z gumką', 'OO2', 'Ołówek zwykły z gumką ścieralną o tradycyjnym kształcie', 1.40, 'uniwersalny'),
(2, 'Ołówek Stabilo', 'OO3', 'Ołówek Stabilo H, HB z kałczukowym wkładem', 1.20, 'uniwersalny'),
(2, 'Ołówek KOH-I-NOOR', 'OO4', 'Ołówek tradycyjny', 1.90, 'uniwersalny'),
(2, 'Ołówek automatyczny', 'OO5', 'Ołówek automatyczny 0,5 - 0,7', 2.40, 'uniwersalny'),
(2, 'Wkład do długopisu Panel', 'DD27', 'Wkład do długopisu Panel', 1.00, 'czarny'),
(2, 'Wkład do długopisu PILOT G-1, PILOT G-2', 'DD28', 'Wkład do długopisu PILOT w kolorze czarnym', 1.10, 'czarny'),
(2, 'Wkład do długopisu PILOT G-1, PILOT G-2', 'DD28', 'Wkład do długopisu PILOT w kolorze niebieskim', 1.10, 'niebieski'),
(2, 'Wkład do długopisu PILOT G-1, PILOT G-2', 'DD28', 'Wkład do długopisu PILOT w kolorze czerwonym', 1.10, 'czerwony'),
(2, 'Wkład do długopisu PILOT G-1, PILOT G-2', 'DD28', 'Wkład do długopisu PILOT w kolorze zielonym', 1.10, 'zielony'),
(2, 'Wkład do długopisu ZENITH', 'DD29', 'Metalowy, oryginalny wkład do długopisu ZENITH w kolorze czarnym', 1.10, 'czarny'),
(2, 'Wkład do długopisu ZENITH', 'DD29', 'Metalowy, oryginalny wkład do długopisu ZENITH w kolorze niebieskim', 1.10, 'niebieski'),
(2, 'Wkład ołówkowy', 'OO6', 'Wkład ołówkowy w rozmiarach 0,5-0,9', 1.50, 'uniwersalny'),
(2, 'Zakreślacz', 'ZA1', 'Zakreślacz tracycyjny w kolorze różowym', 9.40, 'różowy'),
(2, 'Zakreślacz', 'ZA1', 'Zakreślacz tracycyjny w kolorze fioletowym', 9.40, 'fioletowy'),
(2, 'Zakreślacz', 'ZA1', 'Zakreślacz tracycyjny w kolorze pomarańczowym', 9.40, 'pomarańczowy'),
(2, 'Zakreślacz', 'ZA1', 'Zakreślacz tracycyjny w kolorze żółtym', 9.40, 'żółty'),
(2, 'Zakreślacz', 'ZA1', 'Zakreślacz tracycyjny w kolorze niebieskim', 9.40, 'niebieski'),
(2, 'Zakreślacz', 'ZA1', 'Zakreślacz tracycyjny w kolorze zielonym', 9.40, 'zielony'),
(2, 'Zakreślacz STABILO (opakowanie 4 sztuk)', 'ZA2', 'Opakowanie czterech zakreślaczy w kolorze zielonym + czerwonym + pomarańczowym + żółtym', 17.90, 'kolorowe'),
(2, 'Zakreślacz STABILO (opakowanie 6 sztuk)', 'ZA3', 'Opakowanie sześciu zakreślaczy w kolorze zielonym + czerwonym + pomarańczowym + żółtym +różowym + niebieskim', 20.90, 'kolorowe'),
(3, 'Kostka biurowa - biała klejona', 'KB1', 'Kostka biurowa 8,3x8,3 - kostka biała klejona', 9.90, 'biała'),
(3, 'Kostka biurowa - kolorowa klejona', 'KB1', 'Kostka biurowa 8,3x8,3 - kostka kolorowa klejona', 10.90, 'kolorowa'),
(3, 'Kostka biurowa - biała nieklejona', 'KB2', 'Kostka biurowa 8,3x8,3 - kostka biała nieklejona', 7.40, 'biała'),
(3, 'Kostka biurowa - kolorowa nieklejona', 'KB2', 'Kostka biurowa 8,3x8,3 - kostka kolorowa nieklejona', 8.40, 'kolorowa'),
(3, 'Kostka biała + pojemnik', 'KB3', 'Kostka biała nieklejona z kartkami w pojemniku', 12.00, 'biała'),
(3, 'Karteczki żółte samoprzylepne', 'KZ1', 'Karteczki żółte samoprzylepne o wymiarach: 38x51 mm, 40x50 mm, 51x76 mm', 6.00, 'żółte'),
(3, 'Kołonotatnik', 'KB4', 'Kołonotatnik w miękkiej okładce A4, 80 kartkowy ', 3.90, 'kolorowe'),
(3, 'Zeszyt A4', 'ZZ1', 'Zeszyt A4 w kolorowych okładkach 96 kartkowy', 4.50, 'kolorowy'),
(3, 'Zeszyt A5 - 32kart.', 'ZZ1', 'Zeszyt A4 w kolorowych okładkach 32 kartkowy', 2.50, 'kolorowy'),
(3, 'Zeszyt A5 - 60kart.', 'ZZ1', 'Zeszyt A4 w kolorowych okładkach 60 kartkowy', 3.50, 'kolorowy'),
(3, 'Zeszyt A5 - 80kart.', 'ZZ1', 'Zeszyt A4 w kolorowych okładkach 80 kartkowy', 4.50, 'kolorowy'),
(3, 'Zeszyt A5 - 96kart.', 'ZZ1', 'Zeszyt A4 w kolorowych okładkach 96 kartkowy', 5.50, 'kolorowy'),
(3, 'Przekładki  A4', 'KB5', 'Przekładki  A4 w 12 kolorach, alfabetycznie ułożone', 8.40, 'uniwersalne'),
(3, 'Przekładki poziome', 'KB6', 'Przekładki poziome w 12 różnych kolorach mix kartek w formacie 1/3 A4', 3.40, 'kolorowe'),
(4, 'Koperta ciemno zielona', 'KO1', 'Koperta w kolorze ciemno zielonym o wymiarach 110x220mm', 1.20, 'ciemno-zielona'),
(4, 'Koperta różowa', 'KO2', 'Koperta w kolorze różowym o wymiarach 110x220mm', 1.20, 'różowa'),
(4, 'Koperta czerwona', 'KO3', 'Koperta w kolorze ciemnym czerwonym o wymiarach 114x162mm', 0.90, 'czerwona'),
(4, 'Koperta jasno brązowa', 'KO4', 'Koperta w kolorze jasno brązowym o wymiarach 114x162mm', 0.90, 'jasno-brązowa'),
(4, 'Koperta jasno zielona', 'KO5', 'Koperta w kolorze jasno zielonym o wymiarach 114x162mm', 0.90, 'jasno-zielona'),
(4, 'Koperta jasno niebieska', 'KO6', 'Koperta w kolorze jasno niebieskim o wymiarach 110x220mm', 1.20, 'jasno-niebieska'),
(4, 'Koperta brązowa', 'KO7', 'Koperta w kolorze brązowym o wymiarach 114x162mm', 0.90, 'brązowa'),
(4, 'Koperta czerwona', 'KO8', 'Koperta w kolorze czerwonym o wymiarach 110x220mm', 1.20, 'czerwona'),
(4, 'Koperta pomarańczowa', 'KO9', 'Koperta w kolorze pomarańczowym o wymiarach 114x162mm', 0.90, 'pomarańczowa'),
(4, 'Koperta morska', 'KO10', 'Koperta w kolorze morskim o wymiarach 114x162mm', 0.90, 'morska'),
(4, 'Koperta ciemno różowa', 'KO11', 'Koperta w kolorze ciemno różowym o wymiarach 110x220mm', 1.20, 'ciemno-różowa');
