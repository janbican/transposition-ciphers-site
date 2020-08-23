<template>
  <div class="description">
    <p>
      Základní transpoziční šifra. Otevřený text se zapisuje do tabulky, přičemž
      šifrovaný se získává přepsáním po sloupcích. Počet sloupců a pořadí, ve
      kterém jsou přepisovány, je určeno klíčem.
    </p>

    <p>
      Klíčem může být libovolné slovo. Jeho délka určuje počet sloupců tabulky.
      <strong>Permutační vyčíslení</strong> pak určuje pořadí, v jakém jsou
      sloupce přepisovány do šifrovaného textu.
    </p>

    <p>
      Permutační vyčíslení přiřazuje každému písmenu klíče číslo reprezentující
      pořadí podle abecedy.
    </p>

    <b-row class="justify-content-md-center">
      <b-col md="5">
        <b-table-simple small fixed responsive caption-top class="text-center">
          <caption>
            Permutační vyčíslení pro klíč "slovo"
          </caption>
          <b-thead>
            <b-tr>
              <b-th variant="secondary">s</b-th>
              <b-th variant="secondary">l</b-th>
              <b-th variant="secondary">o</b-th>
              <b-th variant="secondary">v</b-th>
              <b-th variant="secondary">o</b-th>
            </b-tr>
            <b-tr>
              <b-th variant="dark">4</b-th>
              <b-th variant="dark">1</b-th>
              <b-th variant="dark">2</b-th>
              <b-th variant="dark">5</b-th>
              <b-th variant="dark">3</b-th>
            </b-tr>
          </b-thead>
        </b-table-simple>
      </b-col>
    </b-row>

    <h4>Postup zašifrování</h4>
    <p><strong>otevřený text</strong>: "Byli jste odhaleni, utečte."</p>

    <p>
      S otevřeným textem se pracuje bez mezer a interpunkce, zpravidla je psán
      malými písmeny, tedy "bylijsteodhaleniutecte".
    </p>

    <p>1. Zvolíme klíč. Například "slovo".</p>
    <p>2. Určíme permutační vyčíslení (viz výše)</p>
    <p>
      3. Otevřený text zapíšeme do tabulky, v jejímž záhlaví máme klíč a jeho
      permutační vyčíslení. Počet sloupců tabulky je určen délkou klíče, v našem
      případě budeme mít pět sloupců. Otevřený text píšeme po řádcích - první
      řádek bude vypadat následovně:
    </p>

    <b-row class="justify-content-md-center">
      <b-col md="5">
        <b-table-simple small fixed responsive caption-top class="text-center">
          <b-thead>
            <b-tr>
              <b-th variant="secondary">s</b-th>
              <b-th variant="secondary">l</b-th>
              <b-th variant="secondary">o</b-th>
              <b-th variant="secondary">v</b-th>
              <b-th variant="secondary">o</b-th>
            </b-tr>
            <b-tr>
              <b-th variant="dark">4</b-th>
              <b-th variant="dark">1</b-th>
              <b-th variant="dark">2</b-th>
              <b-th variant="dark">5</b-th>
              <b-th variant="dark">3</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>b</b-td>
              <b-td>y</b-td>
              <b-td>l</b-td>
              <b-td>i</b-td>
              <b-td>j</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>

    <p>Celá tabulka:</p>

    <b-row class="justify-content-md-center">
      <b-col md="5">
        <b-table-simple small fixed responsive caption-top class="text-center">
          <b-thead>
            <b-tr>
              <b-th variant="secondary">s</b-th>
              <b-th variant="secondary">l</b-th>
              <b-th variant="secondary">o</b-th>
              <b-th variant="secondary">v</b-th>
              <b-th variant="secondary">o</b-th>
            </b-tr>
            <b-tr>
              <b-th variant="dark">4</b-th>
              <b-th variant="dark">1</b-th>
              <b-th variant="dark">2</b-th>
              <b-th variant="dark">5</b-th>
              <b-th variant="dark">3</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>b</b-td>
              <b-td>y</b-td>
              <b-td>l</b-td>
              <b-td>i</b-td>
              <b-td>j</b-td>
            </b-tr>
            <b-tr>
              <b-td>s</b-td>
              <b-td>t</b-td>
              <b-td>e</b-td>
              <b-td>o</b-td>
              <b-td>d</b-td>
            </b-tr>
            <b-tr>
              <b-td>h</b-td>
              <b-td>a</b-td>
              <b-td>l</b-td>
              <b-td>e</b-td>
              <b-td>n</b-td>
            </b-tr>
            <b-tr>
              <b-td>i</b-td>
              <b-td>u</b-td>
              <b-td>t</b-td>
              <b-td>e</b-td>
              <b-td>c</b-td>
            </b-tr>
            <b-tr>
              <b-td>t</b-td>
              <b-td>e</b-td>
              <b-td></b-td>
              <b-td></b-td>
              <b-td></b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>

    <p>
      4. Šifrovaný text získáme přepsáním sloupců v pořadí určeném permutačním
      vyčíslením. Začneme tedy druhým sloupcem (vyznačen). A pokračujeme
      dalšími.
    </p>

    <b-row class="justify-content-md-center">
      <b-col md="5">
        <b-table-simple small fixed responsive caption-top class="text-center">
          <b-thead>
            <b-tr>
              <b-th variant="secondary">s</b-th>
              <b-th variant="secondary">l</b-th>
              <b-th variant="secondary">o</b-th>
              <b-th variant="secondary">v</b-th>
              <b-th variant="secondary">o</b-th>
            </b-tr>
            <b-tr>
              <b-th variant="dark">4</b-th>
              <b-th variant="dark">1</b-th>
              <b-th variant="dark">2</b-th>
              <b-th variant="dark">5</b-th>
              <b-th variant="dark">3</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>b</b-td>
              <b-td class="marked">y</b-td>
              <b-td>l</b-td>
              <b-td>i</b-td>
              <b-td>j</b-td>
            </b-tr>
            <b-tr>
              <b-td>s</b-td>
              <b-td class="marked">t</b-td>
              <b-td>e</b-td>
              <b-td>o</b-td>
              <b-td>d</b-td>
            </b-tr>
            <b-tr>
              <b-td>h</b-td>
              <b-td class="marked">a</b-td>
              <b-td>l</b-td>
              <b-td>e</b-td>
              <b-td>n</b-td>
            </b-tr>
            <b-tr>
              <b-td>i</b-td>
              <b-td class="marked">u</b-td>
              <b-td>t</b-td>
              <b-td>e</b-td>
              <b-td>c</b-td>
            </b-tr>
            <b-tr>
              <b-td>t</b-td>
              <b-td class="marked">e</b-td>
              <b-td></b-td>
              <b-td></b-td>
              <b-td></b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>

    <p>
      <strong>šifrovaný text</strong> (zpravidla se píše velkými písmeny):
      "<span class="marked">YTAUE</span>LELTJDNCBSHITIOEE"
    </p>

    <br />

    <h4>Postup dešifrování</h4>
    <p><strong>šifrovaný text</strong>: "YTAUELELTJDNCBSHITIOEE"</p>
    <p><strong>klíč</strong>: "slovo"</p>

    <p>1. Určíme permutační vyčíslení klíče (viz výše)</p>
    <p>
      2. Délka klíče určuje počet sloupců tabulky. Počet řádků vypočítáme
      vydělením počtu znaků šifrovaného textu délkou klíče, přičemž výsledek
      zaokrouhlíme na celé číslo směrem nahoru. V našem případě:
    </p>
    <p><strong>délka šifrovaného textu</strong>: 22</p>
    <p><strong>délka klíče</strong>: 5</p>
    <p>22 / 5 = 4.4 - po zaokrouhlení dostáváme 5 řádků</p>

    <p>
      3. Dále je třeba určit počet úplných sloupců. To provedeme podle
      následujícího vzorce:
    </p>
    <p>{délka šifrovaného textu} - ({délka klíče} * [{počet řádků} - 1])</p>
    <p>
      V našem případě je výsledek 2 úplné sloupce. Je třeba podotknout, že se
      jedná o počet úplných sloupců od počátku klíče, permutační vyčíslení
      nehraje v tomto směru žádnou roli.
    </p>

    <p>
      4. Šifrovaný text zapíšeme posutpně do sloupců v pořadí daném permutačním
      vyčíslením, přičemž dbáme na (ne)úplnost sloupců (úplný bude mít pět,
      neúplný čtyři písmena). Po prvním zapsaném sloupci bude vypadat tabulka
      následovně:
    </p>
    <p>
      <strong>šifrovaný text</strong>: "<span class="marked">YTAUE</span
      >LELTJDNCBSHITIOEE"
    </p>

    <b-row class="justify-content-md-center">
      <b-col md="5">
        <b-table-simple small fixed responsive caption-top class="text-center">
          <b-thead>
            <b-tr>
              <b-th variant="secondary">s</b-th>
              <b-th variant="secondary">l</b-th>
              <b-th variant="secondary">o</b-th>
              <b-th variant="secondary">v</b-th>
              <b-th variant="secondary">o</b-th>
            </b-tr>
            <b-tr>
              <b-th variant="dark">4</b-th>
              <b-th variant="dark">1</b-th>
              <b-th variant="dark">2</b-th>
              <b-th variant="dark">5</b-th>
              <b-th variant="dark">3</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td></b-td>
              <b-td class="marked">y</b-td>
              <b-td></b-td>
              <b-td></b-td>
              <b-td></b-td>
            </b-tr>
            <b-tr>
              <b-td></b-td>
              <b-td class="marked">t</b-td>
              <b-td></b-td>
              <b-td></b-td>
              <b-td></b-td>
            </b-tr>
            <b-tr>
              <b-td></b-td>
              <b-td class="marked">a</b-td>
              <b-td></b-td>
              <b-td></b-td>
              <b-td></b-td>
            </b-tr>
            <b-tr>
              <b-td></b-td>
              <b-td class="marked">u</b-td>
              <b-td></b-td>
              <b-td></b-td>
              <b-td></b-td>
            </b-tr>
            <b-tr>
              <b-td></b-td>
              <b-td class="marked">e</b-td>
              <b-td></b-td>
              <b-td></b-td>
              <b-td></b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>

    <p>Celá tabulka:</p>

    <b-row class="justify-content-md-center">
      <b-col md="5">
        <b-table-simple small fixed responsive caption-top class="text-center">
          <b-thead>
            <b-tr>
              <b-th variant="secondary">s</b-th>
              <b-th variant="secondary">l</b-th>
              <b-th variant="secondary">o</b-th>
              <b-th variant="secondary">v</b-th>
              <b-th variant="secondary">o</b-th>
            </b-tr>
            <b-tr>
              <b-th variant="dark">4</b-th>
              <b-th variant="dark">1</b-th>
              <b-th variant="dark">2</b-th>
              <b-th variant="dark">5</b-th>
              <b-th variant="dark">3</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>b</b-td>
              <b-td>y</b-td>
              <b-td>l</b-td>
              <b-td>i</b-td>
              <b-td>j</b-td>
            </b-tr>
            <b-tr>
              <b-td>s</b-td>
              <b-td>t</b-td>
              <b-td>e</b-td>
              <b-td>o</b-td>
              <b-td>d</b-td>
            </b-tr>
            <b-tr>
              <b-td>h</b-td>
              <b-td>a</b-td>
              <b-td>l</b-td>
              <b-td>e</b-td>
              <b-td>n</b-td>
            </b-tr>
            <b-tr>
              <b-td>i</b-td>
              <b-td>u</b-td>
              <b-td>t</b-td>
              <b-td>e</b-td>
              <b-td>c</b-td>
            </b-tr>
            <b-tr>
              <b-td>t</b-td>
              <b-td>e</b-td>
              <b-td></b-td>
              <b-td></b-td>
              <b-td></b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>

    <p>5. Otevřený text získáme přepsáním řádků. V našem případě:</p>
    <p><strong>otevřený text</strong>: "bylijsteodhaleniutecte"</p>

    <br />

    <p>
      Popsána byla varianta s neúplnou tabulkou - poslední řádek může být
      neúplný. Tato metoda je odolnější vůči prolomení. Pokud bychom zvolili
      úplnou tabulku, při zašifrování bychom do prázdných políček doplnili
      vybrané písmenko, zpravidla méně používané (např. x).
    </p>
  </div>
</template>

<script>
export default {
  name: 'ColumnarDescription'
}
</script>

<style scoped>
.marked {
  background-color: #9bc467;
}
</style>
