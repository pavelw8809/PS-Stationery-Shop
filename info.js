/*
------------------------------------------------------------------------------------------------
                                *** WSB PROJECT - DOKUMENTACJA ***
------------------------------------------------------------------------------------------------
ver. 1.0 - wersja pierwotna
ver. 2.0 - IKONY: koszyk, plus, minus;  KOMPONENTY: ArtCart;  DATABASE: fixed version
------------------------------------------------------------------------------------------------

Podział aplikacji: Komponenty (components), Kontenery (containers), Czcionki (fonts), Obrazy/Ikony (Images)
Główne części wyświetlane: Header (Header.js), Body (Zmienny kontent w zależności od podstrony), Footer (element statyczny w App.js)
Główny plik aplikacji: src/App.js
Główny plik stylizacji ze zmiennymi dla preprocesora SASS: src/Main.scss

ZASADY TWORZENIA APLIKACJI:
    1) Do stylizacji tworzymy arkusze scss. Nie tworzymy css.
    2) Dla każdego komponentu tworzymy osobny arkusz scss.
    3) Każda osobna funkcjonalność powinna być osobnym komponentem.
    4) Wszystkie zdjęcia produktów wrzucamy do: src/images/images
    5) Wszystkie ikonu wrzucamy do: src/images/icons
    6) Stosujmy zmienne z pliku Main.scss we wszystkich innych plikach scss.

-------------------------------------------------------------------------------------------------

PRZYKŁAD PROSTEGO KOMPONENTU W REACT:

    Komponent wyświetlający dane, które do niego wyślemy

    App.js - plik główny, w którym montujemy komponent

    */ 
        import React, {useState} from 'React';                  // zawsze, w każdym pliku js musimy zaimportować główny komponent REACTA!  
        import DataComponent from './DataComponent' // importujemy komponent DataComponent

        function App() {                            // tworzymy główną funkcję dla aplikacji
            const [initInfo] = useState({           // poprzez funkcję usestate tworzymy stan początkowy aplikacji. Czyli to, co ma być wyświetlane domyślnie
                produkty: [                         // Wpiszmy sobie tutaj dane, które przekażemy do komponentu DataComponent
                    {artykul: 'Lalka dmuchana', producent: 'ABC', cena: 169.99},
                    {artykul: 'Wibrator', producent: 'PleasureGift', cena: 99.99}
                ]
            });

            // tutaj sobie zmapujemy tablicę InitState - jest to krótszy i wydajniejszy odpowiednik pętli ForEach
            let record;                             // inicjujemy pustą zmienną record    

            record = (                           // przypisujemy content do zmiennej record - poniżej inicjujemy nowego diva
                <div>    
                    {initInfo.produkty.map((r, index) => {    // mapujemy naszą tablicę initInfo! -> produkty z tablicy initInfo (r to zmienna dla pojedynczego rekordu, index to automatyczne indeksowanie rekordów. Te 2 argumenty muszą być zawsze.)
                        return(                               // i zwracamy kontent z tablicy wywołując funckę return.
                            <DataComponent                    // Dla każdego rekordu wywołujemy nasz komponent
                                artykul={r.artykul}           // Przekazujemy daną artykuł z initState.produkty
                                producent={r.producent}       // Przekazujemy daną producent z initState.produkty
                                cena={r.cena}                 // Przekazujemy daną cena z initState.produkty
                            />
                        )
                    })}
                </div>                                         // Teraz tylko pozostaje nam wywołanie obiektu record w głównym divie aplikacji :) - patrz linijka 64
            );                               

                                                    // przed return jest miejsce na inne funkcje.
            return(                                 // zwracamy to, co ma być wyświetlone dla użytkownika - tutaj wywołujemy komponenty, które nam wyświetlają treść
                                                    // wszystko musi być w głównym divie.
                <div>                               
                    <h1>Tutaj możemy wpisywać treść</h1>
                    <p>Możemy też wywoływać inne konponenty - poniżej wywołamy nasz DataComponent</p>
                    {record}
                </div> // O tutaj - linijkę wyżej (64) wywołujemy nasz obiekt rekord z wywołaniem komponentu dla naszych danych :)
            )
        }

        export default App;
    /*

    DataComponent.js - komponent wyświetlający nasze dane

    */ 
        import React from 'React';                  // w naszym kompoencie też musimy wywołać główny komponent REACTA!

        const datacomponent = (props) => {          // tworzymy funcję lambda ze zmienna/argumentem props! - tu będziemy przekazywać argumenty
            return (                                // poprzez funkcję return zwracamy kontent do wyświetlenia - dane wrzucamy w diva.
                <div>
                    <h2>ZWRACAMY DANE :)</h2>
                    <p>ARTYKUŁ: {props.artykul}</p>
                    <p>PRODUCENT: {props.producent}</p>
                    <p>CENA: {props.cena}</p>
                </div>
            )
        }

        export default datacomponent;               // Aby móc zaimportować komponent w App.js musisz wyeksportować komponent.
    /*

    A tak mniej więcej będzie wyglądał output:

    ***
        Tutaj możemy wpisywać treść
        Możemy też wywoływać inne konponenty - poniżej wywołamy nasz DataComponent
        ZWRACAMY DANE :)
        ARTYKUŁ: Lalka dmuchana
        PRODUCENT: ABC
        CENA: 169.99
        ZWRACAMY DANE :)
        ARTYKUŁ: Wibrator
        PRODUCENT: PleasureGift
        CENA: 99.99
    ***

------------------------------------------------------------------------------------------------
STRUKTURA I OPIS APLIKACJI
------------------------------------------------------------------------------------------------

0. GŁÓWNY KOMPONENT APLIKACJI

    - Główny plik aplikacji:    src/App.js
    - Główny arkusz styli:      src/Main.scss
    - Arkusz styli dla App.js:  src/App.scss    - tu stylizujemy wszystko co jest statyczne w App.js. Komponenty stylizujemy w oddzilnych plikach scss.

1. KOMPONENTY - src/components

    - Folder dla komponentów funkcjonalnych.
    - Są to elementy interaktywne, które odpowiedzialne są za funkcjonowanie elementu, będącego częścią kontenerów.

    a. ArtCard.js -> Karta produktu
        - Komponent odpowiedzialny za wyświetlanie poszczególnych atykułów.
        - Opakowany w niego będzie każdy rekord z query odnośnie artykułów z danej kategorii.
        - Dla każdego itema z query wywołujemy ArtCard z odpowiednimi argumentami (props)
        - Dotyczy kontenerów: SEnvelopes, SHygienic, SOffice, SPackages, SPaper

    b. CartBtn.js -> Przyscisk koszyka
        - Przycisk w prawym górnym rogu kierujący do podstrony koszyka (komponent jeszcze nie stworzony)

    c. Header.js -> Banner aplikacji
        - Baner aplikacji wyświetlający się na wszystkich stronach aplikacji. Jeden z komponentów, z których zbudowana jest aplikacja.
        - Częsci bannera: logo, searching bar, strefa usera (przycisk Zaloguj, przycisk Koszyka - CartBtn)

    - Komponenty do stworzenia: Cart.js - strona z koszykiem

    - Komponenty do usunięcia: 
        * Home.js
        * ImageList.js. Nie są więcej potrzebne.


2. KONTENERY - src/containers

    a) About.js -> Strona z informacją o firmie
        - Do wypełnienia o treść statyczną z informacją o firmie
    
    b) Contact.js -> Strona z informacją o kontakcie
        - Do wypełniania o treść statyczną z informacją o firmie
        - Możemy też wrzucić formularz kontaktowy
    
    c) Index.js -> Strona startowa
        - Główna strona aplikacji po wpisaniu adresu.
        - Slajder z prezentacją produktów/zdjęć/firmy
        - Może jakieś randomowe produkty do wyświetlenia - query

    d) Notfound.js -> Strona pokazująca błąd 404
        - Strona na którą zostanie przekierowany użytkownik podczas wpisania złej podstrony.

    e) Offer.js -> Informacja o ofercie sklepu
        - Ogólna informacja o asortymencie
        - Do wypełnienia o treść statyczną

    f) Orders.js -> Informacja o zamówieniu
        - Informacje o zamówieniach
        - Przystępny opis dla klienta w jaki sposób zrealizowane zostanie zamówienie - Instrukcja
        - Regulamin sklepu
        - Do wypełnienia treścią informacyjną statyczną

    g) ShopService.js -> Informacja o usługach sklepu
        - Informacje o usługach sklepu. Projekty graficzne itp.
        - Może formularz kontaktowy gdzie można wrzucić dane do wyceny?

    h) SEnvelopes -> Podstrona sklepu - Koperty
        - Strona wyświetlająca produkty z kategorii Koperty
        - Trzeba wywoływać odpowiednie query w ComponentDidMount() -> https://pl.reactjs.org/docs/react-component.html#componentdidmount
        - Każdy rekord z zapytania wrzucamy w komponent ArtCard

    i) SHygienic -> Podstrona sklepu -  Srodki higieniczne
        - Strona wyświetlająca produkty z kategorii Środki Higieniczne
        - Trzeba wywoływać odpowiednie query w ComponentDidMount() -> https://pl.reactjs.org/docs/react-component.html#componentdidmount
        - Każdy rekord z zapytania wrzucamy w komponent ArtCard

    j) SOffice -> Podstrona sklepu - Produkty piśmiennicze
        - Strona wyświetlająca produkty z kategorii Produkty Piśmiennicze
        - Trzeba wywoływać odpowiednie query w ComponentDidMount() -> https://pl.reactjs.org/docs/react-component.html#componentdidmount
        - Każdy rekord z zapytania wrzucamy w komponent ArtCard
    
    h) SPackages -> Podstona sklepu - Kartony i pudełka
        - Strona wyświetlająca produkty z kategorii Kartony i pudełka
        - Trzeba wywoływać odpowiednie query w ComponentDidMount() -> https://pl.reactjs.org/docs/react-component.html#componentdidmount
        - Każdy rekord z zapytania wrzucamy w komponent ArtCard

    i) SPaper -> Podstrona sklepu - Artykuły papiernicze
        - Strona wyświetlająca produkty z kategorii Artykuły papiernicze
        - Trzeba wywoływać odpowiednie query w ComponentDidMount() -> https://pl.reactjs.org/docs/react-component.html#componentdidmount
        - Każdy rekord z zapytania wrzucamy w komponent ArtCard

    - Elementy do usunięcia: 
        * Catalog.js - Katalog produktów raczej nie będzie już potrzebny. Mamy przecież sklep.


    3. CZCIONKI - src/fonts

        - Tutaj trzymane są fonty używane w projekcie

    
    4. OBRAZY - src/images

        2 podfoldery
        - src/images/icons -> tu są trzymane wszystkie ikony dla aplikacji, loga, itp.
        - src/images/images -> tu są trzymane wszystkie zdjęcia artykułów do wyświetlenia
    */