<template>
  <div class="description">
    <p>
      Otevřený text se u Rail Fence šifry píše průběžně na řádky pod sebou.
      Jakmile se při zapisování dostaneme na spodní okraj, pokračujeme v
      zapisování směrem nahoru. Po každém písmenu se přesuneme o jedno pozici
      doprava. Šifrovaný text odpovídá řádkům takto zapsaného otevřeného textu.
    </p>

    <p>Klíč představuje počet řádků, které budou pro zašifrování použity.</p>

    <h5>Příklad zašifrování</h5>
    <p><strong>otevřený text</strong>: "Nepřítel nás odhalil."</p>
    <p><strong>klíč (počet řádků)</strong>: 3</p>
    <p>
      S otevřeným textem se pracuje bez mezer a interpunkce, zpravidla je psán
      malými písmeny, tedy "nepritelnasodhalil".
    </p>

    <p>Vytvoříme si prázdnou mřížku se třemi řádky:</p>

    <div class="encryption-grid">
      <table>
        <tbody>
          <tr>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>Následně ji zaplníme otevřeným textem:</p>

    <div class="encryption-grid">
      <table>
        <tbody>
          <tr class="top-row">
            <td class="marked">n</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">i</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">n</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">d</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">i</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="marked">e</td>
            <td></td>
            <td class="marked">r</td>
            <td></td>
            <td class="marked">t</td>
            <td></td>
            <td class="marked">l</td>
            <td></td>
            <td class="marked">a</td>
            <td></td>
            <td class="marked">o</td>
            <td></td>
            <td class="marked">h</td>
            <td></td>
            <td class="marked">l</td>
            <td></td>
            <td class="marked">l</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="marked">p</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">e</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">s</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">a</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>Šifrovaný text získáme přepsáním řádků:</p>
    <p>
      <strong>šifrovaný text</strong> (zpravidla se píše velkými písmeny):
      "<span class="marked-cipher">NINDI</span>ERTLAOHLLPESA"
    </p>

    <br />

    <h5>Příklad dešifrování</h5>
    <p><strong>šifrovaný text</strong>: "NINDIERTLAOHLLPESA"</p>
    <p><strong>klíč (počet řádků)</strong>: 3</p>

    <p>Šifrovaný text má 18 písmen, připravíme si mřížku:</p>

    <div class="encryption-grid">
      <table>
        <tbody>
          <tr>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>Šifrovaný text doplňujeme po řádcích, začneme s prvním:</p>
    <p>
      <strong>šifrovaný text</strong>: "<span class="marked-cipher">NINDI</span
      >ERTLAOHLLPESA"
    </p>

    <div class="encryption-grid">
      <table>
        <tbody>
          <tr class="top-row">
            <td class="marked">n</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">i</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">n</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">d</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">i</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td class="marked">-</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">-</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>Doplníme zbytek:</p>

    <div class="encryption-grid">
      <table>
        <tbody>
          <tr>
            <td class="marked">n</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">i</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">n</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">d</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">i</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="marked">e</td>
            <td></td>
            <td class="marked">r</td>
            <td></td>
            <td class="marked">t</td>
            <td></td>
            <td class="marked">l</td>
            <td></td>
            <td class="marked">a</td>
            <td></td>
            <td class="marked">o</td>
            <td></td>
            <td class="marked">h</td>
            <td></td>
            <td class="marked">l</td>
            <td></td>
            <td class="marked">l</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="marked">p</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">e</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">s</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="marked">a</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>Otevřený text získáme střídavým přechodem po řádcích mřížky.</p>
    <p><strong>otevřený text</strong>: "nepritelnasodhalil"</p>

    <br />

    <p>
      Pokud jsou některé řádky neúplné, je možné je doplnit například písmenem
      X.
    </p>

    <p>
      Rail Fence šifru lze prolomit hrubou silou - stačí postupně zkoušet počet
      řádků. Maximální počet řádků je limitován délkou šifrovaného textu. Jde o
      velmi jednoduchou šifru, která není příliš bezpečná.
    </p>
  </div>
</template>

<style scoped>
.encryption-grid {
  text-align: center;
}
.top-row .marked,
.marked-cipher {
  background-color: #9bc467;
}
</style>
