# programming-exercise-generator
Program ktory umozliwia generawanie zadanek programistycznych różnych typów

* zadanka z html i css - tworzenie prostych szablonow
* zadanka zaawansowane z Javascript - tworzenie funkcji z biblioteki underscore



## Zadanka HTML + CSS

* generowanie layoutow
* kolumny, rzedy
* typowa stronka ma stopke, naglowek i miejsce na tresc
* losowanie poziomu zagniezdzen (min 2, max 5)
* na kazdym poziomie zagniezdzenia losowanie rozej liczby elementow
* elementy moga byc poziomo lub pionowo

Przykladowe zadanie(wylosowano 3 poziomy zagniezdzenia)

0 element zawiera 3 elementy pionowe.
  1 element zawiera 2 elementy pionowe
    1 element 2 elementy poziome
       1 element nie zawiera zadnego elementu
       2 element nie zawiera zadnego elementu
    2 element zawiera 1 element pionowo
       1 element
  2 element nie zawiera zadnego elementu
  3 element zawiera 3 elementy pionowe
    1 element zawiera 2 elementy poziome
      1 element zawiera 1 element pionowy
        1 element
      2 element zawiera 3 elementy poziome
        1 element
        2 element
        3 element
     2 element zawiera 0 elementow
     3 element zawiera 2 elementy poziome
        1 element
        2 element


## Plan rozwoju

* zapisywanie przeszlych zadan w bazie danych
* cos w rodzaju fiszek dla programowania
* mozemy podac dowolny poziom zagniezdzania(rekurencja)
